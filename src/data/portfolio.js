import knowflowLogin from "../assets/projects/knowflow/knowflow-login.png";
import knowflowRegister from "../assets/projects/knowflow/knowflow-register.png";
import knowflowDocuments from "../assets/projects/knowflow/knowflow-documents.png";
import knowflowChat from "../assets/projects/knowflow/knowflow-chat.png";
import knowflowRefusal from "../assets/projects/knowflow/knowflow-refusal.png";
import knowflowGrafana from "../assets/projects/knowflow/knowflow-grafana.png";
import knowflowApiDocs from "../assets/projects/knowflow/knowflow-api-docs.png";
import knowflowDemoVideo from "../assets/projects/knowflow/knowflow-live-demo.mp4";

export const profile = {
  name: "Victor Mgbemena",
  monogram: "VM",
  role: "Backend Engineer",
  roles: ["Backend Engineer", "AI Engineer", "Cloud Infrastructure"],
  lead: "I build production-grade backend systems — fintech-grade APIs, AI infrastructure, and the plumbing that keeps platforms running — designed to stay reliable under load and easy to maintain.",
  summary:
    "I design and build backend systems that power AI products, process millions of requests, and stay reliable under load. I focus on clean architecture, well-considered APIs, and shipping systems that engineers enjoy maintaining.",
  location: "Nigeria",
  email: "mgbemenaosonduv@gmail.com",
  phone: "+234 9077955363",
  resumeUrl:
    "https://drive.google.com/file/d/178ElrgS83nhv-1ZJ0dMQ-1RNuHr9LdgR/view?usp=sharing",
  github: "https://github.com/Victor-MGB",
  linkedin: "https://www.linkedin.com/in/victor-osondu777/",
  x: "https://x.com/Victor01808002",
  openToWork: true,
  facts: [
    {
      label: "Currently",
      value: "Open to senior backend & AI engineering roles"
    },
    {
      label: "Focus",
      value: "Fintech, AI infrastructure, distributed systems"
    },
    {
      label: "Experience",
      value: "3+ years building production software"
    },
    {
      label: "Notable build",
      value: "22-stage compliance workflow for a banking backend"
    },
    {
      label: "Based in",
      value: "Nigeria — remote friendly, flexible hours"
    }
  ]
};

export const navLinks = [
  {label: "About", href: "#about"},
  {label: "Skills", href: "#skills"},
  {label: "Experience", href: "#experience"},
  {label: "Projects", href: "#projects"},
  {label: "Contact", href: "#contact"}
];

export const about = {
  paragraphs: [
    "I'm a backend engineer who builds **scalable APIs, intelligent systems, and cloud infrastructure** for AI-powered products. I work primarily with **Node.js, Python, FastAPI, and PostgreSQL**, and I care deeply about reliability, observability, and clean software design.",
    "Over the past few years I've shipped production systems across e-commerce, logistics, fintech, and AI platforms — from order-processing pipelines and **multi-currency banking APIs** to **LLM-powered assistants and RAG pipelines**. I've also contributed to government and enterprise projects as a software engineer during my national service.",
    "I treat engineering as a craft: predictable performance, thoughtful API contracts, and architecture that can grow with the product. I enjoy turning ambiguous problems into simple, well-engineered systems."
  ]
};

export const skills = [
  {
    name: "Languages",
    icon: "code",
    items: ["JavaScript / TypeScript", "Python", "SQL", "HTML & CSS"]
  },
  {
    name: "Backend",
    icon: "server",
    items: [
      "Node.js & Express.js",
      "Python & FastAPI",
      "REST API design",
      "WebSockets & real-time services",
      "Microservices architecture"
    ]
  },
  {
    name: "AI & ML",
    icon: "spark",
    items: [
      "LLM integration (OpenAI, Gemini)",
      "Retrieval-Augmented Generation (RAG)",
      "AI agents & workflow automation",
      "Prompt engineering",
      "LangChain & vector search"
    ]
  },
  {
    name: "Cloud & DevOps",
    icon: "cloud",
    items: [
      // "AWS (EC2, S3, Lambda)",
      "Docker & containerization",
      "GitHub Actions & CI/CD",
      "Nginx & reverse proxying",
      "Linux server administration"
    ]
  },
  {
    name: "Databases",
    icon: "database",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Redis (caching & queues)",
      "Vector databases"
    ]
  },
  {
    name: "Tools & Practices",
    icon: "tool",
    items: [
      "Git & GitHub",
      "Postman & API testing",
      "Clean architecture & design patterns",
      "Agile & cross-functional collaboration"
    ]
  }
];

