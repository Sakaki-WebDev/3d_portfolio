export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Authentic Alba - Bespoke Tourism Booking App',
    desc: 'Authentic Alba is a full stack booking website a bit like airbnb, but for smaller travel companies to post their holidays on. Users can create an account and search and book holidays, as well as advertise their own if they are a travel company.',
    subdesc:
      'I built this as my final project for my diploma, which enabled me to get a distinction grade. It is built with a tech stack of React with NextJS Framework and Tailwind CSS,  on the front end and a back end of Prisma and MongoDB.',
    href: 'https://authentic-alba-ccasteel.vercel.app/',
    texture: '/textures/project/project6.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#F3F3f3',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: '<NextJS>',
        path: '/assets/nextJs.png',
      },
      {
        id: 4,
        name: 'Prisma',
        path: '/assets/download.jpeg',
      },
      {
        id: 5,
        name: 'MONGODB',
        path: '/assets/mongodb.png',
      },
    ],
  },
  {
    title: 'Embassy Gardens',
    desc: 'LiveDoc is a powerful collaborative app that elevates the capabilities of real-time document editing. As an enhanced version of Google Docs, It supports millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.',
    subdesc:
      'With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.',
    href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
    texture: '/textures/project/project6.mp4',
    logo: '/assets/project-logo6.png',
    logoStyle: {
      backgroundColor: '#FAE317',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'The Brentford Project',
    desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
    subdesc:
      'With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.',
    href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo7.png',
    logoStyle: {
      backgroundColor: '#c7c7c7',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'NEW WEBSITE',
    desc: 'Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
    subdesc:
      'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
    href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'NEW WEBSITE',
    desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
    subdesc:
      'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
    href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Azul Studio',
    pos: 'Intern Junior Web Developer',
    duration: '2021 - Present',
    title:
      'Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.',
    icon: '/assets/azulstudio.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Azul Studio',
    pos: 'Website and Software Tester',
    duration: '2018 - 2021',
    title:
      'Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.',
    icon: '/assets/azulstudio.svg',
    animation: 'clapping',
  },

  {
    id: 3,
    name: 'City Of Glasgow College',
    pos: 'HND Web Development',
    duration: '2021 - 2023',
    title:
      'This focused on mainly practical application including building mobile apps and e-commerce websites and gaining a working knowledge of popular frameworks like Node.js, React, Express.js, MongoDB, Git and GitHub, and languages such as PHP, JavaScript as well as HTML and CSS frameworks.',
    icon: '/assets/cityglasgow.png',
    animation: 'salute',
  },
];