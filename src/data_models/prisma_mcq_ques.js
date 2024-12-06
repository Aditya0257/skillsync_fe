const prisma_mcq = {
    1: {
      question: "What is Prisma?",
      options: ["A database", "An ORM for Node.js", "A query language", "A type-safe database migration tool"],
      correctOption: 1,
      explanation: "Prisma is an ORM (Object-Relational Mapping) for Node.js and TypeScript, designed to help developers interact with databases in a type-safe manner."
    },
    2: {
      question: "Which query language does Prisma use for interacting with databases?",
      options: ["SQL", "GraphQL", "Prisma Query Language (PQL)", "Prisma Client"],
      correctOption: 3,
      explanation: "Prisma uses Prisma Client to interact with the database. It provides a programmatic interface for querying databases in a type-safe manner."
    },
    3: {
      question: "Which of the following is NOT a feature of Prisma?",
      options: ["Migrations", "Type-safe query generation", "Real-time database syncing", "Database seeding"],
      correctOption: 2,
      explanation: "Prisma provides features like migrations, type-safe queries, and database seeding but does not support real-time database syncing directly."
    },
    4: {
      question: "Which command is used to generate Prisma Client in the Prisma workflow?",
      options: ["prisma generate", "prisma migrate", "prisma deploy", "prisma sync"],
      correctOption: 0,
      explanation: "The 'prisma generate' command generates Prisma Client based on the schema you define in the Prisma schema file."
    },
    5: {
      question: "In Prisma, what is the role of the Prisma schema file?",
      options: ["It stores migration history", "It defines the database schema", "It handles query generation", "It manages database backups"],
      correctOption: 1,
      explanation: "The Prisma schema file defines your database schema, including models and relationships, and is used to generate Prisma Client and migrations."
    },
    6: {
      question: "Which of the following is a supported database for Prisma?",
      options: ["MongoDB", "PostgreSQL", "SQLite", "All of the above"],
      correctOption: 3,
      explanation: "Prisma supports several databases including PostgreSQL, SQLite, and MongoDB."
    },
    7: {
      question: "How does Prisma handle migrations?",
      options: ["By using raw SQL scripts", "By using automatic migrations on every change", "By using the Prisma Migrate CLI", "By manual schema updates"],
      correctOption: 2,
      explanation: "Prisma Migrate is used to manage database schema migrations. It provides a CLI to apply migrations and track changes to the database schema."
    },
    8: {
      question: "What is Prisma Client?",
      options: ["A database tool", "A set of generated query functions", "A CLI tool", "A migration manager"],
      correctOption: 1,
      explanation: "Prisma Client is a set of auto-generated query functions that enable you to interact with your database in a type-safe manner from your application code."
    },
    9: {
      question: "What is a common alternative to Prisma for Node.js applications?",
      options: ["Sequelize", "MongoDB", "GraphQL", "TypeORM"],
      correctOption: 0,
      explanation: "Sequelize and TypeORM are both alternatives to Prisma. They are also ORMs for Node.js, providing different features and capabilities."
    },
    10: {
      question: "In Prisma, how do you define a relationship between two models?",
      options: ["Using SQL JOIN statements", "Using foreign keys in the Prisma schema", "Using TypeScript interfaces", "By defining a query function"],
      correctOption: 1,
      explanation: "In Prisma, relationships between models are defined using foreign keys in the Prisma schema, where you use ⁠ @relation ⁠ to define the relationship between two models."
    }
  };

  export default prisma_mcq;