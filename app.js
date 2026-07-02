(function() {
  'use strict';

  var state = {
    questions: (typeof QUESTIONS !== 'undefined') ? QUESTIONS : [],
    indices: [],
    current: 0,
    revealed: false,
    selected: null,
    fillValue: '',
    progress: loadProgress(),
    pendingImport: null
  };

  var typeNames = { single:'单选题', multiple:'多选题', fill:'填空题', judge:'判断题', qa:'问答题' };

  function loadProgress() {
    try { var s = localStorage.getItem('exam-progress'); if (s) return JSON.parse(s); } catch(e) {}
    return { known:{}, wrong:{}, starred:{} };
  }
  function saveProgress() {
    try { localStorage.setItem('exam-progress', JSON.stringify(state.progress)); } catch(e) {}
  }

  function escapeHtml(s) {
    return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }
  function escapeAttr(s) { return escapeHtml(s).replace(/'/g,'&#39;'); }

  function shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = arr[i]; arr[i] = arr[j]; arr[j] = t;
    }
    return arr;
  }

  // ==================== FILE READING ====================

  function readFile(file) {
    var name = file.name.toLowerCase();
    var status = document.getElementById('fileStatus');
    status.className = 'file-status';
    status.textContent = '正在读取：' + file.name + ' ...';

    if (name.endsWith('.txt')) {
      var reader = new FileReader();
      reader.onload = function(e) {
        var text = e.target.result;
        // Check for garbled text (UTF-8 read of GBK produces replacement chars)
        if (text.indexOf('\ufffd') !== -1) {
          // Re-read as GBK
          var reader2 = new FileReader();
          reader2.onload = function(e2) { onFileParsed(e2.target.result); };
          reader2.onerror = function() { onFileParsed(text); };
          reader2.readAsText(file, 'GBK');
        } else {
          onFileParsed(text);
        }
      };
      reader.onerror = function() { onFileError('读取文件失败'); };
      reader.readAsText(file, 'UTF-8');
    } else if (name.endsWith('.docx')) {
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/mammoth/1.6.0/mammoth.browser.min.js', function() {
        var reader = new FileReader();
        reader.onload = function(e) {
          window.mammoth.extractRawText({ arrayBuffer: e.target.result })
            .then(function(r) { onFileParsed(r.value); })
            .catch(function(err) { onFileError('解析DOCX失败：' + err.message); });
        };
        reader.readAsArrayBuffer(file);
      }, function() { onFileError('无法加载DOCX解析库，请检查网络'); });
    } else if (name.endsWith('.pdf')) {
      loadPdf(file);
    } else if (name.endsWith('.doc')) {
      onFileError('旧版 .doc 格式不支持，请另存为 .docx/.txt 或使用粘贴文本方式');
    } else {
      onFileError('不支持的文件格式：' + file.name);
    }
  }

  function loadPdf(file) {
    var status = document.getElementById('fileStatus');
    status.className = 'file-status';
    status.textContent = '正在加载PDF解析库...';
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js', function() {
      window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
      var reader = new FileReader();
      reader.onload = function(e) {
        window.pdfjsLib.getDocument({ data: e.target.result }).promise.then(function(pdf) {
          var allText = [], pageNum = 0, total = pdf.numPages;
          function next() {
            if (pageNum >= total) { onFileParsed(allText.join('\n\n')); return; }
            pageNum++;
            status.textContent = '读取PDF：' + pageNum + '/' + total + ' ...';
            pdf.getPage(pageNum).then(function(p) { return p.getTextContent(); }).then(function(c) {
              allText.push(c.items.map(function(item){ return item.str; }).join(' '));
              next();
            }).catch(function() { onFileError('读取PDF第' + pageNum + '页失败'); });
          }
          next();
        }).catch(function(err) { onFileError('解析PDF失败'); });
      };
      reader.readAsArrayBuffer(file);
    }, function() { onFileError('无法加载PDF解析库，请检查网络'); });
  }

  function loadScript(src, onload, onerror) {
    if (document.querySelector('script[src="' + src + '"]')) { onload(); return; }
    var s = document.createElement('script');
    s.src = src; s.onload = onload; s.onerror = onerror || function(){};
    document.head.appendChild(s);
  }

  function onFileParsed(text) {
    var status = document.getElementById('fileStatus');
    status.className = 'file-status success';
    status.textContent = '文件读取成功，正在解析...';
    var questions = parseQuestions(text);
    showPreview(questions);
  }

  function onFileError(msg) {
    var status = document.getElementById('fileStatus');
    status.className = 'file-status error';
    status.textContent = msg;
  }

  // ==================== TEXT PARSER ====================

  function parseQuestions(text) {
    if (!text || !text.trim()) return [];
    text = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n').replace(/\n{3,}/g, '\n\n');

    // Pre-process: merge standalone option letter lines with following content
    // e.g. "A\nHe doesn't like..." -> "A. He doesn't like..."
    var rawLines = text.split('\n');
    var merged = [];
    for (var i = 0; i < rawLines.length; i++) {
      var lt = rawLines[i].trim();
      // Check if this line is a standalone option letter (A, B, C, D, a, b, c, d)
      if (/^[A-Da-d]$/.test(lt) && i + 1 < rawLines.length) {
        var nextLine = rawLines[i + 1].trim();
        if (nextLine && !/^[A-Da-d]$/.test(nextLine) && !/^(?:答案|参考答案|标准答案|正确答案|解析|Answer)/i.test(nextLine)) {
          merged.push(lt + '. ' + nextLine);
          i++;
          continue;
        }
      }
      // Also merge standalone question number with next line content
      // e.g. "1\nWhat does he mean?" -> "1. What does he mean?"
      if (/^\d{1,4}$/.test(lt) && i + 1 < rawLines.length) {
        var nextLine = rawLines[i + 1].trim();
        if (nextLine && !/^\d{1,4}$/.test(nextLine) && !/^[A-Da-d]$/.test(nextLine) && !/^(?:答案|参考答案|标准答案|正确答案|解析|Answer)/i.test(nextLine)) {
          merged.push(lt + '. ' + nextLine);
          i++;
          continue;
        }
      }
      merged.push(rawLines[i]);
    }
    text = merged.join('\n');

    var blocks = [], lines = text.split('\n'), current = [];
    for (var i = 0; i < lines.length; i++) {
      var t = lines[i].trim();
      if (!t) { if (current.length) current.push(''); continue; }
      var isQ = /^\d{1,4}\s*[.、)）.．\]:：]?\s*$/.test(t) || /^\d{1,4}\s*[.、)）.．\]:：]\s+/.test(t) || /^[(（]\d{1,4}\s*[)）]\s*/.test(t) || /^第\s*\d{1,4}\s*题/.test(t);
      if (isQ && current.length) { blocks.push(current.join('\n')); current = []; }
      current.push(t);
    }
    if (current.length) blocks.push(current.join('\n'));

    var questions = [];
    for (var b = 0; b < blocks.length; b++) {
      var q = parseBlock(blocks[b], b);
      if (q) questions.push(q);
    }
    return questions;
  }

  function parseBlock(block, idx) {
    var lines = block.split('\n');
    var filtered = [];
    for (var i = 0; i < lines.length; i++) {
      if (lines[i].trim()) filtered.push(lines[i].trim());
    }
    if (!filtered.length) return null;

    var q = { id:'imp_'+Date.now()+'_'+idx, type:'qa', category:'', difficulty:1, question:'', options:[], answer:'', explanation:'' };
    var qLines = [], optLines = [], ansBuf = [], expLines = [];
    var inAns = false, inExp = false, category = '';

    for (var i = 0; i < filtered.length; i++) {
      var line = filtered[i];

      var cm = line.match(/^(?:分类|章节|知识点)[：:]\s*(.+)/);
      if (cm) { category = cm[1].trim(); continue; }
      var dm = line.match(/^难度[：:]\s*(.+)/);
      if (dm) { var d = dm[1].trim(); q.difficulty = /难|3/i.test(d) ? 3 : /中|2/i.test(d) ? 2 : 1; continue; }

      if (/^(?:解析|说明|分析)[：:]/.test(line)) { inExp = true; inAns = false; expLines.push(line.replace(/^[^：:]+[：:]\s*/, '')); continue; }
      if (inExp) { expLines.push(line); continue; }

      if (/^(?:答案|参考答案|标准答案|正确答案|Answer)[：:]\s*/i.test(line)) {
        inAns = true; inExp = false;
        var ansContent = line.replace(/^(?:答案|参考答案|标准答案|正确答案|Answer)[：:]\s*/i, '').trim();
        if (ansContent) ansBuf.push(ansContent);
        continue;
      }
      if (inAns) {
        if (/^(?:解析|说明|分析)[：:]/.test(line)) { inAns = false; }
        else if (/^[A-Za-z]\s*[.、)）.．]/.test(line) || /^[(（]\s*[A-Za-z]\s*[)）]/.test(line)) { inAns = false; }
        else { ansBuf.push(line); continue; }
      }

      if (/^[A-Za-z]\s*[.、)）.．]\s*/.test(line) || /^[(（]\s*[A-Za-z]\s*[)）]\s*/.test(line)) { optLines.push(line); continue; }

      // Standalone answer line: just a letter like "A" or "AB" or "对" etc.
      if (!inAns && !inExp && optLines.length > 0 && qLines.length > 0) {
        var cleanAns = line.replace(/[.、)）.．\s]+$/, '').trim();
        if (/^[A-Za-z]{1,4}$/.test(cleanAns)) {
          ansBuf.push(cleanAns);
          continue;
        }
        if (/^(对|正确|√|错|错误|×)$/.test(cleanAns)) {
          ansBuf.push(cleanAns);
          continue;
        }
      }

      qLines.push(line);
    }

    var answerText = ansBuf.join(' ').trim();
    var first = qLines[0] || '';
    q.question = first.replace(/^\d{1,4}\s*[.、)）.．\]:：]\s*|^\(?\d{1,4}\)?\s*[.、)）.．\]:：]?\s*|^第\s*\d{1,4}\s*题\s*[.、:：]?\s*/, '').trim();
    if (qLines.length > 1) q.question += '\n' + qLines.slice(1).join('\n');
    q.question = q.question.trim();
    if (category) q.category = category;

    if (optLines.length) {
      q.options = optLines.map(function(l) { return l.replace(/^[A-Za-z]\s*[.、)）.．]\s*/, '').replace(/^[(（]\s*[A-Za-z]\s*[)）]\s*/, '').trim(); });
    }
    q.explanation = expLines.join('\n').trim();
    q.answer = answerText;

    if (optLines.length) {
      var ans = answerText.toUpperCase().replace(/[^A-Z]/g, '');
      if (ans.length > 1) { q.type = 'multiple'; q.answer = ans.split('').map(function(c){return c.charCodeAt(0)-65;}); }
      else if (ans.length === 1) { q.type = 'single'; q.answer = ans.charCodeAt(0) - 65; }
      else { q.type = 'single'; q.answer = 0; }
    } else if (/^(对|正确|√|是|T|True|✔|✓)$/i.test(answerText.trim()) || /^(错|错误|×|否|F|False|✘|✗)$/i.test(answerText.trim())) {
      q.type = 'judge'; q.answer = /^(对|正确|√|是|T|True|✔|✓)$/i.test(answerText.trim());
    } else if (/_{2,}|【\s*】|（\s*）/.test(q.question)) {
      q.type = 'fill'; q.answer = answerText;
    } else {
      q.type = 'qa'; q.answer = answerText;
    }

    q._valid = true;
    // Only invalid if choice question has no options
    if ((q.type === 'single' || q.type === 'multiple') && (!q.options || q.options.length < 2)) q._valid = false;
    // If question text is empty, use a placeholder
    if (!q.question.trim()) q.question = '（题目文本缺失）';

    return q;
  }

  // ==================== PREVIEW ====================

  function showPreview(questions) {
    state.pendingImport = questions;
    var area = document.getElementById('previewArea');
    var list = document.getElementById('previewList');
    var count = document.getElementById('previewCount');

    if (!questions.length) {
      document.getElementById('fileStatus').className = 'file-status error';
      document.getElementById('fileStatus').textContent = '未能解析出题目，请检查格式或使用粘贴文本';
      area.style.display = 'none';
      return;
    }

    var valid = 0;
    for (var i = 0; i < questions.length; i++) if (questions[i]._valid) valid++;
    document.getElementById('fileStatus').className = 'file-status success';
    document.getElementById('fileStatus').textContent = '解析完成：共 ' + questions.length + ' 题，' + valid + ' 题有效';

    count.textContent = questions.length + ' 题';
    list.innerHTML = '';

    for (var i = 0; i < questions.length; i++) {
      var q = questions[i];
      var ansStr = '';
      if (q.type === 'single' && typeof q.answer === 'number') ansStr = String.fromCharCode(65+q.answer);
      else if (q.type === 'multiple' && Array.isArray(q.answer)) ansStr = q.answer.map(function(a){return String.fromCharCode(65+a);}).join('');
      else if (q.type === 'judge') ansStr = q.answer ? '正确' : '错误';
      else ansStr = String(q.answer).substring(0,100);

      var html = '<span class="preview-item-type">' + (typeNames[q.type]||q.type) + '</span>';
      html += '<div class="preview-item-q">' + (i+1) + '. ' + escapeHtml(q.question.substring(0,120)) + '</div>';
      if (q.options && q.options.length) {
        html += '<div class="preview-item-opts">';
        for (var j = 0; j < q.options.length; j++) html += String.fromCharCode(65+j) + '. ' + escapeHtml(q.options[j]) + '  ';
        html += '</div>';
      }
      html += '<div class="preview-item-ans">答案：' + escapeHtml(ansStr) + '</div>';
      var div = document.createElement('div');
      div.className = 'preview-item';
      div.innerHTML = html;
      list.appendChild(div);
    }

    area.style.display = 'block';
  }

  function doConfirmImport() {
    if (!state.pendingImport || !state.pendingImport.length) return;
    var valid = [];
    for (var i = 0; i < state.pendingImport.length; i++) {
      if (state.pendingImport[i]._valid) valid.push(state.pendingImport[i]);
    }
    if (!valid.length) { alert('没有有效题目'); return; }
    state.questions = valid;
    state.current = 0; state.revealed = false; state.selected = null; state.fillValue = '';
    state.pendingImport = null;
    buildCategoryFilter(); buildIndex(); render();
    document.getElementById('previewArea').style.display = 'none';
    document.getElementById('fileStatus').className = 'file-status hidden';
    document.getElementById('fileInput').value = '';
    document.getElementById('pasteArea').value = '';
    alert('成功导入 ' + valid.length + ' 道题目！');
  }

  // ==================== INDEX / FILTER ====================

  function buildIndex() {
    var search = document.getElementById('searchInput').value.toLowerCase().trim();
    var mode = document.getElementById('filterMode').value;
    var cat = document.getElementById('categoryFilter').value;
    state.indices = [];
    for (var i = 0; i < state.questions.length; i++) {
      var q = state.questions[i];
      if (mode === 'known' && !state.progress.known[q.id]) continue;
      if (mode === 'wrong' && !state.progress.wrong[q.id]) continue;
      if (mode === 'starred' && !state.progress.starred[q.id]) continue;
      if (mode === 'unknown' && state.progress.known[q.id]) continue;
      if (cat && q.category !== cat) continue;
      if (search) {
        var hay = (q.question + ' ' + (q.options?q.options.join(' '):'') + ' ' + (q.answer||'')).toLowerCase();
        if (hay.indexOf(search) === -1) continue;
      }
      state.indices.push(i);
    }
  }

  function buildCategoryFilter() {
    var sel = document.getElementById('categoryFilter');
    var cats = {};
    for (var i = 0; i < state.questions.length; i++) {
      if (state.questions[i].category) cats[state.questions[i].category] = true;
    }
    sel.innerHTML = '<option value="">全部分类</option>';
    var keys = Object.keys(cats).sort();
    for (var i = 0; i < keys.length; i++) {
      var o = document.createElement('option');
      o.value = keys[i]; o.textContent = keys[i]; sel.appendChild(o);
    }
  }

  function updateStats() {
    var total = state.questions.length, known = 0, wrong = 0, starred = 0;
    for (var k in state.progress.known) if (state.progress.known[k]) known++;
    for (var k in state.progress.wrong) if (state.progress.wrong[k]) wrong++;
    for (var k in state.progress.starred) if (state.progress.starred[k]) starred++;
    var pct = total ? Math.round(known/total*100) : 0;
    document.getElementById('stats').innerHTML =
      '<span class="green">✓ 掌握 ' + known + '/' + total + '</span>' +
      '<span class="red">✗ 错题 ' + wrong + '</span>' +
      '<span>⭐ ' + starred + '</span>' +
      '<span>进度 ' + pct + '%</span>' +
      '<div class="progress-bar"><div class="progress-fill" style="width:' + pct + '%"></div></div>';
  }

  // ==================== RENDER ====================

  function renderList() {
    var ul = document.getElementById('questionList');
    ul.innerHTML = '';
    document.getElementById('listCount').textContent = state.indices.length + ' 题';
    if (!state.indices.length) {
      ul.innerHTML = '<li style="cursor:default;color:var(--text2);text-align:center">无匹配题目</li>';
      return;
    }
    for (var i = 0; i < state.indices.length; i++) {
      var q = state.questions[state.indices[i]];
      var li = document.createElement('li');
      if (i === state.current) li.className = 'active';
      if (state.progress.known[q.id]) li.className += ' known';
      if (state.progress.wrong[q.id]) li.className += ' wrong';
      li.innerHTML = '<span class="idx">' + (i+1) + '</span><span class="q-text">' + escapeHtml(q.question) + '</span>';
      li.setAttribute('data-idx', i);
      li.onclick = function() {
        state.current = parseInt(this.getAttribute('data-idx'));
        state.revealed = false; state.selected = null; state.fillValue = '';
        render();
      };
      ul.appendChild(li);
    }
  }

  function renderQuiz() {
    var area = document.getElementById('quizArea');

    if (!state.questions.length) {
      area.innerHTML =
        '<div class="empty-state"><div class="icon">📭</div><h2>暂无题目</h2>' +
        '<p>请使用下方的导入功能上传题目文件或粘贴文本</p></div>';
      return;
    }

    if (!state.indices.length) {
      area.innerHTML = '<div class="empty-state"><div class="icon">🔍</div><h2>没有匹配的题目</h2></div>';
      return;
    }

    if (state.current >= state.indices.length) state.current = state.indices.length - 1;
    if (state.current < 0) state.current = 0;
    var q = state.questions[state.indices[state.current]];

    var h = '<div class="q-card">';
    h += '<div class="q-meta">';
    h += '<span class="q-tag type">' + (typeNames[q.type]||q.type) + '</span>';
    if (q.category) h += '<span class="q-tag cat">' + escapeHtml(q.category) + '</span>';
    if (q.difficulty) { var dl = q.difficulty===1?'简单':q.difficulty===2?'中等':'困难'; h += '<span class="q-tag diff-'+q.difficulty+'">'+dl+'</span>'; }
    h += '</div>';
    h += '<div class="q-number">第 ' + (state.current+1) + ' / ' + state.indices.length + ' 题</div>';
    h += '<div class="q-question">' + escapeHtml(q.question) + '</div>';

    if (q.type === 'single' || q.type === 'multiple' || q.type === 'judge') {
      var opts = q.type === 'judge' ? ['正确','错误'] : q.options;
      var multi = q.type === 'multiple';
      h += '<ul class="q-options">';
      for (var i = 0; i < opts.length; i++) {
        var cls = '';
        var sel = multi ? (state.selected||[]) : (state.selected!==null ? [state.selected] : []);
        if (sel.indexOf(i) !== -1) cls = 'selected';
        if (state.revealed) {
          var correct = q.type==='judge' ? (q.answer?[0]:[1]) : (multi?q.answer:[q.answer]);
          if (correct.indexOf(i) !== -1) cls += ' correct';
          else if (sel.indexOf(i) !== -1) cls += ' wrong-answer';
        }
        h += '<li class="'+cls.trim()+'" data-opt="'+i+'"><span class="opt-label">'+String.fromCharCode(65+i)+'</span><span>'+escapeHtml(opts[i])+'</span></li>';
      }
      h += '</ul>';
    } else if (q.type === 'fill') {
      h += '<input type="text" class="q-fill" id="fillInput" placeholder="输入答案..." value="'+escapeAttr(state.fillValue)+'">';
    }

    h += '<div class="q-actions">';
    if (!state.revealed && (q.type==='single'||q.type==='multiple'||q.type==='judge'||q.type==='fill')) {
      h += '<button class="btn btn-primary" id="submitBtn">提交答案</button>';
    } else {
      h += '<button class="btn" id="revealBtn">'+(state.revealed?'隐藏答案':'显示答案')+'</button>';
    }
    h += '<button class="btn'+(state.progress.known[q.id]?' btn-primary':'')+'" id="knownBtn">'+(state.progress.known[q.id]?'✓ 已掌握':'标记掌握')+'</button>';
    h += '<button class="btn'+(state.progress.wrong[q.id]?' btn-danger':'')+'" id="wrongBtn">'+(state.progress.wrong[q.id]?'✗ 错题':'加入错题')+'</button>';
    h += '<button class="btn" id="starBtn">'+(state.progress.starred[q.id]?'⭐ 已收藏':'☆ 收藏')+'</button>';
    h += '</div>';

    if (state.revealed) {
      h += '<div class="answer-area"><div class="answer-label">参考答案</div><div class="answer-text">';
      if (q.type==='single'||q.type==='multiple'||q.type==='judge') {
        var ansOpts = q.type==='judge'?['正确','错误']:q.options;
        var ansArr = q.type==='judge'?(q.answer?[0]:[1]):(q.type==='multiple'?q.answer:[q.answer]);
        for (var i = 0; i < ansArr.length; i++) h += String.fromCharCode(65+ansArr[i])+'. '+escapeHtml(ansOpts[ansArr[i]])+'<br>';
      } else { h += escapeHtml(String(q.answer)); }
      h += '</div>';
      if (q.explanation) h += '<div class="answer-explanation">💡 '+escapeHtml(q.explanation)+'</div>';
      h += '</div>';
    }
    h += '</div>';

    area.innerHTML = h;
    bindQuizEvents(q);
    updatePosition();
  }

  function bindQuizEvents(q) {
    var optLis = document.querySelectorAll('.q-options li');
    for (var i = 0; i < optLis.length; i++) {
      (function(li) {
        li.onclick = function() {
          if (state.revealed) return;
          var idx = parseInt(li.getAttribute('data-opt'));
          if (q.type === 'multiple') {
            if (!state.selected) state.selected = [];
            var pos = state.selected.indexOf(idx);
            if (pos === -1) state.selected.push(idx); else state.selected.splice(pos, 1);
          } else {
            state.selected = idx;
          }
          renderQuiz();
        };
      })(optLis[i]);
    }

    var fillInput = document.getElementById('fillInput');
    if (fillInput) {
      fillInput.oninput = function() { state.fillValue = fillInput.value; };
      fillInput.onkeydown = function(e) { if (e.key==='Enter') { e.preventDefault(); submitAnswer(); } };
      if (!state.revealed) fillInput.focus();
    }

    var submitBtn = document.getElementById('submitBtn');
    if (submitBtn) submitBtn.onclick = submitAnswer;
    var revealBtn = document.getElementById('revealBtn');
    if (revealBtn) revealBtn.onclick = function() { state.revealed = !state.revealed; renderQuiz(); };
    var knownBtn = document.getElementById('knownBtn');
    if (knownBtn) knownBtn.onclick = function() {
      if (state.progress.known[q.id]) delete state.progress.known[q.id];
      else { state.progress.known[q.id] = true; delete state.progress.wrong[q.id]; }
      saveProgress(); updateStats(); renderList(); renderQuiz();
    };
    var wrongBtn = document.getElementById('wrongBtn');
    if (wrongBtn) wrongBtn.onclick = function() {
      if (state.progress.wrong[q.id]) delete state.progress.wrong[q.id];
      else { state.progress.wrong[q.id] = true; delete state.progress.known[q.id]; }
      saveProgress(); updateStats(); renderList(); renderQuiz();
    };
    var starBtn = document.getElementById('starBtn');
    if (starBtn) starBtn.onclick = function() {
      if (state.progress.starred[q.id]) delete state.progress.starred[q.id];
      else state.progress.starred[q.id] = true;
      saveProgress(); updateStats(); renderList(); renderQuiz();
    };
  }

  function submitAnswer() {
    var q = state.questions[state.indices[state.current]];
    if (q.type === 'fill') {
      if (!state.fillValue.trim()) { state.revealed = true; }
      else {
        var correct = String(q.answer).trim().toLowerCase().split(/[|｜/／,，]/);
        var userVal = state.fillValue.trim().toLowerCase();
        var ok = false;
        for (var i = 0; i < correct.length; i++) { if (correct[i].trim() === userVal) { ok = true; break; } }
        if (ok) { state.progress.known[q.id]=true; delete state.progress.wrong[q.id]; }
        else { state.progress.wrong[q.id]=true; delete state.progress.known[q.id]; }
        saveProgress();
      }
    } else if (q.type === 'single' || q.type === 'judge') {
      if (state.selected === null) { alert('请先选择选项'); return; }
      var correctIdx = q.type === 'judge' ? (q.answer ? 0 : 1) : q.answer;
      if (state.selected === correctIdx) { state.progress.known[q.id]=true; delete state.progress.wrong[q.id]; }
      else { state.progress.wrong[q.id]=true; delete state.progress.known[q.id]; }
      saveProgress();
    } else if (q.type === 'multiple') {
      if (!state.selected || !state.selected.length) { alert('请至少选择一个选项'); return; }
      var ca = q.answer.slice().sort(), ua = state.selected.slice().sort();
      var ok = ca.length === ua.length;
      if (ok) { for (var i = 0; i < ca.length; i++) { if (ca[i] !== ua[i]) { ok = false; break; } } }
      if (ok) { state.progress.known[q.id]=true; delete state.progress.wrong[q.id]; }
      else { state.progress.wrong[q.id]=true; delete state.progress.known[q.id]; }
      saveProgress();
    }
    state.revealed = true;
    updateStats(); renderList(); renderQuiz();
  }

  function updatePosition() {
    document.getElementById('position').textContent = state.indices.length ? ((state.current+1)+' / '+state.indices.length) : '- / -';
  }

  function render() { renderList(); renderQuiz(); updateStats(); }

  function next() { if (state.current < state.indices.length-1) { state.current++; state.revealed=false; state.selected=null; state.fillValue=''; render(); } }
  function prev() { if (state.current > 0) { state.current--; state.revealed=false; state.selected=null; state.fillValue=''; render(); } }

  // ==================== INIT ====================

  function init() {
    var theme = localStorage.getItem('exam-theme') || 'light';
    document.documentElement.setAttribute('data-theme', theme);
    document.getElementById('themeBtn').textContent = theme === 'dark' ? '☀️' : '🌙';

    buildCategoryFilter(); buildIndex(); render();

    document.getElementById('searchInput').oninput = function() { state.current=0; state.revealed=false; buildIndex(); render(); };
    document.getElementById('filterMode').onchange = function() { state.current=0; state.revealed=false; buildIndex(); render(); };
    document.getElementById('categoryFilter').onchange = function() { state.current=0; state.revealed=false; buildIndex(); render(); };
    document.getElementById('shuffleBtn').onclick = function() { buildIndex(); shuffle(state.indices); state.current=0; state.revealed=false; state.selected=null; render(); };
    document.getElementById('prevBtn').onclick = prev;
    document.getElementById('nextBtn').onclick = next;
    document.getElementById('themeBtn').onclick = function() {
      var t = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', t);
      localStorage.setItem('exam-theme', t);
      document.getElementById('themeBtn').textContent = t === 'dark' ? '☀️' : '🌙';
    };
    document.getElementById('exportBtn').onclick = function() {
      var data = state.questions.map(function(q) { var c = {}; for (var k in q) if (k.charAt(0)!=='_') c[k]=q[k]; return c; });
      var blob = new Blob([JSON.stringify(data, null, 2)], { type:'application/json' });
      var a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'questions.json'; a.click();
    };
    document.getElementById('resetProgressBtn').onclick = function() {
      if (confirm('确定重置所有学习进度？')) { state.progress = {known:{},wrong:{},starred:{}}; saveProgress(); render(); }
    };

    // Import events (elements are in HTML, not dynamic)
    var fileInput = document.getElementById('fileInput');
    if (fileInput) {
      fileInput.onchange = function(e) {
        if (e.target.files && e.target.files[0]) readFile(e.target.files[0]);
      };
    }
    var parseBtn = document.getElementById('parseBtn');
    if (parseBtn) {
      parseBtn.onclick = function() {
        var text = document.getElementById('pasteArea').value;
        if (!text.trim()) { alert('请先粘贴题目文本'); return; }
        var questions = parseQuestions(text);
        showPreview(questions);
        if (!questions.length) alert('未能解析出题目，请检查格式');
      };
    }
    var confirmImportBtn = document.getElementById('confirmImport');
    if (confirmImportBtn) {
      confirmImportBtn.onclick = doConfirmImport;
    }
    var importToggle = document.getElementById('importToggle');
    if (importToggle) {
      importToggle.onclick = function() {
        var body = document.getElementById('importBody');
        if (body.style.display === 'none') {
          body.style.display = 'block';
          importToggle.textContent = '📥 导入题目 ▼';
        } else {
          body.style.display = 'none';
          importToggle.textContent = '📥 导入题目 ▶';
        }
      };
    }

    document.addEventListener('keydown', function(e) {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') return;
      if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
      else if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
      else if (e.key === ' ') { e.preventDefault(); if (state.indices.length) { state.revealed = !state.revealed; renderQuiz(); } }
      else if (e.key.toLowerCase() === 's') { e.preventDefault(); if (state.indices.length) { var q = state.questions[state.indices[state.current]]; if (state.progress.starred[q.id]) delete state.progress.starred[q.id]; else state.progress.starred[q.id] = true; saveProgress(); render(); } }
      else if (e.key.toLowerCase() === 'k') { e.preventDefault(); if (state.indices.length) { var q = state.questions[state.indices[state.current]]; if (state.progress.known[q.id]) delete state.progress.known[q.id]; else { state.progress.known[q.id]=true; delete state.progress.wrong[q.id]; } saveProgress(); render(); } }
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
