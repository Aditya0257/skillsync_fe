const aws_mcq = {
    1: {
      question: "Which AWS service is primarily used for hosting static websites?",
      options: {
        1: "Amazon S3",
        2: "AWS Lambda",
        3: "Amazon EC2",
        4: "Amazon RDS",
      },
      correctAnswer: 1,
      explanation:
        "Amazon S3 (Simple Storage Service) can host static websites by storing and serving static files like HTML, CSS, and JavaScript.",
    },
    2: {
      question: "Which service helps you monitor and audit your AWS resources and API calls?",
      options: {
        1: "AWS CloudTrail",
        2: "Amazon CloudWatch",
        3: "AWS Inspector",
        4: "AWS Config",
      },
      correctAnswer: 1,
      explanation:
        "AWS CloudTrail records API calls and activity across your AWS account for auditing and compliance purposes.",
    },
    3: {
      question: "What is the primary purpose of Amazon RDS?",
      options: {
        1: "To provide scalable storage for static files",
        2: "To offer managed database services",
        3: "To deploy serverless applications",
        4: "To monitor network traffic",
      },
      correctAnswer: 2,
      explanation:
        "Amazon RDS (Relational Database Service) provides managed database services for relational databases like MySQL, PostgreSQL, and SQL Server.",
    },
    4: {
      question: "Which AWS service is used for deploying and managing containers?",
      options: {
        1: "AWS ECS",
        2: "AWS Lambda",
        3: "Amazon S3",
        4: "AWS CloudFormation",
      },
      correctAnswer: 1,
      explanation:
        "AWS ECS (Elastic Container Service) is designed to deploy and manage containers at scale in a highly available manner.",
    },
    5: {
      question: "Which of the following AWS services is serverless?",
      options: {
        1: "Amazon EC2",
        2: "AWS Lambda",
        3: "Amazon RDS",
        4: "AWS Auto Scaling",
      },
      correctAnswer: 2,
      explanation:
        "AWS Lambda is a serverless compute service that automatically executes your code in response to events without managing servers.",
    },
    6: {
      question: "Which storage class in S3 is most cost-effective for infrequently accessed data?",
      options: {
        1: "S3 Standard",
        2: "S3 Standard-IA",
        3: "S3 One Zone-IA",
        4: "S3 Glacier",
      },
      correctAnswer: 2,
      explanation:
        "S3 Standard-IA (Infrequent Access) is optimized for infrequently accessed data with lower storage costs and higher access costs.",
    },
    7: {
      question: "What does Amazon CloudFront provide?",
      options: {
        1: "File storage for static websites",
        2: "Content delivery with low latency",
        3: "Database hosting for dynamic websites",
        4: "Logging and monitoring services",
      },
      correctAnswer: 2,
      explanation:
        "Amazon CloudFront is a content delivery network (CDN) that delivers data, videos, and applications with low latency and high transfer speeds.",
    },
    8: {
      question: "Which service would you use to migrate an existing database to AWS?",
      options: {
        1: "AWS DMS",
        2: "Amazon RDS",
        3: "AWS Glue",
        4: "Amazon Redshift",
      },
      correctAnswer: 1,
      explanation:
        "AWS DMS (Database Migration Service) is specifically designed to migrate databases to AWS securely and with minimal downtime.",
    },
    9: {
      question: "What does Amazon Route 53 primarily provide?",
      options: {
        1: "Load balancing",
        2: "Domain name system (DNS) services",
        3: "File storage",
        4: "Firewall protection",
      },
      correctAnswer: 2,
      explanation:
        "Amazon Route 53 is a scalable DNS web service that translates domain names into IP addresses and routes traffic globally.",
    },
    10: {
      question: "Which AWS service is best suited for analyzing vast amounts of data in a data warehouse?",
      options: {
        1: "AWS Glue",
        2: "Amazon Athena",
        3: "Amazon Redshift",
        4: "Amazon EMR",
      },
      correctAnswer: 3,
      explanation:
        "Amazon Redshift is a fast and scalable data warehouse solution that helps analyze large datasets with SQL-based queries.",
    },
  };

  export default aws_mcq;