export const experience = [
  {
    role: "Technical Lead",
    company: "AttuceOrg — Azadey (Fintech)",
    date: "2026 – Present",
    desc: "Lead engineer of Azadey, a production Nigerian fintech platform that sells airtime and data on a missed call — no app, no wallet balance required. Owning the money pipeline: payments, fraud, multi-provider failover, and financial integrity under real-money conditions.",
    highlights: [
      "Designed the flash-to-value architecture: call webhook → Redis-locked, BullMQ-queued processing → idempotent wallet settlement → multi-provider VTU delivery → WhatsApp/Telegram/SMS notification",
      "Built zero-balance backup charging against Paystack Direct Debit and cards, so a flash succeeds even when the wallet is empty — with HMAC-verified, idempotent crediting",
      "Shipped a 5-provider VTU router with automatic failover and per-provider circuit breakers, plus a self-healing float manager with full treasury reconciliation",
      "Enforced financial integrity: Row-Level Security on all financial tables, atomic deduct-and-status RPCs, session-id dedup, and a documented vulnerability audit with fixes",
      "Led the team building Telegram/WhatsApp bots, family plans, subscription billing, rate limiting, and admin dashboards"
    ],
    stack: [
      "Node.js",
      "TypeScript",
      "Express",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "Paystack",
      "Monnify",
      "Telegram",
      "WhatsApp"
    ],
    links: {
      demo: "https://t.me/azadey_bot"
    }
  },
  {
    role: "Freelance Web Developer & Consultant",
    company: "Able World Consultancy — Client Project",
    date: "2025 – Present",
    desc: "Designed, built, and deployed a production marketing website for a study-abroad consultancy in Ahmedabad, India — owning the full engagement from discovery to live launch for a paying client.",
    highlights: [
      "Delivered a complete multi-page site (Home, About, Services, Destinations, Contact) from design to production, building trust with a real client through clear scoping and communication.",
      "Crafted a reusable Tailwind design system (brand, accent, panel, surface tokens) for a consistent, on-brand experience across every page.",
      "Added scroll reveals and page transitions with Framer Motion plus an Embla testimonial slider for a polished, conversion-focused user experience.",
      "Engineered SEO-ready pages, a search widget for study destinations, and WhatsApp CTAs to drive client enquiries.",
      "Shipped CI/CD via Netlify with SPA redirects and instant preview deploys — a smooth, professional release workflow.",
      "Built for accessibility, responsiveness, and fast page loads so the site performs on any device, from any location."
    ],
    stack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "Framer Motion",
      "Netlify"
    ],
    links: {
      demo: "https://ableworldconsultancy.netlify.app/",
      github: "https://github.com/Victor-MGB/ableworldconsultancy"
    }
  },
  {
    role: "Software Engineer",
    company: "Panda Giant Developer Ltd",
    date: "Apr 2025 – Mar 2026",
    desc: "Built backend systems and AI-powered solutions for government and enterprise clients, focused on scalability, security, and performance.",
    highlights: [
      "Developed scalable backend systems with Node.js and Python for enterprise and public-sector deployments.",
      "Built AI-powered automation and intelligent workflows that reduced manual operational effort.",
      "Designed secure backend architectures and optimized application performance.",
      "Delivered production-ready software on schedule with cross-functional teams."
    ],
    stack: ["Node.js", "Python", "PostgreSQL", "Redis", "Docker"]
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
      "Collaborated with frontend engineers to deliver a seamless ordering experience."
    ],
    stack: ["Node.js", "Express.js", "MongoDB", "JWT", "REST"]
  },
  {
    role: "Technical Lead & Service Delivery Contributor",
    company: "Nnewi Tech Faculty",
    date: "Aug 2024 – Sep 2025",
    desc: "Drove the backend architecture of a government-focused community e-commerce initiative.",
    highlights: [
      "Designed backend architecture and API structure using Node.js.",
      "Translated business requirements into scalable technical solutions.",
      "Advised on backend scalability, product management, and system design."
    ],
    stack: ["Node.js", "System Design", "Product", "API Design"]
  },
  {
    role: "Frontend / JavaScript Developer Intern",
    company: "GurutechHQ",
    date: "Mar 2023 – Sep 2023",
    desc: "Built interactive interfaces and integrated frontends with REST APIs in an agile product team.",
    highlights: [
      "Developed interactive UIs and integrated them with backend REST APIs.",
      "Improved application performance and user experience.",
      "Worked in Agile teams using Git for version control."
    ],
    stack: ["JavaScript", "React", "REST", "HTML/CSS", "Git"]
  }
];

