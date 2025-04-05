import t1 from "../assets/img/t1.webp";
import t2 from "../assets/img/t2.webp";
import t3 from "../assets/img/t3.webp";
import t4 from "../assets/img/t4.webp";
import t5 from "../assets/img/t5.webp";
import t6 from "../assets/img/t6.webp";
import t7 from "../assets/img/t7.webp";
import t8 from "../assets/img/t8.webp";
import t9 from "../assets/img/t9.webp";
import t10 from "../assets/img/t10.webp";

export const DataPortafolioApi = [
  {
    name: "Dragon Ball Explorer",
    technology: [
      "Vue 3",
      "HTML",
      "Tailwind CSS",
      "TypeScript",
      "TanStack",
      "PrimeVue",
    ],
    img: t7,
    web: "https://apidragonball.netlify.app/",
    repositori: "https://github.com/r-gabriel-f/Dragonball",
  },
  {
    name: "Country Explorer",
    technology: ["React", "HTML", "CSS", "JavaScript"],
    img: t2,
    web: "https://r-gabriel-f.github.io/country_api_react/",
    repositori: "https://github.com/r-gabriel-f/country_api_react",
  },
  {
    name: "Movie Explorer",
    technology: ["React", "HTML", "CSS", "JavaScript"],
    img: t3,
    web: "https://r-gabriel-f.github.io/desafio/",
    repositori: "https://github.com/r-gabriel-f/desafio",
  },
  {
    name: "Pokemon Explorer",
    technology: ["React", "HTML", "CSS", "JavaScript"],
    img: t4,
    web: "https://r-gabriel-f.github.io/pokemon/",
    repositori: "https://github.com/r-gabriel-f/pokemon",
  },
];

export const DataPortafolioPages = [
  {
    name: "Huanuni Mining Company",
    technology: ["HTML", "CSS", "JavaScript", "React"],
    img: t1,
    web: "https://r-gabriel-f.github.io/empresa_minera_huanuni/",
    repositori: "https://github.com/r-gabriel-f/empresa_minera_huanuni",
  },
  {
    name: "Tecnoacero S.R.L",
    technology: ["React", "HTML", "Tailwind CSS", "JavaScript"],
    img: t6,
    web: "https://tecnoacerosrl.netlify.app",
    repositori: "https://github.com/r-gabriel-f/tecnoacero",
  },
];

export const DataPortafolioOther = [
  {
    name: "Interactive User CRUD",
    technology: [
      "Vue 3",
      "HTML",
      "Tailwind CSS",
      "PrimeVue",
      "JavaScript",
      "NodeJS",
    ],
    img: t8,
    web: "https://usercrud01.netlify.app/",
    repositori: {
      frontend: "https://github.com/r-gabriel-f/frontendcruduser",
      backend: "https://github.com/r-gabriel-f/backendcruduser",
    },
  },
  {
    name: "Interactive Shopping Cart with Stripe",
    technology: [
      "React",
      "HTML",
      "Tailwind CSS",
      "JavaScript",
      "Stripe API",
      "NestJS",
    ],
    img: t5,
    web: "https://shoppingcardstripe.netlify.app/",
    repositori: {
      frontend: "https://github.com/r-gabriel-f/carrito_de_compras",
      backend: "https://github.com/r-gabriel-f/stripebackend",
    },
  },
  {
    name: "Factus Helltec Electronic Billing",
    technology: [
      "Vue 3",
      "HTML",
      "Tailwind CSS",
      "PrimeVue",
      "TypeScript",
      "TanStack",
    ],
    img: t10,
    web: "https://factusapirobert.netlify.app/",
    repositori: "https://github.com/r-gabriel-f/factusapi",
  },

  {
    name: "Interactive Gemini AI",
    technology: ["Vue 3", "HTML", "Tailwind CSS", "PrimeVue", "TypeScript"],
    img: t9,
    web: "https://geminiaigoogle.netlify.app/",
    repositori: "https://github.com/r-gabriel-f/gemini",
  },
];
export const works = [
  {
    company: "Shipedge",
    position: "Full Stack Developer",
    startDate: "February 2024",
    endDate: "Actuality",
    responsibilities: [
      "Development of functionalities in the Omnio E-Commerce Platform Project, mainly in the frontend.",
      "Occasional collaboration in backend tasks (Condor), such as API consumption and testing.",
      "Configuration of the development environment with Docker, including the orchestration of services such as the PostgreSQL database.",
      "Use of Postman for endpoint testing and feature validation.",
      "Support in Manual QA tasks on the Shipedge platform to ensure the correct functioning of the system.",
      "Working under Scrum methodology, managing tasks in ClickUp and using GitLab for version control."
    ],
    technologies: [
      "Vue 3", "TypeScript", "Tailwind CSS", "PrimeVue", "TanStack", "PostgreSQL",
      "Laravel", "Docker", "Postman", "Git", "GitLab", "Scrum", "ClickUp"
    ]
  },
  {
    company: "Tecnoacero S.R.L",
    position: "System Engineer",
    startDate: "July 2023",
    endDate: "February 2024",
    responsibilities: [
      "Product website development.",
      "Procurement web systems development."
    ],
    technologies: [
      "React.js", "Tailwind CSS", "PWA", "Git", "PostgreSQL", "Node.js", "Nginx"
    ]
  },
  {
    company: "Huanuni Mining Company",
    position: "Systems Assistant",
    startDate: "July 2022",
    endDate: "February 2023",
    responsibilities: [
      "Website and web application development.",
      "Development of responsive web interfaces (UX/UI).",
      "Creation of back end using Mysql, Node.js.",
      "PWA implementation of websites and web applications.",
      "Maintenance of websites and web applications.",
      "Structured wiring of surveillance cameras."
    ],
    technologies: [
      "HTML5", "CSS", "JavaScript", "React.js", "Material-UI", "PWA", "Git", "MySQL", "Node.js", "Nginx"
    ]
  },
  {
    company: "Information and Communication Technologies Unit of the Military School of Engineering U.A. Cochabamba",
    position: "Intern",
    startDate: "December 2021",
    endDate: "January 2022",
    responsibilities: [
      "Installation of surveillance cameras in the EMI Lanza courses."
    ],
    technologies: []
  }
];
