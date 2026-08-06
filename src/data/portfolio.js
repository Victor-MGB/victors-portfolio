export const profile = {
  name: "Victor Mgbemena",
  monogram: "VM",
  role: "Backend Engineer",
  roles: ["Backend Engineer", "AI Engineer", "Cloud Infrastructure"],
  lead: "Building scalable APIs, intelligent systems, and cloud infrastructure.",
  summary:
    "I design and build backend systems that power AI products, process millions of requests, and stay reliable under load. I focus on clean architecture, well-considered APIs, and shipping systems that engineers enjoy maintaining.",
  location: "Nigeria",
  email: "mgbemenaosonduv@gmail.com",
  phone: "+234 9077955363",
  resumeUrl:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  github: "https://github.com/Victor-MGB",
  linkedin: "https://www.linkedin.com/in/victor-osondu777/",
  x: "https://x.com/Victor01808002",
  openToWork: true,
  facts: [
    {
      label: "Currently",
      value: "Open to senior backend & AI engineering roles",
    },
    {
      label: "Focus",
      value: "AI infrastructure, distributed systems, cloud",
    },
    {
      label: "Experience",
      value: "3+ years building production software",
    },
    {
      label: "Based in",
      value: "Nigeria — remote friendly, flexible hours",
    },
  ],
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const about = {
  paragraphs: [
    "I'm a backend engineer who builds **scalable APIs, intelligent systems, and cloud infrastructure** for AI-powered products. I work primarily with **Node.js, Python, FastAPI, and PostgreSQL**, and I care deeply about reliability, observability, and clean software design.",
    "Over the past few years I've shipped production systems across e-commerce, logistics, and AI platforms — from order-processing pipelines to **LLM-powered assistants and RAG pipelines**. I've also contributed to government and enterprise projects as a software engineer during my national service.",
    "I treat engineering as a craft: predictable performance, thoughtful API contracts, and architecture that can grow with the product. I enjoy turning ambiguous problems into simple, well-engineered systems.",
  ],
};

export const skills = [
  {
    name: "Languages",
    icon: "code",
    items: [
      "JavaScript / TypeScript",
      "Python",
      "SQL",
      "HTML & CSS",
    ],
  },
  {
    name: "Backend",
    icon: "server",
    items: [
      "Node.js & Express.js",
      "Python & FastAPI",
      "REST API design",
      "WebSockets & real-time services",
      "Microservices architecture",
    ],
  },
  {
    name: "AI & ML",
    icon: "spark",
    items: [
      "LLM integration (OpenAI, Gemini)",
      "Retrieval-Augmented Generation (RAG)",
      "AI agents & workflow automation",
      "Prompt engineering",
      "LangChain & vector search",
    ],
  },
  {
    name: "Cloud & DevOps",
    icon: "cloud",
    items: [
      // "AWS (EC2, S3, Lambda)",
      "Docker & containerization",
      "GitHub Actions & CI/CD",
      "Nginx & reverse proxying",
      "Linux server administration",
    ],
  },
  {
    name: "Databases",
    icon: "database",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Redis (caching & queues)",
      "Vector databases",
    ],
  },
  {
    name: "Tools & Practices",
    icon: "tool",
    items: [
      "Git & GitHub",
      "Postman & API testing",
      "Clean architecture & design patterns",
      "Agile & cross-functional collaboration",
    ],
  },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "Panda Giant Developer Ltd",
    date: "Apr 2025 – Mar 2026",
    desc: "Built backend systems and AI-powered solutions for government and enterprise clients, focused on scalability, security, and performance.",
    highlights: [
      "Developed scalable backend systems with Node.js and Python for enterprise and public-sector deployments.",
      "Built AI-powered automation and intelligent workflows that reduced manual operational effort.",
      "Designed secure backend architectures and optimized application performance.",
      "Delivered production-ready software on schedule with cross-functional teams.",
    ],
    stack: ["Node.js", "Python", "PostgreSQL", "Redis", "Docker"],
  },
  {
    role: "Backend Developer",
    company: "susanKitchenFlavoured",
    date: "Sep 2025 – Jan 2026",
    desc: "Built the backend for a restaurant ordering platform handling menu management, order processing, authentication, and customer accounts.",
    highlights: [
      "Designed MongoDB schemas for efficient order and customer management.",
      "Implemented JWT authentication and real-time order tracking.",
      "Shipped secure REST APIs with Node.js and Express.js.",
      "Collaborated with frontend engineers to deliver a seamless ordering experience.",
    ],
    stack: ["Node.js", "Express.js", "MongoDB", "JWT", "REST"],
  },
  {
    role: "Technical Lead & Service Delivery Contributor",
    company: "Nnewi Tech Faculty",
    date: "Aug 2024 – Sep 2025",
    desc: "Drove the backend architecture of a government-focused community e-commerce initiative.",
    highlights: [
      "Designed backend architecture and API structure using Node.js.",
      "Translated business requirements into scalable technical solutions.",
      "Advised on backend scalability, product management, and system design.",
    ],
    stack: ["Node.js", "System Design", "Product", "API Design"],
  },
  {
    role: "Frontend / JavaScript Developer Intern",
    company: "GurutechHQ",
    date: "Mar 2023 – Sep 2023",
    desc: "Built interactive interfaces and integrated frontends with REST APIs in an agile product team.",
    highlights: [
      "Developed interactive UIs and integrated them with backend REST APIs.",
      "Improved application performance and user experience.",
      "Worked in Agile teams using Git for version control.",
    ],
    stack: ["JavaScript", "React", "REST", "HTML/CSS", "Git"],
  },
];

