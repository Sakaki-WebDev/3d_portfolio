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
    desc: 'Embassy Gardens is a property development built around the new US Embassy in Nine Elms, it is part of a massive regeneration project in SW London, built by EcoWorld and Ballymore.This website was built for these two clients with NuxtJS, VueJS and has a wordpress headless CMS backend. I collaborated on this project whilst working at Azul Studio. The website has a particularly complicated but beautiful UI, the home page is populated with a collage of images that are links, it has an infinite scroll that cycles through the images in a diagonal direction. It can also be manipulated with drag and drop, giving a very eye catching and interactive User Interface.',
    subdesc: '',
    href: 'https://www.embassygardens.com/',
    texture: '/textures/project/project1.mp4',
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
        name: 'Nuxt JS',
        path: '/assets/nuxtjs4.png',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Vue JS',
        path: '/assets/vuejs.png',
      },
      {
        id: 4,
        name: 'Wordpress',
        path: '/assets/wordpress2.png',
      },
    ],
  },
  {
    title: 'The Brentford Project',
    desc: '',
    subdesc:
      'The Brentford Project was a website for a new project in Brentford, West London. The idea was to regenerate an old area behind the Brentford High Street thats situated on the waterfront.  Also built by Ballymore. This website was developed with NuxtJS, VueJS and has a wordpress headless CMS backend. I collaborated on this project whilst working at Azul Studio.',
    href: 'https://www.thebrentfordproject.com/',
    texture: '/textures/project/project2.mp4',
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
        name: 'Nuxt JS',
        path: '/assets/nuxtjs4.png',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Vue JS',
        path: '/assets/vuejs.png',
      },
      {
        id: 4,
        name: 'Wordpress',
        path: '/assets/wordpress2.png',
      },
    ],
  },
  {
    title: 'Echo Chamber',
    desc: 'Echo Chamber is a social media app designed to allow users to share posts, like, follow and enjoy content created by other users. It is similar to instagram, which is where i drew inspiration from for this app.',
    subdesc:
      ' It is a fullstack social media app, that i built with;  React JS, Appwrite, Tailwind CSS, React Query and Typescript. It has authenticated sign up and sign in, Infinite scroll on the Home feed page and has a modern UI with mobile native app feel.',
    href: 'https://echochambers.vercel.app/',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo8.png',
    logoStyle: {
      backgroundColor: '#0E1F40',
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
        name: 'Appwrite',
        path: '/assets/appwrite.jpeg',
      },
    ],
  },
  {
    title: 'Intervu',
    desc: 'Intervu is an AI powered Interviewing software as a service website. It allows the user to create mock interview situations to practice before a real life job interview. It uses Gemini AI to create questions based on the job role, description and experience required, then gives you feedback for your answers and a suggested ideal answer to the original question',
    subdesc: 'This was built with NextJS 14, Tailwind CSS, Drizzle ORM, Gemeni AI and Clerk',
    href: 'https://inter-vu.vercel.app/',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo9.svg',
    logoStyle: {
      backgroundColor: '#FFF',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: '<NextJS>',
        path: '/assets/nextJs.png',
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
        name: 'Clerk',
        path: '/assets/clerk.jpeg',
      },
      {
        id: 5,
        name: 'Drizzle.js',
        path: '/assets/drizzle.png',
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
    id: 2,
    name: 'Azul Studio',
    pos: 'Website tester & Wordpress Data Manager',
    duration: '2018 - 2021 and part time from 2021-2022',
    title:
      'I started working here as a website tester, and managed the headless wordpress CMS to upload data and tested all changes. I worked with ASANA, and learned how to manange with larger projects and being assigned tasks left right and centre.But ASANA made it alot easier and clearer. I worked on websites such as https://www.embassygardens.com . This is a website for a new community that was built around the US embassy, for a company called Ballymore, a very big property developer in London. Its a very sophisticated website that required a huge amount of testing, text and image optimisation and upload via the CMS.Working with FIGMA, i followed the designers storyboards and mock ups, and added the data accordingly. This required learning figma and i worked with the lead designer, learning how to use figma. Another big website was https://www.riverscape.co.uk/ . Another website for Ballymore. After graduating from my web development degree, i took an intership offer at Azulstudio for 12 months as a junior web developer. Shadowing senior web devs, I learned alot about their tech stack and how they built the websites. I started to utlise Nuxt and Vue JS and how to attach them to a headless wordpress cms, so that the data added through the wordpress backend shows on the front end. The tech stack included Nuxtjs, Tailwind CSS, Vue.JS, Figma and Wordpress.  ',
    icon: '/assets/azulstudio.svg',
    animation: 'clapping',
  },

  {
    id: 4,
    name: 'City Of Glasgow College',
    pos: 'HND Web Development',
    duration: '2021 - 2023',
    title:
      'This focused on mainly practical application including building mobile apps and e-commerce websites and gaining a working knowledge of popular frameworks like Node.js, React, Express.js, MongoDB, Git and GitHub, and languages such as PHP, JavaScript as well as HTML and CSS frameworks. There were also core courses in Project management and website/app/graphic design using adobe photoshop and figma.',
    icon: '/assets/cityglasgow.png',
    animation: 'salute',
  },
];
