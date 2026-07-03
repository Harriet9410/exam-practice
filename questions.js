var QUESTIONS = [
  {
    "id": "imp_1782990624735_0",
    "type": "qa",
    "subject": "Java",
    "category": "",
    "difficulty": 1,
    "question": "源文件扩展名为?编译生成字节码文件扩展名为?",
    "options": [],
    "answer": "源文件扩展名为 .java；编译生成字节码文件扩展名为 .class",
    "explanation": ""
  },
  {
    "id": "imp_1782990624735_1",
    "type": "qa",
    "subject": "Java",
    "category": "",
    "difficulty": 1,
    "question": "行注释、块注释、文档注释分别怎么标注?",
    "options": [],
    "answer": "行注释：//；块注释：/* ... */；文档注释：/** ... */",
    "explanation": ""
  },
  {
    "id": "imp_1782990624735_2",
    "type": "qa",
    "subject": "Java",
    "category": "",
    "difficulty": 1,
    "question": "编译源代码命令、运行字节码、显示JDK版本号、反编译字节码、生成文档注释的命令及格式",
    "options": [],
    "answer": "编译源代码：javac 源文件名.java 运行字节码：java 类名 显示JDK版本号：java -version 反编译字节码：javap 类名 生成文档注释：javadoc 源文件名.java",
    "explanation": ""
  },
  {
    "id": "imp_1782990624735_3",
    "type": "qa",
    "subject": "Java",
    "category": "",
    "difficulty": 1,
    "question": "布尔型变量定义定义及取值",
    "options": [],
    "answer": "布尔型变量定义：boolean flag = true; 或 boolean flag = false;，取值只能是 true 或 false",
    "explanation": ""
  },
  {
    "id": "imp_1782990624735_4",
    "type": "qa",
    "subject": "Java",
    "category": "",
    "difficulty": 1,
    "question": "面向对象三个特性",
    "options": [],
    "answer": "面向对象三个特性：封装、继承、多态",
    "explanation": ""
  },
  {
    "id": "imp_1782990624735_5",
    "type": "qa",
    "subject": "Java",
    "category": "",
    "difficulty": 1,
    "question": "static class implements interface this super import package abstract final关键字用途",
    "options": [],
    "answer": "static：静态成员，属于类而非实例 class：定义类 implements：实现接口 interface：定义接口 this：当前对象引用 super：父类引用 import：导入包/类 package：声明包 abstract：抽象类/抽象方法 final：类不可继承、方法不可重写、变量为常量",
    "explanation": ""
  },
  {
    "id": "imp_1782990624736_6",
    "type": "qa",
    "subject": "Java",
    "category": "",
    "difficulty": 1,
    "question": "类成员访问权限控制关键字",
    "options": [],
    "answer": "类成员访问权限控制关键字：private（本类）、default/缺省（同包）、protected（同包+子类）、public（任意）",
    "explanation": ""
  },
  {
    "id": "imp_1782990624736_7",
    "type": "qa",
    "subject": "Java",
    "category": "",
    "difficulty": 1,
    "question": "多层继承构造函数执行过程",
    "options": [],
    "answer": "多层继承构造函数执行过程：从最顶层父类开始逐层向下执行，先执行 Object 构造，再执行中间父类构造，最后执行子类构造，子类构造默认首行调用 super()",
    "explanation": ""
  },
  {
    "id": "imp_1782990624736_8",
    "type": "qa",
    "subject": "Java",
    "category": "",
    "difficulty": 1,
    "question": "兰波达表达式定义排序规则使用，如Arrays.sort(a,(01,02)->02-01),前面减后面为升序，后面减前面为降序",
    "options": [],
    "answer": "Lambda表达式排序：Arrays.sort(a, (o1, o2) -> o1 - o2) 前减后为升序；Arrays.sort(a, (o1, o2) -> o2 - o1) 后减前为降序",
    "explanation": ""
  },
  {
    "id": "imp_1782990624736_9",
    "type": "qa",
    "subject": "Java",
    "category": "",
    "difficulty": 1,
    "question": "异常处理关键字",
    "options": [],
    "answer": "异常处理关键字：try、catch、finally、throw、throws",
    "explanation": ""
  },
  {
    "id": "imp_1782990624736_10",
    "type": "qa",
    "subject": "Java",
    "category": "",
    "difficulty": 1,
    "question": "多线程主要方法及功能如sleep run start interrupt wait notify notifyAll等",
    "options": [],
    "answer": "多线程主要方法： sleep() 休眠指定毫秒 run() 线程执行体 start() 启动线程 interrupt() 中断线程 wait() 释放锁等待 notify() 唤醒一个等待线程 notifyAll() 唤醒所有等待线程",
    "explanation": ""
  },
  {
    "id": "imp_1782990624736_11",
    "type": "qa",
    "subject": "Java",
    "category": "",
    "difficulty": 1,
    "question": "泛型容器类、拿来就用线程的使用格式统一的方法，支持泛型，TreeSet HashSet TreeMap HashMap LinkedList ArrayList BigInteger",
    "options": [],
    "answer": "泛型容器类： ArrayList 动态数组 LinkedList 双向链表 HashSet 无序不重复 TreeSet 有序不重复 HashMap 键值对无序 TreeMap 键值对有序 BigInteger 大整数 统一使用泛型格式如 ArrayList<String> list = new ArrayList<>()",
    "explanation": ""
  },
  {
    "id": "imp_1782990624736_12",
    "type": "qa",
    "subject": "Java",
    "category": "",
    "difficulty": 1,
    "question": "文件字节流、字符流、缓冲流、数组流、字符串流",
    "options": [],
    "answer": "文件字节流：FileInputStream/FileOutputStream 字符流：FileReader/FileWriter 缓冲流：BufferedReader/BufferedWriter、BufferedInputStream/BufferedOutputStream 数组流：ByteArrayInputStream/ByteArrayOutputStream 字符串流：StringReader/StringWriter",
    "explanation": ""
  },
  {
    "id": "imp_1782990624736_13",
    "type": "qa",
    "subject": "Java",
    "category": "",
    "difficulty": 1,
    "question": "文件序列化，把一个对象完全转成字节序列，不用考虑对象成员个数及类型，以整个对象、数组、LinkedList为单位读写文件",
    "options": [],
    "answer": "文件序列化：类实现 Serializable 接口，用 ObjectOutputStream 的 writeObject() 写入，ObjectInputStream 的 readObject() 读取，可整体读写对象、数组、LinkedList",
    "explanation": ""
  },
  {
    "id": "imp_1782990624736_14",
    "type": "qa",
    "subject": "Java",
    "category": "",
    "difficulty": 1,
    "question": "为按钮等组件事件源，绑定监视器监听的方法addActionListener",
    "options": [],
    "answer": "为按钮等组件绑定监视器：button.addActionListener(listener);，监听器实现 ActionListener 接口，重写 actionPerformed(ActionEvent e) 方法",
    "explanation": ""
  },
  {
    "id": "imp_1782991704422_0",
    "type": "qa",
    "subject": "Java",
    "category": "编程题",
    "difficulty": 1,
    "question": "求平均值",
    "options": [],
    "answer": "(1)import java.util.Scanner; public class Exam{ public static void main(String argv[]){ Scanner sr=new Scanner(System.in); int i,s=0,a; for (i=1;i<=10;i++){ a=sr.nextInt(); s=s+a; } System.out.printf(\"%.2f\\n\",s/10.0); } } (2)import java.util.Scanner; public class Exam{ public static void main(String argv[]){ Scanner sr=new Scanner(System.in); double s=0,a; int gs=0; while(sr.hasNextDouble()){ a=sr.nextDouble(); s=s+a; gs++; } System.out.printf(\"%d个数的平均值为%.2f\\n\",gs,s/gs); } }",
    "explanation": ""
  },
  {
    "id": "imp_1782991704423_1",
    "type": "qa",
    "subject": "Java",
    "category": "编程题",
    "difficulty": 1,
    "question": "类的定义和使用",
    "options": [],
    "answer": "class DCSL{ int a,d,n; DCSL(int a,int d,int n){ this.a=a; this.d=d; this.n=n; } int getHe(){ return(2*a+(n-1)*d)/2*n; } } public class Exam { public static void main(String[] args) { DCSL sl=new DCSL(3,2,4); System.out.println(sl.getHe()); } }",
    "explanation": ""
  },
  {
    "id": "imp_1782991704423_2",
    "type": "qa",
    "subject": "Java",
    "category": "编程题",
    "difficulty": 1,
    "question": "类的继承（super）",
    "options": [],
    "answer": "class TX{ int a,b,c; TX(int a,int b,int c){ this.a=a; this.b=b; this.c=c; } double getArea(){ return (a+b)*c/2.0; } } class TXZ extends TX{ int h; TXZ(int a,int b,int c,int h){ super(a,b,c); this.h=h; } double getV(){ return getArea()*h; } } public class Exam { public static void main(String[] args) { TXZ z=new TXZ(1,2,3,4); System.out.printf (\"%.2f\\n\",z.getV()); } }",
    "explanation": ""
  },
  {
    "id": "imp_1782991704423_3",
    "type": "qa",
    "subject": "Java",
    "category": "编程题",
    "difficulty": 1,
    "question": "继承多态，抽象类",
    "options": [],
    "answer": "（继承）interface XS{ int getXS(); } class NX implements XS{ public int getXS(){ return 100000; } } class YX implements XS{ public int getXS(){ return 8000*12; } } class ZX implements XS{ public int getXS(){ return 1500*52; } } public class Exam { public static void main(String[] args) { XS s[]={new NX(),new YX(),new ZX()}; for(int i=0;i<=2;i++) System.out.println(s[i].getXS()); } } （抽象）abstract class XS{ abstract int getXS(); } class NX extends XS{ public int getXS(){ return 100000; } } class YX extends XS{ public int getXS(){ return 8000*12; } } class ZX extends XS{ public int getXS(){ return 1500*52; } } public class Exam { public static void main(String[] args) { XS s[]={new NX(),new YX(),new ZX()}; for(int i=0;i<=2;i++) System.out.println(s[i].getXS()); } }",
    "explanation": ""
  },
  {
    "id": "mg_1",
    "type": "multiple",
    "subject": "毛概",
    "category": "马克思主义中国化时代化",
    "difficulty": 1,
    "question": "马克思主义中国化时代化，就是立足中国国情和时代特点，坚持把马克思主义基本原理同    相结合、同    相结合，深入研究和解决中国革命、建设、改革不同历史时期的实际问题，真正搞懂面临的时代课题，创造新的理论成果。",
    "options": [
      "改革开放实践",
      "中国具体实际",
      "中华优秀传统文化",
      "世界具体实际"
    ],
    "answer": [
      1,
      2
    ],
    "explanation": ""
  },
  {
    "id": "mg_2",
    "type": "multiple",
    "subject": "毛概",
    "category": "多选题",
    "difficulty": 1,
    "question": "党的十八大以来，中国特色社会主义进入新时代，以习近平同志为主要代表的中国共产党人，提出一系列原创性的治国理政新理念新思想新战略，主要系统回答新时代哪些重大时代课题?",
    "options": [
      "坚持和发展什么样的中国特色社会主义、怎样坚持和发展中国特色社会主义",
      "建设什么样的社会主义现代化强国、怎样建设社会主义现代化强国",
      "建设什么样的党、怎样建设党，实现什么样的发展、怎样发展",
      "建设什么样的长期执政的马克思主义政党、怎样建设长期执政的马克思主义政党"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": ""
  },
  {
    "id": "mg_3",
    "type": "multiple",
    "subject": "毛概",
    "category": "毛泽东思想",
    "difficulty": 1,
    "question": "在马克思主义中国化时代化的历史进程中，产生了毛泽东思想、( )等理论成果。",
    "options": [
      "邓小平理论",
      "科学发展观",
      "“三个代表”重要思想",
      "习近平新时代中国特色社会主义思想"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": ""
  },
  {
    "id": "mg_4",
    "type": "multiple",
    "subject": "毛概",
    "category": "马克思主义中国化时代化",
    "difficulty": 1,
    "question": "为什么推进马克思主义中国化时代化，是有以下两个原因，一是    ，二是     。",
    "options": [
      "历史上曾犯过教条主义、经验主义错误",
      "马克思主义理论解决了俄国实际问题",
      "解决中国实际问题的客观需要",
      "马克思主义理论本身发展的内在要求"
    ],
    "answer": [
      2,
      3
    ],
    "explanation": ""
  },
  {
    "id": "mg_5",
    "type": "multiple",
    "subject": "毛概",
    "category": "毛泽东思想",
    "difficulty": 1,
    "question": "毛泽东思想既包括关于( )的正确思想，也包括关于社会主义建设的正确思想。",
    "options": [
      "改革开放",
      "中国特色社会主义建设",
      "社会主义革命",
      "新民主主义革命"
    ],
    "answer": [
      2,
      3
    ],
    "explanation": ""
  },
  {
    "id": "mg_6",
    "type": "multiple",
    "subject": "毛概",
    "category": "多选题",
    "difficulty": 1,
    "question": "大学生要坚持理论联系实际，紧密联系( )、中华民族发展史，紧密联系自己的思想实际，把理论与实践、理想与现实、主观与客观、知与行有机统一起来，自觉投身于中国特色社会主义伟大实践，为实现中华民族伟大复兴作出应有贡献。",
    "options": [
      "改革开放史",
      "社会主义发展史",
      "新中国史",
      "党史"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": ""
  },
  {
    "id": "mg_7",
    "type": "multiple",
    "subject": "毛概",
    "category": "多选题",
    "difficulty": 1,
    "question": "大学生要坚持理论联系实际，紧密结合( )的伟大实践，自觉投身于中国特色社会主义伟大实践，为实现中华民族伟大复兴作出应有贡献。",
    "options": [
      "推进伟大事业",
      "进行伟大斗争",
      "实现伟大梦想",
      "建设伟大工程"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": ""
  },
  {
    "id": "mg_8",
    "type": "multiple",
    "subject": "毛概",
    "category": "多选题",
    "difficulty": 1,
    "question": "我们要坚定中国特色社会主义( )，增进政治认同、思想认同、情感认同。",
    "options": [
      "文化自信",
      "道路自信",
      "制度自信",
      "理论自信"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": ""
  },
  {
    "id": "mg_9",
    "type": "multiple",
    "subject": "毛概",
    "category": "毛泽东思想",
    "difficulty": 1,
    "question": "中国共产党以    、毛泽东思想、邓小平理论、“三个代表”重要思想、科学发展观、    作为自己的指导思想和行动指南。",
    "options": [
      "习近平新时代中国特色社会主义思想",
      "马克思列宁主义",
      "中国特色社会主义理论",
      "新民主主义革命理论"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": ""
  },
  {
    "id": "mg_10",
    "type": "multiple",
    "subject": "毛概",
    "category": "毛泽东思想",
    "difficulty": 1,
    "question": "( )是毛泽东思想活的灵魂，这一具有中国共产党人特色的立场、观点和方法也贯穿于中国特色社会主义理论体系之中。",
    "options": [
      "独立自主",
      "群众路线",
      "与时俱进",
      "实事求是"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": ""
  },
  {
    "id": "mg_11",
    "type": "multiple",
    "subject": "毛概",
    "category": "新民主主义革命理论",
    "difficulty": 1,
    "question": "在新民主主义革命时期，以毛泽东同志为主要代表的中国共产党人，把马克思列宁主义基本原理同中国具体实际结合起来，对经过艰苦探索、付出巨大牺牲积累的一系列独创性经验作了理论概括，开辟了( )的正确革命道路。",
    "options": [
      "独立自主",
      "武装夺取政权",
      "统一战线",
      "农村包围城市"
    ],
    "answer": [
      1,
      3
    ],
    "explanation": ""
  },
  {
    "id": "mg_12",
    "type": "multiple",
    "subject": "毛概",
    "category": "多选题",
    "difficulty": 1,
    "question": "坚持和发展马克思主义，必须同中国具体实际相结合，着眼解决革命、建设、改革中的实际问题，不断回答( )，作出符合中国实际和时代要求的正确回答，得出符合客观规律的科学认识，形成与时俱进的理论成果，更好指导中国实践。",
    "options": [
      "世界之问",
      "时代之问",
      "中国之问",
      "人民之问"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": ""
  },
  {
    "id": "mg_13",
    "type": "multiple",
    "subject": "毛概",
    "category": "马克思主义中国化时代化",
    "difficulty": 1,
    "question": "准确把握马克思主义中国化时代化的科学内涵，要做    与    相统一。",
    "options": [
      "坚持马克思主义",
      "体现马克思主义",
      "照搬马克思主义",
      "发展马克思主义"
    ],
    "answer": [
      0,
      3
    ],
    "explanation": ""
  },
  {
    "id": "mg_14",
    "type": "multiple",
    "subject": "毛概",
    "category": "邓小平理论",
    "difficulty": 1,
    "question": "中国共产党高举中国特色社会主义伟大旗帜，团结带领中国人民，解放思想、锐意进取，创造了改革开放和社会主义现代化建设的伟大成就，我国",
    "options": [
      "实现了从生产力相对落后的状况到经济总量跃居世界第二的历史性突破",
      "实现了人民生活从温饱不足到总体小康、奔向全面小康的历史性跨越",
      "为实现中华民族伟大复兴提供了充满新的活力的体制保证和快速发展的物质条件",
      "推进了中华民族从站起来到富起来的伟大飞跃"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": ""
  },
  {
    "id": "mg_15",
    "type": "multiple",
    "subject": "毛概",
    "category": "多选题",
    "difficulty": 1,
    "question": "坚持马克思主义，最重要的是坚持马克思主义基本原理和贯穿其中的( )，坚定不移坚持马克思主义指导地位，任何时候任何情况下都不动摇。",
    "options": [
      "立场",
      "观点",
      "方法",
      "规则"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": ""
  },
  {
    "id": "mg_16",
    "type": "judge",
    "subject": "毛概",
    "category": "马克思主义中国化时代化",
    "difficulty": 1,
    "question": "第一次提出“马克思主义中国化”命题的会议是1938年党的六届六中全会。",
    "options": [
      "对",
      "错"
    ],
    "answer": [
      0
    ],
    "explanation": ""
  },
  {
    "id": "mg_17",
    "type": "judge",
    "subject": "毛概",
    "category": "邓小平理论",
    "difficulty": 1,
    "question": "中共十一届三中全会的召开，实现了新中国成立以来党的历史上具有深远意义的伟大转折，开启了改革开放和社会主义现代化建设历史新时期。",
    "options": [
      "对",
      "错"
    ],
    "answer": [
      0
    ],
    "explanation": ""
  },
  {
    "id": "mg_18",
    "type": "judge",
    "subject": "毛概",
    "category": "马克思主义中国化时代化",
    "difficulty": 1,
    "question": "历史和现实反复证明,马克思主义只有中国化时代化才能在中国大地上闪耀真理光芒,也只有实现中国化时代化才能救中国、发展中国,才能实现中华民族的伟大复兴。",
    "options": [
      "对",
      "错"
    ],
    "answer": [
      0
    ],
    "explanation": ""
  },
  {
    "id": "mg_19",
    "type": "judge",
    "subject": "毛概",
    "category": "判断题",
    "difficulty": 1,
    "question": "中国共产党从成立之日起，就明确把马克思列宁主义确立为指导思想。",
    "options": [
      "对",
      "错"
    ],
    "answer": [
      0
    ],
    "explanation": ""
  },
  {
    "id": "mg_20",
    "type": "judge",
    "subject": "毛概",
    "category": "判断题",
    "difficulty": 1,
    "question": "1945年，在党的七大上，毛泽东代表党中央作了《改造我们的学习》。",
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": ""
  },
  {
    "id": "mg_21",
    "type": "judge",
    "subject": "毛概",
    "category": "马克思主义中国化时代化",
    "difficulty": 1,
    "question": "习近平总书记深刻指出,“马克思主义之所以行,就在于党不断推进马克思主义中国化时代化并用以指导实践”。",
    "options": [
      "对",
      "错"
    ],
    "answer": [
      0
    ],
    "explanation": ""
  },
  {
    "id": "mg_22",
    "type": "judge",
    "subject": "毛概",
    "category": "马克思主义中国化时代化",
    "difficulty": 1,
    "question": "2021年，党的十九届六中全会通过的《中共中央关于党的百年奋斗重大成就和历史经验的决议》总结了百年来中国共产党推进马克思主义中国化时代化的重大成就，阐释了马克思主义中国化时代化的重大历史意义。",
    "options": [
      "对",
      "错"
    ],
    "answer": [
      0
    ],
    "explanation": ""
  },
  {
    "id": "mg_23",
    "type": "judge",
    "subject": "毛概",
    "category": "马克思主义中国化时代化",
    "difficulty": 1,
    "question": "党的二十大明确把“不断谱写马克思主义中国化时代化新篇章”作为当代中国共产党人的庄严历史责任，并提出了继续推进马克思主义中国化时代化的新要求。",
    "options": [
      "对",
      "错"
    ],
    "answer": [
      0
    ],
    "explanation": ""
  },
  {
    "id": "mg_24",
    "type": "judge",
    "subject": "毛概",
    "category": "马克思主义中国化时代化",
    "difficulty": 1,
    "question": "推进马克思主义中国化时代化，是马克思主义理论本身发展的内在要求。",
    "options": [
      "对",
      "错"
    ],
    "answer": [
      0
    ],
    "explanation": ""
  },
  {
    "id": "mg_25",
    "type": "judge",
    "subject": "毛概",
    "category": "马克思主义中国化时代化",
    "difficulty": 1,
    "question": "推进马克思主义中国化时代化，是解决中国实际问题的客观需要。",
    "options": [
      "对",
      "错"
    ],
    "answer": [
      0
    ],
    "explanation": ""
  },
  {
    "id": "mg_26",
    "type": "single",
    "subject": "毛概",
    "category": "单选题",
    "difficulty": 1,
    "question": "( )给中国送来了马克思列宁主义，给苦苦探寻救亡图存出路的中国人民指明了前进方向、提供了全新选择。",
    "options": [
      "五四运动",
      "新文化运动",
      "十月革命",
      "鸦片战争"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "id": "mg_27",
    "type": "single",
    "subject": "毛概",
    "category": "单选题",
    "difficulty": 1,
    "question": "中国共产党从成立之日起，就明确把( )确立为指导思想。",
    "options": [
      "邓小平理论",
      "“三个代表”重要思想",
      "马克思列宁主义",
      "毛泽东思想"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "id": "mg_28",
    "type": "single",
    "subject": "毛概",
    "category": "毛泽东思想",
    "difficulty": 1,
    "question": "1945年，在党的七大上，( )代表党中央作了《关于修改党章的报告》，对马克思主义中国化从理论上作了进一步的阐述，并指出毛泽东思想是“中国化的马克思主义”。",
    "options": [
      "任弼时",
      "周恩来",
      "毛泽东",
      "刘少奇"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "id": "mg_29",
    "type": "single",
    "subject": "毛概",
    "category": "单选题",
    "difficulty": 1,
    "question": "1938年，毛泽东在党的六届六中全会上作了《论新阶段》的报告，强调:“没有抽象的马克思主义，只有具体的马克思主义。……马克思主义的中国化，使之在其每一表现中带着中国的特性，即是说，按照中国的特点去应用它，成为全党亟待了解并亟须解决的问题。”这标志着( )这一命题的正式提出。",
    "options": [
      "新民主主义革命理论",
      "新民主主义革命路线",
      "毛泽东思想",
      "马克思主义中国化"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "id": "mg_30",
    "type": "single",
    "subject": "毛概",
    "category": "单选题",
    "difficulty": 1,
    "question": "党的十八大以来，以习近平同志为核心的党中央明确提出要不断推进( )。",
    "options": [
      "马克思主义中国化时代化",
      "“两个结合”",
      "社会主义现代化",
      "社会主义现代化强国"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "id": "mg_31",
    "type": "single",
    "subject": "毛概",
    "category": "马克思主义中国化时代化",
    "difficulty": 1,
    "question": "2021年，党的( )通过的《中共中央关于党的百年奋斗重大成就和历史经验的决议》总结了百年来中国共产党推进马克思主义中国化时代化的重大成就，阐释了马克思主义中国化时代化的重大历史意义。",
    "options": [
      "党的十八大",
      "党的十九届六中全会",
      "党的十八届三中全会",
      "党的十九大"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "id": "mg_32",
    "type": "single",
    "subject": "毛概",
    "category": "马克思主义中国化时代化",
    "difficulty": 1,
    "question": "( )明确把“不断谱写马克思主义中国化时代化新篇章”作为当代中国共产党人的庄严历史责任，并提出了继续推进马克思主义中国化时代化的新要求。",
    "options": [
      "党的十七大",
      "党的二十大",
      "党的十八大",
      "党的十九大"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "id": "mg_33",
    "type": "single",
    "subject": "毛概",
    "category": "马克思主义中国化时代化",
    "difficulty": 1,
    "question": "把马克思主义基本原理同中国具体实际相结合、同中华优秀传统文化相结合，也就是如何实现马克思主义( )的问题。",
    "options": [
      "中国化现代化",
      "时代化",
      "中国化时代化",
      "中国化大众化"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "id": "mg_34",
    "type": "single",
    "subject": "毛概",
    "category": "马克思主义中国化时代化",
    "difficulty": 1,
    "question": "( )是马克思主义中国化时代化的第一次历史性飞跃。",
    "options": [
      "邓小平理论",
      "毛泽东思想",
      "“三个代表”重要思想",
      "科学发展观"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "id": "mg_35",
    "type": "single",
    "subject": "毛概",
    "category": "马克思主义中国化时代化",
    "difficulty": 1,
    "question": "马克思主义中国化时代化的理论成果是一脉相承又( )的关系。",
    "options": [
      "独立自主",
      "与时俱进",
      "精益求精",
      "实事求是"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "id": "mg_36",
    "type": "single",
    "subject": "毛概",
    "category": "单选题",
    "difficulty": 1,
    "question": "正是由于中国共产党坚持( )的思想路线，才能够在实践中开创中国特色社会主义道路，形成中国特色社会主义理论体系。",
    "options": [
      "党的建设",
      "实事求是",
      "与时俱进",
      "统一战线"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "id": "mg_37",
    "type": "single",
    "subject": "毛概",
    "category": "单选题",
    "difficulty": 1,
    "question": "( )是中国特色社会主义理论体系的开篇之作。",
    "options": [
      "科学发展观",
      "毛泽东思想",
      "“三个代表”重要思想",
      "邓小平理论"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "id": "mg_38",
    "type": "single",
    "subject": "毛概",
    "category": "马克思主义中国化时代化",
    "difficulty": 1,
    "question": "在( )，中国共产党坚持以理论创新引领事业发展，从新的实践和时代特征出发坚持和发展马克思主义，科学回答了建设中国特色社会主义的发展道路、发展阶段、根本任务、发展动力、发展战略等一系列基本问题，形成中国特色社会主义理论体系，实现了马克思主义中国化时代化新的飞跃。",
    "options": [
      "社会主义现代化建设新时期",
      "改革开放和社会主义现代化建设新时期",
      "改革开放",
      "社会主义建设时期"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "id": "mg_39",
    "type": "single",
    "subject": "毛概",
    "category": "单选题",
    "difficulty": 1,
    "question": "社会主义民主政治的本质要求是( )。",
    "options": [
      "人民当家作主",
      "依法治国",
      "坚持党的领导",
      "实行改革开放"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "id": "mg_40",
    "type": "single",
    "subject": "毛概",
    "category": "马克思主义中国化时代化",
    "difficulty": 1,
    "question": "实践证明，中国共产党为什么能，中国特色社会主义为什么好，归根到底是中国化时代化的( )。",
    "options": [
      "社会主义行",
      "马克思主义行",
      "社会主义好",
      "马克思主义好"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "id": "mg_41",
    "type": "single",
    "subject": "毛概",
    "category": "单选题",
    "difficulty": 1,
    "question": "中国特色社会主义理论体系始终坚持将( )作为根本工作路线。",
    "options": [
      "与时俱进",
      "独立自主",
      "实事求是",
      "群众路线"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "id": "mg_42",
    "type": "single",
    "subject": "毛概",
    "category": "毛泽东思想",
    "difficulty": 1,
    "question": "毛泽东思想形成的时代条件是( )。",
    "options": [
      "1927年以后中国共产党独立担负起领导中国革命的重任",
      "1919年以后中国革命进入新民主主义革命时期",
      "19世纪末20世纪初，世界进入帝国主义和无产阶级革命时代",
      "1840年以后中国成为一个半殖民地半封建社会"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "id": "mg_43",
    "type": "single",
    "subject": "毛概",
    "category": "单选题",
    "difficulty": 1,
    "question": "党的( )提出了“中国特色社会主义理论体系”的科学概念。",
    "options": [
      "十九大",
      "十七大",
      "十八大",
      "二十大"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "id": "mg_44",
    "type": "single",
    "subject": "毛概",
    "category": "单选题",
    "difficulty": 1,
    "question": "毛泽东创造性地理论与实践的相结合、自我批评、( )的中国共产党三大工作作风。",
    "options": [
      "艰苦奋斗",
      "惩前毖后、治病救人",
      "谦虚谨慎、不骄不躁",
      "和人民群众紧密地联系在一起"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "id": "mg_45",
    "type": "single",
    "subject": "毛概",
    "category": "毛泽东思想",
    "difficulty": 1,
    "question": "中共十一届三中全会以后，对毛泽东和毛泽东思想的历史地位作出科学的、实事求是的评价的历史文献是( )。",
    "options": [
      "《中国共产党中央委员会关于建国以来党的若干历史问题的决议》",
      "《关于若干历史问题的决议》",
      "《解放思想，实事求是，团结一致向前看》",
      "《中共中央关于党的百年奋斗重大成就和历史经验的决议》"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "id": "mg2_100",
    "type": "single",
    "answer": 3,
    "options": [
      "èµæ¬ä¸»ä¹ç¤¾ä¼",
      "æ°æ°ä¸»ä¸»ä¹ç¤¾ä¼",
      "åæ®æ°å°ç¤¾ä¼",
      "åæ®æ°å°åå°å»ºç¤¾ä¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "1840å¹´é¸¦çæäºä»¥åï¼ç±äºè¥¿æ¹åå¼ºçå¥ä¾µåå°å»ºç»æ²»çèè´¥ï¼ä¸­å½éæ­¥æä¸º( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_101",
    "type": "single",
    "answer": 3,
    "options": [
      "âä¸æ­è°±åé©¬åæä¸»ä¹æ°ç¯ç« â",
      "âä¸æ­è°±åé©¬åæä¸»ä¹æ¶ä»£åæ°ç¯ç« â",
      "âä¸æ­è°±åé©¬åæä¸»ä¹ä¸­å½åæ°ç¯ç« â",
      "âä¸æ­è°±åé©¬åæä¸»ä¹ä¸­å½åæ¶ä»£åæ°ç¯ç« â"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "åçäºåå¤§æç¡®æ( )ä½ä¸ºå½ä»£ä¸­å½å±äº§åäººçåºä¸¥åå²è´£ä»»ï¼å¹¶æåºäºç»§ç»­æ¨è¿é©¬åæä¸»ä¹ä¸­å½åæ¶ä»£åçæ°è¦æ±ã",
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
    "category": "单选题",
    "question": "( )å¹´å¬å¼çåçåä¸å±ä¸ä¸­å¨ä¼ï¼å®ç°äºæ°ä¸­å½æç«ä»¥æ¥åçåå²ä¸å·ææ·±è¿æä¹çä¼å¤§è½¬æï¼å¼å¯äºæ¹é©å¼æ¾åç¤¾ä¼ä¸»ä¹ç°ä»£åå»ºè®¾åå²æ°æ¶æã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_103",
    "type": "single",
    "answer": 1,
    "options": [
      "åæé©å½",
      "äºåè¿å¨",
      "é¸¦çæäº",
      "æ°æåè¿å¨"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "1919å¹´( )ä¿è¿äºé©¬åæä¸»ä¹å¨ä¸­å½çå¹¿æ³ä¼ æ­ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_104",
    "type": "single",
    "answer": 3,
    "options": [
      "ä¸­åï¿½ï¿½ï¿½æ",
      "ä¸­å½è¿ç°ä»£",
      "ä¸­å½",
      "ä¸­å½å±äº§å"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "( )çåå²ï¼æ¯ä¸é¨ä¸æ­æ¨è¿é©¬åæä¸»ä¹ä¸­å½åæ¶ä»£åçåå²ï¼æ¯ä¸é¨ä¸æ­æ¨è¿çè®ºåæ°ãè¿è¡çè®ºåé çåå²ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_105",
    "type": "single",
    "answer": 0,
    "options": [
      "ç¤¾ä¼ä¸»ä¹é©å½åå»ºè®¾",
      "æ°æ°ä¸»ä¸»ä¹é©å½",
      "ææ¥æäº",
      "ç¤¾ä¼ä¸»ä¹æ¹é "
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "å¨( )æ¶æï¼ä»¥æ¯æ³½ä¸åå¿ä¸ºä¸»è¦ä»£è¡¨çä¸­å½å±äº§åäººï¼æåºæé©¬åæåå®ä¸»ä¹åºæ¬åçåä¸­å½å·ä½å®éè¿è¡âç¬¬äºæ¬¡ç»åâï¼æåºäºå³äºç¤¾ä¼ä¸»ä¹å»ºè®¾çä¸ç³»åéè¦ææ³ï¼ç»åæ°çå®éä¸°å¯ååå±äºæ¯æ³½ä¸ææ³ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_106",
    "type": "single",
    "answer": 2,
    "options": [
      "æ¿ç­åç­ç¥ççè®º",
      "æ¹é©å¼æ¾çè®º",
      "ç¤¾ä¼ä¸»ä¹é©å½ä¸ç¤¾ä¼ä¸»ä¹å»ºè®¾çè®º",
      "é©å½åéå»ºè®¾ååäºæç¥çè®º"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æ¯æ³½ä¸ææ³ä¸­å³äºæé©¬åæä¸»ä¹åºæ¬åçåä¸­å½å·ä½å®éè¿è¡âç¬¬äºæ¬¡ç»åâççï¿½ï¿½ï¿½æçæ¯( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_107",
    "type": "single",
    "answer": 0,
    "options": [
      "éµä¹ä¼è®®ä»¥å",
      "ç¬¬ä¸æ¬¡å½åé©å½æäºæ¶æ",
      "ææ¥æäºä»¥å",
      "è§£æ¾ï¿½ï¿½äºä»¥å"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æ¯æ³½ä¸ææ³å¾å°å¤æ¹é¢å±å¼èè¶äºæçæ¯( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_108",
    "type": "single",
    "answer": 1,
    "options": [
      "å¯åèç³»ç¾¤ä¼",
      "åå¯¹åéç»å¯¹é¢å¯¼",
      "çè®ºèç³»å®é",
      "è°è¦å¥æ"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "å¨é©å½åéå»ºè®¾ååäºæç¥ççè®ºä¸­ï¼æ¯æ³½ä¸è§å®äº( )çååï¼å¼ºè°å¨å¿å¨æä¸ºäººæ°æå¡æ¯äººæ°åéçå¯ä¸å®æ¨ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_109",
    "type": "single",
    "answer": 0,
    "options": [
      "è°è¦å¥æ",
      "å®äºæ±æ¯",
      "ç¬ç«èªä¸»",
      "å¯åèç³»ç¾¤ä¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "ä¸­åäººæ°å±åå½æç«ååï¼æ¯æ³½ä¸å¤æ¬¡æåºå¡å¿ä½¿åå¿ä»¬ç»§ç»­å°ä¿æè°¦èãè°¨æãä¸éªãä¸èºçä½é£ï¼å¡å¿ä½¿åå¿ä»¬ç»§ç»­å°ä¿æ( )çä½é£;è¦æ±å¨åè­¦æèµäº§é¶çº§ææ³çä¾µèï¼åå¯¹è±ç¦»ç¾¤ä¼çå®åä¸»ä¹ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_110",
    "type": "single",
    "answer": 0,
    "options": [
      "å¨å¿å¨æä¸ºäººæ°æå¡",
      "åé¢å¯¼ä¸å",
      "å®äºæ±æ¯",
      "ç¬ç«èªä¸»"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æ¯æ³½ä¸æåº:âä¸ºä»ä¹äººçé®é¢ï¼æ¯ä¸ä¸ªæ ¹æ¬çé®é¢ï¼ååçé®é¢âï¼å¼ºè°( )ï¼å¯¹é©å½å·¥ä½è¦æç«¯è´è´£ï¼è¦è°ï¿½ï¿½ï¿½å¥æåä¸æçºç²ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_111",
    "type": "single",
    "answer": 0,
    "options": [
      "é©¬åæä¸»ä¹ä¸­å½åæ¶ä»£å",
      "é©¬åæä¸»ä¹æ¶ä»£å",
      "é©¬åæä¸»ä¹ä¸­å½å",
      "é©¬åæä¸»ä¹"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æ¯æ³½ä¸æ¯( )çä¼å¤§å¼æèï¼æ¯æ¯æ³½ä¸ææ³çä¸»è¦åç«èã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_112",
    "type": "single",
    "answer": 3,
    "options": [
      "å¢ç»-æ¹è¯-å¢ç»",
      "ç»ç­¹å¼é¡¾ãéå½å®æ",
      "é¿æå±å­ãäºç¸çç£",
      "ç¾è±é½æ¾ãï¿½ï¿½å®¶äºé¸£"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æ¯æ³½ä¸è®¤ä¸ºå¨ç§å­¦æåé¢åè¦å®è¡( )æ¹éã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_113",
    "type": "single",
    "answer": 3,
    "options": [
      "ç¾¤ä¼è·¯çº¿",
      "æ­¦è£æäº",
      "ç¬ç«èªä¸»",
      "å®äºæ±æ¯"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æ¯æ³½ä¸ææ³çç²¾é«æ¯( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_114",
    "type": "single",
    "answer": 3,
    "options": [
      "ä½é£",
      "å¶åº¦",
      "ç»ç»",
      "ææ³"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æ¯æ³½ä¸ææ³ï¿½ï¿½ï¿½å³äºåçå»ºè®¾çè®ºç¹å«éè§åç( )å»ºè®¾ã",
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
      "ãäºåå±±çæäºã",
      "ãææä¹ç«å¯ä»¥çåã",
      "ãè®ºåå¤§å³ç³»ã",
      "ãåï¿½ï¿½ï¿½æ¬æ¬ä¸»ä¹ã"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "ä»¥ä¸èä½ä¸­å±äºæ¯æ³½ä¸ææ³åæ­¥å½¢æé¶æ®µçä»£è¡¨ä½æ¯( )ã",
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
      "ç¤¾ä¼ä¸»ä¹é©å½åç¤¾ä¼ä¸»ä¹å»ºè®¾çè®º",
      "æ¿ç­åç­ç¥çè®º",
      "æ°æ°ä¸»ä¸»ä¹é©å½çè®º",
      "é©å½åéå»ºè®¾ååäºæç¥çè®º"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "ä¸åéé¡¹ä¸­å±äºæ¯æ³½ä¸ææ³ä¸»è¦åå®¹çæ¯( )ã",
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
      "å®äºæ±æ¯",
      "åçå»ºè®¾",
      "ç¬ç«èªä¸»",
      "ç¾¤ä¼è·¯çº¿"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "è´¯ç©¿äºæ¯æ³½ä¸ææ³çæ´»ççµé­æ¯( )ã",
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
      "æ·±å¥å®éäºè§£äºç©çæ¬æ¥é¢è²ï¼ææ¡äºç©åå¨å¿ç¶èç³»ï¼æç§å®¢è§è§å¾åäºã",
      "ä¸åä¾é ç¾¤ä¼ï¼ä¸åä¸ºäºç¾¤ä¼ã",
      "ä¸æ­æ¨è¿å®è·µåºç¡ä¸ççè®ºåæ°ã",
      "æ¸éè®¤è¯ï¿½ï¿½ï¿½æ­£ç¡®ææ¡æå½åºæ¬å½æã"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "åæå®äºæ±æ¯ï¼å°±è¦( )ã",
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
      "åæååå±é©¬åæä¸»ä¹ã",
      "åæå¨ï¿½ï¿½ï¿½å¨æä¸ºäººæ°æå¡çæ ¹æ¬å®æ¨ã",
      "ä¿æååäººæ°çè¡èèç³»ã",
      "åæäººæ°ç¾¤ä¼æ¯æ¨å¨åå²åå±çæ ¹æ¬åéã"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "åæç¾¤ä¼è·¯çº¿ï¼å°±è¦( )ã",
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
      "åæç¾¤ä¼è·¯çº¿ï¼å°±è¦åæå¨å¿å¨æä¸ºäººæ°æå¡çæ ¹æ¬å®æ¨ã",
      "æ¬è´¨ä¸ä½ç°çæ¯é©¬åæä¸»ä¹å³äºäººæ°ç¾¤ä¼æ¯åå²çåé èè¿ä¸åºæ¬åçã",
      "æ¯æä»¬åççå½çº¿åæ ¹æ¬å·¥ä½è·¯çº¿ï¼æ¯æä»¬åæ°¸èéæ¥æ´»ååææåçéè¦ä¼ å®¶å®ã",
      "æ¯ä¸åä¸ºäºç¾¤ä¼ï¼ä¸åä¾é ç¾¤ä¼ï¼ä»ç¾¤ä¼ä¸­æ¥ï¼å°ç¾¤ä¼ä¸­å»ï¼æåçæ­£ç¡®ä¸»å¼ åæç¾¤ä¼çèªè§è¡å¨ã"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "å³äºç¾¤ä¼è·¯çº¿ï¼ä¸åè¯´æ³æ­£ç¡®çæ¯( )ã",
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
      "æ¯æ¯æ³½ä¸ä¸ä¸ªäººçææ³ä½ç°",
      "ä¸­å½å±äº§åéä½æºæ§çç»æ¶",
      "è¢«å®è·µè¯ææ¯æ­£ç¡®çä¸­å½é©å½åå»ºè®¾çï¿½ï¿½è®ºåååç»éªæ»ç»",
      "é©¬åæåå®ä¸»ä¹å¨ä¸­å½çåå±åè¿ç¨"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æ¯æ³½ä¸ææ³ä½ä¸ºé©¬åæä¸»ä¹ä¸­å½åæ¶ä»£åç¬¬ä¸ä¸ªçè®ºææï¼å®æ¯( )ã",
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
      "ç¤¾ä¼ä¸»ä¹æ¹é ",
      "ææ³å»ºå",
      "ç¤¾ä¼ä¸»ä¹å·¥ä¸å",
      "çè®ºå¼ºå"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æ°æ°ä¸»ä¸»ä¹é©å½èå©åï¼æ¯æ³½ä¸é¢å¯¼æä»¬åï¼ä¾æ®æ°æ°ä¸»ä¸»ä¹é©å½èå©æåé çåç¤¾ä¼ä¸»ä¹è¿æ¸¡çç»æµæ¿æ²»æ¡ä»¶ï¼éå( )å¹¶ä¸¾çæ¹éï¼å®è¡éæ­¥æ¹é çäº§èµæç§æå¶çå·ä½æ¿ç­ã",
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
      "èªææ¹è¯",
      "çè®ºåå®è·µç¸ç»å",
      "åäººæ°ç¾¤ä¼ç´§å¯å°èç³»å¨ä¸èµ·",
      "å®äºæ±æ¯"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æ¯æ³½ä¸æåº( )çä½é£ï¼æ¯ä¸­å½å±äº§ååºå«äºå¶ä»ä»»ä½æ¿åçæ¾èæ å¿ã",
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
      "åçå»ºè®¾",
      "ç¬ç«èªä¸»",
      "ç»ä¸æçº¿",
      "æ­¦è£æäº"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æ¯æ³½ä¸æåºï¼ä¸­å½å±äº§åå¨ä¸­å½é©å½ä¸­æèæäººçä¸å¤§æ³å®æ¯( )ã",
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
      "äºæåï¼è¥¿æ¹å½å®¶å¯¹æå½å®ç°æç»­çå°éç¦è¿ï¼æ¨è¡åå¹³æ¼åæç¥",
      "åæé©å½å¼è¾äºä¸çæ äº§é¶çº§ç¤¾ä¼ä¸»ä¹é©å½çæ°æ¶ä»£",
      "ä¸­å½å±äº§åé¢å¯¼äººæ°è¿è¡é©å½åå»ºè®¾çæåå®è·µ",
      "èå±åå±äº§å½éçå¸®å©"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æ¯æ³½ä¸ææ³å½¢æååå±çåå²æ¡ä»¶åæ¬( )ã",
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
      "æ°æ°ä¸»ä¸»ä¹é©å½",
      "ç¤¾ä¼ä¸»ä¹å»ºè®¾",
      "ç¤¾ä¼ä¸»ä¹é©å½",
      "ç¤¾ä¼ä¸»ä¹æ¹é©"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æ¯æ³½ä¸ææ³æ¯å¨æå½( )çå®è·µè¿ç¨ä¸­ï¼å¨æ»ç»æå½é©å½åå»ºè®¾æ­£åä¸¤æ¹é¢åå²ç»éªçåºç¡ä¸ï¼éæ­¥å½¢æååå±èµ·æ¥çã",
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
      "äºå®ä¸ç¡®ç«äºæ¯æ³½ä¸å¨åä¸­å¤®åçº¢åçé¢å¯¼å°ä½",
      "å¼å¯äºæä»¬åç¬ç«èªä¸»è§£å³ä¸­å½é©å½å®éé®é¢çæ°é¶æ®µ",
      "å¼å§ç¡®ç«äºä»¥æ¯æ³½ä¸ä¸ºä¸»è¦ä»£è¡¨çé©¬åæä¸»ä¹æ­£ç¡®è·¯çº¿å¨åä¸­å¤®çé¢å¯¼å°ä½",
      "å¨æå±æ¥å³å¤´æ½æäºåãæ½æäºçº¢åãæ½æäºä¸­å½é©å½"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "éµä¹ä¼è®®ï¿½ï¿½æä¹å¨äº( )ã",
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
      "äººæ°æ¥çå¢é¿çç©è´¨æåéè¦åè½åçç¤¾ä¼çäº§ä¹é´ççç¾",
      "äººæ°åé¨ççç¾",
      "ä¸å±å»ºç­åç»æµåºç¡ä¹é´ççç¾",
      "çäº§å³ç³»åçï¿½ï¿½ï¿½åççç¾"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "å¨ç¤¾ä¼ä¸»ä¹å¶åº¦å»ºç«ä»¥åï¼æ¯æ³½ä¸åé¢å¯¼å¨ååå¨å½äººæ°ç§¯ææ¢ç´¢éåä¸­å½å½æçç¤¾ä¼ä¸»ä¹å»ºè®¾éè·¯ï¼æåºç¤¾ä¼ä¸»ä¹ç¤¾ä¼ä»ç¶å­å¨ççç¾ï¼åºæ¬ççç¾æ¯( )ã",
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
      "å¨ç»æµå·¥ä½ä»¥åå¶ä»åé¡¹å·¥ä½ä¸­å®è¡âç»ç­¹å¼é¡¾ãéå½å®æâ",
      "å¨åä¸æ°ä¸»åæ´¾çå³ç³»ä¸å®ç°âé¿æå±å­ãäºç¸çç£â",
      "å¨ç§å­¦æåå·¥ä½ä¸­å®ç°âç¾è±é½æ¾ãç¾å®¶äºé¸£â",
      "äººæ°åé¨è¦å¨æ¿æ²»ä¸å®ç°âå¢ç»-æ¹è¯-å¢ç»â"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "å¨ç¤¾ä¼ä¸»ä¹å¶åº¦å»ºç«ä»¥åï¼æ¯æ³½ä¸åé¢å¯¼å¨ååå¨å½äººæ°ç§¯ææ¢ç´¢éåä¸­å½å½æçç¤¾ä¼ä¸»ä¹å»ºè®¾éè·¯ï¼æåºäºä¸ç³»åå·ææç¥æä¹çæ­£ç¡®ææ³åæ¹éï¼åæ¬( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_141",
    "type": "single",
    "answer": 3,
    "options": [
      "å®äºæ±æ¯ãç¾¤ä¼è·¯çº¿ãç¬ç«èªä¸»",
      "çè®ºä¸å®è·µç¸ç»ï¿½ï¿½ãå¯åèç³»ç¾¤ä¼ãèªææ¹è¯",
      "æ­¦è£æäºãåå°é©å½ãæ ¹æ®å°å»ºè®¾",
      "ç»ä¸æçº¿ãæ­¦è£æäºãåçå»ºè®¾"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æ°æ°ä¸»ä¸»ä¹é©å½ä¸­æèæäººçä¸å¤§æ³å®æ¯( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_142",
    "type": "single",
    "answer": 2,
    "options": [
      "éå°æ",
      "è¿å¨æ",
      "æ¸¸å»æ",
      "æä¹æ"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æ¯æ³½ä¸çåäºçè®ºæ( )æå°äºæç¥çå°ä½ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_143",
    "type": "single",
    "answer": 0,
    "options": [
      "ä¸æ¹¾æ¹ç¼",
      "äºåå±±ä¼å¸",
      "å·¥åæ­¦è£å²æ®",
      "ä¸­å±å­å¤§"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "1927å¹´9æè³10æï¼( )ä»ç»ç»ä¸ç¡®ç«äºåå¯¹åéçé¢å¯¼ï¼æ¯å»ºè®¾æ äº§é¶çº§é¢å¯¼çæ°åäººæ°åéçéè¦å¼ç«¯ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_144",
    "type": "single",
    "answer": 0,
    "options": [
      "ææ³æ¿æ²»å·¥ä½æ¯ç»æµå·¥ä½åå¶ä»ä¸åå·¥ä½ççå½çº¿",
      "ç»æµå·¥ä½æ¯ææ³æ¿æ²»å·¥ä½åå¶ä»ä¸åå·¥ä½ççå½çº¿",
      "æåå·¥ä½æ¯ç»æµå·¥ä½åå¶ä»ä¸åå·¥ä½ççå½çº¿",
      "æåå·¥ä½æ¯æ¿æ²»å·¥ä½åå¶ä»ä¸åå·¥ä½ççå½çº¿"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "å¨ææ³æ¿æ²»å·¥ä½åæåå·¥ä½æ¹é¢ï¿½ï¿½æ¯æ³½ä¸è®¤ä¸º( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_145",
    "type": "single",
    "answer": 1,
    "options": [
      "å³å¨æ¹é ",
      "æ©åæ¯åãæ²»çæäºº",
      "ä¾æ³åäº",
      "æ äº§é¶çº§ä¸æ¿"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "éï¿½ï¿½åå²ä¸ååæäºä¸­å­å¨è¿çâæ®é·æäºãæ ææå»âçâå·¦âçéè¯¯ï¼æ¯æ³½ä¸æåºçæ­£ç¡®æ¹éæ¯( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_146",
    "type": "single",
    "answer": 2,
    "options": [
      "å¤§é©å½æ¶æï¼æ¯æ³½ä¸ä»¥é©¬åä¸»ä¹ä¸ºæå¯¼ï¼ç»åä¸­å½å·ä½å½æï¼æåºäºæ°æ°ä¸»ä¸»ä¹é©å½çå·ä½ææ³ï¼æ å¿çæ¯æ³½ä¸ææ³åæ­¥å½¢æã",
      "åå°é©å½æäºæ¶æï¼æ¯æ³½ä¸å¨ä¸ç³»åèä½ä¸­éè¿°äºâåæåå´åå¸ï¼æ­¦è£å¤ºåæ¿æâçææ³ï¼æ å¿çæ¯æ³½ä¸ææ³çæçã",
      "éµä¹ä¼è®®ä»¥åï¼æ¯æ³½ä¸ç³»ç»å°æ»ç»äºåé¢å¯¼ä¸­å½é©å½çåå²ç»éªï¼ç³»ç»éè¿°äºæ°æ°ä¸»ä¸»ä¹é©å½çè®ºï¼æ å¿çæ¯æ³½ä¸ææ³å¾å°å¤æ¹é¢çå±å¼èè¶äºæçã",
      "è§£æ¾æäºæ¶æåæ°ä¸­å½æç«åï¼å¨âç¬¬äºæ¬¡ç»åâä¸­å½¢æäºè®¸å¤å³äºç¤¾ä¼ä¸»ä¹é©å½åç¤¾ä¼ä¸»ä¹å»ºè®¾çéè¦ææ³ï¼æ¯æ¯æ³½ä¸ææ³çèè½ã"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "ä»¥ä¸å³äºæ¯æ³½ä¸ææ³å½¢æååå±æ¶æçè¯´æ³æ­£ï¿½ï¿½ï¿½çæ¯( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_147",
    "type": "single",
    "answer": 1,
    "options": [
      "å­¦ä¹ é©¬åæä¸»ä¹",
      "è®¤æ¸ä¸­å½å½æ",
      "æ¨ç¿»å°å»ºä¸»ä¹",
      "æ¨ç¿»å¸å½ä¸»ä¹"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "( )æ¯è§£å³ä¸­å½é©å½é®é¢çåºæ¬åæã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_148",
    "type": "single",
    "answer": 2,
    "options": [
      "å°å»ºç¤¾ä¼",
      "èµæ¬ä¸»ä¹ç¤¾ä¼",
      "åæ®æ°å°åå°å»ºç¤¾ä¼",
      "ç¤¾ä¼ä¸»ä¹ç¤¾ä¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "é¸¦çæäºåï¼ä¸­å½éæ­¥æä¸º( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_149",
    "type": "single",
    "answer": 1,
    "options": [
      "åæ°é¶çº§åå°ä¸»é¶çº§ççç¾",
      "å¸å½ä¸»ä¹åä¸­åæ°æççç¾",
      "å°å»ºä¸»ä¹åäººæ°å¤§ä¼ççç¾",
      "å·¥äººé¶çº§åèµäº§é¶çº§ççç¾"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "å¨åæ®æ°å°åå°å»ºçè¿ä»£ä¸­å½ï¼( )æ¯åç§çç¾ä¸­æä¸»è¦ççç¾ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_150",
    "type": "single",
    "answer": 2,
    "options": [
      "è¾äº¥é©å½",
      "æ°æåè¿å¨",
      "äºåè¿å¨",
      "ä¸­å½å±äº§åæç«"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "ä»¥( )ä¸ºæ å¿ï¼ä¸­å½é©å½è¿å¥æ°æ°ä¸»ä¸»ä¹é©å½é¶æ®µã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_151",
    "type": "single",
    "answer": 3,
    "options": [
      "ï¿½ï¿½ï¿½ç¿»å¸å½ä¸»ä¹",
      "æ¨ç¿»å°å»ºä¸»ä¹",
      "ç¤¾ä¼ä¸»ä¹é©å½",
      "æ°æ°ä¸»ä¸»ä¹é©å½"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "ä¸­å½é©å½åä¸¤æ­¥èµ°ï¼ç¬¬ä¸æ­¥æ¯å®æåå¸åå°å»ºç( )ä»»å¡ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_152",
    "type": "single",
    "answer": 2,
    "options": [
      "å«ä¸ä¼è®®",
      "ç¦çªå ¡ä¼è®®",
      "éµä¹ä¼è®®",
      "ä¸­å±ä¸å¤§"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "( )åï¼åéæ­¥ç¡®ç«äºæ¯æ³½ä¸åå¿å¨åä¸­å¤®åçº¢åçé¢å¯¼å°ä½ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_153",
    "type": "single",
    "answer": 1,
    "options": [
      "é¶çº§çç¾",
      "ä¸­æ¥æ°æçç¾",
      "å¸å½ä¸»ä¹é´ççç¾",
      "ææçç¾"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "ææ¥æäºæ¶æï¼( )éæ¸è¶è¶å½åé¶çº§çç¾ä¸åä¸ºä¸»è¦çç¾ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_154",
    "type": "single",
    "answer": 1,
    "options": [
      "å¢ç»ç¾¤ä¼",
      "åæ¸æå",
      "åå°é©å½",
      "æ¿æé®é¢"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "( )æ¯ä¸­å½é©å½çé¦è¦é®é¢ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_155",
    "type": "single",
    "answer": 0,
    "options": [
      "å¸å½ä¸»ä¹",
      "å°å»ºå°ä¸»",
      "å®åèµæ¬ä¸»ä¹",
      "åæ´åé"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "( )æ¯ä¸­å½é©å½çé¦ï¿½ï¿½å¯¹è±¡ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_156",
    "type": "single",
    "answer": 3,
    "options": [
      "å·¥äºº",
      "åå¸å°èµäº§é¶çº§",
      "æ°æèµäº§é¶çº§",
      "åæ°"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "( )æ¯ä¸­å½é©å½çä¸»ååã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_157",
    "type": "single",
    "answer": 1,
    "options": [
      "åå¸",
      "åæ",
      "å·¥å",
      "åé"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æ¯æ³½ä¸çé¢éä¼å¼èµ´äºåå±±ï¼åå»ºäºäºåå±±é©å½æ ¹æ®å°ï¼ææ­¦è£æäºçä¸»æ»æ¹åé¦åæå( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_158",
    "type": "single",
    "answer": 1,
    "options": [
      "åæåå¯¹åéçç»å¯¹é¢å¯¼",
      "å¨å¿å¨æä¸ºäººæ°æå¡",
      "æ°ä¸»å»ºå",
      "åææ­£ç¡®çæç¥ææ¯"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "äººæ°åéå¿é¡»ä»¥( )ä¸ºå¯ä¸å®æ¨ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_159",
    "type": "single",
    "answer": 0,
    "options": [
      "åæåå¯¹åéçç»å¯¹é¢å¯¼",
      "åæ°ä¸è´",
      "æ°ä¸»å»ºå",
      "å®åµä¸è´"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "( )æ¯å»ºè®¾æ°åäººæ°åéçæ ¹æ¬ååã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_160",
    "type": "single",
    "answer": 0,
    "options": [
      "ææ³å»ºè®¾",
      "ç»ç»å»ºè®¾",
      "ä½é£å»ºè®¾",
      "çï¿½ï¿½ï¿½å»ºè®¾"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "å¿é¡»æ( )å§ç»æ¾å¨åçå»ºè®¾çé¦ä½ã",
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
      "åæ®æ°å°åå°å»ºç¤¾ä¼",
      "èµæ¬ä¸»ä¹åå±å£®å¤§",
      "æåºæ¬çå½æ",
      "å®å¨æ²¦ä¸ºæ®æ°å°å½å®¶"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "é¸¦çæäºåï¼ç±äºè¥¿æ¹åå¼ºå¥ä¾µåå°å»ºç»æ²»èè´¥ï¼ä¸­å½éæ­¥æä¸º    ï¼è¿æ¯è¿ä»£ä¸­å½    ã( )ã",
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
      "å¸å½ä¸»ä¹åä¸­åæ°æççç¾",
      "å°å»ºä¸»ä¹åäººæ°å¤§ä¼ççç¾",
      "èµäº§é¶çº§ä¸åæ°é¶çº§ççç¾",
      "èµäº§é¶çº§åå·¥äººé¶çº§ççç¾"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "å¨åæ®æ°å°åå°å»ºè¿ä»£ä¸­å½ï¼ç¤¾ä¼çç¾åç°åºéç»¼å¤æçç¶åµãå¨è¯¸å¤ç¤¾ä¼çç¾ä¸­ï¼å æ¯éå°ä½çä¸»è¦çç¾æ¯( )ã",
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
      "åé",
      "å®åèµæ¬ä¸»ä¹",
      "å¸å½ä¸»ä¹",
      "å°å»ºä¸»ä¹"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "è¿ä»£ä¸­å½é©å½çæ ¹æ¬ä»»å¡æ¯æ¨ç¿»( )çç»æ²»ã",
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
      "æ äº§é¶çº§é¢ï¿½ï¿½ï¿½ç",
      "äººæ°å¤§ä¼ç",
      "åå¯¹å¸å½ä¸»ä¹ãå°å»ºä¸»ä¹åå®åèµæ¬ä¸»ä¹",
      "æ­¦è£æäºç"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æ¯æ³½ä¸å¨ãå¨æç»¥å¹²é¨ä¼è®®ä¸çè®²è¯ãä¸­å®æ´å°æ»ç»åæ¦æ¬äºæ°æ°ä¸»ä¸»ä¹é©ï¿½ï¿½ï¿½æ»è·¯çº¿çåå®¹ï¼å³( )çé©å½ã",
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
      "æ°æèµäº§é¶çº§",
      "å¸å½ä¸»ä¹",
      "å®åèµæ¬ä¸»ä¹",
      "å°å»ºä¸»ä¹"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "è¿ä»£ä¸­å½ç¤¾ä¼çæ§è´¨åä¸»è¦çç¾ï¼å³å®äºä¸­å½é©å½çä¸»è¦æäººæ¯( )ã",
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
      "åæ°é¶çº§",
      "æ äº§é¶çº§",
      "åå¸å°èµäº§é¶çº§",
      "æ°æèµäº§é¶çº§"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æ°æ°ä¸»ä¸»ä¹é©å½çå¨ååæ¬( )ã",
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
      "æ°æ°ä¸»ä¸»ä¹é©å½å¤äºä¸çæ äº§é¶çº§ç¤¾ä¼ä¸»ä¹é©å½çæ¶ä»£ï¼æ¯ä¸çæ äº§é¶çº§ç¤¾ä¼ä¸»ä¹é©å½çä¸é¨å",
      "é©å½çé¢å¯¼åéæ¯ä¸­å½æ äº§é¶çº§åå¶åééââä¸­å½å±äº§å",
      "é©å½çæå¯¼ææ³æ¯é©¬åæåå®ä¸»ä¹",
      "é©å½çåéæ¯ç¤¾ä¼ä¸»ï¿½ï¿½èä¸æ¯èµæ¬ä¸»ä¹"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æ°æ°ä¸»ä¸»ä¹é©å½ä¸æ§æ°ä¸»ä¸»ä¹é©å½ç¸æ¯ææ°çåå®¹åç¹ç¹ï¼éä¸­è¡¨ç°ä¸º( )ã",
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
      "æ°æ°ä¸»ä¸»ä¹çæ¿æ²»ï¿½ï¿½é¢",
      "æ°æ°ä¸»ä¸»ä¹çæåçº²é¢",
      "æ°æ°ä¸»ä¸»ä¹çç»æµçº²é¢",
      "æ°æ°ä¸»ä¸»ä¹çç¤¾ä¼çº²é¢"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æ°æ°ä¸»ä¸»ä¹çåºæ¬çº²é¢åæ¬çåå®¹æ( )ã",
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
      "åå°é©å½æ¯ä¸­å½é©å½çåºæ¬åå®¹",
      "åå°é©å½æ¯ä¸­å½é©å½çä¸»è¦å½¢å¼",
      "æ­¦è£æäºæ¯ä¸­å½é©å½çä¸»è¦å½¢å¼",
      "åæé©å½æ ¹æ®å°æ¯ä¸­å½é©å½çæç¥éµå°"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æ°æ°ä¸»ä¸»ä¹é©å½éè·¯çåå®¹ä¸»è¦åæ¬( )ã",
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
      "æ²¡æ¶å°å»ºå°ä¸»é¶çº§çåå°å½åæ°ææ",
      "ä¿æ¤æ°æå·¥åä¸",
      "æ²¡æ¶å®åèµäº§é¶çº§çåæ­èµæ¬å½æ°æ°ä¸»ä¸»ä¹çå½å®¶ææ",
      "å¹³åå°æ"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æ°æ°ä¸»ä¸»ä¹çç»æµçº²é¢æ¯( )ã",
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
      "æ äº§é¶çº§é¢å¯¼ç",
      "æ°æç",
      "ç§å­¦ç",
      "å¤§ä¼ç"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æ°æ°ä¸»ä¸»ä¹æåæ¯( )æåã",
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
      "ãäºåå±±çæäºã",
      "ãææä¹ç«ï¼å¯ä»¥çåã",
      "ãä¸­å½ç¤¾ä¼åé¶çº§çåæã",
      "ãä¸­å½ççº¢è²æ¿æä¸ºä»ä¹è½å¤å­å¨?ã"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "å¨é¢å¯¼åæé©å½æ ¹æ®å°çæäºå®è·µä¸­ï¼æ¯æ³½ä¸ç¸ç»§åä¸äº( )ç­æç« ã",
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
      "ç»ä¸æçº¿",
      "ç¬ç«èªä¸»",
      "åçå»ºè®¾",
      "æ­¦è£æäº"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "( )æ¯åå¨ä¸­å½é©å½ä¸­æèæäººçä¸ä¸ªä¸»è¦çæ³å®ã",
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
      "ç¬¬ä¸æ¬¡å½å±åä½ç»ä¸æçº¿",
      "å·¥åæ°ä¸»ç»ä¸æçº¿",
      "ææ¥æ°æç»ä¸æçº¿",
      "äººæ°æ°ä¸»ç»ä¸æçº¿"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æ°æ°ä¸»ä¸»ä¹é©å½æ¶æï¼ä¸­å½å±äº§åé¢å¯¼çç»ä¸æçº¿ï¼ååç»åäº( )ã",
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
      "çè®ºèç³»å®é",
      "å¯åèç³»ç¾¤ä¼",
      "ä¸ºäººæ°æå¡",
      "æ¹è¯ä¸èªææ¹è¯"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "åå¨é¢å¯¼æ°æ°ä¸»ä¸»ä¹é©å½çè¿ç¨ä¸­ï¼å½¢æäº( )ç¸ç»åçä¸å¤§ä¼è¯ä½é£ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_191",
    "type": "single",
    "answer": 2,
    "options": [
      "å¼å¯æ°çºªå",
      "ç¤¾ä¼ä¸»ä¹é©å½èå©",
      "äººæ°è§£æ¾",
      "åå¯¹å¸å½ä¸»ä¹"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "åå¢ç»å¸¦é¢å¨å½äººæ°æµ´è¡å¥æï¼å®æäºæ°æ°ä¸»ä¸»ä¹é©å½ï¼å®ç°äºæ°æç¬ç«ã( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_192",
    "type": "single",
    "answer": 1,
    "options": [
      "åºå®ä¸åçç¤¾ä¼",
      "è¿æ¸¡æ§çç¤¾ä¼å½¢æ",
      "ç¬ç«çç¤¾ä¼å½¢æ",
      "å±äº§ä¸»ä¹ç¤¾ä¼çåçº§é¶æ®µ"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æ°æ°ä¸»ä¸»ä¹ç¤¾ä¼æ¯( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_193",
    "type": "single",
    "answer": 0,
    "options": [
      "ä¸å±äºä¸­å¨ä¼",
      "ä¸å±ä¸ä¸­å¨ä¼",
      "å­å±å­ä¸­å¨ä¼",
      "ä¸å±åä¸­å¨ä¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "1949å¹´3æï¼åç( )æåºäºâä¸¤ä¸ªè½¬åâåæ¶å¹¶ä¸¾çææ³ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_194",
    "type": "single",
    "answer": 0,
    "options": [
      "ç¤¾ä¼ä¸»ä¹å·¥ä¸å",
      "å¯¹åä¸çç¤¾ä¼ä¸»ä¹ï¿½ï¿½é ",
      "å¯¹æå·¥ä¸çç¤¾ä¼ä¸»ä¹æ¹é ",
      "å¯¹èµæ¬ä¸»ä¹å·¥åä¸çç¤¾ä¼ä¸»ä¹æ¹é "
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "è¿æ¸¡æ¶ææ»è·¯çº¿çä¸»è¦åå®¹è¢«æ¦æ¬ä¸ºâä¸åä¸æ¹âãâä¸åâæçæ¯( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_195",
    "type": "single",
    "answer": 3,
    "options": [
      "1955å¹´",
      "1957å¹´",
      "1959å¹´",
      "1956å¹´"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "( )å¹´åºç¤¾ä¼ä¸»ä¹ä¸å¤§æ¹é åºæ¬å®æã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_196",
    "type": "single",
    "answer": 1,
    "options": [
      "ä¾éåä½",
      "åå¹³èµä¹°",
      "ç»éåè´­",
      "å§æå å·¥"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "ä¸­å½å±äº§åæ ¹æ®é©¬åæãæ©æ ¼æ¯ååå®å³äºéç¨åå¹³æ¹å¼åé©ææå¶çè®¾æ³ï¼ç»åä¸­å½çå·ä½æåµï¼æåºäºå¯¹èµæ¬ä¸»ä¹å·¥åä¸å®è¡( )çæ¹éã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_197",
    "type": "single",
    "answer": 2,
    "options": [
      "ä¸ªä½ç»æµ",
      "åä½ç¤¾ç»æµ",
      "å½å®¶èµæ¬ä¸»ä¹",
      "ç§äººèµæ¬ä¸»ä¹"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "èµæ¬ä¸»ä¹å·¥åä¸çç¤¾ä¼ä¸»ä¹æ¹é ï¼éåä»ä½çº§å°é«çº§ç( )çè¿æ¸¡å½¢å¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_198",
    "type": "single",
    "answer": 0,
    "options": [
      "éå·¥ä¸",
      "åä¸",
      "ç¬¬ä¸äº§ä¸",
      "è½»å·¥ï¿½ï¿½"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "ç»è¿âä¸äºâæé´çå¤§è§æ¨¡å»ºè®¾ï¼æå½ä»¥( )ä¸ºéç¹çç¤¾ä¼ï¿½ï¿½ï¿½ä¹å·¥ä¸ååºç¡å·²åæ­¥å»ºç«ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_199",
    "type": "single",
    "answer": 3,
    "options": [
      "ä¸­åäººæ°å±åå½çæç«",
      "å½æ°ç»æµçæ¢å¤ä¸è°æ´",
      "å®æäºèµæ¬ä¸»ä¹å·¥åä¸çç¤¾ä¼ä¸»ä¹æ¹é ",
      "ç¤¾ä¼ä¸»ä¹æ¹é çåºæ¬å®æ"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "ç¤¾ä¼ä¸»ä¹åºæ¬å¶åº¦å¨ä¸­å½ç¡®ç«çä¸»è¦æ å¿æ¯( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_200",
    "type": "single",
    "answer": 1,
    "options": [
      "1956å¹´",
      "1954å¹´",
      "1955å¹´",
      "1960å¹´"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "( )9æï¼ç¬¬ä¸å±å¨å½äººæ°ä»£è¡¨å¤§ä¼çå¬å¼åãä¸­åäººæ°å±åå½å®ªæ³ãçå¶å®åé¢å¸æ½è¡ï¼æä¸ºæå½ç¤¾ä¼ä¸»ä¹æ°ä¸»æ¿æ²»å»ºè®¾çéç¨ç¢ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_201",
    "type": "single",
    "answer": 1,
    "options": [
      "ç¤¾ä¼ä¸»ä¹æ¹é çåºæ¬å®æ",
      "ç¤¾ä¼ä¸»ä¹åºæ¬å¶åº¦çç¡®ç«",
      "å»ºç«äºå·¥åæ¿æ",
      "å»ºç«äºæ°ä¸­å½"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "( )ï¼ä½¿å¹¿å¤§å³å¨äººæ°çæ­£æä¸ºå½å®¶çä¸»äººã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_202",
    "type": "single",
    "answer": 3,
    "options": [
      "åºï¿½ï¿½ï¿½ç¾¤ä¼èªæ²»å¶åº¦",
      "æ°æåºåèªæ²»å¶åº¦",
      "ä¸­å½å±äº§åé¢å¯¼çå¤ååä½åæ¿æ²»ååå¶åº¦",
      "äººæ°ä»£è¡¨å¤§ä¼å¶åº¦"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æå½çæ ¹æ¬æ¿æ²»å¶åº¦æ¯( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_203",
    "type": "single",
    "answer": 2,
    "options": [
      "ç§¯ç´¯ç¤¾ä¼è´¢å¯",
      "æ¹é çäº§å³ç³»",
      "è§£æ¾çäº§å",
      "æ¨è¿å·¥ä¸ååå±"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "ç¤¾ä¼ä¸»ä¹é©å½çç®çæ¯ä¸ºäº( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_204",
    "type": "single",
    "answer": 3,
    "options": [
      "âä¸åä¸æ¹â",
      "âä¸¤åä¸æ¹â",
      "âä¸¤åä¸æ¹â",
      "âä¸åä¸æ¹â"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "åå¨è¿æ¸¡æ¶ææ»è·¯çº¿çä¸»è¦åå®¹è¢«æ¦æ¬ä¸º( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_205",
    "type": "single",
    "answer": 0,
    "options": [
      "èªæ¿äºå©ãå¸åç¤ºèãå½å®¶å¸®å©çåå",
      "ç¨³æ­¥åè¿çåå",
      "è¯´ææè²çåå",
      "ä¾é è´«ä¸ä¸­åå´ååä½ç¤¾çåå"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æå½å¯¹åä¸çç¤¾ä¼ä¸»ä¹æ¹é éµå¾ªçååæ¯( )ã",
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
      "ä¸­å½ç°ä»£å²çå¼å§",
      "åæ®æ°å°ç¤¾ä¼çç»æ",
      "ç¤¾ä¼ä¸»ä¹åºæ¬ï¿½ï¿½åº¦çç¡®ç«",
      "ä¸­å½åå²ä¸é¿è¾¾æ°åå¹´çé¶çº§å¥åå¶åº¦çç»æ"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "ç¤¾ä¼ï¿½ï¿½ï¿½ä¹æ¹é åºæ¬å®æï¼æ å¿ç( )ã",
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
      "åä¸",
      "æå·¥ä¸",
      "èµæ¬ä¸»ä¹æå·¥ä¸",
      "èµæ¬ä¸»ä¹å·¥åä¸"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "âä¸åä¸æ¹âä¸­ï¼âä¸æ¹âæ¯æå¯¹( )çç¤¾ä¼ä¸»ä¹æ¹é ã",
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
      "éæ­¥å®ç°å½å®¶çç¤¾ä¼ä¸»ä¹å·¥ä¸å",
      "éæ­¥å®ç°å½å®¶å¯¹åä¸çç¤¾ä¼ä¸»ä¹æ¹é ",
      "éæ­¥å®ç°å½å®¶å¯¹æå·¥ä¸çç¤¾ä¼ä¸»ä¹æ¹é ",
      "éæ­¥å®ç°å½å®¶å¯¹èµæ¬ä¸»ä¹å·¥åä¸çç¤¾ä¼ä¸»ä¹æ¹é "
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "å³äºè¿æ¸¡æ¶æçæ»è·¯çº¿ï¼è¡¨è¿°æ­£ç¡®çæ¯( )ã",
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
      "æ¯ä¸æ¡ç¤¾ä¼ä¸»ä¹å»ºè®¾åç¤¾ä¼ä¸»ä¹æ¹é åæ¶å¹¶ä¸¾çè·¯çº¿",
      "ä½ç°äºç¤¾ä¼ä¸»ä¹å·¥ä¸ååç¤¾ä¼ä¸»ä¹æ¹é çç´§å¯ç»å",
      "ä½ç°äºè§£æ¾çäº§åä¸åå±çäº§åãåé©çäº§å³ç³»ä¸åå±çäº§åçææºç»ä¸",
      "å¶ä¸»è¦åå®¹è¢«æ¦æ¬ä¸ºâä¸åä¸æ¹â"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "è¿æ¸¡æ¶ææ»è·¯çº¿æ¯( )ã",
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
      "å½å®¶æå¾ç¨",
      "ä¼ä¸å¬ç§¯é",
      "å·¥äººç¦å©è´¹",
      "èµæ¹çº¢å©"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "å¨å¯¹èµæ¬ä¸»ä¹å·¥åä¸çç¤¾ä¼ä¸»ä¹æ¹é ä¸­ï¼å¯¹ä¼ä¸çå©æ¶¦å®è¡âåé©¬åè¥âãâåé©¬âæçæ¯( )ã",
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
      "åæç¤¾ä¼ä¸»ä¹å·¥ä¸åå»ºè®¾ä¸ç¤¾ä¼ä¸»ä¹æ¹é åæ¶å¹¶ä¸¾",
      "éåç§¯æå¼å¯¼ãéæ­¥è¿æ¸¡çæ¹å¼",
      "ç¨åå¹³æ¹æ³è¿è¡æ¹é ",
      "ç¨æ´åæ²¡æ¶çæ¹å¼è¿è¡æ¹é "
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æå½ç¤¾ä¼ä¸»ä¹æ¹é çåå²ç»éªæ( )ã",
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
      "æå¤§å°ä¿è¿äºæå½ç¤¾ä¼çäº§åçåå±",
      "ä¸ºå½ä»£ä¸­å½ä¸ååå±è¿æ­¥å¥ å®äºå¶åº¦åºç¡",
      "æ¯é©¬åæåå®ä¸»ä¹å³äºç¤¾ä¼ä¸»ä¹é©å½çè®ºå¨ä¸­å½çæ­£ç¡®è¿ç¨ååé æ§åå±çç»æ",
      "ä½¿å ä¸çäººå£1/4çä¸æ¹å¤§å½è¿å¥äºç¤¾ä¼ä¸»ä¹ï¼è¿æ¯ä¸çç¤¾ä¼ä¸»ä¹åå±å²ä¸åä¸ä¸ªåå²æ§çä¼å¤§èå©"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "å¨æå½ç¡®ç«ç¤¾ä¼ä¸»ä¹åºæ¬å¶åº¦å·æååéå¤§çæä¹ï¼å ä¸ºç¤¾ä¼ä¸»ä¹åºæ¬å¶åº¦çç¡®ç«( )ã",
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
      "æ°æ°ä¸»ä¸»ä¹ç¤¾ä¼æ¯ä¸ä¸ªè¿æ¸¡æ§çç¤¾ä¼",
      "åå¨è¿æ¸¡æ¶ææ»è·¯çº¿çä¸»è¦åå®¹è¢«æ¦æ¬ä¸ºâä¸åä¸æ¹â",
      "ç¤¾ä¼ä¸»ä¹æ¹é çéè·¯æ¯ç¬¦åä¸­å½ç¹ç¹ç",
      "ä¸­åäººæ°å±åå½çæç«åç¤¾ä¼ä¸»ä¹åºæ¬å¶åº¦çç¡®ç«ï¼æ¯20ä¸çºªä¸­å½ä¸æ¬¡åæ¶ä»£çåå²å·¨å"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "å³äºç¤¾ä¼ä¸»ä¹æ¹é çè®ºï¼ä»¥ä¸è¯´æ³åç¡®çæ( )ã",
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
      "å·©åºäººæ°æ°ä¸»ä¸æ¿",
      "å®ç°å¯¹åä¸çç¤¾ä¼ä¸»ä¹æ¹é ",
      "å®ç°å¯¹æå·¥ä¸çç¤¾ä¼ä¸»ä¹æ¹é ",
      "å®ç°å¯¹èµæ¬ä¸»ä¹å·¥åä¸çç¤¾ä¼ä¸»ä¹æ¹é "
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "è¿æ¸¡æ¶ææ»è·¯çº¿çâä¸¤ç¿¼âæ¯æ( )ã",
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
      "ç±æ°æ°ä¸»ä¸»ä¹åç¤¾ä¼ä¸»ä¹è½¬åçè¿æ¸¡æ§ç¤¾ä¼å½¢æ",
      "ç¬ç«çç¤¾ä¼å½¢æ",
      "å±äºç¤¾ä¼ä¸»ä¹ä½ç³»çï¼æ¯éæ­¥è¿æ¸¡å°ç¤¾ä¼ä¸»ä¹ç¤¾ä¼çè¿æ¸¡æ§è´¨çç¤¾ä¼",
      "æ¢æç¤¾ä¼ä¸»ä¹å ç´ åæéç¤¾ä¼ä¸»ä¹å ç´ å­å¨çç¤¾ä¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æ°æ°ä¸»ä¸»ä¹ç¤¾ä¼æ¯( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_231",
    "type": "single",
    "answer": 0,
    "options": [
      "ãè®ºåå¤§å³ç³»ã",
      "ãæ°æ°ä¸»ä¸»ä¹è®ºã",
      "ãå³äºæ­£ç¡®å¤çäººæ°åé¨çç¾çé®é¢ã",
      "ãä¸­å½é©å½åä¸­å½å±äº§åã"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æ¯æ³½ä¸ååå¨ä¸­å¤®æ¿æ²»å±æ©å¤§ä¼è®®åæé«å½å¡ä¼è®®ä¸ï¼ä½äº( )çæ¥åï¼åæ­¥æ»ç»äºæå½ç¤¾ä¼ä¸»ä¹å»ºè®¾ç»éªï¼æç¡®æåºä»¥èä¸ºé´ï¼ç¬ç«èªä¸»å°æ¢ç´¢éåä¸­å½æåµçç¤¾ä¼ä¸»ä¹å»ºè®¾éè·¯ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_232",
    "type": "single",
    "answer": 1,
    "options": [
      "ãå³äºåå¨è¿æ¸¡æ¶æçæ»è·¯çº¿ã",
      "ãè®ºåå¤§å³ç³»ã",
      "ãå³äºåä¸åä½åé®é¢ã",
      "ãå³äºå½å®¶èµæ¬ä¸»ä¹ã"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "( )æ å¿çåæ¢ç´¢ä¸­å½ç¤¾ä¼ä¸»ä¹å»ºè®¾éè·¯çè¯å¥½å¼ç«¯ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_233",
    "type": "single",
    "answer": 1,
    "options": [
      "äººæ°åé¨çéå¯¹ææ§ççç¾",
      "çäº§å³ç³»åçäº§åä¹é´ãä¸å±å»ºç­åç»æµåºç¡ä¹é´ççç¾",
      "æ äº§é¶çº§åèµäº§é¶çº§ä¹é´ãç¤¾ä¼ä¸»ä¹åèµæ¬ä¸»ä¹ä¹é´ççç¾",
      "äººæ°æ¥çå¢é¿çç©è´¨æåéè¦åè½åçç¤¾ä¼çäº§ä¹é´ççç¾"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "å³äºç¤¾ä¼ä¸»ä¹ç¤¾ä¼çåºæ¬çç¾ãæ¯æ³½ä¸æåº:âå¨ç¤¾ä¼ä¸»ä¹ç¤¾ä¼ä¸­ï¼åºæ¬ççç¾ä»ç¶æ¯( )ãâ",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_234",
    "type": "single",
    "answer": 0,
    "options": [
      "ãè®ºåå¤§å³ç³»ã",
      "ãè®ºäººæ°æ°ä¸»ä¸æ¿ã",
      "ãä¸è¦åé¢åºå»ã",
      "ãå³äºæ­£ç¡®å¤çäººæ°åé¨çç¾çé®é¢ã"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "( )ç¡®å®äºä¸ä¸ªåºæ¬æ¹éï¼å°±æ¯âåªåæåååå¤ãå½åå½å¤çä¸åç§¯æå ç´ ï¼ç´æ¥çãé´æ¥çç§¯æå ç´ ï¼å¨é¨è°å¨èµ·æ¥âï¼ä¸ºç¤¾ä¼ä¸»ä¹å»ºè®¾æå¡ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_235",
    "type": "single",
    "answer": 3,
    "options": [
      "ç¤¾ä¼ä¸»ä¹åçº§é¶æ®µ",
      "å±äº§ä¸»ä¹åçº§é¶æ®µ",
      "ç¤¾ä¼ä¸»ä¹é«çº§é¶æ®µ",
      "æ¯è¾åè¾¾çç¤¾ä¼ä¸»ä¹"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æ¯æ³½ä¸æåº:âç¤¾ä¼ä¸»ä¹è¿ä¸ªé¶æ®µï¼åå¯è½åä¸ºä¸¤ä¸ªé¶æ®µï¼ç¬¬ä¸ä¸ªé¶æ®µæ¯ä¸åè¾¾çç¤¾ä¼ä¸»ä¹ï¼ç¬¬äºä¸ªé¶æ®µæ¯( )âã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_236",
    "type": "single",
    "answer": 1,
    "options": [
      "ç¤¾ä¼ä¸»ä¹å»ºè®¾",
      "ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹éè·¯",
      "ç¤¾ä¼ä¸»ä¹æ¹é ",
      "ä¸­å½å·¥ä¸åéè·¯"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "åå¨ç¤¾ä¼ä¸»ä¹å»ºè®¾éè·¯åæ­¥æ¢ç´¢ä¸­çç»éªåæè®­ï¼ä¸ºæä»¬å¨æ¹é©å¼æ¾æ°æ¶ææ¢ç´¢åå¼è¾( )æä¾äºéè¦åé´ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_237",
    "type": "single",
    "answer": 0,
    "options": [
      "ä¸­å½å·¥ä¸åéè·¯é®é¢",
      "ä¸­å½çåä¸åå±é®é¢",
      "ä¸­å½çç»æµæ³å¾é®é¢",
      "å·¥ä¸åå±çè®¡åé®é¢"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "ãè®ºåå¤§å³ç³»ãåä¸æ¡è®²éå·¥ä¸åè½»å·¥ä¸ãåä¸çå³ç³»ï¼æ²¿æµ·å·¥ä¸ååå°å·¥ä¸çå³ç³»ï¼ç»æµå»ºè®¾åå½é²å»ºè®¾çå³ç³»ãè¿å®éä¸æ¯å¨è®ºè¿°å¦ä½å¼è¾ä¸æ¡åèèææä¸åç( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_238",
    "type": "single",
    "answer": 2,
    "options": [
      "åäºå¤§",
      "ä¸å¤§",
      "å«å¤§",
      "åä¸å±ä¸ä¸­å¨ä¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "åç( )æ­£ç¡®åæäºç¤¾ä¼ä¸»ä¹æ¹é å®æåæå½ç¤¾ä¼ä¸»è¦çç¾çååï¼æåº:ç¤¾ä¼ä¸»ä¹å¶åº¦å¨æå½å·²ç»åºæ¬ä¸å»ºç«èµ·æ¥äºã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_239",
    "type": "single",
    "answer": 0,
    "options": [
      "ãå³äºæ­£ç¡®å¤çäººæ°åé¨çç¾çé®é¢ã",
      "ãæ°æ°ä¸»ä¸»ä¹è®ºã",
      "ãè®ºåå¤§å³ç³»ã",
      "ãä¸­å½ç¤¾ä¼åé¶çº§çåæã"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æ¯æ³½ä¸å¨1957å¹´2ææä½ç( )çæ¥åï¼ç³»ç»è®ºè¿°ç¤¾ä¼ä¸»ä¹ç¤¾ä¼çç¾ççè®ºã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_240",
    "type": "single",
    "answer": 1,
    "options": [
      "å¢ç»ââæ¹è¯ââå¢ç»çï¿½ï¿½ï¿½é",
      "ç¾è±é½æ¾ãç¾å®¶äºé¸£çæ¹é",
      "é¿æå±å­ãäºç¸çç£çæ¹é",
      "ç¨ååçæ¹æ³è§£å³"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "å³äºæ­£ç¡®å¤çäººæ°åé¨çç¾çæ¹éãæ¯æ³½ä¸æåºï¼å¯¹äºç§å­¦æåé¢åéççç¾ï¼å®è¡( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_241",
    "type": "single",
    "answer": 2,
    "options": [
      "ç¤¾ä¼ä¸»ä¹éè·¯ä¸èµæ¬ä¸»ä¹éè·¯ççç¾",
      "åè¿ççäº§å³ç³»åè½åççäº§åä¹é´ççç¾",
      "äººæ°å¯¹äºç»æµæåè¿éåå±çéè¦åå½åç»æµæåä¸è½æ»¡è¶³äººæ°éè¦çç¶åµä¹é´ççç¾",
      "æ äº§é¶çº§åèµäº§é¶çº§ççç¾"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "åçå«å¤§æåºï¼æä»¬å½åçä¸»è¦çç¾å·²ç»ä¸åæ¯å·¥äººé¶çº§åèµäº§é¶çº§ççç¾ï¼èæ¯( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_242",
    "type": "single",
    "answer": 1,
    "options": [
      "åä¸ä½ç³»",
      "å·¥ä¸ä½ç³»",
      "æè²ä½ç³»",
      "ç§æä½ç³»"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "1964å¹´åºï¼å¨æ©æ¥å¨ç¬¬ä¸å±å¨å½äººå¤§ä¸æ¬¡ä¼è®®ä¸æä½çæ¿åºå·¥ä½æ¥åä¸­æåºäºå»ºè®¾âåä¸ªç°ä»£åâçæç¥æ­¥éª¤:ä»ç¬¬ä¸ä¸ªäºå¹´è®¡åå¼å§ï¼ç¬¬ä¸æ­¥å»ºæä¸ä¸ªç¬ç«çæ¯ï¿½ï¿½ï¿½å®æ´ç( )å½æ°ç»æµä½ç³»ï¼ç¬¬äºæ­¥å¨é¢å®ç°âåä¸ªç°ä»£åâï¼ä½¿ä¸­å½çç»æµåå±èµ°å¨ä¸ççååã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_243",
    "type": "single",
    "answer": 2,
    "options": [
      "åå°ï¿½ï¿½",
      "æ¯æ³½ä¸",
      "éäº",
      "éå°å¹³"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "å¨ç¤¾ä¼ä¸»ä¹å»ºè®¾éè·¯åæ­¥æ¢ç´¢è¿ç¨ä¸­ï¼èµ°ä¸­å½å·¥ä¸åéè·¯ï¼å¿é¡»è°æ´åå®åææå¶ç»æã( )æåºäºâä¸ä¸ªä¸»ä½ï¼ä¸ä¸ªè¡¥åâè®¾æ³ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_244",
    "type": "single",
    "answer": 3,
    "options": [
      "åä¸ç°ä»£å",
      "å·¥ä¸ç°ä»£å",
      "æè²ç°ä»£å",
      "ç§å­¦ææ¯ç°ä»£å"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "å¨ç§æå·¥ä½æ¹é¢ï¼æä»¬åæåºäºâåç§å­¦è¿åâçå£å·ï¼å¼ºè°å®ç°åä¸ªç°ä»£åå³é®å¨äº( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_245",
    "type": "single",
    "answer": 1,
    "options": [
      "ç»æµçæ´»",
      "æ¿æ²»çæ´»åææ³æåçæ´»",
      "æ¿æ²»çæ´»",
      "æåçæ´»"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "âåå¤§å³ç³»âçåäºæ¡ï¼è®ºè¿°çæ¯( )é¢åå¦ä½è°å¨åç§ç§¯æå ç´ çé®é¢ã",
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
      "åååå¤",
      "å½åå½å¤",
      "å¶ç¶ç",
      "å¿ç¶ç"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "ãè®ºåå¤§å³ç³»ãç¡®å®äºä¸ä¸ªåºæ¬æ¹éï¼å°±æ¯âåªåæ( )çä¸åç§¯æçå ç´ ï¼ç´æ¥çãé´æ¥çç§¯æå ç´ ï¼å¨é¨è°å¨èµ·æ¥âï¼ä¸ºç¤¾ä¼ä¸»ä¹å»ºè®¾æå¡ã",
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
      "ç¤¾ä¼ä¸»ä¹éè·¯åèµæ¬ä¸»ä¹éè·¯ççç¾",
      "çäº§ååçäº§å³ç³»ä¹é´ççç¾",
      "ä¸å±å»ºç­åç»æµåºç¡ä¹é´ççç¾",
      "æ äº§é¶çº§åèµäº§é¶çº§ççç¾"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æ¯æ³½ä¸æåºï¼å¨ç¤¾ä¼ä¸»ä¹ç¤¾ä¼ä¸­ï¼åºæ¬ççç¾ä»ç¶æ¯( )ã",
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
      "æ±æåå°æ°æ°æå³ç³»",
      "ååéåå³ç³»",
      "æ¯éå³ç³»",
      "é©å½ååé©å½çå³ç³»"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æ¯æ³½ï¿½ï¿½ï¿½å¨ãè®ºåå¤§å³ç³»ãä¸­è®²( )ãä¸­å½åå¤å½çå³ç³»ï¼è®ºè¿°çæ¯æ¿æ²»çæ´»åææ³æåçæ´»é¢åå¦ä½è°å¨åç§ç§¯æå ç´ çé®é¢ã",
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
      "åçº§é¶æ®µçç¤¾ä¼ä¸»ä¹",
      "é«çº§é¶æ®µçç¤¾ä¼ä¸»ä¹",
      "ä¸åè¾¾çç¤¾ä¼ä¸»ä¹",
      "æ¯è¾åè¾¾çç¤¾ä¼ä¸»ä¹"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æ¯æ³½ä¸æåº:âç¤¾ä¼ä¸»ä¹è¿ä¸ªé¶æ®µï¼åå¯è½åä¸ºä¸¤ä¸ªé¶æ®µï¼ç¬¬ä¸ä¸ªé¶æ®µæ¯_____ï¼ç¬¬äºä¸ªé¶æ®µæ¯_____âã",
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
      "ä¸­å­¦ä¸ºä½",
      "è¥¿å­¦ä¸ºç¨",
      "ç¾è±é½æ¾",
      "ç¾å®¶äºé¸£"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "å¨æåå·¥ä½æ¹é¢ï¼åæåºäº( )è¿ä¸ä¿è¿æå½ç¤¾ä¼ä¸»ä¹æåç¹è£çæ¹éã",
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
      "ç°ä»£åä¸",
      "ç°ä»£å·¥ä¸",
      "ç°ä»£å½é²",
      "ç°ä»£ç§å­¦ææ¯"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "1964å¹´åºï¼å¨æ©æ¥å¨ç¬¬ä¸å±å¨å½äººæ°ä»£è¡¨å¤§ä¼ç¬¬ä¸æ¬¡ä¼è®®ä¸æ­£å¼å®£å¸ï¼âææå½å»ºè®¾æä¸ºä¸ä¸ªå·æ( )çç¤¾ä¼ä¸»ä¹å¼ºå½ãâ",
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
      "ä¿å®",
      "æ¥èºåè¿",
      "æ¥äºæ±æ",
      "å¢¨å®æè§"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "ç¤¾ä¼ä¸»ä¹å»ºè®¾å¼å§åï¼å¨åå¨å½äººæ°é½æå¤§ååå±çäº§ãè¿éæ¹åè½åé¢è²çå¼ºçæ¿æãè¿ä¸æ¹é¢æå¤§å°ä¿è¿äºç¤¾ä¼ä¸»ä¹å»ºè®¾ï¼åå¾äºæ¾èæå°±ï¼ä½åæ¶ä¹åºç°äº( )çå¾åã",
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
      "å¼ºè°ç¬ç«èªä¸»å°æ¢ç´¢éåä¸­å½æåµçç¤¾ä¼ä¸»ä¹å»ºè®¾éè·¯",
      "æåºä»¥èä¸ºé´",
      "æåºé©¬åæä¸»ä¹åä¸­å½å®éçâç¬¬äºæ¬¡ç»åâ",
      "å¼ºè°æ¹é©å¼æ¾"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "1956å¹´èµ·ï¼æ¯æ³½ä¸å¼å§æ¢ç´¢éåä¸­å½ç¹ç¹çç¤¾ä¼ä¸»ä¹å»ºè®¾éè·¯ãä¸æ­¤ç¸èç³»ï¼æ¯æ³½ä¸æåºäºä¸ç³»åæ°ææ³ï¼ä¸»è¦æ( )ã",
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
      "å¿é¡»æé©¬åæä¸»ä¹ä¸ä¸­å½å®éç¸ç»åï¼æ¢ç´¢ç¬¦åä¸­å½ç¹ç¹çç¤¾ä¼ä¸»ä¹å»ºè®¾éè·¯",
      "å¿é¡»æ­£ç¡®è®¤è¯ç¤¾ä¼ä¸»ä¹ç¤¾ä¼çä¸»è¦çç¾åæ ¹æ¬ä»»å¡ï¼éä¸­åéåå±çäº§å;å¿é¡»ä»å®éåºåè¿è¡ç¤¾ä¼ä¸»ä¹å»ºè®¾ï¼å»ºè®¾è§æ¨¡åéåº¦è¦åå½åç¸éåºï¼ä¸è½æ¥äºæ±æ",
      "å¿é¡»åå±ç¤¾ä¼ä¸»ä¹æ°ä¸»ï¼å¥å¨ç¤¾ä¼ä¸»ä¹æ³å¶;å¿é¡»åæåçæ°ä¸»éä¸­å¶åéä½é¢å¯¼å¶åº¦ï¼å å¼ºæ§æ¿åå»ºè®¾",
      "å¿é¡»åæå¯¹å¤å¼æ¾ï¼åé´åå¸æ¶äººç±»ææææå»ºè®¾ç¤¾ä¼ä¸»ä¹ï¼ä¸è½å³èµ·é¨æ¥æå»ºè®¾"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "ç¤¾ä¼ä¸»ä¹å»ºè®¾éè·¯çåæ­¥æ¢ç´¢æçä¸°å¯çç»éªæè®­ï¼è¿äºç»éªæè®­æ¯( )ã",
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
      "ãè®ºæä¹æã",
      "ãå®è·µè®ºã",
      "ãè®ºåå¤§å³ç³»ã",
      "ãå³äºæ­£ç¡®å¤çäººæ°åé¨çç¾çé®é¢ã"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "éä¸­ä½ç°æ¯æ³½ä¸æ¢ç´¢ä¸­å½ç¤¾ä¼ä¸»ä¹å»ºè®¾éè·¯æåå¾ççè®ºææçèä½æ( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_271",
    "type": "single",
    "answer": 0,
    "options": [
      "åå¹³ä¸åå±",
      "é©å½ä¸æäº",
      "æ¹é©ä¸å¼æ¾",
      "åä½ä¸å±èµ¢"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "( )æ¯éå°å¹³å¯¹ä¸çæ¶ä»£ä¸»é¢çå¤æ­ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_272",
    "type": "single",
    "answer": 2,
    "options": [
      "åä¸å±äºä¸­å¨ä¼",
      "åäºå¤§",
      "åä¸å±ä¸ä¸­å¨ä¼",
      "åä¸å±åä¸­å¨ä¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "1978å¹´12æå¬å¼çåç( )ï¼éæ°ç¡®ç«äºè§£æ¾ææ³ãå®äºæ±æ¯çææ³è·¯çº¿ï¼ç¡®å®æå¨åå·¥ä½ççéç¹è½¬ç§»å°ç¤¾ä¼ä¸»ä¹ç°ä»£åå»ºè®¾ä¸æ¥ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_273",
    "type": "single",
    "answer": 0,
    "options": [
      "å®äºæ±æ¯",
      "ç¤¾ä¼ä¸»ä¹æ¬è´¨",
      "èªåæ´ç",
      "ç¾¤ä¼è·¯çº¿"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "éå°å¹³æåº:âè§£æ¾ææ³ï¼å°±æ¯ä½¿ææ³åå®éç¸ç¬¦åï¼ä½¿ä¸»è§åå®¢è§ç¸ç¬¦åï¼å°±æ¯( )ãâ",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_274",
    "type": "single",
    "answer": 1,
    "options": [
      "ç²¾ç¥ææ",
      "å±åå¯è£",
      "å¯æç»­åå±",
      "äººç±»å½è¿å±åä½"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "ç¤¾ä¼ä¸»ä¹ç¤¾ä¼åå±çäº§åçç®çä¸æ¯ä¸ºå°æ°äººè°å©çï¼èæ¯è¦ä½¿å¨ä½ç¤¾ä¼æåè¿ä¸å¯è£å¹¸ç¦ççæ´»ï¼æ¯è¦å®ç°( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_275",
    "type": "single",
    "answer": 3,
    "options": [
      "å¦ä½è¿è¡æ¹é©å¼æ¾",
      "å¦ä½ä¸¤ææï¼ä¸¤æé½è¦ç¡¬",
      "å¦ä½åæä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹éè·¯",
      "ä»ä¹æ¯ç¤¾ä¼ä¸»ä¹ãææ ·å»ºè®¾ç¤¾ä¼ä¸»ä¹"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "éå°å¹³å¨é¢å¯¼æ¹é©å¼æ¾åç°ä»£åå»ºè®¾è¿ä¸æ°çé©å½è¿ç¨ä¸­ï¼ä¸æ­æåºååå¤æèçé¦è¦çåºæ¬ççè®ºé®é¢æ¯( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_276",
    "type": "single",
    "answer": 1,
    "options": [
      "ä»¥ç»æµå»ºè®¾ä¸ºä¸­å¿",
      "è§£æ¾ææ³ï¼å®äºæ±æ¯",
      "åæåé¡¹åºæ¬åå",
      "åæé©¬åæåå®ä¸»ä¹æ¯æ³½ä¸ææ³"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "åçåä¸å±ä¸ä¸­å¨ä¼ä»¥åï¼ä»¥éå°å¹³åå¿ä¸ºä¸»è¦ä»£è¡¨çä¸­å½å±äº§åäººéæ°ç¡®ç«å¹¶ä¸°å¯åå±äºåçææ³è·¯çº¿ï¼å³( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_277",
    "type": "single",
    "answer": 0,
    "options": [
      "ç¤¾ä¼ä¸»ä¹åçº§é¶æ®µçè®º",
      "ä»¥ç»æµå»ºè®¾ä¸ºä¸­å¿è®º",
      "åé¡¹åºæ¬åå",
      "åå¨åçº§é¶æ®µçåºæ¬è·¯çº¿"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "( )åºäºå¯¹ä¸­å½å½æçåç¡®ææ¡ï¼æ­ç¤ºäºå½ä»£ä¸­å½çåå²æ¹ä½ï¼ä¸ºå»ºè®¾ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹æä¾äºæ»ä¾æ®ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_278",
    "type": "single",
    "answer": 0,
    "options": [
      "åå±çäº§å",
      "ä»¥ç»æµå»ºè®¾ä¸ºä¸­å¿",
      "èµ°åå±åå¯è£",
      "å¨é¢å»ºæå°åº·ç¤¾ä¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "ç¤¾ä¼ä¸»ä¹çæ ¹æ¬ä»»å¡æ¯( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_279",
    "type": "single",
    "answer": 1,
    "options": [
      "æ¯æ³½ä¸ææ³",
      "éå°å¹³çè®º",
      "âä¸ä¸ªä»£è¡¨âéè¦ææ³",
      "ãè®ºäººæ°æ°ä¸»ä¸æ¿ã"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹çè®ºä½ç³»çå¼ç¯ä¹ä½æ¯( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_280",
    "type": "single",
    "answer": 3,
    "options": [
      "æ¿æ²»å»ºè®¾",
      "æåå»ºè®¾",
      "ç¤¾ä¼å»ºè®¾",
      "ç»æµå»ºè®¾"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "ç¤¾ä¼ä¸»ä¹çæ ¹æ¬ä»»å¡æ¯åå±çäº§åï¼ååå½å®¶çå·¥ä½éç¹æ¯( )ï¼è¿æ¯åå¯¹æå½ç¤¾ä¼ä¸»ä¹å»ºè®¾ç»éªæè®­åç¤¾ä¼ä¸»ä¹çç¾è¿è¡ç§å­¦åæå¾åºçæéè¦çç»è®ºã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_281",
    "type": "single",
    "answer": 3,
    "options": [
      "ãå®è·µæ¯æ£éªçççå¯ä¸æ åã",
      "ãååå½å®¶é¢å¯¼å¶åº¦çæ¹é©ã",
      "ãä¸­å±ä¸­å¤®å³äºç»æµä½å¶æ¹é©çå³å®ã",
      "ãåå°æ¹¾åèä¹¦ã"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "1979å¹´åæ¦ï¼å¨å½äººå¤§å¸¸å§ä¼åè¡¨( )ï¼ééå®£ç¤ºäºäºåç¥å½åå¹³ç»ä¸çå¤§æ¿æ¹éã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_282",
    "type": "single",
    "answer": 0,
    "options": [
      "æ¹é©",
      "é©å½",
      "åè°",
      "ç§å­¦ææ¯"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "ç¤¾ä¼ä¸»ä¹ç¤¾ä¼åå±çç´æ¥å¨åæ¯( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_283",
    "type": "single",
    "answer": 1,
    "options": [
      "æ¯æ³½ä¸",
      "éå°å¹³",
      "æ±æ³½æ°",
      "è¡é¦æ¶"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æåºâç§å­¦ææ¯æ¯ç¬¬ä¸çäº§åâè¿ä¸ªéå¤§è®ºæ­çæ¯( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_284",
    "type": "single",
    "answer": 0,
    "options": [
      "åæä¸ä¸ªä¸­å½",
      "å®è¡ä¸¤ç§å¶åº¦",
      "å®ç°ä¸¤å²¸ä¸é",
      "æ¾å¼ä½¿ç¨æ­¦å"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "âåå¹³ç»ä¸ãä¸å½ä¸¤å¶âçæ ¸å¿æ¯( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_285",
    "type": "single",
    "answer": 2,
    "options": [
      "ç¸ä¿¡ç¾¤ä¼ï¼ä¾é ç¾¤ä¼",
      "åå±åè§£æ¾çäº§å",
      "è§£æ¾ææ³ï¼å®äºæ±æ¯",
      "ä»¥ç»æµå»ºè®¾ä¸ºä¸­å¿"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "éå°å¹³çè®ºçç²¾é«æ¯( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_286",
    "type": "single",
    "answer": 3,
    "options": [
      "æ°æ°ä¸»ä¸»ä¹é©å½çæ£éª",
      "ç¤¾ä¼ä¸»ä¹é©å½çæ£éª",
      "æ°æ¶ä»£ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹ç°ä»£åå»ºè®¾çæ£éª",
      "æ¹é©å¼æ¾åç°ä»£åå»ºè®¾å®è·µçæ£éª"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "éå°å¹³çè®ºç»è¿( )ï¼å·²ç»è¢«è¯ææ¯æå¯¼ä¸­å½äººæ°å»ºè®¾ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹ãä¿è¯ä¸­å½å¨æ¹é©å¼æ¾ä¸­å®ç°å½å®¶ç¹è£å¯å¼ºåäººæ°å±åå¯è£çç³»ç»çç§å­¦çè®ºã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_287",
    "type": "single",
    "answer": 1,
    "options": [
      "é©¬åæä¸»ä¹",
      "âä¸ä¸ªæå©äºâ",
      "å®è·µ",
      "çäº§å"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æ£éªä¸åå·¥ä½æ¯éå¾å¤±çæ ¹æ¬æ åæ¯( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_288",
    "type": "single",
    "answer": 2,
    "options": [
      "åå±ç¤¾ä¼ä¸»ä¹æ°ä¸»ï¼å å¼ºç¤¾ä¼ä¸»ä¹æ³å¶",
      "ä¸ææç©è´¨ææï¼ä¸ææç²¾ç¥ææ",
      "åæåé¡¹åºæ¬ååï¼åææ¹é©å¼æ¾",
      "èªåæ´çï¼è°è¦åä¸"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "åå¨ç¤¾ä¼ä¸»ä¹åçº§é¶æ®µçåºæ¬è·¯çº¿çâä¸¤ä¸ªåºæ¬ç¹âæ¯( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_289",
    "type": "single",
    "answer": 0,
    "options": [
      "èªåæ´çï¼è°è¦åä¸",
      "èªåæ´çï¼å¢ç»ä¸è´",
      "å¢ç»ä¸è´ï¼å¥ååè¿",
      "è°è¦åä¸ï¼å¥ååè¿"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "( )æ¯å®ç°ç¤¾ä¼ä¸»ä¹åçº§é¶æ®µå¥æç®æ çæ ¹æ¬ç«è¶³ç¹ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_290",
    "type": "single",
    "answer": 0,
    "options": [
      "ç§å­¦ææ¯æ¯ç¬¬ä¸çäº§å",
      "ç§æå·¥ä½è¦é¢åç»æµå»ºè®¾",
      "ä¸­å½å¨é«ç§æé¢åè¦å æä¸å¸­ä¹å°",
      "ä¸­å½çåä¸æç»è¦é ç§æè§£å³é®é¢"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "å³äºç§å­¦ææ¯çæç«¯éè¦æ§ï¼éå°å¹³æä¸èåè®ºæ­ï¼è¿å°±æ¯( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_291",
    "type": "single",
    "answer": 0,
    "options": [
      "ä»¥ç»æµå»ºè®¾ä¸ºä¸­å¿",
      "ä»¥æ¿æ²»æ¹é©ä¸ºä¸­å¿",
      "ä»¥å¯¹å¤å¼æ¾ä¸ºä¸­å¿",
      "ä»¥ä½å¶æ¹é©ä¸ºä¸­å¿"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "åå¨ç¤¾ä¼ä¸»ä¹åçº§é¶æ®µçåºæ¬è·¯çº¿çâä¸ä¸ªä¸­å¿âæ¯( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_292",
    "type": "single",
    "answer": 3,
    "options": [
      "ç¤¾ä¼ä¸»ä¹åºæ¬å¶åº¦çæ¹é©",
      "ç¤¾ä¼ä¸»ä¹ç»æµè¿è¡æ¹å¼çæ¹å",
      "ç¤¾ä¼ä¸»ä¹åæä½å¶çä¿®è¡¥",
      "ç¤¾ä¼ä¸»ä¹å¶åº¦çèªæå®åååå±"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "éå°å¹³æç¡®æåº:âæ¹é©æ¯ä¸­å½çç¬¬äºæ¬¡é©å½ãâæè°ç¬¬äºæ¬¡é©å½ï¼æ¯ä¸ä¸­å½å±äº§åé¢å¯¼çç¬¬ä¸æ¬¡é©å½ç¸å¯¹èè¨çãç¤¾ä¼ä¸»ä¹æ¹é©çæ§è´¨æ¯( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_293",
    "type": "single",
    "answer": 3,
    "options": [
      "ä¸­å½åç¾å½çå³ç³»é®é¢",
      "ä¸­å½åæ¥æ¬çå³ç³»é®é¢",
      "åå²ä¸æ®æ°ä¸»ä¹ä¾µç¥éçä¸æ¥çé®é¢",
      "ä¸­å½çåæ¿é®é¢"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "å°æ¹¾é®é¢æ§è´¨ä¸åäºé¦æ¸¯é®é¢åæ¾³é¨é®é¢ãå°æ¹¾é®é¢çå®è´¨æ¯( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_294",
    "type": "single",
    "answer": 0,
    "options": [
      "å°æ¹¾é®é¢æåºæ¥ç",
      "æ¾³é¨é®é¢æåºæ¥ç",
      "é¦æ¸¯é®é¢æåºæ¥ç",
      "é¦æ¸¯åæ¾³é¨é®é¢æåºæ¥ç"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "âä¸å½ä¸¤å¶âææ³çæåºï¼ææ©æ¯éå¯¹( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_295",
    "type": "single",
    "answer": 2,
    "options": [
      "é¦æ¬¡æåºäºç¤¾ä¼ä¸»ä¹åçº§é¶æ®µæ¦å¿µ",
      "é¦æ¬¡ç³»ç»éè¿°äºç¤¾ä¼ä¸»ä¹åçº§é¶æ®µçè®º",
      "é¦æ¬¡æç¤¾ä¼ä¸»ä¹åçº§é¶æ®µä½ä¸ºäºå³å¨å±çåºæ¬å½æå ä»¥ææ¡",
      "é¦æ¬¡å¯¹ç¤¾ä¼ä¸»ä¹åå±é¶æ®µè¿è¡äºåå"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "åçåä¸å¤§å¬å¼åå¤ï¼éå°å¹³å¼ºè°æåº:âç¤¾ä¼ä¸»ä¹æ¬èº«æ¯å±äº§ä¸»ä¹çåçº§é¶æ®µï¼èæä»¬ä¸­å½ï¿½ï¿½å¤å¨ç¤¾ä¼ä¸»ä¹çåçº§é¶æ®µï¼å°±æ¯ä¸åè¾¾çé¶æ®µãä¸åé½è¦ä»è¿ä¸ªå®éåºåï¼æ ¹æ®è¿ä¸ªå®éæ¥å¶è®¢è§åãâè¿ä¸è®ºè¿°( )ã",
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
      "ä»¥ç»æµå»ºè®¾ä¸ºä¸­å¿",
      "è§£æ¾çäº§åï¼åå±çäº§å",
      "æ¶ç­å¥åï¼æ¶é¤ä¸¤æåå",
      "æç»è¾¾å°å±åå¯è£"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "å¨1992å¹´åæ¹è°è¯ä¸­ï¼éå°å¹³æåºï¼ç¤¾ä¼ä¸»ä¹çæ¬è´¨æ¯( )ã",
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
      "åçº§é¶æ®µæ¯ä¸­å½ç¹æçå½ææå¿é¡»ç»åçä¸ä¸ªé¶æ®µ",
      "åçº§é¶æ®µæ¯ä»»ä½å½å®¶èµ°åç¤¾ä¼ä¸»ä¹ãå±äº§ä¸»ä¹é½å¿é¡»ç»åçé¶æ®µ",
      "æå½çç¤¾ä¼ä¸»ä¹ç¤¾ä¼è¿å¤å¨åçº§é¶æ®µãæä»¬å¿é¡»ä»è¿ä¸ªå®éåºåï¼èä¸è½è¶è¶è¿ä¸ªé¶æ®µ",
      "æå½ç¤¾ä¼å·²ç»æ¯ç¤¾ä¼ä¸»ä¹ç¤¾ä¼ãæä»¬å¿é¡»åæèä¸è½ç¦»å¼ç¤¾ä¼ä¸»ä¹"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "ç¤¾ä¼ä¸»ä¹åçº§é¶æ®µçè®ºæ­åæ¬ä¸¤å±å«ä¹( )ã",
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
      "è§£æ¾ææ³",
      "çè®ºèç³»å®é",
      "å®äºæ±æ¯",
      "å¨å®è·µä¸­æ£éªççååå±çç"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "å¨æ¹é©å¼æ¾åç°ä»£åå»ºè®¾è¿ç¨ä¸­ï¼éå°å¹³å¨å³é®æ¶å»ä½åºçæ¯ä¸é¡¹éå¤§å³ç­ï¼é½ä½ç°äº( )çææ³è·¯çº¿ã",
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
      "ä½¿æä»¬åå¯¹ç¤¾ä¼ä¸»ä¹å»ºè®¾çé¿ææ§ãå¤ææ§ãè°å·¨æ§æäºæ´å æ¸éçè®¤è¯",
      "åºäºå¯¹ä¸­å½å½æçåç¡®ææ¡ï¼æ­ç¤ºäºå½ä»£ä¸­å½çåå²æ¹ä½ï¼ä¸ºå»ºè®¾ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹æä¾äºæ»ä¾æ®",
      "æ¯å¯¹é©¬åæä¸»ä¹å³äºç¤¾ä¼ä¸»ä¹åå±é¶æ®µçè®ºçéå¤§åå±åéå¤§çªç ´",
      "æ­£ç¡®åç­äºä¸­å½é©å½åå»ºè®¾çé¦è¦çåºæ¬ççè®ºé®é¢"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "ç¤¾ä¼ä¸»ä¹å¶åº¦å»ºç«ä»¥åï¼ä¹æä¸ä¸ªå¦ä½è®¤æ¸å½æãæ­£ï¿½ï¿½å¤æ­æå½ç¤¾ä¼æå¤åå²æ¹ä½çé®é¢ãç¤¾ä¼ä¸»ä¹åçº§é¶æ®µçè®º( )ã",
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
      "åå¹³é®é¢",
      "ç»æµé®é¢æåå±é®é¢",
      "çæç¯å¢é®é¢",
      "ç§ææ­§è§é®é¢"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "éå°å¹³æåºï¼ç°å¨ä¸çä¸çæ­£å¤§çé®é¢ï¼å¸¦å¨çæ§çæç¥é®é¢æ¯( )ã",
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
      "æ¯å¦æå©äºå·©åºç¤¾ä¼ä¸»ä¹å¶åº¦",
      "æ¯å¦æå©äºæé«äººæ°ççæ´»æ°´å¹³",
      "æ¯å¦æå©äºåå±ç¤¾ä¼ä¸»ä¹ç¤¾ä¼ççäº§å",
      "æ¯å¦æå©äºå¢å¼ºç¤¾ä¼ä¸»ä¹å½å®¶çç»¼åå½å"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æ¹é©æ¯ä¸é¡¹å´­æ°çäºä¸ï¼æ¯ä¸ä¸ªå¤§å®éªãå¤æ­æ¹é©ååæ¹é¢æ¯éå¾å¤±ï¼å½æ ¹å°åºï¼ä¸»è¦ç( )ã",
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
      "ä»¥ç»æµå»ºè®¾ä¸ºä¸­å¿",
      "åæåé¡¹åºæ¬åå",
      "åææ¹é©å¼æ¾",
      "åæé¿æ²»ä¹å®"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "âä¸ä¸ªä¸­å¿ãä¸¤ä¸ªåºæ¬ç¹âåæ¬( )ã",
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
      "æå¯¹ç¤¾ä¼ä¸»ä¹çè®¤è¯æé«å°æ°çç§å­¦æ°´å¹³",
      "åæ äºäººæ°çå©çåæ¶ä»£çè¦æ±",
      "å»æ¸äºä¸åä¹æ¶ä»£è¿æ­¥åç¤¾ä¼åå±è§å¾çæ¨¡ç³è§å¿µ",
      "æè±äºé¿æä»¥æ¥ææ³¥äºå·ä½æ¨¡å¼èå¿½ç¥ç¤¾ä¼ä¸»ä¹æ¬è´¨çéè¯¯å¾å"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "éå°å¹³å³äºç¤¾ä¼ä¸»ä¹æ¬è´¨çæ¦æ¬ï¼çè§£æ­£ç¡®çæ¯( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_319",
    "type": "single",
    "answer": 2,
    "options": [
      "åè¿ççäº§æ¹å¼",
      "åè¿ççäº§å³ç³»",
      "åè¾¾ççäº§å",
      "åè¿çç§å­¦ææ¯"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "ç¤¾ä¼ä¸»ä¹ç°ä»£åå¿é¡»å»ºç«å¨( )çåºç¡ä¹ä¸ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_320",
    "type": "single",
    "answer": 3,
    "options": [
      "å³å¨å·¥å·",
      "ææ¯",
      "å³å¨å¯¹è±¡",
      "äºº"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "çäº§åä¸­ææ´»è·çå ç´ æ¯( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_321",
    "type": "single",
    "answer": 3,
    "options": [
      "ç§å­¦ææ¯",
      "æåèµæº",
      "ç©è´¨èµæº",
      "äººæèµæº"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "å¨æ¹é©å¼æ¾åç°ä»£åå»ºè®¾è¿ç¨ä¸­ï¼ç¬¬ä¸èµæºæ¯( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_322",
    "type": "single",
    "answer": 0,
    "options": [
      "ç§å­¦ææ¯",
      "ç§å­¦å®¶ç§ç æ°´å¹³",
      "GDP",
      "äººæ"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "( )æ¯ç¬¬ä¸çäº§åï¼åè¿çäº§åçéä¸­ä½ç°åä¸»è¦æ å¿ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_323",
    "type": "single",
    "answer": 3,
    "options": [
      "ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹æ¿æ²»",
      "æ¹é©å¼æ¾",
      "ç¤¾ä¼ä¸»ä¹ç°ä»£åå»ºè®¾",
      "ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹æå"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "( )æ¯åèåæ¿å±å¨å½åæäººæ°çéè¦åéï¼æ¯ç»¼åå½åçéè¦æ å¿ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_324",
    "type": "single",
    "answer": 1,
    "options": [
      "ç»æµæç",
      "ç¤¾ä¼æç",
      "åå¥½ææ³æ¿æ²»å·¥ä½",
      "å¼æ¬æ°æç²¾ç¥"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "åå±åç±»æåäºä¸åæåäº§ä¸é½è¦è´¯å½»åå±åè¿æåçè¦æ±ï¼å§ç»æ( )æ¾å¨é¦ä½ï¼åªåå®ç°ç¤¾ä¼æçåç»æµæççææºç»ä¸ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_325",
    "type": "single",
    "answer": 1,
    "options": [
      "åçå»ºè®¾",
      "äººå¿åè",
      "è½å¦å®ç°ç°ä»£å",
      "æ¯å¦åææ¹é©å¼æ¾"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æ±æ³½æ°æåºï¼( )æ¯å³å®ä¸ä¸ªæ¿åãä¸ä¸ªæ¿æå´äº¡çæ ¹æ¬æ§å ç´ ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_326",
    "type": "single",
    "answer": 1,
    "options": [
      "å·¥äººé¶çº§",
      "äººæ°",
      "éä½",
      "ç»ç»"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æä»¬åå§ç»åæ( )çå©çé«äºä¸åã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_327",
    "type": "single",
    "answer": 0,
    "options": [
      "åæåçåè¿æ§",
      "åæåçæ¿æ²»çºªå¾",
      "åæåççº¯æ´æ§",
      "åæåçæç»å¥æç®æ "
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "è´¯å½»âä¸ä¸ªä»£è¡¨âéè¦ææ³ï¼æ ¸å¿å¨äº( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_328",
    "type": "single",
    "answer": 3,
    "options": [
      "åçåè¿æ§",
      "åçé¢å¯¼",
      "æ§æ¿å´å½",
      "æ§æ¿ä¸ºæ°"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "è´¯å½»âä¸ä¸ªä»£è¡¨âéè¦ææ³ï¼æ¬è´¨å¨åæ( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_329",
    "type": "single",
    "answer": 0,
    "options": [
      "ä¸æ¶ä¿±è¿",
      "åçé¢å¯¼",
      "æ§æ¿å´å½",
      "æ§æ¿ä¸ºæ°"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "è´¯å½»âä¸ä¸ªä»£è¡¨âéè¦ææ³ï¼å³é®å¨åæ( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_330",
    "type": "single",
    "answer": 0,
    "options": [
      "åå±",
      "ç¨³å®",
      "åè°",
      "æ°ä¸»"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "( )æ¯åæ§æ¿å´å½çç¬¬ä¸è¦å¡ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_331",
    "type": "single",
    "answer": 1,
    "options": [
      "é©å½",
      "åå±",
      "æ¹é©",
      "å¼æ¾"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "ç¨( )çåæ³è§£å³åè¿ä¸­çé®é¢ï¼æ¯æ¹é©å¼æ¾ä»¥æ¥æä»¬çä¸æ¡éè¦ç»éªã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_332",
    "type": "single",
    "answer": 0,
    "options": [
      "ä¾é èªå·±çåå±",
      "åä½å±èµ¢",
      "å»ºç«äººç±»å½è¿å±åä½",
      "æ¹é©å¼æ¾"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "ä¸­å½è§£å³ææé®é¢çå³ï¿½ï¿½ï¿½å¨äº( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_333",
    "type": "single",
    "answer": 0,
    "options": [
      "ä»¥ç»æµå»ºè®¾ä¸ºä¸­å¿",
      "åé¡¹åºæ¬åå",
      "æ¹é©å¼æ¾",
      "èªåæ´çãè°è¦åä¸"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "åå±å¿é¡»æ¯«ä¸å¨æå°åæåå¨ç¤¾ä¼ä¸»ä¹åçº§é¶æ®µçåºæ¬è·¯çº¿ï¼å³é®å¨äºåæ( )ä¸å¨æã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_334",
    "type": "single",
    "answer": 1,
    "options": [
      "åä¸å¤§",
      "ååå¤§",
      "åäºå¤§",
      "åå­å¤§"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "åç( )æ­£å¼æå»ºç«ç¤¾ä¼ä¸»ä¹å¸åºç»æµä½å¶ç¡®ç«ä¸ºæå½ç»æµä½å¶æ¹é©çç®æ ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_335",
    "type": "single",
    "answer": 0,
    "options": [
      "ä¾æ³æ²»å½",
      "ä»¥å¾·æ²»å½",
      "äººæå¼ºå½",
      "ç§æå´å½"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "åé¢å¯¼äººæ°æ²»çå½å®¶çåºæ¬æ¹ç¥æ¯( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_336",
    "type": "single",
    "answer": 1,
    "options": [
      "2000å¹´",
      "2001å¹´",
      "2002å¹´",
      "2003å¹´"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "ä¸­å½æ­£å¼å å¥ä¸çè´¸æç»ç»æ¯å¨( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_337",
    "type": "single",
    "answer": 2,
    "options": [
      "è¿å¥å±äº§ä¸»ä¹ç¤¾ä¼",
      "å®ç°ç¤¾ä¼ä¸»ä¹ç°ä»£å",
      "äººæ°çæ ¹æ¬å©ç",
      "å®ç°ä¸­åæ°æä¼å¤§å¤å´"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "âä¸ä¸ªä»£è¡¨âéè¦ææ³åææ( )ä½ä¸ºåºåç¹åå½å®¿ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_338",
    "type": "single",
    "answer": 1,
    "options": [
      "åäºå¤§",
      "åå­å¤§",
      "åä¸å¤§",
      "åå«å¤§"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "2002å¹´11æï¼åç( )å°âä¸ä¸ªä»£è¡¨âéè¦ææ³åé©¬åæåå®ä¸»ä¹ãæ¯æ³½ä¸ææ³åéå°å¹³çè®ºä¸éç¡®ç«ä¸ºåå¿é¡»é¿æåæçæå¯¼ææ³ï¼å¹¶åå¥åç« ï¼å®ç°äºæä»¬åæå¯¼ææ³çåä¸æ¬¡ä¸æ¶ä¿±è¿ã",
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
      "ä»¥ç§å­¦ççè®ºæ­¦è£äºº",
      "ä»¥æ­£ç¡®çèè®ºå¼å¯¼äºº",
      "ä»¥é«å°çç²¾ç¥å¡é äºº",
      "ä»¥ä¼ç§çä½åé¼èäºº"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æ±æ³½æ°æåºï¼å å¼ºæåå»ºè®¾ï¼å¿é¡»( )ã",
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
      "æ°æç",
      "ç§å­¦ç",
      "å¤§ä¼ç",
      "å¨é¢ç"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "åå±åè¿æåï¼å°±æ¯åå±é¢åç°ä»£åãé¢åä¸çãé¢åæªæ¥çï¼( )çç¤¾ä¼ä¸»ä¹æåã",
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
      "å¢ç»ç»ä¸",
      "ç±å¥½åå¹³",
      "å¤å³åæ¢",
      "èªå¼ºä¸æ¯"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "å¨äºåå¤å¹´çåå±è¿ç¨ä¸­ï¼ä¸­åæ°æå½¢æäºä»¥ç±å½ä¸»ä¹ä¸ºæ ¸å¿ç( )çä¼å¤§æ°æç²¾ç¥ã",
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
      "äººæ°æ¥ä¸æ¥æ¤",
      "äººæ°èµæä¸èµæ",
      "äººæ°é«å´ä¸é«å´",
      "äººæ°ç­åºä¸ç­åº"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æ±æ³½æ°å¼ºè°ï¼æä»¬æ³äºæï¼åå·¥ä½ï¼æ³å¾å¯¹ä¸å¯¹ï¼åå¾å¥½ä¸å¥½ï¼è¦æä¸ä¸ªæ ¹æ¬çè¡¡éå°ºåº¦ï¼è¿å°±æ¯( )ã",
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
      "å§ç»ä»£è¡¨ä¸­å½åè¿çäº§åçåå±è¦æ±",
      "å§ç»ä»£è¡¨ä¸­å½æå¹¿å¤§äººæ°çæ ¹æ¬å©ç",
      "å§ç»ä»£è¡¨ç¤¾ä¼åå²åå±çæ½®æµ",
      "å§ç»ä»£è¡¨ä¸­å½åè¿æåçåè¿æ¹å"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "âä¸ä¸ªä»£è¡¨âéè¦ææ³çéä¸­æ¦æ¬å°±æ¯ï¼ä¸­å½å±äº§åå¿é¡»( )ã",
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
      "å»ºè®¾ä»ä¹æ ·çå",
      "ä»ä¹æ¯æ¹é©å¼æ¾",
      "ææ ·å»ºè®¾å",
      "ææ ·å»ºè®¾ç°ä»£åå½å®¶"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "âä¸ä¸ªä»£è¡¨âéè¦ææ³åé æ§å°åç­äº( )çé®é¢ã",
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
      "åé¢å¯¼äººæ°æ²»çå½å®¶çåºæ¬æ¹ç¥",
      "åå±ç¤¾ä¼ä¸»ä¹å¸åºç»æµçå®¢è§éè¦",
      "ç¤¾ä¼ææè¿æ­¥çéè¦æ å¿",
      "å½å®¶é¿æ²»ä¹å®çéè¦ä¿é"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æ±æ³½æ°å¨åçåäºå¤§æ¥åä¸­æç¡®æåºï¼ä¾æ³æ²»å½æ¯( )ã",
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
      "æçæ³",
      "æéå¾·",
      "ææå",
      "æçºªå¾"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "å»ºè®¾æä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹çæåï¼å°±æ¯ä»¥é©¬åæä¸»ä¹ä¸ºæå¯¼ï¼ä»¥å¹è²( )çå¬æ°ä¸ºç®æ ï¼åå±é¢åç°ä»£åãé¢åä¸çãé¢åæªæ¥çï¼æ°æçç§å­¦çå¤§ä¼çç¤¾ä¼ä¸»ä¹æåã",
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
      "ç«åä¹æ¬",
      "åæä¿é",
      "æ§æ¿ä¹åº",
      "åéä¹æº"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æ±æ³½æ°å¼ºè°ï¼âä¸ä¸ªä»£è¡¨âè¦æ±ï¼æ¯æä»¬åç( )ï¼ä¹æ¯æä»¬å¨æ°ä¸çºªå¨é¢æ¨è¿åçå»ºè®¾ï¼ä¸æ­æ¨è¿çè®ºåæ°ãå¶åº¦åæ°åç§æåæ°ï¼ä¸æ­å¤ºåå»ºè®¾æä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹äºä¸æ°èå©çæ ¹æ¬è¦æ±ã",
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
      "å¿é¡»ä½¿å¨åå§ç»ä¿æä¸æ¶ä¿±è¿çç²¾ç¥ç¶æï¼ä¸æ­å¼æé©¬åæä¸»ä¹çè®ºåå±çæ°å¢ç",
      "å¿é¡»æåå±ä½ä¸ºåæ§æ¿å´å½çç¬¬ä¸è¦å¡ï¼ä¸æ­å¼åç°ä»£åå»ºè®¾çæ°å±é¢",
      "å¿é¡»æå¹¿æ³æååå°è°å¨ä¸åç§¯æå ç´ ï¼ä¸æ­ä¸ºä¸­åæ°æä¼å¤§å¤å´å¢æ·»æ°åé",
      "å¿é¡»ä»¥æ¹é©çç²¾ç¥æ¨è¿åçå»ºè®¾ï¼ä¸æ­ä¸ºåçèä½æ³¨å¥æ°æ´»å"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "âä¸ä¸ªä»£è¡¨âéè¦ææ³æåºäºåçå»ºè®¾çæ°è¦æ±ï¼å·ä½åæ¬( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_364",
    "type": "single",
    "answer": 1,
    "options": [
      "åå±",
      "ä»¥äººä¸ºæ¬",
      "å¨é¢åè°å¯æç»­",
      "ç»ç­¹å¼é¡¾"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "( )æ¯ç§å­¦åå±è§çæ ¸å¿ç«åºã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_365",
    "type": "single",
    "answer": 3,
    "options": [
      "åæå¨é¢åå±",
      "åæåè°åå±",
      "æå»ºç¤¾ä¼ä¸»ä¹åè°ç¤¾ä¼",
      "åæå¯æç»­åå±"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "( )ï¼åå®èµ°çäº§åå±ãçæ´»å¯è£ãçæè¯å¥½çææåå±éè·¯ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_366",
    "type": "single",
    "answer": 0,
    "options": [
      "æ¨å¨ç»æµç¤¾ä¼åå±",
      "ä»¥äººä¸ºæ¬",
      "å¨é¢åï¿½ï¿½å¯æç»­",
      "ç»ç­¹å¼é¡¾"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "ç§å­¦åå±è§çç¬¬ä¸è¦ä¹æ¯( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_367",
    "type": "single",
    "answer": 2,
    "options": [
      "åå±",
      "ä»¥äººä¸ºæ¬",
      "å¨é¢åè°å¯æç»­",
      "ç»ç­¹å¼é¡¾"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "ç§å­¦åå±è§çåºæ¬è¦æ±æ¯( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_368",
    "type": "single",
    "answer": 3,
    "options": [
      "åå±",
      "ä»¥äººä¸ºæ¬",
      "å¨é¢åè°å¯æç»­",
      "ç»ç­¹å¼é¡¾"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "ç§å­¦åå±è§çæ ¹æ¬æ¹æ³æ¯( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_369",
    "type": "single",
    "answer": 2,
    "options": [
      "äººæ",
      "ä¸å©",
      "èªä¸»åæ°",
      "å·¥ä¸å"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "( )æ¯ç§æåå±ççµé­ï¼æ¯ä¸ä¸ªæ°æåå±çä¸ç«­å¨åï¼æ¯æ¯æå½å®¶å´èµ·çç­éª¨ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_370",
    "type": "single",
    "answer": 3,
    "options": [
      "è½¬åç»æµåå±æ¹å¼",
      "å å¿«åéåè¿ç¨",
      "å¢å¼ºèªä¸»åæ°è½å",
      "ä¿è¿åºååè°åå±"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "è¿å¥æ°ä¸çºªä»¥åï¼åä¸­å¤®æåºè¦æ¯å´ä¸åå°åºç­èå·¥ä¸åºå°ãä¿è¿ä¸­é¨å°åºå´èµ·ãå®æ½ï¿½ï¿½ï¿½é¨å¤§å¼åï¼å¹¶å¼ºè°é¼å±ä¸é¨å°åºçååå±ãè¿æ¯ä¸ºäº( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_371",
    "type": "single",
    "answer": 1,
    "options": [
      "åçé¢å¯¼",
      "äººæ°å½å®¶ä½ä¸»",
      "ä¾æ³æ²»å½",
      "ç¤¾ä¼åè°"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "ç§å­¦åå±è§å¼ºè°ï¼ç¤¾ä¼ä¸»ä¹æ°ä¸»æ¿æ²»çæ¬è´¨åæ ¸å¿æ¯( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_372",
    "type": "single",
    "answer": 0,
    "options": [
      "äººæ°ä»£è¡¨å¤§ä¼å¶åº¦",
      "å¤ååä½åæ¿æ²»ååå¶åº¦",
      "æ°æåºåèªæ²»å¶åº¦",
      "åºå±ç¾¤ä¼èªæ²»å¶åº¦"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "( )æ¯æå½çæ ¹æ¬æ¿æ²»å¶åº¦ï¼æ¯å¨å½åæäººæ°å½å®¶ä½ä¸»çæ ¹æ¬éå¾åæé«å®ç°å½¢å¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_373",
    "type": "single",
    "answer": 1,
    "options": [
      "åæä»¥é©¬åä¸»ä¹ãæ¯æ³½ä¸ææ³ãéå°å¹³çè®ºåâä¸ä¸ªä»£è¡¨âéè¦ææ³ä¸ºæå¯¼",
      "æ°ä¸»æ³æ²»ãå¬å¹³æ­£ä¹ãè¯ä¿¡åç±ãåæ»¡æ´»åãå®å®æåºãäººä¸èªç¶åè°ç¸å¤",
      "è§£å³äººæ°ç¾¤ä¼æå³å¿ãæç´æ¥ãæç°å®çå©çé®é¢",
      "å°2020å¹´å®å¨å®ç°ç¤¾ä¼ä¸»ä¹åè°ç¤¾ä¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æå»ºç¤¾ä¼ä¸»ä¹åè°ç¤¾ä¼çæ»è¦æ±æ¯( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_374",
    "type": "single",
    "answer": 1,
    "options": [
      "å®äºæ±æ¯ãç¾¤ä¼è·¯çº¿ãç¬ç«èªä¸»",
      "è§£æ¾ææ³ãå®äºæ±æ¯ãä¸æ¶ä¿±è¿ãæ±çå¡å®",
      "ç»ä¸æçº¿ãæ­¦è£æäºãåçå»ºè®¾",
      "åçå»ºè®¾ãç¬ç«èªä¸»ãæ±çå¡å®"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "ç§å­¦åå±è§æé²æçç²¾ç¥å®è´¨æ¯( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_375",
    "type": "single",
    "answer": 1,
    "options": [
      "å»ºè®¾ä»ä¹æ ·çåãææ ·å»ºè®¾å",
      "å®ç°ä»ä¹æ ·çåå±ãææ ·åå±",
      "ä»ä¹æ¯ç¤¾ä¼ä¸»ä¹ãææ ·å»ºè®¾ç¤¾ä¼ä¸»ä¹",
      "ä»ä¹æ¯ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹ãææ ·å»ºè®¾ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "ç§å­¦åå±è§åé æ§å°åç­äºæ°å½¢å¿ä¸( )é®é¢ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_376",
    "type": "single",
    "answer": 3,
    "options": [
      "ç§å­¦åå±è§çç¬¬ä¸è¦ä¹æ¯ä»¥äººä¸ºæ¬",
      "ç§å­¦åå±è§çæ ¸å¿ç«åºæ¯æ¨å¨ç»æµç¤¾ä¼åå±",
      "ç§å­¦åå±è§çåºæ¬è¦æ±æ¯ä¿è¿ç¤¾ä¼åè°",
      "ç§å­¦åå±è§çæ ¹æ¬æ¹æ³æ¯ç»ç­¹å¼é¡¾"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "å³äºç§å­¦åå±è§çåè¿°æ­£ç¡®çæ¯( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_377",
    "type": "single",
    "answer": 1,
    "options": [
      "èµæºèçº¦ãç¯å¢åå¥½ãäººåèªç¶è¦åè°ç¸å¤",
      "çäº§åå±ãçæ´»å¯è£ãçæè¯å¥½",
      "éåº¦åç»æãè´¨éãæçç¸ç»ä¸",
      "ä»¥ä¿¡æ¯åå¸¦å¨å·¥ä¸åï¼ä»¥å·¥ä¸åä¿è¿ä¿¡æ¯å"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "åæå¯æç»­åå±ï¼è¦åæèµ°( )çææåå±éè·¯ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "mg2_378",
    "type": "single",
    "answer": 2,
    "options": [
      "äººä¸èªç¶åè°ç¸å¤",
      "ç¤¾ä¼å®å®",
      "æ°ä¸»æ³æ²»",
      "æ¹é©å¼æ¾"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "( )ï¼å°±æ¯ç¤¾ä¼ä¸»ä¹æ°ä¸»å¾å°åååæ¬ï¼ä¾æ³æ²»å½åºæ¬æ¹ç¥å¾å°åå®è½å®ï¼åæ¹é¢ç§¯æå ç´ å¾å°å¹¿æ³è°å¨ã",
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
      "åæå¨å¿å¨æä¸ºäººæ°æå¡ï¼å§ç»ææå¹¿å¤§äººæ°çæ ¹æ¬å©çä½ä¸ºååå½å®¶å·¥ä½çæ ¹æ¬åºåç¹åè½èç¹",
      "åæå°éç¤¾ä¼åå±è§å¾åå°éäººæ°åå²ä¸»ä½å°ä½çä¸è´æ§",
      "åæä¸ºå´é«çæ³å¥æåä¸ºæå¹¿å¤§äººæ°è°å©ççä¸è´æ§",
      "åæå®æåçåé¡¹å·¥ä½åå®ç°äººæ°å©ççä¸è´æ§"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "åæä»¥äººä¸ºæ¬çæ ¹æ¬å«ä¹ä¸»è¦æ( )ã",
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
      "çäº§åå±",
      "çæ´»å¯è£",
      "ç»æµåå±",
      "çæè¯å¥½"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "åæå¯æç»­åå±ï¼è¦åå®èµ°( )çææåå±éè·¯ã",
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
      "åçé¢å¯¼",
      "ç¤¾ä¼åè°åå±",
      "äººæ°å½å®¶ä½ä¸»",
      "ä¾æ³æ²»å½"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "åæä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹æ¿æ²»åå±éè·¯ï¼ææ ¹æ¬çæ¯è¦åæ( )ææºç»ä¸ã",
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
      "åæ»¡æ´»å",
      "è¯ä¿¡åç±",
      "å¬å¹³æ­£ä¹",
      "æ°ä¸»æ³æ²»"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "( )ï¼æ¯æå»ºç¤¾ä¼ä¸»ä¹åè°ç¤¾ä¼çæ»è¦æ±ã",
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
      "çææ¯ä¸å¯¸å½å",
      "å¨é¢ä¿è¿èµæºèçº¦",
      "å å¤§çæç¯å¢ä¿æ¤ååº¦",
      "ä»¥ç ´åç¯å¢ä¸ºä»£ä»·è¿è¡çäº§"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æ¨å¨å½¢æäººä¸èªç¶åè°åå±ç°ä»£åå»ºè®¾æ°æ ¼å±ï¼è¦åå°( )ã",
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
      "æ§æ¿èéª",
      "æ¹é©å¼æ¾èéª",
      "å¸åºç»æµèéª",
      "å¤é¨ç¯å¢èéª"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "è¡é¦æ¶æåº:âæ°å½¢å¿ä¸ï¼åé¢ä¸´ç( )ç­åå¤§èéªæ¯é¿æçãå¤æçãä¸¥å³»çï¼ç²¾ç¥ææ å±é©ãè½åä¸è¶³å±é©ãè±ç¦»ç¾¤ä¼å±é©ãæ¶æèè´¥å±é©æ´å å°éå°æå¨å¨åé¢åãâ",
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
      "é©¬åæåå®ä¸»ä¹",
      "æ¯æ³½ä¸ææ³",
      "éå°å¹³çè®º",
      "âä¸ä¸ªä»£è¡¨âéè¦ææ³"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "ç§å­¦åå±è§æ¯å( )æ¢ä¸èç¸æ¿åä¸æ¶ä¿±è¿çç§å­¦çè®ºã",
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
      "å°éèªç¶",
      "é¡ºåºèªç¶",
      "ä¿æ¤èªç¶",
      "å©ç¨èªç¶"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "å»ºè®¾çæææï¼å¿é¡»æ ç«( )ççæææçå¿µã",
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
      "æçæè¯",
      "èçº¦æè¯",
      "ç¯ä¿æè¯",
      "çææè¯"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "å å¼ºçæææå®£ä¼ æè²ï¼è¦å¢å¼ºå¨æ°ç( )ï¼åªåèµ°åç¤¾ä¼ä¸»ä¹çææææ°æ¶ä»£ã",
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
      "ä¼ ç»å",
      "å­¦ä¹ å",
      "æå¡å",
      "åæ°å"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "å¨é¢æé«åçå»ºè®¾ç§å­¦åæ°´å¹³ï¼è¦å»ºè®¾( )çé©¬åæä¸»ä¹æ§æ¿åã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665243_0",
    "type": "single",
    "answer": 2,
    "options": [
      "17ä¸çºªæ«18ä¸çºªåï¼",
      "18ä¸çºªæ«19ä¸çºªåï¼",
      "19ä¸çºªæ«20ä¸çºªåï¼",
      "20ä¸çºªæ«21ä¸çºªå;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸çè¿å¥å¸å½ä¸»ä¹åæ äº§é¶çº§é©å½æ¶ä»£æ¯å¨ï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665243_1",
    "type": "single",
    "answer": 3,
    "options": [
      "ï¿½ï¿½ï¿½å®éè¦åå½éèæ¯ï¼",
      "ç©è´¨æ¡ä»¶åé¶çº§åºç¡ï¼",
      "çè®ºåºç¡åæåæ¥æºï¼",
      "åé¢å¯¼äººæ°è¿è¡é©å½åå»ºè®¾çæåå®è·µ;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ¯æ³½ä¸ææ³å½¢æååå±çå®è·µåºç¡æ¯ï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665243_2",
    "type": "single",
    "answer": 3,
    "options": [
      "æ¯æ³½ä¸å¨å¨åé¢å¯¼å°ä½çç¡®ç«ï¼",
      "ææ¥æäºçå¤æç¯å¢åä¸°å¯å®è·µï¼",
      "ä¸­å½é©å½ä¸¤æ¬¡èå©ä¸ä¸¤æ¬¡å¤±è´¥çåå¤æ¯è¾ï¼",
      "åççè®ºä¿®å»çå å¼ºåææ³è·¯çº¿çç«¯æ­£;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸ºæ¯æ³½ä¸ææ³çæçåé å¿è¦çææ³åçè®ºåºç¡çæ¯ï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665243_3",
    "type": "single",
    "answer": 0,
    "options": [
      "è¿ä»£è¥¿æ¹èµäº§é¶çº§ææ³å¨ä¸­å½çä¼ æ­ï¼",
      "äºåè¿å¨ï¼",
      "æ°æåè¿å¨ï¼",
      "é©¬åæä¸»ä¹å¨ä¸­å½çå¹¿æ³ä¼ æ­;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä»¥ä¸å³äºæ¯æ³½ä¸ææ³å½¢æçææ³æåæ¡ä»¶çéé¡¹ï¼ä¸æ­£ç¡®çä¸ºï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665243_4",
    "type": "single",
    "answer": 0,
    "options": [
      "ãæ¹ååæ°è¿å¨èå¯ï¿½ï¿½åãï¼",
      "ãå¨æç»¥å¹²é¨ä¼è®®ä¸çè®²è¯ãï¼",
      "ãä¸­å½é©å½åä¸­å½å±äº§åãï¼",
      "ãæ°æ°ä¸»ä¸»ä¹è®ºã;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nç¬¬ä¸æ¬¡å½åæäºæ¶æï¼æ¯æ³½ä¸ä»¥é©¬åä¸»ä¹ä¸ºæå¯¼ï¼æåºæ°æ°ä¸»ä¸»ä¹é©å½ææ³çèä½æ¯ï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665243_5",
    "type": "single",
    "answer": 3,
    "options": [
      "ãä¸­å½ççº¢è²æ¿æä¸ºä»ä¹è½å¤å­å¨ï¼ãï¼",
      "ãäºåå±±çæäºãï¼",
      "ãææä¹ç«ï¼å¯ä»¥çåãï¼",
      "ãä¸­å½ç¤¾ä¼åé¶çº§çåæã;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nåå°é©å½æäºæ¶æï¼æ å¿çæ¯æ³½ä¸ææ³åæ­¥å½¢æçèä½ä¸­ï¼ä»¥ä¸ä¸æ­£ç¡®çéé¡¹æ¯ï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665243_6",
    "type": "single",
    "answer": 1,
    "options": [
      "æåºäºæ°æ°ä¸»ä¸»ä¹é©å½çåºæ¬ææ³ï¼",
      "æ°æ°ä¸»ä¸»ä¹é©å½çè®ºçç³»ç»éè¿°ï¼",
      "æåºå¹¶éè¿°äºåæåå´åå¸ãæ­¦è£å¤ºåæ¿æçææ³ï¼",
      "å½¢æç¤¾ä¼ä¸»ä¹é©å½åç¤¾ä¼ä¸»ä¹å»ºè®¾çéè¦ææ³;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ å¿çæ¯æ³½ä¸ææ³å¾å°å¤æ¹é¢å±å¼èè¶äºæççæ¯ï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665243_7",
    "type": "single",
    "answer": 2,
    "options": [
      "åçå«å¤§ï¼",
      "åçå­å¤§ï¼",
      "åçä¸å¤§ï¼",
      "åçäºå¤§;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ¯æ³½ä¸ææ³è¢«ç¡®ç«ä¸ºåå¿é¡»é¿æåæçæå¯¼ææ³çä¼è®®æ¯ï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665243_8",
    "type": "single",
    "answer": 3,
    "options": [
      "ãè®ºäººæ°æ°ä¸»ä¸æ¿ãï¼",
      "ãè®ºåå¤§å³ç³»ãï¼",
      "ãå³äºæ­£ç¡®å¤çäººæ°åé¨çç¾çé®é¢ãï¼",
      "ãåå¯¹æ¬æ¬ä¸»ä¹ã;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nè§£æ¾æäºæ¶æåæ°ä¸­å½æç«ä»¥åï¼ä»¥ä¸ä¸å±äºå¯¹æ¯æ³½ä¸ææ³ä¸°å¯ååå±çèä½æ¯ï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665243_9",
    "type": "single",
    "answer": 1,
    "options": [
      "ç»ä¸æçº¿ï¼",
      "åå°é©å½ï¼",
      "æ­¦è£æäºï¼",
      "åèªèº«çå»ºè®¾;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä»¥ä¸å¯¹æ°æ°ä¸»ä¸»ä¹é©å½çä¸å¤§æ³å®è¡¨è¿°ä¸æ­£ç¡®çéé¡¹æ¯ï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665243_10",
    "type": "single",
    "answer": 3,
    "options": [
      "å®åµä¸è´ï¼",
      "åæ°ä¸è´ï¼",
      "ç¦è§£æåï¼",
      "å¨å¿å¨æä¸ºäººæ°æå¡;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ¯æ³½ä¸ç¡®ç«çæ°åäººæ°åéå»ºè®¾çå®æ¨æ¯ï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_11",
    "type": "single",
    "answer": 0,
    "options": [
      "æ¿ç­åç­ç¥ççè®ºï¼",
      "ææ³æ¿æ²»åæåå·¥ä½ççè®ºï¼",
      "åçå»ºè®¾çè®ºï¼",
      "é©å½åéå»ºè®¾ååäºæç¥ççè®º;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næç¥ä¸è¦èè§æäººï¼ææ¯ä¸è¦éè§æäººï¼è¿å±äºæ¯æ³½ä¸çï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_12",
    "type": "single",
    "answer": 3,
    "options": [
      "ææ³æ¿æ²»å·¥ä½æ¯ç»æµå·¥ä½åå¶ä»ä¸åå·¥ä½ççå½çº¿ï¼",
      "åå±æ°æçãç§å­¦çãå¤§ï¿½ï¿½ï¿½çæåï¼",
      "ç¥è¯åå­å¨é©å½åå»ºè®¾ä¸­å·æéè¦ä½ç¨ï¼",
      "å½éæç¥åå¤äº¤å·¥ä½;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä»¥ä¸éé¡¹ä¸­ï¼ä¸å±äºæ¯æ³½ä¸ææ³æ¿æ²»å·¥ä½åæåå·¥ä½ççè®ºçæ¯ï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_13",
    "type": "single",
    "answer": 0,
    "options": [
      "é¿æå±å­ãäºç¸çç£ï¼",
      "ç¾è±é½æ¾ãç¾å®¶äºé¸£ï¼",
      "ç»ç­¹å¼é¡¾ãéå½å®æï¼",
      "å¢ç»ââæ¹è¯ââå¢ç»;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nç¤¾ä¼ä¸»ä¹å¶åº¦å»ºç«åï¼å¨ä¸æ°ä¸»åæ´¾çå³ç³»ä¸ï¼ä¸­å½å±äº§åå®è¡çæ¹éæ¿ç­æ¯ï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_14",
    "type": "single",
    "answer": 3,
    "options": [
      "çè®ºåå®è·µç¸ç»åçä½é£ï¼",
      "åäººæ°ç¾¤ä¼ç´§å¯å°èç³»å¨ä¸èµ·çä½é£ï¼",
      "èªææ¹è¯çä½é£ï¼",
      "å¡å¿ä¿æè°è¦å¥æçä½é£;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä»¥ä¸éé¡¹ä¸­ä¸å±äºä¸­å½å±äº§ååºå«äºå¶ä»ä»»ä½æ¿åçæ¾èæ å¿çæ¯ï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_15",
    "type": "single",
    "answer": 1,
    "options": [
      "ç»ä¸æçº¿ï¼",
      "ç¬ç«èªä¸»ï¼",
      "æ­¦è£æäºï¼",
      "åèªèº«çå»ºè®¾;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä»¥ä¸éé¡¹ä¸­ï¼ä¸å±äºä¸­å½å±äº§åå¨ä¸­å½é©å½ä¸­æèæäººçä¸ä¸ªä¸»è¦æ³å®çæ¯ï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_16",
    "type": "single",
    "answer": 2,
    "options": [
      "åå°æçãæå©ãæèï¼",
      "å¼±å°çé©å½åéå¨ååççä¸»å®¢è§æ¡ä»¶ä¸è½å¤æèå¼ºå¤§çåå¨åéï¼",
      "çé¢è¢«é¢å¯¼èåçå±åçæäººä½åå³æäºå¹¶åå¾èå©ï¼",
      "è¦ææ¡æäºçä¸»è¦æ¹åï¼ä¸è¦åé¢åºå»;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ äº§é¶çº§åå¶æ¿åè¦å®ç°èªå·±å¯¹åçèçé¢å¯¼ï¼å¿é¡»å·å¤ä¸¤ä¸ªæ¡ä»¶ï¼ä¸æ¯å¯¹è¢«é¢å¯¼èç»ä»¥ç©è´¨å©çï¼è³å°ä¸æå®³å¶å©çï¼åæ¶ç»ä»¥æ¿æ²»æè²ï¼äºæ¯ï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_17",
    "type": "single",
    "answer": 1,
    "options": [
      "å®äºæ±æ¯ï¼",
      "è°æ¥ç ç©¶ï¼",
      "ç¾¤ä¼è·¯çº¿ï¼",
      "ç¬ç«èªä¸»;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä»¥ä¸å¯¹æ¯æ³½ä¸ææ³çæ´»ççµé­çä¸ä¸ªåºæ¬æ¹é¢è¡¨è¿°ä¸æ­£ç¡®çæ¯ï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_18",
    "type": "single",
    "answer": 2,
    "options": [
      "åä¸å±ä¸ä¸­å¨ä¼ï¼",
      "åä¸å±äºä¸­å¨ä¼ï¼",
      ".åä¸å±å­ä¸­å¨ä¼ï¼",
      "åäºå±å­ä¸­å¨ä¼;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næåºè´¯ç©¿äºæ¯æ³½ä¸ææ³åä¸ªç»æé¨åçç«åºãè§ç¹åæ¹æ³æ¯æ¯æ³½ä¸ææ³çæ´»ççµé­çå³è®®çä¼è®®æ¯ï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_19",
    "type": "single",
    "answer": 2,
    "options": [
      "âæä»¬å¿é¡»å§ç»åæè§£æ¾ææ³ãå®äºæ±æ¯ãä¸æ¶ä¿±è¿ï¼ç»§ç»­å¨æ°çæ¶ä»£æ¡ä»¶ä¸æé©¬åæä¸»ä¹åºæ¬åçåä¸­å½å·ä½å®éç¸ç»åâ¦â¦âï¼",
      "âå®äºæ±æ¯ï¼å°±æ¯ä¸æ­æ·±åå¯¹ä¸­å½å½æçè®¤è¯ï¼ç ç©¶åææ¡ç¤¾ä¼åå±çå®¢è§è§å¾ï¼æ¾åºéåä¸­å½æåµçé©å½åå»ºè®¾éè·¯ï¼â¦â¦å®ç°æ¨å¨åå²åè¿çç®æ ãâï¼",
      "âå®äºæ±æ¯ï¼æ¯é©¬åæä¸»ä¹çæ ¹æ¬è§ç¹ï¼æ¯ä¸­å½å±äº§åäººè®¤è¯ä¸çãæ¹é ä¸ççæ ¹æ¬è¦æ±ï¼æ¯æä»¬åçæ ¹æ¬ææ³æ¹æ³ãå·¥ä½æ¹æ³ãé¢å¯¼æ¹æ³ãâï¼",
      "âéå°å¹³åå¿æåºï¼å®äºæ±æ¯ï¼æ¯æ äº§é¶çº§ä¸çè§çåºç¡ï¼æ¯é©¬åæä¸»ä¹çææ³åºç¡ï¼æ¯æ¯æ³½ä¸ææ³çæ ¹æ¬ç¹ãâ;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¹ è¿å¹³å¨çºªå¿µæ¯æ³½ä¸è¯è¾°120å¨å¹´åº§è°ä¼ä¸æåºï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_20",
    "type": "single",
    "answer": 1,
    "options": [
      "æ¹é©å¼æ¾ï¼",
      "ç¾¤ä¼è·¯çº¿ï¼",
      "å®äºæ±æ¯ï¼",
      "èªåæ´ç;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸­å½å±äº§åççå½çº¿åæ ¹æ¬å·¥ä½è·¯çº¿æ¯ï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_21",
    "type": "single",
    "answer": 1,
    "options": [
      "ä»å®éåºåï¼å®äºæ±æ¯ï¼",
      "ç¬ç«èªä¸»ï¼èªåæ´çï¼",
      "ä¾é ç¾¤ä¼ï¼å¢ç»ç¾¤ä¼ï¼",
      "æ¹é©å¼æ¾ï¼äºåå¤æ´;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸­å½å±äº§åè¿è¡é©å½åå»ºè®¾å¨é¨çè®ºåå®è·µçç«è¶³ç¹æ¯ï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_22",
    "type": "single",
    "answer": 3,
    "options": [
      "éå°å¹³çè®ºï¼",
      "âä¸ä¸ªä»£è¡¨âéè¦ææ³ï¼",
      "ç§å­¦åå±è§ï¼",
      "æ¯æ³½ä¸ææ³;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\né©¬åæä¸»ä¹ä¸­å½åç¬¬ä¸æ¬¡åå²æ§é£è·ççè®ºæææ¯ï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_23",
    "type": "single",
    "answer": 2,
    "options": [
      "æ¯å¤ºåä¸­å½é©å½èå©ççè®ºæ­¦å¨ï¼",
      "æ¯ç¤¾ä¼ä¸»ä¹ä¸­å½ç«å½å»ºå½çææ³æ¿æ²»åºç¡ï¼",
      "æ¯ä¸çè¢«åè¿«æ°æè§£æ¾ççè®ºåå¯¼ï¼",
      "æ¯ä¸­åæ°æå¢ç»æ¯å´çç²¾ç¥æ¯æ±;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nï¿½ï¿½äºæ¯æ³½ä¸ææ³çåå²å°ä½åæå¯¼ä½ç¨ï¼ä»¥ä¸è¡¨è¿°ä¸­ä¸ç¬¦åçæ¯ï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_24",
    "type": "single",
    "answer": 2,
    "options": [
      "å³ç³»å°ææ ·çå¾ååå½å®¶è¿å»å åå¹´å¥æååè¿çåå²ï¼",
      "å³ç³»å°åçï¿½ï¿½ï¿½ç»ãå½å®¶çå®å®ï¼",
      "å³ç³»å°é©¬åæä¸»ä¹ä¸­å½åçè¿ç¨ï¼",
      "å³ç³»å°ååå½å®¶æªæ¥çåå±åé;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå³äºææ ·ç§å­¦è¯ä»·æ¯æ³½ä¸åæ¯æ³½ä¸ææ³çé®é¢ï¼ä»¥ä¸è¡¨è¿°ä¸ç¬¦åçæ¯ï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_25",
    "type": "single",
    "answer": 2,
    "options": [
      "å®åèµæ¬ä¸»ä¹ï¼",
      "èµæ¬ä¸»ä¹ï¼",
      "å¸å½ä¸»ä¹ï¼",
      "å°å»ºä¸»ä¹;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nè¿ä»£ä¸­å½è´«ç©·è½ååä¸åç¾ç¥¸çæ»æ ¹æºæ¯( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_26",
    "type": "single",
    "answer": 0,
    "options": [
      "å°ä¸»é¶çº§ï¼",
      "å®åèµäº§é¶çº§ï¼",
      "åæ°é¶çº§ï¼",
      "åå¸å°èµäº§é¶çº§;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå¸å½ä¸»ä¹ç»æ²»ä¸­å½çä¸»è¦ç¤¾ä¼åºç¡æ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_27",
    "type": "single",
    "answer": 0,
    "options": [
      "ç±èªå¨é¶çº§è½¬åä¸ºèªä¸ºçé¶çº§ï¼",
      "ç±èªä¸ºçé¶çº§è½¬åä¸ºèªå¨é¶çº§ï¼",
      "ç±èªå¨é¶çº§è½¬åä¸ºèªç±çé¶çº§ï¼",
      "ç±èªä¸ºçé¶çº§è½¬åä¸ºèªä¸»çé¶çº§;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå¨åæé©å½çå½±åä¸ï¼1919å¹´äºåè¿å¨çåï¼ä¸­å½æ äº§é¶çº§å¼å§ä»¥ç¬ç«çæ¿æ²»åéç»ä¸åå²èå°ï¼è¿è¯´æä¸­å½æ äº§é¶çº§ï¼  ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_28",
    "type": "single",
    "answer": 1,
    "options": [
      "é©¬åä¸»ä¹å¨ä¸­å½çä¼ æ­ï¼",
      "è¿ä»£ä¸­å½ç¤¾ä¼çç¾åé©å½è¿å¨çåå±ï¼",
      "äººç±»åå²å¼å§ç±èµæ¬ä¸»ä¹åç¤¾ä¼ä¸»ä¹çè½¬å ï¼",
      "è¢«åè¿«æ°æåè¢«åè¿«äººæ°çè§é;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ°æ°ä¸»ä¸»ä¹é©å½çè®ºå½¢æçç°å®éè¦æ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_29",
    "type": "single",
    "answer": 1,
    "options": [
      "æ°æ°ä¸»ä¸»ä¹é©å½ä¸æ¯ä¸è¬æä¹çæ§çèµäº§é¶çº§æ°ä¸»é©å½ï¼",
      "æ°æ°ä¸»ä¸»ä¹é©å½æ¯æ äº§é¶çº§çç¤¾ä¼ä¸»ä¹é©å½ï¼",
      "æ°æ°ä¸»ä¸»ä¹é©å½ä¸ç ´åä»»ä½å°è½åå åå¸åå°å»ºçæ°æèµæ¬ä¸»ä¹æåï¼",
      "æ°æ°ä¸»ä¸»ä¹é©å½æ¯æ°å¼çãç¹æ®çèµäº§é¶çº§æ°ä¸»é©å½;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸åå³äºæ°æ°ä¸»ä¸»ä¹é©å½è¡¨è¿°ä¸æ­£ç¡®çæ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_30",
    "type": "single",
    "answer": 1,
    "options": [
      "ä¸çèµäº§é¶çº§é©å½çä¸é¨åï¼",
      "ä¸çæ äº§é¶çº§ç¤¾ä¼ä¸»ä¹é©å½çä¸é¨åï¼",
      "äºéææ°æè§£æ¾è¿å¨çé©å½ä¸­å¿ï¼",
      "ä¸çèµäº§é¶çº§æ°ä¸»ä¸»ä¹é©å½çä¸­å¿;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\n1917å¹´ä¿å½åæé©å½çèå©ä½¿ä¸­å½æ°ä¸»é©å½èµ·äºä¸ä¸ªååï¼ä½¿ä¹æä¸ºï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_31",
    "type": "single",
    "answer": 0,
    "options": [
      "é©å½åå ï¼",
      "é©å½å¯¹è±¡ï¼",
      "é©å½é¢å¯¼æï¼",
      "é©å½å¨å;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ°æ°ä¸»ä¸»ä¹é©å½æ»è·¯çº¿éè¿°çåå®¹ä¸åæ¬ï¼  ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_32",
    "type": "single",
    "answer": 1,
    "options": [
      "æ°æ°ä¸»ä¸»ä¹é©å½æ»è·¯çº¿ææäºä¸­å½é©å½çé¢å¯¼æï¼",
      "æ°æ°ä¸»ä¸»ä¹é©å½æ»è·¯çº¿è§£å³äºä¸­å½å¦ä½å»ºç«ç¤¾ä¼ä¸»ä¹å¶åº¦çé®é¢ï¼",
      "æ°æ°ä¸»ï¿½ï¿½ä¹é©å½æ»è·¯çº¿ææäºä¸­å½é©å½çå¨å ï¼",
      "æ°æ°ä¸»ä¸»ä¹é©å½æ»è·¯çº¿ææäºä¸­å½é©å½çå¯¹è±¡;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå³äºæ°æ°ä¸»ä¸»ä¹é©å½æ»è·¯çº¿ï¼ä¸åè¡¨è¿°ä¸­ä¸æ­£ç¡®çä¸ºï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_33",
    "type": "single",
    "answer": 1,
    "options": [
      "ç¥è¯åå­ ï¼",
      "å·¥äººé¶çº§ï¼",
      "åæ°é¶çº§ï¼",
      "æ°æèµäº§é¶çº§;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\n1919å¹´è³1949å¹´ï¼ä¸­å½é©å½çæ§è´¨æ¯èµäº§é¶çº§æ°ä¸»é©å½ï¼å¶é¢å¯¼åéæ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_34",
    "type": "single",
    "answer": 2,
    "options": [
      "ãä¸­å½ççº¢è²æ¿æä¸ºä»ä¹è½å¤å­å¨ãï¼",
      "ãäºåå±±çï¿½ï¿½ï¿½äºãï¼",
      "ãæäºåæç¥é®é¢ãï¼",
      "ãä¸­å½é©å½åä¸­å½å±äº§åã;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ¯æ³½ä¸æåºâå±äº§åçä»»å¡ï¼åºæ¬å°ä¸æ¯ç»è¿é¿æåæ³æäºä»¥è¿å¥èµ·ä¹åæäºï¼ä¹ä¸æ¯åå åå¸ååä¹¡æï¼èæ¯èµ°ç¸åçéè·¯ãâæ¯å¨ï¼  ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_35",
    "type": "single",
    "answer": 0,
    "options": [
      "æ äº§é¶çº§ï¼",
      "åæ°é¶çº§ï¼",
      "åå¸å°èµäº§é¶çº§ï¼",
      "æ°æèµäº§é¶çº§;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸­å½é©å½çæåºæ¬å¨åæ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_36",
    "type": "single",
    "answer": 2,
    "options": [
      "ç»ä¸æçº¿ï¼",
      "æ­¦è£æäºï¼",
      "é©å½é¢å¯¼æï¼",
      "åçå»ºè®¾;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸­å½é©å½çä¸­å¿é®é¢æ¯ï¼  ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_37",
    "type": "single",
    "answer": 0,
    "options": [
      "å®åå¯¹å¸å½ä¸»ä¹ãå°å»ºä¸»ä¹ï¼èä¸æ¯ä¸è¬å°åå¯¹èµæ¬ä¸»ä¹ï¼",
      "èµäº§é¶çº§ææ¡é¢å¯¼æï¼æå¯¼ææ³æ¯èµäº§é¶çº§æ°ä¸»ä¸»ä¹ææ³ï¼",
      "æ äº§é¶çº§ææ¡é©å½é¢å¯¼æï¼é©å½åéæ¯å»ºç«ç¤¾ä¼ä¸»ä¹ç¤¾ä¼ï¼",
      "å®å±äºä¸çèµäº§é¶çº§é©å½çä¸é¨å;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ°æ°ä¸»ä¸»ä¹é©å½ä»å¶æ§è´¨ä¸æ¥è¯´ä»ç¶æ¯ä¸åºèµäº§é¶çº§æ°ä¸»é©å½ï¼æ¯ç±äºï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_38",
    "type": "single",
    "answer": 3,
    "options": [
      "é©å½çåéä¸å ï¼",
      "æå¯¼ææ³ä¸åï¼",
      "é©å½ççº²é¢ä¸åï¼",
      "é¢å¯¼é¶çº§ä¸å;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ°æ°ä¸»ä¸»ä¹é©å½ä¸æ¯ä¸è¬çèµäº§é¶çº§é©å½ï¼èæ¯æ°å¼çç¹æ®çèµäº§é¶çº§é©å½ï¼ææ ¹æ¬çåå æ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_39",
    "type": "single",
    "answer": 0,
    "options": [
      "å»ºç«ä»¥å·¥åèçä¸ºåºç¡çå¹¿æ³çç»ä¸æçº¿ï¼",
      "ä¸èµäº§é¶çº§äºå¤ºé¢å¯¼æï¼",
      "åæ¸æåï¼",
      "å»ºç«å¹¿æ³çæ°ä¸»é©å½ç»ä¸æçº¿ ;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ äº§é¶çº§è¦å®ç°å¯¹ä¸­å½é©å½çé¢å¯¼æï¼å¶æ ¸å¿é®é¢æ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_40",
    "type": "single",
    "answer": 0,
    "options": [
      "å¨å¤§é©å½æ¶æï¼é©å½ççä¸»è¦å¯¹è±¡æ¯åè±ªå£ç»ï¼",
      "å¨åå°é©å½æäºæ¶æï¼é©å½çä¸»è¦å¯¹è±¡æ¯å½æ°åæ°åéï¼",
      "å¨ææ¥æäºæ¶æï¼é©å½çä¸»è¦å¯¹è±¡æ¯æ¥æ¬å¸å½ä¸»ä¹ï¼",
      "å¨è§£æ¾æäºæ¶æï¼é©å½çä¸»è¦å¯¹è±¡æ¯å®åèµæ¬ä¸»ä¹;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸åå³äºä¸­å½é©å½å¯¹è±¡çè¡¨è¿°ä¸­ï¼éè¯¯çæ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_41",
    "type": "single",
    "answer": 2,
    "options": [
      "æ°æèµäº§é¶çº§ä¸æ¯ä¸­å½é©å½çå¨åï¼",
      "æ äº§é¶çº§åå¶æ¿åå¿é¡»å¯¹èµäº§é¶çº§è¿è¡åå³çæäºï¼",
      "æ°æèµäº§é¶çº§æ¯ä¸ä¸ªå¸¦æä¸¤é¢æ§çé¶çº§ï¼",
      "æ°æèµäº§é¶çº§æ¯å®åèµäº§é¶çº§çåè·¯äºº;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ¯æ³½ä¸å¨ãä¸­å½ç¤¾ä¼åé¶çº§çåæãä¸­æåºï¼æ°æèµäº§é¶çº§âå¯¹äºä¸­å½é©å½å·æçç¾çæåº¦âï¼è¿è¯´æï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_42",
    "type": "single",
    "answer": 2,
    "options": [
      "å³ä¸è½è®©å°æ°èµæ¬å®¶å°æ°å°ä¸»âæçºµå½è®¡æ°çâï¼",
      "å³ä¸è½å»ºç«æ¬§ç¾å¼çèµæ¬ä¸»ä¹ç¤¾ä¼ï¼",
      "å³ä¸è½æ¯âå°æ°äººæå¾ä¸ºå¬âï¼",
      "å³ä¸è½è¿æ¯æ§çåå°å»ºç¤¾ä¼;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ¯æ³½ä¸å¨ãæ°æ°ä¸»ä¸»ä¹è®ºãä¸­æåºçä¸­å½ç»æµåä¸ªå³ä¸è½ï¼ä»¥ä¸ä¸æ­£ç¡®éé¡¹æ¯ï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_43",
    "type": "single",
    "answer": 0,
    "options": [
      "å®æ¯èµæ¬ä¸»ä¹ï¼",
      "å®ä¸å¤å½å¸å½ä¸»ä¹ãæ¬å½å°ä¸»åæ§å¼å¯åå¯åç»åçï¼",
      "å®å·æä¹°åæ§ãå°å»ºæ§ãåæ­æ§ï¼",
      "å®ä¸¥éé»ç¢äºä¸­å½ç¤¾ä¼ç»æµçåå±;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå³ï¿½ï¿½ï¿½ä¸­å½é©å½ä¹æä»¥è¦åå¯¹å®åèµæ¬ä¸»ä¹çåå ï¼ä¸ååè¿°ä¸æ­£ç¡®çæ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_44",
    "type": "single",
    "answer": 1,
    "options": [
      "âæ²¡æ¶å°å»ºå°ä¸»é¶çº§çåå°å½åæ°ææâæ¯æ°æ°ä¸»ä¸»ä¹é©å½çä¸»è¦åå®¹ ï¼",
      "âæ²¡æ¶æ°æèµæ¬âåå«çæ°æ°ä¸»ä¸»ä¹é©å½çæ§è´¨ï¼",
      "âæ²¡æ¶å®åèµæ¬âåå«çç¤¾ä¼ä¸»ä¹é©å½çæ§è´¨ï¼",
      "âä¿æ¤æ°æå·¥åä¸âæ¯æ°æ°ä¸»ä¸»ä¹ç»æµçº²é¢ä¸­æå·ç¹è²çä¸é¡¹åå®¹;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\n1947å¹´12æï¼æ¯æ³½ä¸å¨ãç®åçå½¢å¿åæä»¬çä»»å¡ãçæ¥åä¸­ï¼ç¬¬ä¸æ¬¡å°åå¨å½åé¶æ®µçç»æµçº²é¢æ¦æ¬ä¸ºæ°æ°ä¸»ä¸»ä¹çä¸å¤§ç»æµçº²é¢ãå³äºè¿ä¸çº²é¢ï¼ä»¥ä¸è¡¨è¿°ä¸æ­£ç¡®çä¸ºï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_45",
    "type": "single",
    "answer": 3,
    "options": [
      "ç§å­¦çï¼",
      "ä¸ä¿ç ï¼",
      "æ°æçï¼",
      "æ°ä¸»ç;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ¯æ³½ä¸å¨ãæ°æ°ä¸»ä¸»ä¹è®ºãä¸­æåºï¼æ°æ°ä¸»ä¸»ä¹çæåæ¯å¤§ä¼çï¼å èå³æ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_46",
    "type": "single",
    "answer": 2,
    "options": [
      "1940å¹´çãæ°æ°ä¸»ä¸»ä¹è®ºãï¼",
      "1938å¹´çãè®ºæ°é¶æ®µãï¼",
      "1938å¹´çãæäºåæç¥é®é¢ãï¼",
      "1945å¹´çãè®ºèåæ¿åºã;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ­£å¼æåæåå´åå¸ãæ­¦è£å¤ºåæ¿æç¡®ç«ä¸ºä¸­å½é©å½éè·¯çæç« æ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_47",
    "type": "single",
    "answer": 0,
    "options": [
      "å¨ç»ä¸æçº¿çæå¸ä¸è¿è¡ï¼",
      "ä»¥æ­¦è£æäºä¸ºä¸»è¦å½¢å¼ï¼",
      "ä»¥åæé©å½æ ¹æ®å°ä¸ºæç¥éµå°ï¼",
      "ä»¥åå°é©å½ä¸ºåºæ¬åå®¹;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ¯æ³½ä¸å¨ãä¸­å½ççº¢è²æ¿æä¸ºä»ä¹è½å¤å­å¨ãåãäºåå±±çæäºãç­æç« ä¸­ï¼æåºå·¥åæ­¦è£å²æ®çææ³ãå³äºè¿ä¸ææ³çä¸»è¦åå®¹ï¼ä¸åéé¡¹ä¸­ä¸æ­£ç¡®çä¸ºï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_48",
    "type": "single",
    "answer": 3,
    "options": [
      "ãåå¯¹æ¬æ¬ä¸»ä¹ãï¼",
      "ãå¨æç»¥å¹²é¨ä¼è®®ä¸çè®²è¯ãï¼",
      "ããå±äº§åäººãååè¯ãï¼",
      "ãè®ºäººæ°æ°ä¸»ä¸æ¿ã;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ¯æ³½ä¸éä¸­æ¦æ¬æ°æ°ä¸»ä¸»ä¹é©å½åºæ¬ç»éªçæç« æè®²è¯æ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_49",
    "type": "single",
    "answer": 2,
    "options": [
      "å®äºæ±æ¯ãç¾¤ä¼è·¯çº¿åç¬ç«èªä¸»é®é¢ï¼",
      "åå°é©å½ãæ­¦è£æäºåæ ¹æ®å°å»ºè®¾é®é¢ï¼",
      "ç»ä¸æçº¿ãæ­¦è£æäºååçå»ºè®¾é®é¢ï¼",
      "æ°æ°ä¸»ä¸»ä¹çæ¿æ²»ãç»æµåæåé®é¢;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ¯æ³½ä¸å¨ããå±äº§åäººãååè¯ãä¸­è®ºè¿°äºä¸­å½å±äº§åå¨ä¸­å½é©å½ä¸­çä¸ä¸ªåºæ¬é®é¢ãä¸ä¸ªä¸»è¦æ³å®æ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_50",
    "type": "single",
    "answer": 3,
    "options": [
      "ç»æäºä¸­å½å åå¹´æ¥å°å»ºå°ä¸»é¶çº§å¥åç»æ²»å¹¿å¤§å³å¨äººæ°çåå²ï¼",
      "ç»æäºå¸å½ä¸»ä¹ãæ®æ°ä¸»ä¹å¥´å½¹ä¸­å½åæäººæ°çåå²ï¼",
      "å³å¨äººæ°æä¸ºå½å®¶åç¤¾ä¼çä¸»äººï¼å®ç°äºä¸­å½äººæ°ç¤¾ä¼æ¿æ²»å°ä½çæ ¹æ¬ååï¼",
      "å®ç°äºä¸­å½ä»å åå¹´å°å»ºä¸å¶å¶åº¦åç¤¾ä¼ä¸»ä¹å¶åº¦çåå;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå³äºæ°æ°ä¸»ä¸»ä¹é©å½èå©ç»ä¸­å½å¸¦æ¥çä¼å¤§åé©ï¼ä¸åè¯´æ³ä¸æ­£ç¡®çæ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_51",
    "type": "single",
    "answer": 2,
    "options": [
      "è¿éæ¢å¤ååå±çäº§ï¼",
      "å¯¹ä»å½å¤çå¸å½ä¸»ä¹ï¼",
      "å½»åºæ¶ç­å°ä¸»é¶çº§ï¼",
      "ä½¿æå½ç¨³æ­¥å°ç±åï¿½ï¿½ï¿½å½è½¬åä¸ºå·¥ä¸å½;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\n1949å¹´ï¼åçä¸å±äºä¸­å¨ä¼ä¸é¨è®¨è®ºäºå»ºè®¾æ°æ°ä¸»ä¸»ä¹ç¤¾ä¼çé®é¢ï¼æ¯æ³½ä¸å¨è¿æ¬¡å¤§ä¼çæ¥åä¸­ææåºçåå²ä»»å¡ä¸åæ¬ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_52",
    "type": "single",
    "answer": 1,
    "options": [
      "ä¸­å½ç°ä»£å·¥ä¸çåæ­¥åå±ï¼",
      "å·©åºçäººæ°æ°ä¸»ä¸æ¿ ï¼",
      "ç¤¾ä¼ä¸»ä¹å½è¥ç»æµçå£®å¤§ï¼",
      "èèå¯¹ä¸­å½å»ºè®¾çæ¯æ´;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸­å½ä»æ°æ°ä¸»ä¸»ä¹ç¤¾ä¼åç¤¾ä¼ä¸»ä¹è½¬åçæ ¹æ¬æ¿æ²»ä¿è¯æ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_53",
    "type": "single",
    "answer": 1,
    "options": [
      "èµæ¬ä¸»ä¹ä½ç³»çï¼",
      "ç¤¾ä¼ä¸»ä¹ä½ç³»çï¼",
      "å°å»ºä¸»ä¹ä½ç³»çï¼",
      "å±äº§ä¸»ä¹ä½ç³»ç;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ°æ°ä¸»ä¸»ä¹ç¤¾ä¼æ¯è¿æ¸¡æ§è´¨çç¤¾ä¼ï¼æ¯å±äºï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_54",
    "type": "single",
    "answer": 0,
    "options": [
      "1949å¹´ä¸­å±ä¸å±äºä¸­å¨ä¼ï¼",
      "1945å¹´ä¸­å±ä¸å¤§ï¼",
      "1953å¹´6æä¸­å¤®æ¿æ²»å±ä¼è®® ï¼",
      "1950å¹´6æä¸­å±ä¸å±ä¸ä¸­å¨ä¼;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næåºä½¿ä¸­å½âç¨³æ­¥å°ç±åä¸å½è½¬åä¸ºå·¥ä¸å½ï¼ç±æ°æ°ä¸»ä¸»ä¹å½å®¶è½¬åä¸ºç¤¾ä¼ä¸»ä¹å½å®¶âï¼å³âä¸¤ä¸ªè½¬åâåæ¶å¹¶ä¸¾ææ³çä¼è®®æ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_55",
    "type": "single",
    "answer": 1,
    "options": [
      "äººæ°å¤§ä¼åå¸å½ä¸»ä¹ãå°å»ºä¸»ä¹åå¶èµ°çå½æ°ååå¨æ´¾æ®ä½ççç¾ï¼",
      "å·¥äººé¶çº§åèµäº§é¶çº§ççç¾ï¼",
      "äººæ°æ¥çå¢é¿çç©è´¨æåéè¦åè½åçç¤¾ä¼çäº§ä¹é´ççç¾ï¼",
      "å¸å½ä¸»ä¹åä¸­åæ°æççç¾ãå°å»ºä¸»ä¹åäººæ°å¤§ä¼ççç¾;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå»ºå½åæï¼éçåå°æ¹é©çåºæ¬å®æï¼æå½å½åçä¸»è¦çç¾éæ­¥æ¼åä¸ºï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_56",
    "type": "single",
    "answer": 3,
    "options": [
      "å®ç°å½å®¶ç¤¾ä¼ä¸»ä¹å·¥ä¸åï¼",
      "å®ç°å¯¹åä¸ãæå·¥ä¸ç¤¾ä¼ä¸»ä¹æ¹é ï¼",
      "å®ç°å¯¹èµæ¬ä¸»ä¹å·¥åä¸ç¤¾ä¼ä¸»ä¹æ¹é ï¼",
      "å®ç°å½å®¶ç¤¾ä¼ä¸»ä¹ç°ä»£å;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸åå³äºè¿æ¸¡æ¶ææ»è·¯çº¿çåºæ¬åå®¹ä¸­ï¼ä¸æ­£ç¡®è¡¨è¿°çä¸ºï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_57",
    "type": "single",
    "answer": 0,
    "options": [
      "èµæ¬ä¸»ä¹åå½é½åºç°äºç»æµå±æºï¼",
      "è¿ä»£ä»¥æ¥çåå²è¡¨æï¼èµæ¬ä¸»ä¹å·¥ä¸åçéè·¯å¨ä¸­å½æ¯èµ°ä¸éçï¼",
      "å¨å¸å½ä¸»ä¹æ¶ä»£ï¼ä¸­å½éè¿èµ°èµæ¬ä¸»ä¹éè·¯å®ç°ç°ä»£åçå¯è½æ§å·²ç»å¤±å»ï¼",
      "èèéè¿ç¤¾ä¼ä¸»ä¹å·¥ä¸åæäºä¸çå¼ºå½ ;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸åæå³æ°ä¸­å½æç«åéæ©ç¤¾ä¼ä¸»ä¹å·¥ä¸åéè·¯çåå ä¸­ï¼ä¸æ­£ç¡®çæ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_58",
    "type": "single",
    "answer": 2,
    "options": [
      "å»ºç«ç¤¾ä¼ä¸»ä¹å½è¥ç»æµï¼",
      "å®è¡âä¸è¾¹åâï¼è·åèèçå¸®å©ï¼",
      "å®ç°ç¤¾ä¼ä¸»ä¹å·¥ä¸åï¼",
      "å°½å¿«å®æåç¤¾ä¼ä¸»ä¹çè¿æ¸¡;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ°ä¸­å½æç«åï¼æå½è¦å½»åºæè±ä»¥å¾è¢«å¨æ¨æçå½è¿ï¼å°±å¿é¡»ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_59",
    "type": "single",
    "answer": 1,
    "options": [
      "æ äº§é¶çº§é¢å¯¼çï¼äººæ°å¤§ä¼çï¼åå¯¹å¸å½ä¸»ä¹ãå°å»ºä¸»ä¹ãå®åä¸»ä¹çé©å½ï¼",
      "å¨ä¸ä¸ªç¸å½é¿çæ¶æåï¼éæ­¥å®ç°å½å®¶çç¤¾ä¼ä¸»ä¹å·¥ä¸åï¼å¹¶éæ­¥å®ç°å½å®¶å¯¹åä¸ãæå·¥ä¸åèµæ¬ä¸»ä¹å·¥åä¸çç¤¾ä¼ä¸»ä¹æ¹é ï¼",
      "é¼è¶³å¹²å²ï¼åäºä¸æ¸¸ï¼å¤å¿«å¥½çå»ºè®¾ç¤¾ä¼ä¸»ä¹ï¼",
      "ä»¥ç»æµå»ºè®¾ä¸ºä¸­å¿ï¼åæåé¡¹åºæ¬ååï¼åææ¹é©å¼æ¾;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nåå¨è¿æ¸¡æ¶æçæ»è·¯çº¿ãæ»ä»»å¡æ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_60",
    "type": "single",
    "answer": 3,
    "options": [
      "å®æäºæ°ä¸»é©å½éçï¿½ï¿½ï¿½åå²ä»»å¡ ãï¼",
      "å·©åºäºäººæ°æ°ä¸»ä¸æ¿ï¼",
      "æ¢å¤äºå½æ°ç»æµï¼",
      "å®æäºåå±å½æ°ç»æµçç¬¬ä¸ä¸ªäºå¹´è®¡å;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸åå³äºè¿æ¸¡æ¶ææ»è·¯çº¿çåå²æ¡ä»¶çè¡¨è¿°ä¸æ­£ç¡®çæ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_61",
    "type": "single",
    "answer": 0,
    "options": [
      "é©¬åä¸»ä¹å³äºè¿æ¸¡æ¶æççè®ºï¼",
      "é©¬åæä¸»ä¹å²å­¦ï¼",
      "é©¬åæä¸»ä¹æ¿æ²»ç»æµå­¦ï¼",
      "é©¬åæä¸»ä¹åäºçè®º;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nåå¨è¿æ¸¡æ¶æçæ»è·¯çº¿ççè®ºä¾æ®æ¯ï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_62",
    "type": "single",
    "answer": 2,
    "options": [
      "äºå©ç»ï¼",
      "åçº§ç¤¾ï¼",
      "äººæ°å¬ç¤¾ï¼",
      "é«çº§ç¤¾  ;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä»¥ä¸æ¯å¯¹åä¸ç¤¾ä¼ä¸»ä¹æ¹é ç»åçåå±é¶æ®µè¡¨è¿°éè¯¯çä¸ºï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_63",
    "type": "single",
    "answer": 1,
    "options": [
      "å½æç»æµæ§è´¨ï¼",
      "å®å¨çç¤¾ä¼ä¸»ä¹éä½ç»æµæ§è´¨ï¼",
      "å¨æ°ææå¶æ§è´¨ï¼",
      "ä½çº§å¬æå¶æ§è´¨;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nåä¸åä½åæåå¨é«æ½®é¶æ®µå°åçº§ç¤¾è½¬åä¸ºé«çº§ç¤¾ï¼å®è¡çäº§èµæåæ°éä½ææï¼å èå·æï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_64",
    "type": "single",
    "answer": 1,
    "options": [
      "èªæ¿äºå©ï¼",
      "äºå©åä½ï¼",
      "å¸åç¤ºèï¼",
      "å½å®¶å¸®å©;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næå½åä¸ç¤¾ä¼ä¸»ä¹æ¹é æéµå¾ªçååä¸åæ¬ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_65",
    "type": "single",
    "answer": 2,
    "options": [
      "å¨åå°æ¹é©åºç¡ä¸ï¼ä¸å¤±æ¶æºå°å¼å¯¼åæ°èµ°äºå©åä½çéè·¯ ï¼",
      "éµå¾ªèªæ¿äºå©ãå¸åç¤ºèãå½å®¶å¸®å©çååï¼",
      "éµå¾ªâä¸çº§ææï¼éä¸ºåºç¡âçåæç»æµæ¿ç­ ï¼",
      "éåå¾ªåºæ¸è¿çæ­¥éª¤ ;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä»¥ä¸éé¡¹ä¸­ä¸å±äºæå½ä¸ªä½åä¸ç¤¾ä¼ä¸»ä¹æ¹é çæåç»éªæ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_66",
    "type": "single",
    "answer": 0,
    "options": [
      "ä¸çº§ç£å¯¼ï¼",
      "è¯´ææè²ï¼",
      "ç¤ºèï¼",
      "å½å®¶å¸®å©;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næå½æå·¥ä¸ç¤¾ä¼ä¸»ä¹æ¹é çæ¹æ³ä¸åæ¬ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_67",
    "type": "single",
    "answer": 3,
    "options": [
      "äºå©ç»ï¼",
      "ä¾éåä½ç¤¾ï¼",
      "çäº§åä½ç¤¾ï¼",
      "å¬ç§åè¥;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸åå¯¹äºæ°ä¸­å½æå·¥ä¸ç¤¾ä¼ä¸»ä¹æ¹é çä¸»è¦è¿æ¸¡å½¢å¼çè¡¨è¿°ä¸æ­£ç¡®çæ¯ï¼   ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_68",
    "type": "single",
    "answer": 1,
    "options": [
      "æ¹åè¿å¿«ï¼",
      "å½¢å¼è¿äºå¤æï¼",
      "å·¥ä½è¿ç²ï¼",
      "è¦æ±è¿ï¿½ï¿½;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä»¥ä¸å¯¹åä¸åä½ååå¯¹æå·¥ä¸åä¸ªä½å·¥åä¸çæ¹é ä¸­åºç°çå¤±è¯¯ååå·®çè¡¨è¿°ï¼ä¸æ­£ç¡®çæ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_69",
    "type": "single",
    "answer": 0,
    "options": [
      "åå¹³èµä¹°ï¼",
      "å½»åºæ¶ç­ï¼",
      "å¥å¤ºçäº§èµæï¼",
      "å·¨é¢è´­ä¹°;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næå½èµæ¬ä¸»ä¹å·¥åä¸ç¤¾ä¼ä¸»ä¹æ¹é å®è·µä¸­ä¸ä¸ªåæ°æ§åæ³æ¯å¯¹æ°æèµäº§é¶çº§ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_70",
    "type": "single",
    "answer": 0,
    "options": [
      "åé©¬åè¥ï¼",
      "å³èµä¸¤å©ï¼",
      "ç»ç­¹å¼é¡¾ï¼",
      "å¬ç§å¼é¡¾;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ°ä¸­å½å¨å¯¹èµæ¬ä¸»ä¹å·¥åä¸å®è¡ç¤¾ä¼ä¸»ä¹æ¹é çè¿ç¨ä¸­ï¼å¨å©æ¶¦åéä¸éåçæ¿ç­æ¯ï¼   ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_71",
    "type": "single",
    "answer": 1,
    "options": [
      "æéåéçæ¿ç­ ï¼",
      "å®æ¯çåéæ¿ç­ï¼",
      "åé©¬åè¥çåéæ¿ç­ï¼",
      "æå³åéçæ¿ç­;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå¨æå½èµæ¬ä¸»ä¹å·¥åä¸æ¹é çè¿ç¨ä¸­ï¼å¨è¡ä¸å¬ç§åè¥ä»¥åå¯¹èµæ¬å®¶å®è¡çæ¿ç­æ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_72",
    "type": "single",
    "answer": 1,
    "options": [
      "è¿æ©å°æ¶ç­äºå°ä¸»é¶çº§ï¼",
      "è¿æ©å°æ¶ç­äºèµæ¬ä¸»ä¹ï¼",
      "è¿æ©å°æ¶ç­äºå¯åï¼",
      "è¿æ©å°è¿è¡äºåå°æ¹é©;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næå½ç¤¾ä¼ä¸»ä¹æ¹é å¨åå¾å·¨å¤§æå°±çåæ¶ä¹çä¸äºä¸å°ï¿½ï¿½éçï¼ä¸»è¦æ¯ï¼  ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_73",
    "type": "single",
    "answer": 2,
    "options": [
      "æ®æ°å°å½å®¶é©å½æäºçè®ºï¼",
      "æ°æ°ä¸»ä¸»ä¹é©å½çè®ºï¼",
      "åå¸é©å½æäºçè®º ï¼",
      "ç¤¾ä¼ä¸»ä¹é©å½çè®º  ;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nç¤¾ä¼ä¸»ä¹åºæ¬å¶åº¦çç¡®ç«ï¼æ¯é©¬åæåå®ä¸»ä¹å¦ä¸çè®ºå¨ä¸­å½çæ­£ç¡®è¿ç¨ååé æ§åå±çç»æï¼å³ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_74",
    "type": "single",
    "answer": 1,
    "options": [
      "æ¯é©¬åæåå®ä¸»ä¹å³äºç¤¾ä¼ä¸»ä¹é©å½çè®ºå¨ä¸­å½æ­£ç¡®è¿ç¨ååé æ§åå±çç»æ ï¼",
      "æ å¿çæ¨ç¿»å¸å½ä¸»ä¹ãå°å»ºä¸»ä¹åå®åèµæ¬ä¸»ä¹çé©å½ä»»å¡åºæ¬å®æï¼",
      "ä¸ºå½ä»£ä¸­å½ä¸ååå±è¿æ­¥å¥ å®äºæ ¹æ¬æ¿æ²»åæåå¶åº¦åºç¡ ï¼",
      "æ¯ä¸çç¤¾ä¼ä¸»ä¹è¿å¨åå²ä¸åä¸ä¸ªåå²æ§çä¼å¤§èå©  ;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä»¥ä¸å³äºç¡®ç«ç¤¾ä¼ä¸»ä¹åºæ¬å¶åº¦çéå¤§æä¹éé¡¹ä¸­ï¼ä¸æ­£ç¡®çæ¯ï¼   ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_75",
    "type": "single",
    "answer": 1,
    "options": [
      "åæåé¡¹åºæ¬åå ï¼",
      "æ­£ç¡®å¤çäººæ°åé¨çç¾ï¼",
      "å¥å¨æ°ä¸»åæ³å¶ å å¼ºæ§æ¿åå»ºè®¾ï¼",
      "å å¼ºæ§æ¿åå»ºè®¾;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå¨çäº§èµæææå¶ç¤¾ä¼ä¸»ä¹æ¹é å®æåï¼æå½æ¿æ²»çæ´»çä¸»é¢æ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_76",
    "type": "single",
    "answer": 2,
    "options": [
      "å·¥äººé¶çº§ä¸åæ°é¶çº§ççç¾ï¼",
      "å·¥åä¸ç¥è¯åå­ççç¾ï¼",
      "äººæ°å¯¹äºç»æµæåè¿éåå±çéè¦åå½åç»æµæåä¸è½æ»¡è¶³äººæ°éè¦çç¶åµä¹é´ççç¾ï¼",
      "ä¸­å½äººæ°ä¸ç¾å¸å½ä¸»ä¹ççç¾;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\n1956å¹´ç¤¾ä¼ä¸»ä¹æ¹é åºæ¬å®æåï¼æå½ç¤¾ä¼çä¸»è¦çç¾æ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_77",
    "type": "single",
    "answer": 2,
    "options": [
      "é¼è¶³å¹²å²ãåäºä¸æ¸¸ï¼å¤å¿«å¥½çå°å»ºè®¾ç¤¾ä¼ä¸»ä¹ï¼",
      "æ¢åä¿å®åååè¿ãå¨ç»¼åå¹³è¡¡ä¸­ç¨³æ­¥åè¿ï¼",
      "æå½åå¤ä¸åç§¯æå ç´ è°å¨èµ·æ¥ï¼ä¸ºç¤¾ä¼ä¸»ä¹äºä¸æå¡ï¼",
      "ä¸è¦åé¢åºå»ãæ æå¤ªå¤ï¼é æå¨å½ç´§å¼ ;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ¯æ³½ä¸å¨ãè®ºåå¤§å³ç³»ãä¸­æåºçåå¤§å³ç³»ï¼å´ç»çä¸ä¸ªåºæ¬æ¹éæ¯ï¼ï¼ï¿½ï¿½",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_78",
    "type": "single",
    "answer": 2,
    "options": [
      "è¿è¡ææ³è·¯çº¿ä¸çç¤¾ä¼ä¸»ä¹é©å½ï¼",
      "åææ äº§é¶çº§ä¸æ¿ä¸ç»§ç»­é©å½ï¼",
      "éä¸­åéåå±çäº§åï¼",
      "å¼å±ç¤¾ä¼ä¸»ä¹éè·¯ä¸èµæ¬ä¸»ä¹éè·¯çå³æ;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nç¤¾ä¼ä¸»ä¹æ¹é ä»»å¡åºæ¬å®æåï¼å¨å½äººæ°çä¸»è¦ä»»å¡æ¯ï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_79",
    "type": "single",
    "answer": 2,
    "options": [
      "æ²¿æµ·å·¥ä¸ååå°å·¥ä¸çå³ç³»ï¼",
      "ä¸­å¤®å·¥ä¸ä¸å°æ¹å·¥ä¸çå³ç³»ï¼",
      "éå·¥ä¸ãè½»å·¥ä¸ååä¸çå³ç³»ï¼",
      "å·¥ä¸ååä¸çå³ç³» ;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ¯æ³½ä¸å¨ãè®ºåå¤§å³ç³»ãä¸­è®ºè¿°çç¬¬ä¸å¤§å³ç³»æ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_80",
    "type": "single",
    "answer": 1,
    "options": [
      "ç»ç­¹å¼é¡¾ãéå½å®æ ï¼",
      "æçãæå©ãæèï¼",
      "ç¾è±é½æ¾ï¼ç¾å®¶äºé¸£ï¼",
      "é¿æå±å­ï¼äºç¸çç£ ;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nè¿å¥ç¤¾ä¼ä¸»ä¹ç¤¾ä¼åï¼ä¸­å½å±äº§åæåºäºä¸ç³»åæ­£ç¡®å¤çäººæ°åé¨çç¾çæ¹éæ¿ç­ï¼è¿äºæ¹éæ¿ç­ä¸åæ¬ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_81",
    "type": "single",
    "answer": 2,
    "options": [
      "ç§¯æå ç´ ä¸æ¶æå ç´ æ¯æ¢ç»ä¸åæäºçå³ç³» ï¼",
      "ç§¯æå ç´ ä¸æ¶æå ç´ å¨ä¸å®æ¡ä»¶ä¸æ¯å¯ä»¥äºç¸è½¬åçï¼",
      "ç§¯æå ç´ ä¸æ¶æå ç´ ä¹é´æ¯å¯¹ææ§çç¾ï¼åªææ¶ç­æ¶æå ç´ ï¼æè½ä¸ºç§¯æå ç´ æ«æ¸éè·¯ï¼",
      "å¨ç¤¾ä¼ä¸»ä¹äºä¸çåå±ä¸­ï¼ä¸è¬æ¥è¯´ï¼ç§¯æå ç´ å¤äºä¸»å¯¼çãç»æ²»çå°ä½;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå³äºç¤¾ä¼ä¸»ä¹å»ºè®¾ä¸­çç§¯æå ç´ ä¸æ¶æå ç´ çå³ç³»ï¼ä¸åè¯´æ³ä¸­éè¯¯çæ¯ï¿½ï¿½ï¿½ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_82",
    "type": "single",
    "answer": 3,
    "options": [
      "ç±é¶çº§æäºå°åèªç¶çæäºï¼",
      "ç±é©å½å°å»ºè®¾ï¼",
      "ç±è¿å»çé©å½å°ææ¯é©å½åæåé©å½ï¼",
      "ç±æ¿æ²»æäºå°ç»æµæäº;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ¯æ³½ä¸å¨ãå³äºæ­£ç¡®å¤çäººæ°åé¨çç¾çé®é¢ãä¸­æåºï¼æå½æ­£å¤å¨è½¬åæ¶æçä¸»è¦è¡¨ç°ï¼ä¸åè¡¨è¿°ä¸æ­£ç¡®çæ¯ï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_83",
    "type": "single",
    "answer": 1,
    "options": [
      "åæé¶çº§æäºï¼ä½¿ç¤¾ä¼ä¸»ä¹ä¸åé¢è² ï¼",
      "å¨æ°ççäº§å³ç³»ä¸ä¿æ¤ååå±çäº§åï¼",
      "æ­£ç¡®åºååå¤çä¸¤ç±»ä¸åæ§è´¨ççç¾ ï¼",
      "æ­£ç¡®å¤çç»æµå»ºè®¾åé¶çº§æäºçå³ç³»;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ¯æ³½ä¸å¨ãå³äºæ­£ç¡®å¤çäººæ°åé¨çç¾çé®é¢ãä¸­æåºæ°ä¸»é©å½åç¤¾ä¼ä¸»ä¹é©å½åºæ¬å®æåï¼æä»¬çæ ¹æ¬ä»»å¡æ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_84",
    "type": "single",
    "answer": 3,
    "options": [
      "âå¢ç»ââæ¹è¯ââå¢ç»âçæ¹éï¼",
      "ç»ç­¹å¼é¡¾ãéå½å®æçæ¹éï¼",
      "åææ°ä¸»éä¸­å¶ååï¼è¦åªååææ¿åºæºå³å®åä¸»ä¹ï¼ä¹è¦å å¼ºå¯¹ç¾¤ä¼çææ³æè²  ï¼",
      "âç¾è±é½æ¾ï¼ç¾å®¶äºé¸£âçæ¹é;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\néå¯¹äººæ°åé¨çç¾å¨å·ä½å®è·µä¸­çä¸åæåµï¼æ¯æ³½ä¸æåºäºä¸ç³»åå·ä½æ¹éãååãå¶ä¸­ï¼å¯¹ç§å­¦æåé¢åéççç¾ï¼å®è¡çæ¹éæ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_85",
    "type": "single",
    "answer": 3,
    "options": [
      "å½é²å»ºè®¾åç»æµå»ºè®¾çå³ç³»ï¼",
      "ä¸­å¤®ä¸å°æ¹çå³ç³»ï¼",
      "æ²¿æµ·å·¥ä¸ååå°å·¥ä¸çå³ç³»ï¼",
      "åä¸ãéå·¥ä¸åè½»å·¥ä¸çå³ç³»;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ¯æ³½ä¸å¨ãè®ºåå¤§å³ç³»ãä¸­éè¿°çé¦è¦çç»æµå³ç³»æ¯ï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_86",
    "type": "single",
    "answer": 2,
    "options": [
      "ãæ°æ°ä¸»ä¸»ä¹è®ºãï¼",
      "ãè®ºäººæ°æ°ä¸»ä¸æ¿ãï¼",
      "ãè®ºåå¤§å³ç³»ã  ï¼",
      "ãä¸ºå»ºè®¾ä¸ä¸ªä¼å¤§çç¤¾ä¼ä¸»ä¹å½å®¶èå¥æã;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ¯æ³½ä¸æåºâä»¥èèç»éªä¸ºåé´ï¼èµ°èªå·±çè·¯âéè¦ææ³çèä½æ¯ï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_87",
    "type": "single",
    "answer": 0,
    "options": [
      "æ¢ç´¢ä¸­å½å·¥ä¸åéè·¯çä»»å¡ï¼",
      "æ¢ç´¢ä¸­å½æ°æ°ä¸»ä¸»ä¹é©å½éè·¯çä»»å¡ï¼",
      "æ¢ç´¢ä¸­å½ç¤¾ä¼ä¸»ä¹é©å½éè·¯çä»»å¡ï¼",
      "æ¢ç´¢ä¸­å½æ äº§é¶çº§æåé©å½çä»»å¡;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ¯æ³½ä¸å¨ãè®ºåå¤§å³ç³»ãä¸­æ­£å¼æåºäºï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_88",
    "type": "single",
    "answer": 0,
    "options": [
      "æ¯æ³½ä¸åè¡¨ãè®ºåå¤§å³ç³»ãï¼",
      "ä¸­å±å«å¤§å¬å¼ï¼",
      "æ¯æ³½ä¸åè¡¨ãå³äºæ­£ç¡®å¤çäººæ°åé¨çç¾çé®é¢ãï¼",
      "ä¸­å±ä¸­å¤®æåºç¤¾ä¼ä¸»ä¹å»ºè®¾æ»è·¯çº¿ ;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ å¿ä¸­å½å±äº§åå¼å§å¨å®è·µä¸­æ¢ç´¢ç¬¦åä¸­å½å½æçç¤¾ä¼ä¸»ä¹å»ºè®¾éè·¯çæ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_89",
    "type": "single",
    "answer": 0,
    "options": [
      "éå·¥ä¸ï¼",
      "è½»å·¥ä¸ï¼",
      "å½é²å·¥ä¸ï¼",
      "åä¸;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\né´äºä¸­å½ç¤¾ä¼çäº§åè½åãç»æµåºç¡èå¼±çæåµï¼æ¯æ³½ä¸æåºæå½ç»æµå»ºè®¾çéç¹åºè¯¥æ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_90",
    "type": "single",
    "answer": 0,
    "options": [
      "å¯¹å½æ¶åå¶åä¸ä¸ªæ¶ææå½ç¤¾ä¼ä¸»ä¹æ¡ä»¶çé¶çº§ç¶åµãç¤¾ä¼ç¶åµåå½æçå¤æ­ãä¸»è¦çç¾ååçä¸»è¦ä»»å¡çåææ¯åºæ¬æ­£ç¡®ç  ï¼",
      "æåºäºå å¼ºæ°ä¸»ä¸æ³å¶å»ºè®¾çææ³ ï¼",
      "æåºäºå å¼ºæ§æ¿åå»ºè®¾çææ³ï¼",
      "æåºæ¢åä¿å®åååè¿å³å¨ç»¼åå¹³è¡¡ä¸­ç¨³æ­¥åè¿çç»æµå»ºè®¾çæ¹é  ;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸­å±å«å¤§å¨æ¢ç´¢ä¸­å½èªå·±çç¤¾ä¼ä¸»ä¹å»ºè®¾éè·¯æ¹é¢æéè¦çè´¡ç®æ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_91",
    "type": "single",
    "answer": 2,
    "options": [
      "ï¿½ï¿½ï¿½è¿ä¸çç¤¾ä¼ä¸»ä¹åå±  ï¼",
      "å·©åºæå½çç¤¾ä¼ä¸»ä¹å¶åº¦ï¼",
      "ä¿å«ä¸çåå¹³ï¼",
      "å¼åååå±ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nåçç¬¬ä¸ä»£ä¸­å¤®é¢å¯¼éä½å¨æ¢ç´¢ç¤¾ä¼ä¸»ä¹å»ºè®¾éè·¯ä¸­åå¾äºç¬åæ§çè®ºææåå·¨å¤§æå°±ãä¸åéé¡¹ä¸­å¯¹å¶æä¹è¡¨è¿°ä¸æ­£ç¡®çä¸ºï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_92",
    "type": "single",
    "answer": 2,
    "options": [
      "ä¸­å±å«å¤§å¬å¼ï¼",
      "æ¯æ³½ä¸åè¡¨ãå³äºæ­£ç¡®å¤çäººæ°åé¨çç¾çé®é¢ãï¼",
      "æ¯æ³½ä¸åè¡¨ãè®ºåå¤§å³ç³»ãï¼",
      "ä¸­å±ä¸­å¤®æåºç¤¾ä¼ä¸»ä¹å»ºè®¾æ»è·¯çº¿;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸­å½å±äº§åå¨å®è·µä¸­æ¢ç´¢ç¬¦åä¸­å½å½æçç¤¾ä¼ä¸»ä¹å»ºè®¾éè·¯å¼å§çæ å¿æ¯ï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_93",
    "type": "single",
    "answer": 3,
    "options": [
      "åå±ç¤¾ä¼ä¸»ä¹ååçäº§ï¼éè§ä»·å¼è§å¾ ï¼",
      "åæ¥ä¸­å¤®åå°æ¹ä¸¤ä¸ªæ¹é¢çç§¯ææ§ï¼éå½æ©å¤§å°æ¹çæåï¼",
      "âå¯ä»¥æ¶ç­èµæ¬ä¸»ä¹ï¼åæèµæ¬ä¸»ä¹â  ï¼",
      "å®è¡åæçäº§è´£ä»»å¶;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå¨ç¤¾ä¼ä¸»ä¹ç»æµå»ºè®¾ä¸­ï¼æ¯æ³½ä¸æåºäºå³äºæå½ç»æµä½å¶åç®¡çä½å¶çéè¦ææ³ï¼ä¸åä¸å±äºè¿äºææ³çæ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_94",
    "type": "single",
    "answer": 0,
    "options": [
      "âä¸ä¸ªä¸»ä½ï¼ä¸ä¸ªè¡¥åâï¼",
      "âä¸¤åä¸æ¹ä¸ç»åâï¼",
      "âä¸åä¸æ¹é â ï¼",
      "åæ¥ä¸­å¤®ãå°æ¹ãä¼ä¸ä¸ä¸ªæ¹é¢çç§¯ææ§;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\néäºå¨ä¸­å±å«å¤§ä¸æåºç»æµä½å¶æ¹é©çææ³æ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_95",
    "type": "single",
    "answer": 2,
    "options": [
      "åæ°ä¸»åæ´¾å·²ç»æä¸ºè´åäºç¤¾ä¼ä¸»ä¹äºä¸çåæ´¾ ï¿½ï¿½ï¿½",
      "åæ¹æé¿æå¢ç»åä½çåå²ï¼",
      "åæ°ä¸»åæ´¾ä¸å±äº§åä¸æ ·ï¼ä¹æ¯ä»£è¡¨äºæ äº§é¶çº§çæ ¹æ¬å©ç  ï¿½ï¿½ï¿½",
      "åæ°ä¸»åæ´¾å¨æ¿æ²»ä¸å·²ç»æ¥åäºå±äº§åé¢å¯¼ ;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå¯¹å¨ç¤¾ä¼ä¸»ä¹æ¡ä»¶ä¸ï¼ä¸­å½å±äº§åä¸åæ°ä¸»åæ´¾é¿æå±å­çåå çè¡¨è¿°ä¸­ï¼ä¸æ­£ç¡®çæ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_96",
    "type": "single",
    "answer": 0,
    "options": [
      "éè¯¯å°è®¤ä¸ºæ äº§é¶çº§ä¸èµäº§é¶çº§ççç¾ï¼ç¤¾ä¼ä¸»ä¹éè·¯ä¸èµæ¬ä¸»ä¹éè·¯ççç¾ï¼å§ç»æ¯æå½ç¤¾ä¼çä¸»è¦çç¾ï¼",
      "æåºæå½çæ ¹æ¬ä»»å¡æ¯å¨æ°ççäº§å³ç³»ä¸ä¿æ¤ååå±çäº§åï¼",
      "åæäºåçå«å¤§å³äºæå½ç¤¾ä¼ä¸»ä¹çç¾çæ­£ç¡®å¤æ­ï¼",
      "ä»¥ç»æµå»ºè®¾ä¸ºä¸­å¿ï¼ä¸æ­æé«äººæ°ç©è´¨æåçæ´»æ°´å¹³;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå³äºåçå«å¤§ï¼ä»¥ä¸è¡¨è¿°æ­£ç¡®çæ¯ï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_97",
    "type": "single",
    "answer": 3,
    "options": [
      "æåºäºå å¼ºæ°ä¸»åæ³å¶å»ºè®¾çææ³ï¼",
      "æåºäºå å¼ºæ§æ¿åå»ºè®¾çææ³ï¼",
      "æåºäºæ¢åä¿å®ï¼åååè¿ï¼å¨ç»¼åå¹³è¡¡ä¸­ç¨³æ­¥åè¿çæ¹éï¼",
      "å¯¹å½æ¶åå¶åä¸ä¸ªæ¶ææå½ç¤¾ä¼ä¸»ä¹æ¡ä»¶ä¸çé¶çº§ç¶åµãç¤¾ä¼ç¶åµåå½æçå¤æ­ãä¸»è¦çç¾ååçä¸»è¦ä»»å¡çåææ¯åºæ¬æ­£ç¡®ç;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸­å±å«å¤§æåºäºæ¢ç´¢ä¸­å½èªå·±çç¤¾ä¼ä¸»ä¹å»ºè®¾éè·¯çéè¦ä»»å¡ï¼å¹¶ï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_98",
    "type": "single",
    "answer": 0,
    "options": [
      "å¨å¾å¤§ç¨åº¦ä¸ï¼æ¯ç±äºæä»¬å·¥ä½ä¸åä½é£ä¸çç¼ºç¹åéè¯¯å¼èµ·çï¼",
      "ä»¥ç¾å½ä¸ºé¦çè¥¿æ¹å½å®¶å¯¹æå½å®è¡æè§åå°éæ¿ç­ï¼",
      "èèåå¶ä»ç¤¾ä¼ä¸»ä¹å½å®¶å¯¹æå½æ´å©ä¸å¤ï¼",
      "éè¯¯ä¼°è®¡äºå½éå±äº§ä¸»ä¹è¿å¨çå½¢å¿ ;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nåå°å¥å¨ãå¨æ©å¤§çä¸­å¤®å·¥ä½ä¼è®®ä¸çè®²è¯ãä¸­æåºï¼é æå½åå°é¾çå½¢å¿çåå ï¼ä¸æ¡æ¯å¤©ç¾ï¼ä¸¤ä¸æ¹é¢æ¯ï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_99",
    "type": "single",
    "answer": 3,
    "options": [
      "äººæ°ç¾¤ä¼ççç£ï¼",
      "æ°ä¸»åæ´¾åæ åæ´¾äººå£«ççç£ï¼",
      "å±äº§ååé¨ççç£ï¼",
      "èè®ºçç£;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\néå°å¹³å¨ä¸­å±å«å¤§æä½çãå³äºä¿®æ¹åçç« ç¨çæ¥åãï¼æåºæ§æ¿çä¸­å½å±äº§åè¦æ¥åçç£ï¼ä¸åè¡¨è¿°ä¸æ­£ç¡®çæ¯ï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_100",
    "type": "qa",
    "answer": "",
    "options": [],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_101",
    "type": "single",
    "answer": 2,
    "options": [
      "ä¸­å±ä¸å¤§ï¼",
      "éµä¹ä¼è®®ï¼",
      "å­å±å­ä¸­å¨ä¼ï¼",
      "ä¸­å±åå¤§ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "å¨ä¸­å½å±äº§ååå²ä¸ï¼ç¬¬ä¸æ¬¡æå¸é²æå°æåºâé©¬åæä¸»ä¹ä¸­å½åâéå¤§å½é¢çä¼è®®æ¯ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_102",
    "type": "qa",
    "answer": "",
    "options": [],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_103",
    "type": "single",
    "answer": 3,
    "options": [
      "æ¯æ³½ä¸ï¼",
      "éå°å¹³ï¼",
      "æå¤§éï¼",
      "åå°å¥ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "å¨åçä¸å¤§ä¸ï¼ãå³äºä¿®æ¹åçç« ç¨ãçæ¥åä¸­ï¼æåºæ¯æ³½ä¸ææ³æ¯ä¸­å½åçé©¬åæä¸»ä¹çæ¯ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_104",
    "type": "qa",
    "answer": "",
    "options": [],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_105",
    "type": "single",
    "answer": 3,
    "options": [
      "éå°å¹³çè®ºï¼",
      "âä¸ä¸ªä»£è¡¨âéè¦ææ³ï¼",
      "ç§å­¦åå±è§ï¼",
      "æ¯æ³½ä¸ææ³ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "é©¬åæä¸»ä¹ä¸­å½åè¿ç¨ä¸­ï¼ç¬¬ä¸ä¸ªéå¤§çè®ºæè¯¾æ¯ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_106",
    "type": "qa",
    "answer": "",
    "options": [],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_107",
    "type": "single",
    "answer": 1,
    "options": [
      "éå°å¹³çè®ºï¼",
      "ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹çè®ºä½ç³»ï¼",
      "ç§å­¦åå±è§ï¼",
      "æ¯æ³½ä¸ææ³"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "é©¬åæä¸»ä¹ä¸­å½åè¿ç¨ä¸­ï¼ç¬¬äºä¸ªéå¤§çè®ºæè¯¾æ¯ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_108",
    "type": "qa",
    "answer": "",
    "options": [],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_109",
    "type": "single",
    "answer": 1,
    "options": [
      "å¤ç°ä¼è®®ï¼",
      "å»¶å®æ´é£æ¶æï¼",
      "åçä¸å±äºä¸­å¨ä¼ï¼",
      "ç¬¬ä¸æ¬¡å½å±åä½æ¶æï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æ¯æ³½ä¸å¨ï¼ï¼æé´å¯¹å®äºæ±æ¯çç§å­¦å«ä¹ä½äºé©¬åæä¸»ä¹ççå®ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_110",
    "type": "qa",
    "answer": "",
    "options": [],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_111",
    "type": "single",
    "answer": 0,
    "options": [
      "ãè®ºæ°é¶æ®µãï¼",
      "ãè®ºèåæ¿åºãï¼",
      "ãæ°æ°ä¸»ä¸»ä¹è®ºãï¼",
      "ãä¸­å½é©å½åä¸­å½å±äº§åãï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æ¯æ³½ä¸å¨åçå­å±å­ä¸­å¨ä¼ä¸ä½äºï¼ï¼æ¿æ²»æ¥åï¼è¿æ¯åé¦æ¬¡æç¡®æåºâé©¬åæä¸»ä¹ä¸­å½åâçéå¤§å½é¢ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_112",
    "type": "qa",
    "answer": "",
    "options": [],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_113",
    "type": "single",
    "answer": 2,
    "options": [
      "ä¸æ¶ä¿±è¿ï¼",
      "æ±çå¡å®ï¼",
      "å®äºæ±æ¯ï¼",
      "çè®ºèç³»å®éï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "ï¼ï¼æ¯é©¬åæä¸»ä¹ä¸­å½åçè®ºææçç²¾é«ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_114",
    "type": "qa",
    "answer": "",
    "options": [],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_115",
    "type": "single",
    "answer": 0,
    "options": [
      "æ¯æ³½ä¸ï¼",
      "å¨æ©æ¥ï¼",
      "æå¤§éï¼",
      "åå°å¥ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "é¦æ¬¡æåºâé©¬åæä¸»ä¹ä¸­å½åâè¿ä¸æ¦å¿µçæ¯ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_116",
    "type": "qa",
    "answer": "",
    "options": [],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_117",
    "type": "single",
    "answer": 2,
    "options": [
      "ãæ°æ°ä¸»ä¸»ä¹è®ºãï¼",
      "ãè®ºäººæ°æ°ä¸»ä¸æ¿ãï¼",
      "ãè®ºåå¤§å³ç³»ãï¼",
      "ãå³äºæ­£ç¡®å¤çäººæ°åé¨çç¾çé®é¢ãï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æç¡®æåºï¿½ï¿½èä¸ºé´ï¼ç¬ç«èªä¸»å°æ¢ç´¢éåä¸­å½æåµçç¤¾ä¼ä¸»ä¹å»ºè®¾éè·¯çèä½æ¯ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_118",
    "type": "qa",
    "answer": "",
    "options": [],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_119",
    "type": "single",
    "answer": 2,
    "options": [
      "è§£æ¾ææ³ï¼å®äºæ±æ¯ï¼",
      "æ¢åä¿å®åååè¿ï¼å¨ç»¼åå¹³è¡¡ä¸­ç¨³æ­¥åè¿ï¼",
      "æå½åå¤ä¸åç§¯æå ç´ è°å¨èµ·æ¥ï¼ä¸ºç¤¾ä¼ä¸»ä¹äºä¸æå¡ï¼",
      "è§£æ¾ååå±çäº§åï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æ¯æ³½ä¸å¨ãè®ºåå¤§å³ç³»ãçè®²è¯ä¸­ï¼æåºä¸­å½ç¤¾ä¼ä¸»ä¹å»ºè®¾çåºæ¬æ¹éæ¯ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_120",
    "type": "qa",
    "answer": "",
    "options": [],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_121",
    "type": "single",
    "answer": 2,
    "options": [
      "ãè®ºåå¤§å³ç³»ãï¼",
      "ãçç¾è®ºãï¼",
      "ãå³äºæ­£ç¡®å¤çäººæ°åé¨çç¾çé®é¢ãï¼",
      "ãæ°æ°ä¸»ä¸»ä¹è®ºãï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æ¯æ³½ä¸ç¬¬ä¸æ¬¡ç³»ç»è®ºè¿°ç¤¾ä¼ä¸»ä¹ç¤¾ä¼çç¾çè®ºçèä½æ¯ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_122",
    "type": "qa",
    "answer": "",
    "options": [],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_123",
    "type": "single",
    "answer": 1,
    "options": [
      "éåæ°ä¸»çæ¹æ³ï¼",
      "ç»ç­¹å¼é¡¾ï¼éå½å®æï¼",
      "è°æ´ãå·©åºãæé«ï¼",
      "åææ°ä¸»éä¸­å¶ååï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æ¯æ³½ä¸å¨ãå³äºæ­£ç¡®å¤çäººæ°åé¨çç¾çé®é¢ãä¸­æåºçå¤çå½å®¶ãéä½åä¸ªäººä¸æ¹å©ççæ¹éæ¯ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_124",
    "type": "qa",
    "answer": "",
    "options": [],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_125",
    "type": "single",
    "answer": 1,
    "options": [
      "å¢ç»âæ¹è¯âå¢ç»ï¼",
      "ç¾è±é½æ¾ãç¾å®¶äºé¸£ï¼",
      "é¿æå±å­ãäºç¸çç£ï¼",
      "ç»ç­¹å¼é¡¾ãéå½ç§é¡¾ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "å¯¹äºæå½ç¤¾ä¼ä¸»ä¹æåé¢åååºç°ççç¾ï¼å¤ççæ¹éæ¯ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_126",
    "type": "qa",
    "answer": "",
    "options": [],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_127",
    "type": "single",
    "answer": 0,
    "options": [
      "æ¢åä¿å®åååè¿ï¼å³å¨ç»¼åå¹³è¡¡ä¸­ç¨³æ­¥åè¿ï¼",
      "ä¸ä¸ªä¸»ä½ï¼ä¸ä¸ªè¡¥åï¼",
      "é¼è¶³å¹²å²ï¼åäºä¸æ¸¸ï¼å¤å¿«å¥½çå°å»ºè®¾ç¤¾ä¼ä¸»ä¹ï¼",
      "åå±æå·¥ä¸ååä¸å¤ç§ç»è¥"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "åçå«å¤§æåºçæå½ç»æµå»ºè®¾æ¹éæ¯ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_128",
    "type": "qa",
    "answer": "",
    "options": [],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_129",
    "type": "single",
    "answer": 0,
    "options": [
      "æ¯æ³½ä¸ï¼",
      "éå°å¹³ï¼",
      "éäºï¼",
      "æ±å¾·ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æåºâä¸¤åä¸æ¹ä¸ç»åâçæ¯ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_130",
    "type": "qa",
    "answer": "",
    "options": [],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_131",
    "type": "single",
    "answer": 3,
    "options": [
      "èµäº§é¶çº§ï¼",
      "å°èµäº§é¶çº§ï¼",
      "ä¸­äº§é¶çº§ï¼",
      "å·¥äººé¶çº§ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "å³äºæ°ä¸­å½ç¥è¯åå­çé¶çº§å±æ§ï¼å¨æ©æ¥ä½åºçè®ºæ­æ¯ä»ä»¬å±äºï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_132",
    "type": "qa",
    "answer": "",
    "options": [],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_133",
    "type": "multiple",
    "answer": [
      0,
      1
    ],
    "options": [
      "è§£å³ä¸­å½é®é¢ï¼",
      "åé äºæ°ä¸è¥¿ï¼",
      "èµäºé©¬åæä¸»ä¹é²æçä¸­å½ç¹è²ï¼",
      "è§£æ¾ææ³ï¼å®äºæ±æ¯ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "é©¬åæä¸»ä¹ä¸­å½åçä¸¤ä¸ªç®æ ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_134",
    "type": "qa",
    "answer": "",
    "options": [],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_135",
    "type": "multiple",
    "answer": [
      0,
      1,
      2
    ],
    "options": [
      "ç¨é©¬åæä¸»ä¹ï¿½ï¿½ï¿½å³ä¸­å½çé®é¢ï¼",
      "ä½¿ä¸­å½ä¸°å¯çå®è·µç»éªä¸åä¸ºçè®ºï¼",
      "æé©¬åæä¸»ä¹åä¸­å½çåå²ä¼ ç»ãä¼ç§æåç¸ç»åï¼",
      "ä¸­å½åçé©¬åæä¸»ä¹ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æ¦æ¬çè¯´ï¼é©¬åæä¸»ä¹ä¸­å½åå°±æ¯ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_136",
    "type": "qa",
    "answer": "",
    "options": [],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_137",
    "type": "multiple",
    "answer": [
      2,
      3
    ],
    "options": [
      "éå°å¹³çè®ºï¼",
      "ç§å­¦åå±è§ï¼",
      "ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹çè®ºä½ç³»ï¼",
      "æ¯æ³½ä¸ææ³ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "é©¬åæä¸»ä¹ä¸­å½åä¸¤å¤§çè®ºææï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_138",
    "type": "qa",
    "answer": "",
    "options": [],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_139",
    "type": "multiple",
    "answer": [
      0,
      1
    ],
    "options": [
      "ä¸åè¾¾çç¤¾ä¼ä¸»ä¹ï¼",
      "æ¯è¾åè¾¾çç¤¾ä¼ä¸»ä¹ï¼",
      "ç¤¾ä¼ä¸»ä¹åçº§é¶æ®µï¼",
      "ç¤¾ä¼ä¸»ä¹é«çº§é¶æ®µ"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æ¯æ³½ä¸æç¤¾ä¼ä¸»ä¹ååä¸ºï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_140",
    "type": "qa",
    "answer": "",
    "options": [],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_141",
    "type": "multiple",
    "answer": [
      0,
      1,
      2
    ],
    "options": [
      "å·¥äººé¶çº§ååæ°é¶çº§ççç¾ï¼",
      "å·¥äººé¶çº§åé¨ççç¾ï¼",
      "äººæ°ç¾¤ä¼åæ¿åºä¹é´ççç¾ï¼",
      "å·¥äººé¶çº§åå°èµäº§é¶çº§ççç¾ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "äººæ°åé¨çç¾åæ¬ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_142",
    "type": "qa",
    "answer": "",
    "options": [],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_143",
    "type": "multiple",
    "answer": [
      0,
      1,
      2
    ],
    "options": [
      "å¹²é¨åå å³å¨ï¼",
      "å·¥äººåå ç®¡çï¼æ¹é©ä¸åççè§ç« å¶åº¦ï¼",
      "å·¥äººç¾¤ä¼ãé¢å¯¼å¹²é¨åç¥è¯åå­ä¸ç»åï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "âä¸¤åä¸æ¹ä¸ç»åâçä¼ä¸ç®¡çå¶åº¦å·ä½åå®¹æ¯ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_144",
    "type": "qa",
    "answer": "",
    "options": [],
    "subject": "毛概",
    "category": "单选题",
    "question": "123",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_145",
    "type": "single",
    "answer": 1,
    "options": [
      "æ­£ç¡®",
      "éè¯¯"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "é©¬åæä¸»ä¹ä¸­å½ååä¸­å½åçé©¬åæä¸»ä¹æ¯åä¸ä¸ªææ",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_146",
    "type": "qa",
    "answer": "",
    "options": [],
    "subject": "毛概",
    "category": "单选题",
    "question": "124",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_147",
    "type": "single",
    "answer": 1,
    "options": [
      "æ­£ç¡®",
      "éè¯¯"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "é©¬åæä¸»ä¹æéè¦ççè®ºåè´¨æ¯å®äºæ±æ¯",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_148",
    "type": "qa",
    "answer": "",
    "options": [],
    "subject": "毛概",
    "category": "单选题",
    "question": "125",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_149",
    "type": "single",
    "answer": 0,
    "options": [
      "æ­£ç¡®",
      "éè¯¯"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "é©¬åæçæ´ä¸ªä¸çè§ä¸æ¯æä¹ï¼èæ¯æ¹æ³",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_150",
    "type": "qa",
    "answer": "",
    "options": [],
    "subject": "毛概",
    "category": "单选题",
    "question": "126",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_151",
    "type": "single",
    "answer": 1,
    "options": [
      "æ­£ç¡®",
      "éè¯¯"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æå¯¼ååçæ´»çåºæ¬ååæ¯å¥å¨ååæ°ä¸»",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_152",
    "type": "qa",
    "answer": "",
    "options": [],
    "subject": "毛概",
    "category": "单选题",
    "question": "127",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_153",
    "type": "single",
    "answer": 1,
    "options": [
      "æ­£ç¡®",
      "éè¯¯"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æ¯æ³½ä¸çãè®ºäººæ°æ°ä¸»ä¸æ¿ãæ¯å¨åæ¢ç´¢ä¸­å½ç¤¾ä¼ä¸»ä¹å»ºè®¾éè·¯åå£°çæç« ",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_154",
    "type": "qa",
    "answer": "",
    "options": [],
    "subject": "毛概",
    "category": "单选题",
    "question": "128",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_155",
    "type": "single",
    "answer": 0,
    "options": [
      "æ­£ç¡®",
      "éè¯¯"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æ¯æ³½ä¸åå¿å¨ãè®ºåå¤§å³ç³»ãçæ¥åä¸­ç¡®å®äºåå³äºç¤¾ä¼ä¸»ä¹å»ºè®¾çä¸ä¸ªæä¸ºéè¦çåºæ¬æ¹éæ¯è°å¨ä¸åç§¯ï¿½ï¿½å ç´ ä¸ºç¤¾ä¼ä¸»ä¹æå¡",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_156",
    "type": "single",
    "answer": 3,
    "options": [
      "æ°æäºææ³çå½¢æï¼",
      "ä¸­å½é©å½åºæ¬é®é¢çæåºï¼",
      "åæåå´åå¸ãæ­¦è£å¤ºåæ¿æéè·¯çè®ºçäº§çï¼",
      "æ°ï¿½ï¿½ä¸»ä¸»ä¹é©å½çè®ºçç³»ç»è®ºè¿°ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ¯æ³½ä¸ææ³è¾¾å°æççæ å¿æ¯ï¼ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_157",
    "type": "single",
    "answer": 3,
    "options": [
      "éµä¹ä¼è®®ï¼",
      "ä¸­å±å­å±å­ä¸­å¨ä¼ï¼",
      "ä¸­å±å­å±ä¸ä¸­å¨ä¼ï¼",
      "ä¸­å±ä¸å¤§ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸­å½å±äº§åææ¯æ³½ä¸ææ³ç¡®å®ä¸ºåçæå¯¼ææ³çä¼è®®æ¯ï¼ ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_158",
    "type": "single",
    "answer": 1,
    "options": [
      "ãè§£æ¾ææ³ï¼å®äºæ±æ¯ï¼å¢ç»ä¸è´ååçãï¼",
      "ãå³äºå»ºå½ä»¥æ¥åçè¥å¹²åå²é®é¢çå³è®®ãï¼",
      "ãå¨é¢å¼åç¤¾ä¼ä¸»ä¹ç°ä»£åå»ºè®¾çæ°å±é¢ãï¼",
      "ãå³äºç¤¾ä¼ä¸»ä¹ç²¾ç¥ææå»ºè®¾æå¯¼æ¹éçå³è®®ãï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸­å±åä¸å±ä¸ä¸­å¨ä¼åï¼å¯¹æ¯æ³½ä¸åæ¯æ³½ä¸ææ³åå²å°ä½ä½åºç§å­¦è¯ä»·çåå²æç®æ¯\n( )",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_159",
    "type": "single",
    "answer": 0,
    "options": [
      "æ¯æ³½ä¸ï¼",
      "åå°å¥ï¼",
      "å¨æ©æ¥ï¼",
      "æ±å¾·ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ¯æ³½ä¸ææ³çä¸»è¦åç«èæ¯ï¼âââï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_160",
    "type": "single",
    "answer": 3,
    "options": [
      "å¨æ©æ¥ï¼",
      "åå°å¥ï¼",
      "æ±å¾·ï¼",
      "çç¨¼ç¥¥ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸­å½å±äº§ååç¬¬ä¸ä¸ªæåºâæ¯æ³½ä¸ææ³âç§å­¦æ¦å¿µçæ¯ï¼âââï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_161",
    "type": "single",
    "answer": 1,
    "options": [
      "å¨æ©æ¥ï¼",
      "åå°å¥ï¼",
      "æ±å¾·ï¼",
      "çç¨¼ç¥¥ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå¨ä¸­å½å±äº§åç¬¬ä¸æ¬¡å¨å½ä»£è¡¨å¤§ä¼ä¸ï¼å¯¹æ¯æ³½ä¸ææ³åäºç§å­¦æ¦æ¬åå¨\né¢è®ºè¿°çæ¯ï¼âââââï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_162",
    "type": "single",
    "answer": 2,
    "options": [
      "æåºäºâä¸å±±âææ³ï¼",
      "æåºäºâæªæå­éé¢åºæ¿æâçè®ºæ­ï¼",
      "å»¶å®æ´é£ï¼",
      "å¼åäºåæåå´åå¸æ­¦è£å¤ºåæ¿æçéè·¯ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\néµä¹ä¼è®®ä¹åæ¯æ³½ä¸å¯¹é©¬åæä¸»ä¹ä¸­å½åççªåºè´¡ç®ä¸åæ¬ï¼ ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_163",
    "type": "single",
    "answer": 3,
    "options": [
      "ä¸ªä½åä¸ï¼",
      "ä¸ªä½æå·¥ä¸ï¼",
      "ç§äººèµæ¬ä¸»ä¹å·¥åä¸ï¼",
      "å½æå·¥ä¸ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nâä¸åä¸æ¹âä¸­çâä¸æ¹âä¸éå¯¹ä»¥ä¸åªä¸ªäº§ä¸ï¼ï¼ ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_164",
    "type": "single",
    "answer": 3,
    "options": [
      "1953å¹´åºï¼",
      "1954å¹´åºï¼",
      "1955å¹´åºï¼",
      "1956å¹´åºï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå¯¹èµæ¬ä¸»ä¹å·¥åä¸çç¤¾ä¼ä¸»ä¹æ¹é å¨ï¼ï¼æ¶å·²åºæ¬å®æã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_165",
    "type": "single",
    "answer": 2,
    "options": [
      "å¬ç§å¼é¡¾ï¼",
      "ç»ç­¹å¼é¡¾ï¼",
      "åé©¬åè¥ï¼",
      "å³èµä¸¤å©ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸­å½å¨å¯¹èµæ¬ä¸»ä¹å·¥åä¸å®è¡ç¤¾ä¼ä¸»ä¹æ¹é çè¿ç¨ä¸­ï¼å¨å©æ¶¦åéä¸éåçæ¿ç­æ¯ï¼ ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_166",
    "type": "single",
    "answer": 0,
    "options": [
      "1953å¹´ï¼",
      "1954å¹´ï¼",
      "1955å¹´ï¼",
      "1956å¹´ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸­å½çå½æ°ç»æµç¬¬ä¸ä¸ªäºå¹´è®¡åæ¯ä»ï¼ ï¼å¼å§çã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_167",
    "type": "single",
    "answer": 3,
    "options": [
      "å·¥äººé¶çº§ååæ°é¶çº§ççç¾ï¼",
      "åæ°é¶çº§åèµäº§é¶çº§ççç¾ï¼",
      "äººæ°ç¾¤ä¼åé¨çç¾ï¼",
      "å·¥äººé¶çº§åèµäº§é¶çº§ççç¾ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nç¤¾ä¼ä¸»ä¹æ¹é æ¶ææå½ç¤¾ä¼çä¸»è¦çç¾æ¯ï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_168",
    "type": "single",
    "answer": 3,
    "options": [
      "è¦åæç¤¾ä¼ä¸»ä¹å·¥ä¸åå»ºè®¾ä¸ç¤¾ä¼ä¸»ä¹æ¹é åæ¶å¹¶ä¸¾ï¼",
      "å¯¹ä¸ªä½åä¸çç¤¾ä¼ä¸»ä¹æ¹é å®è¡éæ­¥è¿æ¸¡çæ¹æ³ï¼",
      "å¯¹èµæ¬ä¸»ï¿½ï¿½ï¿½å·¥åä¸çæ¹é è¦å°éèµæ¬å®¶çææ¿ï¼",
      "å¨æ´ä¸ªçç¤¾ä¼ä¸»ä¹æ¹é çè¿ç¨ä¸­ï¼çäº§åé­å°äºæå¤§çç ´åï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸åå³äºç¤¾ä¼ä¸»ä¹æ¹é çè¯´æ³ä¸­ï¼éè¯¯çä¸é¡¹æ¯ï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_169",
    "type": "single",
    "answer": 3,
    "options": [
      "åå½æ¶åå²æ¡ä»¶çéå¶ï¼",
      "å¨ç¤¾ä¼ä¸»ä¹ç»æµæ¨¡å¼çéæ©åçè§£ä¸è¿äºåä¸ï¼",
      "å¨å¬æå¶å®ç°å½¢å¼çéæ©åçè§£ä¸è¿äºç®ååï¼",
      "ä»¥ä¸é½æï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næå½çç¤¾ä¼ä¸»ä¹æ¹é åºç°å¤±è¯¯ååå·®çåå æ¯ï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_170",
    "type": "single",
    "answer": 3,
    "options": [
      "è¦æ±è¿æ¥ï¼",
      "å·¥ä½è¿ç²ï¼",
      "æ¹åè¿å¿«ï¼",
      "ä»¥ä¸é½æï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå¨åä¸åä½åä»¥åå¯¹æå·¥ä¸ãä¸ªä½åä¸çæ¹é ä¸­ï¼å­å¨åªäºé®é¢ï¼ï¼ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_171",
    "type": "multiple",
    "answer": [
      0,
      2,
      4
    ],
    "options": [
      "å®äºæ±æ¯ï¼",
      "ç»ä¸æçº¿ï¼",
      "ç¾¤ä¼è·¯çº¿ï¼",
      "æ­¦è£æäºï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\næ¯æ³½ä¸ææ³æ´»ççµé­æ¯ï¼\nEãç¬ç«èªä¸»ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_172",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "options": [
      "å½å®¶çç¤¾ä¼ä¸»ä¹å·¥ä¸åï¼",
      "å¯¹åä¸çç¤¾ä¼ä¸»ä¹æ¹é ï¼",
      "å¯¹æå·¥ä¸çç¤¾ä¼ä¸»ä¹æ¹é ï¼",
      "å¯¹èµæ¬ä¸»ä¹å·¥åä¸çç¤¾ä¼ä¸»ä¹æ¹é ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\nä¸­å½å±äº§åå¨è¿æ¸¡æ¶æçæ»è·¯çº¿åæ»ä»»å¡æ¯ï¼ ï¼\nEãå¯¹èµæ¬å®¶åå°ä¸»é¶çº§çæ¹é ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_173",
    "type": "multiple",
    "answer": [
      0,
      1,
      2
    ],
    "options": [
      "å¸¦æç¤¾ä¼ä¸»ä¹èè½æ§è´¨çåä¸çäº§äºå©ç»ï¼",
      "åç¤¾ä¼ä¸»ä¹ä¸»ä¹æ§è´¨çåçº§åä¸çäº§åä½ç¤¾ï¼",
      "å®å¨ç¤¾ä¼ä¸»ä¹æ§è´¨çé«çº§åä¸çäº§åä½ç¤¾ï¼",
      "åæäººæ°å¬ç¤¾ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\næå½åä¸ç¤¾ä¼ä¸»ä¹æ¹é çæ­¥éª¤æ¯ï¼ ï¼\nEãå®¶åº­èäº§æ¿åè´£ä»»å¶ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_174",
    "type": "multiple",
    "answer": [
      0,
      2,
      3
    ],
    "options": [
      "é©¬åä¸»ä¹å¨ä¸­å½çè¿ç¨ååå±ï¼",
      "å³äºç¤¾ä¼ä¸»ä¹åçº§é¶æ®µççè®ºï¼",
      "æ¯ä¸­å½å±äº§åéä½æºæ§çç»æ¶ï¼",
      "æ¯è¢«å®è·µè¯æäºçå³äºä¸­å½é©å½åå»ºè®¾çæ­£ç¡®ççè®ºåååç»éªæ»ç»ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\næ¯æ³½ä¸ææ³æ¯ï¼ ï¼\nEãå³äºæ°ä¸»ä¸»ä¹ççè®ºï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_175",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "options": [
      "å å·¥è®¢è´§ï¼",
      "ç»è´­åéï¼",
      "ç»éä»£éï¼",
      "å§æå å·¥ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\næå½å¯¹èµæ¬ä¸»ä¹å·¥åä¸ç¤¾ä¼ä¸»ä¹æ¹é éåçå½å®¶èµæ¬ä¸»ä¹è¿æ¸¡å½¢å¼æï¼ ï¼\nEãå¬ç§åè¥ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_176",
    "type": "multiple",
    "answer": [
      1,
      4
    ],
    "options": [
      "æ°æåè¿å¨çå´èµ·ï¼",
      "æ°çç¤¾ä¼çäº§åçå¢é¿ï¼",
      "é©¬åä¸»ä¹çä¼ å¥ä¸ä¼ æ­ï¼",
      "åæé©å½çå½±åï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\næ¯æ³½ä¸ææ³äº§çåå½¢æçç©è´¨åºç¡æ¯ï¼ ï¼\nEãä¸­å½å·¥äººè¿å¨çåå±ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_177",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "options": [
      "åæ®æ°å°åå°å»ºä¸­å½çç»æµæ¿æ²»åå±æä¸å¹³è¡¡ï¼",
      "è¯å¥½çç¾¤ä¼åºç¡ï¼",
      "åååå±çé©å½å½¢å¿ï¼",
      "ç¸å½åéçæ­£å¼çº¢åçå­å¨ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\næ¯æ³½ä¸éè¿°çä¸­å½çº¢è²æ¿æè½å¤å­å¨åå±æ¯åå åæ¡ä»¶æåªäº\nEãå±äº§åçæ­£ç¡®é¢å¯¼ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_178",
    "type": "single",
    "answer": 0,
    "options": [
      "æ­£ç¡®",
      "éè¯¯"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æ°æ°ä¸»ä¸»ä¹å½å®¶å®è¡å·¥äººé¶çº§é¢å¯¼çãä»¥å·¥åèçä¸ºåºç¡çãåé©å½é¶çº§èåä¸æ¿çäººæ°æ°ä¸»ä¸æ¿",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_179",
    "type": "single",
    "answer": 1,
    "options": [
      "æ­£ç¡®",
      "éè¯¯"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "ä»1949å¹´å°1952å¹´ï¼ä¸­å½ç¤¾ä¼çä¸»è¦çç¾æ¯å¹¿å¤§åæ°ä¸å°ä¸»é¶çº§ä¹é´ççç¾",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_180",
    "type": "single",
    "answer": 0,
    "options": [
      "æ­£ç¡®",
      "éè¯¯"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "âä¸ä½ä¸¤ç¿¼âçâä¸»ä½âæ¯å·¥ä¸å",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_181",
    "type": "single",
    "answer": 1,
    "options": [
      "æ­£ç¡®",
      "éè¯¯"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "å¨åçº§å½¢å¼çå½å®¶èµæ¬ä¸»ä¹ä¸­ï¼ä¼ä¸çæææå±äºå½å®¶",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_182",
    "type": "single",
    "answer": 1,
    "options": [
      "æ­£ç¡®",
      "éè¯¯"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "å¯¹å®åèµæ¬è¿è¡èµä¹°æ¯ç¤¾ä¼ä¸»ä¹æ¹é ä¸­çä¸»è¦ä»»å¡ä¹ä¸ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_183",
    "type": "single",
    "answer": 1,
    "options": [
      "æ­£ç¡®",
      "éè¯¯"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "å¨æ°ææå¶æ¯ä¼äºåé«äºéä½ææå¶çã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_184",
    "type": "single",
    "answer": 1,
    "options": [
      "æ­£ç¡®",
      "éè¯¯"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æ¯æ³½ä¸è®¤ä¸ºï¼å®è¡å½å®¶èµæ¬ä¸»ä¹æ¯è¦å¯¹èµæ¬å®¶è¿è¡æå»åèµäº§æ²¡æ¶ï¼é¿åèµäº§é¶çº§ææ³çèå»¶ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_185",
    "type": "single",
    "answer": 1,
    "options": [
      "æ­£ç¡®",
      "éè¯¯"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æ°æ°ä¸»ä¸»ä¹ç¤¾ä¼å®æ¯ä¸ä¸ªç¬ç«çç¤¾ä¼å½¢æ",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_186",
    "type": "single",
    "answer": 1,
    "options": [
      "åå°é©å½ãåçå»ºè®¾ãæ­¦è£æäºï¼",
      "ç»ä¸æçº¿ãåçå»ºè®¾ãæ­¦è£æäºï¼",
      "å·¥åè¿å¨ãåçå»ºè®¾ãæ­¦è£æäºï¼",
      "æ­¦è£æäºãåå°é©å½ãç»ä¸æçº¿ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸­å½å±äº§åå¨æ°ä¸»é©å½ä¸­æèæäººçä¸å¤§æ³å®æ¯",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_187",
    "type": "single",
    "answer": 2,
    "options": [
      "å·¥äººè¿å¨ï¼",
      "æ°ä¸»è¿å¨ï¼",
      "æ­¦è£æäºï¼",
      "å­¦çè¿å¨ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸­å½é©å½çä¸»è¦å½¢å¼æ¯",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_188",
    "type": "single",
    "answer": 1,
    "options": [
      "æ±å¾·ï¼",
      "æ¯æ³½ä¸ï¼",
      "å¨æ©æ¥ï¼",
      "åå°å¥ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå¨ä¸­å±å«ä¸ä¼è®®ä¸ï¼æåºâä»¥åè¦éå¸¸æ³¨æåäºï¼é¡»ç¥æ¿ææ¯ç±æªæå­ä¸­åå¾çãâè¿ä¸èåè®ºæ­çæ¯",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_189",
    "type": "single",
    "answer": 1,
    "options": [
      "æ­¦è£æäºãç»ä¸æçº¿ãåçå»ºè®¾ï¼",
      "æ­¦è£æï¿½ï¿½ï¿½ãåå°é©å½ãæ ¹æ®å°çå»ºè®¾ï¼",
      "å®äºæ±æ¯ãç¾¤ä¼è·¯çº¿ãèªææ¹è¯ï¼",
      "æ¸¸å»æäºãçº¢è²æ¿æãåçå»ºè®¾ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ¯æ³½ä¸æåºçâå·¥åæ­¦è£å²æ®âçåºæ¬ææ³åæ¬ä¸ä¸ªä¸å¯åå²çé¨åæ¯",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_190",
    "type": "single",
    "answer": 1,
    "options": [
      "æä»ææ¥ï¼",
      "åææ¥æªï¼",
      "å å¼ºæ¿æ²»æè²å·¥ä½ï¼",
      "æ¸¸å»æäºï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\näººæ°åéå»ºè®¾çæ ¹æ¬ååæ¯",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_191",
    "type": "single",
    "answer": 2,
    "options": [
      "æ²¡æ¶å°å»ºå°ä¸»é¶çº§çåå°å½æ°æ°ä¸»ä¸»ä¹å½å®¶ææï¼",
      "æ²¡æ¶å®ååæ­èµæ¬å½æ°æ°ä¸»ä¸»ä¹å½å®¶ææï¼",
      "æ²¡æ¶å°å»ºå°ä¸»é¶çº§çåå°å½åæ°ææï¼",
      "ä¿æ¤æ°æå·¥åä¸ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ°æ°ä¸»ä¸»ä¹é©å½çä¸­å¿åå®¹æ¯",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_192",
    "type": "single",
    "answer": 3,
    "options": [
      "å½æ°é©å½èåæçº¿ï¼",
      "å·¥åæ°ä¸»ç»ä¸æçº¿ï¼",
      "ææ¥æ°æç»ä¸æçº¿ï¼",
      "äººæ°æ°ä¸»ç»ä¸æçº¿ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nè§£æ¾æäºæ¶æçé©å½ç»ä¸æçº¿æ¯",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_193",
    "type": "single",
    "answer": 1,
    "options": [
      "å°ä¸»é¶çº§ååæ°é¶çº§ççç¾ï¼",
      "å¸å½ä¸»ä¹åä¸­åæ°æççç¾ï¼",
      "èµäº§é¶çº§åæ äº§é¶çº§ççç¾ï¼",
      "å°å»ºä¸»ä¹åäººæ°å¤§ä¼ççç¾ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[ï¿½ï¿½ï¿½éé¢]\nè¿ä»£ä¸­å½ç¤¾ä¼æä¸»è¦ççç¾æ¯",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_194",
    "type": "single",
    "answer": 1,
    "options": [
      "æ°æåè¿å¨çå´èµ·ï¼",
      "äºåè¿å¨ï¼",
      "ä¸­å½å±äº§åçå»ºç«ï¼",
      "åä¼æäºï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ å¿çæ§æ°ä¸»ä¸»ä¹é©å½åæ°æ°ä¸»ä¸»ä¹é©å½è½¬åçéå¤§äºä»¶æ¯",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_195",
    "type": "multiple",
    "answer": [
      2,
      1
    ],
    "options": [
      "å°å»ºç¤¾ä¼ï¼",
      "åèµæ¬ä¸»ä¹ç¤¾ä¼ï¼",
      "åæ®æ°å°åå°å»ºç¤¾ä¼ï¼",
      "èµæ¬ä¸»ä¹ç¤¾ä¼ï¼",
      "ç¥è¯åå­ï¼",
      "åæ°ï¼",
      "å°èµäº§é¶çº§ï¼",
      "æå·¥ä¸èï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nè¿ä»£ä¸­å½çç¤¾ä¼æ§è´¨æ¯",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_196",
    "type": "single",
    "answer": 3,
    "options": [
      "åæ°é©å½æäºçå¤±è´¥ï¼",
      "ä¸­å½å°å»ºä¸»ä¹çç»æ²»ï¼",
      "ä¸­å½èµæ¬ä¸»ä¹çè½¯å¼±ï¼",
      "å¸å½ä¸»ä¹çä¾µç¥ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nè¿ä»£ä¸­å½æ²¦ä¸ºåæ®æ°å°åå°å»ºç¤¾ä¼çæ ¹æ¬åå æ¯",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_197",
    "type": "single",
    "answer": 2,
    "options": [
      "äºèæ¯ä¸­å½é©å½è¿ç¨å¿ç»çä¸¤ä¸ªé¶æ®µï¼",
      "æ°ä¸»é©å½æ¯ç¤¾ä¼ä¸»ä¹é©å½çå¿è¦åå¤ï¼ç¤¾ä¼ä¸»ä¹é©å½æ¯æ°ä¸»é©å½çå¿ç¶è¶å¿ï¼",
      "äºèå¯ä»¥åæ¶è¿è¡ï¼âæ¯å¶åäºä¸å½¹âï¼",
      "äºèä½ç°äºåçæä½çº²é¢åæé«çº²é¢çè¾©è¯ç»ä¸ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå³äºæ°ä¸»é©å½åç¤¾ä¼ä¸»ä¹é©å½çå³ç³»ï¼è¡¨è¿°ä¸æ­£ç¡®çæ¯",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_198",
    "type": "single",
    "answer": 2,
    "options": [
      "èµæ¬ä¸»ä¹ï¼",
      "æ°æ°ä¸»ä¸»ä¹ï¼",
      "ç¤¾ä¼ä¸»ä¹ï¼",
      "ä¸æ°ä¸»ä¹ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ°æ°ä¸»ä¸»ä¹é©å½çç»æåéæ¯",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_199",
    "type": "single",
    "answer": 3,
    "options": [
      "èµäº§é¶çº§ä¸æ¿ï¼",
      "æ äº§é¶çº§ä¸æ¿ï¼",
      "åæ°æ°ä¸»ä¸æ¿ï¼",
      "åé©å½é¶çº§èåä¸æ¿ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ°æ°ä¸»ä¸»ä¹å±åå½çå½ä½æ¯",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_200",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "options": [
      "ç¬¬ä¸æ¬¡å½å±åä½çç»ä¸æçº¿ï¼",
      "å·¥åæ°ä¸»ç»ä¸æçº¿ï¼",
      "ææ¥æ°æç»ä¸æçº¿ï¼",
      "äººæ°æ°ä¸»ç»ä¸æçº¿ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\næ°æ°ä¸»ä¸»ä¹é©å½æ¶æï¼ä¸­å½å±äº§åé¢å¯¼çç»ä¸æçº¿ååç»åçå ä¸ªæ¶ææ¯",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_201",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "options": [
      "å®ææ°çé¢å¯¼é¶çº§å³æ äº§é¶çº§ï¼",
      "å®ææ°çæå¯¼ææ³å³é©¬åæä¸»ä¹ï¼",
      "å®å±äºä¸çæ äº§é¶çº§é©å½çä¸é¨åï¼",
      "å®æäºæ°çåéï¼ç»è¿æ°æ°ä¸»ä¸»ä¹é©å½è¿èè¾¾å°ç¤¾ä¼ä¸»ä¹çç®æ ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\næ°æ°ä¸»ä¸»ä¹é©å½å°±æ¯âæ°å¼çç¹æ®çèµäº§é¶çº§æ°ä¸»ä¸»ä¹é©å½âï¼å®çåºæ¬ç¹ç¹æ¯",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_202",
    "type": "multiple",
    "answer": [
      1,
      3
    ],
    "options": [
      "åä¸ºå®åèµæ¬ä¸»ä¹åæ°æèµæ¬ä¸»ä¹ä¸¤é¨åï¼é½æ¯ä¸­å½é©å½çå¯¹è±¡ï¼",
      "å®åèµæ¬ä¸»ä¹æ¯ä¸­å½é©å½çå¯¹è±¡ï¼èæ°æèµæ¬ä¸»ä¹æ¯ä¸­å½é©å½è¦ä¿æ¤çå¯¹è±¡ï¼",
      "å®åèµäº§é¶çº§åæ°æèµäº§é¶çº§é½æ¯ä¸­å½é©å½çæäººï¼",
      "å®åèµäº§é¶çº§æ¯ä¸­å½é©å½çå¯¹è±¡ï¼èæ°æèµäº§é¶çº§æ¯ä¸­å½é©å½çå¨åä¹ä¸ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\nå³äºæ°æ°ä¸»ä¸»ä¹ï¿½ï¿½ï¿½å½æ¶æå¯¹ä¸­å½çèµæ¬ä¸»ä¹çè®¤è¯æ­£ç¡®çæ¯",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_203",
    "type": "multiple",
    "answer": [
      1,
      3,
      0
    ],
    "options": [
      "çè®ºèç³»å®éï¼",
      "å¯åèç³»ç¾¤ä¼ï¼",
      "ä¸ºäººæ°æå¡ï¼",
      "æ¹è¯ä¸èªææ¹è¯ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\nåå¨é¿ææäºä¸­å½¢æçä¸å¤§ä¼è¯ä½é£æ¯",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_204",
    "type": "multiple",
    "answer": [
      0,
      1,
      2
    ],
    "options": [
      "æ·±åå¸å½ä¸»ä¹ãå°å»ºä¸»ä¹åèµæ¬ä¸»ä¹çä¸éåè¿«ï¼é©å½æåå³ï¼",
      "å¤§å¤æ¥èªäºç ´äº§çåæ°ï¼æäºç»æå·¥åèçï¼",
      "åå¸ç¸å½éä¸­ï¼ä¾¿äºç»ç»èµ·æ¥ï¼",
      "ä¸åè¿ççäº§æ¹å¼ç¸èç³»ï¼å¯äºç»ç»æ§ãçºªå¾æ§ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\nä¸­å½æ äº§é¶çº§å·å¤ä¸çæ äº§é¶çº§çä¸è¬ä¼ç¹å¤ï¼è¿æä¸åç¹æ®ä¼ç¹",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_205",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "options": [
      "å¨æ§è´¨ä¸ä»å±äºèµäº§é¶çº§æ°ä¸»é©å½ï¼",
      "å¨èç´ä¸å±äºä¸çæ äº§é¶çº§ç¤¾ä¼ä¸»ä¹é©å½çä¸é¨åï¼",
      "å®è´¨æ¯æ äº§é¶çº§é¢å¯¼çåæ°é©å½ï¼",
      "é©å½åéæ¯ç¤¾ä¼ä¸»ä¹æ¹åçï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\nä¸åå³äºæ°æ°ä¸»ä¸»ä¹é©å½çè¯´æ³æ­£ç¡®çæ¯",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_206",
    "type": "single",
    "answer": 0,
    "options": [
      "æ­£ç¡®",
      "éè¯¯"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "âæªæå­éé¢åºæ¿æâ",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_207",
    "type": "single",
    "answer": 1,
    "options": [
      "æ­£ç¡®",
      "éè¯¯"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "å¨æ°æ°ä¸»ä¸»ä¹é©å½æ¶æï¼åªæå½æ°æèµäº§é¶çº§æ¥æ¤é©å½æ¶ï¼æè¦ä¿æ¤æ°æèµæ¬ä¸»ä¹",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_208",
    "type": "single",
    "answer": 1,
    "options": [
      "æ­£ç¡®",
      "éè¯¯"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "å¨æ°æ°ä¸»ä¸»ä¹é©å½æ¶æï¼åå¸å°èµäº§é¶çº§å±äºèµäº§é¶çº§ï¼æ¯æ°æ°ä¸»ä¸»ä¹é©å½å¯¹è±¡ä¹ä¸",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_209",
    "type": "single",
    "answer": 0,
    "options": [
      "æ­£ç¡®",
      "éè¯¯"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æ°æ°ä¸»ä¸»ä¹å±åå½æéåçå½å®¶æ¿æå½¢å¼æ¯å ä¸ªé©å½é¶çº§çèåä¸æ¿",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_210",
    "type": "single",
    "answer": 1,
    "options": [
      "æ­£ç¡®",
      "éè¯¯"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "å¸å½ä¸»ä¹åå¼ºçå¥ä¾µï¼æ¯ä¸ºäºæå°å»ºä¸­å½åæèµæ¬ä¸»ä¹çä¸­å½",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_211",
    "type": "single",
    "answer": 1,
    "options": [
      "æäºä¸é©å½",
      "åå¹³ä¸åå±",
      "æºéä¸ææ",
      "ç¥è¯ç»æµä¸ä¿¡æ¯é©å½"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\néå°å¹³çè®ºå½¢æçæ¶ä»£ä¸»é¢æ¯ï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_212",
    "type": "single",
    "answer": 2,
    "options": [
      "æ¶ä»£èæ¯æ¯åå¹³ä¸åå±",
      "åå²ä¾æ®æ¯ç¤¾ä¼ä¸»ä¹å»ºè®¾æ­£åä¸¤æ¹é¢çåå²ç»éª",
      "ç°å®ä¾æ®æ¯æå½æ¹é©å¼æ¾åç°ä»£åå»ºè®¾çæ°å®è·µ",
      "çè®ºä¾æ®æ¯é©¬åä¸»ä¹æ¯æ³½ä¸ææ³"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\néå°å¹³æåºï¼âæä»¬ç°å¨æå¹²çäºä¸æ¯ä¸é¡¹æ°äºä¸ï¼é©¬åææ²¡æè®²è¿ï¼æä»¬çåäººæ²¡æåè¿ï¼å¶ä»ç¤¾ä¼ä¸»ä¹å½å®¶ä¹æ²¡æå¹²è¿ï¼â¦â¦æä»¬åªè½å¨å¹²ä¸­å­¦ï¼å¨å®è·µä¸­æ¸ç´¢ãâè¿æ®µè¯è¡¨æéå°å¹³çè®ºäº§çç( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_213",
    "type": "single",
    "answer": 0,
    "options": [
      "åçåäºå¤§",
      "åçåä¸å¤§",
      "åçååå¤§",
      "åçåä¸å±ä¸ä¸­å¨ä¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\néå°å¹³æåºâå»ºè®¾æä¸­å½ç¹è²çç¤¾ä¼ä¸»ä¹âç§å­¦å½é¢æ¯å¨ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_214",
    "type": "single",
    "answer": 1,
    "options": [
      "ä»ä¹æ¯é©¬åæä¸»ä¹ãææ ·å¯¹å¾é©¬åæä¸»ä¹",
      "ä»ä¹æ¯ç¤¾ä¼ä¸»ä¹ãææ ·å»ºè®¾ç¤¾ä¼ä¸»ä¹",
      "å»ºè®¾ä»ä¹æ ·çåãææ ·å»ºè®¾å",
      "ä»ä¹æ¯åå±ï¼ææ ·åå±"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nåçåä¸å±ä¸ä¸­å¨ä¼ä»¥åï¼éå°å¹³ç¬¬ä¸æ¬¡æ¯è¾ç³»ç»å°åç­ççè®ºä¸»é¢æ¯ï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_215",
    "type": "single",
    "answer": 1,
    "options": [
      "åçåäºå¤§",
      "åçåä¸å¤§",
      "åçååå¤§"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nç¬¬ä¸æ¬¡æ¯è¾ç³»ç»å°è®ºè¿°äºæå½ç¤¾ä¼ä¸»ä¹åçº§é¶æ®µçè®ºï¼æç¡®æ¦æ¬åå¨é¢éåäºåçâä¸ä¸ªä¸­å¿ãä¸¤ä¸ªåºæ¬ç¹âçåºæ¬è·¯çº¿ï¼ä»é©¬åæä¸»ä¹å²å­¦ãæ¿æ²»ç»æµå­¦åç§å­¦ç¤¾ä¼ä¸»ä¹ç­æ¹é¢ï¼ç¬¬ä¸æ¬¡å¯¹ä¸­å½ç¹è²ç¤¾ä¼çè®ºçä¸»è¦åå®¹ä½äºç³»ç»æ¦æ¬æ¯å¨ï¼ï¼ã\nDåçåäºå¤§",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_216",
    "type": "single",
    "answer": 2,
    "options": [
      "1987å¹´åçåä¸å¤§",
      "1992å¹´åçååå¤§",
      "1997å¹´åçåäºå¤§",
      "2002å¹´åçåå­å¤§"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nï¿½ï¿½åºâéå°å¹³çè®ºâç§å­¦æ¦å¿µçåçå¤§ä¼æ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_217",
    "type": "single",
    "answer": 3,
    "options": [
      "åçåäºå¤§",
      "åçåä¸å¤§",
      "åçååå¤§",
      "åçåäºå¤§"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næéå°å¹³çè®ºåé©¬åæåå®ä¸»ä¹ãæ¯æ³½ä¸ææ³ä¸èµ·ï¼ç¡®ç«ä¸ºåçæå¯¼ææ³å¹¶åå¥åç« æ¯å¨ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_218",
    "type": "single",
    "answer": 2,
    "options": [
      "åçåäºå¤§",
      "åçåä¸å¤§",
      "åæ¹è°è¯",
      "åçååå¤§"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå¯¹ç¤¾ä¼ä¸»ä¹æ¬è´¨ä½äºæ»ç»æ§çè®ºæ¦æ¬ï¼å³âç¤¾ä¼ä¸»ä¹çæ¬è´¨ï¼æ¯è§£æ¾çäº§åï¼åå±çäº§åï¼æ¶ç­å¥åï¼æ¶é¤ä¸¤æååï¼æç»è¾¾å°å±åå¯è£âçä¼è®®æ¯ï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_219",
    "type": "single",
    "answer": 0,
    "options": [
      "å±åå¯è£",
      "æå³åé",
      "åæ­¥å¯è£",
      "è§£æ¾çäº§å"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\néå°å¹³å¼ºè°ï¼âå¨æ¹é©ä¸­ï¼æä»¬å§ç»åæä¸¤æ¡æ ¹æ¬ååï¼ä¸æ¯ä»¥ç¤¾ä¼ä¸»ä¹å¬æå¶ç»æµä¸ºä¸»ä½ï¼ä¸æ¯ï¼ ï¼ãâ",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_220",
    "type": "single",
    "answer": 0,
    "options": [
      "è§£æ¾ææ³ï¼å®äºæ±æ¯",
      "è§£æ¾çäº§åï¼åå±çäº§å",
      "åæåé¡¹åºæ¬åå",
      "å¼æåæ°"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\néå°å¹³çè®ºçç²¾é«æ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_221",
    "type": "single",
    "answer": 3,
    "options": [
      "ãå®ç°ååï¼æ°¸ä¸ç§°é¸ã",
      "ãé«ä¸¾æ¯æ³½ä¸ææ³æå¸ï¼åæå®äºæ±æ¯çååã",
      "ãå®è¡å¼æ¾æ¿ç­ï¼å­¦ä¹ ä¸çåè¿ç§å­¦ææ¯ã",
      "ãè§£æ¾ææ³ï¼å®äºæ±æ¯ï¼å¢ç»ä¸è´ååçã"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå¨åçåä¸å±ä¸ä¸­å¨ï¿½ï¿½åå¤å¬å¼çä¸­å¤®å·¥ä½ä¼è®®ä¸ï¼å®éä¸æä¸ºåçåä¸å±ä¸ä¸­å¨ä¼ä¸»é¢æ¥åçæ¯ï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_222",
    "type": "single",
    "answer": 3,
    "options": [
      "ç»æµå»ºè®¾",
      "æåå»ºè®¾",
      "æ¿æ²»å»ºè®¾",
      "ç¤¾ä¼ä¸»ä¹ç°ä»£åå»ºè®¾"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nåçåä¸å±ä¸ä¸­å¨ä¼ææ­ä½åºäºæååå½å®¶å·¥ä½éç¹è½¬ç§»çæ¹åæ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_223",
    "type": "single",
    "answer": 3,
    "options": [
      "å¦ä½è¿è¡ç¤¾ä¼ä¸»ä¹é©å½çä¸ç³»åé®é¢",
      "å¦ä½è¿è¡ç¤¾ä¼ä¸»ä¹é©å½åå»ºè®¾çä¸ç³»åé®é¢",
      "å¦ä½å»ºç«ç¤¾ä¼ä¸»ä¹çä¸ç³»åé®é¢",
      "å¦ä½å»ºè®¾ç¤¾ä¼ä¸»ä¹ãå¦ä½å·©åºååå±ç¤¾ä¼ä¸»ä¹ä¸ç³»ååºæ¬é®é¢"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\néå°å¹³çè®ºæ­£ç¡®åç­äºä¸­å½è¿æ ·ç»æµæåæ¯è¾è½åå½å®¶ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_224",
    "type": "single",
    "answer": 3,
    "options": [
      "å½¢æé¶æ®µ",
      "åå±é¶æ®µ",
      "æçé¶æ®µ",
      "å½¢æååå±çå¨è¿ç¨"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nè§£æ¾ææ³ï¼å®äºæ±æ¯è´¯ç©¿äºéå°å¹³çè®ºçï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_225",
    "type": "single",
    "answer": 1,
    "options": [
      "è§£æ¾çäº§åï¼åå±çäº§å",
      "è§£æ¾ææ³ï¼å®äºæ±æ¯",
      "åæåé¡¹åºæ¬åå",
      "ä¸æ¶ä¿±è¿ï¼å¼æåæ°"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\néå°å¹³çè®ºæ´»ççµé­æ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_226",
    "type": "single",
    "answer": 1,
    "options": [
      "æåºå®äºæ±æ¯",
      "å¼ºè°è§£æ¾ææ³",
      "å¼ºè°çè®ºèç³»å®é",
      "æåºå®è·µæ¯æ£éªçççæä¸æ å"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\néå°å¹³å¯¹åçææ³è·¯çº¿éæ°ç¡®ç«çè´¡ç®å¨äºï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_227",
    "type": "single",
    "answer": 2,
    "options": [
      "é©¬åæä¸»ä¹çåºæ¬åç",
      "æ¯æ³½ä¸ææ³",
      "ç¤¾ä¼å®è·µ",
      "ç¤¾ä¼ç»éª"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\néå°å¹³åå³åå¯¹âä¸¤ä¸ªå¡æ¯âçè§ç¹ï¼æç¡®æåºï¼æ£éªçççå¯ä¸æ åæ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_228",
    "type": "single",
    "answer": 2,
    "options": [
      "å®äºæ±æ¯",
      "ä¸æ¶ä¿±è¿",
      "è§£æ¾ææ³ï¼å®äºæ±æ¯",
      "è§£æ¾ææ³ãå®äºæ±æ¯ãä¸æ¶ä¿±è¿"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\néå°å¹³å¨ç¤¾ä¼ä¸»ä¹å»ºè®¾æ°æ¶æéæ°ç¡®ç«ååå±äºåçææ³è·¯çº¿ï¼æå®æ¦æ¬ä¸ºï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_229",
    "type": "single",
    "answer": 0,
    "options": [
      "ææå½å»ºè®¾æä¸ºå¯å¼ºãæ°ä¸»ãææçç¤¾ä¼ä¸»ä¹ç°ä»£åå½å®¶",
      "ææå½å»ºè®¾æä¸ºå¯å¼ºãæ°ä¸»ãææãåè°çç¤¾ä¼ä¸»ä¹ç°ä»£åå½å®¶",
      "ææå½å»ºè®¾æä¸ºå¯å¼ºãæ°ä¸»ãææãåè°ãç¾ä¸½ç¤¾ä¼ä¸»ä¹ç°ä»£åå½å®¶",
      "ææå½å»ºè®¾æä¸ºå¯å¼ºãæ°ä¸»ãææãåè°ãç¾ä¸½çç¤¾ä¼ä¸»ä¹ç°ä»£åå¼ºå½"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nåçåä¸å¤§æ¥åæåºäºåå¨ç¤¾ä¼ä¸»ä¹åçº§é¶æ®µçåºæ¬è·¯çº¿ï¼è§å®äºåå¨ç¤¾ä¼ä¸»ä¹åçº§é¶æ®µçå¥æç®æ æ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_230",
    "type": "single",
    "answer": 3,
    "options": [
      "åæé©¬åæä¸»ä¹ãåæè§£æ¾çäº§å",
      "åæç¤¾ä¼ä¸»ä¹ãåææ¹é©å¼æ¾",
      "åæåçé¢å¯¼ãåæåå±çäº§å",
      "åæåé¡¹åºæ¬ååãåææ¹é©å¼æ¾"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nåçåä¸å¤§æ¥åæåºäºåå¨ç¤¾ä¼ä¸»ä¹åçº§é¶æ®µçåºæ¬è·¯çº¿ï¼å¶ä¸»è¦åå®¹å³âä¸ä¸ªä¸­å¿ãä¸¤ä¸ªåºæ¬ç¹âï¼æ­¤å¤çâä¸ä¸ªä¸­å¿âæ¯æä»¥ç»æµå»ºè®¾ä¸ºä¸­å¿ï¼âä¸¤ä¸ªåºæ¬ç¹âæ¯æï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_231",
    "type": "single",
    "answer": 1,
    "options": [
      "åå±ç»æµ",
      "åå±çäº§å",
      "åå±ç§æ",
      "åå±æ°ä¸»"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\néå°å¹³çè®ºè®¤ä¸ºï¼ç¤¾ä¼ä¸»ä¹çæ ¹æ¬ä»»å¡æ¯ï¿½ï¿½ï¿½ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_232",
    "type": "single",
    "answer": 2,
    "options": [
      "å°21ä¸çºªä¸­å¶ï¼å½æ°çäº§æ»å¼åç¿»ä¸çªï¼è¾¾å°åè¾¾å½å®¶æ°´å¹³ï¼åºæ¬å®ç°ç°ä»£åã",
      "å°21ä¸çºªä¸­å¶ï¼å½æ°çäº§æ»å¼åç¿»ä¸¤çªï¼è¾¾å°ä¸­ç­åè¾¾å½å®¶æ°´å¹³ï¼å®ç°ç°ä»£åã",
      "å°21ä¸çºªä¸­å¶ï¼å½æ°çäº§æ»å¼åç¿»ä¸¤çªï¼è¾¾å°ä¸­ç­åè¾¾å½å®¶æ°´å¹³ï¼åºæ¬å®ç°ç°ä»£åã",
      "å°21ä¸çºªä¸­å¶ï¼å½æ°çäº§æ»å¼åç¿»ä¸çªï¼è¾¾å°åè¾¾å½å®¶æ°´å¹³ï¼å®ç°ç°ä»£åã"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\n1987å¹´10æï¼åçåä¸å¤§æéå°å¹³âä¸æ­¥èµ°âçåå±æç¥ææ³æç¡®ä¸æ¥ï¼æç¡®æåºï¼ç¬¬ä¸æ­¥ï¼ä»1981å¹´å°1990å¹´å®ç°å½æ°çäº§æ»å¼æ¯1980å¹´ç¿»ä¸çªï¼è§£å³äººæ°çæ¸©é¥±é®é¢ï¼ç¬¬äºæ­¥ï¼ä»1991å¹´å°20ä¸çºªæ«ï¼ä½¿å½æ°çäº§æ»å¼åç¿»ä¸çªï¼è¾¾å°å°åº·æ°´å¹³ï¼ç¬¬ä¸æ­¥æ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_233",
    "type": "single",
    "answer": 3,
    "options": [
      "åæ­¥å¯è£",
      "å±äº«åå±",
      "å¨é¢å°åº·",
      "å±åå¯è£"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸ºäºé¡ºå©å®ç°ç°ä»£ååå±æç¥ï¼éå°å¹³è¿æåºï¼åè®¸åé¼å±ä¸é¨åå°åºãä¸é¨åäººåå¯èµ·æ¥ï¼æç»éæ­¥è¾¾å°ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_234",
    "type": "single",
    "answer": 0,
    "options": [
      "åäºå±ä¸ä¸­å¨ä¼",
      "åä¸å±ä¸ä¸­å¨ä¼",
      "åäºå±å­ä¸­å¨ä¼",
      "åä¸å±ä¸ä¸­å¨ä¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\néè¿ãä¸­å±ä¸­å¤®å³äºç»æµä½å¶æ¹é©çå³å®ãï¼æåºç¤¾ä¼ä¸»ä¹ç»æµæ¯âå¬æå¶åºç¡ä¸æè®¡åçååç»æµâè®ºæ­ä¼è®®æ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_235",
    "type": "single",
    "answer": 1,
    "options": [
      "æ¿æ²»ææãçæææ",
      "ç©è´¨ææãç²¾ç¥ææ",
      "ç»æµææãçæææ",
      "æ¿æ²»ææãç¤¾ä¼ææ"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\néå°å¹³å¼ºè°ï¼æå½ç¤¾ä¼ä¸»ä¹ç°ä»£åå»ºè®¾çä¸ä¸ªæ ¹æ¬æ¹éæ¯âä¸¤ææï¼ä¸¤æé½è¦ç¡¬âï¼âä¸¤ææï¼ä¸¤æé½è¦ç¡¬âæ¯æï¼ä¸ææï¼ï¼ï¼ä¸ææï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_236",
    "type": "single",
    "answer": 0,
    "options": [
      "å»ºè®¾ãæ³å¶",
      "å»ºè®¾ãæ³æ²»",
      "æ¹é©å¼æ¾ãæ³å¶",
      "å»ºè®¾ãæ©æ²»èè´¥"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\néå°å¹³çè®ºä¸ä»å¼ºè°ç©è´¨ææåç²¾ç¥ææä¸¤ææï¼ä¸¤æé½è¦ç¡¬ï¼èä¸è¿æåºäºå¶ä»ç³»åâä¸¤ææâææ³ãå¶ä¸­åæ¬ï¼ä¸ææï¼ï¼ï¼ä¸ææï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_237",
    "type": "single",
    "answer": 2,
    "options": [
      "é¦æ¸¯",
      "æ¾³é¨",
      "å°æ¹¾",
      "è¥¿è"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nâä¸å½ä¸¤å¶âä¼å¤§ææ³çæåºï¼é¦åä¸ºè§£å³çé®é¢æ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_238",
    "type": "single",
    "answer": 3,
    "options": [
      "å¶åº¦å»ºè®¾",
      "æ¹é©å¼æ¾",
      "ç»æµå»ºè®¾",
      "åçé¢å¯¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå»ºè®¾ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹ï¼å³é®å¨äºåæãå å¼ºåæ¹åï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_239",
    "type": "single",
    "answer": 2,
    "options": [
      "è°è¦å¥æ",
      "å®äºæ±æ¯",
      "ç¬ç«èªä¸»",
      "äºåå¤æ´"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸­å½é©å½åå»ºè®¾çåºæ¬ç«è¶³ç¹æ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_240",
    "type": "single",
    "answer": 0,
    "options": [
      "å½éå±å¿åä¸çæ ¼å±åçåææªæçå·¨å¤§åå",
      "åçåä¸å±åä¸­å¨ä¼ä»¥æ¥ååäººæ°å»ºè®¾ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹çä¼å¤§æ¢ç´¢",
      "åçå»ºè®¾é¢ä¸´çæ°å½¢å¿æ°ä»»å¡",
      "ç¤¾ä¼ä¸»ä¹åçº§é¶æ®µçåºæ¬å½æ"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nâä¸ä¸ªä»£è¡¨âéè¦ææ³å½¢æçæéè¦çæ¶ä»£èæ¯æ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_241",
    "type": "single",
    "answer": 3,
    "options": [
      "åå²ä½¿å½",
      "ä¸»è¦ä»»å¡",
      "æ§æ¿å°ä½",
      "åå²æ¹ä½"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nâä¸ä¸ªä»£è¡¨âéè¦ææ³æ¯å¨ç§å­¦å¤æ­åçï¼ ï¼çåºç¡ä¸å½¢æçã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_242",
    "type": "single",
    "answer": 3,
    "options": [
      "ç¤¾ä¼ä¸»ä¹ç»æµå»ºè®¾çè®¤è¯",
      "ç¤¾ä¼ä¸»ä¹æ§æ¿åå»ºè®¾çè®¤è¯",
      "ç¤¾ä¼ä¸»ä¹åå±éè·¯çè®¤è¯",
      "ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹çè®¤è¯"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nâä¸ä¸ªä»£è¡¨âéè¦ææ³ï¼è¿ä¸æ­¥åç­äºä»ä¹æ¯ç¤¾ä¼ä¸»ä¹ãææ ·å»ºè®¾ç¤¾ä¼ä¸»ä¹çé®é¢ï¼åé æ§å°åç­äºå»ºè®¾ä»ä¹æ ·çåãææ ·å»ºè®¾åçé®é¢ï¼éä¸­èµ·æ¥å°±æ¯æ·±åäºå¯¹( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_243",
    "type": "single",
    "answer": 1,
    "options": [
      "ä»ä¹æ¯ç¤¾ä¼ä¸»ä¹ï¼ææ ·å»ºè®¾ç¤¾ä¼ä¸»ä¹çé®é¢",
      "å»ºè®¾ä»ä¹æ ·çåï¼ææ ·å»ºè®¾åçé®é¢",
      "ä»ä¹æ¯åå±ï¼ææ ·åå±çé®é¢",
      "ä»ä¹æ¯ç¤¾ä¼åè°ï¼ææ ·æå»ºç¤¾ä¼ä¸»ä¹åè°ç¤¾ä¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nâä¸ä¸ªä»£è¡¨âéè¦ææ³å¨éå°å¹³çè®ºåºç¡ä¸åé æ§çåç­äºï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665244_244",
    "type": "single",
    "answer": 0,
    "options": [
      "ç§å­¦ææ¯",
      "æ¹é©",
      "åæ°",
      "åå±"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nè¢«ç§°ä¸ºæ¯ç¬¬ä¸çäº§åï¼ä»¥ååè¿çäº§åéä¸­ä½ç°åä¸»è¦æ å¿çæ¯( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_245",
    "type": "single",
    "answer": 2,
    "options": [
      "æ°æç²¾ç¥å»ºè®¾",
      "ç¤¾ä¼ä¸»ä¹ç²¾ç¥ææå»ºè®¾",
      "ç¤¾ä¼ä¸»ä¹ææ³éå¾·å»ºè®¾",
      "ææ³æ¿æ²»æè²å»ºè®¾"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nåå±ç¤¾ä¼ä¸»ä¹åè¿æåçéè¦åå®¹åä¸­å¿ç¯èæ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_246",
    "type": "single",
    "answer": 3,
    "options": [
      "æåå·¥ä½",
      "åçå»ºè®¾",
      "æ³æ²»å·¥ä½",
      "ææ³æ¿æ²»å·¥ä½"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nè¢«ç§°ä¸ºæ¯ç»æµå·¥ä½åå¶ä»ä¸åå·¥ä½çå½çº¿çæ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_247",
    "type": "single",
    "answer": 3,
    "options": [
      "1987å¹´åçåä¸å¤§",
      "1992å¹´åçååå¤§",
      "1997å¹´åçåäºå¤§",
      "2002å¹´åçåå­å¤§"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næâä¸ä¸ªä»£è¡¨âéè¦ææ³ç¡®ç«ä¸ºåçæå¯¼ææ³ï¼å¹¶åå¥åç« æ¯å¨ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_248",
    "type": "single",
    "answer": 0,
    "options": [
      "å»ºè®¾ä»ä¹æ ·çåï¼ææ ·å»ºè®¾åçé®é¢",
      "æå½å¦ä½è¿è¡ç¤¾ä¼ä¸»ä¹é©å½åå»ºè®¾é®é¢",
      "æå½å¦ä½å»ºç«ç¤¾ä¼ä¸»ä¹çä¸ç³»åé®é¢",
      "æå½å¦ä½å»ºè®¾ãå·©åºååå±ç¤¾ä¼ä¸»ä¹ä¸ç³»ååºæ¬é®é¢"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nâä¸ä¸ªä»£è¡¨âéè¦ææ³æ¯é©¬åæä¸»ä¹ä¸­å½åçéè¦ææï¼å®åé æ§å°åç­äºï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_249",
    "type": "single",
    "answer": 1,
    "options": [
      "ç»æµ",
      "åå±",
      "ç§æ",
      "æå"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nè¢«ç§°ä¸ºæ§æ¿å´å½ç¬¬ä¸è¦å¡çæ¯( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_250",
    "type": "single",
    "answer": 0,
    "options": [
      "æ ¹æ¬ä¿è¯",
      "æ¬è´¨è¦æ±",
      "åºæ¬æ¹ç¥",
      "å³é®"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå»ºè®¾ç¤¾ä¼ä¸»ä¹æ¿æ²»ææï¼ææ ¹æ¬çå°±æ¯è¦åæåçé¢å¯¼ãäººæ°å½å®¶åä¸»åä¾æ³æ²»å½çææºç»ä¸ãå¶ä¸­ï¼åçé¢å¯¼æ¯äººæ°å½å®¶åä¸»åä¾æ³æ²»å½çï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_251",
    "type": "single",
    "answer": 2,
    "options": [
      "åçåäºå¤§",
      "åçåä¸å¤§",
      "åçååå¤§",
      "åçåäºå¤§"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ­£å¼æå»ºç«ç¤¾ä¼ä¸»ä¹å¸åºç»æµä½å¶ç¡®ç«ä¸ºæå½ç»æµä½å¶æ¹é©çç®æ çä¼è®®æ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_252",
    "type": "single",
    "answer": 0,
    "options": [
      "æ¿æ²»",
      "ç»æµ",
      "ç¤¾ä¼",
      "çæ"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå¨åçåï¿½ï¿½å¤§æ¥åä¸­ï¼æ±æ³½æ°æç¤¾ä¼ä¸»ä¹ç©è´¨ææãç²¾ç¥ææåï¼ ï¼ææä¸èµ·ç¡®ç«ä¸ºç¤¾ä¼ä¸»ä¹ç°ä»£åå¨é¢åå±çä¸å¤§åºæ¬ç®æ ï¼ä»èä½¿ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹ççè®ºåå®è·µè¿ä¸æ­¥èµ°åæçåå®åã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_253",
    "type": "single",
    "answer": 3,
    "options": [
      "ä¸æ¶ä¿±è¿",
      "æ§æ¿ä¸ºæ°",
      "åå±çäº§å",
      "åçåè¿æ§"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nè´¯å½»âä¸ä¸ªä»£è¡¨âéè¦ææ³ï¼åæåçé¢å¯¼ï¼æ ¸å¿æ¯åæï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_254",
    "type": "single",
    "answer": 0,
    "options": [
      "ä¸æ¶ä¿±è¿",
      "åçåè¿æ§",
      "æ§æ¿ä¸ºæ°",
      "æ§æ¿å´å½"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nè´¯å½»âä¸ä¸ªä»£è¡¨âéè¦ææ³ï¼å³é®å¨åæï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_255",
    "type": "single",
    "answer": 1,
    "options": [
      "ä¸æ¶ä¿±è¿",
      "æ§æ¿ä¸ºæ°",
      "åçåè¿æ§",
      "åå±çäº§å"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nè´¯å½»âä¸ä¸ªä»£è¡¨âéè¦ææ³ï¼æ¬è´¨å¨äºåæï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_256",
    "type": "single",
    "answer": 2,
    "options": [
      "å®äºæ±æ¯",
      "è§£æ¾ææ³",
      "ä¸æ¶ä¿±è¿",
      "æ±çå¡å®"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ±æ³½æ°å¯¹æ°å½¢å¿ä¸åæå®äºæ±æ¯ææ³è·¯çº¿æåºäºæ°è¦æ±ï¼å¼ºè°é©¬åæä¸»ä¹æéè¦ççè®ºåè´¨æ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_257",
    "type": "single",
    "answer": 0,
    "options": [
      "ä¸æ¶ä¿±è¿çåºæ¬è¦æ±",
      "ä½ç°æ¶ä»£æ§çåºæ¬è¦æ±",
      "ææ¡è§å¾æ§çåºæ¬è¦æ±",
      "å¯äºåé æ§çåºæ¬è¦æ±"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸æ­å¼æé©¬åæä¸»ä¹çè®ºåå±çæ°å¢çï¼å°±è¦æ±åçå¨é¨çè®ºåå·¥ä½ï¼è¦ç´§ï¿½ï¿½ï¿½æ¶ä»£çæ­¥ä¼ï¼ç¨é©¬åæä¸»ä¹çå®½å¹¿ç¼çè§å¯ä¸çï¼è¦æ´å ç¬¦åå®è·µåå±çå®¢è§è§å¾ï¼è¦æ´å å¼æåæ°ãä»¥ä¸è¿âä¸ä¸ªè¦âä½ç°çæ¯å¯¹( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_258",
    "type": "single",
    "answer": 1,
    "options": [
      "ç¤¾ä¼ä¸»ä¹",
      "é©¬åæä¸»ä¹",
      "åçé¢å¯¼",
      "éå°å¹³çè®º"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå¨å½ä»£ä¸­å½ï¼åæä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹çè®ºä½ç³»ï¼å°±æ¯çæ­£åæï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_259",
    "type": "single",
    "answer": 3,
    "options": [
      "è¿è¡äºæ¹é©å¼æ¾",
      "è§£æ¾äºææ³",
      "éæ°ç¡®ç«äºå®äºæ±æ¯çææ³è·¯çº¿",
      "å¼è¾äºä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹éè·¯ï¼å½¢æäºä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹çè®ºä½ç³»"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ¹é©å¼æ¾ä»¥æ¥æä»¬åå¾ä¸åæç»©åè¿æ­¥çæ ¹æ¬åå ï¼å½ç»èµ·æ¥å°±æ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_260",
    "type": "single",
    "answer": 2,
    "options": [
      "æ¯æ³½ä¸ææ³",
      "ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹çè®ºä½ç³»",
      "æ¹é©å¼æ¾",
      "åé¡¹åºæ¬åå"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nåå±ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹ãå®ç°ä¸­åæ°æä¼å¤§å¤å´çå¿ç±ä¹è·¯æ¯åæï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_261",
    "type": "single",
    "answer": 1,
    "options": [
      "çç¾çæ®éæ§åç¹æ®æ§çç»ä¸",
      "ç¬ç«èªä¸»åå¯¹å¤å¼æ¾çç»ä¸",
      "çè®ºä¸å®è·µçå·ä½çåå²çç»ä¸",
      "ææ§è®¤è¯åçæ§è®¤è¯çç»ä¸"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nâèµ°èªå·±çè·¯âï¼å¨åºæ¬ç«åºä¸ä½ç°äºï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_262",
    "type": "single",
    "answer": 1,
    "options": [
      "å®è·µçåè´¨",
      "ä¸æ¶ä¿±è¿çåè´¨",
      "æ¹å¤çåè´¨",
      "æ¶ä»£çåè´¨"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\né©¬åæä¸»ä¹ä¸æ¯ä¸ä¸ªç±æ¢å®ä¸åçæ¦å¿µãç»è®ºåå¬å¼ææçç­éãå°é­ãåµåçä½ç³»ï¼èæ¯ä¸ä¸ªå¯æèªææ´æ°åçé¿æ´»åçãå¼æ¾çãå·æå¼ºå¤§å®è·µåè½çç§å­¦ä½ç³»ãä»¥ä¸è¿æ®µè¡¨è¿°ææ­ç¤ºçæ¯é©¬åæä¸»ä¹ç ( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_263",
    "type": "single",
    "answer": 0,
    "options": [
      "ç°å®ä¾æ®",
      "åå²ä¾æ®",
      "å®è·µåºç¡",
      "æ¶ä»£èæ¯"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nç¤¾ä¼ä¸»ä¹åçº§é¶æ®µåºæ¬å½æåæ°çé¶æ®µæ§ç¹å¾ï¼æ¯ç§å­¦åå±è§å½¢æçï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_264",
    "type": "single",
    "answer": 2,
    "options": [
      "ç°å®ä¾æ®",
      "åå²ä¾æ®",
      "å®è·µåºç¡",
      "æ¶ä»£èæ¯"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nåå¸¦é¢äººæ°æèåç§é£é©ææãåæååå±ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹çæåæ¢ç´¢ï¼æ¯ç§å­¦åå±è§å½¢æçï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_265",
    "type": "single",
    "answer": 3,
    "options": [
      "ç°å®ä¾æ®",
      "åå²ä¾æ®",
      "å®è·µåºç¡",
      "æ¶ä»£èæ¯"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå½ä»ä¸çåå±å¤§å¿ãå½å¤åå±çç»éªæè®­ï¼æ¯ç§å­¦åå±è§å½¢æçï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_266",
    "type": "single",
    "answer": 1,
    "options": [
      "åçååå±ä¸ä¸­å¨ä¼éè¿çãå³äºå»ºç«ç¤¾ä¼ä¸»ä¹å¸åºç»æµä½å¶è¥å¹²é®é¢çå³å®ã",
      "åçåå­å±ä¸ä¸­å¨ä¼éè¿çãï¿½ï¿½ï¿½å±ä¸­å¤®å³äºå®åç¤¾ä¼ä¸»ä¹å¸åºç»æµä½å¶è¥å¹²é®é¢çå³å®ã",
      "åçåå­å±åä¸­å¨ä¼éè¿çãä¸­å±ä¸­å¤®å³äºå å¼ºåçæ§æ¿è½åå»ºè®¾çå³å®ã",
      "åçåå­å±äºä¸­å¨ä¼éè¿çãä¸­å±ä¸­å¤®å³äºå¶å®å½æ°ç»æµåç¤¾ä¼åå±ç¬¬åä¸ä¸ªäºå¹´è®¡åçå»ºè®®ã"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nåçæä»¶ä¸­ç¬¬ä¸æ¬¡æåºç§å­¦åå±è§æ¯å¨ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_267",
    "type": "single",
    "answer": 3,
    "options": [
      "åçååå¤§",
      "åçåäºå¤§",
      "åçåå­å¤§",
      "åçåä¸å¤§"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næåºâä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹çè®ºä½ç³»âè¿ä¸ç§å­¦æ¦å¿µçåä»£ä¼æ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_268",
    "type": "single",
    "answer": 3,
    "options": [
      "åçååå¤§",
      "åçåäºå¤§",
      "åçåå­å¤§",
      "åçåä¸å¤§"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå°ç§å­¦åå±è§ä¸é©¬åæåå®ä¸»ä¹ãæ¯æ³½ä¸ææ³ãéå°å¹³çè®ºåâä¸ä¸ªä»£è¡¨âéè¦ææ³ä¸ååå¥åç« ï¼æä¸ºåçæå¯¼ææ³æ¯å¨ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_269",
    "type": "single",
    "answer": 0,
    "options": [
      "åå±",
      "ä»¥äººä¸ºæ¬",
      "å¨é¢åè°å¯æç»­",
      "ç»ç­¹å¼é¡¾"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nç§å­¦åå±è§çç¬¬ä¸è¦ä¹æ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_270",
    "type": "single",
    "answer": 1,
    "options": [
      "åå±",
      "ä»¥äººä¸ºæ¬",
      "å¨é¢åè°å¯æç»­",
      "ç»ç­¹å¼é¡¾"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nç§å­¦åå±è§çæ ¸å¿æ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_271",
    "type": "single",
    "answer": 1,
    "options": [
      "ç»ç­¹å¼é¡¾",
      "å¨é¢åè°å¯æç»­",
      "åå±",
      "ä»¥äººä¸ºæ¬"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nç§å­¦åå±è§çåºæ¬è¦æ±æ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_272",
    "type": "single",
    "answer": 3,
    "options": [
      "åå±",
      "ä»¥äººä¸ºæ¬",
      "å¨é¢åè°å¯æç»­",
      "ç»ç­¹å¼é¡¾"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nç§å­¦åå±è§çæ ¹æ¬æ¹æ³æ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_273",
    "type": "single",
    "answer": 3,
    "options": [
      "æ¯æ³½ä¸ææ³",
      "éå°å¹³çè®º",
      "âä¸ä¸ªä»£è¡¨âéè¦ææ³",
      "ç§å­¦åå±è§"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå¨å½ä»£ä¸­å½ï¼åæåå±å°±æ¯ç¡¬éççæ¬è´¨è¦æ±å°±æ¯åæï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_274",
    "type": "single",
    "answer": 2,
    "options": [
      "ä»ä¹æ¯ç¤¾ä¼ä¸»ä¹ï¼ææ ·å»ºè®¾ç¤¾ä¼ä¸»ä¹çé®é¢",
      "å»ºè®¾ä»ä¹æ ·çåï¼ææ ·å»ºè®¾åçé®é¢",
      "å®ç°ä»ä¹æ ·çåå±ï¼ææ ·åå±çé®é¢",
      "ä»ä¹æ¯ç¤¾ä¼åè°ï¼ææ ·æå»ºç¤¾ä¼ä¸»ä¹åè°ç¤¾ä¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nç§å­¦åå±è§åé æ§å°åç­äºï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_275",
    "type": "single",
    "answer": 2,
    "options": [
      "ä¸­å½åçé©¬åæä¸»ä¹çè®ºä½ç³»",
      "é©¬åæä¸»ä¹ä¸­å½åççè®ºä½ç³»",
      "ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹çè®ºä½ç³»",
      "å»ºè®¾æä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹çè®ºä½ç³»"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nåçåä¸å¤§æåæ¬éå°å¹³çè®ºãâä¸ä¸ªä»£è¡¨âéè¦ææ³ä»¥åç§å­¦åå±è§ç­éå¤§æç¥ææ³å¨åçç§å­¦çè®ºä½ç³»æ¦æ¬ä¸ºï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_276",
    "type": "single",
    "answer": 0,
    "options": [
      "æ ¸å¿",
      "å®è´¨",
      "åºæ¬è¦æ±",
      "æ ¹æ¬æ¹æ³"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næäººæ°çå©çä½ä¸ºä¸åå·¥ä½çåºåç¹åè½èç¹ï¼ä¸æ­æ»¡è¶³äººä»¬çå¤æ¹é¢éæ±åä¿è¿äººçå¨é¢åå±ãä»¥ä¸è¿æ®µè¡¨è¿°æ­ç¤ºäºç§å­¦åå±è§ç( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_277",
    "type": "single",
    "answer": 0,
    "options": [
      "ç§å­¦åå±è§",
      "åçåºæ¬çè®º",
      "åçåºæ¬è·¯çº¿",
      "åçåºæ¬çº²é¢"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå¨ï¿½ï¿½ï¿½çåå±é¶æ®µç»§ç»­å¨é¢å»ºè®¾å°åº·ç¤¾ä¼ãåå±ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹ï¼å¿é¡»åæä»¥éå°å¹³çè®ºåâä¸ä¸ªä»£è¡¨âéè¦ææ³ä¸ºæå¯¼ï¼æ·±å¥è´¯å½»è½å®ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_278",
    "type": "single",
    "answer": 1,
    "options": [
      "åçåå­å¤§",
      "åçåä¸å¤§",
      "åçåä¸å±ä¸ä¸­å¨ä¼",
      "åçååå¤§"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nè¡é¦æ¶å¯¹ç§å­¦åå±è§çæ¶ä»£èæ¯ãç§å­¦åæ¶µãç²¾ç¥å®è´¨åæ ¹æ¬è¦æ±è¿è¡äºæ·±å»è®ºè¿°çä¼è®®æ¯( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_279",
    "type": "single",
    "answer": 0,
    "options": [
      "ç¤¾ä¼ä¸»ä¹åçº§é¶æ®µçåºæ¬å½æ",
      "æå½å¨æ°ä¸çºªæ°é¶æ®µçé¶æ®µæ§ç¹å¾",
      "å½ä»£ä¸ççåå±å®è·µååå±çå¿µ",
      "åçå»ºè®¾é¢ä¸´çæ°å½¢å¿æ°ä»»å¡"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nç§å­¦åå±è§æåºçæ ¹æ¬ä¾æ®æ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_280",
    "type": "single",
    "answer": 2,
    "options": [
      "ç¤¾ä¼ä¸»ä¹åçº§é¶æ®µçåºæ¬å½æ",
      "æå½å¨æ°ä¸çºªæ°é¶æ®µçé¶æ®µæ§ç¹å¾",
      "å½ä»£ä¸ççåå±å®è·µååå±çå¿µ",
      "åçå»ºè®¾é¢ä¸´çæ°å½¢å¿æ°ä»»å¡"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nç§å­¦åå±è§æåºçéè¦åé´æ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_281",
    "type": "single",
    "answer": 3,
    "options": [
      "å®äºæ±æ¯çç²¾ç¥",
      "è§£æ¾ææ³çç²¾ç¥",
      "ä¸æ¶ä¿±è¿çç²¾ç¥",
      "æ±çå¡å®çç²¾ç¥"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nè¡é¦æ¶è¿ä¸æ­¥æ·±åäºå¯¹å®äºæ±æ¯ææ³è·¯çº¿çè®¤è¯ï¼æåºå¿é¡»å¤§åå¼æ¬ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_282",
    "type": "single",
    "answer": 2,
    "options": [
      "æç¤¾ä¼å»ºè®¾æå¨æ´å çªåºå°ä½ççå¿µ",
      "å å¼ºæ§æ¿åå»ºè®¾ççå¿µ",
      "åçä»¥äººä¸ºæ¬çæ§æ¿çå¿µ",
      "å¨é¢åè°å¯æç»­åå±çå¿µ"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\n2018å¹´çµå½±ãçº¢æµ·è¡å¨ãåå°è§ä¼çç­ç±ï¼è·å¾é«è¾¾36äº¿çç¥¨æ¿ï¼å¶æäºæèæ¯ä»¥2015å¹´çä¹é¨æ¤ä¾¨è¡å¨ä¸ºèæ¯è¿è¡æ¹ç¼çãä¹é¨ç´§å¼ å±å¿èª2014å¹´ä»¥æ¥æç»­åçº§ï¼2015å¹´3æ30æ¥ï¼ä¸­å½æµ·åæ¤èªç¼éæ¤å«è°æ½åè°è½½ç449åä¸­å½å¬æ°å¹³å®æ¤ç¦»ä¹é¨è¥¿é¨è·å°è¾¾æ¸¯ã2015å¹´4æ2æ¥ï¼ä¸­å½æµ·åä¸´æ²è°æ­è½½å·´åºæ¯å¦ç­10ä¸ªå½å®¶å¨ä¹é¨ç225åä¾¨æ°èªä¹é¨äºä¸æ¸¯å¹³å®é©¶æµåå¸æãè·å¾äºå½åå¬æ°åå½éç¤¾ä¼çä¸è´å¥½è¯ï¼è¿ä½ç°äºï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_283",
    "type": "single",
    "answer": 1,
    "options": [
      "åçé¢å¯¼",
      "äººæ°å½å®¶åä¸»",
      "ä¾æ³æ²»å½",
      "æ¿æ²»ä½å¶æ¹é©"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nç§å­¦åå±è§å¼ºè°ï¼ç¤¾ä¼ä¸»ä¹æ°ä¸»æ¿æ²»çæ¬è´¨åæ ¸å¿æ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_284",
    "type": "single",
    "answer": 0,
    "options": [
      "ç¤¾ä¼ä¸»ä¹æ ¸å¿ä»·å¼ä½ç³»",
      "ç¤¾ä¼ä¸»ä¹æ ¸å¿ä»·å¼è§",
      "ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹éè·¯",
      "ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹çè®º"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nè¢«ç§°ä¸ºæ¯å´å½ä¹é­ï¼å³å®ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹åå±æ¹åçæ¯ï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_285",
    "type": "single",
    "answer": 3,
    "options": [
      "ç»æµåè¾¾",
      "æ¿æ²»æ°ä¸»",
      "æåç¹è£",
      "ç¤¾ä¼åè°"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nè¡é¦æ¶æç¡®æåºï¼âï¼ ï¼æ¯ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹çæ¬è´¨å±æ§ãâè¿ä¸ªéå¤§å¤æ­ï¼æ·±å»æ»ç»äºå½åå¤ç¤¾ä¼ä¸»ä¹å»ºè®¾çåå²ç»éªï¼æ·±åäºå¯¹ç¤¾ä¼ä¸»ä¹æ¬è´¨çè®¤è¯ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_286",
    "type": "single",
    "answer": 1,
    "options": [
      "åè¿æ§å»ºè®¾",
      "æ§æ¿è½åå»ºè®¾",
      "çº¯æ´æ§å»ºè®¾",
      "åèå¡å»å»ºè®¾"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nç§å­¦åå±è§å¼ºè°åæ§æ¿åçä¸é¡¹æ ¹æ¬å»ºè®¾æ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_287",
    "type": "single",
    "answer": 0,
    "options": [
      "åè¿æ§",
      "çº¯æ´æ§",
      "åæ°æ§",
      "æ°ä¸»æ§"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\né©¬åæä¸»ä¹æ¿åèªèº«å»ºè®¾çæ ¹æ¬ä»»å¡åæ°¸æè¯¾é¢æ¯ä¿æååå±åçï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_288",
    "type": "single",
    "answer": 3,
    "options": [
      "å®äºæ±æ¯",
      "è§£æ¾ææ³ãå®äºæ±æ¯",
      "è§£æ¾ææ³ãå®äºæ±æ¯ãä¸æ¶ä¿±è¿",
      "è§£æ¾ææ³ãå®äºæ±æ¯ãä¸æ¶ä¿±è¿ãæ±çå¡å®"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nç§å­¦åå±è§æé²æçç²¾ç¥å®è´¨æ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_289",
    "type": "single",
    "answer": 1,
    "options": [
      "æ¯æ³½ä¸",
      "éå°å¹³",
      "æ±æ³½æ°",
      "è¡é¦æ¶"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå¨ä¸­å½å±äº§ååå²ä¸ï¼æåºâåçå®äºæ±æ¯çææ³è·¯çº¿âå½é¢ï¼åæ¶åè¯å®æ¯æ³½ä¸æ¯å®äºæ±æ¯ææ³è·¯çº¿çç¡®ç«èï¼èä¸è¿å¯¹åçææ³è·¯çº¿ä½åºå®æ´è¡¨è¿°çé¢å¯¼äººæ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_290",
    "type": "single",
    "answer": 2,
    "options": [
      "ä¸åä»å®éåºå",
      "çè®ºèç³»å®é",
      "å®äºæ±æ¯",
      "å¨å®è·µä¸­æ£éªççååå±çç"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸­å½å±äº§åææ³è·¯çº¿çå®è´¨åæ ¸å¿æ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_291",
    "type": "single",
    "answer": 3,
    "options": [
      "æ¿æ²»ææ",
      "ç»æµææ",
      "ç¤¾ä¼ææ",
      "çæææ"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nè¡é¦ï¿½ï¿½æåºï¼âèªç¶çæ¯åæ¬äººç±»å¨åçä¸åçç©çæç¯®ï¼æ¯äººç±»èµä»¥çå­ååå±çåºæ¬æ¡ä»¶ãä¿æ¤èªç¶å°±æ¯ä¿æ¤äººç±»ï¼å»ºè®¾èªç¶å°±æ¯é ç¦äººç±»ãâæä»¬åæåºå»ºè®¾ï¼ ï¼çéå¤§æç¥é¨ç½²ï¼å¹¶å°å¶çº³å¥ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹äºä¸äºä½ä¸ä½æ»ä½å¸å±ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_292",
    "type": "single",
    "answer": 1,
    "options": [
      "æ¯æ³½ä¸ææ³",
      "éå°å¹³çè®º",
      "âä¸ä¸ªä»£è¡¨âéè¦ææ³",
      "ç§å­¦åå±è§"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹çè®ºä½ç³»çå¼ç¯ä¹ä½æ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_293",
    "type": "single",
    "answer": 0,
    "options": [
      "ä¸æ­åå±çå¼æ¾ççè®ºä½ç³»",
      "è¿ä»ä¸ºæ­¢è¾¾å°é¡¶ç¹ççè®ºä½ç³»",
      "è¾¾å°æçå®åççè®ºä½ç³»",
      "å°é­ççè®ºä½ç³»"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹çè®ºä½ç³»æ¯( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_294",
    "type": "single",
    "answer": 1,
    "options": [
      "åçä½é£å»ºè®¾",
      "åçææ³çè®ºå»ºè®¾",
      "åçç»ç»å»ºè®¾",
      "åçæ§æ¿è½åå»ºè®¾"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸­å½å±äº§åæç«90å¹´æ¥ï¼åç«å½å®èº«åè½å¤ä¸æ¶ä¿±è¿çæ ¹æ¬æ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_295",
    "type": "single",
    "answer": 0,
    "options": [
      "å¨åæä¸­åå±ãå¨åå±ä¸­åæ",
      "ä¸æ­ä¿®æ­£é©¬åæä¸»ä¹",
      "å¯¹çåæï¼éè¯¯çå¦å®",
      "å¨çè¯å®"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå¯¹å¾é©¬åæä¸»ä¹å¯ä¸æ­£ç¡®çæåº¦æ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_296",
    "type": "single",
    "answer": 3,
    "options": [
      "æ¯æ³½ä¸ææ³",
      "éå°å¹³çè®º",
      "âä¸ä¸ªä»£è¡¨âéè¦ææ³",
      "ç§å­¦åå±è§"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå¯¹åçä¸ä»£ä¸­å¤®é¢å¯¼éä½å³äºåå±çéè¦ææ³çç»§æ¿ååå±ï¼è¢«ç§°ä¸ºæ¯å¯¹é©¬åæä¸»ä¹å³äºåå±çä¸çè§åæ¹æ³è®ºéä¸­ä½ç°çæ¯(  )ãâ",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_297",
    "type": "single",
    "answer": 0,
    "options": [
      "2004å¹´3æï¼è¡é¦æ¶å¨ä¸­å¤®äººå£èµæºç¯å¢åº§è°ä¼ä¸çéè¦è®²è¯",
      "2004å¹´5æï¼è¡é¦æ¶å¨æ±èèå¯å·¥ä½æ¶",
      "2004å¹´9æï¼åçåå­å±åä¸­å¨ä¼",
      "2004å¹´10æï¼åçåå­å±äºä¸­å¨ä¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ å¿çç§å­¦åå±è§å½¢æçæ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_298",
    "type": "single",
    "answer": 0,
    "options": [
      "ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹éï¿½ï¿½",
      "ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹çè®ºä½ç³»",
      "ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹ä¼å¤§æå¸",
      "ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹å¶åº¦"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå®ç°ç¤¾ä¼ä¸»ä¹ç°ä»£åçå¿ç±ä¹è·¯æ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_299",
    "type": "single",
    "answer": 3,
    "options": [
      "å¼æè¿å",
      "å®äºæ±æ¯",
      "ä¸æ¶ä¿±è¿",
      "æ¹é©å¼æ¾"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå¨è¿ä»£ä»¥æ¥ä¸­å½ç¤¾ä¼åå±è¿æ­¥çå£®éè¿ç¨ä¸­ï¼åå²åäººæ°éæ©äºä¸­å½å±äº§åï¼éæ©äºé©¬åæä¸»ä¹ï¼éæ©äºç¤¾ä¼ä¸»ä¹éè·¯ï¼éæ©äºï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_300",
    "type": "single",
    "answer": 2,
    "options": [
      "é©¬åæä¸»ä¹çç«åºãè§ç¹åæ¹æ³æ¯å¯ä»¥ä¸æ­ååç",
      "é©¬åæä¸»ä¹æ²¡æéè¦å§ç»åæçåå",
      "é©¬åæä¸»ä¹æ¯åå®è·µå¼æ¾çä¸æ­åå±çç§å­¦",
      "é©¬åæä¸»ä¹åªè½è®©çè®ºéçå®è·µèåå±ï¼èä¸è½åè¿æ¥æ¨å¨å®è·µçåå±"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\né©¬åæä¸»ä¹ä¸æ¶ä¿±è¿ççè®ºåæ ¼è¡¨æï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_301",
    "type": "single",
    "answer": 3,
    "options": [
      "å®äºæ±æ¯",
      "ç¾¤ä¼è·¯çº¿",
      "èªåæ´ç",
      "è§£æ¾ææ³"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nåä¸å¤§æ¥åæåºï¼åå±ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹çä¸å¤§æ³å®æ¯ï¼ ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_302",
    "type": "single",
    "answer": 3,
    "options": [
      "è§£å³æ¿æ²»è·¯çº¿é®é¢",
      "è§£å³åäºè·¯çº¿é®é¢",
      "è§£å³ç»ç»è·¯çº¿é®é¢",
      "è§£å³ææ³è·¯çº¿é®é¢"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸­å½å±äº§åç¡®å®æ­£ç¡®çæ¿æ²»è·¯çº¿ä»¥ååé¡¹ï¿½ï¿½ï¿½éæ¿ç­çåæååºç¡æ¯( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_303",
    "type": "single",
    "answer": 1,
    "options": [
      "ä¸å®å¨ä¸è´",
      "å®å¨ä¸è´",
      "é¨åä¸è´",
      "é¨åä¸ä¸è´"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\né©¬åæä¸»ä¹ä¸­å½åçè®ºææçç²¾é«ååçææ³è·¯çº¿çæ ¸å¿æ¯( )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_304",
    "type": "single",
    "answer": 0,
    "options": [
      "è®¡åä¸å¸åºä¹é´çå³ç³»",
      "æ¿æ²»ä¸ç»æµä¹é´çå³ç³»",
      "ç»æµä¸æåä¹é´çå³ç³»",
      "å¬æå¶ä¸ç§æå¶ä¹é´çå³ç³»"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ¹é©å¼æ¾å¼å§åçä¸ä¸ªå¾é¿æ¶æåï¼æå½ç»æµä½å¶æ¹é©çæ ¸å¿é®é¢æ¯å¦ä½æ­£ç¡®è®¤è¯åå¤çï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_305",
    "type": "single",
    "answer": 2,
    "options": [
      "æ¯æ³½ä¸ï¼",
      "åå½éï¼",
      "éå°å¹³ï¼",
      "å¨æ©æ¥ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nçåæ¹å¤âä¸¤ä¸ªå¡æ¯âçæ¯ï¼       ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_306",
    "type": "single",
    "answer": 0,
    "options": [
      "âä¸¤ä¸ªå¡æ¯âï¼",
      "âä»¥é¶çº§æäºä¸ºçº²âï¼",
      "èèæ¨¡å¼ï¼",
      "åæèäº§æ¿åè´£ä»»å¶ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\n1978å¹´ï¼éå°å¹³æ¯æåé¢å¯¼çâå®è·µæ¯æ£éªçççå¯ä¸æ åâçå¤§è®¨è®ºï¼å·ä½éå¯¹çé®é¢æ¯ï¼       ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_307",
    "type": "single",
    "answer": 2,
    "options": [
      "è§£æ¾ææ³ï¼å®äºæ±æ¯ï¼",
      "ç¤¾ä¼ä¸»ä¹åçº§é¶æ®µçè®ºï¼",
      "ä»ä¹æ¯ç¤¾ä¼ä¸»ä¹åææ ·å»ºè®¾ç¤¾ä¼ä¸»ä¹ï¼",
      "ç§ææ¯ç¬¬ä¸çäº§åï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\néå°å¹³çè®ºçé¦è¦çåºæ¬çè®ºé®é¢æ¯ï¼       ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_308",
    "type": "single",
    "answer": 0,
    "options": [
      "è§£æ¾ææ³ï¼å®äºæ±æ¯ï¼",
      "è§£æ¾çäº§åï¼åå±çäº§åï¼",
      "åæåé¡¹åºæ¬ååï¼",
      "âä¸ä¸ªæå©äºâæ åï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\néå°å¹³çè®ºçç²¾é«æ¯ï¼       ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_309",
    "type": "single",
    "answer": 0,
    "options": [
      "é©¬åæåå®ä¸»ä¹ãæ¯æ³½ä¸ææ³ï¼",
      "æå½åå¶ä»ç¤¾ä¼ä¸»ä¹å»ºè®¾çç»éªæ»ç»ï¼",
      "æå½æ¹é©å¼æ¾åç°ä»£åå»ºè®¾çç»éªæ»ç»ï¼",
      "æ¶ä»£ä¸»é¢çè½¬æ¢åæ°ææ¯é©å½çå´èµ·ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\néå°å¹³çè®ºå½¢æååå±ççè®ºåºç¡æ¯ï¼       ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_310",
    "type": "single",
    "answer": 2,
    "options": [
      "åé¡¹åºæ¬ååï¼",
      "æ¹é©å¼æ¾ï¼",
      "ä»¥ç»æµå»ºè®¾ä¸ºä¸­å¿ï¼",
      "å®å®å¢ç»çç¤¾ä¼æ¿æ²»å±é¢ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nåæåå¨ç¤¾ä¼ä¸»ä¹åçº§é¶æ®µåºæ¬è·¯çº¿ä¸å¨æï¼å³é®æ¯åæï¼       ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_311",
    "type": "single",
    "answer": 2,
    "options": [
      "åä¸å±ä¸ä¸­å¨ä¼ï¼",
      "åäºå¤§ï¼",
      "åä¸å¤§ï¼",
      "ååå¤§ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nç¤¾ä¼ä¸»ä¹åçº§é¶æ®µæ¯å¨åçï¼       ï¼ä¸æåºçã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_312",
    "type": "single",
    "answer": 2,
    "options": [
      "ç»æµä½å¶æ¹é©ï¼",
      "æ¿æ²»ä½å¶æ¹é©ï¼",
      "ç»æµå»ºè®¾ï¼",
      "å¯¹å¤å¼æ¾ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nç¤¾ä¼ä¸»ä¹åçº§é¶æ®µä¸»è¦çç¾å³å®çä¸­å¿ä»»å¡æ¯ï¼       ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_313",
    "type": "single",
    "answer": 0,
    "options": [
      "å±åå¯è£ï¼",
      "åå±ç¤¾ä¼çäº§åï¼",
      "æ¹é©å¼æ¾ï¼",
      "æ¨è¿ç»æµåæ¿æ²»ä½å¶æ¹é©ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nç¤¾ä¼ä¸»ä¹çæ ¹æ¬ç®æ æ¯ï¼       ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_314",
    "type": "single",
    "answer": 3,
    "options": [
      "ç¤¾ä¼ä¸»ä¹å¬æå¶åæå³åéï¼",
      "äººæ°å½å®¶ä½ä¸»ï¼æä¸ºç¤¾ä¼çä¸»äººï¼",
      "é«åº¦çç¤¾ä¼ç²¾ç¥ææåäººçå¨é¢è§£æ¾ï¼",
      "è§£æ¾ååå±çäº§åï¼æ¶ç­å¥åï¼æ¶é¤ä¸¤æååï¼æç»è¾¾å°å±åå¯è£ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nç¤¾ä¼ä¸»ä¹çæ¬è´¨æ¯ï¼       ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_315",
    "type": "single",
    "answer": 1,
    "options": [
      "åæåé¡¹åºæ¬ååï¼åææ¹é©å¼æ¾ï¼",
      "åæå¬æå¶ä¸ºä¸»ä½ï¼å®ç°å±åå¯è£ï¼",
      "ä¸æ­åå±ç¤¾ä¼çäº§ï¼å¢å ç¤¾ä¼è´¢å¯ï¼",
      "å®è¡æå³åéï¼å¢å¼ºç»¼åå½åï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\néå°å¹³æåºï¼å¨æ¹é©ä¸­ç¤¾ä¼ä¸»ä¹å¿é¡»å§ç»åæçä¸¤æ¡æ ¹æ¬ååæ¯ï¼       ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_316",
    "type": "single",
    "answer": 0,
    "options": [
      "é èªå·±çåå±ï¼",
      "åæåé¡¹åºæ¬ååï¼",
      "åææ¹é©å¼æ¾ï¼",
      "åæåçåºæ¬è·¯çº¿ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸­å½è§£å³ææé®é¢çå³é®æ¯ï¼       ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_317",
    "type": "single",
    "answer": 0,
    "options": [
      "æ¹é©å¼æ¾åå²æ°æ¶æï¼",
      "è§£æ¾ææ³æ°æ¶æï¼",
      "å»ºè®¾åè°ç¤¾ä¼æ°æ¶æï¼",
      "æ±çå¡å®åå²æ°æ¶æï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\n1978å¹´ï¼ä¸­å½å±äº§åå¬å¼äºå·æéå¤§åå²æä¹çåä¸å±ä¸ä¸­å¨ä¼ï¼å¼å¯äºï¼       ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_318",
    "type": "single",
    "answer": 1,
    "options": [
      "åæ­¥éª¤ãå¤å±æ¬¡ãéæ­¥æ¨è¿ï¼",
      "å¨æ¹ä½ãå¤å±æ¬¡ãå®½é¢åï¼",
      "å¤å±æ¬¡ãå¤æ¸ éãå¨æ¹ä½ï¼",
      "æ²¿æµ·ãå¨è¾¹ãåå°ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næå½å®è¡å¯¹å¤å¼æ¾æ ¼å±æåç°çç¹ç¹æ¯ï¼       ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_319",
    "type": "single",
    "answer": 1,
    "options": [
      "åæç¨ç§å­¦çè®ºæè²å¨åï¼æè²å¹²é¨åç¾¤ä¼ï¼",
      "ä¸ææç©è´¨ææï¼ä¸ææç²¾ç¥ææï¼âä¸¤ææï¼ä¸¤æé½è¦ç¡¬âï¼",
      "åæä¸ºäººæ°æå¡ï¼ä¸ºç¤¾ä¼ä¸»ä¹æå¡çæ¹åï¼",
      "åæç¾è±é½æ¾ãç¾å®¶äºé¸£çæ¹éï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nåä¸å±ä¸ä¸­å¨ä¼ä»¥åï¼åå¯¹æåå»ºè®¾æäºæ°çè®¤è¯ï¼æåºï¼       ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_320",
    "type": "single",
    "answer": 2,
    "options": [
      "åæè§£æ¾ææ³ãå®äºæ±æ¯ï¼",
      "å¯¹ç¤¾ä¼ä¸»ä¹æ¬è´¨ççè§£ï¼",
      "ç¤¾ä¼ä¸»ä¹åçº§é¶æ®µçå½æï¼",
      "âä¸ä¸ªæå©äºâæ åï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nååå½å®¶å¶å®è·¯çº¿æ¹éæ¿ç­çåºåç¹åç«è¶³ç¹æ¯",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_321",
    "type": "multiple",
    "answer": [
      0,
      1,
      3
    ],
    "options": [
      "å¯¹é©¬åæä¸»ä¹çåæ°ä¸åå±ï¼",
      "å¶å®è·¯çº¿æ¹éåæ¿ç­çä¾æ®ï¼",
      "ç¤¾ä¼ä¸»ä¹å½å®¶å±åçç²¾ç¥è´¢å¯ï¼",
      "å¤ºåç°ä»£åå»ºè®¾èå©çæ­¦å¨ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\nç¤¾ä¼ä¸»ä¹åçº§é¶æ®µæ¯ï¼       ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_322",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "options": [
      "çäº§åæ»ä½æ°´å¹³è½åï¼",
      "ååç»æµä¸åè¾¾ï¼",
      "ç¤¾ä¼ä¸»ä¹ç»æµå¶åº¦ä¸å®åï¼",
      "ç¤¾ä¼ä¸»ä¹æ°ä¸»æ¿æ²»åç²¾ç¥ææä¸å¥å¨ãä¸æçï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\nç¤¾ä¼ä¸»ä¹åçº§é¶æ®µçåºæ¬ç¹å¾æ¯ï¼       ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_323",
    "type": "multiple",
    "answer": [
      0,
      3
    ],
    "options": [
      "ä»¥ç¤¾ä¼ä¸»ä¹å¬æå¶ä¸ºä¸»ä½ï¼",
      "ä»¥æå³åéä¸ºä¸»ä½ï¼",
      "è®¡åè°èåå¸åºè°èç¸ç»åï¼",
      "å±åå¯è£ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\néå°å¹³åå¿è¯´ï¼âå¨æ¹é©ä¸­ï¼æä»¬å§ç»åæä¸¤æ¡æ ¹æ¬ååâï¼       ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_324",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "options": [
      "ä¸é¡¹é¿æçåºæ¬å½ç­ï¼",
      "å¨æ¹ä½çå¯¹å¤å¼æ¾ï¼",
      "å¤å±æ¬¡çå¯¹å¤å¼æ¾ï¼",
      "å®½é¢åçå¯¹å¤å¼æ¾ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\næå½çå¯¹å¤å¼æ¾æ¯ï¼    ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_325",
    "type": "multiple",
    "answer": [
      0,
      2,
      3
    ],
    "options": [
      "åå±ç¤¾ä¼ä¸»ä¹ç¤¾ä¼çäº§åï¼",
      "ç¤¾ä¼ä¸»ä¹ç²¾ç¥ææå»ºè®¾ï¼",
      "å¢å¼ºç¤¾ä¼ä¸»ä¹å½å®¶çç»¼åå½åï¼",
      "æé«äººæ°ççæ´»æ°´å¹³ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\nâä¸ä¸ªæå©äºâæ åï¼æ¯ææ¯å¦æå©äºï¼    ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_326",
    "type": "multiple",
    "answer": [
      1,
      2
    ],
    "options": [
      "ç¾ï¿½ï¿½ï¿½æå¤ï¼",
      "ç¾è±é½æ¾ï¼",
      "ç¾å®¶äºé¸£ï¼",
      "æµ·çº³ç¾å·ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\nâåç¾âæ¹éæ¯æï¼    ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_327",
    "type": "single",
    "answer": 1,
    "options": [
      "æ­£ç¡®",
      "éè¯¯"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æºéåæææä¸ºæ¶ä»£ä¸»é¢æ¯éå°å¹³çè®ºå½¢æçæ¶ä»£èæ¯ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_328",
    "type": "single",
    "answer": 0,
    "options": [
      "æ­£ç¡®",
      "éè¯¯"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "ç¤¾ä¼ä¸»ä¹åçº§é¶æ®µæ¯æå½çæå¤§å®éã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_329",
    "type": "single",
    "answer": 1,
    "options": [
      "æ­£ç¡®",
      "éè¯¯"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "ç¤¾ä¼ä¸»ä¹åçº§é¶æ®µæ¯ææçç¤¾ä¼ä¸»ä¹å½å®¶é½è¦ç»è¿çåå²é¶æ®µã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_330",
    "type": "single",
    "answer": 0,
    "options": [
      "æ­£ç¡®",
      "éè¯¯"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "1987å¹´ï¼éå°å¹³ç¬¬ä¸æ¬¡æåºäºåâä¸æ­¥èµ°âåºæ¬å®ç°ç°ä»£åçæç¥ç®æ ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_331",
    "type": "single",
    "answer": 1,
    "options": [
      "æ­£ç¡®",
      "éè¯¯"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "åæç¤¾ä¼ä¸»ä¹å¶åº¦ä¸å¸åºç»æµçç»åï¼ä¸æ¯ç¤¾ä¼ä¸»ä¹å¸åºç»æµçç¹ç¹æå¨ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_332",
    "type": "single",
    "answer": 0,
    "options": [
      "æ­£ç¡®",
      "éè¯¯"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "éå°å¹³çè®ºæ¯é©¬åæåå®ä¸»ä¹ãæ¯æ³½ä¸ææ³çç»§æ¿ååå±ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_333",
    "type": "single",
    "answer": 2,
    "options": [
      "äººå£å¤ï¼åºå­èï¼",
      "åä¹¡ååºåãç»æµç¤¾ä¼åå±ä¸å¹³è¡¡ï¼",
      "ç¤¾ä¼ä¸»ä¹åçº§é¶æ®µï¼",
      "ç§ææµªæ½®ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nç§å­¦åå±è§ï¼æ¯ç«è¶³ï¼  ï¼çåºæ¬å½æï¼æ»ç»æå½åå±å®è·µï¼åé´å½å¤åå±ç»éªï¼éåºæ°çåå±è¦æ±æåºæ¥çã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_334",
    "type": "single",
    "answer": 1,
    "options": [
      "è¡å¨æåï¼",
      "éå¤§æç¥ææ³ï¼",
      "éå¤§æå¯¼æ¹éï¼",
      "éå¤§é¨ç½²ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nç§å­¦åå±è§æ¯åå±ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹å¿é¡»åæåè´¯å½»çï¼  ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_335",
    "type": "single",
    "answer": 0,
    "options": [
      "äººæ°ç¾¤ä¼",
      "é¢å¯¼å¹²é¨",
      "ç¥è¯åå­",
      "è´«å°äººå£"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nï¼    ï¼æ¯ç§å­¦åå±çåçèï¼ä¹ï¿½ï¿½ï¿½ç§å­¦åå±çå®è·µèåæ¨å¨èã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_336",
    "type": "single",
    "answer": 0,
    "options": [
      "å®ç°äººæ°ç¾¤ä¼çæ ¹æ¬å©çï¼",
      "å»ºè®¾ç¤¾ä¼ä¸»ä¹åè°ç¤¾ä¼ï¼",
      "å®è·µâä¸ä¸ªä»£è¡¨âéè¦ææ³ï¼",
      "çæææï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nè½å®ç§å­¦åå±è§ï¼å°±å¿é¡»æ ç«æ­£ç¡®çæ¿ç»©è§ï¼æä»¬è¦ç¨å¨é¢çãå®è·µçãç¾¤ä¼çè§ç¹çå¾æ¿ç»©ï¼è¿½æ±æ¿ç»©çæ ¹æ¬åºåç¹åå½å®¿æ¯ï¼   ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_337",
    "type": "single",
    "answer": 2,
    "options": [
      "æ¹é©å¼æ¾ï¼",
      "ç»ç»å»ºè®¾ï¼",
      "åçå»ºè®¾ï¼",
      "é«ç­æè²ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ·±å¥è´¯å½»è½å®ç§å­¦åå±è§ï¼è¦æ±æä»¬åå®å å¼ºåæ¹è¿ï¼   ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_338",
    "type": "single",
    "answer": 0,
    "options": [
      "ç»æµå»ºè®¾ï¼",
      "æ¿æ²»å»ºè®¾ï¼",
      "äººçå¨é¢åå±ï¼",
      "ç¯å¢è¯å¥½ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nç§å­¦åå±è§æè¦æ±çå¨é¢åå±ï¼ä»¥ï¼  ï¼ä¸ºä¸­å¿ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_339",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "options": [
      "å½ååå±åé¿è¿åå±çå³ç³»ï¼",
      "æ¿åºåå¸åºçå³ç³»ï¼",
      "å±é¨å©çåå¨å±å©ççå³ç³»ï¼",
      "åå±çå¹³è¡¡åä¸å¹³è¡¡çå³ç³»ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\nå¨ç»æµå»ºè®¾ä¸­è´¯å½»è½å®ç§å­¦åå±è§ï¼éè¦æ­£ç¡®è®¤è¯åå¤ççéå¤§å³ç³»åæ¬ï¼ã ãï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_340",
    "type": "multiple",
    "answer": [
      0,
      1,
      2
    ],
    "options": [
      "å°éäººæ°ä¸»ä½å°ä½ï¼",
      "åæ¥äººæ°é¦åç²¾ç¥ï¼",
      "ä¿éäººæ°åé¡¹æçï¼",
      "ä¿è¿äººçèªç±åå±ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\nåæä»¥äººä¸ºæ¬ï¼å°±æ¯è¦ï¼   ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_341",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "options": [
      "å§ç»åæâä¸ä¸ªä¸­å¿ãä¸¤ä¸ªåºæ¬ç¹âçåºæ¬è·¯çº¿ï¼",
      "ç§¯ææå»ºç¤¾ä¼ä¸»ä¹åè°ç¤¾ä¼ï¼",
      "ç»§ç»­æ·±åæ¹é©å¼æ¾ï¼",
      "åå®å å¼ºåæ¹è¿åçå»ºè®¾ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\næ·±å¥è´¯å½»è½å®ç§å­¦åå±è§ï¼è¦æ±æä»¬ï¼   ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_342",
    "type": "single",
    "answer": 1,
    "options": [
      "æ­£ç¡®",
      "éè¯¯"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "ç»æµåå±æ¯ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹çæ¬è´¨å±æ§ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_343",
    "type": "single",
    "answer": 0,
    "options": [
      "æ­£ç¡®",
      "éè¯¯"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "ç§å­¦åå±è§æ¯æï¿½ï¿½ï¿½åå±çä¸çè§åæ¹æ³è®ºçéä¸­ä½ç°ï¼æ¯è¿ç¨é©¬åæä¸»ä¹çç«åºãè§ç¹ãæ¹æ³è®¤è¯ååæç¤¾ä¼ä¸»ä¹ç°ä»£åå»ºè®¾çä¸°å¯å®è·µã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_344",
    "type": "single",
    "answer": 0,
    "options": [
      "æ­£ç¡®",
      "éè¯¯"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "ç§å­¦åå±è§ç¬¬ä¸è¦ä¹æ¯åå±ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_345",
    "type": "single",
    "answer": 0,
    "options": [
      "åçå¨é¨çè®ºåå·¥ä½è¦ä½ç°æ¶ä»£æ§ï¼ææ¡è§å¾æ§ï¼å¯äºåé æ§ï¼",
      "è¦çå°æå½ç¤¾ä¼ä¸»ä¹å»ºè®¾åççéå¤§ååï¼",
      "è¦çå°å¹¿å¤§ååå¹²é¨åäººæ°ç¾¤ä¼å·¥ä½ãçæ´»æ¡ä»¶åç¤¾ä¼ç¯å¢åççéå¤§ååï¼",
      "è¦èªè§å°æææ³è®¤è¯ä»é£äºä¸åæ¶å®çè§å¿µãåæ³åä½å¶çæç¼ä¸­è§£æ¾åºæ¥ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nè´¯å½»âä¸ä¸ªä»£è¡¨âéè¦ææ³ï¼å¿é¡»ä½¿å¨åå§ç»ä¿æä¸æ¶ä¿±è¿çç²¾ç¥ç¶æï¼ä¸æ¶ä¿±è¿å°±æ¯( )",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_346",
    "type": "single",
    "answer": 0,
    "options": [
      "ç§å­¦å¤æ­åçåå²æ¹ä½çåºç¡ä¸æåºæ¥çï¼",
      "åå±ç¤¾ä¼ä¸»ä¹ç»æµæ¡ä»¶ä¸æåºæ¥çï¼",
      "ä¸­å½å±äº§åæä¸ºæ§æ¿åçæ¡ä»¶ä¸æåºæ¥çï¼",
      "æ¯å¨å¼å§å¨é¢å»ºè®¾å°åº·ç¤¾ä¼çå½¢å¿ä¸æåºæ¥çï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nâä¸ä¸ªä»£è¡¨âéè¦ææ³æ¯å¨ (    )",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_347",
    "type": "single",
    "answer": 2,
    "options": [
      "èµ°æ°åå·¥ä¸åéè·¯ï¼",
      "å®æ½å¯æç»­åå±æç¥ï¼",
      "å¤§åå®æ½ç§æå´å½æç¥ï¼",
      "å®ç°éåº¦åç»æãè´¨éãæççç»ä¸ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nè¦å¨é¢è½å®ç§å­¦ææ¯æ¯ç¬¬ä¸çäº§åçææ³ï¼å°±æ¯è¦ (   )",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_348",
    "type": "single",
    "answer": 2,
    "options": [
      "ä»¥é©¬åæä¸»ä¹ä¸ºæå¯¼ï¼",
      "è®²å¤§å±ãè®²å¢ç»ãè®²ç¨³å®ï¼",
      "åäºç»ç»ç¾¤ä¼ãå®£ä¼ ç¾¤ä¼ãèç³»ç¾¤ä¼ï¼",
      "ä»ä¸¥æ²»åï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næä»¬åçæå¤§æ¿æ²»ä¼å¿æ¯ (    )",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_349",
    "type": "single",
    "answer": 0,
    "options": [
      "âä¸ä¸ªä»£è¡¨âéè¦ææ³ï¼",
      "å¨é¢å»ºè®¾å°åº·ç¤¾ä¼ï¼",
      "åæä¸æ¶ä¿±è¿ï¼",
      "ä¸æ­å®ç°å¥½ç»´æ¤å¥½åå±å¥½æå¹¿å¤§äººæ°çæ ¹æ¬å©çï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næä»¬åå¨é¨å·¥ä½çåºåç¹åè½èç¹å°±æ¯ (    )",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_350",
    "type": "single",
    "answer": 2,
    "options": [
      "é¶çº§æ§",
      "äººæ°æ§ï¼",
      "åè¿æ§ï¼",
      "é¢å¯¼ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nè´¯å½»âä¸ä¸ªä»£è¡¨âéè¦ææ³ï¼æ ¸å¿æ¯åæåç(    )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_351",
    "type": "single",
    "answer": 2,
    "options": [
      "åå§ç»ä¿æä¸å¹¿å¤§äººæ°ç¾¤ä¼çè¡èèç³»ï¼",
      "åè½å¦åèè´¥ï¼",
      "ååå½å®¶çåéå½è¿ï¼",
      "æä»¬å½å®¶ç»æµè½å¦ä¸ä¸ä¸ªå¤§å°é¶ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸­å½å±äº§åè½å¦å§ç»åå°ä¸æ¶ä¿±è¿å³å®ç",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_352",
    "type": "multiple",
    "answer": [
      0,
      2,
      3
    ],
    "options": [
      "ç«åä¹æ¬ï¼",
      "æ¶ä»£è¦æ±ï¼",
      "æ§æ¿ä¹åºï¼",
      "åéä¹æºï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\nâä¸ä¸ªä»£è¡¨âçè¦æ±ï¼æ¯æä»¬åç(    )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_353",
    "type": "multiple",
    "answer": [
      0,
      1,
      3
    ],
    "options": [
      "å±äº§åçæ§æ¿è§å¾ï¼",
      "ç¤¾ä¼ä¸»ä¹å»ºè®¾çè§å¾ï¼",
      "æ äº§é¶çº§é©å½çè§å¾ï¼",
      "äººç±»ç¤¾ä¼åå±çè§å¾ï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\nâä¸ä¸ªä»£è¡¨âéè¦ææ³æ å¿çæä»¬åå¯¹(   )çè®¤è¯è¾¾å°äºæ°æ°´å¹³æ°é«åº¦ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_354",
    "type": "multiple",
    "answer": [
      0,
      2,
      3
    ],
    "options": [
      "é½æ¯ä»¥é©¬åæåå®ä¸»ä¹ä¸ºçè®ºåºç¡åææ³æ¥æºï¼",
      "é½å·æä¸æ¶ä¿±è¿ççè®ºåæ ¼ï¼",
      "é½ä»¥å®ç°ç¤¾ä¼ä¸»ä¹ä¸ºç®æ ï¼ä»¥è§£å³ä¸­åæ°æçå¤å´ä¸ºä¸»é¢ï¼",
      "æçå±åçé»è¾èµ·ç¹ãå±åçç§å­¦ç²¾ç¥åå±åçä»·å¼ååï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\nâä¸ä¸ªä»£è¡¨âéè¦ææ³æ¯æ¯æ³½ä¸ææ³ãéå°å¹³çè®ºä¸èç¸æ¿ççè®ºä½ç³»ï¼è¿æ¯å ä¸ºå®ä»¬ï¼(   )ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_355",
    "type": "single",
    "answer": 1,
    "options": [
      "æ­£ç¡®",
      "éè¯¯"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "åæ§æ¿å´å½çç¬¬ä¸è¦å¡æ¯åæåé¡¹åºæ¬åå ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_356",
    "type": "single",
    "answer": 1,
    "options": [
      "æ­£ç¡®",
      "éè¯¯"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æä»¬åå¨é¨å·¥ä½çåºåç¹åè½èç¹å°±æ¯âä¸ä¸ªä»£è¡¨âéè¦ææ³ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_357",
    "type": "single",
    "answer": 0,
    "options": [
      "æ­£ç¡®",
      "éè¯¯"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "è´¯å½»âä¸ä¸ªä»£è¡¨âéè¦ææ³çæ ¹æ¬è¦æ±ï¼æ¬è´¨å¨åææ§æ¿ä¸ºæ°ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_358",
    "type": "single",
    "answer": 0,
    "options": [
      "å¨æ¹ä½çãå¼åæ§çï¼",
      "å¨è¦ççãååæ§çï¼",
      "å¤å±æ¬¡çãç«ä½åç;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nåçåä¹å¤§æåºï¼åå«å¤§ä»¥æ¥çäºå¹´ï¼ä¸­å½ç¤¾ä¼åççåå²æ§åé©æ¯ï¼ï¼ã\nAæ·±å±æ¬¡çãæ ¹æ¬æ§çï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_359",
    "type": "single",
    "answer": 3,
    "options": [
      "0.15ï¼",
      "0.2ï¼",
      "0.25ï¼",
      "0.3;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nåçåå«å¤§ä»¥æ¥ï¼æå½ç»æµä¿æä¸­é«éå¢é¿ï¼ç»¼åå½ååå½éå½±ååæ¾èæåï¼ç»æµæ»éç¨³å±ä¸çç¬¬äºä½ï¼å¯¹ä¸çç»æµå¢é¿è´¡ç®çè¶è¿ï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_360",
    "type": "single",
    "answer": 1,
    "options": [
      "äººæ°æ¥çå¢é¿çç»æµæåéè¦åå½åç»æµæåä¸è½æ»¡è¶³äººæ°éè¦çç¶åµä¹é´ççç¾ï¼",
      "äººæ°æ¥çå¢é¿çç¾å¥½çæ´»éè¦åä¸å¹³è¡¡ä¸ååçåå±ä¹é´ççç¾ï¼",
      "æ äº§é¶çº§åèµäº§é¶çº§ä¹é´ççç¾ï¼",
      "äººæ°å¯¹äºç¤¾ä¼ä¸»ä¹ç°ä»£å¼ºå½çéè¦åä¸å¹³è¡¡ä¸ååçåå±ä¹é´ççç¾;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹è¿å¥æ°æ¶ä»£ï¼æå½ç¤¾ä¼ä¸»è¦çç¾å·²ç»è½¬åä¸ºï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_361",
    "type": "single",
    "answer": 3,
    "options": [
      "æå¤§ç¤¾ä¼ä¸»ä¹å½å®¶ç¶åµæ²¡æåï¼",
      "äººå£æ°éä¸çç¬¬ä¸å°ä½æ²¡æåï¼",
      "âä¸çå·¥åâçå°ä½æ²¡æåï¼",
      "ä¸çæå¤§åå±ä¸­å½å®¶çå½éå°ä½æ²¡æå;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næå½ç¤¾ä¼ä¸»è¦çç¾çååï¼æ²¡ææ¹åæä»¬å¯¹æå½ç¤¾ä¼ä¸»ä¹æå¤åå²é¶æ®µçå¤æ­ï¼æå½ä»å¤äºå¹¶å°é¿æå¤äºç¤¾ä¼ä¸»ä¹åçº§é¶æ®µçåºæ¬å½ææ²¡æåï¼æå½æ¯",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_362",
    "type": "single",
    "answer": 1,
    "options": [
      "æ°çåå²èµ·ç¹ï¼",
      "æ°çåå²æ¹ä½ï¼",
      "æ°çåå²é¶æ®µï¼",
      "æ°çåå²æ¶æ;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nç»è¿é¿æåªåï¼ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹è¿å¥äºæ°æ¶ä»£ï¼è¿æ¯æå½åå±ï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_363",
    "type": "single",
    "answer": 2,
    "options": [
      "ä¸­ç­åä¸æ¶å¥å½å®¶æ°´å¹³ï¼",
      "ä¸­ç­æ¶å¥å½å®¶æ°´å¹³ï¼",
      "ä¸­ç­åä¸æ¶å¥å½å®¶æ°´å¹³ï¼",
      "åè¾¾å½å®¶æ¶å¥æ°´å¹³;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ¹é©å¼æ¾ä»¥æ¥ï¼æå½äººæ°çæ´»æ°´å¹³ä¸æ­è¿ä¸äºæ°å°é¶ï¼å·²ç»è¾¾å°äºï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_364",
    "type": "single",
    "answer": 1,
    "options": [
      "ç¤¾ä¼ä¸»è¦çç¾ï¼",
      "åºæ¬è·¯çº¿ï¼",
      "åºæ¬çº²é¢ï¼",
      "åºæ¬æ¿ç­;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ°æ¶ä»£æä»¬è¦ç¢ç¢ææ¡ç¤¾ä¼ä¸»ä¹åçº§é¶æ®µè¿ä¸ªåºæ¬å½æï¼ç¢ç¢ç«è¶³ç¤¾ä¼ä¸»ä¹åçº§é¶æ®µè¿ä¸ªæå¤§å®éï¼ç¢ç¢åæåå¨ç¤¾ä¼ä¸»ä¹åçº§é¶æ®µçï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_365",
    "type": "single",
    "answer": 2,
    "options": [
      "å»ºè®¾ä»ä¹æ ·çåãææ ·å»ºè®¾åï¼",
      "ä»ä¹æ¯ç¤¾ä¼ä¸»ä¹ãææ ·å»ºè®¾ç¤¾ä¼ä¸»ä¹ï¼",
      "æ°æ¶ä»£åæååå±ææ ·çä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹ãææ ·åæååå±ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹ï¼",
      "åæä»ä¹æ ·çåå±ãææ ·åå±;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ°æ¶ä»£ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹ææ³åç­çæ¶ä»£è¯¾é¢æ¯ï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_366",
    "type": "single",
    "answer": 1,
    "options": [
      "ç§å­¦æ§ä¸é©å½æ§çç»ä¸",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå¨è¿å¹³æ°æ¶ä»£ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹ææ³ä¸­ï¼âå«ä¸ªæç¡®âåâååä¸ªåæâä½ç°äºè¿ä¸ææ³ï¼ï¼ã\nï¼\nçè®ºä¸å®è·µçç»ä¸\nEã\nï¼\nFãäººæ°æ§ä¸åæ§çç»ä¸ï¼\nGãåè¿æ§ä¸ççæ§çç»ä¸;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_367",
    "type": "single",
    "answer": 3,
    "options": [
      "æ§æ¿ãåèè´¥ãçº¯æ´æ§ãåè¿æ§ï¼",
      "æ¹é©ãå¼æ¾ãæ°ä¸»ãå¬æ­£ï¼",
      "åé¨ç¯å¢ãå¤é¨ç¯å¢ãååç¯å¢ãåå¤ç¯å¢ï¼",
      "æ§æ¿ãæ¹é©å¼æ¾ãå¸åºç»æµãå¤é¨ç¯å¢;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå¨æ°çåå²æ¡ä»¶ä¸ï¼æä»¬åé¢ä¸´çâåå¤§èéªâæ¯ï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_368",
    "type": "single",
    "answer": 3,
    "options": [
      "é©¬åæåå®ä¸»ä¹åºæ¬åçï¼",
      "ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹éè·¯ï¼",
      "åé¡¹åºæ¬ååï¼",
      "åå¨ç¤¾ä¼ä¸»ä¹åçº§é¶æ®µçåºæ¬è·¯çº¿;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nâååå½å®¶ççå½çº¿ãäººæ°çå¹¸ç¦çº¿âæçæ¯ï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_369",
    "type": "single",
    "answer": 1,
    "options": [
      "æ·±å±æ¬¡çãæ ¹æ¬æ§çï¼",
      "å¨æ¹ä½çãå¼åæ§çï¼",
      "çå¾è§çãæ¸å¾ççï¼",
      "ç«ä½åçãå¤å±æ¬¡ç;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nåçåä¹å¤§æåºï¼åå«å¤§ä»¥æ¥çäºå¹´ï¼ååå½å®¶äºä¸åå¾äºçåå²æ§æå°±æ¯ï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_370",
    "type": "single",
    "answer": 2,
    "options": [
      "ä¸ºä¸­å½äººæ°è°å¹¸ç¦ï¼ä¸ºä¸çåå¹³è°è´¡ç®ï¼",
      "å®ç°å±äº§ä¸»ä¹ï¼å®ç°äººçèªç±å¨é¢åå±ï¼",
      "ä¸ºä¸­å½äººæ°è°å¹¸ç¦ï¼ä¸ºä¸­åæ°æè°å¤å´ï¼",
      "å®ç°æ°æç¬ç«ãäººæ°è§£æ¾ï¼å®ç°å½å®¶å¯å¼ºãäººæ°å¹¸ç¦;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸­å½å±äº§åäººçåå¿åä½¿å½ï¼å°±æ¯ä¸ºï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_371",
    "type": "single",
    "answer": 1,
    "options": [
      "æ°çå½»åºæ§ååï¼",
      "æ°çé¶æ®µæ§ååï¼",
      "æ°çæ ¹æ¬æ§ååï¼",
      "æ°çåå²æ§åå;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ°æ¶ä»£æå½è¿å¥ç¤¾ä¼ä¸»ä¹åçº§é¶æ®µä»¥æ¥çâè½åçç¤¾ä¼çäº§âå·²ç»åçäºï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_372",
    "type": "single",
    "answer": 1,
    "options": [
      "æ³è§å»ºè®¾ï¼",
      "æ¿æ²»å»ºè®¾ï¼",
      "ææ³æ­¦è£ï¼",
      "å¢ç»ç»ä¸;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nåäºèªæé©å½ï¼ä»ä¸¥ç®¡åæ²»åï¼æ¯æä»¬åæé²æçåæ ¼ãæ°æ¶ä»£åçå»ºè®¾æå¨é¦ä½çæ¯ï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_373",
    "type": "single",
    "answer": 1,
    "options": [
      "è¡å¨çº²é¢å±é¢çè¡¨è¿°ï¼éç¹è®²çæ¯æä¹åï¼",
      "æå¯¼ææ³å±é¢çè¡¨è¿°ï¼éç¹è®²çæ¯æä¹çï¼",
      "è¡å¨çº²é¢å±é¢çè¡¨è¿°ï¼éç¹è®²çæ¯ææ ·è½å®å°å®å¤ï¼",
      "æå¯¼ææ³å±é¢çè¡¨è¿°ï¼éç¹è®²çæ¯æä¹å;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¹ è¿å¹³æ°æ¶ä»£ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹ææ³åå®¹ååä¸°å¯ï¼ææäºä¸ä¸ªç³»ç»å®æ´ãé»è¾ä¸¥å¯ãç¸äºè´¯éçææ³çè®ºä½ç³»ï¼å¶ä¸­ï¼âå«ä¸ªæç¡®âæ¯ï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_374",
    "type": "single",
    "answer": 0,
    "options": [
      "ä¸­å½å±äº§åé¢å¯¼ï¼",
      "ä¸­å½å±äº§åé¢å¯¼ä¸çå¤ååä½ä¸æ¿æ²»ååå¶åº¦ï¼",
      "ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹ååæ°ä¸»ï¼",
      "åçé¢å¯¼ãäººæ°å½å®¶ä½ä¸»ãä¾æ³æ²»å½ææºç»ä¸;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ°æ¶ä»£ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹ææ¬è´¨çç¹å¾æ¯ä¸­å½å±äº§åé¢å¯¼ï¼ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹å¶åº¦çæå¤§ä¼å¿æ¯ï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_375",
    "type": "single",
    "answer": 1,
    "options": [
      "âå«ä¸ªæç¡®â",
      "",
      "",
      "ååä¸ªåæâï¼"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¹ è¿å¹³æ°æ¶ä»£ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹ææ³åç­äºæ°æ¶ä»£ææ ·åæååå±ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹ï¼åçåä¹å¤§æ¦æ¬ä¸ºï¼ï¼ã\nï¼\nEãâäºä½ä¸ä½âï¼\nFãâåä¸ªå¨é¢â;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_376",
    "type": "single",
    "answer": 1,
    "options": [
      "ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹æ°çæ¬ï¼",
      "é©¬åæä¸»ä¹æ°çæ¬ï¼",
      "å½ä»£ä¸­å½é©¬åæä¸»ä¹æ°çæ¬ï¼",
      "21ä¸çºªé©¬åæä¸»ä¹æ°çæ¬;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¹ è¿å¹³æ°æ¶ä»£ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹ææ³ä»¥ä¸ç³»åå·æååæ§çæ°ææ³æ°è§ç¹æ°è®ºæ­ï¼å¨çè®ºä¸å®ç°äºéå¤§çªç ´ãéå¤§åæ°ãéå¤§åå±ï¼ååºäºï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_377",
    "type": "single",
    "answer": 2,
    "options": [
      "å¨æ¹ä½ãå¤å±æ¬¡ãå®½é¢åçå¤äº¤å¸å±ï¼",
      "å¨é¢ãåè°ãå¯æç»­çå¤äº¤å¸å±ï¼",
      "å¨æ¹ä½ãå¤å±æ¬¡ãç«ä½åçå¤äº¤å¸å±ï¼",
      "å±åãç»¼åãå¯æç»­çå¤äº¤å¸å±;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nåçåå«å¤§ä»¥æ¥ï¼ä»¥ä¹ è¿å¹³ä¸ºæ ¸å¿çåä¸­å¤®å¨é¢æ¨è¿ä¸­å½ç¹è²å¤§å½å¤äº¤ï¼å½¢æï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_378",
    "type": "single",
    "answer": 3,
    "options": [
      "æ¹é©ãåä½ãå±åãå¯æç»­ãå±äº«çåå±çå¿µï¼",
      "åæ°ãåè°ãå±åãåå±ãå±äº«çåå±çå¿µï¼",
      "æ¹é©ãåå±ãç¨³å®ãå¼æ¾ãå±äº«çåå±çå¿µï¼",
      "åæ°ãåè°ãç»¿è²ãå¼æ¾ãå±äº«çåå±çå¿µ;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nåå±æ¯è§£å³æå½ä¸åé®é¢çåºç¡åå³é®ï¼åå±å¿é¡»æ¯ç§å­¦åå±ï¼å¿é¡»åå®ä¸ç§»è´¯å½»ï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_379",
    "type": "single",
    "answer": 1,
    "options": [
      "æ°é¶æ®µï¼",
      "æ°æ¶ä»£ï¼",
      "æ°ä½¿å½ï¼",
      "æ°å®è·µ;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¹ è¿å¹³æ°æ¶ä»£ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹ææ³å¾ä»¥äº§ççæ¶ä»£èæ¯æ¯ï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_380",
    "type": "single",
    "answer": 1,
    "options": [
      "æ°æ¶ä»£åå¯¹äººæ°åéçç»å¯¹é¢å¯¼çææ³ï¼",
      "æ°æ¶ä»£åçå¼ºåææ³ï¼",
      "",
      "æ°æ¶ä»£èªè§ç»´æ¤åä¸­å¤®æå¨åéä¸­ç»ä¸é¢å¯¼çææ³;"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå»ºè®¾ä¸æ¯å¬åææ¥ãè½æèä»ãä½é£ä¼è¯çäººæ°åéï¼å¿é¡»å¨é¢è´¯å½»åé¢å¯¼äººæ°åéçä¸ç³»åæ ¹æ¬åååå¶åº¦ï¼å¨å½é²ååéå»ºè®¾ä¸­èµ·æå¯¼å°ä½çæ¯ï¼ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_381",
    "type": "single",
    "answer": 2,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹æ¯æ¹é©å¼æ¾ä»¥æ¥åçå¨é¨çè®ºåå®è·µçä¸»é¢ï¼ä¹ è¿å¹³æ°æ¶ä»£ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹ææ³å¼è¾äºï¼ï¼ã\né©¬åæä¸»ä¹æ°å¢çï¼\nç®¡åæ²»åæ°å¢çï¼\nä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹æ°å¢çï¼\næ²»å½çæ¿æ°å¢ç;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_382",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nåå«å¤§ä»¥æ¥çäºå¹´ï¼æå½ç»æµå»ºè®¾åå¾éå¤§æå°±ï¼æå½å½åçäº§æ»å¼ç¨³å±ä¸çï¼ï¼ã\nç¬¬ä¸ï¼\nç¬¬äºï¼\nç¬¬ä¸ï¼\nç¬¬å;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_383",
    "type": "single",
    "answer": 2,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\n2011å¹´11æ29æ¥ï¼ä¹ è¿å¹³æ»ä¹¦è®°å¨åè§âå¤å´ä¹è·¯âå±è§æ¶ç¨äºä¸äºè¯å¥è¯´æä¸­åæ°æçæ¨å¤©ãä»å¤©åæå¤©ï¼å¶ä¸­ï¼ç¨æ¥è¡¨è¾¾ä¸­åæ°ææå¤©çè¯å¥æ¯(   )ã\néå³æ¼«éçå¦éï¼\näººé´æ­£éæ¯æ²§æ¡ï¼\né¿é£ç ´æµªä¼ææ¶ï¼\næ æ¥è·è±å«æ ·çº¢;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_384",
    "type": "single",
    "answer": 2,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸åæå³ä¸­å½æ¢¦çè¡¨è¿°ä¸æ­£ç¡®çæ¯(   )ã\nä¸­å½æ¢¦ååä½ç°äºä¸­å½å±äº§åé«åº¦çåå²æå½åä½¿å½è¿½æ±ï¼\nä»å¤©æä»¬æ¯åå²ä¸ä»»ä½æ¶æé½æ´æ¥è¿äºä¸­åæ°æä¼å¤§å¤å´çç®æ ï¼\nä¸­å½æ¢¦åªæ¯ä¸­å½äººçæ¢¦ï¼\nä¸­å½æ¢¦æ¯ååå½å®¶é¢åæªæ¥çæ¿æ²»å®£è¨;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_385",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nåçåå«å¤§è§å®ï¼æå½å®ç°å¨é¢å°åº·ç¤¾ä¼çå®ä¼ç®æ çæ¶é´æ¯( )ã\n2020å¹´ï¼\n2015å¹´ï¼\næ¬ä¸çºªä¸­å¶ï¼\nå»ºå½ä¸ç¾å¹´;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_386",
    "type": "single",
    "answer": 3,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\n2012å¹´11æ29æ¥ä¹ è¿å¹³æ»ä¹¦è®°å¨åè§ãå¤å´ä¹è·¯ãå±è§æ¶æåºï¼ä¸­åæ°æè¿ä»£ä»¥æ¥æä¼å¤§çæ¢¦æ³æ¯( )ã\nå®ç°å±åå¯è£ï¼\nå®ç°æ°æç¬ç«åäººæ°è§£æ¾ï¼\nå®ç°å¬å¹³æ­£ä¹ï¼\nå®ç°ä¸­åæ°æä¼å¤§å¤å´;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_387",
    "type": "single",
    "answer": 3,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸­å½æ¢¦çåºæ¬åæ¶µæ¯ï¼ï¼ã\næ°ææ¯å´ãå½å®¶å¯å¼ºãç¤¾ä¼åè°ï¼\næ°ææ¯å´ãç¤¾ä¼åè°ãäººæ°å¹¸ç¦ï¼\nå½å®¶å¯å¼ºãäººæ°å¹¸ç¦ãç¤¾ä¼åè°ï¼\næ°ææ¯å´ãå½å®¶å¯å¼ºãäººæ°å¹¸ç¦;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_388",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nåçåä¹å¤§æåºåºæ¬å®ç°ç°ä»£åçæç¥ç®æ æ¯å¨ï¼ ï¼ã\n2020å¹´ ï¼\n2035å¹´ ï¼\næ¬ä¸çºªä¸­å¶ï¼\nå»ºå½ä¸ç¾å¹´;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_389",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nâä¸¤ä¸ªä¸ç¾å¹´âæ¯æå»ºææ ååå äº¿äººå£çæ´é«æ°´å¹³çå°åº·ç¤¾ä¼ååºæ¬å®ç°ç°ä»£åï¿½ï¿½å»ºæç¤¾ä¼ä¸»ä¹ç°ä»£åå½å®¶ï¼âç¬¬ä¸ä¸ªä¸ç¾å¹´âåâç¬¬äºä¸ªä¸ç¾å¹´âçå®ç°æ¶é´åå«æ¯ï¼ï¼ã\nå»ºå100å¹´ãæ°ä¸­å½æç«100å¹´ï¼\næ°ä¸­å½æç«100å¹´ãå»ºå100å¹´ï¼\næ°ä¸­å½æç«100å¹´ãæ¹é©å¼æ¾100å¹´ï¼\nå»ºå100å¹´ãæ¹é©å¼æ¾100å¹´;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_390",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå¨é¢å»ºè®¾ç¤¾ä¼ä¸»ä¹ç°ä»£åå½å®¶çè¿ç¨åä¸¤ä¸ªé¶æ®µæ¥å®æï¼ä»¥2035å¹´ä¸ºèç¹ï¼å¶ä¸­ç¬¬ä¸é¶æ®µçèµ·å§æ¶é´åç¬¬äºé¶æ®µçæªæ­¢æ¶é´æ¯ï¼ï¼ã\n2025å¹´ãæ¬ä¸çºªä¸­å¶ï¼\n2020å¹´ãæ¬ä¸çºªä¸­å¶ï¼\n2010å¹´ã2045å¹´ï¼\n2025å¹´ã2055å¹´;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_391",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nåºæ¬å®ç°ç¤¾ä¼ä¸»ä¹ç°ä»£åå¨ç»æµå»ºè®¾æ¹é¢çç®æ è¦æ±å°±æ¯äº§ä¸è¿åä¸­é«ç«¯æ°´å¹³ï¼ç»æµåå±ç±æ°éåè§æ¨¡æ©å¼ åè´¨éåæçæåæ ¹æ¬è½¬åãå¶ä¸­ç»æµå¢é¿éåº¦å¿ç¶è½¬åï¼ï¼ã\nä¸­é«é ï¼\nç¨³å®é«éï¼\nç¨³å®åéï¼\næ¾ç¼åé;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_392",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nåºæ¬å®ç°ç¤¾ä¼ä¸»ä¹ç°ä»£åå¨æ¿æ²»å»ºè®¾æ¹é¢çç®æ è¦æ±å°±æ¯æ¿åºå¬ä¿¡ååæ§è¡åå¤§ä¸ºå å¼ºï¼äººæ°æ»¡æçæå¡åæ¿åºåºæ¬å»ºæãå¨æ°å®æ³çå±é¢åºæ¬å½¢æï¼å®ç°å¨é¢ï¼ï¼ã\nä¾æ³æ²»å½ï¼\nä¸¥æ ¼æ§æ³ï¼\nå¬æ­£å¸æ³ï¼\nç§å­¦ç«æ³;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_393",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nåºæ¬å®ç°ç¤¾ä¼ä¸»ä¹ç°ä»£åå¨æåå»ºè®¾æ¹é¢çç®æ è¦æ±å°±æ¯å½å®¶æåè½¯å®åæ¾èå¢å¼ºï¼å¥åå®ç°ä¸­å½æ¢¦ï¼ç±å½ä¸»ä¹ãéä½ä¸»ä¹ãç¤¾ä¼ä¸»ä¹ææ³å¹¿æ³å¼æ¬ï¼è¿ä¸åé½å¿é¡»ä¾èµäºå¹è²åè·µè¡ï¼ï¼ã\nç¤¾ä¼ä¸»ä¹æ ¸å¿ä»·å¼ä½ç³»ï¼\nç¤¾ä¼ä¸»ä¹æ ¸å¿ä»·å¼è§ï¼\né©¬åæä¸»ä¹çæå¯¼ææ³ï¼\nä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹å±åçæ³;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_394",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nåºæ¬å®ç°ç¤¾ä¼ä¸»ä¹ç°ä»£åå¨æ°çåç¤¾ä¼å»ºè®¾æ¹é¢çç®æ è¦æ±å°±æ¯åä¹¡åºååå±å·®è·åå±æ°çæ´»æ°´å¹³å·®è·æ¾èç¼©å°ï¼åºæ¬å¬å±æå¡åç­ååºæ¬å®ç°ãå¶ä¸­äººæ°çæ´»æ´ä¸ºå¯è£è¦æ±ææ¾æé«çæ¯ä¾æ¯ï¼ï¼ã\né«æ¶å¥ç¾¤ä½ï¼\nä¸­ç­æ¶å¥ç¾¤ä½ï¼\nä¸­é«æ¶å¥ç¾¤ä½ï¼\nå°åº·ç¾¤ä½;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_395",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nåºæ¬å®ç°ç¤¾ä¼ä¸»ä¹ç°ä»£åå¨çæææå»ºè®¾æ¹é¢çç®æ è¦æ±å°±æ¯è¦åºæ¬å®ç°ï¼ï¼ã\nçæä¸­å½ï¼\nç¾ä¸½ä¸­å½ï¼\nç»¿è²ä¸­å½ï¼\nè±å­ä¸­å½;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_396",
    "type": "single",
    "answer": 2,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå°æ¬ä¸çºªä¸­å¶ï¼å»ºæç¤¾ä¼ä¸»ä¹å¼ºå½æ¶ï¼æå½å°æ¥æé«åº¦çï¼  ï¼ã\næ¿æ²»ææãç©è´¨ææãçæææï¼\nç©è´¨ææãæ¿æ²»ææãæåææï¼\nç©è´¨ææãæ¿æ²»ææãç²¾ç¥ææï¼\nç»æµææãå¶åº¦ææãç²¾ç¥ææ;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_397",
    "type": "single",
    "answer": 3,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå°å®ç°ç¤¾ä¼ä¸»ä¹ç°ä»£åå¼ºå½çç®æ ä¹æ¶ï¼æå½ä½ä¸ºå·æäºåå¹´ææåå²çå¤å½ï¼å°çååºåææªæççæºæ´»åï¼å®ç°å½å®¶æ²»çä½ç³»åæ²»çè½åçç°ä»£åï¼å½å®¶å°±æ¥æäºå¼ºå¤§çï¼ï¼ã\nç»æµå®åãæåè½¯å®åï¼\næ¿æ²»å®åãå½éå½±ååï¼\nåäºå®åãæåå½±ååï¼\nç»¼åå½åãå½éå½±åå;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_398",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nç°æ¶ä»£å¼é¢åå±çç¬¬ä¸å¨åæ¯ï¼ï¼ã\nåæ°ï¼\néæ±ï¼\nç§æï¼\næ¹é©;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_399",
    "type": "single",
    "answer": 2,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå½åæå½ç»æµåå±ä¸å¤äºï¼ï¼ã\nè½¬ååå±æ¹å¼æ»å³æï¼\nä¼åç»æµç»ææ»å³æï¼\né«éåå±æï¼\nè½¬æ¢å¢é¿å¨åçæ»å³æ;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_400",
    "type": "single",
    "answer": 3,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸å±äºâä¸å»ä¸éä¸è¡¥âä¸­âä¸å»âçæ¯ï¼ï¼ã\nå»äº§è½ï¼\nå»åºå­ ï¼\nå»æ æï¼\nå»è´åº;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_401",
    "type": "single",
    "answer": 3,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nç¤¾ä¼ä¸»ä¹æ°ä¸»æ¿æ²»çæ¬è´¨ç¹å¾æ¯ï¼ï¼ã\nä¸­å½å±äº§åçé¢å¯¼ï¼\nä¾æ³æ²»å½ï¼\näººæ°ä»£è¡¨å¤§ä¼å¶åº¦ï¼\näººæ°å½å®¶ä½ä¸»;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_402",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸å±äºäººæ°å½å®¶ä½ä¸»å¶åº¦ä½ç³»çæ¯ï¼ï¼ã\nå¤ååä½åæ¿æ²»ååå¶åº¦ï¼\nç´æ¥éä¸¾å¶åº¦ï¼\næ°æåºåèªæ²»å¶åº¦ï¼\nåºå±ç¾¤ä¼èªæ²»å¶åº¦;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_403",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸¤å²¸å³ç³»çæ¿æ²»åºç¡æ¯ï¼ï¼ã\nä¸ä¸ªä¸­å½ååï¼\nå½å±ä¸¤åå¹³ç­è°å¤ï¼\nä¸å½ä¸¤å¶ï¼\nä¸¤å²¸ä¸å®¶äº²;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_404",
    "type": "single",
    "answer": 3,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nææ¡æè¯å½¢æå·¥ä½é¢å¯¼æï¼è¦æå¸é²æåæï¼ï¼ã\né©¬åæä¸»ä¹ä¸ä¸­å½å®éç¸ç»åï¼\næ¨è¿é©¬åæä¸»ä¹ä¸­å½åæ¶ä»£åå¤§ä¼åï¼\nä¸æ¶ä¿±è¿å°åæååå±é©¬åæä¸»ä¹ï¼\né©¬åæä¸»ä¹æå¯¼å°ä½;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_405",
    "type": "single",
    "answer": 3,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸å±äºç¤¾ä¼ä¸»ä¹æ ¸å¿ä»·å¼è§åç¤¾ä¼ä¸»ä¹æ ¸å¿ä»·å¼ä½ç³»çå³ç³»çæ¯ï¼ï¼ã\nç¤¾ä¼ä¸»ä¹æ ¸å¿ä»·å¼è§æ¯å¨ç¤¾ä¼ä¸»ä¹æ ¸å¿ä»·å¼ä½ç³»åºç¡ä¸æåºæ¥çï¼\näºèæ¹åä¸è´ï¼\näºèåæä¾§éï¼\nä¸¤èæ¯åå¨çç¾ç;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_406",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ·±åæåä½å¶æ¹é©ï¼è¦åæï¼ï¼ã\nä»¥äººæ°ä¸ºä¸­å¿çå¯¼åï¼\nå¸åºå¯¼åï¼\næåäº§ä¸ä¸ºä¸»ï¼\næç»æµæçæ¾å¨é¦ä½;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_407",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næå½ç°è¡æ åä¸åæè´«å°äººå£å®ç°è±è´«çç®æ å®å¨ï¼ï¼ã\n2020å¹´ï¼\n2030å¹´ï¼\n2035å¹´ï¼\n2050å¹´;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_408",
    "type": "single",
    "answer": 3,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå½åä¿æç¤¾ä¼å®å®å¢ç»è¯å¥½å±é¢çå³é®æ¯ï¼ï¼ã\nåæé©¬åæä¸»ä¹ççè®ºæå¯¼ï¼\nåæäººæ°æ°ä¸»ä¸æ¿ï¼\nåæç§å­¦åå±è§ï¼\næ­£ç¡®å¤çäººæ°åé¨çç¾ç¹å«æ¯æ¶åå¹¿å¤§äººæ°ç¾¤ä¼åèº«å©çççç¾;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_409",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå½å®¶æ»ä½å®å¨è§çæ ¹æ¬æ¯ï¼ï¼ã\næ¿æ²»å®å¨ï¼\nå½å®¶å©çï¼\näººæ°å®å¨ï¼\nç»æµå®å¨;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_410",
    "type": "single",
    "answer": 2,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nçæææçæ ¸å¿æ¯ï¼ï¼ã\nåæçæä¼åååï¼\næ¹é èªç¶ï¼\nåæäººä¸èªç¶åè°å±çï¼\næä»èªç¶;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_411",
    "type": "single",
    "answer": 3,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå¨å½åæå½çç¯ä¿å·¥ä½ä¸­ï¼æ¾å¨é¦ä½çæ¯ï¼ï¼ã\nèçº¦èµæºï¼\nå©ç¨èªç¶åä¿®å¤çæç³»ç»ï¼\nç»æµå»ºè®¾ä¸ºä¸­å¿ï¼\né¢é²ä¸ºä¸»ãæºå¤´æ²»ç;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_412",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næå½æå»ºç«çç¯å¢æ²»çä½ç³»çä¸»ä½æ¯ï¼ï¼ã\næ¿åºï¼\nä¼ä¸ ï¼\nä¸ªäººï¼\nå¬ä¼;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_413",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå°2020å¹´å¨é¢å»ºæå°åº·ç¤¾ä¼çå¥æç®æ çæåºæ¯å¨ï¼  ï¼ã\nåçåä¹å¤§  ï¼\nåçåå«å¤§ï¼\nåçåå«å±ä¸ä¸­å¨ä¼ ï¼\nåçåä¹å±ä¸ä¸­å¨ä¼;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_414",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nè§£å³ä¸­å½ç°å®é®é¢çæ ¹æ¬éå¾æ¯ï¼    ï¼ã\nå¨é¢æ·±åæ¹é©ï¼\nå¨é¢å»ºæå°åº·ç¤¾ä¼ï¼\nå¨é¢ä¾æ³æ²»å½ ï¼\nå¨é¢ä»ä¸¥æ²»å;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_415",
    "type": "single",
    "answer": 2,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå¨é¢æ·±åæ¹é©çéè¦ä¾ææ¯ï¼    ï¼ã\nåæ¥æ¿åºå¨èµæºéç½®ä¸­çä½ç¨ï¼\nåé æ´å å¬å¹³æ­£ä¹çç¤¾ä¼ç¯å¢ï¼\nåæç¤¾ä¼ä¸»ä¹å¸åºç»æµæ¹é©æ¹åï¼\nåæä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹æ¹å;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_416",
    "type": "single",
    "answer": 3,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nâåä¸ªå¨é¢âæç¥å¸å±ä¸­å·æçªç ´æ§ååå¯¼æ§çå³é®ç¯èãå·ææ°çåå²ç¹ç¹çä¼å¤§æäºçéè¦æ¹é¢æ¯ï¼   ï¼ã\nå¨é¢å»ºæå°åº·ç¤¾ä¼ï¼\nå¨é¢ä¾æ³æ²»å½ ï¼\nå¨é¢ä»ä¸¥æ²»åï¼\nå¨é¢æ·±åæ¹é©;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_417",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ¹é©ãåå±ãç¨³å®æ¯æå½ç¤¾ä¼ä¸»ä¹ç°ä»£åå»ºè®¾çä¸ä¸ªéè¦æ¯ç¹ï¼è§£å³ä¸åç»æµç¤¾ä¼é®é¢çå³é®æ¯ï¼    ï¼ã\nç¨³å®ï¼\nåå±ï¼\næ¹é© ï¼\nä¾æ³æ²»å½;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_418",
    "type": "single",
    "answer": 2,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næç¡®æåºå¨é¢æ¨è¿ä¾æ³æ²»å½ï¼å å¿«å»ºè®¾æ³æ²»ä¸­å½çä¼è®®æ¯ï¼  ï¼ã\nåå«å¤§                          ï¼\nåå«å±ä¸ä¸­å¨ä¼ï¼\nåå«å±åä¸­å¨ä¼ ï¼\nåä¹å¤§;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_419",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næç¡®æåºâå å¿«å»ºè®¾ç¤¾ä¼ä¸»ä¹æ³æ²»å½å®¶âï¼æâå¨é¢æ¨è¿ä¾æ³æ²»å½âä½ä¸ºæ¿æ²»æ¹é©åæ¿æ²»åå±çéè¦ç®æ åéè¦ä»»å¡çæ¯ï¼  ï¼ã\nåä¸å±ä¸ä¸­å¨ä¼ï¼\nåå«å¤§ï¼\nåäºå¤§ ï¼\nåä¹å¤§;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_420",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nç¤¾ä¼ä¸»ä¹æ³æ²»ææ ¹æ¬çä¿è¯æ¯ï¼    ï¼ã\nåçé¢å¯¼                 ï¼\næ¹é©å¼æ¾ï¼\næ³å¾é¢åäººäººå¹³ç­ ï¼\nç§å­¦ç«æ³;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_421",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nâåä¸ªå¨é¢âæç¥å¸å±æ¯æä»¬åå¨æ°å½¢å¿ä¸æ²»å½çæ¿çæ»æ¹ç¥ï¼å¶ä¸­æç¥ç®æ æ¯ï¼    ï¼ã\nå¨é¢å»ºæå°åº·ç¤¾ä¼          ï¼\nå¨é¢æ·±åæ¹é© ï¼\nå¨é¢ä¾æ³æ²»å½  ï¼\nå¨é¢ä»ä¸¥æ²»å;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_422",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸­å½å±äº§åçæå¤§æ¿æ²»ä¼å¿æ¯ï¼    ï¼ã\nå¯åèç³»ç¾¤ä¼  ï¼\nå®äºæ±æ¯ï¼\nç»ä¸æçº¿ï¼\nä½é£å»ºè®¾;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_423",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nâåæåè¦ç®¡åãå¨é¢ä»ä¸¥æ²»åâæ¯æ°æ¶ä»£åçå»ºè®¾çæ ¹æ¬æ¹éï¼å¶ä¸­å³é®æ¯ï¼   ï¼ã\nâå¨é¢âï¼\nâä¸¥âï¼\nâæ²»âï¼\nâç®¡â;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_424",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå¨é¢æ·±åæ¹é©çæ»ç®æ çæåºæ¯å¨ï¼    ï¼ã\nåå«å¤§   ï¼\nåå«å±ä¸ä¸­å¨ä¼ï¼\nåå«å±åä¸­å¨ä¼ ï¼\nåä¹å¤§;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_425",
    "type": "single",
    "answer": 3,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\né¦æ¬¡æåºæåçæ¿æ²»å»ºè®¾çº³å¥åçå»ºè®¾æ»ä½å¸å±ï¼å¼ºè°âæåçæ¿æ²»å»ºè®¾æå¨é¦ä½âçä¼è®®æ¯ï¼    ï¼ã\nåä¸å±ä¸ä¸­å¨ä¼            ï¼\nåå«å¤§ ï¼\nåå«å±ä¸ä¸­å¨ä¼ ï¼\nåä¹å¤§;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_426",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä½ä¸ºåçæ ¹æ¬æ§å»ºè®¾ä¸å³å®åçå»ºè®¾æ¹ååææçæ¯ï¼   A   ï¼ã\nåçæ¿æ²»å»ºè®¾ï¼\nåçç»ç»å»ºè®¾ï¼\nåçä½é£å»ºè®¾ï¼\nåçææ³å»ºè®¾;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_427",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ°æ¶ä»£åçå»ºè®¾çæ ¹æ¬æ¹éæ¯ï¼      ï¼ã\næå¸é²æè®²æ¿æ²» ï¼\nä¿®èº«ç«å¾·è®²è§æï¼\nâåæåè¦ç®¡åãå¨é¢ä»ä¸¥æ²»åâï¼\næä¹ä»¥æè½¬ä½é£;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_428",
    "type": "single",
    "answer": 3,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸åæå³æ°æ¶ä»£å¼ºåç®æ è¯´æ³æ­£ç¡®çæ¯\nåäºå°2020å¹´åºæ¬å®ç°å½é²ååéç°ä»£åï¼\nåäºå°æ¬ä¸çºªä¸­å¶åºæ¬å®ç°å½é²ååéç°ä»£åï¼\nåäºå°2035å¹´æäººæ°åéå¨é¢å»ºæä¸çä¸æµåéï¼\nåäºå°æ¬ä¸çºªä¸­å¶æäººæ°åéå¨é¢å»ºæä¸çä¸æµåé;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_429",
    "type": "single",
    "answer": 3,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\näººæ°åéçå»ºåä¹æ¬ãå¼ºåä¹é­æ¯\nä½é£ä¼è¯ï¼\nè½æèä»ï¼\nä¸ä¸æè¦äºä¸ææ­»ï¼\nåå¯¹åéç»å¯¹é¢å¯¼;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_430",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nåçåå«å¤§ä»¥æ¥ï¼å¼ºåäºä¸åå¾åå²æ§æå°±ï¼åçåå²æ§åé©ï¼å¶æ ¹æ¬åå å¨äº\nä¹ è¿å¹³å¼ºåææ³æå¼ï¼\nå½å®¶å®å¨ç¯å¢çæ·±å»ååï¼\næ­¦å¨ç°ä»£åè¿ç¨ä¸æ­å éï¼\nä¸çåäºåå±çæ¿çç«äº;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_431",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\näººæ°åéææ ä¸èçæ ¹æ¬ä¿è¯æ¯\nå²éé·éµçåå®æå¿ï¼\nå§ç»åæåçé¢å¯¼ï¼\nå®åçæ­¦è£ä½ç³»ï¼\nåè¿çæ­¦å¨è£å¤;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_432",
    "type": "single",
    "answer": 2,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nåå¯¹åéç»å¯¹é¢å¯¼çååä¸å¶åº¦å®åäº\nåæèµ·ä¹ï¼\nä¸æ¹¾æ¹ç¼ï¼\nå¤ç°ä¼è®®ï¼\néµä¹ä¼è®®;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_433",
    "type": "single",
    "answer": 3,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nåå¯¹åéç»å¯¹é¢å¯¼çæé«å®ç°å½¢å¼æ¯\nåå§å¶ï¼\næ¿æ²»æºå³å¶ï¼\næ¿æ²»å§åå¶ï¼\nåå§ä¸»å¸­è´è´£å¶;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_434",
    "type": "single",
    "answer": 3,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nåé¢å¯¼åéçæ ¹æ¬å¶åº¦æ¯\nå®åµå¹³ç­ï¼åäºæ°ä¸»ï¼\næ¯é¨å»ºå¨è¿ä¸ï¼\næ¿æ²»å§åå¶ï¼\nåå§ç»ä¸çéä½é¢å¯¼ä¸çé¦é¿åå·¥è´è´£å¶;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_435",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nåçåä¹å¤§å¯¹å¨é¢æ¨è¿å½é²ååéç°ä»£åä½åºæ°çæç¥å®æï¼å¶ä¸­âè¦åºæ¬å®ç°æºæ¢°åï¼ä¿¡æ¯åå»ºè®¾åå¾éå¤§è¿å±âæ¯å¨\n2018å¹´ï¼\n2020å¹´ï¼\n2035å¹´ï¼\næ¬ä¸çºªä¸­å¶;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_436",
    "type": "single",
    "answer": 2,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nåå§ä¸»å¸­ä¹ è¿å¹³æåºï¼åäºé¢åè¡¡éå©å¼å¾å¤±å¯ä¸çæ ¹æ¬çæ åæ¯\næ¯å¦å·æä¼è¯ä½é£ï¼\næ¯å¦å·æä¸ä¸æè¦äºä¸ææ­»çé©å½ç²¾ç¥ï¼\nææåï¼\næ­¦å¨ä¼å£;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_437",
    "type": "single",
    "answer": 2,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\näººæ°åéä¸å¶ä»æ§è´¨åéçæå¤§åºå«æ¯\néççºªå¾ï¼\nåäºè®­ç»ï¼\næ¿æ²»å·¥ä½ï¼\nåè£ä¼ ç»;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_438",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\näººæ°åéæ¿æ²»å·¥ä½èè½äº\nå¤§é©å½æ¶æï¼\nå»ºåä¹åï¼\näºåå±±æ¶æï¼\nå¤ç°ä¼è®®;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_439",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä»¥ä¸æå³æå½æé ä¸çä¸æµåéçè¯´æ³ä¸æ­£ç¡®çæ¯\næ¿æ²»å»ºåæ¯äººæ°åéçç«åä¹æ¬ï¼\næ­¦å¨æ¯ç°ä»£æäºçæ ¸å¿ææåï¼\nä¾æ³æ²»åãä»ä¸¥æ²»åæ¯å»ºåæ²»åçåºæ¬æ¹ç¥ï¼\næ¹é©æ¯äººæ°åéåå±å£®å¤§ãå¶èæªæ¥çå³é®ä¸æ;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_440",
    "type": "single",
    "answer": 3,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næåæ°è´¨ä½æè½åçéè¦å¢é¿ç¹æ¯\nç°ä»£åéåï¼\næ­¦è­¦é¨éï¼\nç«ç®­åï¼\næç¥æ¯æ´é¨é;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_441",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå½åä¸çæ°åäºé©å½æ­£çªé£çè¿ãæ·±å¥åå±ãå¶ä¸­ï¼åäºææ¯åå±çæ ¸å¿æ¯\nçç©ææ¯ï¼\nä¿¡æ¯ææ¯ï¼\nèªå¤©ææ¯ï¼\nå¯¼å¼¹ææ¯;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_442",
    "type": "single",
    "answer": 2,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä»¥ä¸è¡¨è¿°ç¬¦ååæ°èååå±ææ³è¦æ±çæ¯\nâå¤§å©å¤§å¹²ï¼å°å©å°å¹²ï¼æ å©ä¸å¹²âï¼\nâæ¿æèå«äººï¼ä¸æ¿æè¢«å«äººèâï¼\nâåæå¨å½ä¸çæ£âï¼\nâå±äº«å«äººçèµæºå¯ä»¥ï¼åäº«èªå·±çèµæºä¸è¡â;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_443",
    "type": "single",
    "answer": 2,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ¨è¿åæ°èåæ·±åº¦åå±å¿é¡»å¥å¨ä½å¶æºå¶ãå¶ä¸­ï¼åæ°èåéè¦å»ºç«çå·¥ä½è¿è¡ä½ç³»æ¯\nç³»ç»å®å¤ãè¡æ¥éå¥ãæææ¿å±ï¼\nç»ä¸é¢å¯¼ãåå°åè°ãé¡ºçé«æï¼\nå½å®¶ä¸»å¯¼ãéæ±çµå¼ãå¸åºè¿ä½ï¼\nç»ä¸é¢å¯¼ãåå°åè°ãéæ±å¯¹æ¥ãèµæºå±äº«;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_444",
    "type": "single",
    "answer": 3,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næå½æç¥å¨æçæ ¸å¿åéæ¯\næµ·åï¼\nç©ºåï¼\næç¥æ¯æ´é¨éï¼\nç«ç®­å;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_445",
    "type": "single",
    "answer": 2,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå½ä»ä¸çå½éå±å¿åçäºå¹¿æ³èæ·±å»çååï¼ä½åå¹³ä¸åå±ä»æ¯æ¶ä»£ä¸»é¢ï¼ä¸å¯é»æ¡çæ¶ä»£æ½®æµæ¯ï¼ ï¼\nåå¹³ãåå±ãç«äºãå±èµ¢ï¼\nåå¹³ãç¨³å®ãåå±ãåæ°ï¼\nåå¹³ãåå±ãåä½ãå±èµ¢ï¼\nåå¹³ãåå±ãç«äºãåæ°;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_446",
    "type": "single",
    "answer": 3,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸åå³äºç»æµå¨çåçè¯´æ³ï¼éè¯¯çæ¯ï¼  ï¼\nç»æµå¨çåæå©äºä¿è¿èµæ¬ãææ¯ãç¥è¯ç­çäº§è¦ç´ å¨å¨çèå´åçä¼åéç½®ï¼\nç»æµå¨çåä¸ºåå½åå°åºæä¾äºæ°çåå±æºéï¼\nç»æµå¨çåå å§äºå½éç«äºï¼å¢å äºå½éé£é©ï¼\nç»æµå¨çåå¯¹åå±ä¸­å½å®¶çæ°æå·¥ä¸é æäºè´å½æå»;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_447",
    "type": "single",
    "answer": 2,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå·æç»æåï¼å°¤å¶æ¯è¿å¥21ä¸çºªä»¥æ¥ï¼ä¸çå¤æåè¶å¿ä¸æ­åå±ãä¸åå³äºä¸çå¤æåçè¯´æ³ï¼ä¸æ­£ç¡®çæ¯ï¼  ï¼\næ°å´å¸åºå½å®¶ååå±ä¸­å½å®¶ç¾¤ä½æ§å´èµ·ï¼\nå½éåéå¯¹æ¯åºç°äºåææªæçç§¯æååï¼\né¸æä¸»ä¹åå¼ºææ¿æ²»å·²ç»ä¸å»ä¸è¿ï¼\nä¸çå¤æååå½éå³ç³»æ°ä¸»åå¤§å¿é¾é;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_448",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸åå³äºæ°åå½éå³ç³»çè¯´æ³éè¯¯çæ¯ï¼  ï¼\næ°åå½éå³ç³»ï¼âæ°âå¨äºç¸å°éï¼\næ°åå½éå³ç³»ï¼âæ°âå¨è£è¾±ä¸å±ï¼\næ°åå½éå³ç³»ï¼âæ°âå¨å¬å¹³æ­£ä¹ï¼\næ°åå½éå³ç³»ï¼âæ°âå¨åä½å±èµ¢;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_449",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\n2014å¹´ï¼æå½å³å®ä¸å¶åå±å¨é¢æç¥åä½ä¼ä¼´å³ç³»çå½å®¶æ¯ï¼  ï¼\nä¿ç½æ¯ï¼\næ¥æ¬ï¼\nç¾å½ï¼\nå æ¿å¤§;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_450",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå³äºæå½èµ°åå¹³åå±éè·¯çèªä¿¡åèªè§çæ¥æºï¼è¯´æ³ä¸æ­£ç¡®çæ¯ï¼  ï¼\næ¥æºäºä¸­åææçæ·±åæ¸æºï¼\næ¥æºäºå¯¹æå½å¼ºå¤§å½é²è½åçè®¤ç¥ä¸èªä¿¡ï¼\næ¥æºäºå¯¹å®ç°ä¸­å½åå±ç®æ æ¡ä»¶çè®¤ç¥ï¼\næ¥æºäºå¯¹ä¸çåå±å¤§å¿çææ¡;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_451",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå¨æå½å¤äº¤å³ç³»çå¸å±ä¸­ï¼å°å¤§å½çä½æ¯ï¼  ï¼\né¦è¦ï¼\nå³é®ï¼\nåºç¡ï¼\nèå°;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_452",
    "type": "single",
    "answer": 3,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸æå½æç§æçå±åå±å»ºå±äº«çå¨çæ²»çè§ä¸ç¸ç¬¦åçæ¯ï¼  ï¼\nåæå½å®¶ä¸åå¤§å°ãå¼ºå¼±ãè´«å¯ä¸å¾å¹³ç­ï¼\næ¯ææ©å¤§åå±ä¸­å½å®¶å¨å½éäºå¡ä¸­çä»£è¡¨æ§ååè¨æï¼\né«åº¦éè§èåå½çä½ç¨ï¼\nä¸­å½å°è¿ä¸æ­¥æè´èµ·ä½ä¸ºå¤§å½ä¸»å¯¼ä¸çåå±çä½ç¨;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_453",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næå½å¤äº¤å·¥ä½çåºæ¬åºåç¹åè½èç¹æ¯ï¼  ï¼\nåå³ç»´æ¤ä¸çåå¹³ï¼\nåå³ç»´æ¤å½å®¶ä¸»æãå®å¨ãåå±å©çï¼\nä¿è¿ä¸çåå½å±ååå±ï¼\næè´å¤§å½è´£ä»»ï¼åæ¥å¤§å½ä½ç¨;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_454",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næå»ºäººç±»å½è¿å±åä½ææ³çæ ¸å¿æ¯ï¼  ï¼\nâå»ºè®¾æä¹åå¹³ãæ®éå®å¨ãå±åç¹è£ãå¼æ¾åå®¹ãæ¸æ´ç¾ä¸½çä¸çâï¼\nâå»ºè®¾æä¹åå¹³ãæ®éç¹è£ãå±ååå±ãæ°ä¸»åå®¹ãæ¸æ´ç¾ä¸½çä¸çâï¼\nâå»ºè®¾æä¹ç¨³å®ãæ®éå®å¨ãå±åç¹è£ãå¼æ¾åå®¹ãæ¸æ´ç¾ä¸½çä¸çâï¼\nâå»ºè®¾æä¹ç¨³å®ãæ®éç¹è£ãå±ååå±ãæ°ä¸»åå®¹ãæ¸æ´ç¾ä¸½çä¸çâ;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_455",
    "type": "single",
    "answer": 3,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næå»ºäººç±»å½è¿å±åä½ææ³ä¸­ï¼å³äºå¦ä½å¤çå½ä¸å½ä¹é´çå³ç³»ï¼ä¸åè¯´æ³ä¸­ä¸æ­£ç¡®çæ¯ï¼  ï¼\nå½å®¶ä¹é´è¦æå»ºå¹³ç­ç¸å¾ãäºåäºè°ãäºå­¦äºé´çä¼ä¼´å³ç³»ï¼\nå¤§å½é´è¦å°éå½¼æ­¤æ ¸å¿å©çåéå¤§å³åï¼ç®¡æ§çç¾åæ­§ï¼\nå¤§å½ä¸å°å½è¦å¹³ç­ç¸å¾ï¼ä¸æå¼ºåå¼±ï¼\nå½ä¸å½é¡»ç»æåäºåçï¼è¿½æ±èªèº«çç»å¯¹å®å¨;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_456",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næå»ºäººç±»å½è¿å±åä½ææ³ä¸­ï¼å³äºå¯¹äººç±»ææçè®¤è¯ï¼ä¸åè¯´æ³ä¸­æ­£ç¡®çæ¯ï¼  ï¼\näººç±»ææçå¤æ ·æ§æ¯ä¸ççåºæ¬ç¹å¾åäººç±»è¿æ­¥çæºæ³ï¼\nä¸åææä¹é´å­å¨çç«äºï¼æä¸ºä¸çå²çªçæ ¹æºï¼\näººç±»ææç¡®æé«ä½ä¹å«ä¼å£ä¹åï¼åºè¯¥äºå­¦äºé´ï¼\nä¸åææçäº¤æµèåå¸¦æ¥è¿æ­¥ï¼åºè¯¥ç¨åè¿ææåä»£è½åææ;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_457",
    "type": "single",
    "answer": 2,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸åä¸ç¬¦åâä¸å¸¦ä¸è·¯âåºæ¬ååçæ¯ï¼  ï¼\néè¿ç»§ç»­æ©å¤§å¯¹å¤æèµåé¼å±æ²¿çº¿å½å®¶æ¥åæï¿½ï¿½ï¼ä¿è¿è´¸æååå¹³è¡¡ï¼\néè¿æé«ææä¾ç»æ¥å¬çæ°çéæ±ï¼å®ç°ä¸çç»æµåå¹³è¡¡ï¼\néè¿å®è¡è´¸æä¿æ¤ä¸»ä¹ï¼å®ç°æ¬å½ç»æµå©çæå¤§åï¼\néè¿å¯¹æ¥æå³å½å®¶ååºååå±æç¥ï¼å®ç°ä¼å¿äºè¡¥ï¼ååå¹¶è¿;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_458",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¹ è¿å¹³æ»ä¹¦è®°2013å¹´ä¸¤æ¬¡åºè®¿æ¶ååæåºçéå¤§å¡è®®æ¯å±å»ºâä¸ç»¸ä¹è·¯ç»æµå¸¦âåï¼  ï¼\nâ21ä¸çºªæµ·ä¸ä¸ç»¸ä¹è·¯âï¼\nâ21ä¸çºªä¸ç»¸ä¹è·¯âï¼\nâ21ä¸çºªä¸æµ·ç»æµå¸¦âï¼\nâ21ä¸çºªæ²¿æµ·ç»æµå¸¦â;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_459",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸åä¸æå½ç¬ç«èªä¸»çåå¹³å¤äº¤æ¿ç­ä¸ç¬¦åçæ¯ï¼  ï¼\næå¨ä¸çäººæ°çæ ¹æ¬å©çæ¾å¨ç¬¬ä¸ä½ï¼\nå¯¹äºä¸åå½éäºå¡ï¼é½è¦æ ¹æ®äºææ¬èº«çæ¯éæ²ç´å³å®èªå·±çç«åºåæ¿ç­ï¼\nåå½çäºå¡åºç±æ¬å½æ¿åºåäººæ°å³å®ï¼\nä¸çä¸çäºæåºç±åå½æ¿åºåäººæ°å¹³ç­åå;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_460",
    "type": "single",
    "answer": 2,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹äºä¸çé¢å¯¼æ ¸å¿æ¯ï¼ï¼ã\nå·¥äººé¶çº§ï¼\nä¸­åæ°æ ï¼\nä¸­å½å±äº§åï¼\nä¸­å½äººæ°;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_461",
    "type": "single",
    "answer": 3,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹ææ¬è´¨çç¹å¾æ¯ï¼ï¼ã\nå±åå¯è£ï¼\nç¤¾ä¼åè°ï¼\näººæ°å½å®¶åä¸»  ï¼\nä¸­å½å±äº§åçé¢å¯¼;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_462",
    "type": "single",
    "answer": 3,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næç¡®æåºä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹ææ¬è´¨çç¹å¾æ¯ä¸­å½å±äº§åçé¢å¯¼è¿ä¸ç§å­¦è®ºæ­çæ¯ï¼ï¼ã\néå°å¹³ï¼\næ±æ³½æ°ï¼\nè¡é¦æ¶ï¼\nä¹ è¿å¹³ ;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_463",
    "type": "single",
    "answer": 2,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ äº§é¶çº§é©å½åç¤¾ä¼ä¸»ä¹å»ºè®¾åå¾èå©çæ ¹æ¬ä¿è¯æ¯ï¼ï¼ã\nç»ä¸æçº¿ï¼\nå·¥åèçï¼\nåçé¢å¯¼ï¼\nç¬ç«èªä¸»;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_464",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå®ç°ä¸­åæ°æä¼å¤§å¤å´ï¼å³é®å¨ï¼ï¼ã\nä¸­å½å±äº§åï¼\né©¬åæä¸»ä¹ï¼\nç¤¾ä¼ä¸»ä¹éè·¯ï¼\næ äº§é¶çº§ä¸æ¿;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_465",
    "type": "single",
    "answer": 2,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå°âä¸­å½å±äº§åçé¢å¯¼æ¯ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹å¶åº¦ææ¬è´¨çç¹å¾âè½½å¥å®ªæ³æ»çº²çå¤§ä¼æ¯ï¼ï¼ã\nåäºå±å¨å½äººå¤§ä¸æ¬¡ä¼è®®ï¼\nåäºå±å¨å½äººå¤§äºæ¬¡ä¼è®®ï¼\nåä¸å±å¨å½äººå¤§ä¸æ¬¡ä¼è®®ï¼\nåä¸å±å¨å½äººå¤§äºæ¬¡ä¼è®®;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_466",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹å¶åº¦çæå¤§ä¼å¿æ¯ï¼ï¼ã\nä¸­å½å±äº§åçé¢å¯¼ï¼\né©¬åæä¸»ä¹çæå¯¼ï¼\nç¤¾ä¼ä¸»ä¹éè·¯ï¼\næ äº§é¶çº§ä¸æ¿;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_467",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå¨âåä¸ªä¼å¤§âä¸­ï¼ä¼å¤§æ¢¦æ³æ¯ï¼ï¼ã\nç®æ ï¼\nææ®µï¼\nä¿éï¼\nä¸»é¢;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_468",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå¨âåä¸ªä¼å¤§âä¸­ï¼ä¼å¤§æäºæ¯ï¼ï¼ã\nç®æ ï¼\nææ®µï¼\nä¿éï¼\nä¸»é¢;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_469",
    "type": "single",
    "answer": 2,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå¨âåä¸ªä¼å¤§âä¸­ï¼ä¼å¤§å·¥ç¨æ¯ï¼ï¼ã\nç®æ ï¼\nææ®µï¼\nä¿éï¼\nä¸»é¢;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_470",
    "type": "single",
    "answer": 3,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå¨âåä¸ªä¼å¤§âä¸­ï¼ä¼å¤§äºä¸æ¯ï¼ï¼ã\nç®æ ï¼\nææ®µï¼\nä¿éï¼\nä¸»é¢;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_471",
    "type": "single",
    "answer": 2,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå¨âåä¸ªä¼å¤§âä¸­ï¼èµ·å³å®æ§ä½ç¨çæ¯ï¼ï¼ã\nä¼å¤§æ¢¦æ³ï¼\nä¼å¤§æäºï¼\nä¼å¤§å·¥ç¨ï¼\nä¼å¤§äºä¸;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_472",
    "type": "single",
    "answer": 2,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nç¡®ä¿åå§ç»æ»æ½å¨å±ãåè°åæ¹ï¼å¿é¡»å¢å¼ºæ¿æ²»æè¯ãå¤§å±æè¯ãæ ¸å¿æè¯ä»¥åï¼ï¼ã\nå®æ¨æè¯ï¼\nå­¦ä¹ æè¯ï¼\nçé½æè¯ï¼\næ¹é©æè¯;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_473",
    "type": "single",
    "answer": 2,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹å¶åº¦ä¼å¿åæ¥çæ ¹æ¬ä¿ï¿½ï¿½ï¿½æ¯ï¼ï¼ã\nç¤¾ä¼ä¸»ä¹éè·¯ï¼\näººæ°æ°ä¸»ä¸æ¿ï¼\nä¸­å½å±äº§åçé¢å¯¼ï¼\né©¬åæä¸»ä¹çæå¯¼;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_474",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ°çåå²æ¡ä»¶ä¸ä¸­å½å±äº§åæ§æ¿çåºæ¬æ¹å¼æ¯ï¼ï¼ã\nç§å­¦æ§æ¿ï¼\nä¾æ³æ§æ¿ï¼\næ°ä¸»æ§æ¿ï¼\nå®è§æ§æ¿;",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_475",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nç»æµè¿å¥æ°å¸¸æä»¥åï¼ä¼´éçç»æµå¢é¿éåº¦çä¸éï¼æ¨å¨(    )æä¸ºç»æµçæ´»ä¸­çä¸»æå¾ã\nä¾ç»ä¾§ç»ææ§æ¹é©ï¼\näº§ä¸ç»æåçº§ï¼\nå»ºè®¾ç¤¾ä¼ä¸»ä¹å¸åºç»æµä½å¶ï¼\nå»ºè®¾ç°ä»£åç»æµä½ç³»ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665245_476",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nè§£å³æ¶å¥åéé®é¢çâç¬¬ä¸éå³âæ¯è¦å®å(   )\nç¤¾ä¼ä¿éï¼\nç¨æ¶è°èï¼\nå¬å±æå¡åç­åï¼\nå¸åºç»æµï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_477",
    "type": "single",
    "answer": 3,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ¹é©çæ¹åæ¯è¦è®©(    )èµæºçéç½®å½ä¸­åæ¥å³å®æ§ä½ç¨ã\nç§æï¼\nåæ°ï¼\næ¿åºï¼\nå¸åºï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_478",
    "type": "single",
    "answer": 3,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nï¼     ï¼ å¼ºè°äººçåå±ï¼å¼ºè°è´¢å¯çå¬å¹³åéã\nGDPï¼\nç»¿è²GDPï¼\nå¹¸ç¦ææ°ï¼\näººç±»åå±ææ°ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_479",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\n(   )æ¯å»ºè®¾ç°ä»£åç»æµä½ç³»çéè¦æ¯æã\nç°ä»£éèä½ç³»ï¼\nç°ä»£äº§ä¸ä½ç³»ï¼\nç°ä»£çäº§ä½ç³»ï¼\nç°ä»£ç»è¥ä½ç³»ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_480",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nï¼   ï¼æ¯å¼é¢åå±çç¬¬ä¸å¨åï¼æ¯å»ºè®¾ç°ä»£åç»æµä½ç³»çæç¥æ¯æã\nåæ°ï¼\næ¹é©ï¼\nèè½ï¼\né«æï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_481",
    "type": "single",
    "answer": 2,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¿æåå°æ¿åå³ç³»ç¨³å®å¹¶é¿ä¹ä¸åï¼ç¬¬äºè½®åå°æ¿åå°æååå»¶é¿ï¼  ï¼\n10å¹´ï¼\n20å¹´ï¼\n30å¹´ï¼\n40å¹´ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_482",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå»ºè®¾ç°ä»£åç»æµä½ç³»ï¼å¿é¡»æåå±ç»æµççåç¹æ¾å¨ï¼   ï¼å®ä½ç»æµä¸ï¼ææé«ä¾ç»ä½ç³»è´¨éä½ä¸ºä¸»æ»æ¹åï¼æ¾èå¢å¼ºæå½ç»æµè´¨éä¼å¿ã\nå®ä½ç»æµï¼\nèæç»æµï¼\näº§ä¸ç»æµï¼\nçæç»æµï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_483",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\nåä¹å¤§å¯¹ç»æµå·¥ä½ååºäºåªäºæ¹é¢çé¨ç½²? (   )\næ·±åä¾ç»ä¾§ç»ææ§æ¹é©ï¼\nå å¿«å»ºè®¾åæ°åå½å®¶ï¼\nå®æ½ä¹¡ææ¯å´æç¥ï¼\nå®æ½åºååè°åå±æç¥ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_484",
    "type": "qa",
    "answer": "",
    "options": [],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_485",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "ç°ä»£åç»æµä½ç³»æåªäºåæ¶µ?  (   )\né«è´¨éçäº§ååæå¡ï¼\næ¥æå½éæ ¸å¿ç«äºä¼å¿çäº§ä¸ä½ç³»ï¼\nç¨³å®æççç»æµå¶åº¦(ä½å¶)ï¼\nä¸ç»æµä½ç³»ç¸éåºçæåä½ç³»ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_486",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\nå»ºè®¾ç°ä»£åç»æµä½ç³»ï¼è¦çåå å¿«å»ºè®¾(    )åååå±çäº§ä¸ä½ç³»ã\nå®ä½ç»æµï¼\nç§æåæ°ï¼\nç°ä»£éèï¼\näººåèµæºï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_487",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "ç°ä»£ç»æµä½ç³»çæ»ä½æè·¯æ¯è´¯å½»æ°åå±çå¿µã(    )",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_488",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "äººç±»åå±ææ°åªè½è¡¡éç»æµæ»éï¼å®å¹¶ä¸è½è¡¡éè´¢å¯çåéï¼ä¸è½è¡¡éäººæ°ççæ´»æ°´å¹³ã(    )",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_489",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "å¦¥åå¤çèæç»æµä¸å®ä½ç»æµçå³ç³»ï¼å¼å¯¼èµéçå¨èæç»æµï¼å¨èæç»æµæç»­ãç¨³å®å°åå±ã(    )",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_490",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ¨å¨ç¤¾ä¼ä¸»ä¹æåç¹è£å´çï¼å¿é¡»è¦åæç(    )åå±ææ³ååä½å¯¼å.\nç¾è±é½æ¾ãç¾å®¶äºé¸£ï¼\nä»¥äººæ°ä¸ºä¸­å¿ï¼\nåæ°ï¼\nç¬¦åä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_491",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nåä¹å¤§æ¥åä¸­æåºï¼åå®æåèªä¿¡ï¼æ¨å¨ç¤¾ä¼ä¸»ä¹æåç¹è£å´çï¼(    )å³å®æååè¿æ¹åååå±éè·¯ã\næåèªä¿¡ï¼\næè¯å½¢æï¼\næè¯å½¢å¼ï¼\næåç¹è£ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_492",
    "type": "single",
    "answer": 3,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nåå±ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹æåï¼å°±æ¯ä»¥(   )ä¸ºæå¯¼ï¼åå®(   )ç«åºï¼ç«è¶³å½ä»£ä¸­å½ç°å®ï¼ç»åå½ä»æ¶ä»£æ¡ä»¶ï¼åå±(   )çï¼æ°æçç§å­¦çå¤§ä¼çç¤¾ä¼ä¸»ä¹æåï¼æ¨å¨ç¤¾ä¼ä¸»ä¹ç²¾ç¥ææåç©è´¨ææåè°åå±ã\né©¬åæä¸»ä¹ä¸­å½æåé¢åä¸çåãé¢åä¸­å½ãé¢åæªæ¥ï¼\nä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹çè®ºä¸­å½æåé¢åç°ä»£åãé¢åç»æµãé¢åæªæ¥ï¼\né©¬åä¸»ä¹ä¸­åæåé¢åæ°æåãé¢åä¸çãé¢åæªæ¥ï¼\né©¬åæä¸»ä¹ä¸­åæåé¢åç°ä»£åãé¢åä¸çãé¢åæªæ¥ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_493",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nåä¹å¤§æ¥åä¸­æåºï¼åå®æåèªä¿¡ï¼æ¨å¨ç¤¾ä¼ä¸»ä¹æåç¹è£å´çï¼è¦åæ(    )ï¼åæåé æ§è½¬åãåæ°æ§åå±ï¼ä¸æ­é¸å°±ä¸­åæåæ°è¾çã\nä¸­å½ä¼ç§ä¼ ç»æåï¼\nä¸ºäººæ°æå¡ï¼\nä¸ºç¤¾ä¼ä¸»ä¹æå¡ï¼\nç¾è±é½æ¾ãç¾å®¶äºé¸£ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_494",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nåä¹å¤§æ¥åä¸­æåºï¼å å¼ºææ³éå¾·å»ºè®¾ï¼æ·±å¥å®æ½(    )å·¥ç¨ï¼æ¨è¿ç¤¾ä¼å¬å¾·ãèä¸éå¾·ãå®¶åº­ç¾å¾·ãä¸ªäººåå¾·å»ºè®¾ï¼æ¿å±äººä»¬åä¸ååãå­èç±äº²ï¼å¿ äºç¥å½ãå¿ äºäººæ°ã\nå¨æ°éå¾·å»ºè®¾ï¼\nå¬æ°éå¾·å»ºè®¾ï¼\nå½å®¶éå¾·å»ºè®¾ï¼\nç¤¾ä¼éå¾·å»ºè®¾ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_495",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nåä¹å¤§æ¥åä¸­æåºï¼å¹è²åè·µè¡ç¤¾ä¼æ ¸å¿ä»·å¼è§ï¼æ·±å¥ææ(     )è´å«çææ³è§å¿µãäººæç²¾ç¥ãéå¾·è§èï¼ç»åæ¶ä»£è¦æ±ç»§æ¿åæ°ï¼è®©ä¸­åæåå±ç°åºæ°¸ä¹é­ååæ¶ä»£é£éã\nä¸­å½ä¼ç§ä¼ ç»æåï¼\nä¸­åä¼ç§ä¼ ç»æåï¼\nä¸­åä¼ç§æåï¼\nä¸­å½ææ³æåï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_496",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nâåèä¸åâã âå¤©äººåä¸âç­ä¼ ç»æåçå¿µè´å«äºç¤¾ä¼ä¸»ä¹æ ¸å¿ä»·å¼è§ç(   ) çå¿µã\nåè°ï¼\nææï¼\næ³æ²»ï¼\nç±å½ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_497",
    "type": "single",
    "answer": 2,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nç¤¾ä¼ä¸»ä¹æ ¸å¿ä»·å¼ä½ç³»æ¯å½å®¶(   ) çæ ¸å¿åå®¹ã\nç«äºåï¼\nåèåï¼\næåè½¯å®åï¼\nåé åï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_498",
    "type": "multiple",
    "answer": [
      0,
      1,
      2
    ],
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\nåä¹å¤§æ¥åä¸­æåºï¼ç¢ç¢ææ¡æè¯å½¢æå·¥ä½é¢å¯¼æï¼è½å®æè¯å½¢æå·¥ä½è´£ä»»å¶ï¼å å¼ºéµå°å»ºè®¾åç®¡çï¼æ³¨æåºå(     )ï¼æå¸é²æåå¯¹åæµå¶åç§éè¯¯è§ç¹ã\nå­¦æ¯è§ç¹é®é¢ï¼\næ¿æ²»ååé®é¢ï¼\nææ³è®¤è¯é®é¢ï¼\nçè®ºå»ºè®¾é®é¢ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_499",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\nåä¹å¤§æ¥åä¸­ï¼åå±ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹å¿é¡»(   )\nä»¥ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹ä¸ºæå¯¼ï¼åå®ä¸­åæåç«åºï¼\nåå±é¢åç°ä»£åãé¢åä¸çãé¢åæªæ¥ï¼æ°æçç§å­¦çå¤§ä¼çç¤¾ä¼ä¸»ä¹æåï¼\nç«è¶³å½ä»£ä¸­å½ç°å®ï¼ç»åå½ä»æ¶ä»£æ¡ä»¶ï¼\næ¨å¨ç¤¾ä¼ä¸»ä¹ç²¾ç¥ææåä¸­åä¼ ç»æååè°åå±ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_500",
    "type": "multiple",
    "answer": [
      0,
      1,
      2
    ],
    "options": [
      "",
      "çé¸äºä¸­åæ°æäºåå¤å¹´ææåå²æå­è²çä¸­åä¼ç§ä¼ ç»æå",
      "",
      "æºèªäºåé¢å¯¼äººæ°å¨é©å½ãå»ºè®¾ãæ¹é©ä¸­åé çé©å½æååç¤¾ä¼ä¸»ä¹åè¿æå",
      "",
      "æ¤æ ¹äºä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹ä¼å¤§å®è·µ",
      "",
      "è¦åæä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹æååå±éè·¯ï¼æ¿åå¨æ°ææååæ°åé æ´»å"
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\nåä¹å¤§æ¥åä¸­æåºï¼åå®æåèªä¿¡ï¼æ¨å¨ç¤¾ä¼ä¸»ä¹æåç¹è£å´çï¼å³äºä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹æåæ­£ç¡®çæ(    )",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_501",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æåèªä¿¡ä¸ä»å³ç³»å°èªèº«æåçç¹è£å´çï¼èä¸å³å®çä¸ä¸ªå½å®¶ãä¸ä¸ªæ°æçåéå½è¿ã(    )",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_502",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æåçå½±ååé¦åæ¯ä»·å¼è§å¿µçå½±ååã(    )",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_503",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "ç¹è£åå±ç¤¾ä¼ä¸»ä¹æèºï¼æ¨å¨æåäºä¸åæåäº§ä¸åå±ï¼æ¯å»ºè®¾ç¤¾ä¼ä¸»ä¹æåå¼ºå½çéè¦ä»»å¡ã(    )",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_504",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸­å±åå«å¤§æåºï¼æ¨è¿å½é²ååéç°ä»£åçä¸»çº¿æ¯ï¼  ï¼ã\næ¨å¨å½é²ååéå»ºè®¾ç§å­¦åå±ï¼\nå å¿«è½¬åææåçææ¨¡å¼ï¼\næ¨è¿ç¤¾ä¼ä¸»ä¹å½é²ï¼\nç»´æ¤ä¸çåå¹³ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_505",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\näººæ°åéå®å¨åºå«äºä¸åæ§åéçæ¿æ²»ç¹è´¨åæ ¹æ¬ä¼å¿å¨äºï¼  ï¼ã\näº§ççæ¶ä»£å·²ç»å®å¨ä¸åï¼\nåå¯¹äººæ°åéçç»å¯¹é¢å¯¼ï¼\nåå¾äºè§£æ¾æäºçèå©ï¼\nå±äºå·¥äººé¶çº§çåééï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_506",
    "type": "single",
    "answer": 3,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ°æ¶æä¸­å½å½é²çä¸»è¦ç®æ åä»»å¡ä¸åæ¬ä¸é¢åªä¸é¡¹ï¼  ï¼ã\nç»´æ¤å½å®¶ä¸»æãå®å¨ãåå±å©çï¼\nç»´æ¤ç¤¾ä¼åè°ç¨³å®ï¼\næ¨è¿å½é²ååéç°ä»£åï¼\nåå½ä¸çè­¦å¯ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_507",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næå½æåç«¯çé¢åæ¯ä»ä¹ç¾¤å²(  )ã\nè¥¿æ²ç¾¤å²ï¼\nåæ²ç¾¤å²ï¼\nåºå²ç¾¤å²ï¼\nèå±±ç¾¤å²ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_508",
    "type": "single",
    "answer": 2,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸­å½äººæ°è§£æ¾åçå®æ¨æ¯ï¼  ï¼ã\nå¬åææ¥ï¼\næ¥æ¿ç±æ°ï¼\nå¨å¿å¨æä¸ºäººæ°æå¡ï¼\nä¿å«ç¥å½ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_509",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\näººæ°åéçç«åä¹æ¬æ¯ï¼  ï¼ã\næ¿æ²»å»ºåï¼\næ¹é©å¼ºåï¼\nç§æå´åï¼\nä¾æ³æ²»åï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_510",
    "type": "single",
    "answer": 2,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nåæå¯å½åå¼ºåç¸ç»ä¸çéè¦éå¾æ¯ï¼  ï¼ã\nå¤§ååå±åäºåéï¼\nç§¯æè¿è¡ç»æµå»ºè®¾ï¼\nèµ°åæ°èåå¼åå±çè·¯å­ï¼\næé«ç»¼åå½åï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_511",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸é¢åå®¹ä¸å±äºåçåä¹å¤§å¯¹å¨é¢æ¨è¿å½é²ååéç°ä»£åæç¥å®æçæ¯ï¼  ï¼ã\nå°2020å¹´å½é²ååéå»ºè®¾è¦åºæ¬å®ç°æºæ¢°åï¼\nå°2025å¹´å½é²ååéä¿¡æ¯åå»ºè®¾åå¾éå¤§è¿å±ï¼\nå°2035å¹´ï¼åºæ¬å®ç°å½é²ååéç°ä»£åï¼\nå°æ¬ä¸çºªä¸­å¶ï¼æäººæ°åéå»ºæä¸çä¸æµåéï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_512",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\nç°ä»£å­å¤§é«ææ¯ç¾¤åæ¬ï¼  ï¼ã\nä¿¡æ¯ææ¯ï¼\nç©ºé´ææ¯ï¼\nçç©ææ¯ï¼\næµ·æ´ææ¯ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_513",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\nå½éæç¥æ ¼å±çæ¶µä¹æ¯ï¼  ï¼ã\nå½éæ ¼å±çææè§è²åªè½æ¯å½éæç¥åéï¼\nå å¤§æç¥åéä¹é´å½¢æçç¸äºå³ç³»ï¼\næä¸ºå½éæç¥åéçå¿é¡»æ¯å¤§å½æèå½å®¶éå¢ï¼\nå¤§å½åéä¹é´çç¸äºå³ç³»å¨ä¸å®æ¶æåç¸å¯¹ç¨³å®ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_514",
    "type": "multiple",
    "answer": [
      0,
      1,
      2
    ],
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\næ¯æ³½ä¸äººæ°æäºä¸åå²ä¸ä¸è¬çäººæ°æäºçåºå«æ¯ï¼  ï¼ã\næäºçç®çä¸åï¼\nä¾é ç¾¤ä¼çæ·±åº¦åå¹¿åº¦ä¸åï¼\næäºçç»æä¸åï¼\nå¨åçå¯¹è±¡ä¸åï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_515",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "ä¸çå¤æåå°æ¯ä¸ä¸ªå¨æ²æä¸­åå±çé¿æåå²è¿ç¨ï¼  ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_516",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "å½é²çè¡ä¸ºä¸»ä½æ¯åéï¼  ï¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_517",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "ä¹ è¿å¹³æåºï¼å»ºè®¾ä¸æ¯é©å½åãç°ä»£åãæ­£è§åçäººæ°åéï¼æ¯åå¨æ°æ¶ä»£çå¼ºåç®æ ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_518",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä»»ä½ç»ç»æèä¸ªäººé½ä¸å¾æè¶è¶å®ªæ³åæ³å¾çï¼ ï¼ã\nè¡ä¸ºï¼\nç¹æï¼\nè¨è¡ï¼\nè¦æ±ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_519",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nï¼  ï¼æ¯ç¤¾ä¼ä¸»ä¹æ³æ²»çæ ¸å¿åå®¹ã\nä¾æ³æ²»å½ï¼\nåçé¢å¯¼ï¼\næ§æ³ä¸ºæ°ï¼\nå¬å¹³æ­£ä¹ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_520",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nï¼  ï¼æ¯æå»ºç¤¾ä¼ä¸»ä¹åè°ç¤¾ä¼çä¸¤å¤§æ¯æ±ã\nå®å®åæåºï¼\næ°ä¸»åæ³æ²»ï¼\nè¯ä¿¡ååç±ï¼\nå¬å¹³åæ­£ä¹ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_521",
    "type": "single",
    "answer": 2,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nï¼  ï¼æ¯ç¤¾ä¼ä¸»ä¹æ³æ²»çæ¬è´¨è¦æ±ã\næå¡å¤§å±ï¼\nåçé¢å¯¼ï¼\næ§æ³ä¸ºæ°ï¼\nå¬å¹³æ­£ä¹ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_522",
    "type": "single",
    "answer": 2,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nåå«å±åä¸­å¨ä¼éè¿çãä¸­å±ä¸­å¤®å³äºå¨é¢æ¨è¿ä¾æ³æ²»å½è¥å¹²éå¤§é®é¢çå³å®ãæåºï¼æ³å¾å¶å®åä¿®æ¹çéå¤§é®é¢ç±ï¼  ï¼ååä¸­å¤®æ¥åã\nå¨å½äººå¤§ç»ï¼\nå½å¡é¢ï¼\nå¨å½äººå¤§å¸¸å§ä¼åç»ï¼\nå¨å½äººå¤§å¸¸å§ä¼ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_523",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nåæåèè´¥æ ç¦åºãå¨è¦çãé¶å®¹å¿ï¼åå®ä¸ç§»âæèâãâæèâãâççâçç®æ åæ­¥å®ç°ï¼ï¼  )çç¬¼å­è¶æè¶å³ï¼åèè´¥æäºååæ§æå¿å½¢æå¹¶å·©åºåå±ã\nä¸æ¢èä¸è½èä¸æ³èï¼\nä¸è½èä¸æ¢èä¸æ³èï¼\nä¸æ³èä¸æ¢èä¸è½èï¼\nä¸æ¢èä¸æ³èä¸è½èï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_524",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nåæåçé¢å¯¼ãäººæ°å½å®¶ä½ä¸»ãä¾æ³æ²»å½ææºç»ä¸ãï¼  ï¼æ¯ç¤¾ä¼ä¸»ä¹æ°ä¸»æ¿æ²»çæ¬è´¨ç¹å¾ã\nåçé¢å¯¼ï¼\näººæ°å½å®¶ä½ä¸»ï¼\nä¾æ³æ²»å½ï¼\næ¿æ²»ä½å¶æ¹é©ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_525",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¹ è¿å¹³æ»ä¹¦è®°æåºå¨é¢ä»ä¸¥æ²»åçå¤é¨ç¯å¢çç¹ç¹æ¯ï¼  ï¼ã\nå¨çåï¼\nå±æºåä¼ï¼\nä¸âå¼ºâç¬å¤§ï¼\næäºä¸æ­ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_526",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\næ ¹æ®ãä¸­å±ä¸­å¤®å³äºå¨é¢æ¨è¿ä¾æ³æ²»å½è¥å¹²éå¤§é®é¢çå³å®ãçè§å®ï¼ä¾æ³æ²»å½ä¸ºä»ä¹è¦åæåçé¢å¯¼ï¼ï¼  ï¼\nåçé¢å¯¼æ¯ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹ææ¬è´¨çç¹å¾ï¼\næ¯ç¤¾ä¼ä¸»ä¹æ³æ²»çæ ¹æ¬è¦æ±ï¼\næ¯æå½æ³æ²»å»ºè®¾çä¸æ¡åºæ¬ç»éªï¼\næå½å®ªæ³ç¡®ç«äºä¸­å½å±äº§åçé¢å¯¼å°ä½ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_527",
    "type": "multiple",
    "answer": [
      0,
      1,
      2
    ],
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\nèä¸å§åçæ ¹æ¬ä¸»è§åå æ¯ï¼  ï¼ã\nåå¼±çæ³ä¿¡å¿µï¼\nå¨æçæ³ä¿¡å¿µï¼\næå¼çæ³ä¿¡å¿µï¼\nå¤é¨å¿åçç ´åï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_528",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\nä¸­å½å±äº§ååãå¹²é¨çæ¿æ²»çºªå¾è¦å·å¤çç´ è´¨æï¼  ï¼ã\næ¿æ²»æè¯ï¼\nå¤§å±æè¯ï¼\næ ¸å¿æè¯ï¼\nçé½æè¯ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_529",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "å½å®¶åç¤¾ä¼æ²»çéè¦æ³å¾åéå¾·å±ååæ¥ä½ç¨ï¼æ³å¾å¯¹éå¾·èµ·ä¿è¿ä½ç¨ï¼éå¾·å¯¹æ³æ²»æåèµ·æ¯æä½ç¨ï¼äºèç¸è¾ç¸æï¼ç¸å¾çå½°ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_530",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹éè·¯ãçè®ºä½ç³»ãå¶åº¦æ¯å¨é¢æ¨è¿ä¾æ³æ²»å½çæ ¹æ¬éµå¾ªã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_531",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "åçé¢å¯¼åç¤¾ä¼ä¸»ä¹æ³æ²»ä¸è´çï¼ç¤¾ä¼ä¸»ä¹æ³æ²»å¿é¡»åæåçé¢å¯¼ï¼åçé¢å¯¼å¿é¡»ä¾é ç¤¾ä¼ä¸»ä¹æ³æ²»ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_532",
    "type": "single",
    "answer": 2,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\n(    )æ¯åèç³»äººæ°ç¾¤ä¼çåºæ¬çº½å¸¦ã\nååï¼\nåç»ç»ï¼\nåçåºå±ç»ç»ï¼\nåçé¢å¯¼å¹²é¨ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_533",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nåççºªå¾æ¯ç»´æ¤(      )ãå®æåçä»»å¡çä¿è¯ã\nåçå©çï¼\nåçå¢ç»ç»ä¸ï¼\nå¨åä¸è´ï¼\nåçæ§è´¨ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_534",
    "type": "single",
    "answer": 2,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå»ºè®¾ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹äºä¸çå³é®å¨äº(    )ã\nä¸­å½å·¥äººé¶çº§ï¼\nä¸­å½ç§æç¥è¯åå­ï¼\nä¸­å½å±äº§åï¼\nä¸­å½å½å®¶é¢å¯¼äººï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_535",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¼å¤§æäºï¼ä¼å¤§å·¥ç¨ï¼ä¼å¤§äºä¸ï¼ä¼å¤§æ¢¦æ³ï¼ç´§å¯èç³»ãç¸äºè´¯éãç¸äºä½ç¨ï¼å¶ä¸­èµ·å³å®æ§ä½ç¨çæ¯ï¼   ï¼ã\nä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹ä¼å¤§äºä¸ï¼\nåçå»ºè®¾æ°çä¼å¤§å·¥ç¨ï¼\nå·æè®¸å¤æ°çåå²ç¹ç¹çä¼å¤§æäºï¼\nä¸­åæ°æä¼å¤§å¤å´çä¼å¤§æ¢¦æ³ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_536",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸­å½å±äº§åç¬¬ä¸æ¬¡å¨å½ä»£è¡¨å¤§ä¼äºï¼   ï¼å¨ä¸æµ·ä¸¾è¡ã\n1921å¹´7æ1æ¥ï¼\n1921å¹´7æ23æ¥ï¼\n1921å¹´7æ31æ¥ï¼\n1921å¹´7æ18æ¥ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_537",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nåçé¢å¯¼ä¸»è¦æ¯æ¿æ²»ãææ³åç»ç»é¢å¯¼ãå®æ½åå¯¹å½å®¶åç¤¾ä¼çé¢å¯¼ä¸»è¦è¡¨ç°å¨(    )ã\nå¶å®å¤§æ¿æ¹éï¼\næåºç«æ³å»ºè®®ï¼\næ¨èéè¦å¹²é¨ï¼\nè¿è¡ææ³å®£ä¼ ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_538",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\nå¨ååå¿ç¹å«æ¯é«çº§å¹²é¨è¦æï¼ ï¼ä½ä¸ºæ ¹æ¬æ¿æ²»æå½ã\nå¯¹åå¿ è¯ï¼\nä¸ºååå¿§ï¼\nä¸ºåå°½èï¼\nä¸ºæ°é ç¦ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_539",
    "type": "multiple",
    "answer": [
      0,
      1,
      3
    ],
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\nè¦æ·±å»è®¤è¯åé¢ä¸´çæ§æ¿èéªãï¼ ï¼çé¿ææ§åå¤ææ§ã\næ¹é©å¼æ¾èéªï¼\nå¸åºç»æµèéªï¼\nçæä¿æ¤èéªï¼\nå¤é¨ç¯å¢èéªï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_540",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\nå¢å¼ºååæ¿æ²»çæ´»çï¼   ï¼ï¼èªè§æµå¶ååäº¤æ¢ååå¯¹ååçæ´»çä¾µèï¼è¥é é£æ¸æ°æ­£çè¯å¥½æ¿æ²»çæã\næ¿æ²»æ§ï¼\næ¶ä»£æ§ï¼\nååæ§ï¼\næææ§ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_541",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "å¨ç»ç»ä¸å¥äºåï¼ææ³ä¸ä¹å°±å¥äºåã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_542",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "ææ³å»ºè®¾æ¯åçåºç¡æ§å»ºè®¾ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_543",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "åçææ³è·¯çº¿æ¯ä¸åä»å®éåºåï¼çè®ºèç³»å®éï¼å®äºæ±æ¯ï¼å¨å®è·µä¸­æ£éªççååå±ççã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_544",
    "type": "single",
    "answer": 3,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nç»¼ååæå½éå½åå½¢å¿åæå½åå±æ¡ä»¶ï¼ä»2020å¹´å°æ¬ä¸çºªä¸­å¶å¯ä»¥åä¸ºä¸¤ä¸ªé¶æ®µæ¥å®æãç¬¬äºä¸ªé¶æ®µï¼ä»ï¼       ï¼ï¼å¨åºæ¬å®ç°ç°ä»£åçåºç¡ä¸ï¼åå¥æåäºå¹´ï¼ææå½å»ºæå¯å¼ºæ°ä¸»ææåè°ç¾ä¸½çç¤¾ä¼ä¸»ä¹ç°ä»£åå¼ºå½ã\n2020å¹´å°2035å¹´ï¼\n2025å¹´å°2040å¹´ï¼\n2030å¹´å°2045å¹´ï¼\n2035å¹´å°æ¬ä¸çºªä¸­å¶ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_545",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nåä¹å¤§çä¸»é¢æ¯ï¼ä¸å¿åå¿ï¼ï¼     ï¼ï¼é«ä¸¾ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹ä¼å¤§æå¸ï¼å³èå¨é¢å»ºæå°åº·ç¤¾ä¼ï¼å¤ºåæ°æ¶ä»£ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹ä¼å¤§èå©ï¼ä¸ºå®ç°ä¸­åæ°æä¼å¤§å¤å´çä¸­å½æ¢¦ä¸æå¥æã\nç»§ç»­åè¿ï¼\nç¢è®°ä½¿å½ï¼\næ¹å¾å§ç»ï¼\nç ¥ç ºåè¡ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_546",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå®ç°ä¸­å½æ¢¦å¿é¡»ï¼     ï¼ï¼åªè¦æä»¬ç´§å¯å¢ç»ï¼ä¸ä¼ä¸å¿ï¼ä¸ºå®ç°å±åæ¢¦æ³èå¥æï¼å®ç°æ¢¦æ³çåéå°±æ æ¯å¼ºå¤§ã\nèµ°ä¸­å½éè·¯ï¼\nå¼æ¬ä¸­å½ç²¾ç¥ï¼\nåèä¸­å½åéï¼\næ¹é©å¼æ¾",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_547",
    "type": "single",
    "answer": 3,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nï¼     ï¼åæ äºä¸å®ç¤¾ä¼ä¸äººæ°å¯¹èªèº«çæ´»ç¶æçæåç¶åµåæ»¡æç¨ï¿½ï¿½ï¿½ï¼æ¯è¡¡éç¤¾ä¼åå±çéè¦ææ ï¼ä¹æ¯ä¸­å½æ¢¦å®ç°ç¨åº¦çä»·å¼å°ºåº¦ã\nå½å®¶å¯å¼ºï¼\næ°ææ¯å´ï¼\næ°ä¸»æ³æ²»ï¼\näººæ°å¹¸ç¦ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_548",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næä»¬çï¼     ï¼æå³çâä¸çç¦»ä¸å¼ä¸­å½ï¼ä¸çéè¦ä¸­å½å£°é³âæ¯æ°æçæ¯å´ä¸èªå¼ºä¸æ¯ï¼æ¯åæèµ°ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹æ¿æ²»åå±éè·¯ã\nç»æµå¼ºå½æ¢¦ï¼\næ¿æ²»å¤§å½æ¢¦ï¼\næåå´å½æ¢¦ï¼\nå¤©ä¸å¤§åæ¢¦ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_549",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä»ç°å¨å°2020å¹´ï¼æ¯å¨é¢å»ºæå°åº·ç¤¾ä¼ï¼     ï¼ã\nå³èæï¼\nå³ææï¼\nå³é®æï¼\næ»åæï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_550",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸­å½æ¢¦çä¸»ä½æ¯ï¼   ï¼ãä¸­å½æ¢¦å½æ ¹å°åºæ¯ï¼   ï¼çæ¢¦ï¼ï¼    ï¼æ¯ä¸­å½æ¢¦çåé èåäº«æèã\näººæ°ï¼\næ°æï¼\nå½å®¶ï¼\nç¤¾ä¼ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_551",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ°æ¶ä»£ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹ææ³ï¼æç¡®åæååå±ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹ï¼æ»ä»»å¡æ¯å®ç°ç¤¾ä¼ä¸»ä¹ç°ä»£ååä¸­åæ°æä¼å¤§å¤å´ï¼å¨å¨é¢å»ºæå°åº·ç¤¾ä¼çåºç¡ä¸ï¼åï¼    ï¼å¨æ¬ä¸çºªä¸­å¶å»ºæå¯å¼ºæ°ä¸»ææåè°ç¾ä¸½çç¤¾ä¼ä¸»ä¹ç°ä»£åå¼ºå½ã\nä¸¤æ­¥èµ°ï¼\nä¸æ­¥èµ°ï¼\nåæ­¥èµ°ï¼\näºæ­¥èµ°ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_552",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nåå«å¤§ä»¥æ¥ï¼è±è´«æ»åæåå¾å³å®æ§è¿å±ï¼ï¼     ï¼è´«å°äººå£ç¨³å®è±è´«ï¼è´«å°åççä»ç¾åä¹åç¹äºä¸éå°ç¾åä¹åä»¥ä¸ã\nå­åå¤ä¸ï¼\nä¸åå¤ä¸ï¼\nå«åå¤ä¸ï¼\nä¹åå¤ä¸ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_553",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä»ï¼    ï¼å°ï¼      ï¼ï¼æ¯âä¸¤ä¸ªç¾å¹´âå¥æç®æ çåå²äº¤æ±æã\n2020å¹´   2035å¹´ï¼\nåä¹å¤§   äºåå¤§ï¼\näºåå¤§   äºåä¸å¤§ï¼\n2035å¹´   æ¬ä¸çºªä¸­å¶ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_554",
    "type": "single",
    "answer": 2,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nï¼     ï¼æ¯äººæ°å¹¸ç¦ä¹åºãç¤¾ä¼åè°ä¹æ¬ã\nç»æµï¼\næ¶å¥ï¼\næ°çï¼\næ¿æ²»ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_555",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nåçåä¹å¤§æ¥åæåºï¼åæå¨åå±ä¸­ä¿éåæ¹åæ°çï¼è¦å¨(     )ãèææå»ãä½ææå±ãå¼±æææ¶ä¸ä¸æ­åå¾æ°è¿å±ã\nå¹¼ææè²ãå­¦æææãå³ææå¾ãçææå»ï¼\næè²ãå°±ä¸ãä½æ¿ãæ¶å¥ï¼\nç»æµãæ¿æ²»ãæåãç¤¾ä¼ãæ°çï¼\nè±è´«æ»åãå¥åº·ä¸­å½ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_556",
    "type": "single",
    "answer": 2,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå¨åçåä¹å¤§æ¥åä¸­ï¼âåæå¨åå±ä¸­ä¿éåæ¹åæ°çâè¢«åä¸ºæ°æ¶ä»£åæååå±ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹çï¼      ï¼ä¹ä¸ã\nåºæ¬æ¹éï¼\næ ¹æ¬ä»»å¡ï¼\nåºæ¬æ¹ç¥ï¼\nåºæ¬æ¿ç­ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_557",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ°ä¹æç¼ æ¿ä¹æåï¼ï¼      ï¼æ¯åå±çæ ¹æ¬ç®çã\nç§æå´å½ï¼\nå¢è¿æ°çç¦ç¥ï¼\nå½å¯æ°å¼ºï¼\nç¤¾ä¼åè°ï¼äººæ°å¹¸ç¦å®åº·ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_558",
    "type": "single",
    "answer": 3,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nï¼     ï¼æ¯æå¤§çæ°çã\næè²ï¼\nå»çï¼\nä½æ¿ï¼\nå°±ä¸ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_559",
    "type": "single",
    "answer": 2,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nåä¹å¤§æ¥åæåºï¼åæå¨åå±ä¸­ä¿éåæ¹åæ°çï¼ä¿è¯å¨ä½äººæ°å¨å±å»ºå±äº«åå±ä¸­ææ´å¤ï¼   ï¼ã\nç§¯ææ§ï¼\nåä¸åº¦ï¼\nè·å¾æï¼\nèªä¸»æ§ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_560",
    "type": "multiple",
    "answer": [
      0,
      1,
      2
    ],
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\nâä¸­å½æ¢¦âæï¼    ï¼èä¸ºä¸ä½ï¼æ¯ä¸­åæ°ææ­£å¨ä¸ä»ä¸å¿ãåªåå¥æçå±åçæ³ã\nå½å®¶è¿½æ±ï¼\næ°æåå¾ï¼\näººæ°æç¼ï¼\nä¸çç»ä¸ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_561",
    "type": "multiple",
    "answer": [
      0,
      1,
      2
    ],
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\nä¹ è¿å¹³æ»ä¹¦è®°æåºï¼å®ç°ä¸­å½æ¢¦å¿é¡»ï¼     ï¼ã\nèµ°ä¸­å½éè·¯ï¼\nå¼æ¬ä¸­å½ç²¾ç¥ï¼\nåèä¸­å½åéï¼\nåæç¤¾ä¼ä¸»ä¹éè·¯ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_562",
    "type": "multiple",
    "answer": [
      0,
      1
    ],
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\nä¸­å½ç²¾ç¥æ¯æï¼      ï¼ã\nä»¥ç±å½ä¸»ä¹ä¸ºæ ¸å¿çæ°æç²¾ç¥ï¼\nä»¥æ¹é©åæ°ä¸ºæ ¸å¿çæ¶ä»£ç²¾ç¥ï¼\nä»¥è°è¦å¥æä¸ºæ ¸å¿çé©å½ç²¾ç¥ï¼\nä»¥è§£æ¾ææ³ä¸ºæ ¸å¿çåæ°ç²¾ç¥ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_563",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\nåæå®ååå§é¢å¯¼ãæ¿åºè´è´£ãç¤¾ä¼ååãå¬ä¼åä¸ãæ³æ²»ä¿éçç¤¾ä¼æ²»çä½å¶ï¼æé«ç¤¾ä¼æ²»çï¼      ï¼æ°´å¹³ï¼æ¨è¿ç¤¾ä¼æ²»çç²¾ç»åï¼æé å±å»ºå±æ²»å±äº«çç¤¾ä¼æ²»çæ ¼å±ã\nç¤¾ä¼åï¼\næ³æ²»åï¼\næºè½åï¼\nä¸ä¸åï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_564",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\nå¨ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹æ°æ¶ä»£ï¼ä¿éåæ¹åæ°çä¸»è¦è¡¨ç°å¨ï¼    ï¼ã\nä¼ååå±æè²äºä¸ï¼\næé«å°±ä¸è´¨éåäººæ°æ¶å¥æ°´å¹³ï¼\nå å¼ºç¤¾ä¼ä¿éä½ç³»å»ºè®¾ï¼\nåå³æèµ¢è±è´«æ»åæï¼\nEã\nå®æ½å¥åº·ä¸­å½æç¥ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_565",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\næ¹è¿ç¤¾ä¼æ²»çæ¹å¼å¿é¡»ï¼     ï¼ã\nåæç³»ç»æ²»çï¼\nåæä¾æ³æ²»çï¼\nåææºå¤´æ²»çï¼\nåæç»¼åæ²»çï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_566",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "ä»å¨é¢å»ºæå°åº·ç¤¾ä¼å°åºæ¬å®ç°ç°ä»£åï¼åå°å¨é¢å»ºæç¤¾ä¼ä¸»ä¹ç°ä»£åå¼ºå½ï¼æ¯æ°æ¶ä»£ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹åå±çæç¥å®æã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_567",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "ä¸­å½ç²¾ç¥æ¯åå¿èåçå´å½ä¹é­ï¼å¼ºå½ä¹é­ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_568",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "å®ç°ä¸­å½æ¢¦å°±æ¯å¿é¡»èµ°ä¸­è¥¿ç»åçæ°éè·¯ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_569",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æ¶é¤è´«å°ãæ¹åæ°çãéæ­¥å®ç°å±åå¯è£ï¼æ¯ç¤¾ä¼ä¸»ä¹çæ¬è´¨è¦æ±ï¼æ¯æä»¬åçéè¦ä½¿å½ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_570",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "ä¿éåæ¹åæ°çæ¯ä¸é¡¹é¿æå³æ³¨ï¼æ²¡æç»ç¹ç«ï¼åªæè¿ç»­ä¸æ­çèµ·ç¹ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_571",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "ä¿éåæ¹åæ°çæä¸»è¦çæ¯æé«äººæ°çæ¶å¥æ°´å¹³ï¼æ¶å¥é«äºï¼èªç¶çæ´»å°±å¥½äºã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_572",
    "type": "single",
    "answer": 3,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå³äºä¸­å½å±äº§åãåæ°ä¸»åæ´¾ãäººæ°ä»£è¡¨å¤§ä¼ãäººæ°æ¿åä¹é´å³ç³»çæ­£ç¡®è¡¨è¿°æ¯(ãã)\nåä¸¤èæ¯å½å®¶æºå³ï¼åºè¯¥æ¥ååä¸¤èçé¢å¯¼ï¼\nä¸­å½å±äº§åãåæ°ä¸»åæ´¾æ¯äººæ°æ¿åçç»æé¨åï¼åçº§äººå¤§ä¸­åæä»ä»¬çä»£è¡¨ï¼\näººæ°æ¿åååçº§äººå¤§ä¸ºå¤ååä½ãåæ¿è®®æ¿æä¾äºæ¸ éï¼é½æ¯ç±å½ç»ä¸æçº¿ç»ç»ï¼\nåæ°ä¸»åæ´¾åäººæ°ä»£è¡¨å¤§ä¼æ¥ååçæ¿æ²»é¢å¯¼ï¼äººæ°æ¿åå¯¹ååå½å®¶å¤§æ¿æ¹éåæ¥æ¿æ²»ååä½ç¨ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_573",
    "type": "single",
    "answer": 2,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä»æ¬è´¨ä¸çï¼âä¸¤ä¼âçå±åä¹å¤å¨äº(ãã)\né½æ¯ç±ä¸­å½å±äº§åé¢å¯¼çå½å®¶æºå³ï¼\næåé½æ¯ç±äººæ°æ°ä¸»éä¸¾äº§ççï¼\né½æ¯ç¤¾ä¼ä¸»ä¹æ°ä¸»çéè¦å®ç°å½¢å¼ï¼\né½ä»£è¡¨äººæ°è¡ä½¿å½å®¶ä½ä¸»çå½å®¶æåï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_574",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå®è·µè¡¨æï¼æå½ï¼    ï¼çå½ä½åï¼    ï¼çæ¿ä½ï¼æ¯ä¸­å½äººæ°å¥æçææååå²çéæ©ï¼æ¯éåæå½å½æçå¥½å¶åº¦(ãã)\näººæ°æ°ä¸»ä¸æ¿ãä¸­å½å±äº§åçé¢å¯¼ï¼\näººæ°æ°ä¸»ä¸æ¿ãäººæ°ä»£è¡¨å¤§ä¼å¶åº¦ï¼\nä¸­å½å±äº§åçé¢å¯¼ãäººæ°ä»£è¡¨å¤§ä¼å¶åº¦ï¼\näººæ°ä»£è¡¨å¤§ä¼å¶åº¦ãäººæ°æ°ä¸»ä¸æ¿ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_575",
    "type": "single",
    "answer": 2,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næå½å®è¡æ°æåºåèªæ²»çæ ¸å¿æ¯(ãã)\næ¶é¤æ°æå·®å«ï¼å®ç°æ°æèåï¼\nç»´æ¤é¢åå®æ´åå½å®¶ç»ä¸ï¼\néè¿èªæ²»æºå³è¡ä½¿èªæ²»æï¼\nå°æ°æ°æèå±å°åºçç»æµè½åï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_576",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå¨æå½ï¼äººæ°æ£å¯é¢ä¾ç§æ³å¾è§å®ç¬ç«è¡ä½¿æ£å¯æï¼ä¸åä»»ä½ï¼     ï¼ãç¤¾ä¼å¢ä½åä¸ªäººçå¹²æ¶(ãã)\næåæºå³ï¼\nè¡æ¿æºå³ï¼\nå¸æ³æºå³ï¼\nåçæºå³ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_577",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næå¸äººå¤§å¸¸å§ä¼ä¸¾è¡ä¸é¢è¯¢é®ä¼ï¼å¸ç§æå±ç­11ä¸ªé¨é¨è´è´£äººå°ä¼åç­äºå¸äººå¤§ä»£è¡¨çç°åºæé®ãè¿è¯´æäººå¤§ä»£è¡¨(ãã)\nèªè§æ¥åäººæ°ççç£ï¼\nä»£è¡¨äººæ°çå©çåæå¿è¡ä½¿å½å®¶æåï¼\nç§¯æè¡ä½¿äºææ¡æï¼\nææå³å®å½å®¶åç¤¾ä¼çéå¤§äºé¡¹ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_578",
    "type": "multiple",
    "answer": [
      1,
      2
    ],
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\nèªå¤ä»¥æ¥ï¼æ²»å½å¨æ¿ï¼ä¸ºæ¿å¨äººãéå°å¹³åå¿æ¾æåºï¼âåæ¯æ´ä¸ªç¤¾ä¼çè¡¨çï¼åçåçº§é¢å¯¼åå¿åæ¯å¨åçè¡¨çâï¼ä¹ è¿å¹³åå¿è¡¨ç¤ºï¼âæéè¿é¡»èªèº«ç¡¬ï¼ç»£è±è¦å¾æç»µå·§âãä¸è¿°è§ç¹è¡¨æ(ãã)\nåè¦ææ°ä¸»æ§æ¿ä½ä¸ºåºæ¬æ§æ¿æ¹å¼ï¼\nååå¹²é¨è¦åæ¥åéæ¨¡èä½ç¨ï¼\nåè¦ä¸æ¶ä¿±è¿å°æé«æ§æ¿è½åï¼\nåè¦æåå±ä½ä¸ºæ§æ¿å´å½çç¬¬ä¸è¦å¡ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_579",
    "type": "multiple",
    "answer": [
      3,
      0,
      1,
      2
    ],
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\næå¿æ¿åä¸å¿çµè§å°èåå¼åãæ¿åå§åæ°æç´éè½¦ãçµè§ä¸æ ï¼è®©æå³é¨é¨è´è´£äººé¢å¯¹é¢ç­å¤æ¿åå§åçå¨è¯¢ãæ­¤ä¸¾æå©äº(ãã)\nå¢å¼ºæ¿åå§ååæ¿è®®æ¿çè½åï¼\næ¨è¿å³ç­çæ°ä¸»ååç§å­¦åï¼\næå®½ç¤¾ææ°æçåæ æ¸ éï¼\nå å¼ºå¯¹åæ¿é¨é¨å·¥ä½ççç£ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_580",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\næå½æ¯ç»ä¸çå¤æ°æå½å®¶ï¼å å¼ºæ°æå¢ç»ï¼ç»´æ¤å½å®¶ç»ä¸ï¼æ¯(ãã)\nä¸­åæ°æçæé«å©çï¼\næå½åæäººæ°çå±åæ¿æï¼\nå¢å¼ºæå½ç»¼åå½åçè¦æ±ï¼\næå½å¤çæ°æå³ç³»çæ ¹æ¬ååï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_581",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æ°ä¸»éä¸­å¶æ¯äººæ°ä»£è¡¨å¤§ä¼å¶åº¦çæ ¹æ¬ååã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_582",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "äººæ°ä»£è¡¨å¤§ä¼å¶åº¦æ¯äººæ°å½å®¶ä½ä¸»çéè¦éå¾ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_583",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "äººå¤§ä»£è¡¨å¿é¡»ä»£è¡¨äººæ°çå©çï¼å¯åèç³»ç¾¤ä¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_584",
    "type": "single",
    "answer": 2,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ°æ¶ä»£çèµ·ç¹æ¯ï¼    ï¼ã\nåä¸å±ä¸å¹´ä¸­å¨ä¼ï¼\nååå¤§ï¼\nåå«å¤§ï¼\nåä¹å¤§ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_585",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nç®åæå½ç»æµæ»éç¨³å±ä¸çç¬¬ï¼    ï¼ä½ã\nä¸ï¼\näºï¼\nä¸ï¼\nåï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_586",
    "type": "single",
    "answer": 3,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ°æ¶ä»£æå½ç¤¾ä¼ä¸»è¦çç¾æ¯ï¼    ï¼ã\näººæ°å¯¹äºå»ºç«åè¿çå·¥ä¸å½çè¦æ±åè½åçåä¸å½çç°å®ä¹é´ççç¾ï¼\näººæ°å¯¹äºç»æµæåè¿éåå±çéè¦åå½åçç»æµæåä¸è½æ»¡è¶³äººæ°éè¦çç¶åµä¹é´ççç¾ï¼\näººæ°æ¥çå¢é¿çç©è´¨æåéè¦åè½åçç¤¾ä¼çäº§ä¹é´ççç¾ï¼\näººæ°æ¥çå¢é¿çç¾å¥½çæ´»éè¦åä¸å¹³è¡¡ä¸ååçåå±ä¹é´ççç¾ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_587",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nï¼    ï¼æ¯ä¹ è¿å¹³æ°æ¶ä»£ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹ææ³çæ ¸å¿è¦ä¹ã\nA å»ºè®¾ååå±ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹\nB åææ¹é©åå¼æ¾\nC æå»ºäººç±»å½è¿å±åä½\nD å®ç°ä¼å¤§å¤å´çä¸­å½æ¢¦",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_588",
    "type": "single",
    "answer": 2,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¹ è¿å¹³æ°æ¶ä»£ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹ææ³æéè¦ãææ ¸å¿çåå®¹å°±æ¯åçåä¹å¤§æ¥åæ¦æ¬çï¼    ï¼ã\nâåä¸ªå¨é¢â ï¼\nâäºä½ä¸ä½â ï¼\nâå«ä¸ªæç¡®â ï¼\nâååä¸ªåæâï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_589",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nï¼    ï¼æ¯ä¸ä¸ªå½å®¶ãä¸ä¸ªæ°ï¿½ï¿½åå±ä¸­æ´åºæ¬ãæ´æ·±å»ãæ´æä¹çåéã\nå¯¹å¤å¼æ¾ï¼\næåèªä¿¡ï¼\nåçé¢å¯¼ï¼\nä¾æ³æ²»å½ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_590",
    "type": "single",
    "answer": 3,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nï¼    ï¼æ¯å³å®ååå½å®¶åéå½è¿çæ ¹æ¬åéã\nåéï¼\nç¥è¯åå­ï¼\nå·¥äººï¼\näººæ°ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_591",
    "type": "single",
    "answer": 2,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nåçï¼    ï¼éè¿åç« ä¿®æ­£æ¡ï¼æä¹ è¿å¹³æ°æ¶ä»£ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹ææ³ç¡®ç«ä¸ºåçæå¯¼ææ³ã\nåä¸å¤§ï¼\nåå«å¤§ï¼\nåä¹å¤§ï¼\näºåå¤§ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_592",
    "type": "single",
    "answer": 3,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nï¼    ï¼å±å¨å½äººå¤§ä¸æ¬¡ä¼è®®æä¹ è¿å¹³æ°æ¶ä»£ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹ææ³è½½å¥å®ªæ³ã\nåï¼\nåä¸ï¼\nåäºï¼\nåä¸ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_593",
    "type": "single",
    "answer": 2,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nç®åæå½äººæ°çæ´»æ°´å¹³å·²ç»è¾¾å°äºï¼    ï¼æ¶å¥å½å®¶æ°´å¹³ã\nä¸­ç­åä¸ï¼\nä¸­ç­ï¼\nä¸­åä¸ï¼\né«ç­æ°´å¹³ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_594",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nç®åæå½é«ç­æè²æ¯å¥å­¦çï¼    ï¼ä¸çå¹³åæ°´å¹³ã\né«äºï¼\nä½äºï¼\næ¥è¿ï¼\næå¹³ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_595",
    "type": "single",
    "answer": 2,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nç®åæå½å±æ°å¹³åé¢æå¯¿å½ï¼    ï¼ä¸çå¹³åæ°´å¹³ã\né«äºï¼\nä½äºï¼\næ¥è¿ï¼\næå¹³ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_596",
    "type": "single",
    "answer": 2,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¹ è¿å¹³æ°æ¶ä»£ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹ææ³çåå®¹ä¸­ï¼ï¼    ï¼æ¯åç­æä¹ççé®é¢ã\nâåä¸ªå¨é¢âï¼\nâäºä½ä¸ä½âï¼\nâå«ä¸ªæç¡®âï¼\nâååä¸ªåæâï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_597",
    "type": "single",
    "answer": 3,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¹ è¿å¹³æ°æ¶ä»£ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹ææ³çåå®¹ä¸­ï¼ï¼    ï¼æ¯åç­æä¹åçé®é¢ã\nâåä¸ªå¨é¢âï¼\nâäºä½ä¸ä½âï¼\nâå«ä¸ªæç¡®âï¼\nâååä¸ªåæâï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_598",
    "type": "single",
    "answer": 3,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ°æ¶ä»£åçå»ºè®¾å¼ºè°ä»¥ï¼    ï¼å»ºè®¾ä¸ºç»é¢ã\nææ³ï¼\nç»ç»ï¼\nçºªå¾ï¼\næ¿æ²»ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_599",
    "type": "single",
    "answer": 3,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næå½ç®åäººåå½åçäº§æ»å¼åªç¸å½äºä¸çå¹³åæ°´å¹³çï¼   ï¼%å·¦å³ã\n50ï¼\n60ï¼\n70ï¼\n80ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_600",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      4
    ],
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\nåä¹å¤§æ¥åä¸­æåºçâåä¸ªä¼å¤§âæ¯ï¼    ï¼ã\nä¼å¤§äºä¸ï¼\nä¼å¤§å·¥ç¨ï¼\nä¼å¤§æäºï¼\nä¼å¤§çè®ºï¼\nEã\nä¼å¤§æ¢¦æ³ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_601",
    "type": "multiple",
    "answer": [
      1,
      2,
      3,
      4
    ],
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\nåæåä¸­å¤®æå¨åéä¸­ç»ä¸é¢å¯¼ï¼è¦å¢å¼ºçåä¸ªæè¯æ¯ï¼    ï¼\nA æ¹é©æè¯\nB æ¿æ²»æè¯\nC å¤§å±æè¯\nD æ ¸å¿æè¯\nEã\nEçé½æè¯",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_602",
    "type": "multiple",
    "answer": [
      0,
      2,
      3
    ],
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\nä¹ è¿å¹³æ°æ¶ä»£ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹ææ³æ¯ï¼   ï¼çéä¸­ä½ç°ã\nåçæå¿ï¼\nä¸ªäººæå¿ï¼\nå½å®¶æå¿ï¼\näººæ°æå¿ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_603",
    "type": "multiple",
    "answer": [
      0,
      1,
      2
    ],
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\nåå¨æ°æ¶æçå¼ºåç®æ æ¯å»ºè®¾ä¸æ¯ï¼    ï¼çäººæ°åéã\nå¬åææ¥ï¼\nä½é£ä¼è¯ï¼\nè½æèä»ï¼\nè§æ¨¡åºå¤§ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_604",
    "type": "multiple",
    "answer": [
      1,
      2,
      3
    ],
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\nå±äºæ°åå±çå¿µçåå®¹æ¯ï¼    ï¼ã\næ¹é©ï¼\nåæ°ï¼\nåè°ï¼\nå±äº«ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_605",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "åªæç¤¾ä¼ä¸»ä¹æè½æä¸­å½ï¼åªææ¹é©å¼æ¾æè½åå±ä¸­å½ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_606",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "ä¹ è¿å¹³æ°æ¶ä»£ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹ææ³æ¯21ä¸çºªçé©¬åæä¸»ä¹ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_607",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "ä¹ è¿å¹³æ°æ¶ä»£ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹ææ³æ¯å¨åä¹å¤§ä¹åéæ­¥å½¢æååå±èµ·æ¥çã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_608",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æ°æ¶ä»£çåå²èµ·ç¹æ¯åçåå«å¤§ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_609",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "ç®åå½±åäººä»¬ç¾å¥½çæ´»éè¦çä¸»è¦å ç´ æ¯è½åçç¤¾ä¼çäº§ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_610",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "åæååå±ä¸­å½ç¹è²ç¤¾ä¼ä¸»ä¹æ¯å»ºå½ä»¥æ¥æä»¬åå¨é¨çè®ºåå®è·µçé²æä¸»é¢ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_611",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næå½è¦è¾¾å°åå­ä¸ªåºæ¬çæµææ çå¤å°ï¼æè½è¿å¥å°åº·æ°´å¹³ï¼ï¼ã\n60%å·¦å³ï¼\n70%å·¦å³ï¼\n80%å·¦å³ï¼\n90%å·¦å³ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_612",
    "type": "single",
    "answer": 3,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸ºä»ä¹æ¯æ³½ä¸è¯´âä»ï¼åº·æä¸ºï¼æ²¡æä¹ä¸å¯è½æ¾å°ä¸æ¡å°è¾¾å¤§åçè·¯âï¼ï¼\nå½å®¶æ¿ç­çåå¶ï¼\nç¤¾ä¼å ç´ çå¹²æ°ï¼\nå°å»ºææ³çæ®çï¼\nåå²æ¡ä»¶çå¶çº¦ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_613",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nï¼ï¼éå°å¹³ç¬¬ä¸æ¬¡ä½¿ç¨äºâå°åº·âçæ¦å¿µ\n1978å¹´ï¼\n1979å¹´ï¼\n1980å¹´ï¼\n1981å¹´ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_614",
    "type": "single",
    "answer": 2,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nï¼ï¼æ¶åæç¡®æåºï¼æä»¬è¦å¨21ä¸çºªçå¤´20å¹´ï¼éä¸­åéï¼å¨é¢å»ºè®¾æ ååå äº¿äººå£çæ´é«æ°´å¹³çå°åº·ç¤¾ä¼ã\nåäºå±ä¸ä¸­å¨ä¼ï¼\nåäºå±äºä¸­å¨ä¼ï¼\nä¸­å±åå­å¤§ï¼\nä¸­å±åå«å¤§ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_615",
    "type": "single",
    "answer": 3,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸ååªä¸é¡¹ä¸æ¯å¨é¢å°åº·çæ¶µä¹ï¼ï¼ã\nç¤¾ä¼è¦çé¢åæ¯å¨é¢çï¼\nåå±çå¿µæ¯å¨æ°çï¼\nè¦ççäººç¾¤æ¯å¨é¢çï¼\næåè¦ççæ¯å¨é¢çï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_616",
    "type": "single",
    "answer": 2,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nåäºå±äºä¸­å¨ä¼æåºä»æ°ä¸çºªå¼å§ï¼æå½å°è¿å¥ï¼ï¼\nåºæ¬è¾¾å°å°åº·ç¤¾ä¼ï¼\næ»ä½è¾¾å°å°åº·ç¤¾ä¼ï¼\nå¨é¢å»ºè®¾å°åº·ç¤¾ä¼ï¼\nå¨é¢å»ºæå°åº·ç¤¾ä¼ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_617",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå¤æ­æ¹é©åä¸åå·¥ä½æ¯éå¾å¤±çæ åæ¯ï¼ï¼\nâä¸¤ä¸ªå¡æ¯âæ åï¼\nâä¸ä¸ªæå©äºâï¼\nåé¡¹åºæ¬ååï¼\nå®è·µï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_618",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næå½çæ¹é©é¦åå¨ï¼ï¼æå¼åºå¹\nåå¸ï¼\nåæï¼\nå½æä¼ä¸ï¼\nå¤èµä¼ä¸ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_619",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nç¤¾ä¼ä¸»ä¹ç¤¾ä¼çåå±å¨åæ¯ï¼ï¼\næ¹é©ï¼\nåé¡¹åºæ¬ååï¼\nç»æµå»ºè®¾ï¼\näººæ°åé¨çç¾ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_620",
    "type": "single",
    "answer": 2,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ¹é©çç®æ æ¯ï¼ï¼\nå»ºç«å¸åºç»æµï¼\nå»ºç«æ°ä¸»æ¿æ²»ï¼\nè§£æ¾çäº§åãåå±çäº§åï¼\nå»ºç«åæ»¡æ´»åçå½æä¼ä¸ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_621",
    "type": "single",
    "answer": 2,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ¹é©æ¯ä¸­å½çåä¸åºé©å½æ¯å ä¸ºï¼ï¼\næ¹é©å¸¦æ¥äºç»æµåå±ï¼\næ¹é©æ¯ä¸ºäºæ«é¤çäº§ååå±éç¢ï¼è§£æ¾çäº§åï¼\næ¹é©æ¯ç¤¾ä¼ä¸»ä¹å¶åº¦çèªæå®åååå±ï¼\næ¹é©æ¯å¯¹åæå¶åº¦çæ ¹æ¬æ§åé©ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_622",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nï¼ï¼æ¯è§£å³ä¸­å½ç°å®é®é¢çæ ¹æ¬éå¾ï¼\nå¨é¢æ·±åæ¹é©ï¼\nåå±ç»æµï¼\nå³æ³¨æ°çï¼\nåå±æè²ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_623",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nï¼ï¼æ¯ç»æµç¤¾ä¼åå±çå¼ºå¤§å¨åã\næ¹é©ï¼\nåå±ï¼\nç¨³å®ï¼\nç»æµï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_624",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nï¼ï¼æ¯è§£å³ä¸åç»æµç¤¾ä¼é®é¢çå³é®ã\næ¹é©ï¼\nåå±ï¼\nç¨³å®ï¼\næ°çï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_625",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå¨é¢å»ºæå°åº·ç¤¾ä¼ï¼æ´éè¦ãæ´é¾åå°çæ¯ï¼ï¼ã\nå¨é¢ï¼\nåè°ï¼\nå¯æç»­ï¼\nç§å­¦åå±ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_626",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nçæææçæ ¸å¿æ¯åæï¼ï¼ã\näººä¸èªç¶åè°åå±ï¼\nä¿æ¤èªç¶ï¼\nå©ç¨èªç¶ï¼\nåå±ç»æµï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_627",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\nå¨é¢æ·±åæ¹é©è¦æ»åæ¶é©ï¼å¿é¡»åææ­£ç¡®çææ³æ¹æ³ï¼ä¸æ­æ¢ç´¢åææ¡å¨é¢æ·±åæ¹é©çåå¨è§å¾ï¼ç¹å«æ¯è¦ææ¡åå¤çå¥½å¨é¢æ·±åæ¹é©ä¸­çä¸äºéå¤§å³ç³»ãï¼ï¼\nå¤çå¥½è§£æ¾ææ³åå®äºæ±æ¯çå³ç³»ï¼\nå¤çå¥½é¡¶å±è®¾è®¡åæ¸çç³å¤´è¿æ²³çå³ç³»ï¼\nå¤çå¥½æ´ä½æ¨è¿åéç¹çªç ´çå³ç³»ï¼\nå¤çå¥½èå­è¦å¤§ãæ­¥å­è¦ç¨³çå³ç³»ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_628",
    "type": "multiple",
    "answer": [
      0,
      1
    ],
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\n1956å¹´åï¼æå½ç¤¾ä¼çåºæ¬çç¾æ¯ï¼ï¼\nçäº§å³ç³»åçäº§åççç¾ï¼\nä¸å±å»ºç­åç»æµåºç¡ççç¾ï¼\nå·¥äººé¶çº§åèµäº§é¶çº§ççç¾ï¼\näººæ°å¯¹äºç¤¾ä¼ç»æµæååå±çéè¦ä¸ç¤¾ä¼ç»æµæååå±ä¸è½æ»¡è¶³äººæ°éè¦çç¶åµä¹é´ççç¾ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_629",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\nå¦ä½å³èå¨é¢å»ºæå°åº·ç¤¾ä¼ï¼\nåå³æå¥½é²èåè§£éå¤§é£é©æ»åæï¼\nåå³æå¥½ç²¾ç¡®æ¶è´«æ»åæï¼\nåå³æå¥½æ±¡æé²æ²»æ»åæï¼\nç¡®ä¿ç»æµç¤¾ä¼æç»­å¥åº·åå±ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_630",
    "type": "multiple",
    "answer": [
      0,
      1,
      2
    ],
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\né¢å¯¹èµæºçº¦æè¶ç´§ãç¯å¢æ±¡æä¸¥éãçæç³»ç»éåçä¸¥å³»å½¢å¿ï¼å¿é¡»æ ç«ï¼ï¼ççæææçå¿µï¼ä¿æ¤èªç¶çæç³»ç»ï¼ç»´æ¤äººä¸èªç¶ä¹é´å½¢æççå½å±åä½ã\nå°éèªç¶ï¼\né¡ºåºèªç¶ï¼\nä¿æ¤èªç¶ï¼\nç±æ¤èªç¶ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_631",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\nå¦ä½å½¢æäººä¸èªç¶åè°åå±æ°æ ¼å±ï¼\næèçº¦èµæºæ¾å¨é¦ä½ï¼\nåæä¿æ¤ä¼åãèªç¶æ¢å¤ä¸ºä¸»ï¼\nçåæ¨è¿ç»¿è²åå±ãå¾ªç¯åå±ãä½ç¢³åå±ï¼\nå½¢æèçº¦èµæºåä¿æ¤ç¯å¢çç©ºé´æ ¼å±ãäº§ä¸ç»æãçäº§æ¹å¼ãçæ´»æ¹å¼ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_632",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\nå¦ä½å å¿«çæææä½å¶æ¹é©ï¼\næ¨è¿ç»¿è²åå±ï¼\nçåè§£å³çªåºç¯å¢é®é¢ï¼\nå å¤§çæç³»ç»ä¿æ¤ååº¦ï¼\næ¹é©çæç¯å¢çç®¡ä½å¶ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_633",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "1990å¹´ä¸­å¤®åä¸å±ä¸ä¸­å¨ä¼ä¸­ï¼å¯¹å°åº·ç¤¾ä¼è¿è¡äºå®ä¹ï¼å¶å®äºåå­ä¸ªåºæ¬çæµææ åå°åº·ä¸´çå¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_634",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "å°åº·ä¸è¯ææ©æ¥æºäºå¤ä»£ãè¯ç»Â·å¤§éÂ·æ°å³ãä¸­çâæ°äº¦å³æ­¢ï¼æ±å¯å°åº·âã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_635",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "ä¸­å±åå«å¤§æåºå¨é¢å»ºè®¾å°åº·ç¤¾ä¼ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_636",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "ä¸­åææåæ¥å¼ºè°å¤©äººåä¸ãå°éèªç¶ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_637",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "äººå èªç¶èçï¼äººä¸èªç¶æ¯ä¸ç§å±çå³ç³»ï¼å¯¹èªç¶çä¼¤å®³æç»ä¼ä¼¤åäººç±»èªèº«ï¼è¿ä¸ªå®¢è§è§å¾è°ä¹æ æ³ææã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_638",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "çæç¯å¢æ²¡ææ¿ä»£åï¼ç¨ä¹ä¸è§ï¼å¤±ä¹é¾å­ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_639",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\näººç±»å½è¿å±åä½çå¿µçæ ¸å¿æ¯ï¼ï¼\nåä½ä¸å±èµ¢ï¼\nå©çå±äº«ï¼\nåå®¹ï¼\nå¯æç»­åå±ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_640",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\näººç±»å½è¿å±åä½çå¿µçåºæ¬ååæ¯ï¼ï¼\nåä½ä¸å±èµ¢ï¼\nè´£ä»»å±æä¸å©çå±äº«ï¼\nåå®¹ï¼\nå¯æç»­åå±ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_641",
    "type": "single",
    "answer": 2,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå¨é¢æ¨è¿ä¸­å½ç¹è²å¤§å½å¤äº¤ï¼è¦å½¢æå¨æ¹ä½ãå¤å±æ¬¡ãï¼ï¼çå¤äº¤å¸å±ã\nåºåæ§ï¼\nå®½é¢åï¼\nç«ä½åï¼\nå¤æ¸ éï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_642",
    "type": "single",
    "answer": 2,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næå»ºäººç±»å½è¿å±åä½çåºæ¬éå¾ä¸åæ¬ï¼ï¼\næå»ºæ°åå½éå³ç³»ï¼\nèµ°åå¹³åå±éè·¯ï¼\nå å¼ºåå¤å»ºè®¾ï¼\nåé©å½éç§©åºåå¨çæ²»çä½ç³»ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_643",
    "type": "single",
    "answer": 2,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næ¨å¨å»ºè®¾ç¸äºå°éãå¬å¹³æ­£ä¹ãï¼ï¼çæ°åå½éå³ç³»ï¼æ¯éå¾äººç±»å½è¿å±åä½çåºæ¬è·¯å¾ã\næä¹åå¹³ï¼\næç»­ç¨³å®ï¼\nåä½å±èµ¢ï¼\nå¼æ¾åå®¹ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_644",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\næå»ºæ°åå½éå³ç³»çåææ¯ï¼ï¼\nå¬å¹³æ­£ä¹ï¼\nç¸äºå°éï¼\näºå©äºæ ï¼\nåå¿ååï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_645",
    "type": "single",
    "answer": 3,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nä¸­å½å¨è¾¹å¤äº¤çåºæ¬æ¹éæ¯åæä¸é»ä¸ºåãä»¥é»ä¸ºä¼´ï¼åæç¦é»ãå®é»ãå¯é»ï¼çªåºä½ç°äº²ãï¼ï¼æ ãå®¹ççå¿µã\nåï¼\nä¿¡ï¼\nä¹ï¼\nè¯ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_646",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[åéé¢]\nå¯¹äºæå½å¤äº¤å·¥ä½æ¥è®²ï¼ï¼ï¼æ¯å³é®ã\nå¤§å½ï¼\nå¤è¾¹ï¼\nå¨è¾¹ï¼\nåå±ä¸­å½å®¶ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_647",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\nâä¸å¸¦ä¸è·¯âä»¥æ¿ç­æ²éåï¼ï¼ä¸ºä¸»è¦åå®¹æ¥å å¼ºå½éåä½\nè®¾æ½èéï¼\nè´¸æçéï¼\nèµéèéï¼\næ°å¿ç¸éï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_648",
    "type": "multiple",
    "answer": [
      0,
      1,
      2
    ],
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\nâä¸å¸¦ä¸è·¯âä»¥ï¼ï¼ä¸ºå»ºè®¾åå\nå±åï¼\nå±å»ºï¼\nå±äº«ï¼\nèªä¸»ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_649",
    "type": "multiple",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "options": [
      "",
      "",
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "[å¤éé¢]\nå¶çº¦ä¸çåå¹³ä¸åå±çä¸»è¦å ç´ åæ¬ï¼ï¼ç­\né¸æä¸»ä¹ï¼\næç«¯ä¸»ä¹ï¼\nææä¸»ä¹ï¼\nå·ææç»´ï¼",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_650",
    "type": "single",
    "answer": 1,
    "options": [
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "å»ºè®¾âä¸å¸¦ä¸è·¯âçååæ¯åæ°çï¼å æ­¤æ éæªå®èåå½å®ªç« çå®æ¨åååã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_651",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "ä¸­å½ç¹è²å¤§å½å¤äº¤è¦æ¨å¨æå»ºæ°åå½éå³ç³»ï¼æ¨å¨æå»ºäººç±»å½è¿å±åä½ã",
    "difficulty": 1,
    "explanation": ""
  },
  {
    "id": "imp_1783048665246_652",
    "type": "single",
    "answer": 0,
    "options": [
      "",
      ""
    ],
    "subject": "毛概",
    "category": "单选题",
    "question": "æå½çå¤äº¤å·¥ä½åºå½ç¢ç¢ææ¡æå¡æ°æå¤å´ãä¿è¿äººç±»è¿æ­¥è¿æ¡ä¸»çº¿ã",
    "difficulty": 1,
    "explanation": ""
  }
];
