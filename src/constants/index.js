import {
    mobile,
    backend,
    memoryGame,
    buymore,
    country,
    company,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
   distributed,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },

  ];
  
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
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
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
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "SkillyHub SAS",
      icon: company,
      iconBg: "#383E56",
      date: "October 2019 - Dec 2021",
      points: [
          "Developing and maintaining web applications using React.js and other related technologies.",
          "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
          "Implementing responsive design and ensuring cross-browser compatibility.",
          "Participating in code reviews and providing constructive feedback to other developers.",
      ],
  },
  {
      title: "ODK/Kobo toolbox Consultant",
      company_name: "DataXchange group ",
      icon: company,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Present",
      points: [
          "Analysis of the technical specifications of the electronic tools, database, and applications to be implemented for the Guinea PBF project.",
          "Programming first the data collection form using the Kobo toolbox  for the health centers, hospitals, DPS, and DRS for the AGFA project in Guinea concerning the evaluation of the quality of the indicators, involving the survey questionnaires, the data collection forms.",
          "Construction of electronic forms on Kobo for community surveys in health centers and hospitals, testing of Kobotoolbox electronic forms, and review of changes.",
          "Building electronic forms on Kobotoolbox for community surveys in DPS and DRS, testing Kobotoolbox electronic forms, and review of changes.",
      ],
  },
  {
      title: "Software Engineer",
      company_name: "Gitstart",
      icon: company,
      iconBg: "#383E56",
      date: "Nov 2021 - Sept 2022",
      points: [
          "Developing and maintaining web applications using React.js and other related technologies.",
          "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
          "Implementing responsive design and ensuring cross-browser compatibility.",
          "Participating in code reviews and providing constructive feedback to other developers.",
      ],
  },
  {
      title: "Software Engineer (Freelancing)",
      company_name: "R&I Software",
      icon: company,
      iconBg: "#383E56",
      date: "Nov 2022 - Feb 2023",
      points: [
          "Developing and maintaining web applications using React.js and other related technologies.",
          "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
          "Implementing responsive design and ensuring cross-browser compatibility.",
          "Participating in code reviews and providing constructive feedback to other developers.",
      ],
  },
  {
      title: "Full stack Developer",
      company_name: "Distributed",
      icon: distributed,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
          "Developing and maintaining web applications using React.js and other related technologies.",
          "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
          "Implementing responsive design and ensuring cross-browser compatibility.",
          "Participating in code reviews and providing constructive feedback to other developers.",
      ],
  },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Buymore",
      description:
        "Buymore is a cutting-edge e-commerce platform developed using the latest technologies to provide users with a seamless and engaging online shopping experience. Built on a robust stack including React.js, Next.js, Prisma, TypeScript, and PostgreSQL, Buymore offers a feature-rich environment for both customers and administrators.",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "Node.js",
          color: "blue-text-gradient",
        },
      ],
      image: buymore,
      source_code_link: "https://github.com/gracebir/buymore",
    },
    {
      name: "Memory Game",
      description:
        "A memory game is a mental challenge where players must match pairs of identical cards by flipping them over in a grid. The objective is to remember the card locations and find all matches in the fewest moves possible. It tests one's concentration, cognitive skills, and memory recall while providing an engaging and fun activity.",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: memoryGame,
      source_code_link: "https://github.com/gracebir/memory-game",
    },
    {
      name: "Country Info",
      description:
        "The Rest Countries Explorer project is a front-eThe Rest Countries Explorer project is a front-end web application that leverages the Rest Countries API to provide comprehensive information about various countries around the world. The application allows users to explore details of individual countries, search for specific countries, and filter countries based on their respective continents.",
      tags: [
        {
          name: "vue.js",
          color: "blue-text-gradient",
        },
        {
          name: "Api integration",
          color: "green-text-gradient",
        },
        {
          name: "tailwincss",
          color: "pink-text-gradient",
        },
      ],
      image: country,
      source_code_link: "https://github.com/gracebir/vue-country-info-app",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };