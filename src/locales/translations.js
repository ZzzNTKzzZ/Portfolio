export const translations = {
  en: {
    navbar: {
      home: "Home",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      education: "Education",
      goals: "Goals",
      contact: "Contact",
      downloadCv: "Download CV"
    },
    footer: {
      crafted: "© 2024 NTK. Crafted with Cyber-Fidelity.",
      phone: "+84 899 714 487"
    },
    home: {
      hero: {
        hi: "Hi, I'm",
        name: "Nguyen Tuan Khanh",
        roles: [
          "Software Engineer",
          "Full-Stack Developer",
          "Competitive Programmer"
        ],
        desc: "A passionate Software Engineering student dedicated to building high-performance, maintainable web applications and solving complex algorithmic challenges.",
        viewProjects: "View Projects",
        getInTouch: "Get In Touch"
      },
      focus: {
        tag: "How I Spend My Energy",
        title: "My Personal Core Focus",
        desc: "As a developer, I don't spread myself evenly — I invest my time deliberately. Here's how I currently distribute my focus across the engineering areas that define who I am and where I'm heading.",
        items: [
          {
            label: "Backend Systems",
            value: 50,
            icon: "dns",
            description: "Designing and building scalable REST & GraphQL APIs, microservice architectures, and database schemas that stay reliable at scale. Deep focus on performance, security, and system observability.",
            chips: ["Node.js", "NestJS", "PostgreSQL", "Redis", "REST", "JWT"]
          },
          {
            label: "Full-Stack Development",
            value: 35,
            icon: "deployed_code",
            description: "Delivering complete products from interactive React UIs to server-side logic — with a strong eye for UX, responsive design, and seamless data flow across the entire stack.",
            chips: ["React", "Next.js", "TypeScript", "Prisma", "Tailwind"]
          },
          {
            label: "Data Engineering",
            value: 15,
            icon: "analytics",
            description: "Building reliable ETL pipelines, data warehousing solutions, and analytical platforms. Experienced in exploratory data analysis and applying ML models to generate business value from raw datasets.",
            chips: ["Python", "Pandas", "Scikit-Learn", "SQL", "EDA", "Spark"]
          }
        ]
      },
      skills: {
        title: "Technical Skills",
        desc: "A comprehensive overview of my technical stack and engineering proficiencies.",
        items: [
          {
            icon: "code",
            title: "Programming Languages",
            items: ["TypeScript", "JavaScript", "Python", "Java", "C/C++", "SQL"]
          },
          {
            icon: "monitor",
            title: "Frontend Development",
            items: ["React.js", "React Native", "Next.js", "HTML5", "CSS3", "Tailwind CSS"]
          },
          {
            icon: "dns",
            title: "Backend Development",
            items: ["Node.js", "Express.js", "NestJS", "RESTful APIs", "JWT Auth", "Socket.IO"]
          },
          {
            icon: "database",
            title: "Databases",
            items: ["PostgreSQL", "MySQL", "MongoDB", "Prisma ORM", "Mongoose"]
          },
          {
            icon: "psychology",
            title: "Data & AI",
            items: ["Data Analysis", "Preprocessing", "EDA", "Machine Learning"]
          },
          {
            icon: "build",
            title: "Tools",
            items: ["Git", "GitHub", "Docker", "Postman"]
          }
        ]
      },
      projects: {
        title: "Featured Projects",
        tfDesc: "A scalable task management system featuring real-time synchronization, role-based access control, drag-and-drop workflows, and robust backend services for team productivity.",
        eloraDesc: "A full-stack e-commerce application built with scalability and performance in mind, featuring secure authentication, efficient product management, and an optimized user experience.",
        houseDesc: "Applied Linear Regression to predict residential property prices using a structured dataset of over 1,400 records, focusing on data preprocessing, exploratory analysis, feature engineering, and model evaluation.",
        caseStudy: "View Case Study",
        repositories: "View Repositories"
      },
      experience: {
        title: "Experience",
        teamTitle: "VKU ICPC & Olympic Informatics Team",
        teamPeriod: "2024 – Present",
        teamDesc: "Core member participating in regional and national programming competitions. Mastering algorithms, data structures, and complex problem-solving.",
        timeline: "Full timeline"
      },
      education: {
        title: "Education",
        school: "Vietnam-Korea University",
        degree: "Bachelor of IT",
        gpa: "GPA: 3.0 / 4.0",
        desc: "Specializing in Software Engineering. Actively involved in technical clubs and research initiatives.",
        profile: "Full profile"
      },
      principles: {
        title: "Engineering Principles",
        desc: "The core values that guide my technical decision making and development process.",
        items: [
          {
            icon: "clean_hands",
            title: "Maintainable Code",
            desc: "Writing clean, self-documenting code that scales with team size and complexity."
          },
          {
            icon: "view_quilt",
            title: "Scalable Architecture",
            desc: "Designing systems that handle growth through modularity and efficient data patterns."
          },
          {
            icon: "touch_app",
            title: "User Experience",
            desc: "Prioritizing the end-user by ensuring fast load times and intuitive interactions."
          },
          {
            icon: "psychology",
            title: "Continuous Learning",
            desc: "Staying at the frontier of technology to implement the most effective solutions."
          }
        ]
      },
      goals: {
        tag: "Career Roadmap",
        title: "Future Goals",
        amp: "&",
        guidance: "Guidance",
        subtitle: "A vision of where I am heading—spanning distributed systems, cloud infrastructure, data engineering, and intelligent applications.",
        visionTitle: "My Career Vision",
        visionRole: "Software Engineer · Backend & Data Specialist",
        p1: "My career goal is to become a Software Engineer specializing in scalable backend systems, data platforms, and intelligent applications. Building upon my experience in full-stack development, I aim to deepen my knowledge of distributed systems, cloud infrastructure, data engineering, and machine learning.",
        p2: "In the coming years, I plan to gain hands-on experience with large-scale data processing, data pipelines, analytics platforms, and AI-driven solutions. My objective is to combine strong software engineering principles with data-centric technologies to build systems that are reliable, efficient, and capable of generating meaningful business insights.",
        p3: "Through continuous learning, competitive programming, and real-world projects, I strive to grow into an engineer who can contribute across the entire technology stack—from application development and system architecture to data and AI solutions.",
        pillars: [
          {
            icon: "hub",
            title: "Distributed Systems",
            desc: "Designing fault-tolerant, highly available architectures capable of handling millions of concurrent operations.",
            chips: ["Kafka", "gRPC", "Microservices"]
          },
          {
            icon: "cloud_upload",
            title: "Cloud Infrastructure",
            desc: "Leveraging cloud-native tooling for scalable deployments, CI/CD automation, and infrastructure-as-code.",
            chips: ["AWS", "Kubernetes", "Terraform"]
          },
          {
            icon: "account_tree",
            title: "Data Engineering",
            desc: "Building robust data pipelines and analytics platforms that transform raw data into actionable intelligence.",
            chips: ["Spark", "Airflow", "dbt"]
          },
          {
            icon: "model_training",
            title: "AI & ML Systems",
            desc: "Integrating machine learning models into production systems to enable intelligent, data-driven decisions.",
            chips: ["PyTorch", "MLflow", "LLMs"]
          }
        ],
        roadmapTitle: "Learning Roadmap",
        roadmap: [
          {
            phase: "Phase 01",
            period: "2025 – 2026",
            title: "Deepen Backend & Systems Knowledge",
            desc: "Master advanced algorithms, system design patterns, and distributed computing fundamentals. Contribute to open-source backend projects.",
            tags: ["System Design", "Algorithms", "Open Source"]
          },
          {
            phase: "Phase 02",
            period: "2026 – 2027",
            title: "Data Engineering & Cloud Platforms",
            desc: "Build production-grade data pipelines, earn cloud certifications (AWS/GCP), and develop expertise in orchestration and analytics platforms.",
            tags: ["Data Pipelines", "Cloud Certs", "Analytics"]
          },
          {
            phase: "Phase 03",
            period: "2027 – 2028",
            title: "AI-Driven Systems Integration",
            desc: "Integrate ML models into production systems, explore LLM applications, and build intelligent data products that generate business value.",
            tags: ["MLOps", "LLM Apps", "AI Products"]
          }
        ]
      },
      contact: {
        title: "Let's Build Something Together",
        subtitle: "I'm currently looking for new opportunities and collaborations.",
        labelName: "Name",
        labelEmail: "Email",
        labelMsg: "Message",
        placeholderName: "John Doe",
        placeholderEmail: "john@example.com",
        placeholderMsg: "Tell me about your project...",
        sending: "Sending...",
        send: "Send Message",
        success: "✓ Message sent successfully!",
        failed: "✗ Failed to send message. Please try again."
      }
    },
    education: {
      tag: "Academic Profile",
      title: "VKU — Bachelor of Software Engineering",
      desc: "Forging technical mastery through rigorous study and hands-on architecture. Currently pursuing a comprehensive degree in Software Engineering with a focus on modern distributed systems.",
      gpaLabel: "Cumulative GPA",
      focusTitle: "Academic Focus Grid",
      frontiersTitle: "Current Learning Frontiers",
      campusLife: "Campus Life",
      lab1: "Advanced Computing Labs",
      peerCollab: "Peer Collaboration",
      lab2: "Innovation Workshops",
      courses: [
        {
          icon: "architecture",
          title: "Software Engineering",
          desc: "Core methodologies of software lifecycle management, architectural patterns, and system design."
        },
        {
          icon: "database",
          title: "Database Systems",
          desc: "Relational modeling, SQL optimization, indexing strategies, and normalization techniques."
        },
        {
          icon: "account_tree",
          title: "Data Structures",
          desc: "Implementation and analysis of complex structures: heaps, graphs, and balanced trees."
        },
        {
          icon: "terminal",
          title: "Algorithms",
          desc: "Computational complexity (Big O), sorting, searching, and dynamic programming."
        },
        {
          icon: "layers",
          title: "OOP",
          desc: "Encapsulation, inheritance, and polymorphism in Java and C++ environments."
        },
        {
          icon: "language",
          title: "Web Development",
          desc: "Modern frontend architectures, responsive design, and client-server protocols."
        }
      ],
      frontiers: [
        {
          icon: "stacks",
          title: "Full-Stack Excellence",
          desc: "Mastering the integration between complex React ecosystems and high-throughput Node.js environments."
        },
        {
          icon: "dns",
          title: "Backend & DB Design",
          desc: "Architecting scalable microservices and exploring NoSQL scaling strategies for modern applications."
        },
        {
          icon: "psychology",
          title: "ML Fundamentals",
          desc: "Bridging the gap between software engineering and intelligence with linear algebra and Python-based modeling."
        },
        {
          icon: "analytics",
          title: "Data Engineering & Analytics",
          desc: "Exploring data pipelines, ETL processes, data warehousing, and transforming raw data into actionable business insights."
        }
      ]
    },
    experience: {
      tag: "Career Timeline",
      title: "Technical Journey",
      desc: "Documenting a trajectory of algorithmic rigor and technical problem-solving. From competitive programming to enterprise-scale engineering.",
      timeline: [
        {
          period: "2024 – 2025",
          title: "VKU ICPC & Olympic Informatics Team",
          bullets: [
            "Participated in intensive ICPC and NOI preparation programs focused on algorithmic problem solving.",
            "Applied graph algorithms including BFS, DFS, tree traversal, shortest path, and connectivity problems.",
            "Strengthened skills in dynamic programming, knapsack optimization, divide-and-conquer, and advanced data structures."
          ]
        },
        {
          period: "Present",
          title: "Open to Internship Opportunities",
          desc: "Currently seeking internship opportunities in Software Engineering, Backend Development, Full-Stack Development, and Data Engineering to contribute, learn, and grow in professional environments."
        }
      ],
      ctaTitle: "Interested in a technical collaboration?",
      ctaDesc: "I am currently open to internship opportunities and specialized research projects in algorithmic optimization.",
      contactMe: "Contact Me",
      viewRepo: "View Repository"
    },
    taskflow: {
      tag: "SaaS Case Study",
      title: "TaskFlow: Team Collaboration &",
      subtitle: "Personal Task Management",
      desc: "A full-stack project management platform designed to help teams organize tasks, collaborate efficiently, and track project progress through a flexible Kanban workflow.",
      viewLive: "View Live Project",
      viewGit: "GitHub Repository",
      overview: "Overview",
      overviewDesc: "TaskFlow is a full-stack project management application inspired by modern collaboration platforms. It enables users to manage projects through Workspaces, Boards, Lists, and Cards while supporting authentication, role management, task assignment, and progress tracking.",
      roleLabel: "ROLE",
      roleVal: "Full-Stack Developer",
      timelineLabel: "TIMELINE",
      timelineVal: "4 Months",
      platformLabel: "PLATFORM",
      platformVal: "Web & Mobile",
      typeLabel: "TYPE",
      typeVal: "Personal Project",
      techTitle: "Technology",
      impactTitle: "Project Impact",
      achTitle: "Project Achievements",
      archTitle: "System Architecture",
      apiSecTitle: "API Architecture & Routing",
      secTitle: "Security & Access Control",
      coreTitle: "Core Features",
      perfTitle: "Performance Optimization",
      perfSub: "Before vs After metrics showing core architectural improvements.",
      stateTitle: "State & Data Lifecycle",
      stateSub: "Step-by-step transaction flow of main application actions.",
      challTitle: "Engineering Challenges",
      resTitle: "System Resilience & Error Recovery",
      screensTitle: "Application Screens",
      learnTitle: "Key Learnings",
      back: "Back to Portfolio",
      recoveryLabel: "Recovery Strategy",
      deployNotice: {
        title: "Project Not Deployed",
        message: "This project is currently not deployed live. Would you like to view the source code on GitHub instead?",
        goToGithub: "Go to GitHub",
        close: "Close"
      },
      metrics: [
        { label: "Total APIs", value: "51" },
        { label: "Database Tables", value: "18" },
        { label: "Protected Routes", value: "46" },
        { label: "Avg API Latency", value: "85ms" },
        { label: "UI Response Time", value: "<50ms" },
        { label: "Avg Payload Size", value: "120KB" }
      ],
      impacts: [
        "Reduced perceived latency from ~300ms → <50ms",
        "Eliminated O(N) reorder operations in core workflow",
        "Designed scalable multi-entity relational system"
      ],
      achievements: [
        "17,973+ LOC full-stack TypeScript system",
        "51 REST API endpoints designed",
        "18 relational database tables modeled",
        "O(1) drag-and-drop optimization implemented",
        "46 protected backend routes",
        "Optimistic UI system with <50ms response time"
      ],
      nodes: [
        { label: "CLIENT", sub: "React Native" },
        { label: "API SERVER", sub: "Node.js" },
        { label: "DATABASE", sub: "PostgreSQL" }
      ],
      apiDesign: [
        "RESTful structure with resource-based routing",
        "Consistent /workspace/:id pattern",
        "Modular controller-service-repository separation",
        "JWT protected endpoints (46/51)"
      ],
      security: [
        "JWT Access + Refresh token system",
        "4-level RBAC (OWNER, ADMIN, MEMBER, VIEWER)",
        "Middleware-based route protection",
        "Secure token storage (Expo SecureStore)"
      ],
      features: [
        {
          icon: "view_kanban",
          title: "Scalable Kanban System",
          desc: "Supports Workspaces, Boards, Lists, Cards with drag-and-drop reordering across 18 database entities."
        },
        {
          icon: "group",
          title: "Role-Based Collaboration",
          desc: "4-tier RBAC system (OWNER, ADMIN, MEMBER, VIEWER) protecting 46 secured API endpoints."
        },
        {
          icon: "api",
          title: "REST API Architecture",
          desc: "Built with 51 endpoints across Auth, Workspace, Board, Card, and Activity modules."
        },
        {
          icon: "database",
          title: "Database Design",
          desc: "18 PostgreSQL tables designed with Prisma ORM and normalized relational structure."
        },
        {
          icon: "bolt",
          title: "Optimistic UI Engine",
          desc: "EventBus-driven UI updates reducing perceived latency to <50ms."
        },
        {
          icon: "history",
          title: "Audit & Activity System",
          desc: "Full system-wide activity tracking with indexed queries across board, card, and user actions."
        }
      ],
      performance: [
        {
          title: "Drag & Drop Optimization",
          before: "O(N) list reorder",
          after: "O(1) fractional indexing"
        },
        {
          title: "UI Responsiveness",
          before: "Blocking API calls",
          after: "Optimistic UI + rollback"
        },
        {
          title: "State Sync",
          before: "Manual refresh",
          after: "EventBus-driven updates"
        }
      ],
      flows: [
        {
          title: "Create Card Flow",
          steps: [
            "User Action",
            "Optimistic UI",
            "API Request",
            "DB Tx",
            "Success/Rollback"
          ]
        },
        {
          title: "Board Update Flow",
          steps: [
            "Drag & Drop",
            "State Update",
            "API Sync",
            "DB Write",
            "Broadcast Event"
          ]
        }
      ],
      challenges: [
        {
          tag: "Challenge 01",
          title: "Database Relationship Design",
          problem: "The system contains multiple connected entities including users, workspaces, boards, lists, cards, comments, and memberships. Designing relationships while maintaining data consistency was challenging.",
          solution: "Designed a normalized PostgreSQL schema using Prisma ORM, establishing clear one-to-many and many-to-many relationships while enforcing referential integrity."
        },
        {
          tag: "Challenge 02",
          title: "Permission Management",
          problem: "Different users require different access levels across workspaces and boards, making authorization logic difficult to maintain.",
          solution: "Implemented role-based authorization with middleware and permission checks to ensure secure access control throughout the application."
        }
      ],
      resilience: [
        {
          scenario: "Network Failure",
          solution: "Rollback optimistic state"
        },
        {
          scenario: "DB Transaction Failure",
          solution: "Prisma $transaction rollback"
        },
        {
          scenario: "Unauthorized Access",
          solution: "JWT refresh or logout fallback"
        }
      ],
      screens: [
        { label: "Home Dashboard" },
        { label: "Workspace View" },
        { label: "Kanban Board" },
        { label: "Create Board Dialog" },
        { label: "Activity Timeline" }
      ],
      learnings: [
        {
          num: "01",
          title: "Distributed-Style Frontend Thinking",
          body: "Designed EventBus-driven UI updates to simulate real-time system behavior without WebSockets."
        },
        {
          num: "02",
          title: "Database Performance Engineering",
          body: "Used fractional indexing to eliminate O(N) reorder operations in relational databases."
        },
        {
          num: "03",
          title: "Secure System Architecture",
          body: "Implemented JWT + refresh token lifecycle with secure storage and automatic rotation."
        }
      ]
    },
    elorastore: {
      tag: "Case Study: E-Commerce Architecture",
      title: "Elora Store:",
      subtitle: "Modern Fashion E-Commerce",
      desc: "A full-stack clothing e-commerce platform featuring product discovery, secure checkout, customer account management, and a comprehensive admin dashboard.",
      viewGit: "View GitHub",
      viewLive: "Live Demo",
      visionTitle: "The Vision",
      visionDesc: "Elora Store was built to provide a complete online fashion shopping experience while offering administrators powerful tools for managing products, orders, customers, and store operations from a centralized dashboard.",
      timelineLabel: "Timeline",
      roleLabel: "Role",
      roleVal: "Lead Dev",
      catLabel: "Category",
      statusLabel: "Status",
      stackTitle: "Stack Architecture",
      impactTitle: "Project Impact",
      achTitle: "Project Achievements",
      archTitle: "System Architecture",
      archSub: "Visualizing the flow from client-side interaction to persistent data storage.",
      apiSecTitle: "API Architecture & Endpoint Routing",
      secTitle: "Security Model & Assessment",
      coreTitle: "Core Features",
      perfTitle: "Query & Transaction Optimization",
      perfSub: "Before vs After metrics showing core performance enhancements.",
      stateTitle: "E-Commerce Data Lifecycle",
      stateSub: "Step-by-step transaction flow of main customer/admin operations.",
      challTitle: "Engineering Challenges",
      resTitle: "System Resilience & Error Recovery",
      showcaseTitle: "Interface Showcase",
      showcaseScroll: "Scroll horizontally to view more",
      learnTitle: "Key Engineering Insights",
      back: "Back to Portfolio",
      mitigationLabel: "Mitigation Strategy",
      deployNotice: {
        title: "Project Not Deployed",
        message: "This project is currently not deployed live. Would you like to view the source code on GitHub instead?",
        goToGithub: "Go to GitHub",
        close: "Close"
      },
      metrics: [
        { label: "Total APIs", value: "28" },
        { label: "Database Collections", value: "8" },
        { label: "Frontend Files", value: "92" },
        { label: "Backend Files", value: "35" },
        { label: "Total Source Files", value: "127" },
        { label: "Codebase Size", value: "9,031 LOC" }
      ],
      impacts: [
        "Improved UI responsiveness via optimistic updates",
        "Reduced redundant API calls using debounce strategy",
        "Built complete end-to-end e-commerce architecture"
      ],
      achievements: [
        "9,031 LOC full-stack JavaScript system",
        "28 REST API endpoints implemented",
        "8 MongoDB collections designed",
        "Optimistic UI cart system with instant feedback",
        "Debounced search with request cancellation",
        "Full e-commerce workflow (product → cart → order)"
      ],
      nodes: [
        { label: "Frontend", sub: "React 19 / React Router / SCSS" },
        { label: "Middleware", sub: "Node.js / Express / JWT" },
        { label: "Data Layer", sub: "MongoDB / Mongoose ODM" }
      ],
      apiDesign: [
        "RESTful structure with resource-based routing",
        "Separation by domain: User, Product, Order, Cart, Category",
        "Direct controller-based architecture (no service layer)",
        "28 total endpoints covering full e-commerce workflow"
      ],
      security: [
        "Client-side role-based access control (user/admin)",
        "No backend authorization middleware (identified risk)",
        "Plaintext credential authentication (legacy design)",
        "CORS + Helmet + Rate Limiting enabled"
      ],
      features: [
        {
          icon: "store",
          title: "Product Catalog System",
          desc: "Browse, filter, sort, and search products with category-based navigation."
        },
        {
          icon: "shopping_cart",
          title: "Cart Management",
          desc: "Add, update, and remove items with optimistic UI updates."
        },
        {
          icon: "receipt_long",
          title: "Order Processing",
          desc: "Full checkout pipeline with order creation and item aggregation."
        },
        {
          icon: "admin_panel_settings",
          title: "Admin Dashboard",
          desc: "Manage users, products, and orders from centralized interface."
        },
        {
          icon: "search",
          title: "Smart Search",
          desc: "Prefix search with debounce and optimized API handling."
        },
        {
          icon: "person",
          title: "User Management",
          desc: "Authentication, profile editing, and address management system."
        }
      ],
      performance: [
        {
          title: "Catalog Query Optimization",
          before: "Multiple full DB scans",
          after: "Filtered indexed queries + pagination"
        },
        {
          title: "Search Handling",
          before: "Instant API spam on input change",
          after: "Debounce + AbortController cancellation"
        },
        {
          title: "Cart Updates UX",
          before: "Waiting for server response",
          after: "Optimistic UI + background sync"
        }
      ],
      flows: [
        {
          title: "User Login Flow",
          steps: [
            "Input Credentials",
            "API /user/login",
            "Database Query",
            "Return User",
            "Update Context"
          ]
        },
        {
          title: "Order Checkout Flow",
          steps: [
            "Add Items",
            "Create Order Request",
            "Generate order model",
            "Calculate Total",
            "Return Final Order"
          ]
        }
      ],
      challenges: [
        {
          num: "Challenge 01",
          title: "API Race Conditions",
          problem: "Rapid filter changes caused overlapping requests and inconsistent UI rendering.",
          solution: "Implemented debounce mechanism and AbortController to cancel outdated requests."
        },
        {
          num: "Challenge 02",
          title: "Order Total Consistency",
          problem: "Product prices and order totals could change during checkout process.",
          solution: "Used Mongoose pre-save hooks to lock pricing at order creation time."
        }
      ],
      resilience: [
        {
          scenario: "API Race Condition",
          solution: "Debounce + AbortController cancel old requests"
        },
        {
          scenario: "Order Price Inconsistency",
          solution: "Mongoose pre-save aggregation on Order model"
        },
        {
          scenario: "Unauthorized Access",
          solution: "Frontend route guard (role-based UI protection)"
        }
      ],
      gallery: [
        { label: "Storefront Experience" },
        { label: "Product Detail & Shopping Flow" },
        { label: "Admin Product Management" },
        { label: "Admin User Management" }
      ],
      learnings: [
        {
          num: "01",
          title: "State Management without Redux",
          body: "Used React Context effectively for global auth, cart, and checkout state."
        },
        {
          num: "02",
          title: "Performance Optimization in SPA",
          body: "Applied optimistic UI and request cancellation to improve responsiveness."
        },
        {
          num: "03",
          title: "Database Design in NoSQL",
          body: "Learned to model relational-like structures using MongoDB and Mongoose."
        }
      ]
    }
  },
  vi: {
    navbar: {
      home: "Trang chủ",
      skills: "Kỹ năng",
      projects: "Dự án",
      experience: "Kinh nghiệm",
      education: "Học vấn",
      goals: "Mục tiêu",
      contact: "Liên hệ",
      downloadCv: "Tải CV"
    },
    footer: {
      crafted: "© 2024 NTK. Được thiết kế & phát triển bởi NTK.",
      phone: "+84 899 714 487"
    },
    home: {
      hero: {
        hi: "Xin chào, tôi là",
        name: "Nguyễn Tuấn Khánh",
        roles: [
          "Software Engineer",
          "Full-Stack Developer",
          "Competitive Programmer"
        ],
        desc: "Sinh viên ngành Kỹ thuật Phần mềm đầy nhiệt huyết, đam mê xây dựng các ứng dụng web hiệu năng cao, dễ bảo trì và giải quyết các bài toán thuật toán tối ưu phức tạp.",
        viewProjects: "Xem dự án",
        getInTouch: "Liên hệ"
      },
      focus: {
        tag: "Phân bổ năng lượng",
        title: "Lĩnh vực tập trung chính",
        desc: "Là một developer, tôi không dàn trải sức lực của mình — tôi đầu tư thời gian một cách có chủ đích. Dưới đây là cách tôi tập trung vào những lĩnh vực định hình nên năng lực của bản thân.",
        items: [
          {
            label: "Hệ thống Backend",
            value: 50,
            icon: "dns",
            description: "Thiết kế và xây dựng REST & GraphQL API có khả năng mở rộng (scalable), kiến trúc microservices và database schema hoạt động tin cậy ở quy mô lớn. Tập trung sâu vào hiệu năng, bảo mật và system observability.",
            chips: ["Node.js", "NestJS", "PostgreSQL", "Redis", "REST", "JWT"]
          },
          {
            label: "Phát triển Full-Stack",
            value: 35,
            icon: "deployed_code",
            description: "Phát triển sản phẩm hoàn chỉnh từ React UI tương tác đến logic phía server — tối ưu hóa UX, responsive design và luồng dữ liệu mượt mà trên toàn bộ stack.",
            chips: ["React", "Next.js", "TypeScript", "Prisma", "Tailwind"]
          },
          {
            label: "Kỹ nghệ Dữ liệu",
            value: 15,
            icon: "analytics",
            description: "Xây dựng ETL pipeline đáng tin cậy, các giải pháp data warehouse và nền tảng phân tích. Có kinh nghiệm phân tích dữ liệu khám phá (EDA) và tích hợp mô hình ML để tối ưu hóa giá trị từ dữ liệu thô.",
            chips: ["Python", "Pandas", "Scikit-Learn", "SQL", "EDA", "Spark"]
          }
        ]
      },
      skills: {
        title: "Kỹ năng Kỹ thuật",
        desc: "Tổng quan toàn diện về stack công nghệ và năng lực kỹ thuật của tôi.",
        items: [
          {
            icon: "code",
            title: "Ngôn ngữ Lập trình",
            items: ["TypeScript", "JavaScript", "Python", "Java", "C/C++", "SQL"]
          },
          {
            icon: "monitor",
            title: "Frontend",
            items: ["React.js", "React Native", "Next.js", "HTML5", "CSS3", "Tailwind CSS"]
          },
          {
            icon: "dns",
            title: "Backend",
            items: ["Node.js", "Express.js", "NestJS", "RESTful APIs", "JWT Auth", "Socket.IO"]
          },
          {
            icon: "database",
            title: "Database",
            items: ["PostgreSQL", "MySQL", "MongoDB", "Prisma ORM", "Mongoose"]
          },
          {
            icon: "psychology",
            title: "Dữ liệu & AI",
            items: ["Data Analysis", "Preprocessing", "EDA", "Machine Learning"]
          },
          {
            icon: "build",
            title: "Công cụ",
            items: ["Git", "GitHub", "Docker", "Postman"]
          }
        ]
      },
      projects: {
        title: "Dự án Nổi bật",
        tfDesc: "Hệ thống quản lý công việc có khả năng mở rộng (scalable) với tính năng đồng bộ hóa thời gian thực (real-time sync), phân quyền dựa trên vai trò (RBAC), quy trình kéo thả (drag-and-drop) và backend service mạnh mẽ giúp tối ưu hiệu suất làm việc nhóm.",
        eloraDesc: "Ứng dụng e-commerce full-stack được xây dựng chú trọng vào khả năng mở rộng và hiệu năng, tích hợp xác thực bảo mật, quản lý sản phẩm hiệu quả và tối ưu trải nghiệm người dùng (UX).",
        houseDesc: "Áp dụng thuật toán Linear Regression để dự đoán giá nhà từ bộ dữ liệu có cấu trúc hơn 1.400 bản ghi, tập trung vào tiền xử lý dữ liệu (data preprocessing), phân tích khám phá (EDA), thiết kế đặc trưng (feature engineering) và đánh giá mô hình.",
        caseStudy: "Xem Case Study",
        repositories: "Xem các Kho lưu trữ"
      },
      experience: {
        title: "Kinh nghiệm",
        teamTitle: "Đội tuyển Olympic Tin học & ICPC VKU",
        teamPeriod: "2024 – Hiện tại",
        teamDesc: "Thành viên nòng cốt tham gia các kỳ thi lập trình thi đấu khu vực và quốc gia. Nắm vững cấu trúc dữ liệu, thuật toán nâng cao và giải quyết các bài toán tối ưu phức tạp.",
        timeline: "Toàn bộ tiến trình"
      },
      education: {
        title: "Học vấn",
        school: "Trường Đại học Công nghệ Thông tin và Truyền thông Việt - Hàn",
        degree: "Cử nhân CNTT",
        gpa: "GPA: 3.0 / 4.0",
        desc: "Chuyên ngành Kỹ thuật Phần mềm. Tích cực tham gia các câu lạc bộ công nghệ và hoạt động nghiên cứu khoa học.",
        profile: "Hồ sơ đầy đủ"
      },
      principles: {
        title: "Nguyên tắc Kỹ nghệ",
        desc: "Các giá trị cốt lõi định hướng cho các quyết định kiến trúc và quá trình phát triển sản phẩm của tôi.",
        items: [
          {
            icon: "clean_hands",
            title: "Mã nguồn Dễ bảo trì (Maintainable Code)",
            desc: "Viết clean code, dễ đọc và tự ghi chú (self-documenting) để dễ dàng mở rộng theo quy mô dự án và số lượng thành viên."
          },
          {
            icon: "view_quilt",
            title: "Kiến trúc Dễ mở rộng (Scalable Architecture)",
            desc: "Thiết kế hệ thống có khả năng chịu tải tốt thông qua kiến trúc dạng mô-đun (modularity) và luồng dữ liệu tối ưu."
          },
          {
            icon: "touch_app",
            title: "Trải nghiệm Người dùng (UX)",
            desc: "Đặt người dùng làm trọng tâm bằng cách tối ưu tốc độ tải trang và mang lại tương tác mượt mà."
          },
          {
            icon: "psychology",
            title: "Không ngừng Học hỏi",
            desc: "Luôn cập nhật và tiếp cận các xu hướng công nghệ mới để đưa ra giải pháp kỹ thuật tối ưu."
          }
        ]
      },
      goals: {
        tag: "Lộ trình Sự nghiệp",
        title: "Mục tiêu Tương lai",
        amp: "và",
        guidance: "Định hướng",
        subtitle: "Tầm nhìn định hướng sự nghiệp — bao quát từ hệ thống phân tán, hạ tầng đám mây, kỹ nghệ dữ liệu đến các ứng dụng thông minh.",
        visionTitle: "Tầm nhìn Sự nghiệp",
        visionRole: "Software Engineer · Backend & Data Specialist",
        p1: "Mục tiêu nghề nghiệp của tôi là trở thành một Software Engineer chuyên sâu về hệ thống backend scalable, nền tảng dữ liệu (data platforms) và các ứng dụng thông minh. Trên nền tảng phát triển full-stack sẵn có, tôi hướng tới việc nghiên cứu sâu hơn về hệ thống phân tán, hạ tầng đám mây (cloud infrastructure), data engineering và machine learning.",
        p2: "Trong những năm tới, tôi muốn tích lũy kinh nghiệm thực tế về xử lý dữ liệu lớn (big data), xây dựng data pipeline, nền tảng phân tích (analytics platforms) và các giải pháp tích hợp AI. Mục tiêu của tôi là kết hợp các nguyên tắc công nghệ phần mềm vững chắc với tư duy định hướng dữ liệu để xây dựng hệ thống tin cậy, hiệu năng cao và đem lại giá trị thực tế.",
        p3: "Bằng việc không ngừng học hỏi, tham gia lập trình thi đấu và triển khai các dự án thực tế, tôi nỗ lực phát triển thành một kỹ sư đa năng, đóng góp toàn diện trên toàn bộ stack công nghệ — từ phát triển ứng dụng, thiết kế kiến trúc đến các giải pháp về dữ liệu và AI.",
        pillars: [
          {
            icon: "hub",
            title: "Hệ thống Phân tán (Distributed Systems)",
            desc: "Thiết kế kiến trúc có khả năng chịu lỗi (fault-tolerant), tính sẵn sàng cao (highly available) để xử lý hàng triệu request đồng thời.",
            chips: ["Kafka", "gRPC", "Microservices"]
          },
          {
            icon: "cloud_upload",
            title: "Hạ tầng Đám mây (Cloud Infrastructure)",
            desc: "Tận dụng các công cụ cloud-native để tự động hóa triển khai, tối ưu hóa đường ống CI/CD và quản lý hạ tầng bằng mã (IaC).",
            chips: ["AWS", "Kubernetes", "Terraform"]
          },
          {
            icon: "account_tree",
            title: "Kỹ nghệ Dữ liệu (Data Engineering)",
            desc: "Xây dựng data pipeline vững chắc và nền tảng phân tích giúp chuyển đổi dữ liệu thô thành thông tin hữu ích (insights).",
            chips: ["Spark", "Airflow", "dbt"]
          },
          {
            icon: "model_training",
            title: "Hệ thống AI & Machine Learning",
            desc: "Tích hợp các mô hình machine learning vào môi trường production để đưa ra các quyết định thông minh dựa trên dữ liệu.",
            chips: ["PyTorch", "MLflow", "LLMs"]
          }
        ],
        roadmapTitle: "Lộ trình Học tập",
        roadmap: [
          {
            phase: "Giai đoạn 01",
            period: "2025 – 2026",
            title: "Đào sâu Kiến thức Backend & System",
            desc: "Nắm vững các thuật toán nâng cao, design pattern hệ thống và kiến thức nền tảng về tính toán phân tán. Đóng góp cho các dự án backend open-source.",
            tags: ["System Design", "Algorithms", "Open Source"]
          },
          {
            phase: "Giai đoạn 02",
            period: "2026 – 2027",
            title: "Data Engineering & Cloud Platforms",
            desc: "Xây dựng data pipeline chuẩn production, chinh phục các chứng chỉ cloud (AWS/GCP) và nghiên cứu chuyên sâu về analytics platforms.",
            tags: ["Data Pipeline", "Cloud Certs", "Analytics"]
          },
          {
            phase: "Giai đoạn 03",
            period: "2027 – 2028",
            title: "Tích hợp Hệ thống Hướng AI",
            desc: "Tích hợp mô hình ML vào môi trường production, nghiên cứu ứng dụng LLM và xây dựng các sản phẩm dữ liệu thông minh tạo giá trị.",
            tags: ["MLOps", "LLM Apps", "AI Products"]
          }
        ]
      },
      contact: {
        title: "Hãy cùng nhau xây dựng những sản phẩm tuyệt vời",
        subtitle: "Tôi hiện đang tìm kiếm những cơ hội mới và cơ hội hợp tác phát triển.",
        labelName: "Họ và tên",
        labelEmail: "Email",
        labelMsg: "Lời nhắn",
        placeholderName: "Nguyễn Văn A",
        placeholderEmail: "nguyenvana@example.com",
        placeholderMsg: "Chia sẻ với tôi về dự án của bạn...",
        sending: "Đang gửi...",
        send: "Gửi tin nhắn",
        success: "✓ Gửi tin nhắn thành công!",
        failed: "✗ Gửi tin nhắn thất bại. Vui lòng thử lại."
      }
    },
    education: {
      tag: "Hồ sơ Học thuật",
      title: "VKU — Cử nhân Kỹ thuật Phần mềm",
      desc: "Rèn luyện kiến thức chuyên môn thông qua học tập nghiêm túc và thiết kế hệ thống thực tế. Hiện đang theo học chương trình Kỹ thuật Phần mềm toàn diện với trọng tâm là hệ thống phân tán hiện đại.",
      gpaLabel: "GPA Tích lũy",
      focusTitle: "Trọng tâm Học tập",
      frontiersTitle: "Định hướng Học tập & Nghiên cứu",
      campusLife: "Đời sống Học đường",
      lab1: "Phòng Lab Máy tính Nâng cao",
      peerCollab: "Cộng tác học tập",
      lab2: "Xưởng Sáng tạo Đổi mới",
      courses: [
        {
          icon: "architecture",
          title: "Kỹ thuật Phần mềm (Software Engineering)",
          desc: "Các phương pháp luận cốt lõi về quản lý vòng đời phần mềm (SDLC), design pattern và thiết kế hệ thống."
        },
        {
          icon: "database",
          title: "Hệ thống Cơ sở Dữ liệu (Database Systems)",
          desc: "Mô hình hóa quan hệ, tối ưu hóa truy vấn SQL, thiết lập chỉ mục (index) và kỹ thuật chuẩn hóa dữ liệu."
        },
        {
          icon: "account_tree",
          title: "Cấu trúc Dữ liệu (Data Structures)",
          desc: "Triển khai và phân tích các cấu trúc dữ liệu phức tạp: heap, đồ thị và cây cân bằng."
        },
        {
          icon: "terminal",
          title: "Thuật toán (Algorithms)",
          desc: "Độ phức tạp tính toán (Big O), sắp xếp, tìm kiếm và quy hoạch động."
        },
        {
          icon: "layers",
          title: "Lập trình Hướng đối tượng (OOP)",
          desc: "Tính đóng gói, kế thừa và đa hình trong môi trường Java và C++."
        },
        {
          icon: "language",
          title: "Phát triển Web (Web Development)",
          desc: "Kiến trúc frontend hiện đại, responsive design và các giao thức client-server."
        }
      ],
      frontiers: [
        {
          icon: "stacks",
          title: "Full-Stack Development",
          desc: "Làm chủ việc tích hợp giữa hệ sinh thái React và môi trường Node.js hiệu năng cao."
        },
        {
          icon: "dns",
          title: "Thiết kế Backend & Database",
          desc: "Thiết kế kiến trúc microservices có khả năng mở rộng và nghiên cứu chiến lược mở rộng NoSQL cho ứng dụng hiện đại."
        },
        {
          icon: "psychology",
          title: "Học máy (Machine Learning)",
          desc: "Kết nối khoảng cách giữa phần mềm và AI bằng đại số tuyến tính và mô hình hóa trên Python."
        },
        {
          icon: "analytics",
          title: "Kỹ nghệ Dữ liệu & Phân tích",
          desc: "Nghiên cứu data pipeline, quy trình ETL, data warehouse và chuyển đổi dữ liệu thô thành thông tin giá trị cho doanh nghiệp."
        }
      ]
    },
    experience: {
      tag: "Tiến trình Sự nghiệp",
      title: "Hành trình Kỹ thuật",
      desc: "Hành trình rèn luyện thuật toán nghiêm ngặt và giải quyết bài toán kỹ thuật thực tế. Từ lập trình thi đấu đến kỹ nghệ phần mềm quy mô lớn.",
      timeline: [
        {
          period: "2024 – 2025",
          title: "Đội tuyển Olympic Tin học & ICPC VKU",
          bullets: [
            "Tham gia các chương trình ôn luyện ICPC và Olympic Tin học chuyên sâu, tập trung vào giải quyết thuật toán.",
            "Áp dụng các thuật toán đồ thị bao gồm BFS, DFS, duyệt cây, đường đi ngắn nhất và các bài toán liên thông.",
            "Củng cố kỹ năng quy hoạch động, tối ưu hóa (knapsack), chia để trị và các cấu trúc dữ liệu nâng cao."
          ]
        },
        {
          period: "Hiện tại",
          title: "Sẵn sàng cho Cơ hội Thực tập",
          desc: "Hiện tại đang tìm kiếm các cơ hội thực tập trong các lĩnh vực Kỹ nghệ Phần mềm, Phát triển Backend, Phát triển Full-Stack và Kỹ nghệ Dữ liệu để đóng góp, học hỏi và phát triển trong môi trường chuyên nghiệp."
        }
      ],
      ctaTitle: "Bạn quan tâm đến việc hợp tác kỹ thuật?",
      ctaDesc: "Tôi hiện đang sẵn sàng đón nhận các cơ hội thực tập và các dự án nghiên cứu chuyên sâu về tối ưu hóa thuật toán.",
      contactMe: "Liên hệ với tôi",
      viewRepo: "Xem Kho lưu trữ"
    },
    taskflow: {
      tag: "SaaS Case Study",
      title: "TaskFlow: Hợp tác Nhóm &",
      subtitle: "Quản lý Công việc Cá nhân",
      desc: "Nền tảng quản lý dự án full-stack giúp các nhóm tổ chức công việc, cộng tác hiệu quả và theo dõi tiến độ qua Kanban board linh hoạt.",
      viewLive: "Trực quan Dự án",
      viewGit: "Kho lưu trữ GitHub",
      overview: "Tổng quan",
      overviewDesc: "TaskFlow là ứng dụng quản lý dự án full-stack lấy cảm hứng từ các nền tảng cộng tác hiện đại. Người dùng có thể quản lý công việc qua Workspace, Board, List và Card; hỗ trợ xác thực (authentication), phân quyền (RBAC), giao việc và theo dõi tiến độ.",
      roleLabel: "VAI TRÒ",
      roleVal: "Full-Stack Developer",
      timelineLabel: "THỜI GIAN",
      timelineVal: "4 Tháng",
      platformLabel: "NỀN TẢNG",
      platformVal: "Web & Di động",
      typeLabel: "LOẠI HÌNH",
      typeVal: "Personal Project",
      techTitle: "Công nghệ Sử dụng",
      impactTitle: "Tác động Dự án",
      achTitle: "Thành tựu Đạt được",
      archTitle: "Kiến trúc Hệ thống",
      apiSecTitle: "Thiết kế API & Định tuyến",
      secTitle: "Bảo mật & Phân quyền",
      coreTitle: "Tính năng Cốt lõi",
      perfTitle: "Tối ưu hóa Hiệu năng",
      perfSub: "Các chỉ số So sánh Trước & Sau thể hiện những cải tiến cốt lõi về kiến trúc.",
      stateTitle: "Vòng đời Trạng thái & Dữ liệu",
      stateSub: "Quy trình giao dịch từng bước của các hành động chính trong ứng dụng.",
      challTitle: "Thách thức Kỹ thuật",
      resTitle: "Độ bền bỉ Hệ thống & Khôi phục Lỗi",
      screensTitle: "Giao diện Ứng dụng",
      learnTitle: "Bài học Kinh nghiệm",
      back: "Quay lại Trang chính",
      recoveryLabel: "Chiến lược Khôi phục",
      deployNotice: {
        title: "Dự án Chưa Deploy",
        message: "Dự án này hiện tại vẫn chưa được deploy trực tuyến. Bạn có muốn chuyển hướng sang xem kho lưu trữ mã nguồn trên GitHub không?",
        goToGithub: "Đi đến GitHub",
        close: "Đóng"
      },
      metrics: [
        { label: "Tổng số API", value: "51" },
        { label: "Bảng Cơ sở Dữ liệu", value: "18" },
        { label: "Protected Routes", value: "46" },
        { label: "Độ trễ API trung bình", value: "85ms" },
        { label: "Thời gian phản hồi UI", value: "<50ms" },
        { label: "Kích thước Payload trung bình", value: "120KB" }
      ],
      impacts: [
        "Giảm độ trễ UI từ ~300ms xuống <50ms",
        "Loại bỏ thao tác sắp xếp lại O(N) trong luồng kéo thả cốt lõi",
        "Thiết kế hệ thống database quan hệ đa thực thể dễ mở rộng"
      ],
      achievements: [
        "Hệ thống full-stack TypeScript quy mô 17,973+ LOC",
        "Thiết kế và phát triển 51 REST API endpoint",
        "Thiết kế 18 bảng trong database quan hệ",
        "Tối ưu hóa thao tác kéo thả đạt độ phức tạp O(1) bằng fractional indexing",
        "Bảo mật 46 route phía backend",
        "Áp dụng Optimistic UI giúp thời gian phản hồi đạt dưới 50ms"
      ],
      nodes: [
        { label: "CLIENT", sub: "React Native" },
        { label: "API SERVER", sub: "Node.js" },
        { label: "DATABASE", sub: "PostgreSQL" }
      ],
      apiDesign: [
        "Thiết kế chuẩn REST API với định tuyến dựa trên tài nguyên (resources)",
        "Áp dụng đồng nhất endpoint dạng /workspace/:id",
        "Phân tách rõ ràng kiến trúc Controller-Service-Repository",
        "Bảo mật API bằng JWT (46/51 endpoint được bảo vệ)"
      ],
      security: [
        "Hệ thống Access & Refresh Token tự động",
        "Phân quyền RBAC 4 cấp độ (OWNER, ADMIN, MEMBER, VIEWER)",
        "Bảo vệ route thông qua authentication middleware",
        "Lưu trữ token an toàn bằng Expo SecureStore"
      ],
      features: [
        {
          icon: "view_kanban",
          title: "Hệ thống Kanban Board dễ mở rộng",
          desc: "Quản lý Workspace, Board, List, Card với cơ chế kéo thả trên 18 thực thể dữ liệu."
        },
        {
          icon: "group",
          title: "Cộng tác & Phân quyền",
          desc: "Hệ thống RBAC 4 cấp độ bảo vệ 46 route API backend."
        },
        {
          icon: "api",
          title: "Kiến trúc REST API",
          desc: "Thiết kế 51 endpoint bao gồm các module Auth, Workspace, Board, Card và Activity."
        },
        {
          icon: "database",
          title: "Thiết kế Database",
          desc: "18 bảng PostgreSQL được thiết kế qua Prisma ORM với cấu trúc chuẩn hóa quan hệ."
        },
        {
          icon: "bolt",
          title: "Cơ chế Optimistic UI",
          desc: "Cập nhật UI thông qua EventBus giúp giảm độ trễ trải nghiệm xuống dưới 50ms."
        },
        {
          icon: "history",
          title: "Hệ thống Lịch sử Hoạt động (Audit Log)",
          desc: "Theo dõi toàn bộ lịch sử thao tác với truy vấn index nhanh đối với board, card và user action."
        }
      ],
      performance: [
        {
          title: "Tối ưu hóa Kéo thả",
          before: "Sắp xếp lại danh sách độ phức tạp O(N)",
          after: "Fractional indexing độ phức tạp O(1)"
        },
        {
          title: "Độ phản hồi UI",
          before: "Chờ API phản hồi gây block UI",
          after: "Optimistic UI + tự động Rollback khi lỗi"
        },
        {
          title: "Đồng bộ Trạng thái",
          before: "Tải lại trang thủ công",
          after: "Cập nhật tự động qua EventBus"
        }
      ],
      flows: [
        {
          title: "Luồng Tạo Thẻ",
          steps: [
            "User Action",
            "Optimistic UI Update",
            "Send API Request",
            "DB Transaction",
            "Success / Rollback"
          ]
        },
        {
          title: "Luồng Cập nhật Bảng",
          steps: [
            "Drag & Drop Card",
            "UI State Update",
            "API Sync",
            "DB Write",
            "Broadcast Event"
          ]
        }
      ],
      challenges: [
        {
          tag: "Thách thức 01",
          title: "Thiết kế Mối quan hệ Cơ sở Dữ liệu",
          problem: "Hệ thống chứa nhiều thực thể liên kết chặt chẽ như user, workspace, board, list, card, comment và membership. Thiết kế quan hệ để đảm bảo toàn vẹn dữ liệu là một thách thức lớn.",
          solution: "Thiết kế schema chuẩn hóa PostgreSQL bằng Prisma ORM, thiết lập các quan hệ 1-N và N-N rõ ràng đồng thời thực thi ràng buộc khóa ngoại."
        },
        {
          tag: "Thách thức 02",
          title: "Quản lý Quyền truy cập",
          problem: "Mỗi user yêu cầu quyền truy cập khác nhau trên từng workspace và board, khiến logic phân quyền trở nên phức tạp và khó quản lý.",
          solution: "Xây dựng cơ chế RBAC kết hợp middleware và custom permission guards để phân quyền an toàn trên toàn bộ hệ thống."
        }
      ],
      resilience: [
        {
          scenario: "Lỗi kết nối mạng",
          solution: "Rollback trạng thái Optimistic UI"
        },
        {
          scenario: "Lỗi DB Transaction",
          solution: "Tự động rollback bằng Prisma $transaction"
        },
        {
          scenario: "Truy cập chưa phân quyền",
          solution: "Tự động refresh token hoặc logout"
        }
      ],
      screens: [
        { label: "Dashboard chính" },
        { label: "Workspace View" },
        { label: "Kanban Board" },
        { label: "Create Board Dialog" },
        { label: "Activity Timeline" }
      ],
      learnings: [
        {
          num: "01",
          title: "Tư duy Frontend hướng sự kiện",
          body: "Xây dựng cơ chế cập nhật UI qua EventBus để mô phỏng real-time mà không cần WebSockets."
        },
        {
          num: "02",
          title: "Tối ưu hóa hiệu năng Database",
          body: "Sử dụng fractional indexing để loại bỏ hoàn toàn độ phức tạp O(N) khi sắp xếp lại card trong database quan hệ."
        },
        {
          num: "03",
          title: "Kiến trúc Hệ thống Bảo mật",
          body: "Triển khai thành công chu kỳ JWT & refresh token với cơ chế lưu trữ an toàn và tự động xoay vòng (rotation)."
        }
      ]
    },
    elorastore: {
      tag: "E-Commerce Case Study",
      title: "Elora Store:",
      subtitle: "Thương mại Điện tử Thời trang Hiện đại",
      desc: "Nền tảng e-commerce thời trang full-stack tích hợp tìm kiếm sản phẩm, thanh toán bảo mật, quản lý tài khoản và trang admin toàn diện.",
      viewGit: "Xem mã nguồn GitHub",
      viewLive: "Giao diện Trực quan",
      visionTitle: "Tầm nhìn Sản phẩm",
      visionDesc: "Elora Store được thiết kế nhằm mang lại trải nghiệm mua sắm thời trang trực tuyến trọn vẹn, đồng thời cung cấp cho admin bộ công cụ quản lý tập trung từ sản phẩm, đơn hàng đến khách hàng.",
      timelineLabel: "Thời gian",
      roleLabel: "Vai trò",
      roleVal: "Lead Developer",
      catLabel: "Category",
      statusLabel: "Status",
      stackTitle: "Technology Stack",
      impactTitle: "Tác động Dự án",
      achTitle: "Thành tựu Đạt được",
      archTitle: "Kiến trúc Hệ thống",
      archSub: "Sơ đồ luồng tương tác từ client-side đến data layer.",
      apiSecTitle: "Thiết kế API & Định tuyến",
      secTitle: "Bảo mật & Đánh giá Rủi ro",
      coreTitle: "Tính năng Cốt lõi",
      perfTitle: "Tối ưu hóa Query & Transaction",
      perfSub: "Các chỉ số trước và sau khi tối ưu hóa hiệu năng.",
      stateTitle: "Vòng đời dữ liệu E-Commerce",
      stateSub: "Luồng giao dịch chi tiết các hoạt động của khách hàng và admin.",
      challTitle: "Thách thức Kỹ thuật",
      resTitle: "Độ bền bỉ & Khôi phục lỗi",
      showcaseTitle: "Interface Showcase",
      showcaseScroll: "Cuộn ngang để xem thêm",
      learnTitle: "Bài học Kinh nghiệm",
      back: "Quay lại Trang chính",
      mitigationLabel: "Chiến lược giảm thiểu rủi ro",
      deployNotice: {
        title: "Dự án Chưa Deploy",
        message: "Dự án này hiện tại vẫn chưa được deploy trực tuyến. Bạn có muốn chuyển hướng sang xem kho lưu trữ mã nguồn trên GitHub không?",
        goToGithub: "Đi đến GitHub",
        close: "Đóng"
      },
      metrics: [
        { label: "Tổng số API", value: "28" },
        { label: "Database Collections", value: "8" },
        { label: "Frontend Files", value: "92" },
        { label: "Backend Files", value: "35" },
        { label: "Tổng số Tệp tin", value: "127" },
        { label: "Quy mô Mã nguồn", value: "9,031 LOC" }
      ],
      impacts: [
        "Tăng độ phản hồi UI thông qua Optimistic UI",
        "Hạn chế request trùng lặp bằng debounce",
        "Hoàn thiện kiến trúc e-commerce end-to-end"
      ],
      achievements: [
        "Hệ thống full-stack JavaScript quy mô 9,031 LOC",
        "Triển khai thành công 28 REST API endpoint",
        "Thiết kế 8 MongoDB collection tối ưu",
        "Xây dựng giỏ hàng với Optimistic UI phản hồi tức thì",
        "Tích hợp tìm kiếm thông minh với debounce và request cancellation",
        "Quy trình e-commerce trọn vẹn (sản phẩm → giỏ hàng → đặt hàng)"
      ],
      nodes: [
        { label: "Frontend", sub: "React 19 / React Router / SCSS" },
        { label: "Middleware", sub: "Node.js / Express / JWT" },
        { label: "Data Layer", sub: "MongoDB / Mongoose ODM" }
      ],
      apiDesign: [
        "Thiết kế chuẩn REST API với định tuyến dựa trên tài nguyên",
        "Phân tách theo domain: User, Product, Order, Cart, Category",
        "Kiến trúc controller trực tiếp (không dùng service layer)",
        "28 endpoint bao phủ toàn bộ vòng đời mua sắm và thanh toán"
      ],
      security: [
        "Kiểm soát quyền truy cập dựa trên vai trò ở client-side (user/admin)",
        "Chưa có backend authorization middleware (rủi ro bảo mật)",
        "Xác thực mật khẩu truyền thống (legacy design)",
        "Kích hoạt CORS, Helmet và Rate Limiting"
      ],
      features: [
        {
          icon: "store",
          title: "Product Catalog",
          desc: "Duyệt, lọc, sắp xếp và tìm kiếm sản phẩm qua các danh mục."
        },
        {
          icon: "shopping_cart",
          title: "Quản lý Giỏ hàng",
          desc: "Thêm, cập nhật số lượng và xóa item với Optimistic UI cập nhật tức thì."
        },
        {
          icon: "receipt_long",
          title: "Xử lý Đơn hàng",
          desc: "Quy trình thanh toán hoàn chỉnh bao gồm tạo đơn và tính toán tổng tiền."
        },
        {
          icon: "admin_panel_settings",
          title: "Admin Dashboard",
          desc: "Quản lý user, product và order tập trung từ một giao diện."
        },
        {
          icon: "search",
          title: "Tìm kiếm Thông minh",
          desc: "Tìm kiếm theo tiền tố với debounce và tối ưu hóa API call."
        },
        {
          icon: "person",
          title: "Quản lý User",
          desc: "Xác thực người dùng, quản lý profile và địa chỉ giao hàng."
        }
      ],
      performance: [
        {
          title: "Tối ưu hóa Truy vấn Sản phẩm",
          before: "Quét toàn bộ database nhiều lần (full scan)",
          after: "Sử dụng index query kết hợp phân trang (pagination)"
        },
        {
          title: "Xử lý Hành vi Tìm kiếm",
          before: "Spam API request liên tục khi gõ phím",
          after: "Sử dụng Debounce + AbortController để hủy request cũ"
        },
        {
          title: "Cập nhật Giỏ hàng",
          before: "Chờ phản hồi xác nhận từ server",
          after: "Áp dụng Optimistic UI + đồng bộ chạy ngầm"
        }
      ],
      flows: [
        {
          title: "Luồng Đăng nhập",
          steps: [
            "Input Credentials",
            "Send API /user/login",
            "Database Query",
            "Return User Object",
            "Update Context & LocalStorage"
          ]
        },
        {
          title: "Luồng Đặt hàng",
          steps: [
            "Add Items to Cart",
            "Send Create Order Request",
            "Generate Order Models",
            "Mongoose Pre-Save Calculation",
            "Return Final Order"
          ]
        }
      ],
      challenges: [
        {
          num: "Thách thức 01",
          title: "API Race Conditions",
          problem: "Thay đổi bộ lọc liên tục tạo ra các request chồng chéo, khiến giao diện hiển thị không nhất quán.",
          solution: "Triển khai debounce kết hợp AbortController để hủy các request cũ."
        },
        {
          num: "Thách thức 02",
          title: "Tính Nhất quán Tổng tiền Đơn hàng",
          problem: "Giá sản phẩm và tổng giá trị đơn hàng có thể bị thay đổi bất ngờ trong quá trình checkout.",
          solution: "Sử dụng Mongoose pre-save hook để chốt giá bán tại thời điểm tạo đơn hàng."
        }
      ],
      resilience: [
        {
          scenario: "API Race Conditions",
          solution: "Debounce + AbortController hủy request cũ"
        },
        {
          scenario: "Sai lệch giá trị đơn hàng",
          solution: "Tính toán và chốt giá qua Mongoose pre-save hook"
        },
        {
          scenario: "Yêu cầu truy cập trái phép",
          solution: "Sử dụng route guards ở client-side"
        }
      ],
      gallery: [
        { label: "Storefront UI" },
        { label: "Product Detail & Cart UI" },
        { label: "Admin Product Management" },
        { label: "Admin User Management" }
      ],
      learnings: [
        {
          num: "01",
          title: "Quản lý State không dùng Redux",
          body: "Sử dụng hiệu quả React Context cho toàn bộ luồng Auth, Cart và Checkout toàn cục."
        },
        {
          num: "02",
          title: "Tối ưu hóa hiệu năng SPA",
          body: "Ứng dụng Optimistic UI và hủy request thừa giúp cải thiện đáng kể tốc độ phản hồi."
        },
        {
          num: "03",
          title: "Thiết kế Database với NoSQL",
          body: "Học cách mô hình hóa các mối quan hệ tối ưu bằng MongoDB và Mongoose."
        }
      ]
    }
  }
};
