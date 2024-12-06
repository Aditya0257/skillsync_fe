const cn_mcq = {
    1: {
      question: "Which protocol is used to find the hardware address of a local device on a network?",
      options: {
        1: "IP",
        2: "DNS",
        3: "ARP",
        4: "RARP",
      },
      correctAnswer: 3,
      explanation:
        "ARP (Address Resolution Protocol) is used to map an IP address to its corresponding hardware (MAC) address within a local network.",
    },
    2: {
      question: "What does the subnet mask 255.255.255.0 indicate?",
      options: {
        1: "A Class A network",
        2: "A Class B network",
        3: "A Class C network",
        4: "A Class D network",
      },
      correctAnswer: 3,
      explanation:
        "The subnet mask 255.255.255.0 corresponds to a Class C network, which allows for up to 256 IP addresses (254 usable addresses).",
    },
    3: {
      question: "What layer of the OSI model does the TCP protocol operate on?",
      options: {
        1: "Transport Layer",
        2: "Network Layer",
        3: "Session Layer",
        4: "Application Layer",
      },
      correctAnswer: 1,
      explanation:
        "TCP (Transmission Control Protocol) operates at the Transport Layer of the OSI model, providing reliable communication and data segmentation.",
    },
    4: {
      question: "What is the purpose of the DHCP protocol?",
      options: {
        1: "To assign IP addresses automatically",
        2: "To translate domain names into IP addresses",
        3: "To monitor network traffic",
        4: "To provide error-free communication",
      },
      correctAnswer: 1,
      explanation:
        "DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses and other network configuration parameters to devices on a network.",
    },
    5: {
      question: "Which type of routing algorithm uses the shortest path tree concept?",
      options: {
        1: "Distance Vector",
        2: "Link State",
        3: "Hybrid",
        4: "Dynamic",
      },
      correctAnswer: 2,
      explanation:
        "Link State routing algorithms use the shortest path tree concept by gathering complete network topology information to determine the best path.",
    },
    6: {
      question: "What does a router primarily operate on in the OSI model?",
      options: {
        1: "Data Link Layer",
        2: "Network Layer",
        3: "Transport Layer",
        4: "Physical Layer",
      },
      correctAnswer: 2,
      explanation:
        "Routers operate at the Network Layer of the OSI model, making decisions about packet forwarding based on IP addresses.",
    },
    7: {
      question: "Which protocol is used to securely transfer files over a network?",
      options: {
        1: "FTP",
        2: "SFTP",
        3: "TFTP",
        4: "SMTP",
      },
      correctAnswer: 2,
      explanation:
        "SFTP (Secure File Transfer Protocol) provides secure file transfer using SSH (Secure Shell) for encryption.",
    },
    8: {
      question: "What is the primary function of a firewall in a computer network?",
      options: {
        1: "To enhance network speed",
        2: "To prevent unauthorized access",
        3: "To encrypt network traffic",
        4: "To assign IP addresses",
      },
      correctAnswer: 2,
      explanation:
        "A firewall acts as a security barrier to prevent unauthorized access to or from a private network.",
    },
    9: {
      question: "What does the term 'latency' refer to in networking?",
      options: {
        1: "The speed of data transfer",
        2: "The delay in data transmission",
        3: "The total number of packets lost",
        4: "The bandwidth of a connection",
      },
      correctAnswer: 2,
      explanation:
        "Latency refers to the delay experienced during data transmission from the source to the destination.",
    },
    10: {
      question: "Which addressing scheme is used by IPv6?",
      options: {
        1: "32-bit addressing",
        2: "48-bit addressing",
        3: "64-bit addressing",
        4: "128-bit addressing",
      },
      correctAnswer: 4,
      explanation:
        "IPv6 uses a 128-bit addressing scheme, providing a significantly larger address space than IPv4.",
    },
  };

  export default cn_mcq;