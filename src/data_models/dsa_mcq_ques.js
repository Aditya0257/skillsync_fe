const dsa_mcq = {
    1: {
      question: "Which data structure uses LIFO (Last In, First Out) order?",
      options: ["Queue", "Stack", "Linked List", "Array"],
      correctOption: 1,
      explanation: "A Stack uses LIFO order, meaning the last element added is the first one to be removed."
    },
    2: {
      question: "Which of the following is a characteristic of a binary search tree (BST)?",
      options: [
        "The left subtree of a node contains only nodes with values greater than the node’s value.",
        "Each node can have at most two children.",
        "The left subtree contains only nodes with values greater than the node’s value.",
        "The tree must be balanced."
      ],
      correctOption: 1,
      explanation: "In a binary search tree, the left subtree contains nodes with smaller values, and the right subtree contains nodes with greater values."
    },
    3: {
      question: "Which of the following is a stable sorting algorithm?",
      options: ["Quick Sort", "Heap Sort", "Merge Sort", "Selection Sort"],
      correctOption: 2,
      explanation: "Merge Sort is a stable sorting algorithm, meaning it preserves the relative order of records with equal keys."
    },
    4: {
      question: "What is the time complexity of accessing an element in a hash table?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
      correctOption: 0,
      explanation: "In a hash table, accessing an element (given a key) is O(1) on average, assuming a good hash function and minimal collisions."
    },
    5: {
      question: "Which of the following algorithms is used for finding the shortest path in a graph with non-negative edge weights?",
      options: ["Dijkstra's Algorithm", "Bellman-Ford Algorithm", "Floyd-Warshall Algorithm", "Kruskal's Algorithm"],
      correctOption: 0,
      explanation: "Dijkstra's Algorithm is used to find the shortest path in a graph with non-negative edge weights."
    },
    6: {
      question: "Which of the following is not a type of linked list?",
      options: ["Singly Linked List", "Doubly Linked List", "Circular Linked List", "Binary Linked List"],
      correctOption: 3,
      explanation: "A 'Binary Linked List' is not a type of linked list. Common types are Singly Linked List, Doubly Linked List, and Circular Linked List."
    },
    7: {
      question: "What is the time complexity of searching for an element in a binary search tree (BST) in the worst case?",
      options: ["O(log n)", "O(n)", "O(n log n)", "O(1)"],
      correctOption: 1,
      explanation: "In the worst case, searching in a binary search tree (BST) takes O(n) time, which occurs when the tree is unbalanced."
    },
    8: {
      question: "Which data structure is used to implement recursion?",
      options: ["Queue", "Stack", "Array", "Graph"],
      correctOption: 1,
      explanation: "Recursion is implemented using a stack, where each function call is pushed onto the stack until it completes."
    },
    9: {
      question: "Which of the following is the time complexity of the quicksort algorithm in the average case?",
      options: ["O(n)", "O(n^2)", "O(log n)", "O(n log n)"],
      correctOption: 3,
      explanation: "The average case time complexity of quicksort is O(n log n). In the worst case, it is O(n^2), but this is rare with good pivot selection."
    },
    10: {
      question: "Which of the following is true for a heap data structure?",
      options: [
        "It is always a complete binary tree.",
        "It allows fast insertion but not deletion.",
        "It is a linear data structure.",
        "It supports both O(1) insertion and O(log n) deletion."
      ],
      correctOption: 0,
      explanation: "A heap is always a complete binary tree, which ensures that the tree is balanced and operations like insertion and deletion can be done efficiently."
    }
  };

  export default dsa_mcq;