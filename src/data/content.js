export const profile = {
  name: "Kaung Satt",
  role: "Mid Level Full Stack Developer",
  headline: "Java + React",
  tagline:
    "Building scalable enterprise systems with Spring Boot, Express, REST APIs, and React.",
  summary:
    "Passionate Full-Stack Developer (Java + React) with hands-on experience building scalable enterprise systems. Skilled in Spring Boot, Express, REST APIs, and ReactJS with Redux. Experienced in integrating third-party APIs, managing databases (MySQL, MSSQL, MongoDB), and deploying via Docker. Committed to clean code, problem-solving, and continuous learning.",
  cvUrl: "/KaungSatt_CV.pdf",
};

export const contact = {
  phone: "09962555456",
  email: "kaungsatt.2k1@gmail.com",
  address: "North Dagon, Yangon",
  github: "https://github.com/KaungSatt22",
  linkedin: "https://www.linkedin.com/in/kaung-satt-1a171526b/",
  formAction: "https://getform.io/f/6de6921d-ce4f-407e-a1db-c2a67ce052e3",
};

export const experience = {
  company: "Thuriya Ace Technology Co., Ltd.",
  roles: [
    {
      title: "Software Developer Mid Level",
      period: "July 2025 – Present",
    },
    {
      title: "Software Developer Junior Level",
      period: "Oct 2024 – Jun 2025",
    },
    {
      title: "Internship & On-the-Job Training",
      period: "Jun 2024 – Sep 2024",
    },
  ],
};

export const education = {
  school: "Dagon University",
  degree: "B.A. Myanmar Major",
  period: "Expected Graduation: 2027",
};

export const githubRepos = [
  {
    name: "react-movie",
    description: "React movie browser with search and detail views",
    url: "https://github.com/KaungSatt22/react-movie",
  },
  {
    name: "react_ecommerce",
    description: "React e-commerce UI with cart and product flows",
    url: "https://github.com/KaungSatt22/react_ecommerce",
  },
];

export const skills = {
  Backend: ["Java", "Spring Boot", "Thymeleaf", "Express"],
  Frontend: [
    "JavaScript",
    "TypeScript",
    "React",
    "Bootstrap",
    "Tailwind",
    "Ant Design",
    "Redux",
    "Zustand",
  ],
  Database: ["MySQL", "MSSQL", "Postgres", "MongoDB"],
  Tools: ["Git", "Docker", "Linux"],
};

export const projects = [
  {
    id: 1,
    name: "Life Claim",
    bullets: [
      "Enables policyholders to initiate claims based on coverage limits, exclusions, and claim history.",
      "Automates claim evaluation for eligibility and payout calculations.",
      "Supports multi-step approvals and fraud/risk assessment via external data sources.",
    ],
    tags: ["Java", "Spring Boot", "React", "MySQL"],
  },
  {
    id: 2,
    name: "Payment Gateway",
    bullets: [
      "Integrated banks and e-payment providers with QR and digital wallet support.",
      "Built a real-time transaction monitoring dashboard for operations teams.",
      "Generated daily/monthly financial reports and failure callback notifications.",
    ],
    tags: ["Spring Boot", "REST APIs", "React", "MySQL"],
  },
  {
    id: 3,
    name: "Bill Management",
    bullets: [
      "Individual and bulk invoice entry via Excel with confirmation before payment.",
      "Real-time invoice status monitoring and detailed reconciliation reports.",
      "Enquiry with search/filter by invoice number, customer, and date; payment gateway integration.",
    ],
    tags: ["Java", "Spring Boot", "Excel", "Payment APIs"],
  },
  {
    id: 4,
    name: "Agent Portal",
    bullets: [
      "Kafka streaming for policies, agents, claims, commissions, and premium data into MongoDB and MySQL.",
      "Admin portal for agent subscriptions, company limits, and agent creation.",
      "Push notifications, performance metrics, premium calculation, and appointment scheduling.",
    ],
    tags: ["Kafka", "MongoDB", "MySQL", "React"],
  },
  {
    id: 5,
    name: "FRD System",
    bullets: [
      "Excel upload per branch/corporate with validation and duplicate prevention.",
      "Automated month-over-month comparison module.",
      "Role-based admin for users, roles, menus, and branches; enquiry with Excel/PDF export.",
    ],
    tags: ["Spring Boot", "RBAC", "Excel", "PDF"],
  },
  {
    id: 6,
    name: "Administration Third-Party Portal",
    bullets: [
      "Merchant management with role-based access for admins and merchant users.",
      "Order approve/reject flow enabling customer payments after approval.",
      "Synced with Customer API and Core API; certificate generation on successful payment.",
    ],
    tags: ["Spring Boot", "REST APIs", "RBAC"],
  },
  {
    id: 7,
    name: "Omada",
    bullets: [
      "Enterprise hierarchical management for multi-level organizations.",
      "Geographic, departmental, and positional structures with role-based workflows.",
      "Task assignment/tracking, template-based documents, and multi-language content.",
    ],
    tags: ["Java", "Spring Boot", "Workflows"],
  },
  {
    id: 8,
    name: "Info Desk",
    bullets: [
      "MIS consolidating General, Life, Medical, and TPL insurance systems.",
      "Visibility across payment, underwriting, claims, portfolio, and sales.",
      "Access control by responsibility, department, and branch; Myanmar and English UI.",
    ],
    tags: ["Spring Boot", "React", "RBAC"],
  },
];
