const mern_mcq = {
    1: {
      question: "Which of the following is used to define the schema for a MongoDB collection in a MERN application?",
      options: ["Mongoose", "Express", "React", "Node.js"],
      correctOption: 0,
      explanation: "Mongoose is a popular ODM (Object Data Modeling) library for MongoDB and Node.js. It provides a schema-based solution to model application data."
    },
    2: {
      question: "What is the role of Express.js in a MERN application?",
      options: [
        "To handle database queries",
        "To create the user interface",
        "To build the server-side application",
        "To interact with the file system"
      ],
      correctOption: 2,
      explanation: "Express.js is a minimal and flexible Node.js web application framework used for building server-side applications."
    },
    3: {
      question: "In a MERN stack application, which of the following is used to manage the state of a React application?",
      options: ["Redux", "Mongoose", "Axios", "Express"],
      correctOption: 0,
      explanation: "Redux is a state management library that helps manage and centralize the state of a React application."
    },
    4: {
      question: "Which HTTP method is typically used to retrieve data from a server in a MERN application?",
      options: ["POST", "GET", "PUT", "DELETE"],
      correctOption: 1,
      explanation: "The GET method is used to retrieve data from the server, whereas POST, PUT, and DELETE are used for creating, updating, and deleting resources, respectively."
    },
    5: {
      question: "Which library is commonly used in the MERN stack to make HTTP requests from the client to the server?",
      options: ["Express", "Axios", "Redux", "Mongoose"],
      correctOption: 1,
      explanation: "Axios is a promise-based HTTP client for JavaScript used to make requests from the client-side React application to the server."
    },
    6: {
      question: "In a MERN application, what does ⁠ useEffect ⁠ in React primarily handle?",
      options: [
        "Component styling",
        "Side effects like data fetching",
        "Defining routes",
        "Connecting to the database"
      ],
      correctOption: 1,
      explanation: "⁠ useEffect ⁠ is a React hook that manages side effects like API calls, subscriptions, and manually updating the DOM."
    },
    7: {
      question: "Which of the following is true about MongoDB in the MERN stack?",
      options: [
        "It is a relational database",
        "It stores data in JSON-like documents",
        "It is used to create APIs",
        "It is a front-end framework"
      ],
      correctOption: 1,
      explanation: "MongoDB is a NoSQL database that stores data in JSON-like documents, making it highly flexible and scalable."
    },
    8: {
      question: "How do you define a route in Express.js?",
      options: [
        "⁠ app.get('/route', callback) ⁠",
        "⁠ app.route('/route', callback) ⁠",
        "⁠ express.get('/route', callback) ⁠",
        "⁠ router.add('/route', callback) ⁠"
      ],
      correctOption: 0,
      explanation: "In Express.js, you define a route using ⁠ app.get('/route', callback) ⁠ or similar methods like ⁠ app.post ⁠ for other HTTP methods."
    },
    9: {
      question: "What is the purpose of ⁠ package.json ⁠ in a MERN application?",
      options: [
        "To define the structure of the database",
        "To manage project dependencies",
        "To handle routing in the application",
        "To manage user authentication"
      ],
      correctOption: 1,
      explanation: "⁠ package.json ⁠ is a file that contains metadata about the project and lists its dependencies, scripts, and other configurations."
    },
    10: {
      question: "Which of the following is used to protect routes in a MERN stack application?",
      options: ["Middleware", "Hooks", "Schemas", "Stylesheets"],
      correctOption: 0,
      explanation: "Middleware in Express.js is used to protect routes by adding authentication and authorization checks before allowing access."
    }
  };

  export default mern_mcq;