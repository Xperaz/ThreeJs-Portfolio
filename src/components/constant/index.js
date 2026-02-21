import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  figma,
  docker,
  threejs,
  nextjs,
  cpp,
  c,
  gnu,
  framerMotion,
  bash,
  nestjs,
  postgres,
  prisma,
  dockerCompose,
  inception,
  transcendence,
  minirt,
  aouhadou,
  fractol,
  irc,
  philosophers,
  minishell,
  coffeeShop,
  snapLink,
  js,
  html5,
  css3,
  types,
  react,
  tailwindcss,
  cppSkill,
  cSkill,
  gitSkill,
  dockerSkill,
  bashSkill,
  supabase,
} from "../../../public";

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "Bash",
    icon: bash,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const skills = [
  {
    name: "HTML 5",
    icon: html5,
    style: "html",
    component: "Html",
  },
  {
    name: "CSS 3",
    icon: css3,
    style: "css",
  },
  {
    name: "JavaScript",
    icon: js,
    style: "js",
  },
  {
    name: "TypeScript",
    icon: types,
    style: "typescript",
  },
  {
    name: "React JS",
    icon: react,
    style: "react",
  },
  {
    name: "Next JS",
    icon: nextjs,
    style: "nextjs",
  },
  {
    name: "Tailwind CSS",
    icon: tailwindcss,
    style: "tailwind",
  },
  {
    name: "C++",
    icon: cppSkill,
    style: "cppSkill",
  },
  {
    name: "C",
    icon: cSkill,
    style: "cppSkill",
  },
  {
    name: "Bash",
    icon: bashSkill,
    style: "bash",
  },
  {
    name: "git",
    icon: gitSkill,
    style: "git",
  },
  {
    name: "docker",
    icon: dockerSkill,
    style: "cppSkill",
  },
];

