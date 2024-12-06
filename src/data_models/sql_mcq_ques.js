const sql_mcq = {
    1: {
      question: "Which SQL statement is used to retrieve data from a database?",
      options: ["SELECT", "GET", "FETCH", "RETRIEVE"],
      correctOption: 0,
      explanation: "In SQL, the ⁠ SELECT ⁠ statement is used to retrieve data from a database."
    },
    2: {
      question: "What does the ⁠ COUNT() ⁠ function do in SQL?",
      options: ["Counts the number of rows", "Counts the number of columns", "Counts unique values", "Counts the average value"],
      correctOption: 0,
      explanation: "The ⁠ COUNT() ⁠ function in SQL returns the number of rows that match a specified condition."
    },
    3: {
      question: "Which SQL clause is used to sort the result set in ascending or descending order?",
      options: ["ORDER BY", "GROUP BY", "SORT", "FILTER BY"],
      correctOption: 0,
      explanation: "In SQL, the ⁠ ORDER BY ⁠ clause is used to sort the result set in ascending or descending order."
    },
    4: {
      question: "What is the default sorting order in SQL when using ⁠ ORDER BY ⁠?",
      options: ["Ascending", "Descending", "Random", "Unsorted"],
      correctOption: 0,
      explanation: "By default, the ⁠ ORDER BY ⁠ clause sorts the result set in ascending order."
    },
    5: {
      question: "Which of the following SQL statements is used to delete a record from a table?",
      options: ["DELETE", "REMOVE", "DROP", "CLEAR"],
      correctOption: 0,
      explanation: "In SQL, the ⁠ DELETE ⁠ statement is used to delete a record from a table."
    },
    6: {
      question: "Which SQL statement is used to update a record in a table?",
      options: ["UPDATE", "SET", "MODIFY", "CHANGE"],
      correctOption: 0,
      explanation: "The ⁠ UPDATE ⁠ statement is used in SQL to modify an existing record in a table."
    },
    7: {
      question: "Which of the following is a correct syntax for creating a table in SQL?",
      options: [
        "CREATE TABLE table_name (column1 datatype, column2 datatype, ...);",
        "CREATE TABLE (table_name column1 datatype, column2 datatype, ...);",
        "TABLE CREATE table_name (column1 datatype, column2 datatype, ...);",
        "CREATE (table_name column1, column2, ...);"
      ],
      correctOption: 0,
      explanation: "The correct syntax to create a table in SQL is ⁠ CREATE TABLE table_name (column1 datatype, column2 datatype, ...); ⁠."
    },
    8: {
      question: "Which SQL statement is used to add a new column to an existing table?",
      options: ["ALTER TABLE", "UPDATE TABLE", "INSERT COLUMN", "ADD COLUMN"],
      correctOption: 0,
      explanation: "To add a new column to an existing table, we use the ⁠ ALTER TABLE ⁠ statement in SQL."
    },
    9: {
      question: "Which SQL keyword is used to prevent duplicate records in a result set?",
      options: ["DISTINCT", "UNIQUE", "NO DUPLICATES", "FILTER"],
      correctOption: 0,
      explanation: "The ⁠ DISTINCT ⁠ keyword in SQL is used to return only unique (non-duplicate) values."
    },
    10: {
      question: "Which of the following is NOT a type of JOIN in SQL?",
      options: ["INNER JOIN", "OUTER JOIN", "LEFT JOIN", "TOP JOIN"],
      correctOption: 3,
      explanation: "In SQL, ⁠ INNER JOIN ⁠, ⁠ OUTER JOIN ⁠, and ⁠ LEFT JOIN ⁠ are valid join types, but ⁠ TOP JOIN ⁠ is not."
    }
  };

  export default sql_mcq;