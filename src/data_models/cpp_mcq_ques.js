const cpp_mcq = {
    1: {
      question: "What is the size of a ⁠ char ⁠ data type in C++?",
      options: ["1 byte", "2 bytes", "4 bytes", "Depends on the system"],
      correctOption: 0,
      explanation: "In C++, the size of a ⁠ char ⁠ is always 1 byte, regardless of the system architecture."
    },
    2: {
      question: "Which of the following is the correct way to declare a pointer in C++?",
      options: ["int ptr;", "pointer int ptr;", "int ptr;", "int* ptr;"],
      correctOption: 0,
      explanation: "In C++, pointers are declared using the ⁠ * ⁠ symbol. ⁠ int *ptr; ⁠ is the correct syntax."
    },
    3: {
      question: "What does the ⁠ new ⁠ keyword do in C++?",
      options: ["Allocates memory for a variable", "Deletes a dynamically allocated object", "Declares a pointer", "Creates an array"],
      correctOption: 0,
      explanation: "The ⁠ new ⁠ keyword in C++ is used to dynamically allocate memory for a variable or object during runtime."
    },
    4: {
      question: "What is the correct way to handle an exception in C++?",
      options: ["try-catch block", "throw-catch block", "catch-throw block", "exception-catch block"],
      correctOption: 0,
      explanation: "In C++, exceptions are handled using a ⁠ try-catch ⁠ block, where ⁠ try ⁠ is used to define code that may throw exceptions, and ⁠ catch ⁠ is used to handle those exceptions."
    },
    5: {
      question: "Which of the following is NOT a feature of object-oriented programming in C++?",
      options: ["Encapsulation", "Polymorphism", "Inheritance", "Procedural programming"],
      correctOption: 3,
      explanation: "Procedural programming is a different paradigm and is not a feature of object-oriented programming (OOP). OOP in C++ focuses on encapsulation, polymorphism, and inheritance."
    },
    6: {
      question: "What is the purpose of the ⁠ virtual ⁠ keyword in C++?",
      options: ["To declare a function that can be overridden in a derived class", "To declare a function that can never be overridden", "To create a constant value", "To define a global variable"],
      correctOption: 0,
      explanation: "The ⁠ virtual ⁠ keyword in C++ is used to declare a function that can be overridden in a derived class, enabling runtime polymorphism."
    },
    7: {
      question: "Which operator is used to access a member of a class through a pointer in C++?",
      options: [".", "->", "::", "#"],
      correctOption: 1,
      explanation: "In C++, the ⁠ -> ⁠ operator is used to access members of a class through a pointer. The ⁠ . ⁠ operator is used with objects."
    },
    8: {
      question: "What is the output of the following code?\n`int x = 5; cout << ++x;`",
      options: ["5", "6", "Error", "None of the above"],
      correctOption: 1,
      explanation: "The ⁠ ++x ⁠ is the pre-increment operator. It increments the value of ⁠ x ⁠ before it is used, so the output will be ⁠ 6 ⁠."
    },
    9: {
      question: "What does the ⁠ this ⁠ pointer in C++ represent?",
      options: ["It is a pointer to the current object", "It is used to declare static variables", "It is used to handle exceptions", "It is a memory address for the current class"],
      correctOption: 0,
      explanation: "The ⁠ this ⁠ pointer in C++ refers to the current object instance in a class. It is an implicit pointer passed to all non-static member functions."
    },
    10: {
      question: "Which of the following data types are allowed as template arguments in C++?",
      options: ["Primitive types", "Classes", "User-defined types", "All of the above"],
      correctOption: 3,
      explanation: "In C++, template arguments can be primitive types, classes, or user-defined types. Templates are a feature that allows generic programming."
    }
  };

  export default cpp_mcq;