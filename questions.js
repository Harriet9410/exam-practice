var QUESTIONS = [
  {
    id: 1,
    type: "single",
    category: "示例-计算机基础",
    difficulty: 1,
    question: "HTTP协议默认使用的端口号是多少？",
    options: ["21", "22", "80", "443"],
    answer: 2,
    explanation: "HTTP默认端口为80，HTTPS默认端口为443，FTP为21，SSH为22。"
  },
  {
    id: 2,
    type: "multiple",
    category: "示例-计算机基础",
    difficulty: 2,
    question: "以下哪些是面向对象编程的特征？",
    options: ["封装", "继承", "递归", "多态"],
    answer: [0, 1, 3],
    explanation: "面向对象三大特征：封装、继承、多态。递归是一种算法思想，不属于OOP特征。"
  },
  {
    id: 3,
    type: "fill",
    category: "示例-计算机基础",
    difficulty: 1,
    question: "TCP/IP模型共分为____层。",
    answer: "4",
    explanation: "TCP/IP模型分为四层：网络接口层、网络层、传输层、应用层。"
  },
  {
    id: 4,
    type: "qa",
    category: "示例-操作系统",
    difficulty: 2,
    question: "简述进程和线程的区别。",
    answer: "1. 进程是资源分配的基本单位，线程是CPU调度的基本单位。\n2. 进程拥有独立的地址空间，线程共享所属进程的地址空间。\n3. 线程切换开销比进程小。\n4. 进程间通信需要IPC机制，线程间可直接共享数据。",
    explanation: ""
  },
  {
    id: 5,
    type: "judge",
    category: "示例-数据结构",
    difficulty: 1,
    question: "二叉搜索树的中序遍历序列一定是有序的。",
    answer: true,
    explanation: "二叉搜索树的性质：左子树<根<右子树，中序遍历正是按此顺序访问，因此结果一定是有序序列。"
  }
];
