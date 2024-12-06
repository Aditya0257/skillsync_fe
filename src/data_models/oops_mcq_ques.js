const oops_mcq = {
    1: {
      question: "Which of the following is not a feature of Object-Oriented Programming?",
      options: ["Inheritance", "Encapsulation", "Polymorphism", "Compilation"],
      correctOption: 3,
      explanation: "Compilation is a feature of programming languages, not specific to Object-Oriented Programming. OOP focuses on features like inheritance, encapsulation, and polymorphism."
    },
    2: {
      question: "What is the main purpose of encapsulation in OOP?",
      options: [
        "To improve performance",
        "To hide implementation details",
        "To allow multiple inheritance",
        "To enable dynamic method invocation"
      ],
      correctOption: 1,
      explanation: "Encapsulation hides the implementation details of a class and protects the integrity of its data by restricting direct access."
    },
    3: {
      question: "Which of the following allows objects of different classes to be treated as objects of a common superclass?",
      options: ["Abstraction", "Polymorphism", "Encapsulation", "Inheritance"],
      correctOption: 1,
      explanation: "Polymorphism allows objects of different classes to be treated as objects of a common superclass, enabling dynamic method invocation."
    },
    4: {
      question: "Which OOP concept allows a derived class to override a method in its base class?",
      options: ["Abstraction", "Encapsulation", "Polymorphism", "Inheritance"],
      correctOption: 2,
      explanation: "Polymorphism allows a derived class to override a method defined in its base class, providing specific implementations."
    },
    5: {
      question: "What is an abstract class in OOP?",
      options: [
        "A class with no methods",
        "A class that cannot be instantiated",
        "A class with only static methods",
        "A class with all methods defined"
      ],
      correctOption: 1,
      explanation: "An abstract class is one that cannot be instantiated and is designed to be a base class for other classes. It may contain abstract methods that must be implemented by derived classes."
    },
    6: {
      question: "Which of the following is an example of dynamic polymorphism?",
      options: [
        "Overloading methods in the same class",
        "Overriding a method in a derived class",
        "Using global variables",
        "Accessing private members of a class"
      ],
      correctOption: 1,
      explanation: "Dynamic polymorphism is achieved through method overriding, where a method in a derived class provides a specific implementation of a method defined in its base class."
    },
    7: {
      question: "What is the purpose of a constructor in OOP?",
      options: [
        "To define a class blueprint",
        "To initialize objects of a class",
        "To destroy objects of a class",
        "To overload methods"
      ],
      correctOption: 1,
      explanation: "A constructor is a special method used to initialize objects of a class. It is automatically called when an object is created."
    },
    8: {
      question: "Which keyword is used to inherit a class in C++?",
      options: ["super", "base", "inherits", "public"],
      correctOption: 3,
      explanation: "In C++, the ⁠ public ⁠, ⁠ protected ⁠, or ⁠ private ⁠ access specifier is used to inherit a class, indicating the level of accessibility of the base class members in the derived class."
    },
    9: {
      question: "Which of these is an example of composition in OOP?",
      options: [
        "A Car class having an Engine object",
        "Overriding a method in the Car class",
        "Using public inheritance to define a Car class",
        "A Car class with a static method"
      ],
      correctOption: 0,
      explanation: "Composition refers to creating an object that contains other objects. For example, a Car class having an Engine object is composition."
    },
    10: {
      question: "Which of the following best defines polymorphism in OOP?",
      options: [
        "Writing programs in multiple programming languages",
        "Having multiple methods with the same name but different implementations",
        "Hiding internal implementation details",
        "Combining two classes into one"
      ],
      correctOption: 1,
      explanation: "Polymorphism in OOP allows methods with the same name to have different implementations, such as method overloading or method overriding."
    }
  };

  export default oops_mcq;