export const projects = [
  {
    name: "Ledger — AI Finance Dashboard",
    tagline: "Personal finance dashboard with real bank data and AI insights.",
    description:
      "A full-stack finance dashboard that connects real bank accounts via Plaid, auto-categorizes spending with a rule-based engine, computes analytics server-side in Postgres, and generates personalized, localized budget tips with Gemini.",
    problem:
      "Most budgeting apps either hide the money math behind black-box algorithms or force manual entry. Ledger needed real bank data, transparent categorization, and AI advice grounded in actual numbers — computed where it belongs, on the server.",
    architecture: [
      "Plaid Link integration syncing real transactions with pagination and dedupe",
      "Rule-based categorization engine with manual override that is never silently overwritten",
      "Spending analytics computed in Postgres functions, not client-side math",
      "Gemini budget tips grounded in real numbers with strict JSON-schema validation",
      "Row Level Security on every table — ownership enforced by Postgres itself",
      "Currency-aware formatting and AI phrasing for NGN, USD, GHS, KES and more",
    ],
    stack: ["TypeScript", "Node.js", "Express.js", "React", "Supabase", "PostgreSQL", "Plaid", "Gemini"],
    github: "https://github.com/Victor-MGB/ledger-AI-Powered-Personal-Finance-Dashboard",
    demo: "https://ledger-ai-powered-personal-finance-dashboard-3w1dbhpmi.vercel.app/",
    visual: "dashboard",
  },
  {
    name: "AttuceAI",
    tagline:
      "AI-powered sales platform for Telegram businesses.",
    description:
      "A platform that lets businesses automate customer interactions, manage products, process orders, and deploy intelligent AI assistants powered by large language models — all inside Telegram.",
    problem:
      "Small businesses on Telegram rely on manual replies and spreadsheet orders. They needed an automated sales layer that handles conversations, catalogs, and checkouts at scale.",
    architecture: [
      "LLM-backed assistant layer handling natural-language product discovery and FAQ resolution",
      "Order and catalog service with transactional consistency for cart and checkout",
      "Modular bot service with rate limiting and idempotent order processing",
      "Prompt and context strategy to keep responses grounded and on-brand",
    ],
    stack: ["Node.js", "Python", "OpenAI", "PostgreSQL", "Redis", "Telegram Bot API"],
    github: "https://github.com/Victor-MGB",
    demo: null,
    visual: "chat",
  },
  {
    name: "Restaurant Ordering Backend",
    tagline: "Scalable backend for an online food-ordering platform.",
    description:
      "A production-grade backend powering online food ordering with authentication, menu management, order processing, and real-time order tracking for customers and kitchens.",
    problem:
      "Restaurants juggle phone orders and error-prone manual tracking. The platform needed a single source of truth for menus, orders, and status updates visible to both customers and staff.",
    architecture: [
      "JWT-based authentication with role-aware access for customers and kitchen staff",
      "Document schema design for menus, orders, and accounts optimized for read-heavy traffic",
      "Idempotent order creation to prevent duplicate checkouts under retries",
      "Order status pipeline feeding real-time tracking to the client",
    ],
    stack: ["Node.js", "Express.js", "MongoDB", "JWT", "REST"],
    github: "https://github.com/Victor-MGB",
    demo: null,
    visual: "dashboard",
  },
  {
    name: "Logistics Management API",
    tagline: "Backend infrastructure for a logistics platform.",
    description:
      "RESTful backend infrastructure for a logistics platform featuring secure authentication, transaction processing, and optimized database design for high-performance operations.",
    problem:
      "Logistics operations generate high volumes of transactions that must remain accurate and auditable. The platform needed reliable, well-structured APIs for users and shipments.",
    architecture: [
      "Secure authentication and role-based access across user and admin flows",
      "Optimized data modeling and indexing for transaction-heavy workloads",
      "RESTful API design with consistent error contracts",
      "Backend performance tuning to keep response times predictable",
    ],
    stack: ["Node.js", "Express.js", "MongoDB", "REST", "JWT"],
    github: "https://github.com/Victor-MGB",
    demo: null,
    visual: "terminal",
  },
];

export const contact = {
  heading: "Let's build something engineered well.",
  subheading:
    "I'm currently open to senior backend, AI, and infrastructure roles at product-driven companies. If you're building something that needs thoughtful backend engineering, let's talk.",
  note: "I usually respond within 24 hours.",
};
