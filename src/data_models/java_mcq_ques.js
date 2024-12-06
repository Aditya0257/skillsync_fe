const java_mcq = {
    1: {
      question: "What is the default value of a ⁠ boolean ⁠ variable in Java?",
      options: ["true", "false", "0", "null"],
      correctOption: 1,
      explanation: "In Java, the default value of a ⁠ boolean ⁠ variable is ⁠ false ⁠."
    },
    2: {
      question: "Which of the following is the correct way to declare an array in Java?",
      options: ["int[] arr;", "int arr[];", "int arr;", "Both 1 and 2"],
      correctOption: 3,
      explanation: "In Java, arrays can be declared using either ⁠ int[] arr; ⁠ or ⁠ int arr[]; ⁠, both are valid syntaxes."
    },
    3: {
      question: "Which keyword is used to prevent a class from being subclassed in Java?",
      options: ["final", "static", "abstract", "private"],
      correctOption: 0,
      explanation: "The ⁠ final ⁠ keyword in Java is used to prevent a class from being subclassed or a method from being overridden."
    },
    4: {
      question: "What is the return type of the ⁠ hashCode() ⁠ method in Java?",
      options: ["String", "int", "Object", "boolean"],
      correctOption: 1,
      explanation: "In Java, the ⁠ hashCode() ⁠ method returns an ⁠ int ⁠ value, which is used in hash-based collections like ⁠ HashMap ⁠."
    },
    5: {
      question: "Which method is used to start a thread in Java?",
      options: ["start()", "run()", "execute()", "begin()"],
      correctOption: 0,
      explanation: "In Java, the ⁠ start() ⁠ method is used to begin the execution of a thread. The ⁠ run() ⁠ method contains the code that runs when the thread starts."
    },
    6: {
      question: "Which of the following is true about the ⁠ String ⁠ class in Java?",
      options: ["String is mutable", "String is immutable", "String cannot be used as a key in a HashMap", "String is a primitive data type"],
      correctOption: 1,
      explanation: "In Java, the ⁠ String ⁠ class is immutable, meaning its value cannot be changed after it is created."
    },
    7: {
      question: "What does the ⁠ super ⁠ keyword refer to in Java?",
      options: ["The parent class", "The current class", "A method in the current class", "An instance of the current class"],
      correctOption: 0,
      explanation: "In Java, the ⁠ super ⁠ keyword is used to refer to the parent class, especially when calling parent class constructors or methods."
    },
    8: {
      question: "Which of the following is NOT an access modifier in Java?",
      options: ["private", "protected", "public", "secure"],
      correctOption: 3,
      explanation: "In Java, the access modifiers are ⁠ private ⁠, ⁠ protected ⁠, and ⁠ public ⁠. ⁠ secure ⁠ is not a valid access modifier."
    },
    9: {
      question: "Which collection class in Java allows duplicate elements?",
      options: ["HashSet", "TreeSet", "ArrayList", "LinkedHashSet"],
      correctOption: 2,
      explanation: "In Java, ⁠ ArrayList ⁠ allows duplicate elements, unlike ⁠ HashSet ⁠ and ⁠ TreeSet ⁠ which do not."
    },
    10: {
      question: "Which of the following is the correct syntax to declare a method in Java?",
      options: ["methodName()", "void methodName", "public void methodName()", "public methodName()"],
      correctOption: 2,
      explanation: "In Java, a method is declared with the return type, followed by the method name and parentheses. The correct syntax is ⁠ public void methodName() ⁠."
    }
  };

  export default java_mcq;