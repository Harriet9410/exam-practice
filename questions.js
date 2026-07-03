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
    "answer": "static：静态成员，属于类而非实例 class：定义类 implements：实现接口 interface：定义接口 this：当前对象引用 super：父类引用 import：导入包/类 package：声明包 abstract：抽象类/抽象方法 final：类不可继承、方法不可重写、变量为常量",
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
    "question": "兰波达表达式定义排序规则使用，如Arrays.sort(a,(01,02)->02-01),前面减后面为升序，后面减前面为降序",
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
    "question": "马克思主义中国化时代化，就是立足中国国情和时代特点，坚持把马克思主义基本原理同    相结合、同    相结合，深入研究和解决中国革命、建设、改革不同历史时期的实际问题，真正搞懂面临的时代课题，创造新的理论成果。",
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
    "question": "党的十八大以来，中国特色社会主义进入新时代，以习近平同志为主要代表的中国共产党人，提出一系列原创性的治国理政新理念新思想新战略，主要系统回答新时代哪些重大��代课题?",
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
    "question": "在马克思主义中国化时代化的历史进程中，产生了毛泽东思想、( )等理论成果。",
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
    "question": "中国共产党以    ���毛泽东思想、邓小平理论、“三个代表”重要思想、科学发展观、    作为自己的指导思想和行动指南。",
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
    "question": "( )是毛泽东思想活的灵魂，这一具有中国共产党人特色的立场、观点和方法也贯穿于中国特色社会主义理论体系之中。",
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
    "question": "坚持和发展马克思主义，必须同中国具体实际相结合，着眼解决革命、建设、改革中的实际问题，不断回���( )，作出符合中国实际和时代要求的正确回答，得出符合客观规律的科学认识，形成与时俱进的理论成果，更好指导中国实践。",
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
      "��民主主义革命理论",
      "新民主主义革命路线",
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
    "question": "2021年，党的( )通过的《中共中央关于党的百年奋斗重大成就和历史经验的决议》总结了百年来中国共产党推进马克思主义中国化时代化的重大成就，阐释了马克思主义中国化���代化的重大历史意义。",
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
    "question": "马克思主义中国化时代化的理论成果是一���相承又( )的关系。",
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
      "1927年以后中国共产党独立担负起领导中国革命的重任",
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
    "category": "���泽东思想",
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
    "question": "( )年召开的党的十一届三中全会，实现了新中国成立以来党的历史上具有深远意义的伟大转折，开启了改革开放和社会主义现代化建设历史新时期。",
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
      "革命军队建设和军事战略理论"
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
      "���日战争以后",
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
    "question": "中华人民共和国成立前后，毛泽东多次提出务必使同志们继续地保持谦虚、谨慎、不骄、不躁的作风，务必使同志们继续地保持( )的作风;要求全党警惕资产阶级思想的侵蚀，反对脱离群众的官僚主义。",
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
      "《井冈山的斗��》",
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
      "深入实际了解事物的本来面貌，把握事物内在必然联系，按照客观规律办事。",
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
      "十月革命开辟���世界无产阶级社会主义革命的新时代",
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
      "人民内��的矛盾",
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
      "土地革命战争时期，毛泽东在一系列著作中阐述了“农村包围城市，武装夺取政权”的思想，标志着毛泽东思想的成熟。",
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
    "question": "中国革命分两步走，第一步��完成反帝反封建的( )任务。",
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
    "category": "��民主主义革命理论",
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
      "全心全意为人民服务",
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
      "半���民地半封建社会",
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
      "资产阶级和工人阶级的矛盾"
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
    "question": "毛泽东在《在晋��干部会议上的讲话》中完整地总结和概括了新民主主义革命总路线的内容，即( )的革命。",
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
    "question": "党在领导新民主主义革���的过程中，形成了( )相结合的三大优良作风。",
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
    "question": "我��的根本政治制度是( )。",
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
    "question": "关于正确处理人��内部矛盾的方针。毛泽东指出，对于科学文化领域里的矛盾，实行( )。",
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
    "category": "社会���义建设道路初步探索",
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
      "《实践���》",
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
      "社会主义基本制度的改革",
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
    "question": "江泽民强调，我们想事情，做工作，想得对不对，做得好不好，要有一个根本的衡量尺度，这就是( )。",
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
      "国家长治久安的��要保障"
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
  }
];