const projects = [
  {
    title: "SnapLink: A link shortening web app.",
    url: "https://snaplink1.vercel.app/",
    projectLocation: "Visit live demo",
    image: snapLink,
    technologiesUsed: [
      {
        name: "react Js",
        icon: reactjs,
      },
      {
        name: "tailwind Css",
        icon: tailwind,
      },
      {
        name: "Supabase",
        icon: supabase,
      },
    ],
  },
  {
    title: "Azedine Ouhadou Portfolio",
    url: "/",
    projectLocation: "Visit live demo",
    image: aouhadou,
    technologiesUsed: [
      {
        name: "react Js",
        icon: reactjs,
      },
      {
        name: "Next Js",
        icon: nextjs,
      },
      {
        name: "tailwind Css",
        icon: tailwind,
      },
      {
        name: "Three Js",
        icon: threejs,
      },
      {
        name: "Framer Motion",
        icon: framerMotion,
      },
    ],
  },
  {
    title: "Transcendence: Competitive pong game platform.",
    url: "https://github.com/azedineouhadou/ft_transcendence",
    projectLocation: "Visit project repository",
    projectLocation: "Visit project repository",
    image: transcendence,
    technologiesUsed: [
      {
        name: "react Js",
        icon: reactjs,
      },
      {
        name: "Next Js",
        icon: nextjs,
      },
      {
        name: "tailwind Css",
        icon: tailwind,
      },
      {
        name: "Nest JS",
        icon: nestjs,
      },
      {
        name: "Postgresql",
        icon: postgres,
      },
      {
        name: "Prisma",
        icon: prisma,
      },
    ],
  },
  {
    title: "MinRt: Raytracing engine wrote in C.",
    url: "https://github.com/azedineouhadou/minirt",
    projectLocation: "Visit project repository",
    image: minirt,
    technologiesUsed: [
      {
        name: "C",
        icon: c,
      },
      {
        name: "Gnu",
        icon: gnu,
      },
    ],
  },
  {
    title: "Fractol: Creating graphically beautiful fractals.",
    url: "https://github.com/azedineouhadou/Fractol",
    projectLocation: "Visit project repository",
    image: fractol,
    technologiesUsed: [
      {
        name: "C",
        icon: c,
      },
      {
        name: "Gnu",
        icon: gnu,
      },
    ],
  },
  {
    title: "Inception: Create LEMP stack using docker-compose on debian",
    url: "https://github.com/azedineouhadou/inception-42",
    projectLocation: "Visit project repository",
    image: inception,
    technologiesUsed: [
      {
        name: "Docker",
        icon: docker,
      },
      {
        name: "Docker Compose",
        icon: dockerCompose,
      },
      {
        name: "Bash Scripting",
        icon: bash,
      },
    ],
  },
  {
    title: "Ft_IRC: Simple IRC Server based on the RFC.",
    url: "https://github.com/azedineouhadou/ft_irc",
    projectLocation: "Visit project repository",
    image: irc,
    technologiesUsed: [
      {
        name: "C++",
        icon: cpp,
      },
      {
        name: "C",
        icon: c,
      },
      {
        name: "Gnu",
        icon: gnu,
      },
    ],
  },
  {
    title: "Minishell: Recoding our own little bash.",
    url: "https://github.com/azedineouhadou/minishell",
    projectLocation: "Visit project repository",
    image: minishell,
    technologiesUsed: [
      {
        name: "C",
        icon: c,
      },
      {
        name: "Gnu",
        icon: gnu,
      },
    ],
  },
  {
    title:
      "Philosophers: A classic Dining philosophers problem solved with a multithreaded program.",
    url: "https://github.com/azedineouhadou/philosopher_42",
    projectLocation: "Visit project repository",
    image: philosophers,
    technologiesUsed: [
      {
        name: "C",
        icon: c,
      },
      {
        name: "Gnu",
        icon: gnu,
      },
    ],
  },
  {
    title: "Coffee Shop: Web app using vanilla javascript",
    url: "https://coffee-shop-dun-delta.vercel.app/",
    projectLocation: "Visit live demo",
    image: coffeeShop,
    technologiesUsed: [
      {
        name: "HTML",
        icon: html,
      },
      {
        name: "CSS",
        icon: css,
      },
      {
        name: "Javascript",
        icon: javascript,
      },
    ],
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company: "Enakl",
    date: "Present",
    description: [
      "Developing a SaaS platform using Next.js, Node.js, Nest.js, PostgreSQL, and TypeORM.",
    ],
    technologies: ["Node.js", "Nest.js", "PostgreSQL", "TypeORM", "Next.js"],
  },
  {
    title: "Front-End Developer",
    company: "Dahbi Group",
    type: "Freelance",
    date: "Apr 2025 – dec 2025",
    description: [
      "Engineered a comprehensive management, automating B2B workflows and B2C fitness club systems using Next.js and TypeScript.",
      "Developed an enterprise-grade reusable UI component library using ShadCN, Tailwind CSS, and TanStack Query.",
      "Maintained a cross-platform mobile application using React Native.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "ShadCN",
      "Tailwind CSS",
      "TanStack Query",
      "React Native",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "Flow Digital",
    date: "Aug 2024 – Mar 2025",
    description: [
      "Developed and maintained a full-stack ERP system for the construction industry using React.js, Next.js, Nest.js, and PostgreSQL.",
      "Created an After-Sales Service (SAV) module and ensured high-quality code delivery through Jest unit testing.",
    ],
    technologies: ["React.js", "Next.js", "Nest.js", "PostgreSQL", "Jest"],
  },
  {
    title: "Front-End Developer",
    company: "Billo",
    type: "Internship",
    date: "Feb 2024 – Aug 2024",
    description: [
      "Contributed to responsive web applications for digital mail and payments management using AI, helping achieve over 52K monthly visits.",
      "Collaborated with designers and marketers to align website updates with brand guidelines using React.js, Next.js, and TanStack Query.",
    ],
    technologies: ["React.js", "Next.js", "TanStack Query"],
  },
];

export { technologies, skills, projects, experiences };
