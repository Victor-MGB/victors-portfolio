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
  role: "Backend Software Engineer",
  roles: ["Backend Engineer", "Payments & APIs", "Distributed Systems"],
  lead: "I build backend systems for payments and financial products — APIs, ledgers, webhooks, queues and workers — with Go, TypeScript/Node.js and Python/FastAPI, designed to stay reliable under load and easy to maintain.",
  summary:
    "I design and build production backend systems for payments, APIs and distributed workloads. My work spans Paystack and Monnify integrations, multi-provider failover, Redis-backed queues, PostgreSQL optimization, authentication, CI/CD and production monitoring.",
  location: "Nigeria",
  email: "mgbemenaosonduv@gmail.com",
  phone: "+234 9077955363",
  resumeUrl: "Mgbemena_Victor_Backend_Software_Engineer.pdf",
  github: "https://github.com/Victor-MGB",
  linkedin: "https://www.linkedin.com/in/victor-osondu777/",
  x: "https://x.com/Victor01808002",
  openToWork: true,
  facts: [
    {
      label: "Currently",
      value: "Leading engineering at Attuce — Azadey, Azapay, Blip"
    },
    {
      label: "Focus",
      value: "Payments, APIs & distributed systems"
    },
    {
      label: "Experience",
      value: "5+ years building production software"
    },
    {
      label: "Notable build",
      value: "Go payment infrastructure with idempotent webhooks"
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
  {label: "Education", href: "#education"},
  {label: "Contact", href: "#contact"}
];

export const about = {
  paragraphs: [
    "I'm a backend software engineer focused on **payments, APIs and distributed systems**. I work with **Go, TypeScript/Node.js and Python/FastAPI**, and I care deeply about reliability, observability, and clean software design.",
    "I've shipped production systems across fintech, e-commerce, logistics and AI — from **Paystack/Monnify payment workflows with multi-provider failover** and **Redis-backed queues and workers** to **LLM assistants and RAG pipelines**. I've also owned backend services end to end, including systems serving 200K+ monthly requests at 99.98% uptime.",
    "I lead engineering across Attuce's live products — Azadey (fintech), Azapay (spend and savings automation) and Blip (notification and call platform) — and co-own Blip's technical production with a backend focus.",
    "Right now I'm deepening my Go engineering with a financial operations and payment infrastructure platform: gin services, goroutines and channels, idempotent webhook handling, PostgreSQL, Redis and Docker, designed around auditability and graceful failure."
  ]
};

export const skills = [
  {
    name: "Languages",
    icon: "code",
    items: ["Go", "TypeScript / JavaScript", "Python", "SQL"]
  },
  {
    name: "Backend",
    icon: "server",
    items: [
      "Go & Gin",
      "Node.js, Express & Fastify",
      "Python & FastAPI",
      "REST APIs & webhooks",
      "Microservices & event-driven design"
    ]
  },
  {
    name: "Payments & Integrations",
    icon: "tool",
    items: [
      "Paystack & Monnify",
      "Payment workflows & multi-provider failover",
      "Idempotency & failure handling",
      "WhatsApp Business & Telegram Bot APIs",
      "CRM integrations"
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
      "pgvector & vector search"
    ]
  },
  {
    name: "Cloud & DevOps",
    icon: "cloud",
    items: [
      "Docker & containerization",
      "GitHub Actions & CI/CD",
      "Nginx & reverse proxying",
      "Linux server administration",
      "Production monitoring & logging"
    ]
  },
  {
    name: "Data & Messaging",
    icon: "database",
    items: [
      "PostgreSQL (indexing & query optimization)",
      "MongoDB",
      "Redis caching, queues & Pub/Sub",
      "BullMQ & background workers",
      "Database indexing & query tuning"
    ]
  },
  {
    name: "Engineering Practices",
    icon: "code",
    items: [
      "Go concurrency: goroutines, channels, context",
      "JWT, OAuth2 & RBAC",
      "Unit, integration & E2E testing",
      "Code review & technical documentation",
      "Agile & stakeholder collaboration"
    ]
  }
];

export const experience = [
  {
    role: "Backend AI Engineer (Contract)",
    company: "isoSafe — Phase 1a",
    date: "Oct – Nov 2026",
    desc: "isoSafe adds AI video intelligence to the CCTV systems a customer already owns — detecting events on site and raising alerts in a cloud dashboard. I was contracted for the two-week Phase 1a build, where I connected on-site agents to the cloud and made that link reliable enough to demo end to end.",
    highlights: [
      "Built the FastAPI agent gateway and its on-site agent client so a camera site could run without a local database, with constant-time-checked bearer-token auth on every request",
      "Streamed live camera frames over WebSockets into Redis pub/sub for the dashboard, with automatic reconnection and exponential backoff when the network drops",
      "Added heartbeat reporting and a watchdog so the cloud could see which agents were healthy and alert operators when a site went offline",
      "Delivered ETag-cached config polling so camera, zone and rule edits made in the dashboard reached agents within ~15 seconds without a redeploy",
      "Made incident delivery safe to retry: UUID idempotency on the server, a bounded outbox that survives cloud outages, and private S3 snapshot uploads through presigned URLs",
      "Verified loitering detection and the full agent → cloud → dashboard flow with automated tests, demo scripts and AWS/nginx/Terraform deployment config"
    ],
    stack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "WebSockets",
      "AWS S3",
      "Terraform",
      "Docker",
      "nginx",
      "pytest"
    ]
  },
  {
    role: "Technical Lead & Co-Owner",
    company: "Attuce — Blip",
    date: "Sep 2026 – Present",
    desc: "Co-own the technical production of Blip, a live notification and call platform that turns tags in Google/Microsoft spreadsheets into tracked, wallet-funded calls, SMS and in-app notifications. I own the backend: a Go modular monolith handling sheet sync, telephony, wallet accounting, auth and payments.",
    highlights: [
      "Built the send lifecycle end to end — tag detection → 5-minute grace window → tier selection → call → wallet debit → sheet write-back — proven by 7 PRD scenarios and 116 integration tests against real Postgres and Redis",
      "Implemented the asynchronous telephony engine with an Africa's Talking adapter, signed status webhooks, carrier voice documents and per-tier hang-up rules (Beep, PickCut, Fullcall)",
      "Shipped Clerk-backed auth with signed webhooks that mirror accounts and sessions, plus encrypted OAuth token storage for Google Sheets and OneDrive/Excel connections",
      "Delivered Paystack subscriptions, an Asynq/Redis worker fleet, readiness probes for DB/Redis/queue/auth, and Swagger/OpenAPI docs in production"
    ],
    stack: [
      "Go 1.26",
      "Gin",
      "GORM",
      "PostgreSQL",
      "Redis",
      "Asynq",
      "Clerk",
      "Africa's Talking",
      "Paystack",
      "Docker"
    ],
    links: {
      docs: "https://blip-e98k.onrender.com/swagger/index.html",
      app: "https://bleecle.top"
    }
  },
  {
    role: "Technical Lead",
    company: "Attuce — Azapay",
    date: "Aug 2026 – Present",
    desc: "Lead engineering for Azapay, a production spend and savings automation product. I own the Python/FastAPI backend: intent recording, scheduled money movement, confirmation and reconciliation for recurring pays and saves.",
    highlights: [
      "Designed the intent → execute → confirm → reconcile pipeline so PostgreSQL is the single source of financial truth and Redis/Celery only coordinate work",
      "Built FastAPI intent intake and webhook handling with idempotency keys minted with the intent and reused across every worker retry",
      "Integrated Paystack for money movement and Cowrywise for savings behind sealed adapters, with reconciliation sweeps and append-only audit events",
      "Shipped the production API with OpenAPI docs alongside the Next.js web app, with reconciliation and audit on every execution path"
    ],
    stack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Next.js",
      "Paystack",
      "Cowrywise",
      "Docker"
    ],
    links: {
      docs: "https://azapay.onrender.com/docs",
      app: "https://azapay-frontend.vercel.app"
    }
  },
  {
    role: "Technical Lead",
    company: "Attuce — Azadey (Fintech)",
    date: "Jun 2026 – Present",
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
      demo: "https://t.me/azadey_bot",
      demoLabel: "Try the bot",
      docs: "https://azadey.onrender.com/api-docs"
    }
  },
  {
    role: "Backend Engineer — FinPay (Fintech Platform)",
    company: "Personal Project",
    date: "2025",
    desc: "Built a production-oriented fintech backend from the ground up: 48+ secure REST endpoints covering core financial workflows, with security hardening, caching and automated delivery.",
    highlights: [
      "Implemented 48+ secure RESTful endpoints for account, transaction and financial workflows",
      "Added JWT authentication, RBAC and security hardening before first user contact",
      "Structured modular service boundaries to support future microservice decomposition",
      "Used Redis caching and Pub/Sub to cut repeated database work and improve response under traffic spikes",
      "Shipped GitHub Actions CI/CD and automated deploys, maintaining 99.9% availability and average API latency below 80ms",
      "Added production monitoring and operational logging for application and infrastructure issues"
    ],
    stack: [
      "Node.js",
      "TypeScript",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "JWT",
      "RBAC",
      "GitHub Actions"
    ]
  },
  {
    role: "Software Engineer — AI-driven Shopping App",
    company: "Umarks Technology",
    date: "2024 – 2025",
    desc: "Architected and optimized the Node.js backend behind an AI-driven shopping app serving 200K+ monthly requests at 99.98% uptime.",
    highlights: [
      "Scaled a Node.js backend processing 200K+ monthly requests at 99.98% uptime",
      "Built and maintained REST APIs handling 10K+ daily requests with 99.9% reliability",
      "Implemented JWT and OAuth2 authentication and authorization for customer-facing services",
      "Optimized PostgreSQL schemas, indexes and queries — 30% lower query latency and 20% lower system load",
      "Applied Redis caching and query optimization to improve API response times by 25%"
    ],
    stack: ["Node.js", "PostgreSQL", "Redis", "JWT", "OAuth2", "REST"]
  },
  {
    role: "Backend Engineer — AI Sales Automation",
    company: "Attuce, Lagos",
    date: "2022 – 2025",
    desc: "Built the backend for a multi-tenant AI sales automation platform running always-on customer conversations and automated business workflows across WhatsApp and Telegram.",
    highlights: [
      "Designed backend architecture around scalability and integration needs, reducing implementation rework",
      "Built REST APIs with Node.js, Fastify and TypeScript for internal and external services",
      "Integrated WhatsApp Business API and Telegram Bot API for automated customer conversations",
      "Built CRM integrations that synchronize sales data with external services in real time",
      "Used Redis queues and workers for event-driven, non-blocking concurrent workloads",
      "Monitored production performance — 15% efficiency gain and 10% lower resource consumption"
    ],
    stack: [
      "Node.js",
      "Fastify",
      "TypeScript",
      "Redis",
      "WhatsApp Business API",
      "Telegram Bot API",
      "CRM Integrations"
    ]
  },
  {
    role: "Backend Engineer",
    company: "Coldigify",
    date: "2023 – 2024",
    desc: "Built scalable backend services and REST APIs for product teams, with a focus on data performance and secure, repeatable releases.",
    highlights: [
      "Built REST APIs with Node.js, Express, TypeScript and MongoDB",
      "Designed schemas, indexes and queries that improved data retrieval performance by 35%",
      "Implemented authentication, authorization and data encryption controls",
      "Used Git branching strategies, CI/CD and automated testing for reliable releases",
      "Diagnosed and resolved backend performance and integration issues"
    ],
    stack: ["Node.js", "Express.js", "TypeScript", "MongoDB", "JWT", "CI/CD"]
  },
  {
    role: "Backend & AI Integration Engineer",
    company: "AiBodex Technologies",
    date: "2021 – 2023",
    desc: "Built backend APIs and third-party integrations, owning projects from technical feasibility analysis through implementation and delivery.",
    highlights: [
      "Built backend APIs and third-party integrations with Node.js, maintaining 99.9% service uptime",
      "Improved backend latency by 15% through application and integration optimization",
      "Introduced code reviews and testing improvements — 40% fewer reported bugs and 35% higher unit-test coverage",
      "Owned backend projects end to end, including feasibility, implementation and delivery"
    ],
    stack: [
      "Node.js",
      "REST APIs",
      "Third-party Integrations",
      "Testing",
      "Code Review"
    ]
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
    role: "Service Delivery Manager & Technical Lead",
    company: "Technology Faculty",
    date: "2023 – 2024",
    desc: "Managed outsourced technical delivery across client companies while leading backend architecture for a government-focused community e-commerce initiative.",
    highlights: [
      "Managed 20+ outsourced technical agents across client companies with SLA compliance above 85%",
      "Designed operational KPIs, QA frameworks and escalation processes — 18% better first-call resolution",
      "Led continuous-improvement initiatives that reduced ticket backlog by 35% in six months",
      "Designed Node.js backend architecture and API structure for a government-focused community e-commerce initiative",
      "Translated business requirements into scalable technical solutions and advised on system design"
    ],
    stack: [
      "Node.js",
      "Service Delivery",
      "QA & KPIs",
      "Escalation Management",
      "API Design",
      "System Design"
    ]
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
    name: "Advanced E-Commerce Platform",
    category: "Selected Project · Personal Build",
    tagline:
      "Full-stack e-commerce platform with secure JWT auth, role-based admin access, Paystack payments with verified webhooks, and production deployment across Netlify and Render.",
    description:
      "A full-stack storefront and admin dashboard built as a personal project. The catalog holds 24 products across 6 categories, 11 subcategories and 4 brands, with search/filtering, cart, coupons, wishlist, orders, user accounts and admin management. The React app runs against a live Express/MongoDB API or a seeded demo mode, with currency-aware pricing and product/category image delivery.",
    problem:
      "An e-commerce app cannot trust the browser for access control or order creation. Stale client-side roles can expose admin screens, and a retried payment webhook can create the same order twice. This build puts role checks on the server and ties order creation to a verified Paystack reference with stock validation.",
    architecture: [
      "Built the catalog, search/filtering, cart, coupons, wishlist, orders, user accounts and admin dashboard across React and Express/MongoDB",
      "JWT authentication where signup always creates a user account, and admin routes validate roles server-side instead of trusting localStorage",
      "Paystack checkout with HMAC-signed webhooks, payment reference idempotency, stock validation and automatic order creation",
      "Responsive storefront with live API mode and seeded demo mode, currency-aware pricing and product/category image delivery",
      "Deployed the React frontend on Netlify and the Express/MongoDB API on Render with CORS, SPA routing, environment variables and webhook handling configured"
    ],
    diagram: [
      {label: "React storefront", sub: "Netlify"},
      {label: "Express API", sub: "Render"},
      {label: "MongoDB", sub: "catalog · users · orders"},
      {label: "Paystack", sub: "signed webhook → order"}
    ],
    learned: [
      "Client state is a convenience, not a security boundary: admin access is now checked on the server on every protected route.",
      "Payment flows fail in awkward places — CORS mismatches, Paystack currency mismatch, token loss on redirect and delayed webhooks were all debugged against the deployed app.",
      "Verifying the reference server-side and keying order creation to it makes checkout safe to retry, even when the webhook arrives late or a Render instance is waking up."
    ],
    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Paystack",
      "JWT",
      "Netlify",
      "Render"
    ],
    github: "https://github.com/Victor-MGB/Advanced_E_commerce",
    demo: "https://advanced-e-commerce-g674.netlify.app/",
    demoLabel: "Live demo",
    visual: "storefront"
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
    name: "QuotexZainTrader — Telegram Investment Bot",
    tagline:
      "A full-stack investment product delivered entirely inside Telegram.",
    description:
      "An end-to-end Telegram investment platform I built as full-stack developer: a Grammy/TypeScript bot, PostgreSQL data model and migrations with Drizzle, and private Supabase Storage for media. Members register, view plans, deposit, withdraw, track balances and referrals; admins approve money movement, manage users and publish moderated testimonies.",
    problem:
      "A Telegram-first investment product cannot rely on a separate web app to earn trust. Members need clear balances and history, while operators need controls that survive restarts, resist double approvals, and keep uploaded proof available after deploys.",
    architecture: [
      "Built the whole bot in TypeScript with Grammy — webhook and polling modes, inline-keyboard screens, HTML-safe rendering, error boundaries and rate limiting",
      "Designed PostgreSQL schema and 7 Drizzle migrations for users, balances, whitelist, access requests, admins, referrals, testimonies and a transaction ledger",
      "Made money movement safe with DB transactions, row locks and a pending-status guard — approvals apply balance changes once, withdrawals cannot overdraw, and manual corrections write signed adjustment rows",
      "Added banking-style in-memory sessions with inactivity timeout, logout and a watchdog, plus a member gate that blocks every non-auth screen until there is a live login and a real account",
      "Captured referral deep links before the access gate so first-touch attribution works even when the invitee has no account yet",
      "Built a moderated testimony feed with member submissions, admin publishing, soft deletes with undo, and private Supabase Storage served through short-lived signed URLs",
      "Shipped an admin console for access requests, transaction queues, user promotion/removal and balance management, with Pino logging and a throwaway-database regression suite"
    ],
    stack: [
      "TypeScript",
      "Node.js",
      "Grammy",
      "PostgreSQL",
      "Drizzle ORM",
      "Supabase Storage",
      "Pino",
      "Zod",
      "Webhooks"
    ],
    github: "https://github.com/Victor-MGB/Quotetexzaintrader",
    demo: "https://t.me/QuotexZainTrader_Bot",
    demoLabel: "Open bot",
    visual: "chat"
  },
  {
    name: "NEXUS — Financial Operations & Payment Infrastructure",
    tagline:
      "Go-based payment infrastructure with idempotent webhooks and auditable workflows.",
    description:
      "An in-progress Go platform for financial operations and payments: Gin services, PostgreSQL and Redis for authentication, payments, transaction processing and asynchronous work. Built around goroutines, event-driven service boundaries and auditability.",
    problem:
      "Payment systems fail in awkward places — webhooks retry, providers time out, and background jobs must never post twice. NEXUS is being built so every payment event is validated, idempotent and auditable from the start.",
    architecture: [
      "Go/Gin services with PostgreSQL and Redis for auth, payments and transaction processing",
      "Webhook workflows with idempotency, validation, failure handling and structured retries",
      "Go concurrency with goroutines, channels and context cancellation for background workloads",
      "Microservice-oriented boundaries with asynchronous communication between components",
      "Dockerized services and CI/CD for automated testing and deployment",
      "Reliability, observability, security and auditability as first-class design constraints"
    ],
    stack: [
      "Go",
      "Gin",
      "PostgreSQL",
      "Redis",
      "Docker",
      "GitHub Actions",
      "Payment APIs"
    ],
    github: null,
    demo: null,
    visual: "bank"
  },
  {
    name: "Aza/Flow — Savings & Payment Platform",
    tagline:
      "Envelope-based savings and scheduled money movement with a ledger-derived history.",
    description:
      "Backend for a savings and payment platform: savings goals, scheduled transactions and external funding connections. An envelope model with database constraints keeps parent allocations exactly reconciled with child allocations, and transaction history is derived from an auditable ledger.",
    problem:
      "Savings products break when allocations drift from their sub-envelopes or when scheduled payments execute twice. Aza/Flow keeps money movement reconcilable by design and derives history from ledger entries instead of mutable balances.",
    architecture: [
      "Envelope-based financial data model with database constraints enforcing parent/child reconciliation",
      "Ledger-derived transaction history for a fully auditable record of activity",
      "APIs for savings goals, scheduled transactions and external funding connections",
      "Scheduled processing for future savings executions, payment flows and lock releases",
      "End-to-end tests from bank funding through payment processing and savings execution"
    ],
    stack: [
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Payment APIs",
      "Scheduled Jobs"
    ],
    github: null,
    demo: null,
    visual: "dashboard"
  },
  {
    name: "FinPay — Fintech Platform Backend",
    tagline:
      "48+ secure financial endpoints with Redis caching and sub-80ms latency.",
    description:
      "A production-oriented fintech backend built from scratch with modular service boundaries, JWT/RBAC security and CI/CD. It covers core financial workflows with automated deploys, monitoring and Redis-backed performance work.",
    problem:
      "A fintech backend has to be secure before first contact and fast under traffic spikes. FinPay was designed with modular boundaries, cached reads and automated delivery so it could stay maintainable and responsive.",
    architecture: [
      "48+ secure REST endpoints covering core financial workflows",
      "JWT authentication, RBAC and security hardening completed before first user contact",
      "Modular service boundaries that support future decomposition into microservices",
      "Redis caching and Pub/Sub to reduce repeated database reads and absorb traffic spikes",
      "GitHub Actions CI/CD with automated deployment — 99.9% availability and <80ms average API latency",
      "Production monitoring and operational logging"
    ],
    stack: [
      "Node.js",
      "TypeScript",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "JWT",
      "RBAC",
      "GitHub Actions"
    ],
    github: null,
    demo: null,
    visual: "terminal"
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
    name: "Mekite — Crypto Investment Platform",
    tagline:
      "Full-stack crypto investing: user dashboard, admin console, and the API behind both.",
    description:
      "Mekite (Bit Flux Capital) is a full-stack crypto investment platform I built end to end. Members can register, fund accounts, buy investment plans, track balances and referrals, and request withdrawals; a separate admin console reviews deposits and withdrawals, manages users, and controls bonuses. I built the React client and the Express/MongoDB API.",
    problem:
      "An investment platform has two jobs at once: give members a clear, trustworthy view of their money, and give operators control over every state change. That means real approval queues, accurate multi-currency balances, and a workflow that settles matured plans without silently double-crediting anyone.",
    architecture: [
      "Built the client and server together — routed React UI for marketing, auth, user dashboard, deposits, withdrawals, history and admin, backed by a 25-endpoint Express REST API",
      "Modelled BTC/ETH/USDT available and pending balances, active deposits, earnings, withdrawals, referrals and investment lifecycles in Mongoose, with derived pending balance kept in sync on save",
      "JWT login with bcrypt password hashing, recovery questions, email-based password reset, and user/admin roles with suspend and disable states",
      "Admin workflows for deposit and withdrawal approval, user funding, bonuses, account management and activity history instead of trusting client-side state",
      "Referral links and commission tracking, with a daily node-cron job that settles matured plans and marks profit as paid so it is applied once",
      "Nodemailer transactional email for account details, welcome messages and referral notifications; chart-driven dashboards on the client"
    ],
    stack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "bcryptjs",
      "React",
      "Tailwind CSS",
      "node-cron",
      "Nodemailer",
      "Vercel"
    ],
    github: "https://github.com/Victor-MGB/mekite_client",
    githubLabel: "Frontend",
    githubBackend: "https://github.com/Victor-MGB/mekite_btc",
    demo: "https://mekite-client.vercel.app/",
    demoLabel: "Live app",
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
    name: "AttuceAI — Multi-tenant AI Sales Automation",
    tagline:
      "Always-on sales conversations across WhatsApp and Telegram, backed by event-driven workers.",
    description:
      "A backend platform for multi-tenant AI sales automation: REST APIs in Node.js, Fastify and TypeScript, WhatsApp Business and Telegram bot integrations, real-time CRM sync, and Redis queues/workers that keep customer-facing requests non-blocking.",
    problem:
      "Small businesses selling in chat apps drown in manual replies and disconnected sales data. They needed an automated layer that handles conversations and workflows while keeping external CRMs in sync without slowing the customer experience.",
    architecture: [
      "REST APIs with Node.js, Fastify and TypeScript for internal and external integrations",
      "WhatsApp Business API and Telegram Bot API for always-on automated conversations",
      "CRM integrations that synchronize sales data with external services in real time",
      "Event-driven backend using Redis queues and workers for concurrent workloads",
      "Production monitoring and workflow optimization — 15% efficiency gain, 10% lower resource use",
      "Backend architecture designed around scalability and integration needs to reduce rework"
    ],
    stack: [
      "Node.js",
      "Fastify",
      "TypeScript",
      "Redis",
      "WhatsApp Business API",
      "Telegram Bot API",
      "CRM Integrations"
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

export const education = [
  {
    title: "B.Sc. Computer Science",
    org: "University of Enugu State",
    date: "2022"
  },
  {
    title: "National Youth Service Corps",
    org: "Abuja FCT",
    date: "2025"
  }
];

export const certifications = [
  {
    title: "Python",
    org: "LaunchPad",
    date: "2021"
  }
];

export const contact = {
  heading: "Let's build something engineered well.",
  subheading:
    "I'm currently open to senior backend, payments, and distributed systems roles at product-driven companies. If you're building something that needs thoughtful backend engineering, let's talk.",
  note: "I usually respond within 24 hours."
};