export const projects = [
  {
    name: "Azadey — Flash-to-Top-Up Fintech Platform",
    tagline:
      "Flash a number. Airtime/data in ~10 seconds. Zero balance needed.",
    description:
      "Production-grade Nigerian fintech backend (I lead the engineering) that sells airtime and data on a missed call — no app, no USSD menu, no wallet balance required. Flashes flow through Redis-locked, BullMQ-queued pipelines backed by Paystack/Monnify rails, five-provider VTU failover, a self-healing float manager, and family plans — all under real-money conditions.",
    problem:
      "Most Nigerians recharge via USSD or apps — both need balance, data, or patience. Azadey lets anyone buy mobile top-up with a single missed call: the platform must verify the caller, run fraud and rate-limit checks, charge a wallet or backup card, and deliver through a provider that may be down — reliably, idempotently, and in seconds.",
    architecture: [
      "Flash-to-value pipeline: Africa's Talking call webhook ACKs in milliseconds, real work runs async in BullMQ — per-phone Redis locks (SET NX EX 15s), session-id dedup, fraud/rate-limit checks, atomic wallet debit, VTU delivery, then WhatsApp/Telegram/SMS/E-mail notification",
      "Zero-balance backup charging: an empty wallet auto-charges a linked Paystack bank mandate or card and credits the wallet so the flash still succeeds — HMAC-verified and idempotent, so no double-charges",
      "Multi-provider VTU router with circuit breaker: 5 aggregators in automatic failover (VTUPass primary), per-provider circuit breaking after 5 failures, normalized responses, float checks, and low-float Telegram alerts",
      "Self-healing float manager: re-reads the provider balance after every flash, auto-refills the float to base from the treasury via idempotent Paystack transfers, funds large purchases on demand, and writes every movement to treasury_ledger",
      "Concurrency-hardened: Redis phone locks block racing flashes from the same number, DB unique constraints + deduct_wallet_and_update_txn RPC kill double-credit/double-deduct, and webhook replays get caught by session-id dedup",
      "Security-obsessed: Row-Level Security on every financial table, Paystack HMAC verification on all webhooks, IP allowlists, JWT-protected admin, XSS escaping, and secrets stripped from logs",
      "Multi-channel engagement: Telegram bot (grammY) and WhatsApp bot (Baileys) for onboarding, orders, gift flashes, and family management — plus SMS and email"
    ],
    stack: [
      "Node.js",
      "TypeScript",
      "Express 5",
      "PostgreSQL",
      "Supabase",
      "Redis",
      "BullMQ",
      "Paystack",
      "Monnify",
      "Telegram Bot",
      "Africa's Talking"
    ],
    github: null,
    demo: "https://t.me/azadey_bot",
    demoLabel: "Try the bot",
    visual: "flash"
  },
  {
    name: "KnowFlow — Multi-tenant AI Knowledge Platform",
    tagline:
      "Ingest documents, retrieve with vectors, answer with RAG — every answer cited.",
    description:
      'A production-shaped, test-pinned AI knowledge platform built in 30 days, not a demo: asynchronous document ingestion (extract → chunk → embed → index), pgvector semantic retrieval scoped per tenant inside the query itself, grounded RAG answers where every claim cites document · section · page, an honest "I don\'t know" guardrail, a golden evaluation harness, and Prometheus/Grafana observability. 384 tests passing across backend and AI services.',
    problem:
      "Teams sit on piles of private documents — PDFs, policies, runbooks, specs. Generic LLM chat can't answer from them: the model never saw the data, hallucinates freely, and would leak one tenant's documents into another's answers.",
    architecture: [
      "Multi-tenant isolation: documents, chunks, vectors, conversations, and users scoped to an org — the tenant filter lives inside the pgvector HNSW search SQL, so a caller physically cannot retrieve chunks it may not read",
      "Async ingestion pipeline: upload → Redis RQ queue → worker (extract → chunk → embed → index), with a durable two-phase job ledger in Postgres so a crashed worker never loses the truth",
      "RAG with citations: only retrieved, permission-filtered chunks enter the context; answers are streamed via SSE with a { content, citations, refused } contract the UI renders",
      'Refusal honesty: when no chunk clears the confidence floor the model answers the canonical "I don\'t know" with refused: true — the chat UI\'s "Refuse weak matches" toggle makes the guardrail exercisable',
      "Evaluation harness: golden corpus of deterministic PDFs with outline bookmarks + metric pins (recall/hit/citation/hallucination) that run in CI — hallucination rate pinned at 0.000",
      "Observability: every ingestion job and RAG request emits Prometheus metrics from backend, ai-service, and worker, on a provisioned Grafana dashboard",
      "Auth & teams: JWT access + rotating refresh tokens, per-tenant registration, four-role orgs (OWNER > ADMIN > MEMBER > VIEWER), invitations"
    ],
    stack: [
      "TypeScript",
      "Node.js",
      "Fastify",
      "Python",
      "FastAPI",
      "React",
      "PostgreSQL",
      "pgvector",
      "Redis",
      "MinIO",
      "Docker",
      "RAG"
    ],
    github: "https://github.com/Victor-MGB/ai-knowledge-platform",
    demo: null,
    visual: "chat",
    gallery: [
      {
        type: "image",
        src: knowflowChat,
        label: "Cited RAG answer",
        alt: "KnowFlow chat — a grounded answer with citations to the source document, section, and page"
      },
      {
        type: "image",
        src: knowflowDocuments,
        label: "Documents pipeline",
        alt: "KnowFlow document list with READY documents showing page and chunk counts after async ingestion"
      },
      {
        type: "video",
        src: knowflowDemoVideo,
        poster: knowflowChat,
        label: "Live demo (60s)",
        alt: "KnowFlow live screen recording — login, cited RAG answers, honest refusal, and Grafana/Prometheus observability"
      },
      {
        type: "image",
        src: knowflowRefusal,
        label: "Honest refusal",
        alt: "KnowFlow refusing an out-of-corpus question instead of hallucinating"
      },
      {
        type: "image",
        src: knowflowGrafana,
        label: "Observability",
        alt: "Provisioned Grafana dashboard showing ingestion and RAG metrics"
      },
      {
        type: "image",
        src: knowflowApiDocs,
        label: "OpenAPI contract",
        alt: "Swagger / OpenAPI docs for the AI service"
      },
      {
        type: "image",
        src: knowflowRegister,
        label: "Tenant registration",
        alt: "KnowFlow registration — mints a tenant and OWNER in one transaction"
      },
      {
        type: "image",
        src: knowflowLogin,
        label: "Login",
        alt: "KnowFlow sign-in screen"
      }
    ]
  },
  {
    name: "Halifax Offshore Private Bank — Backend API",
    tagline: "Production banking backend with a 22-stage compliance workflow.",
    description:
      "A complete digital-banking backend: JWT auth, multi-currency accounts, ACID-safe transfers, an in-app notification system, admin analytics, and a 22-stage withdrawal compliance pipeline — built with Node.js, Express, and MongoDB and deployed with Docker.",
    problem:
      "Private banking demands institutional-grade security and compliance — not just CRUD. Every withdrawal must pass strict verification before funds move, and every financial write must stay consistent even under retries or partial failures.",
    architecture: [
      "22-stage withdrawal compliance workflow with a per-stage audit trail (triggeredAt, resolvedAt, adminNote) and automatic user notifications at every stage",
      "Transfers wrapped in MongoDB transactions for atomic debit/credit — no lost or duplicated funds",
      "Multi-currency accounts with auto-generated 10-digit numbers, freeze/suspend controls, and role-based access (user / admin)",
      "JWT + bcrypt auth (10 salt rounds), suspended-account login blocking, and CORS locked to configured frontend origins",
      "Admin analytics (volume, trends, categories), user/account management, and a priority-labelled support-ticket system",
      "Dockerized with 6 health/monitoring endpoints and a demo seeder (3 users, 30+ transactions)"
    ],
    stack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "bcryptjs",
      "Docker"
    ],
    github: "https://github.com/Victor-MGB/halifax_backend",
    demo: "https://transcendent-semifreddo-84170b.netlify.app/",
    visual: "bank"
  },
  {
    name: "SwiftCargo",
    tagline:
      "Logistics tracking platform where every shipment is confirmed by a real admin.",
    description:
      "A full-stack logistics platform for ordering, tracking, and communicating shipment status. Clients place orders or receive a tracking code, upload payment proofs, and follow their parcel on a map — but nothing becomes visible until an admin manually approves it. Payments happen off-platform via WhatsApp/Telegram.",
    problem:
      "Real-world logistics runs on phone calls, trust, and manual verification — not automated systems. Shipments need a visible, official status, but the operator must personally confirm every step (order, payment, location) before clients see anything.",
    architecture: [
      "Pending → approved approval cycle: new orders, payment proofs, and map/location updates all stay hidden from clients until an admin explicitly approves them",
      "Dual dashboards: a public storefront + client dashboard, and an admin dashboard for products, the full order queue, guest tracking-code generation, and payment-proof review",
      "Map tracking built on OpenStreetMap — admin searches or clicks a spot, it saves as pending, and clients only ever see the last approved location",
      "JWT + bcrypt auth with separate client and admin roles, plus in-app notifications (bell icon) for every status and location change",
      "Guest tracking codes let unregistered clients follow a parcel — generated and shared manually by the admin",
      "Payment proofs routed to a dedicated review queue where approval also flips the order's status"
    ],
    stack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "React",
      "Vite",
      "Tailwind CSS",
      "OpenStreetMap",
      "JWT"
    ],
    github: "https://github.com/Victor-MGB/SwiftCargo",
    demo: "https://swiftcarg.netlify.app/",
    visual: "map"
  },
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
      "Currency-aware formatting and AI phrasing for NGN, USD, GHS, KES and more"
    ],
    stack: [
      "TypeScript",
      "Node.js",
      "Express.js",
      "React",
      "Supabase",
      "PostgreSQL",
      "Plaid",
      "Gemini"
    ],
    github:
      "https://github.com/Victor-MGB/ledger-AI-Powered-Personal-Finance-Dashboard",
    demo: "https://ledger-ai-powered-personal-finance-dashboard-3w1dbhpmi.vercel.app/",
    visual: "dashboard"
  },
  {
    name: "AttuceAI",
    tagline: "AI-powered sales platform for Telegram businesses.",
    description:
      "A platform that lets businesses automate customer interactions, manage products, process orders, and deploy intelligent AI assistants powered by large language models — all inside Telegram.",
    problem:
      "Small businesses on Telegram rely on manual replies and spreadsheet orders. They needed an automated sales layer that handles conversations, catalogs, and checkouts at scale.",
    architecture: [
      "LLM-backed assistant layer handling natural-language product discovery and FAQ resolution",
      "Order and catalog service with transactional consistency for cart and checkout",
      "Modular bot service with rate limiting and idempotent order processing",
      "Prompt and context strategy to keep responses grounded and on-brand"
    ],
    stack: [
      "Node.js",
      "Python",
      "OpenAI",
      "PostgreSQL",
      "Redis",
      "Telegram Bot API"
    ],
    github: "https://github.com/Victor-MGB",
    demo: null,
    visual: "chat"
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
      "Order status pipeline feeding real-time tracking to the client"
    ],
    stack: ["Node.js", "Express.js", "MongoDB", "JWT", "REST"],
    github: "https://github.com/Victor-MGB",
    demo: null,
    visual: "dashboard"
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
      "Backend performance tuning to keep response times predictable"
    ],
    stack: ["Node.js", "Express.js", "MongoDB", "REST", "JWT"],
    github: "https://github.com/Victor-MGB",
    demo: null,
    visual: "terminal"
  }
];

export const contact = {
  heading: "Let's build something engineered well.",
  subheading:
    "I'm currently open to senior backend, AI, and infrastructure roles at product-driven companies. If you're building something that needs thoughtful backend engineering, let's talk.",
  note: "I usually respond within 24 hours."
};
