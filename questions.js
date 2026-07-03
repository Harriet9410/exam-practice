var QUESTIONS = [
  {
    "id": "imp_1782990624735_0",
    "type": "qa",
    "answer": "源文件扩展名为 .java；编译生成字节码文件扩展名为 .class",
    "options": [],
    "subject": "Java",
    "category": "",
    "question": "源文件扩展名为?编译生成字节码文件扩展名为?",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1782990624735_1",
    "type": "qa",
    "answer": "行注释：//；块注释：/* ... */；文档注释：/** ... */",
    "options": [],
    "subject": "Java",
    "category": "",
    "question": "行注释、块注释、文档注释分别怎么标注?",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1782990624735_2",
    "type": "qa",
    "answer": "编译源代码：javac 源文件名.java 运行字节码：java 类名 显示JDK版本号：java -version 反编译字节码：javap 类名 生成文档注释：javadoc 源文件名.java",
    "options": [],
    "subject": "Java",
    "category": "",
    "question": "编译源代码命令、运行字节码、显示JDK版本号、反编译字节码、生成文档注释的命令及格式",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1782990624735_3",
    "type": "qa",
    "answer": "布尔型变量定义：boolean flag = true; 或 boolean flag = false;，取值只能是 true 或 false",
    "options": [],
    "subject": "Java",
    "category": "",
    "question": "布尔型变量定义定义及取值",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1782990624735_4",
    "type": "qa",
    "answer": "面向对象三个特性：封装、继承、多态",
    "options": [],
    "subject": "Java",
    "category": "",
    "question": "面向对象三个特性",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1782990624735_5",
    "type": "qa",
    "answer": "static：静态成员，属于类而非实例 class：定义类 implements：实现接口 interface：定义接口 this：当前对象引用 super：��类引用 import：导入包/类 package：声明包 abstract：抽象类/抽象方法 final：类不可继承、方法不可重写、变量为常量",
    "options": [],
    "subject": "Java",
    "category": "",
    "question": "static class implements interface this super import package abstract final关键字用途",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1782990624736_6",
    "type": "qa",
    "answer": "类成员访问权限控制关键字：private（本类）、default/缺省（同包）、protected（同包+子类）、public（任意）",
    "options": [],
    "subject": "Java",
    "category": "",
    "question": "类成员访问权限控制关键字",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1782990624736_7",
    "type": "qa",
    "answer": "多层继承构造函数执行过程：从最顶层父类开始逐层向下执行，先执行 Object 构造，再执行中间父类构造，最后执行子类构造，子类构造默认首行调用 super()",
    "options": [],
    "subject": "Java",
    "category": "",
    "question": "多层继承构造函数执行过程",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1782990624736_8",
    "type": "qa",
    "answer": "Lambda表达式排序：Arrays.sort(a, (o1, o2) -> o1 - o2) 前减后为升序；Arrays.sort(a, (o1, o2) -> o2 - o1) 后减前为降序",
    "options": [],
    "subject": "Java",
    "category": "",
    "question": "兰波达表达式定义排序规则使用，如Arrays.sort(a,(01,02)->02-01),前面减后��为升序，后面减前面为降序",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1782990624736_9",
    "type": "qa",
    "answer": "异常处理关键字：try、catch、finally、throw、throws",
    "options": [],
    "subject": "Java",
    "category": "",
    "question": "异常处理关键字",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1782990624736_10",
    "type": "qa",
    "answer": "多线程主要方法： sleep() 休眠指定毫秒 run() 线程执行体 start() 启动线程 interrupt() 中断线程 wait() 释放锁等待 notify() 唤醒一个等待线程 notifyAll() 唤醒所有等待线程",
    "options": [],
    "subject": "Java",
    "category": "",
    "question": "多线程主要方法及功能如sleep run start interrupt wait notify notifyAll等",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1782990624736_11",
    "type": "qa",
    "answer": "泛型容器类： ArrayList 动态数组 LinkedList 双向链表 HashSet 无序不重复 TreeSet 有序不重复 HashMap 键值对无序 TreeMap 键值对有序 BigInteger 大整数 统一使用泛型格式如 ArrayList<String> list = new ArrayList<>()",
    "options": [],
    "subject": "Java",
    "category": "",
    "question": "泛型容器类、拿来就用线程的使用格式统一的方法，支持泛型，TreeSet HashSet TreeMap HashMap LinkedList ArrayList BigInteger",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1782990624736_12",
    "type": "qa",
    "answer": "文件字节流：FileInputStream/FileOutputStream 字符流：FileReader/FileWriter 缓冲流：BufferedReader/BufferedWriter、BufferedInputStream/BufferedOutputStream 数组流：ByteArrayInputStream/ByteArrayOutputStream 字符串流：StringReader/StringWriter",
    "options": [],
    "subject": "Java",
    "category": "",
    "question": "文件字节流、字符流、缓冲流、数组流、字符串流",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1782990624736_13",
    "type": "qa",
    "answer": "文件序列化：类实现 Serializable 接口，用 ObjectOutputStream 的 writeObject() 写入，ObjectInputStream 的 readObject() 读取，可整体读写对象、数组、LinkedList",
    "options": [],
    "subject": "Java",
    "category": "",
    "question": "文件序列化，把一个对象完全转成字节序列，不用考虑对象成员个数及类型，以整个对象、数组、LinkedList为单位读写文件",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1782990624736_14",
    "type": "qa",
    "answer": "为按钮等组件绑定监视器：button.addActionListener(listener);，监听器实现 ActionListener 接口，重写 actionPerformed(ActionEvent e) 方法",
    "options": [],
    "subject": "Java",
    "category": "",
    "question": "为按钮等组件事件源，绑定监视器监听的方法addActionListener",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1782991704422_0",
    "type": "qa",
    "answer": "(1)import java.util.Scanner; public class Exam{ public static void main(String argv[]){ Scanner sr=new Scanner(System.in); int i,s=0,a; for (i=1;i<=10;i++){ a=sr.nextInt(); s=s+a; } System.out.printf(\"%.2f\\n\",s/10.0); } } (2)import java.util.Scanner; public class Exam{ public static void main(String argv[]){ Scanner sr=new Scanner(System.in); double s=0,a; int gs=0; while(sr.hasNextDouble()){ a=sr.nextDouble(); s=s+a; gs++; } System.out.printf(\"%d个数的平均值为%.2f\\n\",gs,s/gs); } }",
    "options": [],
    "subject": "Java",
    "category": "编程题",
    "question": "求平均值",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1782991704423_1",
    "type": "qa",
    "answer": "class DCSL{ int a,d,n; DCSL(int a,int d,int n){ this.a=a; this.d=d; this.n=n; } int getHe(){ return(2*a+(n-1)*d)/2*n; } } public class Exam { public static void main(String[] args) { DCSL sl=new DCSL(3,2,4); System.out.println(sl.getHe()); } }",
    "options": [],
    "subject": "Java",
    "category": "编程题",
    "question": "类的定义和使用",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1782991704423_2",
    "type": "qa",
    "answer": "class TX{ int a,b,c; TX(int a,int b,int c){ this.a=a; this.b=b; this.c=c; } double getArea(){ return (a+b)*c/2.0; } } class TXZ extends TX{ int h; TXZ(int a,int b,int c,int h){ super(a,b,c); this.h=h; } double getV(){ return getArea()*h; } } public class Exam { public static void main(String[] args) { TXZ z=new TXZ(1,2,3,4); System.out.printf (\"%.2f\\n\",z.getV()); } }",
    "options": [],
    "subject": "Java",
    "category": "编程题",
    "question": "类的继承（super）",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1782991704423_3",
    "type": "qa",
    "answer": "（继承）interface XS{ int getXS(); } class NX implements XS{ public int getXS(){ return 100000; } } class YX implements XS{ public int getXS(){ return 8000*12; } } class ZX implements XS{ public int getXS(){ return 1500*52; } } public class Exam { public static void main(String[] args) { XS s[]={new NX(),new YX(),new ZX()}; for(int i=0;i<=2;i++) System.out.println(s[i].getXS()); } } （抽象）abstract class XS{ abstract int getXS(); } class NX extends XS{ public int getXS(){ return 100000; } } class YX extends XS{ public int getXS(){ return 8000*12; } } class ZX extends XS{ public int getXS(){ return 1500*52; } } public class Exam { public static void main(String[] args) { XS s[]={new NX(),new YX(),new ZX()}; for(int i=0;i<=2;i++) System.out.println(s[i].getXS()); } }",
    "options": [],
    "subject": "Java",
    "category": "编程题",
    "question": "继承多态，抽象类",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg_1",
    "type": "multiple",
    "answer": [
      1,
      2
    ],
    "options": [
      "改革开放实践",
      "中国具体实际",
      "中华优秀传统文化",
      "世界具体实际"
    ],
    "subject": "毛概",
    "category": "多选题",
    "question": "马克思主义中国化时代化，就是立足中国国情���时代特点，坚持把马克思主义基本原理同    相结合、同    相结合，深入研究和解决中国革命、建设、改革不同历史时期的实际问题，真正搞懂面临的时代课题，创造新的理论成果。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg_2",
    "type": "multiple",
    "answer": [
      0,
      1,
      3
    ],
    "options": [
      "坚持和发展什么样的中国特色社会主义、怎样坚持和发展中国特色社会主义",
      "建设什么样的社会主义现代化强国、怎样建设社会主义现代化强国",
      "建设什么样的党、怎样建设党，实现什么样的发展、怎样发展",
      "建设什么样的长期执政的马克思主义政党、怎样建设长期执政的马克思主义政党"
    ],
    "subject": "毛概",
    "category": "多选题",
    "question": "党的十八大以来，中国特色社会主义进入新时代，以习近平同志为主要代表的中国共产党人，提出一系列原创性的治国理政新理念新思想新战略，主要系统回答新时代哪些重大时代课题?",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg_3",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "options": [
      "邓小平理论",
      "科学发展观",
      "“三个代表”重要思想",
      "习近平新时代中国特色社会主义思想"
    ],
    "subject": "毛概",
    "category": "多选题",
    "question": "在马克思主义中国化时代化的历史进程中，产生了毛泽东思��、( )等理论成果。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg_4",
    "type": "multiple",
    "answer": [
      2,
      3
    ],
    "options": [
      "历史上曾犯过教条主义、经验主义错误",
      "马克思主义理论解决了俄国实际问题",
      "解决中国实际问题的客观需要",
      "马克思主义理论本身发展的内在要求"
    ],
    "subject": "毛概",
    "category": "多选题",
    "question": "为什么推进马克思主义中国化时代化，是有以下两个原因，一是    ，二是     。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg_5",
    "type": "multiple",
    "answer": [
      2,
      3
    ],
    "options": [
      "改革开放",
      "中国特色社会主义建设",
      "社会主义革命",
      "新民主主义革命"
    ],
    "subject": "毛概",
    "category": "多选题",
    "question": "毛泽东思想既包括关于( )的正确思想，也包括关于社会主义建设的正确思想。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg_6",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "options": [
      "改革开放史",
      "社会主义发展史",
      "新中国史",
      "党史"
    ],
    "subject": "毛概",
    "category": "多选题",
    "question": "大学生要坚持理论联系实际，紧密联系( )、中华民族发展史，紧密联系自己的思想实际，把理论与实践、理想与现实、主观与客观、知与行有机统一起来，自觉投身于中国特色社会主义伟大实践，为实现中华民族伟大复兴作出应有贡献。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg_7",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "options": [
      "推进伟大事业",
      "进行伟大斗争",
      "实现伟大梦想",
      "建设伟大工程"
    ],
    "subject": "毛概",
    "category": "多选题",
    "question": "大学生要坚持理论联系实际，紧密结合( )的伟大实践，自觉投身于中国特色社会主义伟大实践，为实现中华民族伟大复兴作出应有贡献。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg_8",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "options": [
      "文化自信",
      "道路自信",
      "制度自信",
      "理论自信"
    ],
    "subject": "毛概",
    "category": "多选题",
    "question": "我们要坚定中国特色社会主义( )，增进政治认同、思想认同、情感认同。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg_9",
    "type": "multiple",
    "answer": [
      0,
      1
    ],
    "options": [
      "习近平新时代中国特色社会主义思想",
      "马克思列宁主义",
      "中国特色社会主义理论",
      "新民主主义革命理论"
    ],
    "subject": "毛概",
    "category": "多选题",
    "question": "中国共产党以    、毛泽东思想、邓小平理论、“三个代表”重要思想、科学发展观、    作为自己的指导思想和行动指南。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg_10",
    "type": "multiple",
    "answer": [
      0,
      1,
      3
    ],
    "options": [
      "独立自主",
      "群众路线",
      "与时俱进",
      "实事求是"
    ],
    "subject": "毛概",
    "category": "多选题",
    "question": "( )是毛泽��思想活的灵魂，这一具有中国共产党人特色的立场、观点和方法也贯穿于中国特色社会主义理论体系之中。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg_11",
    "type": "multiple",
    "answer": [
      1,
      3
    ],
    "options": [
      "独立自主",
      "武装夺取政权",
      "统一战线",
      "农村包围城市"
    ],
    "subject": "毛概",
    "category": "多选题",
    "question": "在新民主主义革命时期，以毛泽东同志为主要代表的中国共产党人，把马克思列宁主义基本原理同中国具体实际结合起来，对经过艰苦探索、付出巨大牺牲积累的一系列独创性经验作了理论概括，开辟了( )的正确革命道路。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg_12",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "options": [
      "世界之问",
      "时代之问",
      "中国之问",
      "人民之问"
    ],
    "subject": "毛概",
    "category": "多选题",
    "question": "坚持和发展马克思主义，必须同中国具体实际相结合，着眼解决革命、建设、改革中的实际问题，不断回答( )，作出符合中国实际和时代要求的正确回答，得出符合客观规律的科学认识，形成与时俱进的理论成果，更好指导中国实践。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg_13",
    "type": "multiple",
    "answer": [
      0,
      3
    ],
    "options": [
      "坚持马克思主义",
      "体现马克思主义",
      "照搬马克思主义",
      "发展马克思主义"
    ],
    "subject": "毛概",
    "category": "多选题",
    "question": "准确把握马克思主义中国化时代化的科学内涵，要做    与    相统一。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg_14",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "options": [
      "实现了从生产力相对落后的状况到经济总量跃居世界第二的历史性突破",
      "实现了人民生活从温饱不足到总体小康、奔向全面小康的历史性跨越",
      "为实现中华民族伟大复兴提供了充满新的活力的体制保证和快速发展的物质条件",
      "推进了中华民族从站起来到富起来的伟大飞跃"
    ],
    "subject": "毛概",
    "category": "多选题",
    "question": "中国共产党高举中国特色社会主义伟大旗帜，团结带领中国人民，解放思想、锐意进取，创造了改革开放和社会主义现代化建设的伟大成就，我国",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg_15",
    "type": "multiple",
    "answer": [
      0,
      1,
      2
    ],
    "options": [
      "立场",
      "观点",
      "方法",
      "规则"
    ],
    "subject": "毛概",
    "category": "多选题",
    "question": "坚持马克思主义，最重要的是坚持马克思主义基本原理和贯穿其中的( )，坚定不移坚持马克思主义指导地位，任何时候任何情况下都不动摇。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg_16",
    "type": "judge",
    "answer": [
      0
    ],
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "判断题",
    "question": "第一次提出“马克思主义中国化”命题的会议是1938年党的六届六中全会。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg_17",
    "type": "judge",
    "answer": [
      0
    ],
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "判断题",
    "question": "中共十一届三中全会的召开，实现了新中国成立以来党的历史上具有深远意义的伟大转折，开启了改革开放和社会主义现代化建设历史新时期。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg_18",
    "type": "judge",
    "answer": [
      0
    ],
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "判断题",
    "question": "历史和现实反复证明,马克思主义只有中国化时代化才能在中国大地上闪耀真理光芒,也只有实现中国化时代化才能救中国、发展中国,才能实现中华民族的伟大复兴。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg_19",
    "type": "judge",
    "answer": [
      0
    ],
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "判断题",
    "question": "中国共产党从成立之日起，就明确把马克思列宁主义确立为指导思想。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg_20",
    "type": "judge",
    "answer": [
      1
    ],
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "判断题",
    "question": "1945年，在党的七大上，毛泽东代表党中央作了《改造我们的学习》。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg_21",
    "type": "judge",
    "answer": [
      0
    ],
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "判断题",
    "question": "习近平总书记深刻指出,“马克思主义之所以行,就在于党不断推进马克思主义中国化时代化并用以指导实践”。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg_22",
    "type": "judge",
    "answer": [
      0
    ],
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "判断题",
    "question": "2021年，党的十九届六中全会通过的《中共中央关于党的百年奋斗重大成就和历史经验的决议》总结了百年来中国共产党推进马克思主义中国化时代化的重大成就，阐释了马克思主义中国化时代化的重大历史意义。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg_23",
    "type": "judge",
    "answer": [
      0
    ],
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "判断题",
    "question": "党的二十大明确把“不断谱写马克思主义中国化时代化新篇章”作为当代中国共产党人的庄严历史责任，并提出了继续推进马克思主义中国化时代化的新要求。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg_24",
    "type": "judge",
    "answer": [
      0
    ],
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "判断题",
    "question": "推进马克思主义中国化时代化，是马克思主义理论本身发展的内在要求。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg_25",
    "type": "judge",
    "answer": [
      0
    ],
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "判断题",
    "question": "推进马克思主义中国化时代化，是解决中国实际问题的客观需要。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg_26",
    "type": "single",
    "answer": 2,
    "options": [
      "五四运动",
      "新文化运动",
      "十月革命",
      "鸦片战争"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "( )给中国送来了马克思列宁主义，给苦苦探寻救亡图存出路的中国人民指明了前进方向、提供了全新选择。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg_27",
    "type": "single",
    "answer": 2,
    "options": [
      "邓小平理论",
      "“三个代表”重要思想",
      "马克思列宁主义",
      "毛泽东思想"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "中国共产党从成立之日起，就明确把( )确立为指导思想。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg_28",
    "type": "single",
    "answer": 3,
    "options": [
      "任弼时",
      "周恩来",
      "毛泽东",
      "刘少奇"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "1945年，在党的七大上，( )代表党中央作了《关于修改党章的报告》，对马克思主义中国化从理论上作了进一步的阐述，并指出毛泽东思想是“中国化的马克思主义”。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg_29",
    "type": "single",
    "answer": 3,
    "options": [
      "新民主主义革命理论",
      "新民主主义��命路线",
      "毛泽东思想",
      "马克思主义中国化"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "1938年，毛泽东在党的六届六中全会上作了《论新阶段》的报告，强调:“没有抽象的马克思主义，只有具体的马克思主义。……马克思主义的中国化，使之在其每一表现中带着中国的特性，即是说，按照中国的特点去应用它，成为全党亟待了解并亟须解决的问题。”这标志着( )这一命题的正式提出。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg_30",
    "type": "single",
    "answer": 0,
    "options": [
      "马克思主义中国化时代化",
      "“两个结合”",
      "社会主义现代化",
      "社会主义现代化强国"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "党的十八大以来，以习近平同志为核心的党中央明确提出要不断推进( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg_31",
    "type": "single",
    "answer": 1,
    "options": [
      "党的十八大",
      "党的十九届六中全会",
      "党的十八届三中全会",
      "党的十九大"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "2021年，党的( )通过的《中共中央关于党的百年奋斗重大成就和历史经验的决议》总结了百年来中国共产党推进马克思主义中国化时代化的重大成就，阐释了马克思主义中国化时代化的重大历史意义。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg_32",
    "type": "single",
    "answer": 1,
    "options": [
      "党的十七大",
      "党的二十大",
      "党的十八大",
      "党的十九大"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "( )明确把“不断谱写马克思主义中国化时代化新篇章”作为当代中国共产党人的庄严历史责任，并提出了继续推进马克思主义中国化时代化的新要求。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg_33",
    "type": "single",
    "answer": 2,
    "options": [
      "中国化现代化",
      "时代化",
      "中国化时代化",
      "中国化大众化"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "把马克思主义基本原理同中国具体实际相结合、同中华优秀传统文化相结合，也就是如何实现马克思主义( )的问题。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg_34",
    "type": "single",
    "answer": 1,
    "options": [
      "邓小平理论",
      "毛泽东思想",
      "“三个代表”重要思想",
      "科学发展观"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "( )是马克思主义中国化时代化的第一次历史性飞跃。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg_35",
    "type": "single",
    "answer": 1,
    "options": [
      "独立自主",
      "与时俱进",
      "精益求精",
      "实事求是"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "马克思主义中国化时代化的理论成果是一脉相承又( )的关系。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg_36",
    "type": "single",
    "answer": 1,
    "options": [
      "党的建设",
      "实事求是",
      "与时俱进",
      "统一战线"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "正是由于中国共产党坚持( )的思想路线，才能够在实践中开创中国特色社会主义道路，形成中国特色社会主义理论体系。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg_37",
    "type": "single",
    "answer": 3,
    "options": [
      "科学发展观",
      "毛泽东思想",
      "“三个代表”重要思想",
      "邓小平理论"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "( )是中国特色社会主义理论体系的开篇之作。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg_38",
    "type": "single",
    "answer": 1,
    "options": [
      "社会主义现代化建设新时期",
      "改革开放和社会主义现代化建设新时期",
      "改革开放",
      "社会主义建设时期"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "在( )，中国共产党坚持以理论创新引领事业发展，从新的实践和时代特征出发坚持和发展马克思主义，科学回答了建设中国特色社会主义的发展道路、发展阶段、根本任务、发展动力、发展战略等一系列基本问题，形成中国特色社会主义理论体系，实现了马克思主义中国化时代化新的飞跃。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg_39",
    "type": "single",
    "answer": 0,
    "options": [
      "人民当家作主",
      "依法治国",
      "坚持党的领导",
      "实行改革开放"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "社会主义民主政治的本质要求是( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg_40",
    "type": "single",
    "answer": 1,
    "options": [
      "社会主义行",
      "马克思主义行",
      "社会主义好",
      "马克思主义好"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "实践证明，中国共产党为什么能，中国特色社会主义为什么好，归根到底是中国化时代化的( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg_41",
    "type": "single",
    "answer": 3,
    "options": [
      "与时俱进",
      "独立自主",
      "实事求是",
      "群众路线"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "中国特色社会主义理论体系始终坚持将( )作为根本工作路线。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg_42",
    "type": "single",
    "answer": 2,
    "options": [
      "1927年以后中国共产党独立担负起领导中���革命的重任",
      "1919年以后中国革命进入新民主主义革命时期",
      "19世纪末20世纪初，世界进入帝国主义和无产阶级革命时代",
      "1840年以后中国成为一个半殖民地半封建社会"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "毛泽东思想形成的时代条件是( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg_43",
    "type": "single",
    "answer": 1,
    "options": [
      "十九大",
      "十七大",
      "十八大",
      "二十大"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "党的( )提出了“中国特色社会主义理论体系”的科学概念。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg_44",
    "type": "single",
    "answer": 3,
    "options": [
      "艰苦奋斗",
      "惩前毖后、治病救人",
      "谦虚谨慎、不骄不躁",
      "和人民群众紧密地联系在一起"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "毛泽东创造性地理论与实践的相结合、自我批评、( )的中国共产党三大工作作风。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg_45",
    "type": "single",
    "answer": 0,
    "options": [
      "《中国共产党中央委员会关于建国以来党的若干历史问题的决议》",
      "《关于若干历史问题的决议》",
      "《解放思想，实事求是，团结一致向前看》",
      "《中共中央关于党的百年奋斗重大成就和历史经验的决议》"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "中共十一届三中全会以后，对毛泽东和毛泽东思想的历史地位作出科学的、实事求是的评价的历史文献是( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_100",
    "type": "single",
    "answer": 3,
    "options": [
      "资本主义社会",
      "新民主主义社会",
      "半殖民地社会",
      "半殖民地半封建社会"
    ],
    "subject": "毛概",
    "category": "毛泽东思想",
    "question": "1840年鸦片战争以后，由于西方列强的入侵和封建统治的腐败，中国逐步成为( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_101",
    "type": "single",
    "answer": 3,
    "options": [
      "“不断谱写马克思主义新篇章”",
      "“不断谱写马克思主义时代化新篇章”",
      "“不断谱写马克思主义中国化新篇章”",
      "“不断谱写马克思主义中国化时代化新篇章”"
    ],
    "subject": "毛概",
    "category": "毛泽东思想",
    "question": "党的二十大明确把( )作为当代中国共产党人的庄严历史责任，并提出了继续推进马克思主义中国化时代化的新要求。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_102",
    "type": "single",
    "answer": 1,
    "options": [
      "1997",
      "1978",
      "1969",
      "1987"
    ],
    "subject": "毛概",
    "category": "毛泽东思想",
    "question": "( )年召开的党的十一届三中全会，实现了新中国成立以来党的历史上具有深远意义的伟大转折，开启了改革开放和社会主义现代���建设历史新时期。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_103",
    "type": "single",
    "answer": 1,
    "options": [
      "十月革命",
      "五四运动",
      "鸦片战争",
      "新文化运动"
    ],
    "subject": "毛概",
    "category": "毛泽东思想",
    "question": "1919年( )促进了马克思主义在中国的广泛传播。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_104",
    "type": "single",
    "answer": 3,
    "options": [
      "中华民族",
      "中国近现代",
      "中国",
      "中国共产党"
    ],
    "subject": "毛概",
    "category": "毛泽东思想",
    "question": "( )的历史，是一部不断推进马克思主义中国化时代化的历史，是一部不断推进理论创新、进行理论创造的历史。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_105",
    "type": "single",
    "answer": 0,
    "options": [
      "社会主义革命和建设",
      "新民主主义革命",
      "抗日战争",
      "社会主义改造"
    ],
    "subject": "毛概",
    "category": "毛泽东思想",
    "question": "在( )时期，以毛泽东同志为主要代表的中国共产党人，提出把马克思列宁主义基本原理同中国具体实际进行“第二次结合”，提出了关于社会主义建设的一系列重要思想，结合新的实际丰富和发展了毛泽东思想。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_106",
    "type": "single",
    "answer": 2,
    "options": [
      "政策和策略的理论",
      "改革开放理论",
      "社会主义革命与社会主义建设理论",
      "革命���队建设和军事战略理论"
    ],
    "subject": "毛概",
    "category": "毛泽东思想",
    "question": "毛泽东思想中关于把马克思主义基本原理同中国具体实际进行“第二次结合”的理论指的是( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_107",
    "type": "single",
    "answer": 0,
    "options": [
      "遵义会议以后",
      "第一次国内革命战争时期",
      "抗日战争以后",
      "解放战争以后"
    ],
    "subject": "毛概",
    "category": "毛泽东思想",
    "question": "毛泽东思想得到多方面展开而趋于成熟是( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_108",
    "type": "single",
    "answer": 1,
    "options": [
      "密切联系群众",
      "党对军队绝对领导",
      "理论联系实际",
      "艰苦奋斗"
    ],
    "subject": "毛概",
    "category": "毛泽东思想",
    "question": "在革命军队建设和军事战略的理论中，毛泽东规定了( )的原则，强调全心全意为人民服务是人民军队的唯一宗旨。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_109",
    "type": "single",
    "answer": 0,
    "options": [
      "艰苦奋斗",
      "实事求是",
      "独立自主",
      "密切联系群众"
    ],
    "subject": "毛概",
    "category": "毛泽东思想",
    "question": "中华人民共和国成立前后，毛泽东多次提出务必使同志们继续地保持谦虚、谨慎、不骄、不躁的作风，务必使同志们继续地保持( )的作风;要求全党警惕资产阶级思想的侵蚀，反对脱���群众的官僚主义。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_110",
    "type": "single",
    "answer": 0,
    "options": [
      "全心全意为人民服务",
      "党领导一切",
      "实事求是",
      "独立自主"
    ],
    "subject": "毛概",
    "category": "毛泽东思想",
    "question": "毛泽东指出:“为什么人的问题，是一个根本的问题，原则的问题”，强调( )，对革命工作要极端负责，要艰苦奋斗和不怕牺牲。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_111",
    "type": "single",
    "answer": 0,
    "options": [
      "马克思主义中国化时代化",
      "马克思主义时代化",
      "马克思主义中国化",
      "马克思主义"
    ],
    "subject": "毛概",
    "category": "毛泽东思想",
    "question": "毛泽东是( )的伟大开拓者，是毛泽东思想的主要创立者。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_112",
    "type": "single",
    "answer": 3,
    "options": [
      "团结-批评-团结",
      "统筹兼顾、适当安排",
      "长期共存、互相监督",
      "百花齐放、百家争鸣"
    ],
    "subject": "毛概",
    "category": "毛泽东思想",
    "question": "毛泽东认为在科学文化领域要实行( )方针。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_113",
    "type": "single",
    "answer": 3,
    "options": [
      "群众路线",
      "武装斗争",
      "独立自主",
      "实事求是"
    ],
    "subject": "毛概",
    "category": "毛泽东思想",
    "question": "毛泽东思想的精髓是( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_114",
    "type": "single",
    "answer": 3,
    "options": [
      "作风",
      "制度",
      "组织",
      "思想"
    ],
    "subject": "毛概",
    "category": "毛泽东思想",
    "question": "毛泽东思想中关于党的建设理论特别重视党的( )建设。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_115",
    "type": "multiple",
    "answer": [
      0,
      1,
      3
    ],
    "options": [
      "《井冈山的斗争》",
      "《星星之火可以燎原》",
      "《论十大关系》",
      "《反对本本主义》"
    ],
    "subject": "毛概",
    "category": "毛泽东思想",
    "question": "以下著作中属于毛泽东思想初步形成阶段的代表作是( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_116",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "options": [
      "社会主义革命和社会主义建设理论",
      "政策和策略理论",
      "新民主主义革命理论",
      "革命军队建设和军事战略理论"
    ],
    "subject": "毛概",
    "category": "毛泽东思想",
    "question": "下列选项中属于毛泽东思想主要内容的是( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_117",
    "type": "multiple",
    "answer": [
      0,
      2,
      3
    ],
    "options": [
      "实事求是",
      "党的建设",
      "独立自主",
      "群众路线"
    ],
    "subject": "毛概",
    "category": "毛泽东思想",
    "question": "贯穿于毛泽东思想的活的灵魂是( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_118",
    "type": "multiple",
    "answer": [
      0,
      2,
      3
    ],
    "options": [
      "深入实际了解事物的本来面貌，把握事物内在必然联系，按照客观��律办事。",
      "一切依靠群众，一切为了群众。",
      "不断推进实践基础上的理论创新。",
      "清醒认识和正确把握我国基本国情。"
    ],
    "subject": "毛概",
    "category": "毛泽东思想",
    "question": "坚持实事求是，就要( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_119",
    "type": "multiple",
    "answer": [
      1,
      2,
      3
    ],
    "options": [
      "坚持和发展马克思主义。",
      "坚持全心全意为人民服务的根本宗旨。",
      "保持党同人民的血肉联系。",
      "坚持人民群众是推动历史发展的根本力量。"
    ],
    "subject": "毛概",
    "category": "毛泽东思想",
    "question": "坚持群众路线，就要( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_120",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "options": [
      "坚持群众路线，就要坚持全心全意为人民服务的根本宗旨。",
      "本质上体现的是马克思主义关于人民群众是历史的创造者这一基本原理。",
      "是我们党的生命线和根本工作路线，是我们党永葆青春活力和战斗力的重要传家宝。",
      "是一切为了群众，一切依靠群众，从群众中来，到群众中去，把党的正确主张变成群众的自觉行动。"
    ],
    "subject": "毛概",
    "category": "毛泽东思想",
    "question": "关于群众路线，下列说法正确的是( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_121",
    "type": "multiple",
    "answer": [
      1,
      2,
      3
    ],
    "options": [
      "是毛泽东一个人的思想体现",
      "中国共产党集体智慧的结晶",
      "被实践证明是正确的中国革命和建设的理论原则和经验总结",
      "马克思列宁主义在中国的发展和运用"
    ],
    "subject": "毛概",
    "category": "毛泽东思想",
    "question": "毛泽东思想作为马克思主义中国化时代化第一个理论成果，它是( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_122",
    "type": "multiple",
    "answer": [
      0,
      2
    ],
    "options": [
      "社会主义改造",
      "思想建党",
      "社会主义工业化",
      "理论强党"
    ],
    "subject": "毛概",
    "category": "毛泽东思想",
    "question": "新民主主义革命胜利后，毛泽东领导我们党，依据新民主主义革命胜利所创造的向社会主义过渡的经济政治条件，采取( )并举的方针，实行逐步改造生产资料私有制的具体政策。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_123",
    "type": "multiple",
    "answer": [
      0,
      1,
      2
    ],
    "options": [
      "自我批评",
      "理论和实践相结合",
      "和人民群众紧密地联系在一起",
      "实事求是"
    ],
    "subject": "毛概",
    "category": "毛泽东思想",
    "question": "毛泽东指出( )的作风，是中国共产党区别于其他任何政党的显著标志。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_124",
    "type": "multiple",
    "answer": [
      0,
      2,
      3
    ],
    "options": [
      "党的建设",
      "独立自主",
      "统一战线",
      "武装斗争"
    ],
    "subject": "毛概",
    "category": "毛泽东思想",
    "question": "毛泽东指出，中国共产党在中国革命中战胜敌人的三大法宝是( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_125",
    "type": "multiple",
    "answer": [
      0,
      1,
      2
    ],
    "options": [
      "二战后，西方国家对我国实现持续的封锁禁运，推行和平演变战略",
      "十月革命开辟了世界无产阶级社会主义革命的新时代",
      "中国共产党领导人民进行革命和建设的成功实践",
      "苏共和共产国际的帮助"
    ],
    "subject": "毛概",
    "category": "毛泽东思想",
    "question": "毛泽东思想形成和发展的历史条件包括( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_126",
    "type": "multiple",
    "answer": [
      0,
      1,
      2
    ],
    "options": [
      "新民主主义革命",
      "社会主义建设",
      "社会主义革命",
      "社会主义改革"
    ],
    "subject": "毛概",
    "category": "毛泽东思想",
    "question": "毛泽东思想是在我国( )的实践过程中，在总结我国革命和建设正反两方面历史经验的基础上，逐步形成和发展起来的。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_127",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "options": [
      "事实上确立了毛泽东在党中央和红军的领导地位",
      "开启了我们党独立自主解决中国革命实际问题的新阶段",
      "开始确立了以毛泽东为主要代表的马克思主义正确路线在党中央的领导地位",
      "在最危急关头挽救了党、挽救了红军、挽救了中国革命"
    ],
    "subject": "毛概",
    "category": "毛泽东思想",
    "question": "遵义会议的意义在于( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_128",
    "type": "multiple",
    "answer": [
      2,
      3
    ],
    "options": [
      "人民日益增长的物质文化需要同落后的社会生产之间的矛盾",
      "人民内部的矛盾",
      "上层建筑和经济基础之间的矛盾",
      "生产关系和生产力的矛盾"
    ],
    "subject": "毛概",
    "category": "毛泽东思想",
    "question": "在社会主义制度建立以后，毛泽东又领导全党和全国人民积极探索适合中国国情的社会主义建设道路，提出社会主义社会仍然存在着矛盾，基本的矛盾是( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_129",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "options": [
      "在经济工作以及其他各项工作中实行“统筹兼顾、适当安排”",
      "在党与民主党派的关系上实现“长期共存、互相监督”",
      "在科学文化工作中实现“百花齐放、百家争鸣”",
      "人民内部要在政治上实现“团结-批评-团结”"
    ],
    "subject": "毛概",
    "category": "毛泽东思想",
    "question": "在社会主义制度建立以后，毛泽东又领导全党和全国人民积极探索适合中国国情的社会主义建设道路，提出了一系列具有战略意义的正确思想和方针，包括( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_130",
    "type": "judge",
    "answer": 1,
    "options": [
      1,
      0
    ],
    "subject": "毛概",
    "category": "毛泽东思想",
    "question": "在社会主义建设时期，以毛泽东同志为主要代表的中国共产党人，把马克思列宁主义基本原理同中国具体实际结合起来，开辟了农村包围城市、武装夺取政权的正确革命道路，创立了毛泽东思想。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_131",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "毛泽东思想",
    "question": "毛泽东思想为中华民族伟大复兴根本社会条件的创造、根本政治前提和制度基础的奠定提供了科学指南。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_132",
    "type": "judge",
    "answer": 1,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "毛泽东思想",
    "question": "毛泽东思想是在我国旧民主主义革命的实践过程中，逐步形成和发展起来的。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_133",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "毛泽东思想",
    "question": "注重思想建党、理论强党，是我们党的鲜明特色和光荣传统。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_134",
    "type": "judge",
    "answer": 1,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "毛泽东思想",
    "question": "毛泽东思想就是毛泽东的思想，所以，毛泽东的科学著作是毛泽东思想的集中概括。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_135",
    "type": "judge",
    "answer": 1,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "毛泽东思想",
    "question": "在新民主主义革命革命时期，毛泽东提出把马克思主义基本原理同中国具体实际进行“第二次结合”。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_136",
    "type": "judge",
    "answer": 1,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "毛泽东思想",
    "question": "毛泽东认为，社会主义社会已经不存在矛盾了。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_137",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "毛泽东思想",
    "question": "毛泽东指出，党员不但要在组织上入党，而且要在思想上入党，经常注意以无产阶级思想改造和克服各种非无产阶级思想。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_138",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "毛泽东思想",
    "question": "群众路线本质上体现的是马克思主义关于人民群众是历史的创造者这一基本原理。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_139",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "毛泽东思想",
    "question": "毛泽东思想紧紧围绕中国革命和建设的主题，提出了一系列相互关联的重要理论观点，构成了一个完整的科学思想体系。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_140",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "毛泽东思想",
    "question": "毛泽东提出的把对人民内部的民主和对敌人的专政互相结合起来就是人民民主专政的理论，丰富了马克思列宁主义关于无产阶级专政的学说。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_141",
    "type": "single",
    "answer": 3,
    "options": [
      "实事求是、群众路线、独立自主",
      "理论与实践相结合、密切联系群众、自我批评",
      "武装斗争、土地革命、根据地建设",
      "统一战线、武装斗争、党的建设"
    ],
    "subject": "毛概",
    "category": "新民主主义革命理论",
    "question": "新民主主义革命中战胜敌人的三大法宝是( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_142",
    "type": "single",
    "answer": 2,
    "options": [
      "陆地战",
      "运动战",
      "游击战",
      "持久战"
    ],
    "subject": "毛概",
    "category": "新民主主义革命理论",
    "question": "毛泽东的军事理论把( )提到了战略的地位。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_143",
    "type": "single",
    "answer": 0,
    "options": [
      "三湾改编",
      "井冈山会师",
      "工农武装割据",
      "中共六大"
    ],
    "subject": "毛概",
    "category": "新民主主义革命理论",
    "question": "1927年9月至10月，( )从组织上确立了党对军队的领导，是建设无产阶级领导的新型人民军队的重要开端。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_144",
    "type": "single",
    "answer": 0,
    "options": [
      "思想政治工作是经济工作和其他一切工作的生命线",
      "经济工作是思想政治工作和其他一切工作的生命线",
      "文化工作是经济工作和其他一切工作的生命线",
      "文化工作是政治工作和其他一切工作的生命线"
    ],
    "subject": "毛概",
    "category": "新民主主义革命理论",
    "question": "在思想政治工作和文化工作方面，毛泽东认为( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_145",
    "type": "single",
    "answer": 1,
    "options": [
      "劳动改造",
      "惩前毖后、治病救人",
      "依法办事",
      "无产阶级专政"
    ],
    "subject": "毛概",
    "category": "新民主主义革命理论",
    "question": "针对历史上党内斗争中存在过的“残酷斗争、无情打击”的“左”的错误，毛泽东提出的正确方针是( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_146",
    "type": "single",
    "answer": 2,
    "options": [
      "大革命时期，毛泽东以马列主义为指导，结合中国具体国情，提出了新民主主义革命的具体思想，标志着毛泽东思想初步形成。",
      "土地革命战争时期，毛泽东在一系列��作中阐述了“农村包围城市，武装夺取政权”的思想，标志着毛泽东思想的成熟。",
      "遵义会议以后，毛泽东系统地总结了党领导中国革命的历史经验，系统阐述了新民主主义革命理论，标志着毛泽东思想得到多方面的展开而趋于成熟。",
      "解放战争时期和新中国成立后，在“第二次结合”中形成了许多关于社会主义革命和社会主义建设的重要思想，是毛泽东思想的萌芽。"
    ],
    "subject": "毛概",
    "category": "新民主主义革命理论",
    "question": "以下关于毛泽东思想形成和发展时期的说法正确的是( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_147",
    "type": "single",
    "answer": 1,
    "options": [
      "学习马克思主义",
      "认清中国国情",
      "推翻封建主义",
      "推翻帝国主义"
    ],
    "subject": "毛概",
    "category": "新民主主义革命理论",
    "question": "( )是解决中国革命问题的基本前提。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_148",
    "type": "single",
    "answer": 2,
    "options": [
      "封建社会",
      "资本主义社会",
      "半殖民地半封建社会",
      "社会主义社会"
    ],
    "subject": "毛概",
    "category": "新民主主义革命理论",
    "question": "鸦片战争后，中国逐步成为( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_149",
    "type": "single",
    "answer": 1,
    "options": [
      "农民阶级和地主阶级的矛盾",
      "帝国主义和中华民族的矛盾",
      "封建主义和人民大众的矛盾",
      "工人阶级和资产阶级的矛盾"
    ],
    "subject": "毛概",
    "category": "新民主主义革命理论",
    "question": "在半殖民地半封建的近代中国，( )是各种矛盾中最主要的矛盾。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_150",
    "type": "single",
    "answer": 2,
    "options": [
      "辛亥革命",
      "新文化运动",
      "五四运动",
      "中国共产党成立"
    ],
    "subject": "毛概",
    "category": "新民主主义革命理论",
    "question": "以( )为标志，中国革命进入新民主主义革命阶段。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_151",
    "type": "single",
    "answer": 3,
    "options": [
      "推翻帝国主义",
      "推翻封建主义",
      "社会主义革命",
      "新民主主义革命"
    ],
    "subject": "毛概",
    "category": "新民主主义革命理论",
    "question": "中国革命分两步走，第一步是完成反帝反封建的( )任务。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_152",
    "type": "single",
    "answer": 2,
    "options": [
      "八七会议",
      "瓦窑堡会议",
      "遵义会议",
      "中共三大"
    ],
    "subject": "毛概",
    "category": "新民主主义革命理论",
    "question": "( )后，党逐步确立了毛泽东同志在党中央和红军的领导地位。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_153",
    "type": "single",
    "answer": 1,
    "options": [
      "阶级矛盾",
      "中日民族矛盾",
      "帝国主义间的矛盾",
      "敌我矛盾"
    ],
    "subject": "毛概",
    "category": "新民主主义革命理论",
    "question": "抗日战争时期，( )逐渐超越国内阶级矛盾上升为主要矛盾。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_154",
    "type": "single",
    "answer": 1,
    "options": [
      "团结群众",
      "分清敌友",
      "土地革命",
      "政权问题"
    ],
    "subject": "毛概",
    "category": "新民主主义革命理论",
    "question": "( )是中国革命的首要问题。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_155",
    "type": "single",
    "answer": 0,
    "options": [
      "帝国主义",
      "封建地主",
      "官僚资本主义",
      "北洋军阀"
    ],
    "subject": "毛概",
    "category": "新民主主义革命理论",
    "question": "( )是中国革命的首要对象。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_156",
    "type": "single",
    "answer": 3,
    "options": [
      "工人",
      "城市小资产阶级",
      "民族资产阶级",
      "农民"
    ],
    "subject": "毛概",
    "category": "新民主主义革命理论",
    "question": "( )是中国革命的主力军。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_157",
    "type": "single",
    "answer": 1,
    "options": [
      "城市",
      "农村",
      "工厂",
      "城郊"
    ],
    "subject": "毛概",
    "category": "新民主主义革命理论",
    "question": "毛泽东率领队伍开赴井冈山，创建了井冈山革命根据地，把武装斗争的主攻方向首先指向( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_158",
    "type": "single",
    "answer": 1,
    "options": [
      "坚持党对军队的绝对领导",
      "��心全意为人民服务",
      "民主建军",
      "坚持正确的战略战术"
    ],
    "subject": "毛概",
    "category": "新民主主义革命理论",
    "question": "人民军队必须以( )为唯一宗旨。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_159",
    "type": "single",
    "answer": 0,
    "options": [
      "坚持党对军队的绝对领导",
      "军民一致",
      "民主建军",
      "官兵一致"
    ],
    "subject": "毛概",
    "category": "新民主主义革命理论",
    "question": "( )是建设新型人民军队的根本原则。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_160",
    "type": "single",
    "answer": 0,
    "options": [
      "思想建设",
      "组织建设",
      "作风建设",
      "理论建设"
    ],
    "subject": "毛概",
    "category": "新民主主义革命理论",
    "question": "必须把( )始终放在党的建设的首位。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_161",
    "type": "multiple",
    "answer": [
      0,
      2
    ],
    "options": [
      "半殖民地半封建社会",
      "资本主义发展壮大",
      "最基本的国情",
      "完全沦为殖民地国家"
    ],
    "subject": "毛概",
    "category": "新民主主义革命理论",
    "question": "鸦片战争后，由于西方列强入侵和封建统治腐败，中国逐步成为    ，这是近代中国    。( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_162",
    "type": "multiple",
    "answer": [
      0,
      1
    ],
    "options": [
      "帝国主义和中华民族的矛盾",
      "封建主义和人民大众的矛盾",
      "资产阶级与农民阶级的矛盾",
      "资产阶���和工人阶级的矛盾"
    ],
    "subject": "毛概",
    "category": "新民主主义革命理论",
    "question": "在半殖民地半封建近代中国，社会矛盾呈现出错综复杂的状况。在诸多社会矛盾中，占支配地位的主要矛盾是( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_163",
    "type": "multiple",
    "answer": [
      1,
      2,
      3
    ],
    "options": [
      "军阀",
      "官僚资本主义",
      "帝国主义",
      "封建主义"
    ],
    "subject": "毛概",
    "category": "新民主主义革命理论",
    "question": "近代中国革命的根本任务是推翻( )的统治。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_164",
    "type": "multiple",
    "answer": [
      0,
      1,
      2
    ],
    "options": [
      "无产阶级领导的",
      "人民大众的",
      "反对帝国主义、封建主义和官僚资本主义",
      "武装斗争的"
    ],
    "subject": "毛概",
    "category": "新民主主义革命理论",
    "question": "毛泽东在《在晋绥干部会议上的讲话》中完整地总结和概括了新民主主义革命总路线的内容，即( )的革命。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_165",
    "type": "multiple",
    "answer": [
      1,
      2,
      3
    ],
    "options": [
      "民族资产阶级",
      "帝国主义",
      "官僚资本主义",
      "封建主义"
    ],
    "subject": "毛概",
    "category": "新民主主义革命理论",
    "question": "近代中国社会的性质和主要矛盾，决定了中国革命的主要敌人是( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_166",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "options": [
      "农民阶级",
      "无产阶级",
      "城市小资产阶级",
      "民族资产阶级"
    ],
    "subject": "毛概",
    "category": "新民主主义革命理论",
    "question": "新民主主义革命的动力包括( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_167",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "options": [
      "新民主主义革命处于世界无产阶级社会主义革命的时代，是世界无产阶级社会主义革命的一部分",
      "革命的领导力量是中国无产阶级及其先锋队——中国共产党",
      "革命的指导思想是马克思列宁主义",
      "革命的前途是社会主义而不是资本主义"
    ],
    "subject": "毛概",
    "category": "新民主主义革命理论",
    "question": "新民主主义革命与旧民主主义革命相比有新的内容和特点，集中表现为( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_168",
    "type": "multiple",
    "answer": [
      0,
      1,
      2
    ],
    "options": [
      "新民主主义的政治纲领",
      "新民主主义的文化纲领",
      "新民主主义的经济纲领",
      "新民主主义的社会纲领"
    ],
    "subject": "毛概",
    "category": "新民主主义革命理论",
    "question": "新民主主义的基本纲领包括的内容有( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_169",
    "type": "multiple",
    "answer": [
      0,
      2,
      3
    ],
    "options": [
      "土地革命是中国革命的基本内容",
      "土地革命是中国革命的主要形式",
      "武装斗争是中国革命的主要形式",
      "农村革命根据地是中国革命的战略阵地"
    ],
    "subject": "毛概",
    "category": "新民主主义革命理论",
    "question": "新民主主义革命道路的内容主要包括( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_170",
    "type": "multiple",
    "answer": [
      0,
      1,
      2
    ],
    "options": [
      "没收封建地主阶级的土地归农民所有",
      "保护民族工商业",
      "没收官僚资产阶级的垄断资本归新民主主义的国家所有",
      "平均地权"
    ],
    "subject": "毛概",
    "category": "新民主主义革命理论",
    "question": "新民主主义的经济纲领是( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_171",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "options": [
      "无产阶级领导的",
      "民族的",
      "科学的",
      "大众的"
    ],
    "subject": "毛概",
    "category": "新民主主义革命理论",
    "question": "新民主主义文化是( )文化。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_172",
    "type": "multiple",
    "answer": [
      0,
      1,
      3
    ],
    "options": [
      "《井冈山的斗争》",
      "《星星之火，可以燎原》",
      "《中国社会各阶级的分析》",
      "《中国的红色政权为什么能够存在?》"
    ],
    "subject": "毛概",
    "category": "新民主主义革命理论",
    "question": "在领导农村革命根据地的斗争实践中，毛泽东相继写下了( )等文章。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_173",
    "type": "multiple",
    "answer": [
      0,
      2,
      3
    ],
    "options": [
      "统一战线",
      "独立自主",
      "党的建设",
      "武装斗争"
    ],
    "subject": "毛概",
    "category": "新民主主义革命理论",
    "question": "( )是党在中国革命中战胜敌人的三个主要的法宝。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_174",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "options": [
      "第一次国共合作统一战线",
      "工农民主统一战线",
      "抗日民族统一战线",
      "人民民主统一战线"
    ],
    "subject": "毛概",
    "category": "新民主主义革命理论",
    "question": "新民主主义革命时期，中国共产党领导的统一战线，先后经历了( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_175",
    "type": "multiple",
    "answer": [
      0,
      1,
      3
    ],
    "options": [
      "理论联系实际",
      "密切联系群众",
      "为人民服务",
      "批评与自我批评"
    ],
    "subject": "毛概",
    "category": "新民主主义革命理论",
    "question": "党在领导新民主主义革命的过程中，形成了( )相结合的三大优良作风。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_176",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "新民主主义革命理论",
    "question": "中国新民主主义革命的伟大胜利极大改变了世界政治格局，鼓舞了被压迫民族和被压迫人民争取解放斗争。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_177",
    "type": "judge",
    "answer": 1,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "新民主主���革命理论",
    "question": "中国新民主主义的革命任务是反对帝国主义、封建主义和民族资本主义。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_178",
    "type": "judge",
    "answer": 1,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "新民主主义革命理论",
    "question": "毛泽东在《中国革命和中国共产党》中指出，解决中国革命问题的基本前提是建立统一战线。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_179",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "新民主主义革命理论",
    "question": "鸦片战争后中国逐步沦为半殖民地半封建社会。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_180",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "新民主主义革命理论",
    "question": "近代中国的社会性质和主要矛盾决定了中国革命仍然是资产阶级民主革命。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_181",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "新民主主义革命理论",
    "question": "抗日战争时期，阶级矛盾上升为主要矛盾。新民主主义革命的首要问题是分清敌友。新民主主义革命动力包括无产阶级、农民阶级、城市小资产阶级和民族资产阶级。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_182",
    "type": "judge",
    "answer": 1,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "新民主主义革命理论",
    "question": "近代中国社会的最主要矛盾是帝国主义和中华民族的矛盾。新民主主义革命与社会主义革命的性质不同。新民主主义革命仍然属于资产阶级民主主义革命的范畴。新民主主义革命的动力包括无产阶级、农民阶级、官僚资产阶级。无产阶级及其政党对中国的领导权是自然而然得来的。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_183",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "新民主主义革命理论",
    "question": "中国共产党领导人民开展新民主主义革命，是要建立一个新民主主义政权。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_184",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "新民主主义革命理论",
    "question": "没收封建地主阶级的土地归农民所有，是新民主主义革命的主要内容。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_185",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "新民主主义革命理论",
    "question": "没收官僚资本归新民主主义国家所有，是新民主主义革命的题中应有之义。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_186",
    "type": "judge",
    "answer": 1,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "新民主主义革命理论",
    "question": "毛泽东在《在晋绥干部会议上的讲话》一文中首次提出“新民主主义革命”的科学概念。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_187",
    "type": "judge",
    "answer": 1,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "新民主主义革命理论",
    "question": "党成立初期，首先把工作重心放在乡村。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_188",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "新民主主义革命理论",
    "question": "中国革命必须走农村包围城市、武装夺取政权的道路，都是由中国所处的时代特点和特殊国情决定的。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_189",
    "type": "judge",
    "answer": 1,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "新民主主义革命理论",
    "question": "党在中国革命中战胜敌人的三个主要的法宝是统一战线、武装斗争、党的领导。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_190",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "新民主主义革命理论",
    "question": "建设新型人民军队的根本原则是坚持党对军队的绝对领导权。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_191",
    "type": "single",
    "answer": 2,
    "options": [
      "开启新纪元",
      "社会主义革命胜利",
      "人民解放",
      "反对帝国主义"
    ],
    "subject": "毛概",
    "category": "社会主义改造理论",
    "question": "党团结带领全国人民浴血奋战，完成了新民主主义革命，实现了民族独立、( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_192",
    "type": "single",
    "answer": 1,
    "options": [
      "固定不变的社会",
      "过渡性的社会形态",
      "独立的社会形态",
      "共产主义社会的初级阶段"
    ],
    "subject": "毛概",
    "category": "社会主义改造理论",
    "question": "新民主主义社会是( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_193",
    "type": "single",
    "answer": 0,
    "options": [
      "七届二中全会",
      "七届三中全会",
      "六届六中全会",
      "七届四中全会"
    ],
    "subject": "毛概",
    "category": "社会主义改造理论",
    "question": "1949年3月，党的( )提出了“两个转变”同时并举的思想。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_194",
    "type": "single",
    "answer": 0,
    "options": [
      "社会主义工业化",
      "对农业的社会主义改造",
      "对手工业的社会主义改造",
      "对资本主义工商业的社会主义改造"
    ],
    "subject": "毛概",
    "category": "社会主义改造理论",
    "question": "过渡时期总路线的主要内容被概括为“一化三改”。“一化”指的是( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_195",
    "type": "single",
    "answer": 3,
    "options": [
      "1955年",
      "1957年",
      "1959年",
      "1956年"
    ],
    "subject": "毛概",
    "category": "社会主义改造理论",
    "question": "( )年底社会主义三大改造基本完成。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_196",
    "type": "single",
    "answer": 1,
    "options": [
      "供销合作",
      "和平赎买",
      "统销包购",
      "委托加工"
    ],
    "subject": "毛概",
    "category": "社会主义改造理论",
    "question": "中国共产党根据马克思、恩格斯和列宁关于采用和平方式变革所有制的设想，结合中国的具体情况，提出了对资本主义工商业实行( )的方针。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_197",
    "type": "single",
    "answer": 2,
    "options": [
      "个体经济",
      "合作社经济",
      "国家资本主义",
      "私人资本主义"
    ],
    "subject": "毛概",
    "category": "社会主义改造理论",
    "question": "资本主义工商业的社会主义改造，采取从低级到高级的( )的过渡形式。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_198",
    "type": "single",
    "answer": 0,
    "options": [
      "重工业",
      "农业",
      "第三产业",
      "轻工业"
    ],
    "subject": "毛概",
    "category": "社会主义改造理论",
    "question": "经过“一五”期间的大规模建设，我国以( )为重点的社会主义工业化基础已初步建立。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_199",
    "type": "single",
    "answer": 3,
    "options": [
      "中华人民共和国的成立",
      "国民经济的恢复与调整",
      "完成了资本主义工商业的社会主义改造",
      "社会主义改造的基本完成"
    ],
    "subject": "毛概",
    "category": "社会主义改造理论",
    "question": "社会主义基本制度在中国确立的主要标志是( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_200",
    "type": "single",
    "answer": 1,
    "options": [
      "1956年",
      "1954年",
      "1955年",
      "1960年"
    ],
    "subject": "毛概",
    "category": "社会主义改造理论",
    "question": "( )9月，第一届全国人民代表大会的召开和《中华人民共和国宪法》的制定及颁布施行，成为我国社会主义民主政治建设的里程碑。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_201",
    "type": "single",
    "answer": 1,
    "options": [
      "社会主义改造的基本完成",
      "社会主义基本制度的确立",
      "建立了工农政权",
      "建立了新中国"
    ],
    "subject": "毛概",
    "category": "社会主义改造理论",
    "question": "( )，使广大劳动人民真正成为国家的主人。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_202",
    "type": "single",
    "answer": 3,
    "options": [
      "基层群众自治制度",
      "民族区域自治制度",
      "中国共产党领导的多党合作和政治协商制度",
      "人民代表大会制度"
    ],
    "subject": "毛概",
    "category": "社会主义改造理论",
    "question": "我国的根本政治制度是( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_203",
    "type": "single",
    "answer": 2,
    "options": [
      "积累社会财富",
      "改造生产关系",
      "解放生产力",
      "推进工业化发展"
    ],
    "subject": "毛概",
    "category": "社会主义改造理论",
    "question": "社会主义革命的目的是为了( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_204",
    "type": "single",
    "answer": 3,
    "options": [
      "“一化一改”",
      "“两化一改”",
      "“两化三改”",
      "“一化三改”"
    ],
    "subject": "毛概",
    "category": "社会主义改造理论",
    "question": "党在过渡时期总路线的主要内容被概括为( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_205",
    "type": "single",
    "answer": 0,
    "options": [
      "自愿互利、典型示范、国家帮助的原则",
      "稳步前进的原则",
      "说服教育的原则",
      "依靠贫下中农兴办合作社的原则"
    ],
    "subject": "毛概",
    "category": "社会主义改造理论",
    "question": "我国对农业的社会主义改造遵循的原则是( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_206",
    "type": "multiple",
    "answer": [
      2,
      3
    ],
    "options": [
      "中国现代史的开始",
      "半殖民地社会的结束",
      "社会主义基本制度的确立",
      "中国历史上长达数千年的阶级剥削制度的结束"
    ],
    "subject": "毛概",
    "category": "社会主义改造理论",
    "question": "社会主义改造基本完成，标志着( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_207",
    "type": "multiple",
    "answer": [
      0,
      1,
      3
    ],
    "options": [
      "农业",
      "手工业",
      "资本主义手工业",
      "资本主义工商业"
    ],
    "subject": "毛概",
    "category": "社会主义改造理论",
    "question": "“一化三改”中，“三改”是指对( )的社会主义改造。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_208",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "options": [
      "逐步实现国家的社会主义工业化",
      "逐步实现国家对农业的社会主义改造",
      "逐步实现国家对手工业的社会主义改造",
      "逐步实现国家对资本主义工商业的社会主义改造"
    ],
    "subject": "毛概",
    "category": "社会主义改造理论",
    "question": "关于过渡时期的总路线，表述正确的是( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_209",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "options": [
      "是一条社会主义建设和社会主义改造同时并举的路线",
      "体现了社会主义工业化和社会主义改造的紧密结合",
      "体现了解放生产力与发展生产力、变革生产关系与发展生产力的有机统一",
      "其主要内容被概括为“一化三改”"
    ],
    "subject": "毛概",
    "category": "社会主义改造理论",
    "question": "过渡时期总路线是( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_210",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "options": [
      "国家所得税",
      "企业公积金",
      "工人福利费",
      "资方红利"
    ],
    "subject": "毛概",
    "category": "社会主义改造理论",
    "question": "在对资本主义工商业的社会主义改造中，对企业的利润实行“四马分肥”。“四马”指的是( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_211",
    "type": "multiple",
    "answer": [
      0,
      1,
      2
    ],
    "options": [
      "坚持社会主义工业化建设与社会主义改造同时并举",
      "采取积极引导、逐步过渡的方式",
      "用和平方法进行改造",
      "用暴力没收的方式进行改造"
    ],
    "subject": "毛概",
    "category": "社会主义改造理论",
    "question": "我国社会主义改造的历史经验有( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_212",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "options": [
      "极大地促进了我国社会生产力的发展",
      "为当代中国一切发展进步奠定了制度基础",
      "是马克思列宁主义关于社会主义革命理论在中国的正确运用和创造性发展的结果",
      "使占世界人口1/4的东方大国进入了社会主义，这是世界社会主义发展史上又一个历史性的伟大胜利"
    ],
    "subject": "毛概",
    "category": "社会主义改造理论",
    "question": "在我国确立社会主义基本制度具有十分重大的意义，因为社会主义基本制度的确立( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_213",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "options": [
      "新民主主义社会是一个过渡性的社会",
      "党在过渡时期总路线的主要内容被概括为“一化三改”",
      "社会主义改造的道路是符合中国特点的",
      "中华人民共和国的成立和社会主义基本制度的确立，是20世纪中国一次划时代的历史巨变"
    ],
    "subject": "毛概",
    "category": "社会主义改造理论",
    "question": "关于社会主义改造理论，以下说法准确的有( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_214",
    "type": "multiple",
    "answer": [
      1,
      2,
      3
    ],
    "options": [
      "巩固人民民主专政",
      "实现对农业的社会主义改造",
      "实现对手工业的社会主义改造",
      "实现对资本主义工商业的社会主义改造"
    ],
    "subject": "毛概",
    "category": "社会主义改造理论",
    "question": "过渡时期总路线的“两翼”是指( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_215",
    "type": "multiple",
    "answer": [
      0,
      2,
      3
    ],
    "options": [
      "由新民主主义向社会主义转变的过渡性社会形态",
      "独立的社会形态",
      "属于社会主义体系的，是逐步过渡到社会主义社会的过渡性质的社会",
      "既有社会主义因素又有非社会主义因素存在的社会"
    ],
    "subject": "毛概",
    "category": "社会主义改造理论",
    "question": "新民主主义社会是( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_216",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "社会主义改造理论",
    "question": "社会主义改造基本完成，标志着社会主义基本制度的确立和中国历史上长达数千年的阶级剥削制度的结束。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_217",
    "type": "judge",
    "answer": 1,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "社会主义改造理论",
    "question": "中国新民主主义的革命任务是反对帝国主义、封建主义和民族资本主义。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_218",
    "type": "judge",
    "answer": 1,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "社会主义改造理论",
    "question": "毛泽东在《中国革命和中国共产党》中指出，解决中国革命问题的基本前提是建立统一战线。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_219",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "社会主义改造理论",
    "question": "鸦片战争后中国逐步沦为半殖民地半封建社会。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_220",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "社会主义改造理论",
    "question": "近代中国的社会性质和主要矛盾决定了中国革命仍然是资产阶级民主革命。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_221",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "社会主义改造理论",
    "question": "抗日战争时期，阶级矛盾上升为主要矛盾。新民主主义革命的首要问题是分清敌友。新民主主义革命动力包括无产阶级、农民阶级、城市小资产阶级和民族资产阶级。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_222",
    "type": "judge",
    "answer": 1,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "社会主义改造理论",
    "question": "近代中国社会的最主要矛盾是帝国主义和中华民族的矛盾。新民主主义革命与社会主义革命的性质不同。新民主主义革命仍然属于资产阶级民主主义革命的范畴。新民主主义革命的动力包括无产阶级、农民阶级、官僚资产阶级。无产阶级及其政党对中国的领导权是自然而然得来的。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_223",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "社会主义改造理论",
    "question": "中国共产党领导人民开展新民主主义革命，是要建立一个新民主主义政权。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_224",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "社会主义改造理论",
    "question": "没收封建地主阶级的土地归农民所有，是新民主主义革命的主要内容。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_225",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "社会主义改造理论",
    "question": "没收官僚资本归新民主主义国家所有，是新民主主义革命的题中应有之义。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_226",
    "type": "judge",
    "answer": 1,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "社会主义改造理论",
    "question": "毛泽东在《在晋绥干部会议上的讲话》一文中首次提出“新民主主义革命”的科学概念。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_227",
    "type": "judge",
    "answer": 1,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "社会主义改造理论",
    "question": "党成立初期，首先把工作重心放在乡村。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_228",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "社会主义改造理论",
    "question": "中国革命必须走农村包围城市、武装夺取政权的道路，都是由中国所处的时代特点和特殊国情决定的。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_229",
    "type": "judge",
    "answer": 1,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "社会主义改造理论",
    "question": "党在中国革命中战胜敌人的三个主要的法宝是统一战线、武装斗争、党的领导。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_230",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "社会主义改造理论",
    "question": "建设新型人民军队的根本原则是坚持党对军队的绝对领导权。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_231",
    "type": "single",
    "answer": 0,
    "options": [
      "《论十大关系》",
      "《新民主主义论》",
      "《关于正确处理人民内部矛盾的问题》",
      "《中国革命和中国共产党》"
    ],
    "subject": "毛概",
    "category": "社会主义建设道路初步探索",
    "question": "毛泽东先后在中央政治局扩大会议和最高国务会议上，作了( )的报告，初步总结了我国社会主义建设经验，明确提出以苏为鉴，独立自主地探索适合中国情况的社会主义建设道路。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_232",
    "type": "single",
    "answer": 1,
    "options": [
      "《关于党在过渡时期的总路线》",
      "《论十大关系》",
      "《关于农业合作化问题》",
      "《关于国家资本主义》"
    ],
    "subject": "毛概",
    "category": "社会主义建设道路初步探索",
    "question": "( )标志着党探索中国社会主义建设道路的良好开端。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_233",
    "type": "single",
    "answer": 1,
    "options": [
      "人民内部的非对抗性的矛盾",
      "生产关系和生产力之间、上层建筑和经济基础之间的矛盾",
      "无产阶级和资产阶级之间、社会主义和资本主义之间的矛盾",
      "人民日益增长的物质文化需要同落后的社会生产之间的矛盾"
    ],
    "subject": "毛概",
    "category": "社会主义建设道路初步探索",
    "question": "关于社会主义社会的基本矛盾。毛泽东指出:“在社会主义社会中，基本的矛盾仍然是( )。”",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_234",
    "type": "single",
    "answer": 0,
    "options": [
      "《论十大关系》",
      "《论人民民主专政》",
      "《不要四面出击》",
      "《关于正确处理人民内部矛盾的问题》"
    ],
    "subject": "毛概",
    "category": "社会主义建设道路初步探索",
    "question": "( )确定了一个基本方针，就是“努力把党内党外、国内国外的一切积极因素，直接的、间接的积极因素，全部调动起来”，为社会主义建设服务。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_235",
    "type": "single",
    "answer": 3,
    "options": [
      "社会主义初级阶段",
      "共产主义初级阶段",
      "社会主义高级阶段",
      "比较发达的社会主义"
    ],
    "subject": "毛概",
    "category": "社会主义建设道路初步探索",
    "question": "毛泽东提出:“社会主义这个阶段，又可能分为两个阶段，第一个阶段是不发达的社会主义，第二个阶段是( )”。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_236",
    "type": "single",
    "answer": 1,
    "options": [
      "社会主义建设",
      "中国特色社会主义道路",
      "社会主义改造",
      "中国工业化道路"
    ],
    "subject": "毛概",
    "category": "社会主义建设道路初步探索",
    "question": "党在社会主义建设道路初步探索中的经验和教训，为我们在改革开放新时期探索和开辟( )提供了重要借鉴。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_237",
    "type": "single",
    "answer": 0,
    "options": [
      "中国工业化道路问题",
      "中国的农业发展问题",
      "中国的经济法律问题",
      "工业发展的计划问题"
    ],
    "subject": "毛概",
    "category": "社会主义建设道路初步探索",
    "question": "《论十大关系》前三条讲重工业和轻工业、农业的关系，沿海工业和内地工业的关系，经济建设和国防建设的关系。这实际上是在论述如何开辟一条和苏联有所不同的( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_238",
    "type": "single",
    "answer": 2,
    "options": [
      "十二大",
      "七大",
      "八大",
      "十一届三中全会"
    ],
    "subject": "毛概",
    "category": "社会主义建设道路初步探索",
    "question": "党的( )正确分析了社会主义改造完成后我国社会主要矛盾的变化，指出:社会主义制度在我国已经基本上建立起来了。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_239",
    "type": "single",
    "answer": 0,
    "options": [
      "《关于正确处理人民内部矛盾的问题》",
      "《新民主主义论》",
      "《论十大关系》",
      "《中国社会各阶级的分析》"
    ],
    "subject": "毛概",
    "category": "社会主义建设道路初步探索",
    "question": "毛泽东在1957年2月所作的( )的报告，系统论述社会主义社会矛盾的理论。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_240",
    "type": "single",
    "answer": 1,
    "options": [
      "团结——批评——团结的方针",
      "百花齐放、百家争鸣的方针",
      "长期共存、互相监督的方针",
      "用协商的方法解决"
    ],
    "subject": "毛概",
    "category": "社会主义建设道路初步探索",
    "question": "关于正确处理人民内部矛盾的方针。毛泽东指出，对于科学文化领域里的矛盾，实行( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_241",
    "type": "single",
    "answer": 2,
    "options": [
      "社会主义道路与资本主义道路的矛盾",
      "先进的生产关系和落后的生产力之间的矛盾",
      "人民对于经济文化迅速发展的需要同当前经济文化不能满足人民需要的状况之间的矛盾",
      "无产阶级同资产阶级的矛盾"
    ],
    "subject": "毛概",
    "category": "社会主义建设道路初步探索",
    "question": "党的八大指出，我们国内的主要矛盾已经不再是工人阶级和资产阶级的矛盾，而是( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_242",
    "type": "single",
    "answer": 1,
    "options": [
      "农业体系",
      "工业体系",
      "教育体系",
      "科技体系"
    ],
    "subject": "毛概",
    "category": "社会主义建设道路初步探索",
    "question": "1964年底，周恩来在第三届全国人大一次会议上所作的政府工作报告中提出了建设“四个现代化”的战略步骤:从第三个五年计划开始，第一步建成一个独立的比较完整的( )国民经济体系，第二步全面实现“四个现代化”，使中国的经济发展走在世界的前列。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_243",
    "type": "single",
    "answer": 2,
    "options": [
      "刘少奇",
      "毛泽东",
      "陈云",
      "邓小平"
    ],
    "subject": "毛概",
    "category": "社会主义建设道路初步探索",
    "question": "在社会主义建设道路初步探索过程中，走中国工业化道路，必须调整和完善所有制结构。( )提出了“三个主体，三个补充”设想。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_244",
    "type": "single",
    "answer": 3,
    "options": [
      "农业现代化",
      "工业现代化",
      "教育现代化",
      "科学技术现代化"
    ],
    "subject": "毛概",
    "category": "社会主义建设道路初步探索",
    "question": "在科技工作方面，我们党提出了“向科学进军”的口号，强调实现四个现代化关键在于( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_245",
    "type": "single",
    "answer": 1,
    "options": [
      "经济生活",
      "政治生活和思想文化生活",
      "政治生活",
      "文化生活"
    ],
    "subject": "毛概",
    "category": "社会主义建设道路初步探索",
    "question": "“十大关系”的后五条，论述的是( )领域如何调动各种积极因素的问题。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_246",
    "type": "multiple",
    "answer": [
      0,
      1
    ],
    "options": [
      "党内党外",
      "国内国外",
      "偶然的",
      "必然的"
    ],
    "subject": "毛概",
    "category": "社会主义建设道路初步探索",
    "question": "《论十大关系》确定了一个基本方针，就是“努力把( )的一切积极的因素，直接的、间接的积极因素，全部调动起来”，为社会主义建设服务。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_247",
    "type": "multiple",
    "answer": [
      1,
      2
    ],
    "options": [
      "社会主义道路同资本主义道路的矛盾",
      "生产力和生产关系之间的矛盾",
      "上层建筑和经济基础之间的矛盾",
      "无产阶级同资产阶级的矛盾"
    ],
    "subject": "毛概",
    "category": "社会主义建设道路初步探索",
    "question": "毛泽东指出，在社会主义社会中，基本的矛盾仍然是( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_248",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "options": [
      "汉族和少数民族关系",
      "党和非党关系",
      "是非关系",
      "革命和反革命的关系"
    ],
    "subject": "毛概",
    "category": "社会主义建设道路初步探索",
    "question": "毛泽东在《论十大关系》中讲( )、中国和外国的关系，论述的是政治生活和思想文化生活领域如何调动各种积极因素的问题。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_249",
    "type": "multiple",
    "answer": [
      2,
      3
    ],
    "options": [
      "初级阶段的社会主义",
      "高级阶段的社会主义",
      "不发达的社会主义",
      "比较发达的社会主义"
    ],
    "subject": "毛概",
    "category": "社会主义建设道路初步探索",
    "question": "毛泽东提出:“社会主义这个阶段，又可能分为两个阶段，第一个阶段是_____，第二个阶段是_____”。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_250",
    "type": "multiple",
    "answer": [
      2,
      3
    ],
    "options": [
      "中学为体",
      "西学为用",
      "百花齐放",
      "百家争鸣"
    ],
    "subject": "毛概",
    "category": "社会主义建设道路初步探索",
    "question": "在文化工作方面，党提出了( )这一促进我国社会主义文化繁荣的方针。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_251",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "options": [
      "现代农业",
      "现代工业",
      "现代国防",
      "现代科学技术"
    ],
    "subject": "毛概",
    "category": "社会主义建设道路初步探索",
    "question": "1964年底，周恩来在第三届全国人民代表大会第一次会议上正式宣布，“把我国建设成为一个具有( )的社会主义强国。”",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_252",
    "type": "multiple",
    "answer": [
      1,
      2
    ],
    "options": [
      "保守",
      "急躁冒进",
      "急于求成",
      "墨守成规"
    ],
    "subject": "毛概",
    "category": "社会主义建设道路初步探索",
    "question": "社会主义建设开始后，全党全国人民都有大力发展生产、迅速改变落后面貌的强烈愿望。这一方面极大地促进了社会主义建设，取得了显著成就，但同时也出现了( )的倾向。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_253",
    "type": "multiple",
    "answer": [
      0,
      1,
      2
    ],
    "options": [
      "强调独立自主地探索适合中国情况的社会主义建设道路",
      "提出以苏为鉴",
      "提出马克思主义同中国实际的“第二次结合”",
      "强调改革开放"
    ],
    "subject": "毛概",
    "category": "社会主义建设道路初步探索",
    "question": "1956年起，毛泽东开始探索适合中国特点的社会主义建设道路。与此相联系，毛泽东提出了一系列新思想，主要有( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_254",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "options": [
      "必须把马克思主义与中国实际相结合，探索符合中国特点的社会主义建设道路",
      "必须正确认识社会主义社会的主要矛盾和根本任务，集中力量发展生产力;必须从实际出发进行社会主义建设，建设规模和速度要和国力相适应，不能急于求成",
      "必须发展社会主义民主，健全社会主义法制;必须坚持党的民主集中制和集体领导制度，加强执政党建设",
      "必须坚持对外开放，借鉴和吸收人类文明成果建设社会主义，不能关起门来搞建设"
    ],
    "subject": "毛概",
    "category": "社会主义建设道路初步探索",
    "question": "社会主义建设道路的初步探索有着丰富的经验教训，这些经验教训是( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_255",
    "type": "multiple",
    "answer": [
      2,
      3
    ],
    "options": [
      "《论持久战》",
      "《实践论》",
      "《论十大关系》",
      "《关于正确处理人民内部矛盾的问题》"
    ],
    "subject": "毛概",
    "category": "社会主义建设道路初步探索",
    "question": "集中体现毛泽东探索中国社会主义建设道路所取得的理论成果的著作有( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_256",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "社会主义建设道路初步探索",
    "question": "社会主义建设道路初步探索时期，毛泽东提出了发展商品生产、利用价值规律的思想���认为商品生产在社会主义条件下，还是一个不可缺少的、有利的工具，要有计划地大大地发展社会主义的商品生产。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_257",
    "type": "judge",
    "answer": 1,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "社会主义建设道路初步探索",
    "question": "在社会主义社会建成以前，无产阶级与资产阶级的矛盾，社会主义道路与资本主义道路的矛盾，始终是我国社会的主要矛盾。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_258",
    "type": "judge",
    "answer": 1,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "社会主义建设道路初步探索",
    "question": "新中国成立初期，我国主要是学习苏联经验，这在当时是必要的，也取得了一定的成效，这证明，照搬照抄苏联模式符合中国国情。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_259",
    "type": "judge",
    "answer": 1,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "社会主义建设道路初步探索",
    "question": "我国社会主义改造的任务完成以后，国内的社会矛盾和阶级关系发生重大的变化，无产阶级同资产阶级之间的矛盾已经完全彻底地解决了。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_260",
    "type": "judge",
    "answer": 1,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "社会主义建设道路初步探索",
    "question": "社会主义社会的矛盾反映在政治上可以划分为敌我矛盾和人民内部矛盾，这是两类性质相同的矛盾。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_261",
    "type": "judge",
    "answer": 1,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "社会主义建设道路初步探索",
    "question": "在我国社会主义建设初期，工人阶级同民族资产阶级的矛盾属于敌我矛盾。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_262",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "社会主义建设道路初步探索",
    "question": "在《关于正确处理人民内部矛盾的问题》一文中，毛泽东明确提出要求一条有别于苏联的中国工业化道路。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_263",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "社会主义建设道路初步探索",
    "question": "社会主义道路初步探索的成就表明，社会主义建设没有一个固定不变的模式，各个国家应该根据自己的国情，独立自主地选择适合自己的发展道路。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_264",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "社会主义建设道路初步探索",
    "question": "社会主义代替资本主义，并不意味着社会主义要全盘否定和抛弃资本主义创造的一切成果，也并不意味着社会主义不同资本主义发生任何联系。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_265",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "社会主义建设道路初步探索",
    "question": "实践证明，无产阶级政党在执政以后，必须认真坚持民主集中制和集体领导原则，反对个人崇拜，不断加强党的自身建设，充分发挥党组织和广大党员的积极性、创造性，保证党的决策的科学化、民主化。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_266",
    "type": "judge",
    "answer": 1,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "社会主义建设道路初步探索",
    "question": "《关于正确处理人民内部矛盾的问题》的报告，初步总结了我国社会主义建设的经验，明确提出了以苏为鉴，独立自主地探索适合中国情况的社会主义建设道路。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_267",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "社会主义建设道路初步探索",
    "question": "社会主义制度建立后，工人阶级和民族资产阶级仍然存在着对抗性的矛盾。毛泽东提出以工业为主导，把重工业作为我国经济建设的重点，以逐步建立独立的比较完整的基础工业体系和国防工业体系。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_268",
    "type": "judge",
    "answer": 1,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "社会主义建设道路初步探索",
    "question": "全面建设社会主义时期毛泽东和党的其他领导人提出的关于社会主义建设的一系列正确观点，是中国特色社会主义理论体系的重要内容。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_269",
    "type": "judge",
    "answer": 1,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "社会主义建设道路初步探索",
    "question": "社会主义社会中已经消除了矛盾。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_270",
    "type": "judge",
    "answer": 1,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "社会主义建设道路初步探索",
    "question": "我国社会主义改造的任务完成以后，国内的社会矛盾和阶级关系发生重大的变化，无产阶级同资产阶级之间的矛盾已经完全彻底地解决了。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_271",
    "type": "single",
    "answer": 0,
    "options": [
      "和平与发展",
      "革命与战争",
      "改革与开放",
      "合作与共赢"
    ],
    "subject": "毛概",
    "category": "邓小平理论",
    "question": "( )是邓小平对世界时代主题的判断。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_272",
    "type": "single",
    "answer": 2,
    "options": [
      "十一届二中全会",
      "十二大",
      "十一届三中全会",
      "十一届四中全会"
    ],
    "subject": "毛概",
    "category": "邓小平理论",
    "question": "1978年12月召开的党的( )，重新确立了解放思想、实事求是的思想路线，确定把全党工作的着重点转移到社会主义现代化建设上来。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_273",
    "type": "single",
    "answer": 0,
    "options": [
      "实事求是",
      "社会主义本质",
      "自力更生",
      "群众路线"
    ],
    "subject": "毛概",
    "category": "邓小平理论",
    "question": "邓小平指出:“解放思想，就是使思想和实际相符合，使主观和客观相符合，就是( )。”",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_274",
    "type": "single",
    "answer": 1,
    "options": [
      "精神文明",
      "共同富裕",
      "可持续发展",
      "人类命运共同体"
    ],
    "subject": "毛概",
    "category": "邓小平理论",
    "question": "社会主义社会发展生产力的目的不是为少数人谋利益，而是要使全体社会成员过上富裕幸福的生活，是要实现( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_275",
    "type": "single",
    "answer": 3,
    "options": [
      "如何进行改革开放",
      "如何两手抓，两手都要硬",
      "如何坚持中国特色社会主义道路",
      "什么是社会主义、怎样建设社会主义"
    ],
    "subject": "毛概",
    "category": "邓小平理论",
    "question": "邓小平在领导改革开放和现代化建设这一新的革命过程中，不断提出和反复思考的首要的基本的理论问题是( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_276",
    "type": "single",
    "answer": 1,
    "options": [
      "以经济建设为中心",
      "解放思想，实事求是",
      "坚持四项基本原则",
      "坚持马克思列宁主义毛泽东思想"
    ],
    "subject": "毛概",
    "category": "邓小平理论",
    "question": "党的十一届三中全会以后，以邓小平同志为主要代表的中国共产党人重新确立并丰富发展了党的思想路线，即( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_277",
    "type": "single",
    "answer": 0,
    "options": [
      "社会主义初级阶段理论",
      "以经济建设为中心论",
      "四项基本原则",
      "党在初级阶段的基本路线"
    ],
    "subject": "毛概",
    "category": "邓小平理论",
    "question": "( )基于对中国国情的准确把握，揭示了当代中国的历史方位，为建设中国特色社会主义提供了总依据。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_278",
    "type": "single",
    "answer": 0,
    "options": [
      "发展生产力",
      "以经济建设为中心",
      "走向共同富裕",
      "全面建成小康社会"
    ],
    "subject": "毛概",
    "category": "邓小平理论",
    "question": "社会主义的根本任务是( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_279",
    "type": "single",
    "answer": 1,
    "options": [
      "毛泽东思想",
      "邓小平理论",
      "“三个代表”重要思想",
      "《论人民民主专政》"
    ],
    "subject": "毛概",
    "category": "邓小平理论",
    "question": "中国特色社会主义理论体系的开篇之作是( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_280",
    "type": "single",
    "answer": 3,
    "options": [
      "政治建设",
      "文化建设",
      "社会建设",
      "经济建设"
    ],
    "subject": "毛概",
    "category": "邓小平理论",
    "question": "社会主义的根本任务是发展生产力，党和国家的工作重点是( )，这是党对我国社会主义建设经验教训和社会主义矛盾进行科学分析得出的最重要的结论。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_281",
    "type": "single",
    "answer": 3,
    "options": [
      "《实践是检验真理的唯一标准》",
      "《党和国家领导制度的改革》",
      "《中共中央关于经济体制改革的决定》",
      "《告台湾同胞书》"
    ],
    "subject": "毛概",
    "category": "邓小平理论",
    "question": "1979年元旦，全国人大常委会发表( )，郑重宣示了争取祖国和平统一的大政方针。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_282",
    "type": "single",
    "answer": 0,
    "options": [
      "改革",
      "革命",
      "和谐",
      "科学技术"
    ],
    "subject": "毛概",
    "category": "邓小平理论",
    "question": "社会主义社会发展的直接动力是( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_283",
    "type": "single",
    "answer": 1,
    "options": [
      "毛泽东",
      "邓小平",
      "江泽民",
      "胡锦涛"
    ],
    "subject": "毛概",
    "category": "邓小平理论",
    "question": "提出“科学技术是第一生产力”这个重大论断的是( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_284",
    "type": "single",
    "answer": 0,
    "options": [
      "坚持一个中国",
      "实行两种制度",
      "实现两岸三通",
      "放弃使用武力"
    ],
    "subject": "毛概",
    "category": "邓小平理论",
    "question": "“和平统一、一国两制”的核心是( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_285",
    "type": "single",
    "answer": 2,
    "options": [
      "相信群众，依靠群众",
      "发展和解放生产力",
      "解放思想，实事求是",
      "以经济建设为中心"
    ],
    "subject": "毛概",
    "category": "邓小平理论",
    "question": "邓小平理论的精髓是( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_286",
    "type": "single",
    "answer": 3,
    "options": [
      "新民主主义革命的检验",
      "社会主义革命的检验",
      "新时代中国特色社会主义现代化建设的检验",
      "改革开放和现代化建设实践的检验"
    ],
    "subject": "毛概",
    "category": "邓小平理论",
    "question": "邓小平理论经过( )，已经被证明是指导中国人民建设中国特色社会主义、保证中国在改革开放中实现国家繁荣富强和人民共同富裕的系统的科学理论。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_287",
    "type": "single",
    "answer": 1,
    "options": [
      "马克思主义",
      "“三个有利于”",
      "实践",
      "生产力"
    ],
    "subject": "毛概",
    "category": "邓小平理论",
    "question": "检验一切工作是非得失的根本标准是( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_288",
    "type": "single",
    "answer": 2,
    "options": [
      "发展社会主义民主，加强社会主义法制",
      "一手抓物质文明，一手抓精神文明",
      "坚持四项基本原则，坚持改革开放",
      "自力更生，艰苦创业"
    ],
    "subject": "毛概",
    "category": "邓小平理论",
    "question": "党在社会主义初级阶段的基本路线的“两个基本点”是( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_289",
    "type": "single",
    "answer": 0,
    "options": [
      "自力更生，艰苦创业",
      "自力更生，团结一致",
      "团结一致，奋勇前进",
      "艰苦创业，奋勇前进"
    ],
    "subject": "毛概",
    "category": "邓小平理论",
    "question": "( )是实现社会主义初级阶段奋斗目标的根本立足点。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_290",
    "type": "single",
    "answer": 0,
    "options": [
      "科学技术是第一生产力",
      "科技工作要面向经济建设",
      "中国在高科技领域要占有一席之地",
      "中国的农业最终要靠科技解决问题"
    ],
    "subject": "毛概",
    "category": "邓小平理论",
    "question": "关于科学技术的极端重要性，邓小平有一著名论断，这就是( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_291",
    "type": "single",
    "answer": 0,
    "options": [
      "以经济建设为中心",
      "以政治改革为中心",
      "以对外开放为中心",
      "以体制改革为中心"
    ],
    "subject": "毛概",
    "category": "邓小平理论",
    "question": "党在社会主义初级阶段的基本路线的“一个中心”是( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_292",
    "type": "single",
    "answer": 3,
    "options": [
      "社会主义���本制度的改革",
      "社会主义经济运行方式的改变",
      "社会主义原有体制的修补",
      "社会主义制度的自我完善和发展"
    ],
    "subject": "毛概",
    "category": "邓小平理论",
    "question": "邓小平明确指出:“改革是中国的第二次革命。”所谓第二次革命，是与中国共产党领导的第一次革命相对而言的。社会主义改革的性质是( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_293",
    "type": "single",
    "answer": 3,
    "options": [
      "中国和美国的关系问题",
      "中国和日本的关系问题",
      "历史上殖民主义侵略遗留下来的问题",
      "中国的内政问题"
    ],
    "subject": "毛概",
    "category": "邓小平理论",
    "question": "台湾问题性质不同于香港问题和澳门问题。台湾问题的实质是( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_294",
    "type": "single",
    "answer": 0,
    "options": [
      "台湾问题提出来的",
      "澳门问题提出来的",
      "香港问题提出来的",
      "香港和澳门问题提出来的"
    ],
    "subject": "毛概",
    "category": "邓小平理论",
    "question": "“一国两制”构想的提出，最早是针对( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_295",
    "type": "single",
    "answer": 2,
    "options": [
      "首次提出了社会主义初级阶段概念",
      "首次系统阐述了社会主义初级阶段理论",
      "首次把社会主义初级阶段作为事关全局的基本国情加以把握",
      "首次对社会主义发展阶段进行了划分"
    ],
    "subject": "毛概",
    "category": "邓小平理论",
    "question": "党的十三大召开前夕，邓小平强调指出:“社会主义本身是共产主义的初级阶段，而我们中国又处在社会主义的初级阶段，就是不发达的阶段。一切都要从这个实际出发，根据这个实际来制订规划。”这一论述( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_296",
    "type": "multiple",
    "answer": [
      1,
      2,
      3
    ],
    "options": [
      "以经济建设为中心",
      "解放生产力，发展生产力",
      "消灭剥削，消除两极分化",
      "最终达到共同富裕"
    ],
    "subject": "毛概",
    "category": "邓小平理论",
    "question": "在1992年南方谈话中，邓小平指出，社会主义的本质是( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_297",
    "type": "multiple",
    "answer": [
      2,
      3
    ],
    "options": [
      "初级阶段是中国特有的国情所必须经历的一个阶段",
      "初级阶段是任何国家走向社会主义、共产主义都必须经历的阶段",
      "我国的社会主义社会还处在初级阶段。我们必须从这个实际出发，而不能超越这个阶段",
      "我国社会已经是社会主义社会。我们必须坚持而不能离开社会主义"
    ],
    "subject": "毛概",
    "category": "邓小平理论",
    "question": "社会主义初级阶段的论断包括两层含义( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_298",
    "type": "multiple",
    "answer": [
      0,
      2
    ],
    "options": [
      "解放思想",
      "理论联系实际",
      "实事求是",
      "在实践中检验真理和发展真理"
    ],
    "subject": "毛概",
    "category": "邓小平理论",
    "question": "在改革开放和现代化建设进程中，邓小平在关键时刻作出的每一项重大决策，都体现了( )的思想路线。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_299",
    "type": "multiple",
    "answer": [
      0,
      1,
      2
    ],
    "options": [
      "使我们党对社会主义建设的长期性、复杂性、艰巨性有了更加清醒的认识",
      "基于对中国国情的准确把握，揭示了当代中国的历史方位，为建设中国特色社会主义提供了总依据",
      "是对马克思主义关于社会主义发展阶段理论的重大发展和重大突破",
      "正确回答了中国革命和建设的首要的基本的理论问题"
    ],
    "subject": "毛概",
    "category": "邓小平理论",
    "question": "社会主义制度建立以后，也有一个如何认清国情、正确判断我国社会所处历史方位的问题。社会主义初级阶段理论( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_300",
    "type": "multiple",
    "answer": [
      0,
      1
    ],
    "options": [
      "和平问题",
      "经济问题或发展问题",
      "生态环境问题",
      "种族歧视问题"
    ],
    "subject": "毛概",
    "category": "邓小平理论",
    "question": "邓小平指出，现在世界上真正大的问题，带全球性的战略问题是( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_301",
    "type": "multiple",
    "answer": [
      1,
      2,
      3
    ],
    "options": [
      "是否有利于巩固社会主义制度",
      "是否有利于提高人民的生活水平",
      "是否有利于发展社会主义社会的生产力",
      "是否有利于增强社会主义国家的综合国力"
    ],
    "subject": "毛概",
    "category": "邓小平理论",
    "question": "改革是一项崭新的事业，是一个大实验。判断改革和各方面是非得失，归根到底，主要看( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_302",
    "type": "multiple",
    "answer": [
      0,
      1,
      2
    ],
    "options": [
      "以经济建设为中心",
      "坚持四项基本原则",
      "坚持改革开放",
      "坚持长治久安"
    ],
    "subject": "毛概",
    "category": "邓小平理论",
    "question": "“一个中心、两个基本点”包括( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_303",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "options": [
      "把对社会主义的认识提高到新的科学水平",
      "反映了人民的利益和时代的要求",
      "廓清了不合乎时代进步和社会发展规律的模糊观念",
      "摆脱了长期以来拘泥于具体模式而忽略社会主义本质的错误倾向"
    ],
    "subject": "毛概",
    "category": "邓小平理论",
    "question": "邓小平关于社会主义本质的概括，理解正确的是( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_304",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "邓小平理论",
    "question": "1992年，邓小平在南方谈话提出了社会主义的本质是解放生产力，发展生产力，消灭剥削，消除两极分化，最终达到共同富裕的重要论断。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_305",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "邓小平理论",
    "question": "“一个中心、两个基本点”的基本路线是在1987年党的十三大得到明确概论和全面阐发。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_306",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "邓小平理论",
    "question": "党的十八大以来，党面临的主要任务是，实现第一个百年奋斗目标，开启实现第二个百年奋斗目标新征程，朝着实现中华民族伟大复兴的宏伟目标继续前进。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_307",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "邓小平理论",
    "question": "邓小平发表了《解放思想，实事求是，团结一致向前看》的重要讲话，这实际上是党的十一届三中全会的主题报告。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_308",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "邓小平理论",
    "question": "“自力更生，艰苦创业”不仅是改变我国不发达现状的需要，也体现了社会主义的奋斗精神。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_309",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "邓小平理论",
    "question": "改革不是对原有经济体制细枝末节的修补，它的实质和目标是要从根本上改变束缚我国生产力发展的经济体制。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_310",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "邓小平理论",
    "question": "改革是社会主义社会发展的直接动力。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_311",
    "type": "judge",
    "answer": 1,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "邓小平理论",
    "question": "社会主义的本质，是改善生产关系，消灭剥削，消除两极分化，最终达到共同富裕。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_312",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "邓小平理论",
    "question": "社会主义精神文明是社会主义社会的重要特征。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_313",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "邓小平理论",
    "question": "邓小平提出“四个现代化，关键是科学技术的现代化”。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_314",
    "type": "judge",
    "answer": 1,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "邓小平理论",
    "question": "邓小平理论形成的时代主题是战争与革命。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_315",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "邓小平理论",
    "question": "邓小平理论首要的基本的理论问题是什么是社会主义，怎样建设社会主义的问题。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_316",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "邓小平理论",
    "question": "两手抓，两手都要硬。即一手抓物质文明，一手抓精神文明。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_317",
    "type": "judge",
    "answer": 1,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "邓小平理论",
    "question": "能否坚持以文化建设为中心，是关系到我国社会主义现代化成败的大问题。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_318",
    "type": "judge",
    "answer": 1,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "邓小平理论",
    "question": "是否有利于增强社会主义国家的文化软实力，是“三个有利于”标准之一。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_319",
    "type": "single",
    "answer": 2,
    "options": [
      "先进的生产方式",
      "先进的生产关系",
      "发达的生产力",
      "先进的科学技术"
    ],
    "subject": "毛概",
    "category": "三个代表重要思想",
    "question": "社会主义现代化必须建立在( )的基础之上。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_320",
    "type": "single",
    "answer": 3,
    "options": [
      "劳动工具",
      "技术",
      "劳动对象",
      "人"
    ],
    "subject": "毛概",
    "category": "三个代表重要思想",
    "question": "生产力中最活跃的因素是( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_321",
    "type": "single",
    "answer": 3,
    "options": [
      "科学技术",
      "文化资源",
      "物质资源",
      "人才资源"
    ],
    "subject": "毛概",
    "category": "三个代表重要思想",
    "question": "在改革开放和现代化建设过程中，第一资源是( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_322",
    "type": "single",
    "answer": 0,
    "options": [
      "科学技术",
      "科学家科研水平",
      "GDP",
      "人才"
    ],
    "subject": "毛概",
    "category": "三个代表重要思想",
    "question": "( )是第一生产力，先进生产力的集中体现和主要标志。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_323",
    "type": "single",
    "answer": 3,
    "options": [
      "中国特色社会主义政治",
      "改革开放",
      "社会主义现代化建设",
      "中国特色社会主义文化"
    ],
    "subject": "毛概",
    "category": "三个代表重要思想",
    "question": "( )是凝聚和激励全国各族人民的重要力量，是综合国力的重要标志。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_324",
    "type": "single",
    "answer": 1,
    "options": [
      "经济效益",
      "社会效益",
      "做好思想政治工作",
      "弘扬民族精神"
    ],
    "subject": "毛概",
    "category": "三个代表重要思想",
    "question": "发展各类文化事业和文化产业都要贯彻发展先进文化的要求，始终把( )放在首位，努力实现社会效益和经济效益的有机统一。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_325",
    "type": "single",
    "answer": 1,
    "options": [
      "党的建设",
      "人心向背",
      "能否实现现代化",
      "是否坚持改革开放"
    ],
    "subject": "毛概",
    "category": "三个代表重要思想",
    "question": "江泽民指出，( )是决定一个政党、一个政权兴亡的根本性因素。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_326",
    "type": "single",
    "answer": 1,
    "options": [
      "工人阶级",
      "人民",
      "集体",
      "组织"
    ],
    "subject": "毛概",
    "category": "三个代表重要思想",
    "question": "我们党始终坚持( )的利益高于一切。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_327",
    "type": "single",
    "answer": 0,
    "options": [
      "坚持党的先进性",
      "坚持党的政治纪律",
      "坚持党的纯洁性",
      "坚持党的最终奋斗目标"
    ],
    "subject": "毛概",
    "category": "三个代表重要思想",
    "question": "贯彻“三个代表”重要思想，核心在于( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_328",
    "type": "single",
    "answer": 3,
    "options": [
      "党的先进性",
      "党的领导",
      "执政兴国",
      "执政为民"
    ],
    "subject": "毛概",
    "category": "三个代表重要思想",
    "question": "贯彻“三个代表”重要思想，本质在坚持( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_329",
    "type": "single",
    "answer": 0,
    "options": [
      "与时俱进",
      "党的领导",
      "执政兴国",
      "执政为民"
    ],
    "subject": "毛概",
    "category": "三个代表重要思想",
    "question": "贯彻“三个代表”重要思想，关键在坚持( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_330",
    "type": "single",
    "answer": 0,
    "options": [
      "发展",
      "稳定",
      "和谐",
      "民主"
    ],
    "subject": "毛概",
    "category": "三个代表重要思想",
    "question": "( )是党执政兴国的第一要务。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_331",
    "type": "single",
    "answer": 1,
    "options": [
      "革命",
      "发展",
      "改革",
      "开放"
    ],
    "subject": "毛概",
    "category": "三个代表重要思想",
    "question": "用( )的办法解决前进中的问题，是改革开放以来我们的一条重要经验。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_332",
    "type": "single",
    "answer": 0,
    "options": [
      "依靠自己的发展",
      "合作共赢",
      "建立人类命运共同体",
      "改革开放"
    ],
    "subject": "毛概",
    "category": "三个代表重要思想",
    "question": "中国解决所有问题的关键在于( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_333",
    "type": "single",
    "answer": 0,
    "options": [
      "以经济建设为中心",
      "四项基本原则",
      "改革开放",
      "自力更生、艰苦创业"
    ],
    "subject": "毛概",
    "category": "三个代表重要思想",
    "question": "发展必须毫不动摇地坚持党在社会主义初级阶段的基本路线，关键在于坚持( )不动摇。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_334",
    "type": "single",
    "answer": 1,
    "options": [
      "十三大",
      "十四大",
      "十五大",
      "十六大"
    ],
    "subject": "毛概",
    "category": "三个代表重要思想",
    "question": "党的( )正式把建立社会主义市场经济体制确立为我国经济体制改革的目标。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_335",
    "type": "single",
    "answer": 0,
    "options": [
      "依法治国",
      "以德治国",
      "人才强国",
      "科教兴国"
    ],
    "subject": "毛概",
    "category": "三个代表重要思想",
    "question": "党领导人民治理国家的基本方略是( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_336",
    "type": "single",
    "answer": 1,
    "options": [
      "2000年",
      "2001年",
      "2002年",
      "2003年"
    ],
    "subject": "毛概",
    "category": "三个代表重要思想",
    "question": "中国正式加入世界贸易组织是在( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_337",
    "type": "single",
    "answer": 2,
    "options": [
      "进入共产主义社会",
      "实现社会主义现代化",
      "人民的根本利益",
      "实现中华民族伟大复兴"
    ],
    "subject": "毛概",
    "category": "三个代表重要思想",
    "question": "“三个代表”重要思想坚持把( )作为出发点和归宿。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_338",
    "type": "single",
    "answer": 1,
    "options": [
      "十五大",
      "十六大",
      "十七大",
      "十八大"
    ],
    "subject": "毛概",
    "category": "三个代表重要思想",
    "question": "2002年11月，党的( )将“三个代表”重要思想同马克思列宁主义、毛泽东思想和邓小平理论一道确立为党必须长期坚持的指导思想，并写入党章，实现了我们党指导思想的又一次与时俱进。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_339",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "options": [
      "以科学的理论武装人",
      "以正确的舆论引导人",
      "以高尚的精神塑造人",
      "以优秀的作品鼓舞人"
    ],
    "subject": "毛概",
    "category": "三个代表重要思想",
    "question": "江泽民指出，加强文化建设，必须( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_340",
    "type": "multiple",
    "answer": [
      0,
      1,
      2
    ],
    "options": [
      "民族的",
      "科学的",
      "大众的",
      "全面的"
    ],
    "subject": "毛概",
    "category": "三个代表重要思想",
    "question": "发展先进文化，就是发展面向现代化、面向世界、面向未来的，( )的社会主义文化。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_341",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "options": [
      "团结统一",
      "爱好和平",
      "勤劳勇敢",
      "自强不息"
    ],
    "subject": "毛概",
    "category": "三个代表重要思想",
    "question": "在五千多年的发展进程中，中华民族形成了以爱国主义为核心的( )的伟大民族精神。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_342",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "options": [
      "人民拥不拥护",
      "人民赞成不赞成",
      "人民高兴不高兴",
      "人民答应不答应"
    ],
    "subject": "毛概",
    "category": "三个代表重要思想",
    "question": "江泽民强调，我们想事情，做���作，想得对不对，做得好不好，要有一个根本的衡量尺度，这就是( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_343",
    "type": "multiple",
    "answer": [
      0,
      1,
      3
    ],
    "options": [
      "始终代表中国先进生产力的发展要求",
      "始终代表中国最广大人民的根本利益",
      "始终代表社会历史发展的潮流",
      "始终代表中国先进文化的前进方向"
    ],
    "subject": "毛概",
    "category": "三个代表重要思想",
    "question": "“三个代表”重要思想的集中概括就是，中国共产党必须( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_344",
    "type": "multiple",
    "answer": [
      0,
      2
    ],
    "options": [
      "建设什么样的党",
      "什么是改革开放",
      "怎样建设党",
      "怎样建设现代化国家"
    ],
    "subject": "毛概",
    "category": "三个代表重要思想",
    "question": "“三个代表”重要思想创造性地回答了( )的问题。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_345",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "options": [
      "党领导人民治理国家的基本方略",
      "发展社会主义市场经济的客观需要",
      "社会文明进步的重要标志",
      "国家长治久安的重要保障"
    ],
    "subject": "毛概",
    "category": "三个代表重要思想",
    "question": "江泽民在党的十五大报告中明确指出，依法治国是( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_346",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "options": [
      "有理想",
      "有道德",
      "有文化",
      "有纪律"
    ],
    "subject": "毛概",
    "category": "三个代表重要思想",
    "question": "建设有中国特色社会主义的文化，就是以马克思主义为指导，以培育( )的公民为目标，发展面向现代化、面向世界、面向未来的，民族的科学的大众的社会主义文化。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_347",
    "type": "multiple",
    "answer": [
      0,
      2,
      3
    ],
    "options": [
      "立党之本",
      "前提保障",
      "执政之基",
      "力量之源"
    ],
    "subject": "毛概",
    "category": "三个代表重要思想",
    "question": "江泽民强调，“三个代表”要求，是我们党的( )，也是我们在新世纪全面推进党的建设，不断推进理论创新、制度创新和科技创新，不断夺取建设有中国特色社会主义事业新胜利的根本要求。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_348",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "options": [
      "必须使全党始终保持与时俱进的精神状态，不断开拓马克思主义理论发展的新境界",
      "必须把发展作为党执政兴国的第一要务，不断开创现代化建设的新局面",
      "必须最广泛最充分地调动一切积极因素，不断为中华民族伟大复兴增添新力量",
      "必须以改革的精神推进党的建设，不断为党的肌体注入新活力"
    ],
    "subject": "毛概",
    "category": "三个代表重要思想",
    "question": "“三个代表”重要思想提出了党的建设的新要求，具体包括( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_349",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "三个代表重要思想",
    "question": "办好中国事情的关键在于党。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_350",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "三个代表重要思想",
    "question": "“三个代表”重要思想是中国特色社会主义理论体系的重要组成部分。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_351",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "三个代表重要思想",
    "question": "贯彻“三个代表”要求,关键在坚持与时俱进,核心在保持党的先进性,本质在执政为民。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_352",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "三个代表重要思想",
    "question": "“三个代表”重要思想是同马克思列宁主义、毛泽东思想、邓小平理论是继承、丰富、发展的关系。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_353",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "三个代表重要思想",
    "question": "发展中国特色社会主义先进文化，就是建设社会主义精神文明。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_354",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "三个代表重要思想",
    "question": "发展社会主义先进文化,必须弘扬以爱国主义为核心的民族精神和以改革创新为核心的时代精神。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_355",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "三个代表重要思想",
    "question": "加强社会主义思想道德建设，是发展先进文化的重要内容和中心环节。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_356",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "三个代表重要思想",
    "question": "中国共产党第十六次全国代表大会通过了关于《中国共产党章程(修正案)》的决议，把“三个代表”重要思想同马克思列宁主义、毛泽东思想、邓小平理论一道确立为党必须长期坚持的指导思想。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_357",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "三个代表重要思想",
    "question": "“三个代表”重要思想强调社会主义社会是全面发展、全面进步的社会。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_358",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "三个代表重要思想",
    "question": "科技进步和创新是发展生产力的决定因素。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_359",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "三个代表重要思想",
    "question": "坚决反对和防止腐败是全党一项重大的政治任务，是关系党和国家生死存亡的严重政治斗争。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_360",
    "type": "judge",
    "answer": 1,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "三个代表重要思想",
    "question": "发展社会主义先进文化，就是发展面向信息化、面向世界、面向未来的，民族的科学的大众的社会主义文化。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_361",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "三个代表重要思想",
    "question": "党的基层组织是党的全部工作和战斗力的基础。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_362",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "三个代表重要思想",
    "question": "“三个代表”重要思想强调要努力促进人的全面发展。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_363",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "三个代表重要思想",
    "question": "“三个代表”重要思想是一个完整的科学体系。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_364",
    "type": "single",
    "answer": 1,
    "options": [
      "发展",
      "以人为本",
      "全面协调可持续",
      "统筹兼顾"
    ],
    "subject": "毛概",
    "category": "科学发展观",
    "question": "( )是科学发展观的核心立场。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_365",
    "type": "single",
    "answer": 3,
    "options": [
      "坚持全面发展",
      "坚持协调发展",
      "构建社会主义和谐社会",
      "坚持可持续发展"
    ],
    "subject": "毛概",
    "category": "科学发展观",
    "question": "( )，坚定走生产发展、生活富裕、生态良好的文明发展道路。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_366",
    "type": "single",
    "answer": 0,
    "options": [
      "推动经济社会发展",
      "以人为本",
      "全面协调可持续",
      "统筹兼顾"
    ],
    "subject": "毛概",
    "category": "科学发展观",
    "question": "科学发展观的第一要义是( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_367",
    "type": "single",
    "answer": 2,
    "options": [
      "发展",
      "以人为本",
      "全面协调可持续",
      "统筹兼顾"
    ],
    "subject": "毛概",
    "category": "科学发展观",
    "question": "科学发展观的基本要求是( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_368",
    "type": "single",
    "answer": 3,
    "options": [
      "发展",
      "以人为本",
      "全面协调可持续",
      "统筹兼顾"
    ],
    "subject": "毛概",
    "category": "科学发展观",
    "question": "科学发展观的根本方法是( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_369",
    "type": "single",
    "answer": 2,
    "options": [
      "人才",
      "专利",
      "自主创新",
      "工业化"
    ],
    "subject": "毛概",
    "category": "科学发展观",
    "question": "( )是科技发展的灵魂，是一个民族发展的不竭动力，是支撑国家崛起的筋骨。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_370",
    "type": "single",
    "answer": 3,
    "options": [
      "转变经济发展方式",
      "加快城镇化进程",
      "增强自主创新能力",
      "促进区域协调发展"
    ],
    "subject": "毛概",
    "category": "科学发展观",
    "question": "进入新世纪以后，党中央提出要振兴东北地区等老工业基地、促进中部地区崛起、实施西部大开发，并强调鼓励东部地区率先发展。这是为了( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_371",
    "type": "single",
    "answer": 1,
    "options": [
      "党的领导",
      "人民当家作主",
      "依法治国",
      "社会和谐"
    ],
    "subject": "毛概",
    "category": "科学发展观",
    "question": "科学发展观强调，社会主义民主政治的本质和核心是( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_372",
    "type": "single",
    "answer": 0,
    "options": [
      "人民代表大会制度",
      "多党合作和政治协商制度",
      "民族区域自治制度",
      "基层群众自治制度"
    ],
    "subject": "毛概",
    "category": "科学发展观",
    "question": "( )是我国的根本政治制度，是全国各族人民当家作主的根本途径和最高实现形式。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_373",
    "type": "single",
    "answer": 1,
    "options": [
      "坚持以马列主义、毛泽东思想、邓小平理论和“三个代表”重要思想为指导",
      "民主法治、公平正义、诚信友爱、充满活力、安定有序、人与自然和谐相处",
      "解决人民群众最关心、最直接、最现实的利益问题",
      "到2020年完全实现社会主义和谐社会"
    ],
    "subject": "毛概",
    "category": "科学发展观",
    "question": "构建社会主义和谐社会的总要求是( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_374",
    "type": "single",
    "answer": 1,
    "options": [
      "实事求是、群众路线、独立自主",
      "解放思想、实事求是、与时俱进、求真务实",
      "统一战线、武装斗争、党的建设",
      "党的建设、独立自主、求真务实"
    ],
    "subject": "毛概",
    "category": "科学发展观",
    "question": "科学发展观最鲜明的精神实质是( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_375",
    "type": "single",
    "answer": 1,
    "options": [
      "建设什么样的党、怎样建设党",
      "实现什么样的发展、怎样发展",
      "什么是社会主义、怎样建设社会主义",
      "什么是中国特色社会主义、怎样建设中国特色社会主义"
    ],
    "subject": "毛概",
    "category": "科学发展观",
    "question": "科学发展观创造性地回答了新形势下( )问题。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_376",
    "type": "single",
    "answer": 3,
    "options": [
      "科学发展观的第一要义是以人为本",
      "科学发展观的核心立场是推动经济社会发展",
      "科学发展观的基本要求是促进社会和谐",
      "科学发展观的根本方法是统筹兼顾"
    ],
    "subject": "毛概",
    "category": "科学发展观",
    "question": "关于科学发展观的叙述正确的是( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_377",
    "type": "single",
    "answer": 1,
    "options": [
      "资源节约、环境友好、人和自然要和谐相处",
      "生产发展、生活富裕、生态良好",
      "速度和结构、质量、效益相统一",
      "以信息化带动工业化，以工业化促进信息化"
    ],
    "subject": "毛概",
    "category": "科学发展观",
    "question": "坚持可持续发展，要坚持走( )的文明发展道路。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_378",
    "type": "single",
    "answer": 2,
    "options": [
      "人与自然和谐相处",
      "社会安定",
      "民主法治",
      "改革开放"
    ],
    "subject": "毛概",
    "category": "科学发展观",
    "question": "( )，就是社会主义民主得到充分发扬，依法治国基本方略得到切实落实，各方面积极因素得到广泛调动。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_379",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "options": [
      "坚持全心全意为人民服务，始终把最广大人民的根本利益作为党和国家工作的根本出发点和落脚点",
      "坚持尊重社会发展规律和尊重人民历史主体地位的一致性",
      "坚持为崇高理想奋斗和为最广大人民谋利益的一致性",
      "坚持完成党的各项工作和实现人民利益的一致性"
    ],
    "subject": "毛概",
    "category": "科学发展观",
    "question": "坚持以人为本的根本含义主要有( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_380",
    "type": "multiple",
    "answer": [
      0,
      1,
      3
    ],
    "options": [
      "生产发展",
      "生活富裕",
      "经济发展",
      "生态良好"
    ],
    "subject": "毛概",
    "category": "科学发展观",
    "question": "坚持可持续发展，要坚定走( )的文明发展道路。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_381",
    "type": "multiple",
    "answer": [
      0,
      2,
      3
    ],
    "options": [
      "党的领导",
      "社会和谐发展",
      "人民当家作主",
      "依法治国"
    ],
    "subject": "毛概",
    "category": "科学发展观",
    "question": "坚持中国特色社会主义政治发展道路，最根本的是要坚持( )有机统一。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_382",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "options": [
      "充满活力",
      "诚信友爱",
      "公平正义",
      "民主法治"
    ],
    "subject": "毛概",
    "category": "科学发展观",
    "question": "( )，是构建社会主义和谐社会的总要求。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_383",
    "type": "multiple",
    "answer": [
      0,
      1,
      2
    ],
    "options": [
      "珍惜每一寸国土",
      "全面促进资源节约",
      "加大生态环境保护力度",
      "以破坏环境为代价进行生产"
    ],
    "subject": "毛概",
    "category": "科学发展观",
    "question": "推动形成人与自然和谐发展现代化建设新格局，要做到( )。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_384",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "options": [
      "执政考验",
      "改革开放考验",
      "市场经济考验",
      "外部环境考验"
    ],
    "subject": "毛概",
    "category": "科学发展观",
    "question": "胡锦涛指出:“新形势下，党面临的( )等四大考验是长期的、复杂的、严峻的，精神懈怠危险、能力不足危险、脱离群众危险、消极腐败危险更加尖锐地摆在全党面前。”",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_385",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "options": [
      "马克思列宁主义",
      "毛泽东思想",
      "邓小平理论",
      "“三个代表”重要思想"
    ],
    "subject": "毛概",
    "category": "科学发展观",
    "question": "科学发展观是同( )既一脉相承又与时俱进的科学理论。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_386",
    "type": "multiple",
    "answer": [
      0,
      1,
      2
    ],
    "options": [
      "尊重自然",
      "顺应自然",
      "保护自然",
      "利用自然"
    ],
    "subject": "毛概",
    "category": "科学发展观",
    "question": "建设生态文明，必须树立( )的生态文明理念。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_387",
    "type": "multiple",
    "answer": [
      1,
      2,
      3
    ],
    "options": [
      "效率意识",
      "节约意识",
      "环保意识",
      "生态意识"
    ],
    "subject": "毛概",
    "category": "科学发展观",
    "question": "加强生态文明宣传教育，要增强全民的( )，努力走向社会主义生态文明新时代。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_388",
    "type": "multiple",
    "answer": [
      1,
      2,
      3
    ],
    "options": [
      "传统型",
      "学习型",
      "服务型",
      "创新型"
    ],
    "subject": "毛概",
    "category": "科学发展观",
    "question": "全面提高党的建设科学化水平，要建设( )的马克思主义执政党。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_389",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "科学发展观",
    "question": "科学发展观是在深刻把握我国基本国情和新的阶段性特征的基础上形成和发展起来的。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_390",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "科学发展观",
    "question": "以人为本是科学发展观的核心立场，集中体现了马克思主义历史唯物论的基本原理，体现了我们党全心全意为人民服务的根本宗旨和推动经济社会发展的根本目的。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_391",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "科学发展观",
    "question": "全面协调可持续中的“全面”是指发展要有全面性、整体性，不仅经济要发展，而且各方面都要发展。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_392",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "科学发展观",
    "question": "科学发展观强调，全面深化经济体制改革是加快转变经济发展方式的关键。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_393",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "科学发展观",
    "question": "我们推进发展的根本目的就是造福人民。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_394",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "科学发展观",
    "question": "科学发展观是中国特色社会主义理论体系的重要组成部分。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_395",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "科学发展观",
    "question": "我们要彻底改变以牺牲环境、破坏资源为代价的粗放型增长方式，不能以牺牲环境为代价去换取一时的经济增长。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_396",
    "type": "judge",
    "answer": 1,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "科学发展观",
    "question": "“转变经济增长方式”与“转变经济发展方式”虽有一词之差，但其内涵是一致的。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_397",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "科学发展观",
    "question": "从党的十六大到党的十八大，我们党深入贯彻落实科学发展观，为全面建成小康社会打下了坚实基础。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_398",
    "type": "judge",
    "answer": 0,
    "options": [
      "对",
      "错"
    ],
    "subject": "毛概",
    "category": "科学发展观",
    "question": "科学发展观是中国特色社会主义理论体系最新成果,同邓小平理论、“三个代表”重要思想既一脉相承又与时俱进。",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "phy_1",
    "type": "single",
    "subject": "大学物理",
    "category": "第1章 质点运动学",
    "difficulty": 1,
    "question": "1 、一运动质点在某瞬时位矢为r(x, y )，其速度大小为 ( )",
    "options": [
      "<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAABFCAYAAAA1itSuAAAFB0lEQVRoge3aaYxeYxQH8N90ulP72kZpKWopqlpbi0gpgogl1kbE0ggfiO2b0IhPdiISkdgJQkgIQmOptFVil9ZSrb1MLS1KFR/+75iZd6bTuXfemVF5/8nkzdzn3vP873P/5zznnnPpOYzHpTWyNRpXoX+N7HWKc/BtjWxNxd8Y0nygX40M9zrWWeJlNTMYu2NP7IKLasaoiyhDfBuchOOxL5YqRnx8J2PH4GLcjBvQtKYTyxD/HNfhD0zEwoLXn9vJ2Eisj1OxAPeu6cSyUmnEHmjAnILXzuhk7GI8g7vwS2dGyhLfHHvhN8wuaaMjXN/VE8tGlZ0xCl/inZI2uoUixAeJRIi2N8DbQr6WHAaWuagag8WZ5uBNfIALMAV/4SVx0q5iK5yFG/E8FuG8ythIPCpR6uS1GepM46Nxa4X82XhP4vYDlbEf8HoB0rAcszCsQvhnvCGyuxf7Y7U8zVLEx+I+8exTtMjhXbwvGl+IjwsS/0VWeZnIbiG+l2TsOnwni7PWSNUR8S1wS+X3BG01PABDJeGZix8LEify3LfyOxcn4hU8Xvl/CD4pSrwfzseBuEZ7KYzAGAmDr4rOi2IzTMBK8Y/+eKwy9lVXjVQ751hMx2LRcjWxqdhW98LgDthentZw3KOYg6M98aMlF5mFz6rGhouTDhDSZcPgRGwokntSUojCqCY+RfQ7T7y7GY2yVY+tHH8Zv5eYbxAmV+zNxnMlbKC9xofLY/u+6vixkpsslZWaV3K+EdhNbvphrChpp92KN8jOtWmrY1NwBp7GJuLxi3EkNi443+5CfrFu5jjVK/5pxfjlcgPDxSEvks1hPSzBNHncPxWcb38Jd/OV1HYzqlf8ZnG6HXEbDhFtz2117jTJDu9WPBxO0uIjf5ajvGaMwpk4VNuEZ1OcJhrtCnr0Lb+jnXNR5a8aTbi/RkS6jXX2Lb9OvLdRJ97bqBP/P2GI7LC1wEB50V730ZwNTu5rIgWxqAFbK/Cu9x/BzAZZ9fX6mklBFH5HraOOOur4n6KhB233kxfv8RgnRaabenC+mmAwTpdi/UopRVzSp4wKYpykE01qnA/1dD4+BhtJhWxBLQ33JPF+ssoDpUHQUXv7AKmeDS5jvKewMfbBKim5ra4aHy19n8XiB32KRi1lu4lSgluEnarO20saVE1SDe4zTMYT0gf9BHfiCkk/n5KaOuwtLZrlUgv8SboS03uZr6G4Gh9JU7VR2iQPStH+T1zW6vwRUmp+VqTzEPaT5myvYX3cIeHuiKqx6bLaHUlhpPRKV0qs71U04kp55Jdo7+QXyGrPx5ZVY0dJR3kJdu1Zmu1xkDjei9JeaY2BsmOuxu1aPlwgN3htZew5eWqlUCYcDpUVHSZOuKxqfCdx1j+0D4MbisbhNfxaYv7SmCSr/a70RFujv3wss1r6pDtXje+Db6Q5e3h3SJRZ8UkijwXat0oOlt58g3xtsaRqfKK0ZL6Q0FkaZYiPqVz3rbYNqFHS6PpUVvxVbaUwSG6sEW/h6xJz/4syxJuv2VxLD2lLzMQLUqNZIZ26CdJ+JIWncZICvCBP7Vwl8pSyxN+TFT1cQuIMPCLd5vmyySwT5z1OZAHbyc02icwuxId6MU/ZSsvO91eF2BkigQkigVXyKUfrCut+Iq9V8lXQtO6QKPvqNkx6jwMkln9XOd4fh8lNzdK2VNYou+gIieFLS85dRx11/JfxD9AdCkKkxgO9AAAAAElFTkSuQmCC\" />",
      "<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAABACAYAAACdp77qAAAEe0lEQVRoge3Za4xdUxQH8N881FBjZlpKH0FLtCrVB6qoKRXUqw3VRNIQJR7lIykNwkcE8WwiaUijHokvEhpUEG1H1aNNWvUofdEWLVpKq6MPH9aZ9M6ZmXvPvb0ywv0nN/fm7rPX+u+911p7n//mX4iqEvr0wGCMwCnYhxkl2LkeLfgq3VBbgrHxOBu3oDdm53n22jxtl+ApzMUDWHMgpN7EMkxAPRbkebY+T9tBif96HFICjw4YgY34FieXaOPWxE7ZMA2teAuHldMwVJfQpwbnJH1bsKOsjGQndTCOTJ7vg5H4HYuxtwgbuf7qlRbTBuM5rMTneB83YSuWo3+evpPxMN7AejyfkGjAY2JQjyhitaoxFatxD3qKZbsL27AHc+QfaW+MxloRfzcnhOZgt5jhZ7KSqhY16GfMTMi0YTQ2J05uyGDrJJGh32MM7sZtyfdWXJGFEFF/NuMVHTNrfGJso2zpPAU7RS2bivvEjtATJ2o/4C5xFD7ABpzeSfvt+AvviqXIh2o8LpZqDh4VSVIQ6fWcjFF4TVTtXPTCpKTPh9hewHYTThNL3QuvihUoilQjrsKuhNTu1LMTEyc7xGwWKgXH4wSRDCtETSsaI7EJ32BQqm0QPhZL9wWOzWBvupil1RhaDJHcmRogCto27at0T9yB78QxZbnIpkIYKwL5PawqlVRV8jk8IUJU4RmiPLQRXZgM4NwCtoeLzHtdx1DITGoNfsFAcb65Rpx1+uNZER878ZsohBsK2B4gKvnSYgilUYv7E8f7xDbwkFjSPlgigvsTMQuFsAcvi7p0QGg7AVyHIam2M0R2FqpPFVRQQQX/eVSJHf/C7iaSgyW1GIYnu5tJDmZ2N4EKKqiggkIoRR3uDI2iCI9IvhcLCanbUC/O9HPFy+cfuLI7CeXiIvEi+7V4ZS8ZpWieXWGIeIldIaSirlBQ/ikXqR5C8IdF+LOL5y7Dg2XyWRDH4Uv8JDSEzjBM6BDT/kkiDfa/mF4q9KqPdC6MjcNnsiuARaEGlwslb7mQjZ4WKt1uzNI+Zs4SWlebFLAN88tJqAFPCH1qgojH3pgnYmgnrk716SN0h7eFtjBL6dcmHdCIF4TSm46ZOxOH63TUHwjBbZUQTCZlcZZF8a9NHE8UWtWinLZq++NqpRDW0hgu5KSNolwURJaScJ64ZViAF1Nth+JUES8topqn7TejTgT6pnKRmi7q0Gz8mmoblZDaLhTjNJqEhNRGuqv6VTQ241Mcnfq/Tux3e4W83beTvmdii5Anm7M6zDJTTfYXxlxMxAXJ76U618jHiCRZpwgxNgupKvyovW4+VKT/WiFjLxQZmIs6oQrWiJncUm5SbXd9cIzQRueJWdySOB2n/emgn9hadoli2w83yqCBZiG1R2yk94p735fE5fZ6URx/EJc/zdrr6wNxhFj2NSJhlokz1wFjfkJsr4iNKWIw54sbrVaRmY2pfmPFLLYKZXlcVodZjsMNIqCr8I7Q2omYuVhkVouOMVWTEOmbDCxzTFVQwf8CfwPLxvRdKRL2uQAAAABJRU5ErkJggg==\" />",
      "<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAA/CAYAAAAc98MyAAADQElEQVRYhe3YT4hVdRQH8M9zFCstU8lqLJUiMrMQLENFpyIXgolQKRGhi8SNLdy4KoIWQRAELVrUoiI3UUhiBRUExZQJJVaMoJWQGZlmk2n/xnFqcX4Pb/fd19x7c4Tgfjfv8bvnd773/M75He75tlRHLxZiAWbjGXxew09pzMZmfIiRRDZzLAnbGIfHMIyXMb6Og6qYgJtFpP2JfMxJr8SN+Amf1thfi/SGRPwVDo4l6TRMSva3pf+f4OcC2wty/qdU4DEeD+Jj7BWRbcU7+A33Jrt1eBrv4jCeSCRXYztOJptRcRleSoS3pLV5+AJD4livT+vTsRzf4xRWi2v0nii2IWwoQ/g6BhJRGz14JTl6Axdlnt2KH7BfFNlT4iS24cucn447NhGPog8bsS/zbILI5Qh2iSNu4yZMFU1jeSLfjvdxIQ79G+kKkcc3UzRZ9OI6kaPdmfUeLEULR0RlP5le7pgS2IlB3Fnw7CH8qbP1XSHu6wm8KqKuhGP4QBxVFpfjI/H2+da3DMfxO7aUIcnfn0tFAZ3I2awXEQzrbH0LcQkO4LUypPmctkQVZnE7loh8Xayz9S1JL/YWvitDmo+0hRnpl4huc3I4HV8nx6swOWPzi2gOI2VI85GewX34Vlzqe/A4ZiWSQ7g7kZxKe3rFXRwoQ1iEdhcZSU7uSOubcFpU9sPimrQxjOdza5UwFWuxRuQvu34/5td13KBBg/8XWqL/rjyPnD+2xCfKvtEszyF2nUeuBg0a1ERrdJOuaFSWUhvroqzK0vFp+l9Iy6gsG0UazhlWikGrXwghefSJD/aOsbNqpGVUlnFi9HhRjCn7K3KgvMpCTHhviznoLzHp7ahKWEVlIabyRUIeOI1HhNhVibCqykJU9GEcFSnoQLe7VVdlIbrUDOxRUcZbJcbCbf4pu8E1ojgGcVdBEC+IAnpWhUKdrJ7KQvTjz/AHHihLSGhCdVQWIvJBMcl3nWWLwl+knsoCi8UwfQDfdCMtKqRr1VNZJjmrnO3Gr91IiyJtqaeyXIW5QgDpT//XFXEURTqgnsoyR6TliFDQ1uM5JWWeXvVUlr5ENpT2LyhDlkUdlaVHqKhrRcQNGowt/gb2geaWyLCReAAAAABJRU5ErkJggg==\" />",
      "<img src=\"data:image/png;base64,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\" />"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "id": "phy_2",
    "type": "single",
    "subject": "大学物理",
    "category": "第1章 质点运动学",
    "difficulty": 1,
    "question": "<p>2、根据瞬时加速度<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAQCAYAAADESFVDAAAAw0lEQVQokcXQIUuDURTG8d9eh6LtfYOY3UCYIgybljcIfgHDPoBxTbavsU+wvm5ZWBBZHLNoNgoaNJhEdGHnwsvQsuKT7nPO/957nsPvqmM3mVqlMUAR5wwXuEH/j4fW0MaK38IZ8vAHeM0qwBGGaKLEGF38JKCBCc7Dn+IFVyxTbKKHR9wGlOMD9wlqxc0RvqJW4hlPCTrBZyqgjQ7meE9Qge34tolLfOMh0skwwx6muMZdrOYQb9X97MdsKcgxdvyPFmw0HP29W6vyAAAAAElFTkSuQmCC\" /> 的定义，及其用直角坐标和自然坐标的表示形式，它的大小 <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAUCAYAAACnOeyiAAAAJ0lEQVQImc3GMREAIAgAwD9woJs9TWUOZxdC8NPDxgksVGjTkni4H76PAvdoIYaPAAAAAElFTkSuQmCC\" /><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAQCAYAAADESFVDAAAArElEQVQokcXPr2vCARAF8I8/gjjEaprbkmUgrGkTNoOyNhjGNYN/z/6RtTEMs7g+NBsWBBGrRcsJF79tr9y7u8e7dxRAKeoMD2l+iztM8VHEqBgqiTfRxwl1tLGFcgie8Y4W3jDHa9ob4yuCiuUeo3xygUnqp1jj5jK42H1GreMRv/jLohV20T9hgG8cs6iGanw2xAGblFEZL1iihx9coZPcQRfXwRu4D+f/whntjBk+WKR6FQAAAABJRU5ErkJggg==\" /><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAUCAYAAACnOeyiAAAAKElEQVQImc3GMREAIAwEsNyzoaT+XTDjoTq6IIJMgYMKNhLPb1lo3AHARgLeL+18ewAAAABJRU5ErkJggg==\" /> 可表示为(    ) 1</p>\n<p>",
    "options": [
      "<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAABJCAYAAACQGB6NAAAFR0lEQVRoge3aaYxeYxQH8F/bmWk7NSgtimirRVpLSdRQJmL7IJGitugXpCF2sURCpBEEk4gK3yyxZPBFCCkSFLXUvi+lRIu0KZ2idNFmWj6cOzrLu9x7585428w/efPmPvc+9zz/+5ztnnNhBC7BENsujsSMIRiDVahHx/+6pPxoRcPQ/3sVRaJuAOWcgmOwHE9iZdFCBmJnhuEm3IrDMBfzMaloQQNBZiLWCyM9AbOwB84pWtBAkGnH/ViXHC/Ch9i9aPlF2sw4HCoW+UiX8T9KXLsZX2BLgfILeTIn4iEswfM4u8r1kwSJFwqQ3Q1F7Mwr+AD7ogVvVpF3JtqwogDZ3VCUzu6CPfEn3qlw3WnCJc8vSG43FEXmIEHmB3xT5pqTsDceFTZTOIpQs6E4GiPxkUiNeuJkYUttmC5Sp6OEjX1WwBpQDJkmNIu8bqHeT/1kPCy83PnJ2D9YgPsKkP8fspIZjQtxBnYV8aIN+wtb+LjEnBdFkEyD8WLnDsZU7IwrsRhH4A5swnn4tefkLDbTIjzXVJyFQ7AMD2A3fImfMtyvFEbgd6G2ZyTrWyHs7WkcjwOENvRCWjIzRXK4CBeLRa9Pxoh3obeSsb7gW6Gqq4QqvoXJmI2bk/FPlUlS06hZM+4VXuoW/N3l3AiRSFZzyVmwG6bgL3yNObhLEP0u+a0rNbEamdGCwCjcprenOlDo9efKu+SsmCJs52dMw0v4Kjm3sNLEamp2qrCVF/V+8qNEEBwmHEF7piWXx5HCJv7GBhnSnkpkmnCuyKOewcYe50/EscK7lHLJeTBKGH/nuh5P7p8KlchMFJG93dZt7sQ4XJ0IX4lP0gqsgn2Et+wQLv+HLJMrkdkHOwpX+VeX8RG4Rhh9h2JcciemieC6VGQHmVCJzFDhcndAYzJWh6uSc6uS40XCURyXVXgJeS1oEJn3sjw3KIel+A0TcLuwn0eE6t0nUv6NQs0u1XcHMEZE/014WY6yVyUyi/FgctOzRaRvxxVYk8wdKXbqOfHm2BdMFg/oFzmTz2pFwGEiJ5qM90Xg6sRhifAFSr8aDyRa0TBY0axVDJKpVQySqVUMkqlVlHo5Gyves7cFfK/LK3QpMkfh7gFbTt8wF090HpQi81zy2+awXdnMIJlaxUB1m6thV1HoG4/3hM32LKBURa2QaRP1hnpcJjpx1+lecKyKWlGzh0SJaYYojp8uXv4yoVbIdIaCDjwlqkG7ZL1Jf6hZua5zJXQt9A3BalFQyYQidyZr17kcmkWp6dtqF/ZEkTuTpetcDnuJctOdcpR7i7aZtF3nUmjEBUI1f8wjvGgylbrOTaJhNKHEvOG4SMSY9/IKL5JMpa5zHa7F4UpXPq8XJd4N4jOumbhRmXZfJYwRLbe+2s9OeE0EutldxhtFqr5W7EypB7gpWUPnr0MQTItWzMtLIE3XeSdBao4IgFuS/8tF2bdr/7Mh5zq6IY+ape0614lO8duCyI94VrQM+6VympVMlq7zavGNzPBEzrt4DK/L0A3Lgixk8nSdx4q4sRlv6OdadloyabvOPV3yVBFEVwsP169ISyZv1/lokdovkbE/mQdpyOTtOjeJB0AEwjV9XWw1pCGTt+s8UajZBuEwCv0esxTSkMnbdZ4uXPVy4Y77HWnI5O06twg7+lj0KWeL3eo3pCGTt+u8n61fJs0SGXVR3wuURbXcrE7kVhuS69biHuGKRwuj3yI+nWruMu/VZPxn3CCCZ3+hFfPSNmjzdJ0nCdf8kd6Oo2gMdptrGoNkahWDZGoV2xWZTjRWv6SmUY/6fwHZKE93sFULYQAAAABJRU5ErkJggg==\" />",
      "<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAABDCAYAAAAF+vz3AAAEWUlEQVRoge3aW4hVVRzH8Y9zhimmhtEmrabMrlKWdHnINCu0IiqLxIiELiBEhD2IDxV0ecggqAfJIiiiIKIeIp+ki6KVdtGsiNLpQoEVZZqWWcGkjvbw3+NsZ/aec86ePTMV5wuHc2btvdb677X+6/9fe/2monxOxGLciqPxFfaW0XCljEb68So6MB53YAJWY98w9DVkrky+K3gAP+C80TNncJpTv89FFy4tu+FaqOD0xIip+AAr+t2Tnu4WbMOWgvYdQj3GjsUtuBaz8RferVJnGlYJVxgVrheGbhYrP49T8QSOKavjpgJ1zsRh+BQ/5dzThpvxjHCDUqjX2FZMx36slR2ODhch6y18XrCfTOpdYJ04Czvxcc4996JHPNBMHCtc4nF0FzOzdir6ksc84a9rMS7n/j04kPrswe0F+iKiyUHyRrZJrPjFODmp9CKOEv66Ab/n1G3JKR+M0/AoLsIOvIfPkr7vMUj2OzKp2CXCVBMm4m0xqn+KiFAWY/E6tovk0YKH8XdiaC5teB7f4eJUeRMeEr74NU4p0dhpiaFd+kLhlOTva9I3pldps3iSeXgE6/o12pZ8b8KPJRrb69sTcUFS9jNe0RdNBnCZ8JcVKcN6accasdVbVKKhxEJdI6JHF86opdJy7Jbtj7PwK37BjHJsPIQ5+E0YvNzAwRrAdnxkYHpsxctJQxvE/rRsmrFEhLluLKxWYS9eMHBDfpMY0R48qaRslEEHVopB2ShjT5HueIxw7AOpsrNxI74XT70uaawMLsF9+gZnJx4T8XsSTqpm7PhU2SQ8iNfEItgmAvUssXKHynSxqNP++SW2iiQwIDWnM1iPWFxbxFPOx9MiQnSIkDVVPPH7QzS0ImbtHBFn30zKO0WWXItvBmtglZji/fgWc8UoXy2iRDeWiQw3VDpEiFwpwtUyscA24Q0ZLkBMfS/tuCL5vVqEEiIaXCWmZ71yfLZNZKmNwsVmi9f2TeJV6V/5JtygQYMG/3fGYCkmj7YhNXBns3gR3DzKhtTC7tE2oEGDehkOAaQahdWc0TC2oeYMF4XVnHoPk3upRbXJo7CaU8TYIqpNHiOm5tSq2uRRt5ozlKOgWlSbPAqpOUWNrabadOIpHJ9Rt7CaU3SBDabaHCFOyVvFgV5/RkTNqUW1mYDnkk7vymmnsJpTbWTrUW2W4DacINxirjhqWirEjF6KqDlVqVe1uVAcWe7DJyJTTTF857kHKaLatOCl5Nqy4TAyyw3Sqs3daldtjhMZbY9IEmUdOg9KUdVmDv4QqbMmxaVesqZqoZjSZ5PO05wvRm8XPux3baYIV11G8J8hiqo27wh/vX+4DMsa2XFidHb0K78Ol4vYuDHj+mTxury+ZBsPkmVsUdWmQ0z/F+WbGeQZW0S1qYgR34UFsvcFQyIrdBVVbXrEJny+GPWtZRubRVHVZr9IIosU3yDVTTtuSD7pTUqrSBQzZLvPApFeGzRo8F/kH15KKLIr1lhmAAAAAElFTkSuQmCC\" />",
      "<img src=\"data:image/png;base64,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\" /> + <img src=\"data:image/png;base64,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\" />丿)I2 <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAABYCAYAAAAjtg1/AAAArklEQVRIie3XsWoCQRAG4O9EBaNFIKYMNhb2Yu87pM6D+i5BCyVVGkWbIKeFi4jEuy1sxPlhqv0Yhl0Y2AJfKNzODjNsC/xW4BY2mOK7oiH4TGgIjTp9mcCBAz8z7qWqTRsrjHI6/6FM9Ui3EThw4LvjF2nJ5OBXvOfiHyxy8TlPjz/QQTcHT5wepX/3MQIHfgA8F0vmnzQxdvsPO7g+K3GoqKX0hy3wVjPOHmuUR7oXHLafmInCAAAAAElFTkSuQmCC\" /> 2",
      "<img src=\"data:image/png;base64,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\" />"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "id": "phy_3",
    "type": "single",
    "subject": "大学物理",
    "category": "第1章 质点运动学",
    "difficulty": 1,
    "question": "<p>3 、一质点的运动学方程为 r = 2ti + (2 _t2)j （国际单位制），则质点在t = 2s 时质点的速度<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAPCAYAAAA2yOUNAAAArUlEQVQokb3PPWqCURSE4ScaK/+IhSCCEDstrAS/rMIVZAduwE3YuQWL1KlSpEihpaCtlU0gjSIExCJY5IoX5La+3ZwzzJnz4J8Mr8gF/YghFhhJUMUYg5QhSQ7PaAbdQC86r4N3nDANfSb4Rj9OqmGOT5RD0gxdUdweK9RRwREf2MSmvzAooYgXLEOFazH8II82CljHX104hNIZvkL6jekXW7xhJ8ETWqnlHTkDj8ka7zLuH1oAAAAASUVORK5CYII=\" /> 大小和加速度 <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAQCAYAAADESFVDAAAAyElEQVQokcXQMUuCYRTF8V+vkoItGUqLJDTl4uIQrU65+QGCWtpanFv9An4LIQha2xpcJFqkqakWh4aGFpWg5b74INjagYfLefjDueeyXQ0UYSf5HKKa+FNUcJ1Cm7rAD+7+YNYqbPgMJzjCF46xSuMauMU7PtFFG+c5cIgHXIWvY4p7lLKIHOAb44DK0ewJC2hhhl4S3ccHzvJFOzFfA6jhBnO85VAVpXgHuMQ+XqLlboZn7OERI0ySthmW+Q7NqFtMblX3P/oF3q4by8ywbksAAAAASUVORK5CYII=\" />大小为：(   )</p>\n<p>",
    "options": [
      "v = 6m / s, a = 2m / s 2",
      "v = 2 <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAQCAYAAAArij59AAAAg0lEQVQokYXQOw5BYRCG4Sd/JBoNK9CpREVIbENiJ7ZgOSKiUKgsQadUqRQWQOEQkXznTDWXd765kK2DXakBZujWAXOcGoFUbOGBXgImOEMa8ZVvBJLd0E/FAa6foGCKdZIvaGPl/bk4/4Bj5V8w+gfGeGKBu3Ddpurep+2H2GL5m3wB6fwVKjUSkvEAAAAASUVORK5CYII=\" />5m / s, a = 2m / s 2",
      "v = 2 <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAARCAYAAADg1u3YAAAAkElEQVQokYXOMQ5BURSE4c8TJELyVAo1iSi1JDYh9mAHeq3lWIB4e1CJaAlRoFZJbl7c61TnzPyZOaSnkzLbeFUTwAyDLAFMUfwD9jGzjifyWMIYRzxiwAQFxIBkfwU39EKxFuwjnL5HhjkOaPyKz7BDF8sAKMq9a1zQwhnDMpDjjg2use9XeGMbA5pYoB+KH6O+FsgqZcpcAAAAAElFTkSuQmCC\" />5m / s, a = 2 <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAARCAYAAADg1u3YAAAAl0lEQVQokYXOMQtBURjG8d+lZGEjVnVHZVZ8CqNvI/kI8lksSpnNDCYZLWQQWe7R7epcZ3rP+/x7/m8i/hI0S3J9HKslwASvSgkwxrZMcUYaC3u4QEzxrY8Bo3/+AwaxsINraA+KdqF+h3cAFljn4B9/iiem2X+PYdG7xAkt3FArAl3cscImdv08u36WXya5uYF6pniE5Qc05BlkuD9X3gAAAABJRU5ErkJggg==\" />2m / s 2",
      "v = 6m / s, a = 2 <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAARCAYAAAAPFIbmAAAApklEQVQokYXRO4oCQRAG4M8HPtBVjEwFwXQvoKlX8QDCnsJTiOcwUDGbAwhmisgmJoJGYtIjMmjPn1X3V1U0TTxtFEo5aI56jnFCPwb6ASlG0BDrPDRKUSw7/MZAF5d007d1Q2zxiKERNtnDDspvdRKmvVLDGZNQ/+CKanbSDMfQMMbq/TL9uwR/uGOAA5ZZdEMF07Bugf2nFzXxHxpan0CaHhrZwyehWxkRfDg2cAAAAABJRU5ErkJggg==\" />2m / s 2"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "id": "phy_4",
    "type": "single",
    "subject": "大学物理",
    "category": "第1章 质点运动学",
    "difficulty": 1,
    "question": "<p><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHMAAAAECAYAAAC9ZACfAAAAgUlEQVQ4je3TIQ7CUBAA0UeCIE0ImAaBQaCwGFJEg+YqdT0Kl0BzBlRvgMNyB0Q1GwSG/h/CyNkVk012hIVXKmxxwkMeTDALrsENZzwHL0pHgWlwLboxjmGwwQEdLt9v+4gl6uAqrHHFfeighKywC26P8t1y/IBcmacOyIj/LX6NHmNmC79ukEtuAAAAAElFTkSuQmCC\" />4 、一质点的运动学方程为 r = 3t2 i _ (4t _5)j  (SI)，则 t =1s 到 t =2s 内质点位移大小等于(   )</p>\n<p><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALEAAAACCAYAAAAXdz0eAAAAH0lEQVQ4jWNkgID/DJQBRgr1j4KRDShNf6NgFAxtAACMSgIBCZVh2wAAAABJRU5ErkJggg==\" /></p>\n<p>",
    "options": [
      "13m",
      "5m",
      "√97m",
      "√65m"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "id": "phy_5",
    "type": "single",
    "subject": "大学物理",
    "category": "第1章 质点运动学",
    "difficulty": 1,
    "question": "<img src=\"data:image/png;base64,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\" style=\"max-width:100%;border-radius:8px;\" />",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "id": "phy_6",
    "type": "single",
    "subject": "大学物理",
    "category": "第1章 质点运动学",
    "difficulty": 1,
    "question": "6 、一质点的运动学方程为x = t 2 , y = (t _1)2 （国际单位制），则质点在t = 2s 时的切向加速度为：( )",
    "options": [
      "2·\\<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAQCAYAAADedLXNAAAAZ0lEQVQYlW3MwQnCUBBF0ZNvNilDCAjurCDpxTpdRKxECIoNZJtNfhhH324OzD34XoemTXjFpSQc8Ujmg2OEM54Q3wdMGceKcW/0EU6Y61Hf917Ev715S+zr8YpQtt4940+vYMEt4goElw+4P8nUQwAAAABJRU5ErkJggg==\" />2m / s 2",
      "6<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAATCAYAAABcFRdeAAAAiklEQVQokX3PMQtBYRSA4cel7sByJ5mMfohNkpTd4u+ZRVksBn/DpkgMdzO4t3Sdzzeep/Oevpb4rVBmCVzjEcEAN+TR5hxblNHmHssIiupWF5rZGQ54RbjAJkr2qmRRD743Jzj5fOMHk8kcd/QjnOLYHNbZZLKDK4YRjnGOIPuXhAtGEbTxxC7CN5eLF/ld0WNnAAAAAElFTkSuQmCC\" />  <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAARCAYAAADg1u3YAAAAnElEQVQokX3RMQ4BURSF4Q+ZRDSiUExtARKNKGgsQKxALMIWbMAKlDZgATQKlVonmQ4NhYpmiDDvne7k/rl/cm9JODWMInND7CoRYIKsHAEG2IaGCW5ohIAeDhBS9LGJAVF/GVekIaCN4zfdRLfI/84CJ1TzvsL0G0hxxyzvGVq/3jku6OTAX+o4Y50rPnk/64EnxlhiX7QlUXC4F5+yGOcIomItAAAAAElFTkSuQmCC\" />5 m / s 2",
      "4m / s 2",
      "2<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAATCAYAAABcFRdeAAAAkElEQVQokXXPIQ9BcRSG8d+92HwBkSJoiqRINhOU+wV8Q+ZLKIIpkqAIZoIoMIG73V3nf9o5z95n583Es0AvT8AlnhFo44FOlJxhj1sEC6wjZRN3dCM4xa5c6tqkMsMFgwiOcaweqtoCqygFJ4wiMMS5fiy1yS/hgEkE+rj67yz/KTd4R8kt5hFooOXb71WHH4ePFhtb1QTSAAAAAElFTkSuQmCC\" />  <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAARCAYAAADg1u3YAAAAnElEQVQokYXQPQ5BQRiF4ef6KUhEolFZAAsQBYlYglahk1iJ3lrsgET0CoXiVgpKUUgUCvcmiBmnmUzOm3m/bxLhJJhGeh2kxQgwhkIEGGAdU6Roh8oWLjHFAJt/QNS/RzdUNnBFKVfUMHwD+tjhkQMzrNAM+Ss4YZndtxh9e+e4e33MDdW8SLKzjAOOqKP3a/oJzliE1itkL33kCfCQFlfTi8vVAAAAAElFTkSuQmCC\" />5 m / s 2"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "id": "phy_7",
    "type": "single",
    "subject": "大学物理",
    "category": "第1章 质点运动学",
    "difficulty": 1,
    "question": "<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABT4AAAEiCAIAAABfl1oFAAAACXBIWXMAABrpAAAa6QGGjfFtAAAgAElEQVR4nOzddzyVf/w//tdxcKzIzJ5ZeVMUeidaUr2VvEtDJSstpdLQ1vTWVtpDSWkPGu9KWipKEvIuDZIWQtnjjN/t1+v7uT7X5zrDsUfP+1/Odc65zuW6Lsf1uF6v1/OFOAAAAAAAAAAAAGjHUFtvAAAAAAAAAAAAAASB6A4AAAAAAAAAALRrEN0BAAAAAAAAAIB2DaI7AAAAAAAAAADQrkF0BwAAAAAAAAAA2jWI7gAAAAAAAAAAQLvWCaN7fn4+p+OoqKgoKSlp+kpqa2s5HUpDN7i2tra8vLy5Pv3jx49NX8nXr1+ZTCZ5yefPnznNJC8vr0Gvp2wJaLQmnmmVlZUCjkVnPUwNPV2FV/MLpy38nocSAAAAAO1WZ4vuGRkZ8vLyN2/epCyvqqoKCQkpKipqoc+trKx89+5dI9546NAhNTW1ixcvNuXTX7x4oaamtnHjRhaLxWkZ5eXlSUlJTV9Pdnb27t27bWxsbG1tf/z4Ifwb8/Pzu3TpMnPmzKqqqiZuA5vNVlJSGj169OvXr5uynt27dxsYGERHRxNLVFVVZ8yY8fXrVyHXwGQyJ06cmJOTw/2Uvb39sGHDXr58KeSqwsLCJk2a9OnTJ+6nampqbG1to6Oj6+rq6l3P8ePHq6ur+T3LYrGmTZuWnJzMaYKBAwcePHiw6cexhTTxTLt165aJicmlS5e4n6qqqjI0NDx79qzgNRQWFnJa3aJFi9avX9/o24iTJ0/u06fPhQsX2Gx2825Ybm6ulpbW/v37T506FRMT07j1l5eXW1pa7t27t0HHtOmH8ty5c1FRUXUNdP/+/REjRgg+FsHBwd++feP37MOHDz08PCoqKoT/ZQEAAADQ/nW26D5s2LAuXbrs2rWLsryurg4hZGJi0owtt4TKysohQ4aoqqq+evVKmNeTA7atra2Ojs6bN294Piukd+/eIYS2bNlS78c1TllZmb29vbS09MOHD/m9pri4mOdH5+Tk3Lx5c/PmzRMnTtTW1kYIycrKGhsbDxo0iPswCVBSUoIQCgoK4jRZeno6QmjUqFE/f/5synoOHz4sKipKPnZqampTpkwRvpEwPj4eIWRhYcGdKBwdHY2MjMrLy2NiYvz8/OLi4gSHlgkTJnTp0uXo0aM8n5WQkHB2dhZmw44dO2ZkZPTs2TN+L7h37x6dTl+zZg2nsTQ1NSUkJE6cOMFpl5p4poWFhSGENmzYwP3UnTt3EEIKCgq5ubkC1hAXF+fg4JCamirkJ5aVlTXxZgqHw5kxY4aKikq9jeelpaUrVqzgzoRjxoxBCG3atEmYaF1cXCx4D5Dl5+fjw1FWVtazZ88+ffpQ3ltcXHz69GnBK2GxWAghf3//BiX/ph/Kw4cPI4Q8PT1nkFhZWU2ePHkGf4MHD0YI7dy5U8CaDQ0NDQwMfPno0aMHQmjjxo2cZiXkP7j2o6KiIioqquXuaAMAAACtrFNF94iIiG7duqWnp+NWEcpVGkLo+PHjxMP9+/eHhoZyryQrK8vKysrZ2Xnq1Kncl0QaGhpDhw6lLJw0adKwX7y8vAQ3dLBYLH9//1mzZuGHjx8/RggdO3as8H+EhYW5uro2tDP5hw8fEEI8W4euXr1qbW3Ns7tBSkqKmZnZyJEjPT09fYWzcOFCfs1WwcHBkydP3rZtW1BQ0Lx582bOnOnp6Tlx4sSZM2euXbv28OHDN27cePnyZaPTcnl5OUJo3759PJ8l5+d6rVy5EiEkIBoVFRUJc7UXGRnJYDDIS7S1tfndQOHJ399fWlqaZ3+NkSNH2tvb45937dqFEOrfv7+A7K2mpubn58fvWTk5ubCwMCG3ysHBQVpaWkCXhL///hsh9OLFC06j6OvrOzs7c9qrJp5pkyZN+uuvv3g+tWzZMoTQyZMn690Gf39/MTGxM2fOEEvS09NTeUlOTraxsZGRkRG+U0xpaemiRYsqKyvJC+fMmWNrayvM2/fu3WtgYEC5WTB8+HAajSagvwYZm812c3Nbt26dMN1Afv78iRA6dOgQ/nIWExNbsWIF5TVTpkwZMmTIly9fBKyHTqdHRUWRl5SXlz958qRFD+Xx48cRQpRuFNbW1sbGxt+/f+f3rqioKISQ4FZ3CwuLyZMn83s2KChIXV2d03yqqqqCgoJiYmI4HU1SUpKLiwvPnk0AAABAh9N5ont6erq2tjbRwTg3N3fkyJFZWVnEC0RERIhLt/DwcBEREXV19YbGD4RQeHi4MK/MzMy0tLTEwbhv3776+vq+vr4eHh5Dfrl9+zaHwxk8eLC1tXUQiZKSEo1G27ZtG/cKmUzmkiVLxo4d6+7uTknUEydORAg5OjpSlvv4+HTr1k1OTm7o0KGUK/VmFxISoqqqWlBQwD0E9P79+5MnT25iw2BlZSVCaPv27SVcAgMDhY8ubDZbV1fXycmJ3wu+fPlibGzs7e1db3o/ceIEJbrr6ekJH91//vwpJye3bt06ns+OHTvWzs6OeLhkyRKEUEZGBs8Xv3r1CiF0+fJlYklOTk5KSgrxUE5Obs+ePUJuWGxsLEJox44d/F5w8+ZNBQWFgoIC8sLw8PCVK1cKs35TU9OmRPcPHz4k/l9JSUkZGRl5eXnN0lu7iWeagYHB+/fveT6lr6/ft29fYbahoKCAwWAoKSkRS6KiombOnLlt27ZwPnjGyG3btvlzsbS0RAhRvhMCAgKEjO4cDmf06NEMBuPatWvEkgEDBqiqqgr5dtyWrqioOGDAALwNdXV1/G564jspOLpzOJxVq1YdPnw4Ozub/Jrv379LSkrq6up+//69qKjoKC+ioqLTp08nL+nVq5ekpOStW7da7lBGR0dTontGRgZCiNLT/tmzZ4mJiQ2K7rjpnt+zQUFBGhoanGaSl5dnb29/7949TseUmZnZo0cPwbdpAAAAgN8uuickJPC7rAwPDz9//jynxXz48OGPP/6g9PKNioqSlZUlxr2LiopGRUUVFxe7u7sbGRlFREQI0+bT6OhO1qtXr8GDB1MWxsXFqaqqkscrPnr0SEZGhnxBTFFYWMhzHHVeXh6/VvdWs3XrVn4Xiw8ePGj65lVXV+PbEwv52LhxI/muAZPJnDVr1qBBgyZOnEi+neHi4oJzC7+eBYMGDTL+ZdOmTZRtSEtLIz+Mjo6mRHd9fX1ydK+rqxNQxSA0NFRbWxsnFiaT6e/vT+4cMWnSJBsbG+JhbW3t5MmTKaNbr169uuWXSZMmIYTWrFmDH27ZskVHR0dJSem///7Dr5STkzt48KCQu5rFYk2ePDk7O5vJZHp5efXv35+4W9SrVy87Oztvb29XV1cfHx8DAwNXV1f81MBf7t69W+/6zczMmhLd3759e+HCBRsbG/SLqKho9+7ddXV1aTSavLy8u7t7E7v1NvRMw1avXv358+f//vvP398fLykvLx89ejRxAyUpKQkhFBcXR35XWVnZqlWrePaycXZ2trS0bMovgr8ZUlNTf/z4UcUL+ebUggULhI/uubm5YmJiFhYWxBJjY2Ph345t3boVIXTlypWysrKvX79qa2vv3r07iktERARCyNfXFz88duyYmpqanp4epayDr68vQig+Ph53v4qKirp9+3YCibi4+KpVqxK4cI8NacZDeerUKUp09/T0VFBQoHznqKqqysjIEF8vwkT3Pn369OvXL4qPkSNHNld0//z5s7GxsTB/1+1ZWlqampoa5QscAAAA+K2j+/DhwxF/MjIynJZx4sQJY2Pj+Pj4wsLCz58/Z2dnv3r16sWLF0+ePNHR0ZGRkcHDEcXExFxdXSdPnnzx4kXimlX4AaWNju5FRUU0Gu3IkSPkhdXV1aamppTroQEDBlAuB4XEL7pfvnxZQCmj5rV9+3Z+F4tPnz5FCL19+5a88MqVKw4ODqWlpUKuv6amRkA3Zp7Ky8u5e/COHDnS0tKSaJ7Ny8sTfniCsrLymDFjiAjn7OxMp9PJoa5r164DBgwgHuK/iAULFnCvqqKiQlVV9cqVK/jhxYsXEUIDBw4kNszb27tnz57kt6SnpysoKJBHs+fn5588eTIlJcXW1tbGxuYVF6ILsbS0NPHG8+fPR0RECPkrU9qxe/fu7enpSa4fQfwKwmtidCfHJ3ID5ps3b+zs7BBCUlJSjfs7avSZxuFwevToYWpq6vULzmNjx45FCBkYGOCT0NvbW1JSkpLZrKysEEI8m0/T09P5Nfm2hMDAQEr2Tk1NFXBz08vLy9XVlXgoKSk5fvz4Bn1iSUmJnp7ely9ftm/f/v79e4TQzJkz73KJi4tDCC1atIiynPJ9kpaW5ubmJqCnDIPBoHSYb4VDSYnur1+/VlZWHjFiRFlZGfGaGzduIIRWrVpFLBEmutvY2Dg6Ot7lw93dXU1NjdNkNTU1ffr04TmyrMM5fPiwtrZ2m9SABAAAANpjdL9x48Z6XoYMGYIQMjMz47SM2bNn44t4LS2twYMHe3p6rlixYt++fVeuXNm9ezdC6Pr16xwOR1xcnLvhMSQkpEF1zhsR3S9cuCAhIUEZ471y5crRo0eTO6xeunSJ3GC7ceNGngPUCwoKznE5cOAAQmjJkiXkhZs3b6bT6ebm5i1XV59s586dGhoa6enp1tbWLi4u3t7exEUtHho9btw48pVu//79bW1tlyxZIuT6a2trGxGoeBaXIneR3blzp7q6upBRVlVV1dvbm+g+feTIEQaDQe5Qraenh8t0Y3v27OE3qH758uUeHh7Ew379+qmoqOTm5tbU1OTn579+/Xrs2LGampqHDx/esGFDYGBgQEDA0KFDBw0aNH78eMoo9KqqKklJybCwsOLiYvJw3zdv3ly8eHH//v3r16+n0+kDBgzAe17nl8bNodh+ontubi7+qz937hyxsKSkREVFBSGkrKzc6KoKjTvTzM3NiUZa7O3btwihx48fczicT58+SUhIcM98sWHDBoSQgKKAwqurq2vojAkFBQXLli3DQ3VsbGzU1dWJkTuLFi2SlJQcPHgwv/IKP3/+JEZr40pyAv6W4+PjBXS3XrBgAS4NyN3Phagwt3///gb9arhTDLlzBCW6+/j4kEuftNChpET30aNHnzlz5saNG/Pnz8dLSktLtbW1hw4dSr7pIEx0t7S0FNxhXkVFhdNky5Yts7Oza/ZZA9rK8OHDx4wZ09ZbAQAAALTvse5//PEHQojn+O1m8fXr161bt/LsSV5dXT1x4kR89SkuLs7d6rJixQp+VdOfPHnC3SbciOju4+Mzbtw48pJ79+4tWrTIx8fH0NCQiLK6uroTJkzAP48fPx4h9Pfff3Ovjc1mb9269cCBAzExMf/+D3ypt3r16n95oTRPNdHixYtv3LjBvXzXrl241Z27pS41NZW71b1elLGv/AJVZmamkCusra01MzOjXLodOnQIISRk86aWltaMGTOIh6dOnaJ0mDcwMCDffzl69ChCiNzCht2+fVtfX5+4NL98+TKNRrt169bq1asDAwP37NkTHR3t4uKira397t27em8txcTE0Gi0z58/v3r1SlJSctmyZTgGFBYWbtu27eHDh+/fv6fT6UTNMycnp9WrVwteZ+0vxMPdu3fjristGt1zcnIOHz7coJ4mlOiOW4/xcn7F9lvoTOvZsyfPvIfLE8yaNYvyLBYcHIwQ4jnMu0H9Zerq6saNG6eoqCj8YIF79+7l5OSkp6fn5eUVFhb6+vra2dkR9TILCwsZDMbatWuJ17948WIfH7juo5ubG78X6Ovr0+l0nnXgnz9/Hh4ejmvRUaJ7QkICrgkiIiIifKUGgpycHHG7ytfXl06nDxw4kCgCIiEhYWFhQanX0OyHkhzdb9y4MW3aNLzc3t4e9+2fOHGihoYG5T6aMNHdzMxMcHRXUFDgNM3Hjx/FxcXv3LnD6SyePHmCEOpMvxEAAIDfTYtHd9wbUEZGpkGN2w0VHx/P3cgWHR1Nbl+VkZEhX4liTk5OLi4uPEu4LVq0SF5enjKBWUOje21trby8PFE/rKqqqra2duvWrbjX5bBhw4hXmpmZEaWYcBuUgPpJDR3rTr5CffTo0aHG8vHxQQhJSkrev3+f8hHh4eFEh3lKN3Xu6F5WVsZzBnIyNTW1devWER+NexZMmTKFvD0hISFiYmJCVkdbtWqVnJwcZforfumaJ319/aZH92vXrklISLi7uy9fvnzWrFnr1q1TUVEhWuEIy5Yt09LS4t4G7i7Bbm5uuBY9nmiAe9I1nEVjY2PxwwEDBqxfv557zWlpaUTd8r9/wem9srJSSkpKT08vPz+/d+/ePj4+lOi+ZMkSwcW9KczMzOzt7SmV0hMSEnR0dBBCQk4ZyC+6HzlyBC8X8qxorjPNysqKX97LzMw0Nzfn+SWzfPlyhBBxl+TNmzfEDrG0tHR1df3x48eRI0csLCzIxSmHDBlCqeAwdepU519mz55N3Du7ffs2vz/k7du3S0lJ6ejoEJW3J02aNHbsWPK20Wi0U6dOEQ+rqqr27Nlz/fr1pKSk5P8rKCgIIRQZGZnMh5mZmZGREc+/svnz5+fm5paVleHpLU+dOuXs7Dxu3DgfH5/u3bsbGBhkZmZKSEgQ8yOUlZX99ddfPCexe/r0Kfm/gJycHPn2DaXVXUNDY/v27S13KCnRvbi42NfXl3g2IyNDQ0Nj0aJFUlJS5HKSwkd3IyMjAZPDWVhYSEtLc5pmxYoV6urqnabJHTMyMqKc5wAAAEAH0uLR3cnJCU+o26KfMn369G7dulEuXxQVFRkMBlGLGNcnMzMzs/0fenp6CCFDQ8PPnz9zr3PVqlUyMjKUxnye0f3MmTP8mm2vXbsmJiZGtJA7OztPnDgRt8x4eXkJju7Cj9cVHN1PnDghIyNDhO2ioqKwsLDr168/evQokRc7OztDQ8NEgYhK/oStW7dqamrin318fIKCgohKzmvXrsVNasSSMWPGKCkpced/MgaD8ddffwneDJyNvby8uMuGkX39+vXBgweioqLc7X4Niu6GhoZNj+5FRUUKCgr29vZXr16trq4OCQkxMzPjnnLvn3/+kZWVpSyMjIx0cHAgTyv19u1bUVHR3bt3E6dBQkICPoWIkP/jxw+igheHw/nzzz95Dl6NiIiYOXNmaGhoeHi4tLS0tbX1hw8fcJCg0Wi4AnavXr3mzp1Lie5v3rwxMDAQvgSU2S/86lnu3r1bmNt8/KL7pk2b8HIBFfJb4kzr06cPv7w3adKk7OxsnhOnLVq0CKH//RJOSEiYOnXqhg0bcB+W/v3785xCbOzYsSYmJvXOjvHx48cLFy4Qv4KhoWFgYCDl9yK+uIYPHz59+nTK7R5KIXR+PDw8ZGRkBAyM19PTIw+MJ38KnuuhoqICIRQWFsZisbhnSldWVg4JCcE/nzlzBpeZxB+Hx4NgysrKurq6xBd+vdEd30JtoUNJie4PHz6kNMgPGzaM30AAYaK7rq6ugMkgly5dyrPTVoNYWlp2vpTr5+cnKyvbye5HAAAA+H20bHR/+fIlQohGo5EnaWsJ/v7+Ojo6lIVDhgwhOijiy8S4uLjz588To8EvXbqUmJjI74ozODhYUVGRshAhNGfOnDiS7du3i4iIaGtr80zvuL5RREQE/kQTExN7e3ucTDw8PISP7o8fP7a3tx89ejRROYnMwcEBITRs2DCeLTBmZmbGxsZEEquXs7MzpUCaMNavX09E92nTpvXq1SuBP29v727duvHsrUqQkZEh+mbzk5ycjBAiz6vE04QJE8TFxQMDA7mf4k7Xb9++5dccZ2Rk1Cwd5tPS0nCuzsjIkJOTS09P5/4sPE7+w4cPT548uXjxYnh4+JIlSzQ1NXv27BkQEIADZH5+Pp7o6+7du69evcKV/E+ePJmammpubk5c2f/3338IIaLavJWVFb/QQlBUVCR6jNvZ2c2aNQv/rK+vT9TTIneYX7dunaKiYr1znjfjWHd+0X3w4MEIIREREeG7jjfLmWZra8sz7+3atQtPixgUFMR9r2revHliYmI8V9izZ8/g4GDu5bm5ueLi4n369KFMkCbYx48fRUREJCQknj9/zvMFffr0Wb58OfEQN4MLmB+BTEtLS/ABlZKSIn8VE86fP49/RzwhH7/6AoaGhkR/B1dX1y5duhA3dzIzM2NiYjIyMnJycnBtOeJd9UZ3ftXXmvFQcleYx/0Xpk6dqq2t/ffff3ft2vXgwYOU+0HCRPeHDx8KqMlHHuq1c+dO4XugENhstqSk5NKlSzmdy7Zt2xBCMM07AACADqplozvuX/3XX3+16Kfgyyae0Z24Avv27RvPphIB+EV3b2/vU7zg1k6ynJwcCQkJ8qWbnZ3dwoUL8c9TpkzR1dUlqpErKio6OTnhn+fMmcPd6s6vKfLWrVt0On3QoEFr1qyhPJWVlYVLKwkWGRlJbjIlR3fhq68vX76c6OA9e/bsAQMGEE+lpKRERUWRL0+Dg4PrLVsoLy/fLNG9qqqqZ8+eioqKLBarsrIyLCyMmEFty5YtEyZMQAht3LgRP9y8ebO6ujpCiGdqMjExaZbojpWXl5uamuJOHKWlpWfOnNmxY8eSJUsCAgIWLlyI6x0sX74cN5zm5uZyH4va2tpJkyYNHz4cb/zq1atxDxfit8PpDtfoJhr9zM3N622RJqJ7XFycsbExfm9tba2oqChR3Isc3cvKyhQUFPr168dp0+iOy1Lyq+rfomdav379BAyQxqUHlJSUKFM/zpo1i1/HZn7R3dfXV19fv7i4mNMQK1eupNPp//77L89n2Wy2jIwMuWxbYWEhQujq1av1rjkhIQG3Hl+5cuXChQvc7ZmlpaUIoWXLlnG/19HREd9K+PLlC0IoKirq8OHDW7ZsefvL3bt3bWxsvn37Zmtri28eFRcXi4uLc48u4bnH5OTkHBwc8O3LUaNG0Wg0Yqy7r6+vlJQU9xdmsx9K7uienJxsamo6YcIEnMwjIiKkpaX19PR27Njx8eNHftGd+4tLSAEBAQ0dP0KeIvGff/7hdC4nT55ECPG7gQUAAAD8vtH927dvDAYDIcRdjLfZzZ8/X0ZGhtLarK6uTlyBnTlzRk1Nbe/evcRbampqBM80zi+6Cz/WPTAwcMWKFfyiu7u7+7Bhw4hq5Kamprt27cI/40HLwnSYz8rK6tq166BBg2pra/v27Uvud11aWmphYSErK5uUlCRgDeXl5QoKCuLi4sT0deToHhERsXPnTmF+2Xnz5hHvmjt3Ljm6x8TE4JmfGhTdVVRUhAxUAm5PMJlM3LTVrVs3vCQ+Pj42NjYlJQVPnxYSEoIQIh6ScXeNNjU1NTExIU6wQYMG0el08iknKytrY2ND6Q3BL7pPmjSJ3Kn19OnTjx8/Li8vJ6cF8t/O1q1buVuS2Ww20W3k69evRId5sh07dpCHzRsZGdV7DuPoXldXN2jQIKK5Hhd5IsZKUMrUzZo1CyHEryB5y0V3S0tLPz+/wMBAvLeVlJS2bt3aoA6xzXKm9e/fv0ePHuSTYdy4cQghcpeKuXPnEnNVYj4+PvzKifGM7k+ePJGRkSHmLCgrKyOqDwpQWloqLy+PG5k/ffrEPeVEdnY2Qoh8/+7jx49CfnX7+flJS0v//Pmzrq5u9uzZpqam58+fJ7/gzZs3PMcvJCUlaWtr45/T0tIQQteuXdu/f7+srOw/v7i5uUlLS9+8eXP8+PGjRo3CTabi4uJExBW8xxQUFPA3fFFREZ53gNzq7uTkxO/GRDMeSnJ0//r1q5+fX69evW7fvv3kyRPiayErK4uYV9XU1NTd3X3VqlXcre63b9++cuUK/qbKzMzEHW0I/v7+Xbt25f4SE/yFJgCLxRIREeFZFKMTRHeeHZ0AAACA3zq64+sPU1PTVhhXtmDBAsGt7pcuXcIJDT9ksVienp4iIiICmpWaGN0/fvw4ZswYfNlKju5Et203NzfySMJGjHX/+PFj9+7dzczM8IDY9evXEyW+KioqBg8erKWlde7cOcEz2W7dupUyiJfSYX7dunVjx46tdwJ2Z2fn4cOH458DAgLI0R1fLZGrBgQHB5uamgpeobKyspCBijusYnV1de7u7sHBwStWrCCie1PGupuZmTWi1Z1717FYrPnz5+vp6eGr86Kiojt37uzatYs8sxSTyRQTEyNOtvv374uIiKiqqgroB84vunt4eJDnONDT06t3qi0c3Xft2kWuxrx8+XIDAwPiISW6p6SkBAQEcITQvNH9zJkz7969u3fv3s2bN9PS0hqUT5rrTONwOA4ODjybasl5+O7duwghYtg27nqjrq4uZHSvrq42NzenTGm2fv36sWPHCq4OsHr1ant7e9y/uqKiwtnZmVLC49KlS+Li4uRuHa9fv0YICa5GgVvLJSQkiMqFeHsQQvb29u/evcNL7t27R6meGBgYOHbsWDU1tdmzZ+Mlt2/fxm2hERERRLXLo0ePGhsb45HbZmZmLBare/fuAgZ4U/YYUTpxypQpxsbGoqKia9euFTAgvyUOJY7uKSkp8+fPd3Z2jomJwf8N7927Z2Ji0rdv323btuHd/vz583HjxtnZ2RUUFNTbYT41NbVLly5btmwhDhnP/1ZNpKur26DeKx3C5s2bEUKCx2oBAAAAv110r6qqUlJSatx8vI0QGBgoOLpfvXqVSGhVVVXu7u5iYmKzZs0SMNtwE6P7unXriouLs7KyKNF93rx5+OcRI0aQZ/dpaHR/8+aNtra2sbExMYnU9+/ftbW1CwoKSkpKBg4cuGDBAqIJl5/CwkIFBQVDQ0PyK7nHus+ePdvIyEjwrNE6OjqLFi3CP/v7+5Oje3h4uJiYGPkOTnBwML4oF0BBQWHkyJHJAh0/fhyP9OZ+e1VVlYeHB65L11zRvXEd5ilzH7DZbEdHR4SQo6PjiBEjzM3Nvby8zp8/z52+TE1NcSjKy8vT0tKSkZG5ceOGgAGuRHRnsVhPnjzZvHkzzvmamprkkxZPF1s2ciQAACAASURBVC9MdCc3z1ZWVqqqqpLX07bzuvMb694ITTzTsP79+/PMe+RicpWVlQwGgzwA283NTV9fX8joPmPGDOJPjMBmswcMGNCjRw9+lSw+ffqkpqZGrsRx/vx5U1NT8h09b2/vgQMHkt/1/PlzhNCTJ084AgUEBIiLi1PmfcQznKuoqODzB9+5o3yb4Tn8iGO3f/9+Op1eVlZ28uRJ7ugeGRlJp9P37t3LYDD4Nbnz66ewc+dOVVXVnJwcUVHRGTNmDBo0yNfX98GDBwJ+qWY8lDi6h4SEcNfeKysrw6N1yCP88Y2neqP7zp078Wx8gqN7XV3d1q1bhekIw9P48eNxEcHOZPz48URfDwAAAKDDaanojidYkpeX5zllcUVFRVhYWDN2Wlu4cKGWlhZ5UuLCwkJy48n169dxQsvMzLS0tJw8eXK9U3k3MbrjK2PceEWO7nPmzME/29jYWFlZEeWRVVRUXF1d8c+4m72A6J6YmNitWzeEUHR0NHn58uXLR48ePX78eFxOqV7e3t4SEhKUF3NH99raWnt7+65du/KLLqWlpTQajbgQnzVrFjm6z5o1i9LGHhwcTG6/5UlWVrZv3777BFq2bBlCiHueeTabHRwcTISZ5orujaswz53J161bhxAyNzePjIwUcGE9ffp0PT29r1+/GhkZde3atd5qfLhMnZ2dnb29/fbt23FfjNTUVBEREfIcCt26dat3znNymTosODi4d+/e5K3tNNG9KWdavQOkKaNq4+Pjyf0C/vrrL34jR8hBtKCgYPr06V5eXuT7X9XV1UVFRbm5uTgfUm7AEcaOHXvy5EnKQjzFBj6adXV1CgoKlK+1+/fvk0d385SWliYmJsaz+uPkyZOJcwPX/KesCndHIrqZeHh42Nracjics2fPckd3/GJJScnFixcL2B7u6H7p0iVNTU38j4ZOp0dFRbFYrLCwMCkpKQsLi5iYmJY+lDzL1BHYbPa8efMiIiIoy+uN7mPHjpWUlCSvNjg4WEZGhjIF4OjRoxFCI0eObFx6P336tJSUFM//4B1UaWmptLQ0cfccAAAA6HBaJLqz2WwTExOE0JIlS/i95sWLF6amphYWFhcuXGj6JwYGBsrKygb9Xzo6OsQV2L///osQmj9/vre3t5Clp5s+1p0o7k2O7sSQb1VV1Q0bNuT8DyMjo9DQUPwzHvnJM7ozmcxNmzbJy8vjUnbkiZfxPRF9fX1+BdIpbt++LSIiQlkDvwrzX79+xZPt8ZxtPj4+XlRUlMiovr6+5OhuYmJCuRQODg7mOWk5mYyMzKZNmwS/Ji0tbcKECdwtWhTNFd0NDAwaEd25K4pVVlYeOnSo3q7d586dQwhpaWmpqKiQW/yIGyh1dXVpaWn79u2bMGFCt27dlJWVEULHjh0jr2TevHlDhw4lL1FQUCA6XXMPe+YZ3R88eKCvr0/Zz50mujfLmcavLDl5EAS3AQMG4MgqOIgeOnQIIWRhYWFkZKShoaGoqGhkZDR48GBvb+8VK1bs2bPnr7/+4v424HA4e/fuJYIKi8X68uXLkydPLly44OHhgasz4tNMVlaW0jckNjYWT3DAb8vr6uqsrKz09fV59tUvKytzcnLCN4z8/f0RQpRZ7lJTU8nt2Pr6+riO2okTJ8jRnbjBp6ys3K1bN8HDdijR/ezZs6amprjfPpvNxjPP46fS09O1tbX5zSDYjIeSO7pHRUUtX758//79t2/f5jk7fb3RvaioSFJSsm/fvuSFwcHBcnJy/KY25DnFYL3q6uoMDQ3DwsI4ncXq1aslJCTqvWsPAAAA/F7RHfdOp9PpgjNVSUlJ//79EUJjxoypt2t3E8e637x5k1xhi5CTk/Po0aOWi+6ZmZkIobVr1+J6v7q6uniSJNy3mZzHhOkwn5CQYG1t7enpmZubm5GRwfNiPSEhgcFg1Jvev3z5oqKigq/dhZwcLjo6GiEkJydHbsLFZs+ePXr0aOLh5MmTieiOm+8oPVSDg4MFzzuQl5fHL1VSWpCYTGa93TeaK7rr6uo2Irrz+0Uo2Gz269evMzMziSWPHz9GCHXp0oUyVGHSpEnkvi0Iof79+1+8eDE3N5cyHru0tFROTo4yYllWVpZohl27dm290T0lJWXAgAHEdEpXr15dtmzZgQMH8KhmAQ3RHSK6N9eZZm1tzTPvPX36VMCn9+7d29HRkXv59+/fdXV1586dS3x0jx49+vTps3nz5ufPn3M3ouIy75Sh+EePHpWSkpowYYK9vb2urq6CgoKjo+OKFSsuX7784cMHHR0dZ2fn2tpaQ0ND7kLiPMd6kM2ZM0dKSoo8/JufESNGSEhI8Pwywd+92dnZNBoNfzlHRETIyMjM+2Xo0KH4z/bu3bt0Ol1eXp7YnoqKCvLgee7ovmvXrgkTJhCvx9PUE5U4ORzOu3fvVFRUeM6J0IyHkmer+7t370JDQ01NTRFCysrKU6ZMoYwCEBzd//nnHykpqYMHDy5evJjohdESY93xV5CKiorgoVIdRXp6OoPBIMrBAAAAAB1Ri0R3PLUyuTIWP0VFRbq6ugihCRMmtGh0v3XrFs+ElpiYyK/zcLNEd9x+npiYiGv8WllZTZkyBTcuaWtrk8ctC47uT5488fT0nDdvHjGslGd0xxPgnTlzhk6njxkzJj8/n+dW1dTUODg48KseLGBed3yrhWi8wlgslpqaGrk1/vTp07hrA5PJ7Nev38CBA1+/fu3n57dp0ybcb1bwlMUsFos8C7Sfnx+5eSoqKoocj3G3f+5Op02M7jxnxdPS0mpEdOfXXba2tjYzMzM6Onrx4sWurq5+fn6RkZFE+9iJEydkZGTk5eURQuSh6e/evRs2bBj+mclkurm5EY3weGIC8l2SZcuWcYdkaWlpYpwFd3m2ioqKgIAANze3CRMmpKWlPX78eO3atZWVleTXFBUV4XryYmJinz594rRFdM/JycHRnfvulfCa8UyzsrLimfcEz++gp6dH+Z789u3b/PnzNTU1t2zZYm9vHxISgr8lBBebxI3MlCWZmZl0Ol1VVXXx4sUPHz6kVGhbvHjx7t27w8LCrKysuO8FrF27VlxcnN9nHTx4UFxcnF+Hcwp9fX3uwhZ4TBCuErpmzRpcQB4PeldXVy/75fDhw/7+/nl5eWpqaj4+PtLS0sS0cP/++y/5W6impmbr1q2qqqoODg4lJSWrVq2ijBH48eMHQujAgQPkhRkZGZQuKs17KOvtMH/v3r0hQ4bgW29CRveqqiotLS3cQ2Hv3r0jR47E1fhaKLpzOJyLFy/26NFD8Dd2+/fjxw8jI6PON009AACA303zR/cXL17gS+qHDx8K8/qzZ88ihERFRZsypi4gIKBx0f3mzZv8/p03KLrn5ubu3r2bezmu9kRcuh0+fBj31hs8eDDl9QKiO5PJvHLlCuXymhLdExISvL29iTVcvXoVB78VK1YQk3thLBbL3d1dwMzeTk5O/KI7btyjjPm8e/euvb0994vZbPasWbNUVFRwmxKTyYyMjNTT09PR0Vm4cKGA9rrIyEhyrfJjx47p6OgQEZHFYv3xxx/kaYrz8/Pl5OQE/EYNje7p6el6enrc5cTV1dUbEd0pN1AuXbo0cuRIIyMjUVFRJSUlPz+/GzdukA9uXl6eq6urtLT0P//8U1lZOWzYMFFRUSKK4OZEnr/L+/fvyaXU3r59q6GhQdTZJkhJSRGJRVdXl3yTIj4+vnv37rhudmlp6ZQpU3x8fChFyAhz5sxpRG95YaL75s2b6+2qgPvRIIT4zc4tjGY803r16jV16lRi/EtOTg6urC7ga7C8vFxUVJQ88vb06dOKv+Am6Lq6uhkzZtjZ2QkOjQJcvXoV387jKTU1VVdXl2f/YQH1886cOSMlJSXkoc/Pz6fRaOPHj+dZaC0mJqa8vFxVVZXoi3706NEVK1aQ325sbIy/xrds2UKj0fBkeIsWLSImrrt371737t1dXV3Ly8vv37/fr18/7uZxPG+8kC2uzXIoyZ0LBN92OXHixJ9//skd3bkH2uDxL+bm5sT/ypMnTyorK69duzYgIKCFojv+H923b1/ub5KOorS01MHBoaEz2wMAAAC/RXQPCAjAtbKEfD2bzba0tOzSpUujC+HiWXa5o7uVlRXR4xRPPkTujYwdOHBAR0cHN3WWl5fnkSxYsEBeXp68BPfRXb9+PWVhWlqavr4+Qoi732lSUhKNRqPkkPj4eAsLC/Ic7JToji80b9++LeBXxpNsHz16NCIiwtLScvTo0ZRel2/evLG2tsbxRkNDY/To0fimw/r16yld8V++fLlixYodO3YcO3Zs79690tLS1tbW/D6Xe6ucnZ2JiaYJJSUlY8eONTExoXS2rK6uDgkJkZCQQAi5uLhwD5TNyspSUlIiNyHW1NRIS0uPHDmSMsEPuWzbqlWraDQaeSYz7uj+8uXLESNGuLi4eHp6EjM2Dx8+XENDw8vLizyNc8+ePTU0NExMTCgnTLdu3cjzuo8dO9ba2pr8xn79+rm4uFDmdaeML8jKyhIVFR02bFhMTAylIbSkpGTFihWamppBQUHE5X55ebm9vT2NRps/f35ZWdmwYcO8vLx4/pp4OgN8gGpra+3s7HgWJujevbu5uXl4ePiCBQsQQrj0F5vNnjp1KkKIEj8uXLhgYmJia2u7cOHCQ4cO3bp169mzZ69fv3779u27d+9evnz59OnTW7duRUdHh4WFLVy4EN8IKywszOPP2Nh4yJAh/J7FRRwsLS35pffbt28vXLhQUVERn9vi4uIzZswQ3O2C3+5qxjPN3Nzc1taWqDq5fv16vHspc1gsXrx427ZtV65cefz4sZ+fH0IIzz2O/fPPP5KSkpSgfurUKS0tre7du3t5ef3zzz8RERFnzpyJiYm5efPmrVu3/v333ytXrpw8eXL37t1r1qzx9vYWMqJkZWX17NmTGAKQlJS0a9euhISET58+paamSktL87xDFB0drampyW+QUVpa2qFDh+7cufP27duSkhJixnI80QPFnTt3KisrV69evWzZMp5ry87O/uOPP7Zt24YfslisESNGiImJ7d6929LSEm/D9u3b6XS6o6MjcQfq+fPnBgYGS5cuJQ/XysnJmTx5Mvf3P0YZF9AshxI7duwYQmjr1q37GsLb25vnBGbx8fFKSkqUW2mvXr3C3dwkJCQ2bNgQExOTmpqal5dXXFxc/ktJScmnT5/S09PJ47MaKjU11dHRsSNOh56VleXk5MTzmxAAAADocJo/utfV1RUXFwuYwopbbm7u48ePm/KhM2fOxNG9oqJiwYIFPXv2NDMzI+ow4TDMYDAMDAymTZs24394e3t37dqVmJ6nuLjY1dXVy8tr8eLFKxpl5cqVlOH9nz59opRWLi0t7du3LzFymGBmZhYWFrZ06dL+/fvjQQSCr5NCQkJwQQEVFRV+w31ZLNaBAwc0NTUZDMaxY8dwt2ee1dHy8vKWLFnCYDBwHBIweTLF/fv3KR3vmUzmgQMHDAwMgoOD+ZUwSEtLMzIyokyMjIdVKysrS0pKUi6mR4wYYWRkRKkgQB7sivuKE9NEUyxZsgS3uufl5TVi3m+CkpISudW9XrjVnbvWF/fY0Tdv3ixdutTd3f3EiROUezq4l+yUKVMQQkpKSgwGY8yYMQJqIl6/fh3fQcPtk9zu378/dOjQXr+4uLgQSeDKlSsODg7cE1+zWKxLly55eXlpaGgggdatW4f/8B8/fuzo6Dh79uxly5Y17k9pxYoV58+f57SYZj/TzMzMePayplR5qK6ujoyMVFdXx3tMX1+fcrjfvHnDvbU1NTUREREjRozA31f80Gi0y5cvC/PrJyUlDRkyJDs7m1jCYrGio6Nx8TaEkIiICHcj88aNGwcNGsSvuBr+8k9ISAgMDJSTkyO26s8//+Q3m3paWtqoUaN4/kneu3fPzs6Oco+grKxsxIgReLXXrl3jcDjJyckWFhaUBurCwsJ58+YxGAw9Pb1hw4b5+PjMmzcvKCho8eLFCxcunDlzpoeHx6hRo/r162doaKihoUHpuNFchxKPLMB305IbAs9AQflX8vjx4169evGrsfro0SMfHx/ybqcYPXp0vVP9CVZZWXnw4EHyHAftX2Vl5d69e4UsZQIAAAD8vpPDtTJfX99BgwYRDz98+KCnp0eZu/jhw4cBAQGeJN7e3suXL+fuF91ymExmYGAgzymX1q1bh2dof/funbq6Oh4SL8CzZ88YDIaLiwt34wxFXV2dkHWGcH1BKysrYq74eh0+fJi4mKuoqDh06ND48eN37NjBs7cnWWFhYZ8+fSj9FA4cOCAtLc09JOHixYuUcmgbN26kdNOYNGkSv7nr5syZQ25KbTRTU1PuEcUC3L9//8KFC8Jc7N65c0dw9Ww8waGlpSWeMZtn2klPT6fT6Xfu3Dl69KiAmQUFqPe+Rnl5eVZWVkJCQlxc3LVr12JjYy9dunThwoVz586dP3++A13WN/uZNn78eMrsfQUFBfHx8Tw/PTc3V1FRceDAgTyDumDfvn178eLFgwcPuA8BHjper8OHDy9ZsoQ7Z+Ibi/369ZORkSHmICB+F19f33379gl5iD9//tyzZ0+cGPl9QZWUlHh6evK8u7d+/fq1a9fyHELFZrP37t3brVs34q4fv5O2oKDg4MGDU6dOtba21tTUlJWVlZCQEBMTE/1FXFxcUlJSVlaWu3ZpMx7K3bt3i4uLN3SgeFRUVL9+/chfoQ8ePAgICKi33gGLxUpLSzt16tTGjRvnzJkzfvz4oUOH/vnnn25ubh3obxMAAAAAnTy6Z2ZmUtr5MzIyKLW12oPXr1/Xm2lx905h1kYZc94s7ty506AeE2TR0dHkdrx6VVdXt84xakQpNZ541q5rZcnJyWFhYTxTTVFREd7//Bo5QftRbwxrIXl5eYJbXz99+sQ9jCUlJaWhtUjevn3LnYrJsrOz+fXKqTfr1tTUCKh+334OZVZWVr23VrkJWTUTAAAAAL+bThLdAQAAAAAAAACAzgqiOwAAAAAAAAAA0K5BdAcAAAAAAAAAANo1iO4AAAAAAAAAAEC7BtEdAAAAAAAAAABo1yC6AwAAAAAAAAAA7RpEdwAAAAAAAAAAoF2D6A4AAAAAAAAAALRrEN0BAAAAAAAAAIB2DaI7AAAAAAAAAADQrkF0BwAAAAAAAAAA2jWI7gAAAAAAAAAAQLsG0R0AAAAAAAAAAGjXILoDAAAAAAAAAADtGkR3AAAAAAAAAACgXYPoDgAAAAAAAAAAtGsQ3QEAAAAAAAAAgHYNojsAAAAAAAAAANCuQXQHAAAAAAAA8MVise7cuQM7CIC2BdEdAAAAAAAA8L92cDE2Np42bVppaSnsJgDaCkR3AAAAAAAAgKDojsXExLDZbNhTALQJiO4AAAAAAAAAAEC7BtEdAAAAAACA31FVVdWXL1/aeisAAEKB6A4AAAAAAMBvoba29uXLl5GRkQEBAXZ2dhISEteuXaO8Jjc39+TJk5GRkcSS0tLSJUuWvH79utW3FwDwvyC6gw7g8+fPeXl5bb0VAAAAAAAdTF1dHSWrIxJTU1MWi0V+fWJi4urVq8XExNTU1Ihh7Xfv3kUIubm5tdEvAQD4/0F0B+3Rvv9r165dioqKJ0+ehMooAAAAAADCuHPnTu/evcXFxRF/R48e5fneKVOmIIRevnxJLPHx8Zk6dSrseQDaEER30AGiOyE7O7utNw0AAAAAoAOora21trYWkNs1NDRqamp4vvfQoUMIoZMnTxJLtm7deubMmVbcfAAAFUR3AAAAAAAAOqH//vtPSkqKX3TfvHkzvzc+evQIIbRu3Tr8kMlkurq6MpnMVtx2AAAVRHcAAAAAAAA6p/DwcJ65XVZW9sePH/ze9eXLF4TQtGnT8MPNmzfHxcW14lYDAHiA6A7aIzabXVZWRjysq6srKipq0y0CAAAAAOh42Gz2sGHDuKP74sWLBbyLxWKJiIiMHTsWN93PmzevFTcZAMAbRHfQviQmJnp7e3ft2tXHx4dYGBAQICUl9eHDhzbdNNAhsVispKQkTqfQmX4XAAAArePdu3cmJiY0Go2c28XExD5+/Cj4jUpKSo6OjtXV1V5eXpWVlXC8AGhzEN1Bu1NdXa2vr6+urk4suXLliqio6IMHD9p0u0DHwF3d0MTEZNasWT9//uR0NJ3pdwGgo0tMTISBvqDDefDggYqKioGBwa5du8jR3cvLq973du/e3draet68eTCdOwDtBER30B7NmTMHIfT161diyYABAwSMyAKg3ukJrl271uEmF+xMvwsAHQv3393YsWP79OmTkpLS1psGgLAOHDggJibm4OBQUFDA4XCmTZuGczuNRsvIyKj37b1795aUlLx9+zbscQDaCYjuoD06ePAgQuj+/fv4YW5u7pw5c9p6owAAAPwu+N04O3jwYElJSVtvHQD1qKmp8fX1RQhNnz69trYWLywvLzcyMkIIOTs7C7MHBwwYcPz4cdjXALQfEN1BexQfH48QioqKwg9nzpxJboEHAAAAAAA8FRYWDhw4kMFgHDlyhPJUcnKymJjYvXv3hNl1b968gT0MQLsC0R20R69evUIIbd++ncPhXLhw4ejRo229RaCDYbPZeXl5LBaLw+FUVlZWVFRwOibKsPZv37613bYAAABo71JTU3V0dJSVlYmuixTnz59v9Y0CADQPiO6gPSosLEQIrV69+tu3bzAfCWio8PBwZ2fnjRs3Tp8+fcOGDSIiIh2u6eDJkyczZ85UVla2tbUlFiYmJtJotNWrV7fppgHwu6AUWCktLSXPWgpAO3T69GkpKSlLS8vc3Ny23hYAQPOD6A5aCZPJvH79+s6dO4V8MUJo9uzZ06dPh0slIDw2mz19+nQ3Nzfc3n79+vUuXbro6up2xH3IYrFsbW1pNBrR0l5UVGRsbDxmzJi23jQAOrOUlJSAgAANDQ15eXlikDCHw9HX19fQ0Oi4XXhA58Zms4ODg2k02sSJE+EsBaCzgugOWtzLly+DgoJUVVURQlu2bBHyXdLS0pqamu/evWvhrQOdysqVK42MjKqqqvDD5ORkhNCMGTMatJLq6mpO+7B582aE0NWrV4klBw8e3Lx5c5tuFAC/hVGjRiGEbt26RSxZsGABQqjeqbABaH2lpaWurq40Gi04OBjmHwGgE4PoDlrKly9fwsLCrKysyPOIZmVlCfl2PT29pKQkODxAeKmpqaKiopcuXSKWXLp0CSF04cIF4Vdy8eLF8PDwdrLbb926RbnhNWHChKKiojbdKAB+C9HR0QihtWvXEktqa2v19PQgF4H25u3btz169OjSpUtMTExbbwsAoGVBdAfNrKqq6uzZsyNHjhQVFSWHdoRQ9+7dhV9PdnY2HBvQIMOHD9fT0yMv8ff3FxUVpQxYFeD27dsMBqP9zESYk5ODEPL398cPY2Nj9+zZ09YbBcBv4c2bNwihiRMnEkuio6PhDxC0Nzdv3pSXl+/evXtmZmZbbwsAoMVBdAfN5ufPn15eXl26dEF8LFy4EHY3aCGfPn2i0WhLly4llvz48UNWVrZfv35CruHJkycyMjIIoREjRrSTw1RbW0uj0caPH8/hcPLz8z08PKDFD4DWwWQyRUVFbWxs8MOSkpIxY8YwmUzY/6D9OHDggJiY2LBhw4qLizntUmVlZfEvnz9/fv9LZmZmhyscC0D7AdEdNKdVq1bxy+0IoQcPHsDuBi3k5MmTCKHTp08TS/z9/Sn9XQV4+fKlgoICPlGNjIzaz2GSl5d3cnJis9kzZswoKCho680B4DeipaWlo6ODf/b29obaK6D9qK6u9vb2RghNnz69rq6u9TegqqoqKysrPj7+2LFjISEhixYt8vX1/fvvvwcOHNizZ08tLS18K5wnERGRkpKS1t9mADoBiO6gmc2dO5fnN7WCgkKb/HcBv4lNmzaRa0pdunTJwcEBIfTo0aOcnBzBbWUfP37U0tIizlUxMbH207ZmYGBga2u7Zs2aJ0+etPW2APB76d27t6ysLIfD2bNnD7laJABt68uXL3379mUwGEePHm2Fj/v06dPt27fDw8Pnzp3r4uJiaWmprKxMvsCTkJBQV1c3MzOzt7d3cXHx9PRcsGDBunXrdu/efeCXU6dOnf3l33//jYuLS05OboXNBqBTgugOmhmTyXRzc+OO7h4eHrCvQcs5duwYQmjSpEkFBQV79uzZtm3b+PHjRURE8vLyli1bJuCNBQUFxsbGlNO1/ZRasLKykpKSunz5cltvCAC/HScnJxqNFhsbu2PHjrbeFgD+n+fPn2tra6urq7dQKd9v375dvXp106ZN3t7etra2cnJyRFO5rq6uvb39lClTli5dunv37tjY2NTU1MLCQjg2ALQaiO6g+dXU1JDbMLGzZ8/CvgYtp7S01MDAACHUpUuXvXv3cjgcFxcXXGWqsrKS37t+/vxJmQQBi4uLaycHa8CAAUeOHGnrrQDgdzR+/HiE0KpVq9p6QwD4f06dOiUlJWVlZdWMkxSWlpYmJCSEhYV5eHj06NED/xMUFRXV19cfOXJkUFDQgQMHEhISysrK4DAA0OYguoPmt3btWjqdrqenR+6BLHyVbwAap7y8PDEx8efPn/hhcXFxWlqagNdXVlbiTvXc9u/f306OAgyvBaCt+Pj4EPM7ANC2mExmUFAQQsjd3V3A/Wghffz4MTIy0tPT08jIiEajIYQYDIaNjY2/v//Ro0czMjJqa2ubacMBAM0JojtoZgcOHEAI7dq1Kz8/39DQEAchJyen9rmjf/z4kZ2d/ezZs1u3bp0+fRoPygoLCwv9ZfXq1UG/QDXUzofJZI4ZM4ZnbkcILV68uK03EADQ2l68ePH8+XPi4du3b2FOB9AelJaWuri40On00NDQRq/ky5cv0dHRfn5+3bt3x//pjIyMfHx89u3bGIL8igAAIABJREFUl5ycDFkdgA4BojtoTjExMaKiouvWrcMP3717161bN4RQeHh4W+3oysrKV69e3bp168iRI8HBwV5eXkOGDDExMVFWVqbT6Txjm5SUlPwvmpqa+vr6hoaGRPEz0GksWrSIX25HCP39999tvYEAgFby8uXL4OBgExMThFBqairsd9CuvHnzxtTUVFZWNjY2tqHvZTKZDx48WLx4MdETXk9Pz8fH5/jx458+fWqZ7QUAtCCI7qDZ3Lt3T0JCYubMmeSFaWlpXbt2bbWiX4WFhffu3du3b9+cOXOGDBmiqqpKhDERERF1dfW+ffuOGzduwYIFGzZs2Lt37+nTp2/dupWcnJydnQ1TlfxWWCxWQkJCQECAkpISd3S3sLBok62qqKhok88F4LdN7ETvsPY2MSQAHA7nxo0bXbt2NTQ0fPXqlfA7pLS09Ny5c1OnTlVUVEQIycvLT5o0KSIiIicnB/YqAB0aRHfQPDIyMuTl5V1dXbln1Xrx4kXL7eXc3Nxz584tWrRo0KBBRAYTExPr0aOHm5vb6tWrjx8/fv/+/ezs7JqampbbDNBxVVdXX758mcFgiIuLE1fw0tLSrdlRNjc3NzQ01NjY+OnTp632oQD8tvfsgoKCcFVLCqhIB9qVsLAwOp0+YsQIIZsWiouLDx065OTkxGAwEELdu3dfsGDBnTt3YGpeADoNiO6gGWRnZ6upqQ0cOLC6urqld2hZWdmNGzfWrVs3atQo3BsfIaStre3m5rZ27dpz585lZmbCkC3QIPfv30cIZWRknD17duTIkWJiYgihr1+/tvRuLCoqOnDggJ2dHa4SpKGhAQNrAWghCQkJs2fPVlNTEzBSJj09HfY/aA+qq6s9PT0RQgEBASwWS/CLq6qqzp075+rqymAwaDTan3/+GRoampmZ2VobCwBoPRDdQVMVFhYaGxtbWFi0XIfzurq6Z8+ehYaGOjo64qZRWVlZOzu7gICAs2fPtkLEAp3bwoUL//jjD+Jhfn5+eHj4+/fvW+jjqqqqYmNjx40bh+8REGbPnt1CnwgA+PfffyUkJATkdhMTE9hLoD34/PmzjY2NhIREZGSkMMO+cK/4Hj16BAcHv337thW3FADQ2iC6gyapqKj4888/9fX1WyI/p6enb9q0ycnJSUpKCiGkpKQ0bty4ffv2vX79GhonQTMyMjJavnx5S+9SfJk1ffr0Ll268EwON2/ebOltAOB3dvPmTUlJSX7RnSiwCkAbSkxMVFNT09DQEDB+6uvXr6Ghobq6uri7VkBAQEJCQutuJgCgbUB0B41XW1s7bNgwZWXlrKys5tqPTCYTD0TExX6lpKQcHR1DQ0OfPXtWb58xABrhv//+QwglJSW19N77+++/BbT4ycnJQTkGAFra/fv3ZWRkeP4N/vfff+1n/1dUVHz8+DEtLe3evXuXLl2KiIjYtm3bypUr/f39p0+f7ufnN+5/DB061NHRccSIEVAwvBM4efKkpKRkv379eDaHsFismzdvjhkzRlRUlMFgTJ48+c6dO3BpBMBvBaI7aCQ2mz116lRZWdmUlJSm78SqqqqLFy96enriUnOampqzZ8++efMmhBnQ0kJDQ7t169YKVz8/fvywsrLiF93d3d1begMAAHgyFMpYFYRQr169Wn/nMJnMd+/e3b59+9ixY+vWrZsxY4azs7O5ubmCggLPu3u6urqWlpa9e/ceNGiQ4y+urq44wE+bNu379+9wfDsuJpMZFBSEEJo8eXJVVRXl2cLCwk2bNuHaioaGhlu2bCksLGyjLQUAtCWI7qCR5s+fLy4u3sQJzykjtfT19XG/L+gPD1pNv379/Pz8WuezCgoKcHcSbqdPn26dbQDgd8ZkMqdOnSoiIkLpOf/PP/+09EeXlZU9e/bs5MmTK1euHDdunLm5OS4DjhCi0Whqamo2NjZ///13QEDAli1bTpw4gScufffuXVFREfxP7NyKi4uHDh1Kp9NDQ0MpT2VnZwcEBEhJSdHpdEdHx9jYWDgZAPidQXQHjbFhwwYREZGzZ882evdlZmYuW7ZMW1sb30Jeu3Yt1FYBrS8/P59Op1+5cqXVPvHjx486OjqU3M5gMH7+/Nlq2wDA74nJZE6ZMoVOp584ceLZs2fkxu2W+Af048ePO3fubNmyZeLEiYaGhngiCTwlytChQ+fOnbt37974+PgPHz7ArCi/s6ysLBMTEwUFhbi4OPLy5OTk8ePH0+l0eXn5ZcuWffnype22EQDQXkB0Bw12/PhxGo22c+fORuy78vLyAwcO9O7dGyGkqKjo7+//+PFjOAagrRw5ckRKSqqioqLVPpHNZru7uxMX8djw4cNbbQMA+D3V1taOGTNGTEzswoULeElKSgru8GVtbd0sH8FkMlNSUnbs2OHu7m5kZIT/zLt06TJgwIDAwMCoqKhnz56VlZU1y2eBzuH69etycnLGxsavX78mFiYkJIwcORIhpKqqGhwc3HLT9wAAOhyI7qBhYmNjRUVFg4ODG7rj/vvvv7lz58rJyYmKirq6ul6+fBnGsYM2N3r0aFdX19b8xKCgIDqdvmXLlq5duxLRfd++fa25DQD8bmpqalxdXcXFxS9dukRenpqaqqSktHXr1kavmclkPnv2bNu2baNGjcJ/1NLS0g4ODgsWLDhx4sSrV6+gihjgic1mh4aGioiI/PXXXz9+/MAL4+LirK2tEULm5uaRkZHQHQMAQAHRHTRAYmKilJTUjBkzhH8Lk8mMjY11dHSk0WiqqqpBQUEfPnyAnQ7ag8rKSmlp6YiIiFb7xLCwMBqNdujQIQ6H8+jRI2lpaTzMNS8vr9W2AYDfTU1NjYuLC4PBiImJ4X72xYsXHz9+bOg6c3Jy9uzZM2rUKDk5ORzXnZycQkJCHj16BHEL1KuqqsrDw4NGowUFBeGbO3fv3rWzs0MI9enT59q1azCgHQDAE0R3IKyMjAx5eXkXFxcmkynM68vLy3fs2KGlpYUQGjhw4NmzZ+GCBrQrsbGxIiIi3759a52PO3r0KI1G27JlC3kDxMTEbG1tW2cDAPgNVVZWOjk5SUpKNrGoKr4T/eDBg6CgoD/++AOXqBg6dGhISMjjx4/r6uqaaXtB5/fp0ydra2sJCYmoqCgOh5OUlIS7x5uZmZ09exZCOwBAAIjuQCh5eXlaWloDBw7knrOE2/fv34ODgxUVFRkMxrRp0zIzM2Evg3bIz8/Pzs6udT7rwoULdDp99erVlOUnT57kLikMAGgWFRUVjo6OUlJSlAJgDVJZWXnu3Dl3d3dc1k5NTc3X1/fixYswah00wqNHj1RVVTU1NZOTk1+9ejVq1CiEkLGx8alTp2BsBQCgXhDdQf0KCwtNTEzMzc3rrZXy9evX4OBgOTk5GRmZgIAA6AYM2i0Wi6WmptY6sfnWrVsMBmP27Nk8n4X2OgBaQnl5+eDBg6WlpePj4xvx9tra2qtXr06ZMqVLly64G/OaNWuSk5OhURQ02qFDh8TFxe3s7LKysubPny8mJqajo3Ps2DEhOzMCAABEd1CPioqKP//8U19fX/DEJJ8/f541a5a4uLiysvL69euLi4thz4L2LDExESH06tWrlv6gx48fS0tLT548GVpUAGg15eXlAwcOlJGRuXv3boPeyGKxEhISAgICVFRUEEI9evQIDg7OyspqsS0Fv4W6urqgoCCEkJ+f35EjR1RUVKSkpIKCgqDvBgCgQSC6A0Fqa2uHDx+urKxMnraEoqioKCgoSEpKSkVFZceOHa05zxYAjbZ8+fLu3bu39A5MS0uTl5cfNWrUb9K0zmQyi4qK3r9/n5KScv/+/bhfbty4cfZ/HD169MCBA6dPn27rLQWd2Y8fP/r27SsnJ5eYmCj8uz5//hwaGqqnp4cQ0tHRCQgISElJacnNBL+LoqKiIUOGiIqK+vn5WVhY0Gi0cePGQcleAEAjQHQHfLHZbE9Pzy5dujx79oznC8rLy0NDQ7t27SojIxMUFPTz50/Ym6CjMDMzW7RoUYt+xNu3b1VVVQcNGiRMhYj2r7i4ODMz886dO1FRUdu2bQsMDJwyZYqTk5Otra2pqam6ujoumC8MeXn58vLytv6FQOdUUlJia2vbtWvXJ0+eCPP6urq6y5cvOzs70+l0WVnZGTNmCPlGAISRnp6ur68vLy8/cOBAhJC1tfXjx49h1wEAGgeiO+ArMDBQXFz85s2b3E8xmcx9+/Z169ZNUlJy8eLF379/h/0IOpD3798jhB48eNByH5GXl6erq2ttbV1aWsrpUIqKip4+fXrq1KkNGzZ4e3s7ODjo6upKSEiQs7eMjIyxsbG9vb2bm5uvr++CBQvWrFmzffv2I0eOnDt3Li4u7unTp69fv37/S25ubvH/gGkmQIsqLi62traWl5d/+vRpvS/Ozc1dvny5mpoaQqhv375HjhyBO0qgeV29elVOTk5TU1NOTk5BQeHIkSMwcgoA0BQQ3QFvISEhIiIiZ86c4X4qISGhV69edDp9+vTpnz59gj0IOpzt27crKiq2XCf2goICU1NTIyOj/Px8TjvGYrHevHlz/vz5NWvWTJgwoU+fPvLy8kQ+V1BQsLa2njhx4tKlS8PCws6cOfPgwYOsrCyIN6B9KigosLCwUFFRSUtLE/zKp0+fTpw4UVRUVF5ePiAgICMjo7W2Efwu2Gx2aGioiIiIsrIyQmjkyJFwvQQAaDqI7oCHqKgoGo0WFhZGWf7lyxcPDw8ajWZjYwNdCkHHNWjQIE9PzxZa+c+fP3v37q2lpZWbm8tpZ/Lz8+Pi4rZv3+7j49OnTx8pKSmc0pWVlQcOHOjr6xsSEnLmzJlnz57VO50EAO1Kfn6+ubl5t27dBORwFosVGxvr6OiIEDIwMAgLC4P7UKAlVFVVTZo0iUajiYmJqaurX7x4EfYzAKBZQHQHVFeuXBEVFV21ahV5YW1tbVhYmKysrJqaWmRkJMyOAzqukpISMTGx8+fPt8TKKysrHRwcVFRUBFR2bE21tbXPnj0LCwvz8PDo0aMHjUZDCImLi/fo0cPDwyM0NDQ2Nvb9+/dtvZkANMm3b9/MzMxUVVVfvnzJ8wVVVVV79uwxNDRECDk4OFy+fBn6LYMWkpeXZ2ZmJvLLvHnzoIY8AKAZQXQH/0dSUpK0tLSfnx95YWJiYo8ePcTExAICAqAWHejooqKiGAxGSwxBr62tdXZ2lpOTe/78OaftfPjw4cSJE3PnzrWxsRETE0MISUpK2tnZLVy48OzZs1lZWTCHMOhMPn78aGhoqKWl9ebNG+5nq6qqdu3apa6uLioqOnHixOTk5LbYRvC7SEhIkJWVpdFo2traSUlJbb05AIDOBqI7+F8vX75UUFBwcXEhxgCXl5fPnz9fRETEwcEBJrYF/1979x3XxP3/Afx9mRD2FmUpijiwbhRH3cVdUaxWqa0itg7UtoD6U3GhuHFURWmdtYrViqPuOlAU6qzbIiqIFhEEZIRAkt+jTb+UAlqEJHckr+df5pO7z70fb1Tyyt19TqkThg4d2qdPH7VPK5fLhw0bJpFIYmNjlVr34sWL6OjogICAxo0bq66Bt7e39/X1jYiIiI2NlUql2i8JQAuePHni6urq5OSUmJhY5q3CwsLIyMg6derweDxfX1/8CgNNW7ZsGY/HIyJfX1+cbAcATUB0h7+lpKQ4OTl17ty55EFW586dc3Nzk0gk4eHhuLYQdINMJjM3N1+/fr16p1UoFOPGjROJREeOHFFqy6tXr/bv3x8YGNi0aVPVlfCNGzeeOHHivn378NAH0AePHz+uV6+es7NzmZs+VKHdwcEBoR20o6ioaOjQoURkYGCgobuxAAAQ3eFvL1++bNSoUdOmTTMzM5VKZVZWlr+/P8MwvXv35uBSWwBVdvToUYZhUlJS1NvDkJAQPp8fHR2t1LykpKTIyMh+/fqJRKKSs+uRkZHJyclaODoARzx69Khu3bouLi6PHj0qPX7gwIF69eohtIPWPHv2zMHBgYgaNWr07NkzdB4ANAdn3UGZl5fn5eXl6Oio+ugfHx/v6upqbm4eGRmJ5ehAx0yYMKFNmzbqnTMiIoJhmE2bNik1pri4ODY2Njg42N3dXXXver9+/SIjI8uEFgA9cf/+/Tp16ri5uZV+4FZcXFy7du2IaNCgQbg8HrTjxIkTYrGYiCZMmICPTACgaYju+k4mk/Xu3dva2vrevXvFxcXz5s0TCAQ9e/bEN8egk1xcXObNm6fGCTdv3swwzNKlS5UaIJPJDh06NGrUKGtrayKqVauWv79/TExMXl6eJg4HUCPcvXu3du3a7u7uqampqpHk5GTVg0tbtmx55swZtgsEfbFo0SLVE+BwkTwAaAeiu15TKBSffvqpRCKJi4tLTk7u3LmzQCAIDQ3Fne2gk65evUpE169fV9eEe/fu5fP5s2fPVqpVcXHxqVOnxo4da2lpSURNmzb9v//7v/j4ePzDBLhz5469vX3Jlcm5ubnTpk0zMDBwcHDYunUr/o2Adsjl8v79+xORjY0Nnq8JAFqD6K7XvvrqK6FQePTo0X379llaWtatWzcuLo7togA0JTQ01NnZWV3XNB4/flwsFo8fP16pPrdu3QoJCbG3tyciZ2fnwMDAy5cvq3F+gBrt2rVr1tbWzZs3T09PV93W7uzsLJFI5s2bh0tRQGsePXpkY2NDRJ07dy55Ig8AgBYguuuvxYsXMwzz3XffhYSEEJGfnx+eZQK6rWXLloGBgWqZKi4uzsjIaOTIkWo5y5ecnDxnzhwXFxcicnBw+PLLLxMSEtRRJoDuuHr1qpWVVYsWLV6+fPns2TM/Pz8i6tOnD1Z8AG168uSJhYUFEU2fPh2dBwAtQ3TXUzt27GAYZt68eV26dDE0NNy6dSvbFQFo1tOnTxmGOXHiRPWnunHjhoWFxYABA6p5vkUmk+3bt69Pnz58Pt/U1DQgIODs2bO44hegvMuXL1taWrZq1So9PT0yMtLU1NTe3h6/uUDLrl+/7uDgIJFIunTpguYDgPYhuuujQ4cOCQSCMWPGuLi4ODg4xMfHs10RgMZ98803ZmZmhYWF1Zzn999/r1WrVteuXQsKCqo8yYMHD0JDQx0dHYmoVatWkZGRuOYFyisqKsrMzExNTX348OG1a9cSEhJOnDhx6NCh6Ojo7777buPGjdX/+1wjXLhwwdTU1MvL6+LFiy1btuTz+ZMmTcrOzma7LtAvP//8s4mJSdu2bc3NzVesWMF2OQCgjxDd9U58fLyRkVGHDh0MDQ07d+78xx9/sF0RgDZ88MEHw4cPr+YkKSkpLi4ubdq0ycnJqcLucrl8//79Xbt2ZRjGyspqypQpt27dqmZJoHvGjBmjuiL37fr166fUA7GxsSYmJh07dpw/f75YLPbw8Pj111/ZLgr0TkREBI/H8/HxuXTpEhFhFRIAYAWiu365ffu2ajk6Ivrqq6+wvAroidevX4vF4p07d1ZnkhcvXjRq1MjNzS0tLe1d983JyVm1alX9+vWJqFOnTj/88INUKq1OMaDDcnJyPDw8/jO6nzt3Tqnrzp07pzrP2alTJ4ZhAgMD8Q8HtEwul0+YMIGIgoOD5XL56tWrjY2N8fEJAFiB6K5Hnj596uTkZGFhIRaLv//+e7bLAdCe6OhooVCYmZlZ5Rmys7NbtWrl5OT05MmTd9oxNTU1NDTU0tJSKBT6+vriIQ5QGY8ePbK1tX1Lbm/btq3Od/LMmTPGxsbu7u7GxsYuLi6nT59muyLQO0VFRSNGjODz+ZGRkaoRX19fb29vtusCAD2F6K4vXr586ebmJpFIzM3Nz5w5w3Y5AFo1cuTI7t27V3n3/Pz8zp0729ra3rt3r/J7JSQkDBkyhM/nW1tbz5gxIzU1tcoFgB6KjY0Vi8Vviu779u1T6rQjR44YGBiovr/w9/ev2i0qANUhlUp9fHxEIlF0dHTJYO3atcPCwtBYAGAForteyM/Pb9WqlUAgcHR0vHv3LtvlAGhVcXGxlZXVqlWrqra7TCbr27evmZnZtWvXKrlLXFxc7969iahx48YbN27Mz8+v2qFBz23evLnC3G5hYaHbT0T7+eefRSKRoaGhlZXVwYMH2S4H9FFubm7Pnj0lEsmRI0dKBu/fv09EsbGxrJYGAPoL0V33yWSy9u3b83i8pk2bYlE60EOnT58moqSkpCrsK5fLhw0bJpFIKvlZ7fz58/369SOipk2bbt26tbi4uAoHBSgxZcqU8tHdyMhIIBB89NFHly5d0tVnoPB4vNatW+v2NxTAWa9evfLy8jI2Nj516lTp8U2bNhkYGFTn8SIAANWB6K7jFAqF6uyfp6cnLjgE/TR16tRmzZpVYUeFQjFu3DiRSFT6rMubxMbGqkJ7s2bNoqOjFQpFlYoF+Be5XK76e1XC1tY2Kytr69atjRs3Vj1ccOvWrTqzaNa2bdt4PB4RTZw4UU8efQdck56e3qxZMxsbmytXrpR565NPPsET3QGARYjuOs7Hx4eIunTpojMf7ADeVYMGDWbOnFmFvoWEhPD5/NJ3OVbo4sWLnTt3Vn1BdujQIYR2UK+cnJymTZuWRPeS+2wVCsWJEyf69evHMIy9vX1oaGh1FmLkgsWLFzMMIxKJdP5OfuCszMzMFi1a2Nvb37lzp/y7Li4us2bNYqMuAIA/Ibrrss8++4yI3n//fblcznYtAOy4desWESUkJLzrjosWLWIYJioq6i3b3L9/f/DgwQzDtGrV6ujRo9WrFOCNkpKSbGxsVJfKv3z5ssy7169fDwgIMDQ0NDExCQgIeKfFFLlj6tSpRGRpaZmYmMh2LaCncnNzO3bsaG1tfevWrfLvpqSkENHx48fZKA0A4E+I7jpL9RhSLy8v5HbQZwsXLrS3t3/XM+GbN29mGGbZsmVv2iA9PT0kJEQsFjs5OUVGRuJfGWjauXPnRCLRl19++aYN0tLSwsPDa9euzePx+vXrd+LEiRr0Qxk+fDgR1a1b9/Xr12zXAnoqLy/v/fffNzMzu3z5coUb7NixQyAQ4N5DAGARortumjx5MhG1a9eO7UIAWNauXbtx48a90y579+7l8/mhoaEVvpubmxseHm5qamppaRkeHo71ikBrNm7c+OTJk7dvI5VKt27dqrrAvkWLFlu3bpXJZEoOk0ql7du3J6L33nsPN3YBWwoLC3v37m1kZPSWFUnHjRvn6emp3boAAP4F0V0HhYaGqj4G4Z5b0HNpaWk8Hu/w4cOV3+X48eNisXj8+PEVvnvgwAFHR0eJRBISEvLq1Sv1VQqgZqp1ExmGqVWrVmhoaPnL7LkgPT29QYMGRNStWzdcugJsUT0B1MjI6Ny5c2/ZrFGjRkFBQVqsCwCgLER3XbNu3Toiql+/Pk5fAGzatMnIyKjyJ8bj4uKMjIxGjhxZPkXcvn27a9euRDRs2LCUlBT0FmqEBw8eBAYGSiQSAwMDPz+/ClfeYsvdu3ctLS2JaPDgwfiiGVg0evRosVj89ntMXrx4wTDMgQMHtFgXAEBZiO465YcffmAYxs7OLjc3l+1aANjXv39/Hx+fSm5848YNCwuLAQMGlPnaKy8vLzQ0VCwWu7m5YS06qIlevHgRHh7u4ODA4/F69Ohx4MAB1qNyQkKCkZEREb3r/SwA6jV37lyGYbZt2/b2zX788Ucej5eRkYH+AwCLEN11x/Hjx3k8nrm5eXp6Otu1ALAvPz9fIpFs2bKlMhs/ePDAzs6ua9euZU7RHzhwwMnJSSKRhIaGSqVSjRULoHGFhYXR0dFt27ZV3VEVGRmZn5/PSt9/+eUXAwMDIpo0aRIrBQCo7Ny5k2GYRYsW/WdDJk+e3KxZM/QNANiF6K4jLl68KBAIDA0NHz58qNQDd+/exY2R8Hb79+/n8/mV+SYrJSXF2dm5TZs2pZcOTk5O9vb2JqKhQ4fiCnnQJbGxsb6+vnw+387OLjQ0VMvf9v70008CgYCIpk6dqs3jApRx+vRpsVjs7+9fmc60aNFi4sSJ6CEAsAvRXRc8evTIwMBAKBTeuHGD7Vq0ZNy4cY0bNz548CDbhQB3jR49ulOnTv+52YsXL9zd3Zs0aVKyjpdCodi4caOpqamLiwse4Qu6KjExMTAw0MjISCwW+/n53bx5UwsHXbduHcMwRDR79mwtHA7gTW7dumVubt6nT5/KLAyUnZ3N5/N3796NfgIAuxDda7zs7GxLS0sej3fs2DGl3hg3bhz9pUePHteuXWO7HOAcuVxeq1atpUuXvn2z7Ozsli1bOjk5lTxz6/Hjxz179mQYJiAgAM/vBZ2XnZ0dERHh5ORERB06dNDobfArVqxQ/b89f/58DR0CoDJevnzp4uLSunXrSi4MdPjwYSJKTU1FewGAXYjuNVtxcXH9+vWJaOvWrUp9UhLdiYjH4/n6+j569IjtooBDLly4QET3799/yzb5+fmdO3e2tbW9d++e6mR7ZGSkiYmJi4vLyZMntVgsQKVcvHixuLhYE82SyWTR0dGq56u7ublFRETk5eWp9xArV65U/Y+9cuVK9c4M8E7kcrm3t7ednV3l74SaNm2am5sb+gwArEN0r9k6d+5MRLNmzVLqmdLRXcXQ0DAkJCQrK4vt0oATpk2b5u7u/p8P8jUzM1NdtfH06dPu3bvzeLxJkybhAQ3ABevLGTx4cOvWra9cuaK5g16+fNnPz08gENjY2ISEhDx9+lQt00ZGRqr+o161apVaJgSospCQEIFAcObMmcrv4uXlVclb4gEANArRvQYbOXIkEX366adK/VM+uqtYWVmFh4djJXBo1KhRcHDwm/ogl8uHDRsmkUhiY2NVy8hbW1vXrVv37NmzaB1wNrqrbNy48dWrVxo9dFJSUkhIiLm5uUgk8vPzq+YqKiW5fc2aNeqrEaAqfvrpJ4ZhVq9eXfld8vPzRSKRvl3bCADchOheU82ZM0d1qrmeXjI1NaVKY/AnAAAgAElEQVQ3c3Nz+/nnn9n+EQFrEhMTiej8+fMVvqtQKMaNGycSiY4cOSKVSkNCQng8no+PT2ZmptYrBeCunJyciIgIZ2dn1W3w0dHRVbhcf926dar/ltetW6eZMgEq6969e6amph9//PE7tezUqVNElJSUhEYDAOsQ3WuklJQUCwuLWrVqheir5s2bvym383g8Pz+/58+fs/1TAtYsW7bMxsbmTTEjJCSEz+dHR0ffv3+/RYsWhoaGERERWq8RoGaQy+UHDhzo0aMHEdWvXz8iIqLyd5R8//33zF82b96s4TIB/kNOTk7Dhg2bN2/+rus4zJkzx8HBAf0FAC5AdK95ZDJZhw4dmjZtqs935L7pgvkePXr89ttvbFcHLOvcufNnn31W4VuLFi1iGCYqKmrr1q3GxsaNGzfGXxjguOfPn6vChkKhyMjIYKuMktvgzczMAgMDk5OT3779yZMn+Xw+wzC40hi44NNPPzU3N3/48OG77ti9e/cRI0ZopigAgHeD6F7zTJw40cTE5M6dO0o9Vj66t27d+vTp02zXBezLyMgQCAQ//fRT+bc2b97MMEx4ePjYsWOJyM/PT+3LaAOo0cGDB3v06DFnzpzRo0cfPHhQIpGwvlbWs2fPQkNDLS0thUKhr6/vxYsXK9zs+vXrIpGIYZgtW7ZovUaAsn788Uci+v7779+1NTKZzMjIaMOGDegpAHABonsN88MPPzAMs2fPHqV+Kx3dHR0dIyMj5XI520UBJ2zdulUsFr9+/brM+N69e/l8/pdfftmuXTsjI6Pdu3ezVCBApSxdutTDw0N1mr2oqMjFxYWI9u3bx4X2vX79OjIy0t3dvcLb4B88eGBgYMAwTBWSEoDapaSkWFpafvLJJ1XYNy4ujoj0/GQJAHAHontNcv/+fWNj46+++ortQrgS3S0sLMLDwwsKCtguBzhkyJAh/fr1KzN4/PhxsVg8ePBge3t7V1dXXCQPHLdp0yYjI6PSF6W7uroKhcKcnBwlJ2+Dr1evXnh4+KtXr1JTU42NjXF/O3CEXC7v2rVrvXr1srOzq7B7eHi4jY2NQqHQQGkAAO8M0b3GkMlkbdq0adeuXVFREdu1sG/ixIkBAQEvXrxguxDgFqlUamJiEhkZWXowLi7OyMjI09NTJBJ16dIFf22A45KSkoyNjcPCwkpGioqKJBJJ165dlZx0+fLlESNGCIVCc3Nz1fn2b7/9lu2iAP40f/58gUAQFxdXtXb07dvXx8cHrQQAjkB0rzFmzpxpZGR0//59tgvhBJlMxnYJwEU///wzwzBPnz4tGblx44aFhYWzszPDMMHBwVV4uhWAlg0fPlwikZQ+SXj69GkiWrJkCZd/Fk+fPm3atCkRzZ49m+1aAP50+fJlgUAwf/78qrVDLpebm5uvXLkS3QQAjkB0rxkSEhKEQuGmTZvYLgSA07744gtPT8+Slw8ePLC1tbWwsDAyMtq1axerpQFUSkZGhlAoHDZsWOnBgQMHEtGtW7e43MQ1a9YQEX5PAUcUFRU1b97c09Ozyt/YXrt2jYiuXLmi7tIAAKoI0b0GyM3NbdCgwcCBA9kuBIDTFAqFg4PDggULVC9TUlIcHBwkEomlpeWFCxfYrg6gUvbt20dES5cuLRk5ePAgETk5OXG5g7GxsSKRaPLkyWwXAvC3RYsWCQSCa9euVbkjq1atMjU1xbVaAMAdiO41gL+/v52dXVpaGtuFAHDa5cuXiejmzZtKpfLFixd169YVCoUuLi4PHjxguzSAylq9ejURfffdd6qXv//+u6+vLxEFBAQoFApu/mV+/PixjY1Np06dcCsTcERSUpKRkdHMmTOrM8mQIUP69OmjvqIAAKoL0Z3rTpw4wTDMwYMH2S4EgOtmz57t4uKiVCqzs7MbNGjA4/FatGiBRemgZomOjiairl27/vHHHwcOHBgzZszGjRuJKCoqatGiRRx8SFVBQUGLFi3q1q2bnp7Odi0Af1IoFD169HBzc6vOA2gUCoWdnd2iRYvQUwDgDkR3TpNKpQ0bNvz444/ZLgSgBmjevPmUKVPy8/MbNWrEMEyPHj3y8/PZLgrg3RQUFDRr1oyIhELhlClTZDLZhg0biKhBgwZVXiVboyZMmGBgYFCdy5IB1CsqKophmFOnTlVnkrt37xIRbrYCAE5BdOe0GTNmmJmZPXv2jO1CuC41NTUlJYXtKoBNT548YRjm2LFjHh4eRPTRRx/hBkWooQoKCi5dulRywUhRUdHly5e5+T3UwYMHGYZZs2YN24UA/C09Pd3S0nLcuHHV7EhkZKShoWFhYSE6CwDcgejOXffu3ROLxRs3bmS7EC5a/2+rV6+2srL6/vvvFQoF26UBO1avXm1ubt66dWsiGjFiBH4MAJqWkpJiZWXVt29f/McL3DFhwgRra+vMzMxqzjNy5MiuXbuqqSgAAPVAdOcohULRsWNHT09PuVzOdi01ILqXSEpKYrs0YEfPnj1tbW2JaOjQofgZAGhaUVFRhw4dHBwcXr58iW4DR9y5c0cgEKxbt676Uzk5OYWGhqqjKAAAtUF056iNGzeKRCKOP8UXgCOys7MZhlFdJ892LQB6YebMmQKBIDY2lu1CAP7xwQcfNG7cuKioqJpNSU5OJqKTJ0+iuQDAKYjuXJSVlWVjYzN9+nS2CwGoGby9vYloyJAhbBcCoBcuXrzI5/Pnz5/PdiEA/zh48CARHT16tPpN2bZtm1AozM3NRX8BgFMQ3bkoODjY1tY2Ozub7UK4TiqV/vHHH6o/Z2RksF0OsGPhwoUMw+A6eQDtkEqlTZo0adGiBZ7iDtwhk8kaNmzYv39/tcw2duzY9u3bq2UqAAA1QnTnnEePHhkYGGB1urcrKCj46quv/Pz8Zs6cGRUV1aBBgw8//FBLPyHgksjISIZhIiIi2C4EQF/MmDFDJBL99ttvbBcC8I81a9YIhcJ79+6ppSkNGzYMCQlBfwGAaxDdOWfYsGGNGjWq/p1aOqygoKBXr14LFy5Uvfz888+JCE8n0kP79u3j8/lYSQhAa65fvy4UCufOnYueA3fk5+fb29uPHz9eLbOlpaUxDHPo0CG1zAYAoEaI7twSHx/PMIxa7tTSYZ999pm3t3fJyylTphDR3bt3WS0KtO3EiRNisVhdn9UA4D8VFRW1bNmyWbNmeNg1cMrKlSvFYnFKSopaZtuzZw+Px3v16pVaZgMAUCNEd27p2LFjr1692K6C006fPs3j8a5fv14y4uvrW7t2bVaLAm27dOmSsbHxxx9/jKcnAmjN/PnzBQLB5cuX0XPgjoKCgtq1a0+cOFFdEwYGBjZv3lxdswEAqBGiO4ccO3aMYZjSoRTK69atW+fOnUteyuVyOzs7Pz8/9Ep/3L5928LCom/fvlglC0BrHj16ZGhoGBQUhJ4DpyxfvlyNp9yVSmXz5s0DAwPVNRsAgBohunNIp06dfHx82K6C0548ecIwTOnb2n/66Sci2rJlC6t1gfakp6fXq1fPy8srPz8ffQfQGh8fn1q1auHRJ8DBU+6TJk1S14RZWVl8Pn/Pnj3qmhAAQI0Q3bni1KlTRPTrr7+yXQin7dq1i4jOnj2rellYWOju7k5ET58+Zbs00AaZTNalSxdnZ+eShwICgNZ+Q23fvh3dBk5Zvny5gYGBGj8DqB4O/+zZM3VNCACgRojuXNGlS5cBAwawXQXXLV68mIhKHko0b968hg0burm5KZXKxMREtqsDjRs7dqyJicmNGzfQawCtKSoq8vDwaN++vUKhQNuBO2QymaOj44QJE9Q4Z3BwsLu7uxonBABQI0R3Trhw4QIRJSQksF0I123atImIvv766+fPn4eEhJw6dcrExGT48OG7d+8uORUPuio8PJzH48XExLBdCIB+iYiI4PF48fHxbBcC8C87d+5kGEZdz3JXadeu3dixY9FoAOAmRHdO6NWrV+mnncGbZGZmOjg4EFHt2rVPnjxZXFwskUjMzMxwGafOO3z4MJ/PX758OduFAOiXly9fWlhY+Pv7s10IQFmenp7qvVwxLy9PJBJt27YNvQYAbkJ0Z9+NGzeI6Pz582wXUjNkZWXFx8cXFBSoXiYmJj5//pztokCz7t27Z2xsjPAAoH3BwcFGRkZYXQK4ebniL7/8osY5T548SUSPHz9W45wAAGqE6M6+MWPGtGrViu0qADiqoKCgRYsWrVu3lkqlbNcCoF+eP38ukUhmzJjBdiEAZfn6+np4eKh3/YXQ0FBHR0f0GgA4C9GdZenp6YaGhrjeG+BNxo4da25u/vDhQ7QIQMsCAwPNzMwyMjLQeeCUx48fCwSCzZs3q3farl27+vn5qXdOAAA1QnRnWVhYmK2tLU4nAlRo165dDMPs3bsX/QHQstTUVENDw7lz56LzwDUzZsyws7NT72enwsJCiUSyceNGNc4JAKBeiO5sKioqcnR0DA0NZbUKAI568OCBqanp5MmT2S4EQB8FBARYWVllZ2ezXQjAv8jlckdHx6CgIPX25fz580Sk3vXqAQDUC9GdTbt37xaJRFhlDaC8/Pz8Zs2atWnTprCwEP0B0LKkpCShULh48WJ0Hrjm6NGjRPTbb7+pd9qFCxfa2Nio9+Z5AAD1QnRnU7du3T7++GNWSwDgqC+//NLMzCwpKYntQgD00aRJk6ysrHJzc9kuBKCsYcOGtW3bVu196d2795AhQ9BuAOAyRHfWPH36lM/nnzp1ir0SADgqLi6Oz+erfQkiAKiMjIwMY2PjWbNmoV3ANVlZWYaGhuvWrVPvtMXFxebm5qtWrVLvtAAA6oXozpqwsLA6deoUFxezVwIAF+Xl5TVo0KBv375sFwKgpxYsWCAWi3EzF3DQ+vXrDQwMMjMz1TvtlStXiOjatWvqnRYAQL0Q3Vnj7u6Oh+UClDd58mQzM7OUlBQ0B0D7pFKpvb392LFj0XzgIE9Pz48++kjt065cudLMzAxnUwCA4xDd2XHp0iUiunv3LkvHB+CoCxcu8Pn8rVu3sl0IgJ6KiopiGOb27dtsFwJQ1uPHjxmGOXTokNpb4+Pj069fP3QcADgO0Z0dEyZM8PT0ZOngAByVl5dXv359fH4CYItCoWjSpAluVwFuWrlypYmJSUFBgXqnVSgUtra2eJ4CAHAfojsLZDKZlZXV2rVr2Tg4AHfNnDnT3Nw8NTWV7UIA9NTZs2eJ6MSJE2wXAlCBzp07Dx8+XO2tuX37NhHFxcWh6QDAcYjuLDh58iSfz09LS2Pj4AAc9fDhQwMDg4iICLYLAdBfn3zyiYuLi1wuZ7sQgLLS09MFAkF0dLTaW7NhwwaJRFJYWIimAwDHIbqzYOLEiR07dmTjyADc1b9//8aNG8tkMrYLAdBT2dnZEolk3rx5bBcCUIGoqCixWJyTk6P27owYMaJ79+5oOgBwH6I7C1xcXJYuXcrGkQE46vjx40R07NgxtgsB0F8bNmzg8XhPnjxhuxCACvTt21dDK6E4OTnNmTMHTQcA7kN01zbVs0Pv37+v9SMDcFRhYWHDhg19fX3ZLgRAr7Vt29bb25vtKgAqkJuba2BgEBUVpfbuJCUlEdEvv/yCvgMA9yG6a9vs2bObNGmi9cMCcFd4eLhEIsG5PgAW3bx5k4j27NmDnwJw0JEjR4hIE4uYbtmyRSQS5eXlqX1mAAC1Q3TXtvfee2/GjBlaPywAR2VkZJiZmc2dO5ftQgD0WnBwsJWVFVbqAm4KCgpyd3fXxMxjxozx8vLSxMwAAGqH6K5VqampeAAJQGnTpk2ztrbWxMpDAFB5rq6u/v7+6BhwU+vWrcePH6+JmRs0aDBt2jRNzAwAoHaI7lq1Y8cOExOToqIi7R4WgKNevHhhYmKyYsUKtgsB0GtXr14loiNHjrBdCEAFXr16xefzNXE3x/Pnz4no8OHD6DsA1AiI7lo1duzYPn36aPeYANw1ZcoUe3v7/Px8tgsB0Gv/93//Z25ujqvlgZv279/PMMyLFy/UPvPu3bv5fP6rV6/UPjMAgCYgumtV/fr1Fy9erN1jAnBUamqqoaHh+vXr2S4EQN81atTok08+YbsKgIpNnjy5WbNmmujOxIkTW7Zsib4DQE2B6K49qhvdExIStHhMAO4aN26cs7MzTvQBsOv27dtEFBMTgx8EcNN77703efJkTczcrFmzKVOmaGJmAABNQHTXnu3bt+NGdwCVlJQUoVC4efNmNASAXfPnzzc2NsZ9K8BNeXl5AoFg165dap85MzOTx+Pt3btX7TMDAGgIorv2+Pv740Z3AJWQkJA6derIZDI0BIBdnTp1GjhwIH4KwE1xcXFE9Pvvv6t95piYGIZh0tLS1D4zAICGILprj4eHR1hYmBYPCMBReXl5VlZWWPcBgHW5ubkikWj16tVsFwJQsTVr1piZmSkUCrU36Ouvv27UqBH6DgA1CKK7luTn5wsEgqNHj2rrgADctXbtWolE8vLlS7YLAdB3hw8fJqI7d+6wXQhAxT799NNu3bppojtt27YdN24c+g4ANQiiu5ZcvHiRiDTxaBOAmkWhULi7u0+YMIHtQgBA+eWXX9rb22vilCaAWnh4eAQFBam9mbm5uUKhcMeOHdWcRy6X//LLL2oqCgDgPyC6a8k333zj6OioraMBcNeBAwcYhrl79y7bhQDAn2t3jxw5Eo0AbiooKBAKhZpYo+748eNE9OTJk3fdcWU5DRs29Pf3z8nJUXuRAABlILprib+/P9YBAlAqld27d+/fvz9aAcC69PR0Ho+HBz0AZ8XHxxPR/fv31T7zrFmz6tatW4UdV75BTEwMrl4BAE1DdNeSli1bzpkzR1tHA+CopKQkhmGw6AMAF/z4449VO/EIoB3bt28XiUTFxcVqn/n9998fNWqU2qcFANAoRHdtkMlkYrE4JiZGK0cD4K45c+bUrl1bE5/DAOBdBQcH16pVC30DzgoNDW3YsKHap5VKpQYGBlFRUWqfGQBAoxDdteH333/X0FNJAWoQhULh6uoaEhLCdiEA8Kdu3boNGDAAvQDOGjFiRN++fdU+bWxsbHWuwy8qKtqyZcvkyZPPnj177969hQsX4gMeAGgHors2HDlyhM/nFxYWauVoABx17tw5Irp58ybbhQDAn1+lmZubz5s3D70AzvL09Jw8ebLapw0LC6vy9SbJycmtW7eOiorKzs4OCgoaOHCgQCDAGnUAoB2I7tqwdu3aevXqaeVQANw1ZsyYNm3asF0FAPzp3r17RPTzzz+jHcBZVlZWq1evVvu03t7eQ4cOrcKOT58+dXV13bZtW+lV9Ly8vNRdIABAxRDdtWHq1Km9evXSyqEAOCo/P9/c3HzNmjVsFwIAf9qxYwcRpaWloR3ATa9evdLEt0vFxcVmZmZV+2X0wQcflL7H5MKFC0Q0a9YstRYIAPBGiO7aMGDAgC+++EIrhwLgqD179giFwvT0dLYLAYA/TZkyxcXFBb0Azvr111+J6MGDB5qY9saNG++6465du8rc87VlyxYiOnv2rHorBAB4E0R3bWjSpMmyZcu0cigAjvLz8+vevTvbVQDA33r06DFw4EC0AzgrJiaGiPLy8qo5j7+/f3Bw8KlTp1RLDi1fvtzCwkIul7/rPM2aNStzz9dHH31kZGSElYwAQGsQ3bVBIpHs27dPK4cC4KLi4mJra+uIiAi2CwGAvzk5OQUFBaEdwFmbNm0yNjau/jzjx4+nv0gkkh49ejRp0qRLly7vOsmdO3eIaOHChSUjycnJQqHQ29u7+hUCAFQSorvGZWdnE1F8fLzmDwXA6bXl8fgcAI6QSqU8Hm/jxo1sFwLwRgsXLqxbt271GxQVFUXl1KtXLyAgIDo6Ojs7uzKTfPfdd0S0d+/ekpHBgwcT0dKlS/EjBACtQXTXuMTERCJKSkrS/KEAOCooKKhJkyZsVwEAf7t16xYRnT59Gh0Bzpo6daqnp2f157l27Rq9mVgsXrt27X9OsnjxYiI6evSo6mVUVJS3tzcRXb58+fr160VFRdWvEwDgPyG6a1xcXBwRvX79WvOHAuAod3f3adOmsV0FAPztp59+IqKnT5+iI8BZI0aM6N+/f/XnkclkBgYGb4ruzZs3r8zt9Nu3byeiDz/88OHDh2FhYevXrx88eDCPx3v48CFWmAcArUF017iYmBgDAwPNHweA0xeexMbGsl0IAPxtyZIlEolEoVCgI8BZPXv2HD16tFqmat26dYW53c7OLjk5uTIz5Obm1q9fn4hMTU2//fZbpVI5cOBAIho6dKhUKlVLkQAA/wnRXeOioqIcHR01fxwAjtqwYYO5uXlxcTHbhQDA3wICApo1a4Z2AJe1aNEiJCRELVMFBASUz+1CofDMmTOVn+T169fnz5/PyspSvXz+/PnVq1fVUh4AQCUhumvcokWLWrVqpfnjAHDUyJEj+/Tpw3YVAPCPPn36qOVSZADNcXV1Lb2ie3Vs2LChfHTfsGGDWiYHANAaRHeN+/rrr3v16qX54wBwVN26dcPCwtiuAgD+0apVqzFjxqAjwGUODg7Lly9Xy1QJCQllcvsXX3yhlpkBALQJ0V3jxo8fP2jQIM0fB4CLUlNTiejs2bNsFwIA/3B0dJw+fTo6AlxmY2NTmbXfK0MqlQqFwpLc3qFDh8LCQrXMDACgTYjuGjdmzJhhw4Zp/jgAXLRr1y6RSFSZ9XsBQGsMDAxWrFiBhgOXmZqabtq0SV2zNW/eXJXbnZyc0tLS1DUtAIA2Ibpr3MiRI0eNGqX54wBw0aRJk7y8vNiuAgD+kZWVRUQ7duxAU4DLxGLxtm3b1DXb6NGjicjQ0PDXX39V15wAAFqG6K5xvr6+AQEBmj8OABe1bNkyODiY7SoA4B8PHjwgohMnTqApwFkKhYJhmN27d6trwrVr1zIMs3PnTnVNCACgfYjuGjdgwIBJkyZp/jgAnFNUVCQWi9X42QsAqu/ChQtEdP36dTQTOEsqlRJRTEyMuiaMi4ubNm2aumYDAGAForvGffDBB1999ZXmjwPAOffu3SOiW7dusV0IAPzj2LFjRPTw4UM0BTirqKioQYMGavyCSSaTFRcXq2s2AABWILprXI8ePWbOnKn54wBwzr59+wQCgVQqZbsQAPjHgQMHiCg1NRVNAQAAqEEQ3TUuPj7+8ePHmj8OAOfMnz+/UaNGbFcBAP8SHR1NRC9fvkRfAAAAahBEdwDQlI8//njIkCHoLwCnbN++nYhev37NdiEAAADwDhDdAUBT3nvvvdmzZ6O/AJwSFRVFREVFRWwXAgAAAO8A0R0ANEIulxsYGPzwww/oLwCnfPPNNzwej+0qAAAA4N0gugOARjx//pyILl26hP4CcMrKlSslEgnbVQAAAMC7QXQHAI24evUqET158gT9BeCUpKSkLVu2sF0FAAAAvBtEdwDQiEOHDjEMU1hYiP4CAAAAAFQTojsAaMSmTZusra3RXAAAAACA6kN0BwCNmDt3roeHB5oLAAAAAFB9iO4AoBGff/75Bx98gOYCAAAAAFQfojsAaMSgQYM++eQTNBcAAAAAoPoQ3QFAI3r06DFp0iQ0FwAAAACg+hDdAUAjOnbsGBQUhOYCAAAAAFQfojsAaESrVq1mz56N5gIAgG579uzZN998o1Qqb926dbqUs2fPxsfHP378WC6Xl97+xIkTFy5cYK9eAKipEN0BQCOaNGmycOFCNBcAAHTYb7/95u/vL5VKlUplWlrazp07iUggEAwdOnTatGmBgYGtW7c2NTX18/N7+vRpyV5Lly6NjIxktXAAqHkQ3QFAI1xdXVesWIHmAgCArvrjjz9atGiRlZVVetDe3t7Kyqr0yKFDh8zMzMzNzRMSEkoGvb29jx49qsViAaDGQ3QHAI2oXbv2unXr0FwAANBVvr6+ixYtKjPo6upaJrorlcpffvmFx+M5Ozvn5OSoRm7fvm1jY1Mm9gMAvAWiOwBohLW19ebNm9FcAADQSVeuXCGixMTEykR31TNTiWjt2rUlI++9915YWJjmKwUAHYHoDgAa8e233z579gzNBdBtCoVCdZdvZRQUFGi4HADtCQgIcHBwKD/+pui+Y8cOIurQoUPJyOeff16nTh0NlwkAugPRXZdV/uNU5bcEAABQuXLlypw5c8pc8Xvjxo3AwMB+/fr5+PgMHjx4/vz5iYmJ8+fPz8zMTEhImDNnzuvXr9FA0AF16tTp3r175aP7tWvXiKhWrVolI8uXLyeiGzduaLhSANARiO66SS6Xr1ix4vz582XGFQrFlClTym9/7ty5iIgIhUKhrQIBAKBm279//xdffFF6RCqVfvHFF1ZWVrt37y4uLlYNxsXFtW7dmoh+//13pVL58OHDbt26vXjxgqWqAdQjLS2NiD755JPKR/fff/+diEQiUclIdHQ0EW3atAk/FQCoDER3HaRQKEaPHn316tXyb508eZJhGNXnpzJOnz49ZswYrRQIAAA12+XLl11dXctcAD9o0CChUHj9+vUyG79+/bphw4bx8fGqlwcPHvTy8sLVXlCj3bhxg4jGjx9f+eiekJBARLVr1y4ZOXz4MBEtWLBAw8UCgI5AdNdBS5YsCQkJqfCtIUOGEFFwcHCF7/r7+5dePQUAAKC84uLiJk2aLFmypPTgt99+S0RlzsOX2LdvX+nnYDVv3rz8utwANYjq6vd3iu4bNmwgog8//LBk5OTJk0Q0ffp0DRcLADoC0V3XPHv2zNDQ8MmTJ+Xfev78eZcuXRo1amRrayuTycpvkJSUZGJikpGRoZVKAQCgRvr++++J6MGDB6UHPTw8iOjUqVMV7lJcXJyUlFTycvbs2ebm5tnZ2ZovFkAjnj59SkSffvpp5aO7l5cXER04cKBk5MCBA0RU5lswAIA3QXTXNdOnT3d3d6/wrQULFmzfvn3FihVEtGfPngq3qVev3vz58zVcIwAA1GC9evUyNTUtH2OI6NWrV5WZIXgoARwAAA5SSURBVCYmhoh++OEHjdUIoFnFxcUmJia9e/euZHRXnXLv169f6cFt27aVCfMAAG+B6K5rXF1dP/roo/Ljcrm8VatWUqn05cuXYrG4Z8+eFe7+4YcftmzZUvNlAgBAjVRcXCyRSMr8pjh//jwRCQSCSk5y69YtIho1apRmagTQhv79+zds2LD8uNVfSl5KpdKwsDAej9e3b9/c3NzSW86aNUsgEOBqRwCoJER3nfLixYs33TR16NChoKAg1Z+HDx/OMEzpaxdLTJ06lWGYMk/6AQAAUElJSSGibt26lW7IuXPniIjH45UsLP92z549I6L3338fXYWaa+fOnTweLycnp2Tk7Nmz48aNIyKGYRo2bOjt7d23b99mzZoNGzbs8OHD5Wfo379/mfPwAABvgeiuU+Lj44mowrV/Bg4cmJiYqPrzL7/8QkQzZswov9m8efOI6Pbt25ovFgAAap779+8Tkbe3d/kHZRHR48ePKzNJVlYWEXl4eGisTACNKy4udnNz++mnn6q2e2FhoYmJSVxcnLrrAgCdheiuU86cOUNEy5cvLzOenJzs4OAwsBQzMzN7e/uioqIyWy5btoyIyj8QHgAAQKlUZmRkEFHnzp3LdKNjx45EtH79+jd1qbCwsOTPf/zxBxF16NABLYUa7fTp015eXgqFogr7btiwwd/fXwNFAYDOQnTXKTdv3iSi8uvMzZo1q8y6dAsWLCCi8l8Vh4WFEdGNGzc0XywAANRIFhYW5ddDPXfuHMMwzs7Or1+/Lr/LpUuXjh07VvLy7t27RITcAjpg5cqVa9asede9kpOTBw0alJ+fr5miAEA3IbrrlOzsbB6PN3Xq1NKDMpmsZcuWZU6wp6am8vn8Mlc8KpXK4OBgHo9XZhkVAACAEh9//LFIJCp/W/v69esZhmnfvn2Zy+aPHTu2bNmy0iNYYR50ya5du97pcQm3bt2aP39+Xl6eJosCAB2E6K5rPD09Bw0aVHrk22+/HTduXPktO3TowDDM9evXSw/6+PhghXkAAHiL48ePE9HVq1fLv3XmzJn27dsLBIIePXpMmDDh888/HzFixPfff19ms5kzZ1pbW+OUI+iMSj4WUSUzM1OTtQCAzkJ01zUrVqyoW7duycvIyEhzc3M3N7dt27aV3uy7776zsbEhonr16u3atatk3NXVdenSpdotGYAFUqlUjZsB6Jvu3buHhoa+6d20tLSLFy+ePXu2wkeZKJXKpk2bVuEaYwAAAH2G6K5rcnNzra2t7927V4V9ExMTraysSj/mBED3yOXyFStWnD9//syZM7NmzZrwP5MmTZo2bdrGjRvT0tJKNj537lxERETVliAC0GFPnjxp0qTJy5cvq7BvTExMz5495XK5BuoCAADQWYjuOmjv3r0jRoyowo6BgYHbt2/XQEUAXKFQKEaPHl1yoe+DBw+IyMvL6/79+2lpaRcuXBgwYIBIJNq0aVPJLqdPnx4zZgx7JQNw1JUrV0aOHFlQUPBOez169Gjo0KH4jhgAAOBdIbrrpnnz5sXExLzTLmfPnp05c6bGKgLghCVLloSEhJS8VCgUDMP07du39EiXLl0EAkHpS1f8/f3Xrl2r9WIBuC41NXX58uWVP/eekJCwdu1amUym4boAAAB0EKK7zvrxxx9jY2MrufH58+d37typ4YoAWPbs2TNDQ8MnT56UHuTz+aWju1KpXLVqFRGtW7euZCQpKcnExCQjI0OLxQIAAAAA/APRHQD0xfTp08s/jLp8dJ8+fToR7d69u/RgvXr15s+fr5UyAQAAAADKQnQHAH3h6ur60UcfvT26nz9/3szMrEWLFoWFhaU3+/DDD/HcRAAAAABgC6I7AOiFFy9eENH06dPLjPP5fBMTkz59+vj4+DRo0ICIWrZsmZqaWmazqVOnMgyTlZWlxZIBAAAAAP6G6A4AeiE+Pp6IFi1a9Jaz7oWFhbt377aysrKzsytZhV5l3rx5RHT79m0tlgwAAAAA8DdEdwDQC2fOnCGi5cuX/+e97tHR0UTUvn370oPLli0jovPnz2ulWAAAAACAf0F0BwC9cPPmTSIqv9Rc+eienZ1NRGKxuPRgWFgYEd24cUMrxQIAAAAA/AuiOwDohezsbB6PN3Xq1P+M7levXiWipk2blh4MDg7m8Xi5ublaKRYAAAAA4F8Q3QFAX3h6eg4aNKj0SG5uLhGVju7Pnj1r164dj8eLiYkpvaWPjw9WmAcAAAAAtiC6A4C+WLFiRd26dUtenjlzZtSoUURkaGjYsWNHHx+frl27uri49OzZ8+TJk2X2dXV1Xbp0qdZLBgAAAAD4E6I7AOiL3Nxca2vre/fuveuOiYmJVlZWOTk5mqkLAAAAAOA/ILoDgB7Zu3fviBEj3nWvwMDA7du3a6YiAAAAAID/hugOAPpl3rx5Ze5jf7uzZ8/OnDlTkxUBAAAAAPwHRHcA0Ds//vhjbGxsZbY8f/78zp07NV8RAAAAAMDbILoDAAAAAAAAcBqiOwAAAAAAAACnIboDAAAAAAAAcBqiOwAAAAAAAACnIboDAAAAAAAAcBqiOwAAAAAAAACnIboDAAAAAAAAcBqiOwAAAAAAAACnIbqXlZOTw8pPAgAAAAAAAKBCehfdw8PDly1blpub+6YNfH19vby8tmzZ8pZt3uTAgQMjR448ePBgYWHhO+14//59uVxeZvDXX38tP1jG8ePH8V0DAAAAAACAbtO76D579mxjY2Nzc/MlS5ZUGIz79+9vbGxMRNOmTVONyGSy/Pz8ykweFhZGRObm5u7u7vHx8ZWv6ssvv/Tw8Dh06NDl/zl+/LihoWH37t3v3r378A127NghFovff/99mUxW+WMBAAAAAABAzaJ30X3x4sX169dnGGbBggUVbtCrVy+JROLk5KR6KZPJfHx8OnbsmJeXV5n5g4KCGIZxcXGxs7OrMFErFIryg9OnTxeLxfRvEolEKBQKBILSg0Kh0NDQsOQl7y/Dhw+vcFoAAAAAAADQAZyI7lW4NL3K1q5d6+zsbGBgoFQqDx8+3LJly/f+zdjYWCgUSiQS1cu6deva2dnx+fw2bdqUSe8jR45cuHBh+UM0btyYiIyNjbOyssq/O3z48J07d5YZnDt3rrGxsYGBQfj/jBw50srKiogeP37s6enZqVOnUaNG9ezZ09bWVigU+vn5TSxl1qxZiYmJ6m4VAAAAAAAAcAL70f3Bgwd16tT59ttvtXO4b775piS6K5XKpUuXEpGBgYG1tXWtv/B4PCIyMjKq9W916tT5+uuvS05uZ2RkEFH9+vUDyvH29iYiS0vL8m/17dtXIpHY2NiUSe/h4eEmJiampqYlI3v27LG1tWUYRi6X79+//9dff1UlfKFQ6OnpqdomOjr65s2b2ukbAAAAAAAA6E5037p1a8C7MDMzMzY2trOz0056Lx3d09PTVSF8yZIlJWfUVTe6z5s3T3Vx+6pVqyq8KGDZsmUMw1CVmJub8/n80ul95cqVJiYmQqHQ93/at29va2vL5/OlUmlYWBjDMAMHDnRzcyOi3r17BwQEjB071szMzNTUNDIyUgt9AwAAAAAAAN2J7q9fv3Z0dKx8jmUYRiAQ8Pl8Ho+nhfReEt0fPHhgb28/depUpVJpbW1tY2MTFBQUHBysurfc29s7JCRk6NChZmZmTk5OZU5uZ2RkmJqaWltbDxw4UDUik8nc3NxMTEzOnj2rGklOTh49evTJkydLFsOTy+VmZmYikcjW1nbBggU7d+4sKipSvbVq1SpTU1MiEv+PQCAwNDQUCAS5ublLlixRvVuGSCTi8Xg9e/aUSqWa7hsAAAAAAADo1AXz2dnZBw8eTE5OznxHFd4cXk0KhSIwMNDMzMzkLwYGBrVq1VKt92ZmZsbj8b7++usy3zWUPp0ukUgYhlm2bFnpObt3784wjLOz8/jx41UjY8aM4fP5derUkUgkp0+fViqVO3bsEAqFRGRvbx8UFJSUlLR7924iatu27atXr8oUuWTJEmNj4/IXzAuFwqysrIiICEtLS6FQ+OzZs8DAwKSkpMzMzPj4eAsLC4lEcvfuXbU3DQAAAAAAALiD/XvdtUAul48YMcLY2Lh+/fpOTk5WVlY8Hq/1/3Tr1s3CwoKIPvzwwzJfJUyfPr127dpmZmZlJrSwsFCdPL93755SqZw1a5ZYLObz+UZGRsHBwffv31dtlpSU1KpVKyKy+IvqBH5mZmb5ChcsWGD0l5KHwy1evNjW1lYsFqenp3/zzTeq6P769WuGYczMzObOnXvp0iVEdwAAAAAAAH2gF9H9LcvUqXh4eLzpen5LS8vy0T0/Pz8xMVEulysUimnTpgmFQgMDg7p16965c6f8Ebds2SISiYioYcOGVlZWc+fOLb/NrFmzJBJJmUNLJBKRSPT8+fONGzeqont2drbqTL6JicmOHTsQ3QEAAAAAAPQBovs/0b1WrVq9/q1+/foVRneVnJycHj16EBGfzx85cuRbHnH3xx9/2Nvbq5ayr1OnzpUrV8psEBISwuPxTE1NSz8cTjXzsWPHvvvuO1V0z8rKEovFDMNs3Ljx7t27iO4AAAAAAAD6ANH9n+j+/vvvn/i3UaNGVXjBvFKpPHbsmI2Njepi+MOHD7+9y8XFxUuWLGnUqBERubq67tu3TzX+5MmTyL/06tWrY8eOERERqpeRkZGTJk3q3r27hYWFubn5lClTVNE9MzPTwMCAx+Pt3LmzJLpXeKofAAAAAAAAdAai+39cMG9sbFwmuhcXFw8dOlT1brt27fbv33/iv/Tq1cvExKRnz54DBw50d3d/8eKFaiqFQvHFF1+Uv05e9Wx5IuLxeKo186ysrIRCYUZGhqGhoVAo3L9/vyq6GxkZXbt2jZW/OgAAAAAAAKDUiv8H4bO+aO3MkZMAAAAASUVORK5CYII=\" style=\"max-width:100%;border-radius:8px;\" />",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "id": "phy_8",
    "type": "single",
    "subject": "大学物理",
    "category": "第2章 质点动力学",
    "difficulty": 1,
    "question": "<img src=\"data:image/png;base64,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\" style=\"max-width:100%;border-radius:8px;\" />",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "id": "phy_9",
    "type": "single",
    "subject": "大学物理",
    "category": "第2章 质点动力学",
    "difficulty": 1,
    "question": "<p>2、 如图所示，两个质量分别为mA 和mB  的物体 A 和B ，一起在水平面上沿x 轴正向作匀减速直线运动，</p>\n<p><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAADCAYAAACwAX77AAAAHElEQVQImWNkYGCwY0AFXgwMDPcYGRgYrBhIAQBYhgGjRicYxAAAAABJRU5ErkJggg==\" />加速度大小为a ， A 和B 间的最大静摩擦系数为 μ ,则 A 作用于B 的静摩擦力F 的大小和方向分别为(    )</p>\n<p>B A</p>\n<p>一、2题图</p>\n<p>v</p>\n<p>x</p>\n<p>",
    "options": [
      "μmB g ，与 x 轴正向相反",
      "μmB g ，与 x 轴正向相同",
      "mBa ，与 x 轴正向相同",
      "mBa ，与 x 轴正向相反"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "id": "phy_10",
    "type": "single",
    "subject": "大学物理",
    "category": "第2章 质点动力学",
    "difficulty": 1,
    "question": "<img src=\"data:image/png;base64,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ZvTo0ePGjeN3ad++vZWVldzU91JBqUgkioyMnDlzZqNGjRo3btynTx9/f3+pBCIISkGrgtJhw4Z5eHgo2KCgoEBHR6d27doVOUWDBg3Kty+CUs2EoLS6K7XhlxSU5ufnC4VCZ2dn9bV6BKWaCUEpAGi+P//8UyAQGBoa3rx5U1XH7Nat2/fffy9VeO7cOTs7O39//z179sgNSouKin788cfhw4dLrpuYkZFhb28/cOBAJZeEYdHphQsX+vbtKxAILC0tJdcJR1AKWhWUhoaGGhsbKx6J16xZMwVTyJ4+fapgMZLs7GwTE5Pp06erorIAUHkNX25QGh0dTUSy/54lodUDAEBVGT16NBGNHj26HPuOGzfO3d398OHD7M62qKjI19e3U6dOHz58kNpyypQpCxcu5Dhu8uTJEyZM0NfXlwxKb926NWDAgJCQENlThIeHr1u3TrZ8+fLlJa0Ww/z9998tW7a8ePGi5FkwPw60JygtLi52dHRcv369gm2mTp1KREePHpX7bv/+/RVkf128eLGhoeGLFy9UUVkAqLyGLzcoXb16NREdP35cwY5o9QAAUFVevHhhaGjo7e1djn09PT1Zrt06dep06NDhiy++CAgIkE2hJBaLmzVrxk9RWbdunYmJyZdffhkQEHDu3LlTp07t2bNHsoOU47hPnz7l5uYmJSXdvXs3IiIiMjJS6piLFi2ytLTcXRZLlixBJlHQnqCU47h//vnH1tb22bNnJW1w+/ZtgUAwaNAg2beuXLmybNmyknZ88OCBgYHBhg0bVFdZAKikhi8blBYWFjZr1qxVq1YK0kig1QMAQNW6ceNGenp6OXYUi8UPHz48f/7833//raBD5dixY1LJAtPT09esWfP111/r6+uzsJaIDA0NjYyM9PT06P/y9vaWXV5+7ty5tra298qC5RS8du1aOa4UaiZND0o5jjty5Iizs/P79+9L2mDixIkCgSAiIkKyMD093dPT8+PHj3J3ycrKcnJyKnUtRADQzIYvFZSKxeJJkyZZWFgoWN4JrR4AALTe9OnTCwsL5b5VUFBw796948eP79q167ffflu5cuXy5csXL168aNGihQsXLlq0KCAgoKRjlnX9xdu3b3/33Xdv374t10VATVQNglKO48LCwtq3b1/SX3ZxcfGYMWOMjIyWL19+586dJ0+ebN++vV27do8ePZK7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\" style=\"max-width:100%;border-radius:8px;\" />",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "id": "phy_11",
    "type": "single",
    "subject": "大学物理",
    "category": "第2章 质点动力学",
    "difficulty": 1,
    "question": "4、 质量分别为m1 和m2 的两个小球，连接在劲度系数为 k 的轻弹簧两端，并置于光滑的水平面上，今以等值反向的水平力F1 、F2 分别同时作用于两个小球上，若把两个小球和弹簧看作一个系统，则系统在运动过程中( )",
    "options": [
      "动量守恒，机械能守恒",
      "动量不守恒，机械能守恒",
      "动量守恒，机械能不守恒",
      "动量不守恒，机械能不守恒"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "id": "phy_12",
    "type": "single",
    "subject": "大学物理",
    "category": "第2章 质点动力学",
    "difficulty": 1,
    "question": "<img src=\"data:image/png;base64,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\" style=\"max-width:100%;border-radius:8px;\" />",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "id": "phy_13",
    "type": "single",
    "subject": "大学物理",
    "category": "第2章 质点动力学",
    "difficulty": 1,
    "question": "<p>6 、关于质点系内各质点间相互作用的内力，以下说法正确的是(   )</p>\n<p>",
    "options": [
      "系统的内力做功总和不一定为零",
      "一对内力所做的功之和一定为零",
      "内力能改变系统的总势能",
      "内力能改变系统的总动量"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "id": "phy_14",
    "type": "single",
    "subject": "大学物理",
    "category": "第2章 质点动力学",
    "difficulty": 1,
    "question": "7、 一细线，上端固定在天花板上，下端系一质量为 m 的小球，小球在水平面内以角速度⑴做匀速率圆周运动，则小球旋转一周的过程中( )",
    "options": [
      "所受重力的冲量大小为mg2π",
      "小球在运动过程中动量守恒⑴",
      "所受重力的冲量大小为 0",
      "小球所受拉力的冲量大小为 0"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "id": "phy_15",
    "type": "single",
    "subject": "大学物理",
    "category": "第3章 刚体力学",
    "difficulty": 1,
    "question": "<p>1 、下列说法中正确的是(    )</p>\n<p>",
    "options": [
      "作用在定轴转动刚体上的力越大，刚体转动的角加速度越大",
      "作用在定轴转动刚体上的合力矩越大，刚体转动的角加速度越大",
      "作用在定轴转动刚体上的合力矩越大，刚体转动的角速度越大",
      "作用在定轴转动刚体上的合力矩为零，则刚体转动的角速度为零"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "id": "phy_16",
    "type": "single",
    "subject": "大学物理",
    "category": "第3章 刚体力学",
    "difficulty": 1,
    "question": "<p>2 、如图所示，一根匀质细杆可绕通过其一端O的水平轴在竖直平面内自由转动，杆长<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAYAAABwrHhvAAADY0lEQVRYhe3YW4hVVRgH8N8ZTc9MRuPDMF5KgiIkiUnoioVEEUZmFyyGSOgpfQg17IIaRE8VQhAVlGkW9GKFUEkXoujyUhAWXSwzCDKxtLwU3Wzm2MO3jzMd9z6zL6emB/+wXvb61vp/e33XtRgf9GDGOHGDJ7ADXeNBfi2O4DqojSG4Eie0fN+JO7GvBPkMfIItuLWdYC/eRCPRtjmGcK9yR1fDG/hS+ACYmCF8Kb7HzQlxE3/ivUSxoliF+bgIv7UTnIJNuLgESRbmCuXvyiO8AOtR7xB5D74QJm3nc0eFN4sQ2YibcHJFBR7HT5iZR3g+fjTidA3sxh04sQT5Nck+1+ddMBu34D7hsb8a8f4X0FeAfLoI1Q0F1qQq9DwOYxhPyucbzZDbodzJ/QN1rEuUOIDLc6xZlcifW5W8iV68Kk7hAe0T0Tki5O7uFHkTgyKBbMaEDJlubMdbcmbLrEyYhk+xX/xdFh5CP66QM1sWUWAoGZ8LU7RiEZZhMb4rsG9uLErIB1LmmiG3sQrBBFyIWSlzfXgZax1r2xpex1cqhtyAyHq7sHTUZnOxFQ9nENyuQyE3FS8K+zZwUNjyIyyR7i8D+AOry5K2Vqc65uFM/ILPhPenOV03PsReXKZcj1AJj4mwPOW/JoarRZFa3EZmsjjJ02QnrlKYJo79qYz5HqzBD8Isw6Io3agDbXgNr4nOeErK/CQ8KEJyfTJ2JYrsx8KqCqzEXzgvY36BKNmj+4YzsC1RYosKrV4z5NZkzHcJnzg1ZW6ZyBXvK9bUHEW3SMNvK2fHK3EIzwnnLIxHhQ3T/i4PBrEnUaQwFoqQu6EkeV30hauVCMd+EXKbSpJPTohfEhWzEGqiDcsKuXboE9e6d0UP0RCXk3lFNlkhQu78guQwB7fhWdHINpLxsciMY+JsEXJrS5C34nSRvIbFD60Ya0FdVMF3dO4FY7ZIxw08M3oijWCduMct0bkSu1NcVI5oyYStTcZVwnaD+LZD5IwUpIY2DWu/qGBPd5C4iS7xsvKzePo5BjW8gq9x0r+gwHRRB7bKuO4vFx56QQWSXnGrfkTcHycl32eJm/U2nJW2cA5+xz0VyImyu91IzB/AN8KsG2TUkZo48uW4X3Wv78clomsaEo78gXghOY7j+H/ib9d2xMGU6venAAAAAElFTkSuQmCC\" />m。今使杆从与竖直方向成 60。角由静止释放(g取10m/s2)，则杆的最大角速度为(    )</p>\n<p>一、2 题图</p>\n<p>",
    "options": [
      "3rad/s",
      "π rad/s",
      "<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAATCAYAAABGKffQAAAAvUlEQVQokZXSP0oDQRQH4G+jhYdItDCVLniBgNsJqb2FhUVOkIvkBJ5Am80BgiRg55/CILheQcFml0xkk32+7s37mPnNMJlYneLqMIjHuOgFcYEyAjN8oR/BOZ4hEqPA/D+4jETIUGEQwTlemqYrxlaELnypvlxTZ3jCYwuucJwurDHBO0bJ+jledx15jRWa/3KDWQrSzHf4wG3dFzred2jzDz5xsg/DFPd464JwVO/+8Hdw0IK/8YMlFungF8iGHzUniRqbAAAAAElFTkSuQmCC\" />0.3 rad/s",
      "<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAkCAYAAADckvn+AAAEgklEQVRYhd3YW4hWVRQH8N9cHC3Npiw1JZFu2t20sRDqIQpNipoKI3yoECMJG4JulBERpT4IBQVZUEgUWYgFZeT4YKJFFhZIKoOVpmZWZnnJ8jY9rPMxX9M53/XESH/4Hr691/6ftfZee1029eNNHDvOfvsLyjXkYOBm9MNJxcR9jG78jufqJRqSkH2KW+slOx4xWbjETxjVx7qkorHO9W34Rpzi9/Wrkz+a61zfhu04kIMuvXFewrujHpJ6TrABE3EYn9ejRAbm4oV6Seo5wZEYLk4wzcBhOBeHsEF1EfYETMG9KXPNGIPTsA1bRBzIHe3i9H7D6UXjZ2Ex/hR38xh+xXy0Vsh9c8J9Sq/xqViPown3EazAhTVZUAbPJh/bUjQ2Gp8lCuxO5v5KlDmKJSlKp2EROnuNTUFXMjcHbwmvOCbS1Bm1GFEKnWL33kn+N2IevsQNaErGx2KZMPAQOsrwNosTn1U0NgyvY1LRWCNmCCMP4a7azEhHo3DN5Xg4GRshXPOCFPmRWCt2u1NUPVm4NpEbUTR2Ma5OkW3FSrF5j6eR1RpkzsHJ4u4VAswgUZduSJHfIVxqvKh+BmFfBne7cPMfisbWZ8juw4/ivm+qXP3ymC5y1AEMrnDNTcKd1ggj09AgNuOhCjkHCS/6SMbdrvUE27ARA7G3wjXNwoCNwr3TcIVwzaUVco4Xhf5s7Mn6aC2YKKJkmjumoVGE8sN4V9yZNLQLd9xcAec4UQwsEdE1N/TDQRFBZ1e4ZohwzSXCrbLQhadKzLfgGrwkTqxbbNpiDK1Ql7IYlxB/jSsrXDNDKN9WQuaihHdcCZmBIgU9glXCuELCf1FsQN2YiV/wBwZUID8GX+CeMnJP4Nsq9GjC7dgpjNyOS6pYn4mX8QnWVSDbKtxnvvK7uw4LatCnQ1RLB6U03b27iSZRxJbCRPEcUK6D6C9Kqr14WlQbWRiNy1QePYvxvuhFm6RsYrGBY7Ear5QgO1HclRalDWwWFc5IcV/KdRLt2CU8o1rsEcn+gHhZyFSmS/hyN67PIJuUzHfh0gyZZjwq0kFWATxBtFoFrMLCLAvKYAS+Evd8eJrA2eL16UnhRt3YmkHWIXqw/dJzaIuoCT/G5cLA4t/5uF/cy0LlMVTkxclVmdWD6SInzyoltECUO1P0nOJtKXJvJMqvSZkbgGf09IFZvyN4rGjdTFHZ9Cuh3zS8Jjb4zGSsKdHxOzwvrk9FWJQostO/30278IH098Y5ejyg1G+nf+bDZWLjSmGh2Jju5BvbRDG+SeTYqvLfKD1N6t1F463J2ErhFnlgcPKtcm+q/UUFcx8eSPSaoI4nl3nCmN16GtdCn7ZVvHjlgTtE/hqYE1/FaBVddbcICsS96RJhOY8nf3gb7+XEVTU6hIF7hYssFQX2ipz4B4iG9c6c+KpGi3DHbhH6t4sAMzcn/htFsXxqTnw1YZowsBD6V+OWnLhflZ831IwG8UpW6Lt26clD9WIqrsuJqy5cJQz8WdR8/0s8KML58r5W5L/EWnzY10pUi78BxbpBHLCWg98AAAAASUVORK5CYII=\" /> rad/s"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "id": "phy_17",
    "type": "single",
    "subject": "大学物理",
    "category": "第3章 刚体力学",
    "difficulty": 1,
    "question": "<p>3 、关于刚体对轴的转动惯量，下列说法中正确的是(    )</p>\n<p>",
    "options": [
      "只取决于刚体的质量，与质量的空间分布和轴的位置无关",
      "取决于刚体的质量和质量的空间分布，与轴的位置无关",
      "取决于刚体的质量、质量的空间分布和轴的位置",
      "只取决于转轴的位置，与刚体的质量和质量的空间分布无关"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "id": "phy_18",
    "type": "single",
    "subject": "大学物理",
    "category": "第3章 刚体力学",
    "difficulty": 1,
    "question": "<p>4 、轮圈半径为 R，其质量 M 均匀分布在轮缘上，长为 R、质量为 m 的均质辐条固定在轮心和轮缘间，辐条共有 2N 根。今若将辐条数减少 N 根，但保持轮对通过轮心、垂直于轮平面轴的转动惯量保持不变，则轮圈质量应为（    ）(提示：轮圈可视为匀质细圆环，辐条视为匀质细直杆）</p>\n<p>",
    "options": [
      "m + M",
      "m + M",
      "m + M",
      "m + M 12 6 3 3 N N 2N N"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "id": "phy_19",
    "type": "single",
    "subject": "大学物理",
    "category": "第3章 刚体力学",
    "difficulty": 1,
    "question": "5、一匀质圆盘状飞轮质量为 20kg，半径为 30cm，当它以每分钟 60 转的速率旋转时，其动能为( )",
    "options": [
      "16.2π2 J",
      "8. 1π2 J",
      "8. 1J",
      "1.8π2 J"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "id": "phy_20",
    "type": "single",
    "subject": "大学物理",
    "category": "第3章 刚体力学",
    "difficulty": 1,
    "question": "6、力F = (3- -i+5j)kN ，其作用点的矢径为r = (4i _3j )m ，则该力对坐标原点的力矩大小为( )",
    "options": [
      "_3kN<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAR0lEQVQImY3MsQmAMBhE4c8UVgFn0KWcScguDuEg1papUgk2/iBWOXhwvIOjIwvGr8g4cOPEHMP6ymCDhPa7rFEGFFzYMcEDXFEK6hy+h9AAAAAASUVORK5CYII=\" />m          ",
      "29kN<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAR0lEQVQImY3MsQmAMBhE4c8UVgFn0KWcScguDuEg1papUgk2/iBWOXhwvIOjIwvGr8g4cOPEHMP6ymCDhPa7rFEGFFzYMcEDXFEK6hy+h9AAAAAASUVORK5CYII=\" />m           ",
      "19kN<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAASElEQVQImY3MsQmAMBhE4c9UQmoHsHUfh3KDLGLvMhZ26dKJjT+IVQ4eHO/g6MiM8SsyDtw4scSwvjIokNB+lzXKgA0XdkzwAGPRCw/RzhYQAAAAAElFTkSuQmCC\" />m           ",
      "3kN<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAGCAYAAAAPDoR2AAAASUlEQVQImY3MsQmAMBAF0BchnbiChUtlIFs3cQzXcAErOzuxyUFI5cEv/n9w/LwFuR9HHHhxYm6xVIisAQOe7tPdloQNF3ZMAR/RggrkDglinwAAAABJRU5ErkJggg==\" />m"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "id": "phy_21",
    "type": "single",
    "subject": "大学物理",
    "category": "第4章 机械振动",
    "difficulty": 1,
    "question": "<p>1 、有关弹簧振子的简谐振动，下面说法正确的是(     )</p>\n<p>",
    "options": [
      "周期与振幅无关",
      "周期与振幅有关，振幅越大，周期越大",
      "在平衡位置速度最小",
      "回复力越大，速度一定越大"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "id": "phy_22",
    "type": "single",
    "subject": "大学物理",
    "category": "第4章 机械振动",
    "difficulty": 1,
    "question": "2 、一质点沿x 轴做简谐振动，其振动图像如图，则该质点的简谐振动方程可表示为( )",
    "options": [
      "x = 0.06 cos <img src=\"data:image/png;base64,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\" />",
      "x = 0.06 cos <img src=\"data:image/png;base64,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\" />              0 .06  x/m</p>\n<p><img src=\"data:image/png;base64,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\" />",
      "x = 0.06 cos <img src=\"data:image/png;base64,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\" />",
      "x = 0.06 cos <img src=\"data:image/png;base64,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\" />          -0 .06o       一2、2题      t/s"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "id": "phy_23",
    "type": "single",
    "subject": "大学物理",
    "category": "第4章 机械振动",
    "difficulty": 1,
    "question": "<img src=\"data:image/png;base64,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\" style=\"max-width:100%;border-radius:8px;\" />",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "id": "phy_24",
    "type": "single",
    "subject": "大学物理",
    "category": "第4章 机械振动",
    "difficulty": 1,
    "question": "4 、一个质点作简谐振动，周期为 T，当质点由平衡位置向 x 轴负方向运动时，由平衡位置到二分之一最大位移这段路程所需要的最短时间为：( )",
    "options": [
      "T/4",
      "T/12",
      "T/6",
      "T/8"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "id": "phy_25",
    "type": "single",
    "subject": "大学物理",
    "category": "第4章 机械振动",
    "difficulty": 1,
    "question": "<p>5 、一物体作简谐振动，振动方程为 x = Acos<img src=\"data:image/png;base64,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\" />， 则该物体在 t = 0 时刻与t = T<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAARCAYAAAD+H91rAAAAeElEQVQYlXXMwQoBARhF4a+xGMWGDTbyPqZJygt4QFsLspDyMmpQFnY2pvTP7y7P6R66W+DYS8QWZcJdUEU4wx1lEcQKe7zj44BNhGM8MYDfVI0TXlGssYuZ4TczakH7WOKKJoo008cDkyhqnCMs/mXghnkmphn8AAn/EudLJ6c4AAAAAElFTkSuQmCC\" />8为(    )</p>\n<p>时刻的动能之比</p>\n<p>x</p>\n<p>A  2</p>\n<p>-A</p>\n<p>一、6题图</p>\n<p>1</p>\n<p>t</p>\n<p>x</p>\n<p>x</p>\n<p>2</p>\n<p>",
    "options": [
      "1 ：4",
      "1 ：2",
      "1 ：1",
      "2 ：1"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "id": "phy_26",
    "type": "single",
    "subject": "大学物理",
    "category": "第4章 机械振动",
    "difficulty": 1,
    "question": "6 、两个谐振动的x(t) 图如下图所示，将这两个谐振动叠加，合成的余弦振动的初相为( )",
    "options": [
      "0",
      "π",
      "π",
      "π 3 1 2 2"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "id": "phy_27",
    "type": "single",
    "subject": "大学物理",
    "category": "第5章 机械波",
    "difficulty": 1,
    "question": "1 、已知平面简谐波的波函数为y = Acos(at _bx)，其中 a 、b 为正值，则( )",
    "options": [
      "波的频率为a",
      "波的传播速度为ba",
      "波长为π b",
      "波的周期为<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAEXUlEQVRoge3Ze4hVVRQG8J/jOMqMz8QeSqk5WJrWQGFFaVAJRkIvTQqchMAosqmISopogiiLIIwiSCoyC2ISKwt6UZAhlRmWUkrvl0aklpGTz/5Yd5o71zP33nO8M1fBDw7cu/dZZ397r73WXmttDl8MrTaBg8EU7MDkahPJgkH4BsvzG4fibmzCbrRjNa5GbS8TLIWl+AlHdTQMxyvYi/0Fz79YhP69TjMZcwXPafmNC8WMFqJRaONyfIF9+BtX9SrNZIzDX7ivsGM5piYITMJGMYkVGNCT7EqgHz7Gh+hb2DkfNQlCNWgVKluDY3qQYCkswjaMTit4BXaKmQ+vMKlycaHYBVcmdZbjYfYL7/RnN/0jcSsuEpNM0mYH2nEjXi1jXBiB5/A0XipTpgsWCuKXdNN/CtaKFSr0YEnPVxibYvyVOZmGDNwNw3titQYl9I/CG1iM87FAHDCX4TTMwha8jNNzbScqrqF8tAiNNWUhTxxiX+Ocbvrn6vRetViCF8SZUYN78IfYw2nRJMjfnEEWoebVYhXKWbFT8aVYfUI7nwkNJWmvGOpz33odfVLKgoF4Bo8qz/fX4H58oNNTNWM75mUY/ylsFgacGnXipHsWQ8qUmSgM7abc/wa8hg0Yk3L8WcIhTE8phzjhbkMbji5Tpg6PY71O73I2fsMTEk7NIjhBHFYPp5D5H32FwazE8d280+RAtc7GVtyr01buEvHTrNz/BhxXxvir8IkIG1KhFrfjfWGMQwuesbgBy3TNgs7Dj2L7jM+11YtF2I4ZuW9fK9xoMbSKBKUxLfkO4Z2KH0B7cEeB3A/C1bXktR2LT8U+3iRWtVXxrTQ19/3mLORhVwny+/GrA1dxt/AY+afkELyZm0C7sINizmCY0OKyrOQPBhdLTnRG4xox4VJnSJs4vQdXllrvYL7Q4pnVJpIFE/GPCBYPO/THOryr/MDukMJi/C7yiMMOM4WHmlltIlkwUqz8Y9UmkgU1Ys+vU93qRmbcKbzOhGoTyYIpwt9fl0F2CG4RydV6PCLS0gfxtoi3ehSDxUnblkH2DHyEt3K/60TevVRU6L7DSZWh2T2eF7HOsJRy0/AtXtQ1Ah4n8vR9ImmqrwDHbtEsosxppV4swMliu6wRSU4+xogod49IAXoMjSK+b00pVy8KWTswJ6G/SeTLW6VfmLLRT2RWq6RLKYnq3ja8I/kKqVmE6T1aq30oR6JQ/aVQJ+pKu3B9Qv9AUWTbiyelX5yyMF0Y2OwMsh0GukV4nULMEVurXRTdKo4RYn8uySh/gdDcRgeW0SeKbbkb3wtDR+XC2T6ilrRdZ30oLRqE/QzQNU2dJO7vPs+Ns0GULGegf6Uu8FrECp4lQoYs2CzKMaPwgMiTJ+NcMYEFYgJrxZXXL+IO76AxPvehllIvlsAAUc7sKDLsEpePjSIJWiHs62dRsqyYEffBpRX6Vq2oN80T5fj8LT5BVMTHVGisIziCIzgU8B+0DPekZ15g5gAAAABJRU5ErkJggg==\" />"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "id": "phy_28",
    "type": "single",
    "subject": "大学物理",
    "category": "第5章 机械波",
    "difficulty": 1,
    "question": "<img src=\"data:image/png;base64,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\" style=\"max-width:100%;border-radius:8px;\" />",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "id": "phy_29",
    "type": "single",
    "subject": "大学物理",
    "category": "第5章 机械波",
    "difficulty": 1,
    "question": "<p>3 、在下面几种说法中，正确的是(    )</p>\n<p>",
    "options": [
      "波源不动时，波源的振动周期与波动的周期在数值上是不同的",
      "波源振动的速度与波速相同",
      "在波传播方向上，任一质点的振动位相总是比波源的位相滞后",
      "在波传播方向上，任一质点的振动位相总是比波源的位相超前"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "id": "phy_30",
    "type": "single",
    "subject": "大学物理",
    "category": "第5章 机械波",
    "difficulty": 1,
    "question": "<p>4、频率为100Hz，传播速度为300m/s的平面简谐波，波线上两点振动的相位差为π/3，则此两点相距(   )</p>\n<p>",
    "options": [
      "2m",
      "2. 19m",
      "0.5m",
      "28.6m"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "id": "phy_31",
    "type": "single",
    "subject": "大学物理",
    "category": "第5章 机械波",
    "difficulty": 1,
    "question": "<p>5、两相干平面简谐波沿不同方向传播，如图所示，波速均为u = 0.40m / s ，其中一列波在 A 点引起的振动方程为 <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAzCAYAAADVY1sUAAACGklEQVRoge3ZTYhNYRzH8c/crgwjTbO0mSmUkTAWVrJSRmGhRGFjY6fJRrGxoRQJkQ1ZIQsLoeSdbKSwESsLb0NeJsZ46XbH4rmamdPccztn7nVn6vnW7Z57z/+c5/c7z/95/s/pIRKJRKYSLeP8V0Q3lmExytiPgUTMDqzECdxvrMzstOICPqOEYXzH+kTcHDwVTN79j/qqUkz8/oXNKGA7jmKm0DtXBOHQjwPYg2l10LEChzErx7UP0Zc08o8ybuEt5qHL2DQs4yI6MDdH40kG8Agzclz7XMieqnTggZBe14SeGU0nLmFJjsbrTiHl3A8jA7zd2Kc1HX24iWeNkZaNNCMlfBJ6pB1to85tEsbG2YYpy0iakWF8rHzPNmJkOdbgIIbqpKMX3yptZf1cR1u1wU4Y0B8qwa3CmOnCLmGGeZ2IL6AH7/A+o5EX2CukbFZe4XetoG34g8HK8WmsGyduNa7iK1blENNw1goFsYQn2JISu0GoL00xkpZa8EUokmWcwvmU2CE15vNGUsvIoLBcOYQzRir7pCPNSCd2Y59QxSetCapPv0txHOeEReSkNkHokYKwUNyIk5iPrcJ0eKd50rLTiZfCUy/hHhbluE8v3mjirNUvpFEPbuCyiVXs8V7WpgzdOIafOIIFzZUTiUQikUgkEolEIpFIJBKJTA1ahO20hU3WAbeFvZhcFIXNzZ11k5OfxyZg5C+DqnSk09ecVgAAAABJRU5ErkJggg==\" /> A1 cos <img src=\"data:image/png;base64,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\" /> ，另一列波在 B 点引起的振动方程为 y2  = A2 cos <img src=\"data:image/png;base64,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\" /> ，它们在 P 点</p>\n<p>相遇， AP = 0.80m ，BP = 1.00m，则两波在 P 点的相位差为  (    )</p>\n<p>A</p>\n<p>",
    "options": [
      "0",
      "π /2",
      "π",
      "3π /2 P B"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "id": "phy_32",
    "type": "single",
    "subject": "大学物理",
    "category": "第6章 气体动理论",
    "difficulty": 1,
    "question": "<p>1、气体分子速率分布函数为f<img src=\"data:image/png;base64,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\" /> N 为整个速率区间内的分子总数，dN 为分子速率在v→v+dv区间内的分子数，则能够表示气体分子速率处于v1 ~v2    区间的概率的表达式是(  )</p>\n<p>",
    "options": [
      "<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAhCAYAAAA/F0BXAAABkklEQVRIieXVP0+UQRDH8Q9wnIIoISYWECM2FsSExsoKSSgoLPAl+BJoqeltTIyJhRXGGCgpiBb22hgNBhI6YgFEQYHA/bHYeeLlyaF3e6WTbPaZybPf57ezs/MM+Lvdwh2c4uQf77ZdvIYzNLETsLbW3yZ2FU9wD4tYwXmMjm0Bh1iOj4xjDsMXLaiU/AHMx/wBDezGuNDK27mOaSmRe51KL0NuYEJK6FEuZAIjqIeabCXDqIWaLMhYxOpSfXQN6Q9IX0AauUquxdzMVQLVUNKVlSFF8TVylfRhMJ5rUl6ylBR+TQ+JLfxjPdRJkZMjPVTspZj3cyGVgDSxLfN0qtK9qWNLZmKHMCr1kc8t8TO8weXwR7AhNarpMmRMusWbUmMu7B3u4274x/gSa6sF5BmuYCZAr/G9BfIivj7bEvspneBBETiXcvBD6uyjpS2P4yPWA1bFK6yK5l2R/i91vA3IrxLkG97jEW5HbApLsbWO7aFUO4/xFM/9SXTHdhOf8DVUTXYLIG37pXSsD3IA/5v9BlYOVoQfVLTAAAAAAElFTkSuQmCC\" />2 f (v)dv",
      "<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAhCAYAAADUIPtUAAABnklEQVRIie3VPWtUURDG8d/ejWve1FKMrEQEAyKIBBu7TSVCGj+AhaTJZ8jnCIGARRoRCQFtLAQLsbZRgi+FjYaQYEzIKmriboozS6Lubu7ubR24cBjO+d9nZs7MKTveKriCs9jB7xxn/rFbeItGfI8w0G5j1gVyHQtYwwxW8QvNXpSUA7KFWvgmcaMXCFTxJlRcyHOgU2iXcR5fUC8CmsApfMPPfkEZLqKEH9jrF1SS8lIKSK570w50EqdjnUtNN9BIrPeLgCoYjnWjCChz2Aa5b3EnUDnWuRu0Hah8BLSXV1Wn8rf8harWgjWxXQTUylFT6v5cletWtQY2iigaDFAdn4uARnACX/GpCOiM1CbvsY55acQuh1oYxTNpDF/rBKpiCC+leTSH57iJq7HnuzQ9M6mlZDiHx7gbYd2OPz2JQ9u4Hyqmjvywjl2psuASPobzQxyc/UvtGF7haQAreIgV0eADQVyKWDfxAC/8eX/Ww3dHmp6kR3MuwuzJpqXH4J5UgEWHye/JqniNd6FuvB8IKQ1LUiFqx+z9b23sAGJiVLt64jMDAAAAAElFTkSuQmCC\" />2  Nf (v)dv",
      "<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAhCAYAAADUIPtUAAABl0lEQVRIieXVv0tVYRzH8Zd6u6VpIkKDEtXSEIFLU1MJDQ4N9Sf0J7g2SnuLEEFDUyVSNDVEDe21RJEouEmDiaWp2P3h8HwPXuTc9J5n7AOH55wP57zP53yf73meAcfrIq5gD7snuL8U8Br7aGM1gKXq7+KP4BGuYxbP8TeOnnQXv/EwXjaB2xjq9kCtxBvATIyf0MJaHF1V9mnjmJKKu35s9n+AzmNSKvJWDmgSw2hGqqxEQ2hEqsqgsfCbUv9UAvUHqC9ArZxE52Js5ySCeiTqSWWgoklbOYn6cCrOG1KdKicqvIbMYhfejsw+Kmq0JbOzT8f4MwdUC1AbKzJmrS79Z00syyj2IEaldehrh7+PRZyJ62G8kxa7qTLQmPT3f5cW+0IfcAPX4noH3+L5egGaw2Ocxc2ALWCzA/Q0Ukx3eNvSzG4Uxktpd1jGL2nHGD2SdAKf8TaAdbzAK7Eh1PDG4bLxPkB/joB+4CPu4XJ4V/EgPrMn3ZF66z7m8cRh8XvSBXzBUqS7VAVCKsMzacpvVYX8zzoAiFhXszY+d+0AAAAASUVORK5CYII=\" />2  vf (v)dv",
      "<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAhCAYAAADUIPtUAAABnklEQVRIie3VPWtUURDG8d/ejWve1FKMrEQEAyKIBBu7TSVCGj+AhaTJZ8jnCIGARRoRCQFtLAQLsbZRgi+FjYaQYEzIKmriboozS6Lubu7ubR24cBjO+d9nZs7MKTveKriCs9jB7xxn/rFbeItGfI8w0G5j1gVyHQtYwwxW8QvNXpSUA7KFWvgmcaMXCFTxJlRcyHOgU2iXcR5fUC8CmsApfMPPfkEZLqKEH9jrF1SS8lIKSK570w50EqdjnUtNN9BIrPeLgCoYjnWjCChz2Aa5b3EnUDnWuRu0Hah8BLSXV1Wn8rf8harWgjWxXQTUylFT6v5cletWtQY2iigaDFAdn4uARnACX/GpCOiM1CbvsY55acQuh1oYxTNpDF/rBKpiCC+leTSH57iJq7HnuzQ9M6mlZDiHx7gbYd2OPz2JQ9u4Hyqmjvywjl2psuASPobzQxyc/UvtGF7haQAreIgV0eADQVyKWDfxAC/8eX/Ww3dHmp6kR3MuwuzJpqXH4J5UgEWHye/JqniNd6FuvB8IKQ1LUiFqx+z9b23sAGJiVLt64jMDAAAAAElFTkSuQmCC\" />2 v 2f (v)dv"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "id": "phy_33",
    "type": "single",
    "subject": "大学物理",
    "category": "第6章 气体动理论",
    "difficulty": 1,
    "question": "2、温度、压强相同的氦气和氧气，它们分子的平均动能ε 和平均平动动能 w 有如下关系( )",
    "options": [
      "ε 和 w 都相等",
      "ε 相等，而 w 不等",
      "w 相等，而 ε 不相等",
      "ε 和 w 都不相等"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "id": "phy_34",
    "type": "single",
    "subject": "大学物理",
    "category": "第6章 气体动理论",
    "difficulty": 1,
    "question": "<p>3 、温度为 27℃的单原子理想气体的内能是(    )</p>",
    "options": [
      "全部分子的平动动能",
      "全部分子的平动动能与分子相互作用势能之和",
      "全部分子的平动动能与转动动能之和",
      "全部分子的平动动能、转动动能及振动能之和"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "id": "phy_35",
    "type": "single",
    "subject": "大学物理",
    "category": "第6章 气体动理论",
    "difficulty": 1,
    "question": "4 、 若理想气体的体积为V，压强为P，温度为T，一个分子的质量为m ，k 为玻耳兹曼常量，R 为摩尔气体常量，则该理想气体的分子数为( )",
    "options": [
      "PV / m",
      "PV /(kT)",
      "PV /(RT)",
      "PV /(mT)"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "id": "phy_36",
    "type": "single",
    "subject": "大学物理",
    "category": "第6章 气体动理论",
    "difficulty": 1,
    "question": "<p>5 、有两个容器，一个盛氢气，另一个盛氧气，如果两种气体分子的方均根速率相等，那么由此可以得出下列结论，正确的是(     )</p>\n<p>",
    "options": [
      "氧气的温度比氢气的高",
      "氢气的温度比氧气的高",
      "两种气体的温度相同",
      "两种气体的压强相同"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "id": "phy_37",
    "type": "single",
    "subject": "大学物理",
    "category": "第6章 气体动理论",
    "difficulty": 1,
    "question": "<img src=\"data:image/png;base64,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\" style=\"max-width:100%;border-radius:8px;\" />",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "id": "phy_38",
    "type": "single",
    "subject": "大学物理",
    "category": "第6章 气体动理论",
    "difficulty": 1,
    "question": "<img src=\"data:image/png;base64,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\" style=\"max-width:100%;border-radius:8px;\" />",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "id": "phy_39",
    "type": "single",
    "subject": "大学物理",
    "category": "第7章 热力学",
    "difficulty": 1,
    "question": "<img src=\"data:image/png;base64,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\" style=\"max-width:100%;border-radius:8px;\" />",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "id": "phy_40",
    "type": "single",
    "subject": "大学物理",
    "category": "第7章 热力学",
    "difficulty": 1,
    "question": "2、质量为m、摩尔质量为M的理想气体，经历了一个等压过程，温度增量为 ΔT ，则内能增量为( ) p(atm) A B 1 2 C V(10_3m3) 3 3 2 1 O",
    "options": [
      "<img src=\"data:image/png;base64,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\" /> Cp ΔT                  ",
      "ΔE = mM CV ΔT",
      "ΔE = mMRΔT",
      "ΔE = mM (Cp + R)ΔT 一、1题图"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "id": "phy_41",
    "type": "single",
    "subject": "大学物理",
    "category": "第7章 热力学",
    "difficulty": 1,
    "question": "<p>3、一定质量的理想气体的内能随体积 V 的变化关系为一直线(其延长线过 E _ V示，则此直线表示的过程为 (        )</p>\n<p>图的原点)  如图所</p>\n<p>",
    "options": [
      "等温过程",
      "等压过程",
      "等体过程",
      "绝热过程</p>\n<p>V</p>\n<p>O</p>\n<p>一、3题图</p>\n<p>E"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "id": "phy_42",
    "type": "single",
    "subject": "大学物理",
    "category": "第7章 热力学",
    "difficulty": 1,
    "question": "<img src=\"data:image/png;base64,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\" style=\"max-width:100%;border-radius:8px;\" />",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "id": "phy_43",
    "type": "single",
    "subject": "大学物理",
    "category": "第7章 热力学",
    "difficulty": 1,
    "question": "5、一定质量的双原子理想气体，若在等压下加热，使其体积增大为原体积的 n 倍。则传给气体的热量中，用于对外界做功与增加内能的热量之比是( )",
    "options": [
      "2:5",
      "2:7",
      "3:5",
      "5:7"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "id": "phy_44",
    "type": "single",
    "subject": "大学物理",
    "category": "第7章 热力学",
    "difficulty": 1,
    "question": "<img src=\"data:image/png;base64,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\" style=\"max-width:100%;border-radius:8px;\" />",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "id": "phy_45",
    "type": "single",
    "subject": "大学物理",
    "category": "第7章 热力学",
    "difficulty": 1,
    "question": "7 、一绝热的封闭容器，用隔板分成相等的两部分。左边充有一定量的某种气体，压强为p ，右边为真空。若隔板抽去（对外不漏气），当又达到平衡时，气体的压强为( )",
    "options": [
      "p",
      "p<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAARCAYAAAD+H91rAAAAeklEQVQYlW3OoQrCABSF4Y+BZSZt2mXV7AOIZeDGntM9wIJVMJrNNkFBs0VhXO+N5z/35/B/C/RFAvZ4J7kBXQxneGIaVTWOeEXQ4BA1JR6Yw/hjhzPuETToo2bybS4j2OI0Dn6qNltT4IZVBBtcsnabrYEr1hmosvADew4Ss5kRHuQAAAAASUVORK5CYII=\" />2",
      "2p",
      "p<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAUCAYAAABBECfmAAAAjklEQVQokXXQQQpBURSA4Y/HSDJTsgIDS2BiYKKrLMbCKLKAN1FWoMxMSJmYUQZSr9e5d3i+zl/nNsRvjXvGnDCJYIgbimaACTt8os09VhF08UQH6tk5SrwiTNhEycLvtkGEUxyrg2p2mUvCGeMIRrjUh/9swjaXLDGLoI8HWlF2gQPeEWZ/Ba7o5bCdgy+Uexa/m/ypHgAAAABJRU5ErkJggg==\" />2Y"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "id": "phy_46",
    "type": "single",
    "subject": "大学物理",
    "category": "第7章 热力学",
    "difficulty": 1,
    "question": "<p>8 、下列叙述中<strong>错误</strong>的说法是 (    )</p>\n<p>一、6题图</p>\n<p>",
    "options": [
      "热量不可能自发地从低温物体传到高温物体",
      "不可能从单一热源吸收热量，使其全部转变为有用功",
      "理想气体等温膨胀过程中，气体吸收的热量全部对外界做功",
      "热力学第二定律指明了自然界宏观过程进行的方向性"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "id": "phy_47",
    "type": "single",
    "subject": "大学物理",
    "category": "第12章 狭义相对论基础",
    "difficulty": 1,
    "question": "<p>1、在狭义相对论中，下列说法中哪些是正确的 (    )</p>\n<p>（1）一切运动物体相对于观察者的速度都不能大于真空中的光速；</p>\n<p>（2）质量、长度、时间的测量结果都是随物体与观察者的相对运动状态而改变的；</p>\n<p>（3）在一惯性系中同时不同地发生的两个事件在其它一切惯性系中也是同时发生的；</p>\n<p>（4）惯性系中的观察者观察一个与他作匀速相对运动的时钟时，会看到这时钟比与他静止的相同的时钟走得慢些。</p>\n<p>",
    "options": [
      "（1），（3），（4）；",
      "（1），（2），（4）；",
      "（1），（2），（3）；",
      "（2），（3），（4）。"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "id": "phy_48",
    "type": "single",
    "subject": "大学物理",
    "category": "第12章 狭义相对论基础",
    "difficulty": 1,
    "question": "<p>2、关于同时性有人提出以下一些结论，其中正确的是 (    )</p>\n<p>",
    "options": [
      "在一惯性系同时发生的两个事件，在另一惯性系一定不同时发生",
      "在一惯性系不同地点同时发生的两个事件，在另一惯性系一定同时发生",
      "在一惯性系同一地点同时发生的两个事件，在另一惯性系一定同时发生",
      "在一惯性系不同地点不同时发生的两个事件，在另一惯性系一定不同时发生"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "id": "phy_49",
    "type": "single",
    "subject": "大学物理",
    "category": "第12章 狭义相对论基础",
    "difficulty": 1,
    "question": "<p>3、在某地发生两件事，静止位于该地的甲测得时间间隔为4s，，若相对甲作匀速直线运动的乙测得时间间隔为 5s ，则乙相对于甲的运动速度是（c表示真空中的光速）(        )</p>\n<p>",
    "options": [
      "（3/5）c",
      "（4/5）c",
      "（1/5）c",
      "（2/5）c"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "id": "phy_50",
    "type": "single",
    "subject": "大学物理",
    "category": "第12章 狭义相对论基础",
    "difficulty": 1,
    "question": "<p>4、一宇宙飞船相对地球以 0.8c(c表示真空中光速)的速度飞行。一光脉冲从船尾传到船头，飞船上的观察者测得飞船长为 90m ，地球上的观察者测得光脉冲从船尾发出和到达船头两个事件的空间间隔为(        )</p>\n<p>",
    "options": [
      "90m",
      "270m",
      "54m",
      "150m."
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "id": "phy_51",
    "type": "single",
    "subject": "大学物理",
    "category": "第12章 狭义相对论基础",
    "difficulty": 1,
    "question": "5 、一宇航员要到离地球 5 光年的星球去旅行，如果宇航员希望把这路程缩短为 3 光年，则他所乘的火箭相对于地球的速度 v 应为 ( )",
    "options": [
      "0.5c",
      "0.6c",
      "0.8c",
      "0.9c"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "id": "phy_52",
    "type": "single",
    "subject": "大学物理",
    "category": "第12章 狭义相对论基础",
    "difficulty": 1,
    "question": "6、一体积为 V0，质量为 m0 的匀质立方体沿其一棱的方向相对观察者 A 以接近光速的速度 v 作匀速直线运动，则观察者 A 测得其密度为( )",
    "options": [
      "<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAABRCAYAAAAw7F/uAAAJ30lEQVR4nO2de3BcdRXHP7mbtkl2YxNa29KXhT4s0UmrgIVKK+CzICNUEbEqjjo6Mjq8xheOKDo+QMURn3+IjFaGIhZsBRTLDNUWdGrHqgOWWKwVWqD2lTSGYmoT//je693Nvu5ufpu7d3M+MzvZ7H3s2d89v3PO7/xeKRoDL24BjFxScQvgiC8DpwHb4hbEEI1S01cCB+IWwmgsPODfQFfcghiNxXzgBaA5bkGMkEZwhd3A48B/4xbECGkExVoC/CVuIeqQ38f55Y3gPrqB38YthCNSqCHyamAvsAE4UsV9FgNz6kieRPIkcH7cQjjAAz4J9CBr0w9sBmZVca/rgW/XkTyJIwMMAVPjFsQB84FPA+3+/xcCzwJXV3Gv7cB5dSRP4jgb2Be3EI7oBE7K+r8FuA+4mcpi4XkopzfaMGdU8iQ9xuqmcQL3QrHLIPBXZJWjcgmKhUbbSh6VPElvFRZTrAXA94GNQMeYSuSOU5Fy/LrC694K3ONenKrlSSRbgXdm/b8A+B7QBwwDD5NMxWoGbgAuqvC6k5GlmRS3PEm2WE3kW6xpwDeBdVTmPuqNtwDPAQ9Ucd0DwH/qRJ5EMg8V4IQCx9ageCCJFut1wDVUZ3U2IVfokqrkSbLFWoICyeMFjg0CJ8ZWHCesQq59B/AK4DXAp4CXR7j2JOBVwK/qRJ7E8hngR0WOXQocI1kWaxVyN8NZryHgfiAd4fr34jZoH608ObQAy4APo1bVWpRp9YALgAeBLeRmujtQpvd3/jVj9SDvBq4rcixOxZoEnAlcCfwAuBclG0FdJFcBf0CJRpfpno3AuyKeOx2V3SbgMfTsrgHaHMqTwzzgYvTDh1ANyPhC/B3o9T/fgJRwLgro9qKmaB/S9LGgB/n/QsSpWCvQgzqCyuqYLw+opt/vf/5P4KWOvrMdOEr535pClq0HKf1SYCJwhS/vexzJkxdj7UHZ1Z1IUTYDlwELgbOA25BJTKHM7A3A7cBrkXI1476pW4i0L1M9Jke3oB6BNehhT0QxiQcMAJ9Aw3yOUzg+rIYLgEdQxS/GJOBzwFeALwIfBP6EnvN8VKbOKmGh4H0aasYfQQHwOSie6UdJMtADfR8ypXcDM4HJqCCfdiVcCV4G/Mt/1SvbkWVoAhb5f0Gu5/PIK+x39F2rgfUljntIka4CvgX8hDAdE1jPe4BfOJKnoI9fDLwE2I2s1NdQ39N8VPP6kcI9D/zMF3ol8CLgz8hl1ppu/7tccR3hgy/HMJq0saXMeYeAJ1C8NR2FFH3+sU4UEw1ULGk+rcCbgI+WOKcb/cadyAWOzPHd5r+cUUixzkKFkEGFFzzApcgy7QemALciBZuMmqEg13nUgVyXIhdyR5Hjrgf3fZXoijWEOmIfoXQS9gSwCyliJwqM+1AZLkIzi1zwepQOKGa9PRRDzUTPzJWVLMlIxUqjQV0pNEQiMK+BVWpBNeQ+wlkxi9BEhj6kWKPJeM8EvoSCyCaUp9pR4LxuVPNcUat83lNIwdIoxvFQpXkYWTQXlHODM1Arvg941NF3lmVkgc5B8csg8GPCHz8FJd+afOE2Z12z3D++CylCtVyJYpIUoZX8QIHzCnXl1CuHUe9AK1KsbmS5HnJ0/wmo/+7eEufMQX2IvYyRtYJ8xVqK4oGngN9kfb4QdfAOoKTk8/7nbag2eMhtHhxxvy40CvEyyrcWDyKz/m7gO/5na9BDyWY2ctM7y9yvHuhDlbQZVb5VqB/TVV/euahC7y1xTgYpoEdxd386smzO8Ea8X4Fim23ktu6WoaboYyi2CJiDauEAsmJvIEz3rwKuRUnWZtTELZWA+ynhBIC7/HtOJr/vawlSqsEyvw2ix0214iiScwLwNuCPwD8c3j/KEJlepMgzUJiTTQpV5NWoUeaMbMWaCpyB8hqbCB9cC4qvPJR5zx4A1oXSE73AKciN7vKPXY2Uah8y1bNRviUK/Ui5IN8dRnGDGVRobaiixMUxVI4Z1D3iygWCft/FlFesJ1Gc2gp8HaU6LkLluh411m7GTQu1IMuRO9qD1kEIWOALd5iw9RfwDjRZ9AXgFnL7kLaTO/D+euBOondjnE3YR7Uw6/N1wMeKXHMacCOyaEO+XHeiWtkS8XtdMg/FjbdTRf9aGVYQPeWyFCnXEGGf3z5U+ccioV0xaWTil5Mfr21BrizgCuRiXxzx3kGrcJjcpvlO4I3VCBsDGeSuptXg3t8APlvB+W2o3D4EvJnc8eyJ4kFya8PlqCujkvlu1yLFehZZulbUfD/ZkYxJpQlly+t2+Eotx2MFZjegOevzqKxF/WkzUHzWhVIgz7kQMMGcjgLyx+MWpBi1VKwWcgPnDhTkVxIkHkAjKQDeT5hxHy56xfhgNQra67YcaqlYaUI/7qEO7B1U3uUTZNgvRAF9EhKjtaQJxW2lsu2xU0vF2g280n/fiRQru1c9Kg+hhG0KJWNddj4nkS4Ua26PW5BS1HKpyB7kvjqBt6P+sV9SufkeRm70XNTK/ALjO8ZqReOonohbkDhJo6Tr9FHeZy5KNPZTp3kXI7nMxHF/lmEYhmGo6TqVcA0kw3DBM02oOX9O3JIYDcWNcQtgGIZhGIZhGIZhGIZhGIYRG3FP6IybZWgs/SzCsWnH0SDFuwgnl6bRPLxuNDhyGE0t24AmjRhGHhPRRM4TaDLuJUXOywA/RxN6N6LFUAyjJMHy3VspPt+uBY0zX0vufEmjAElejtslHagsDqD9pQtxJnKBHydcQM0ogimWyiDYlu4whdeHD2Y034QmzxplMMUSU/y/B8mf7OGhZQS2oXVDjQiYYqllHMRVh8ifnrYcrZRT1/P46g1TLK1d1YEs1ciF4+aiWcc/xP3GRw2NKZbm6bWj/FV2UJ5GK7OsB56JQa5EY4qlNEI7skiBYnlogd09aJcJo0JMsULFGiRUrPPQoml3kOx9D2PDFEsur43QYp2KVir8LuEivkaFmGIpiz4JJUY9tC3IOrSwmVElSd/F3gUdqL9wAG36uBstYFKOTrQZQBvqsLbEqZHD5cgNHkL7yWQiXDMLbbCwEi3XuBZ3W8Q1BOYKZXlSKKVwE8X7CgM84COoxbgVrX3/KNpI0jyAjymWunN60XLhf4tw/nS0AWewvDX++zNQQtXAFMtDwfutaKfYKMxGVi578bcDqHV5ilPpEsx4N91DqAXYQ/Rd74MhNtlbhJxAfY5J2di85ox3xYLK1/IcynoFeP7Lkqk+490VVsNBNDw5u/UYbGdSz1sJjymmWJXzNIqvsgP12ShdsTsWieoQU6zKOYxGPKxEaQoPrT+/AUuS/p/xPv2rWtrR4mL70TiuqWg/RhsL72OKVT0esJhwU3EL3A3DMAzDMIya8j+EAw07vrAYBgAAAABJRU5ErkJggg==\" /><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAABCAYAAACCGM0BAAAAFUlEQVQImWNkYGCYycDA4MkwMsBRANK9AalfjWWRAAAAAElFTkSuQmCC\" />",
      "<img src=\"data:image/png;base64,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\" />",
      "<img src=\"data:image/png;base64,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\" />",
      "<img src=\"data:image/png;base64,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\" />"
    ],
    "answer": 2,
    "explanation": ""
  }
];
