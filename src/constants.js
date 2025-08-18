// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import ApiLogo from './assets/tech_logo/Api.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import xmlLogo  from './assets/tech_logo/xml.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import AndrLogo from './assets/tech_logo/Andr.png';
import figmaLogo from './assets/tech_logo/figma.png';
import EclLogo from './assets/tech_logo/Ecl.png';
import TabLogo from './assets/tech_logo/Tab.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import CodeLogo from './assets/company_logo/Codelogo.png';
import AcidLogo from './assets/company_logo/Acidlogo.png';
import GraLogo from './assets/company_logo/Gralogo.png';

// Education Section Logo's
import MumLogo from './assets/education_logo/Mumlogo.png';
import MgkLogo from './assets/education_logo/Mgklogo.png';
import UpLogo from './assets/education_logo/Uplogo.png';

// Project Section Logo's
import AiLogo from './assets/work_logo/Ai.png';
import ELogo from './assets/work_logo/E.png';
import MLogo from './assets/work_logo/M.png';
import RLogo from './assets/work_logo/R.png';
import AliLogo from './assets/work_logo/Ali.png';
import NLogo from './assets/work_logo/N.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'React JS', logo: reactjsLogo },
      {name: 'Javascript', logo: javascriptLogo},
      { name: 'Angular', logo: angularLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'XML', logo: xmlLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Database & Frameworks',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Android Studio', logo: AndrLogo },
      { name: 'Tableu', logo: TabLogo },
      { name: 'Eclipse', logo: EclLogo },
      { name: 'Figma', logo: figmaLogo },
      { name: 'RestAPI', logo: ApiLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: CodeLogo,
      role: "Java Developer",
      company: "Codech It Solutions",
      date: "Mar 2025 - Jun 2025",
      desc: "Worked as a Java Developer Intern at CODTECH Pvt. Ltd., completing four real-world projects involving file handling, REST API integration, networking, and AI-based recommendation systems. Implemented object-oriented programming concepts, optimized code for performance, and collaborated on structured project documentation.",
      skills: [
        "Core Java (OOP, Exception Handling, Collections)",
        "REST API Integration & JSON Parsing",
        "JavaSNetworking & Multithreading (Java Sockets)cript",
        "React Apache Mahout (Recommendation System)",
        "File Handling (Java IO/NIO)",
        "Data Structures & Algorithms JS",
        "Problem-Solving & Debugging CSS",
        "Git/GitHub for Version ControloDb",
      ],
    },
    {
      id: 1,
      img: AcidLogo,
      role: "Game Devloper",
      company: " AcidTrip Arts Studio Pvt. Ltd.",
      date: "Feb 2025 - May 2025",
      desc: "Implemented event-driven logic, animation, and collision systems in 2D games Optimized performance and modularized code for maintainability Collaborated with designers and testers to enhance game UX",
      skills: [
        "Pygame",
        "PlayCanvas",
        "Python",
        "HTML",
        "SQL",
      ],
    },
    /*
    {
      id: 2,
      img: GraLogo,
      role: "Frontend Devloper",
      company: "Graphura India Private Limited",
      date: "Aug 2025 - Present",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, React Js, and Express Js . Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "React Js",
        "Figma",
        "Express js",
      ],
    },*/
  ];
  
  export const education = [
    {
      id: 0,
      img: MumLogo,
      school: "University of Mumbai",
      date: "Aug 2023 - Jul2025",
      grade: "8.66 CGPA",
      desc:  "Completed a comprehensive postgraduate program focused on advanced computer science concepts, software development, and IT management. The curriculum covered programming, database systems, operating systems, networking, software engineering, project management, and emerging technologies, complemented by practical lab work and industry-oriented projects. Gained strong problem-solving skills, analytical thinking, and proficiency in developing robust, scalable, and innovative software solutions.",
     degree: "Master of Computer Applications - MCA",
    },
    {
      id: 1,
      img: MgkLogo,
      school: "Mahatma Gandhi Kashi Vidyapith University",
      date: "Jul 2019 - Dec 2022",
      grade: "72 %",
      desc: "Completed a comprehensive undergraduate program focused on computer applications, programming, and information technology. The curriculum covered programming languages, database systems, operating systems, computer networks, software engineering, mathematics, and web development, complemented by practical lab work and project-based learning. Gained a strong foundation in application development, logical reasoning, and technical problem-solving, with the ability to design and implement efficient, user-focused software solutions.",
      degree: "Bachelor of Computer Application - BCA",
    },
    {
      id: 2,
      img: UpLogo,
      school: "Board Of High School and Intermediate Education Uttar Pradesh",
      date: "Apr 2018 - Apr 2019",
      grade: "60 %",
      desc: "Completed senior secondary education in the Science stream with Physics, Chemistry, and Mathematics as core subjects, along with English and other electives. The curriculum provided a strong foundation in analytical reasoning, quantitative problem-solving, and scientific principles, preparing for higher studies in computer science and technology.",
      degree: "Class 12th - Intermediate Examination",
    },
    {
      id: 3,
      img: UpLogo,
      school: "Board Of High School and Intermediate Education Uttar Pradesh",
      date: "Apr 2016 - Jun 2017",
      grade: "81 %", 
      desc: " Completed secondary education with a curriculum covering mathematics, science, social studies, and languages, including Hindi and English. Built a solid academic foundation, strengthened analytical and problem-solving skills, and prepared for higher studies in the science stream.",
      degree: "Class 10th - High School Examination",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "SketchSence",
      description:
      "Created an AI-based SketchSense using React, TypeScript, and Vite (frontend), with Python, FastAPI, and Gemini API (backend). Features include OCR, handwriting recognition, and real-time problem solving. Demonstrated proficiency in REST API integration, modular architecture, and AI application in EdTech.",
      image: AiLogo,
      tags: ["Type Script", "Vite", "React JS", "Python","Fast API", "Gemini API"],
      github:"https://github.com/Shivammishra-79/calc-fe-main",
      webapp: "https://s-ai-sketchsense.vercel.app/",
    },
    {
      id: 1,
      title: "E-Learning Android App",
      description:
      "Developed a scalable e-learning application using Java, XML, and Android Studio. Followed SDLC best practices, integrated secure data handling, personalized learning paths, offline access, and intuitive UI/UX design. Applied OOP concepts and unit testing for performance optimization. ",
      image: ELogo,
      tags: ["Android Studio", "Java", "XML", "FireBase"],
      github: "",
      webapp: "",
    },
    {
      id: 2,
      title: "Machine Learning Explorer Android App",
      description:
      "Built an ML-enabled app using Java, XML, and Google ML Kit APIs. Integrated face detection, image classification, and object recognition. Showcased skills in Android development, event-driven programming, and API integration ",
      image: MLogo,
      tags: ["Android Studio", "Java", "XML", "Google Kit APis"],
      github: "",
      webapp: "",
    },
    {
      id: 3,
      title: "Alien Escape Game",
      description:
      "Alien Escape is a fun 2D arcade game built with Python and Pygame, where the player controls a frog-like character to jump, collect coins, and escape enemies while aiming for the highest score. It features smooth controls, sound effects, double jumps, and a high score system, offering both entertainment and technical depth.",
      image: AliLogo,
      tags: ["Python", "Pygame", "Game Developmen", "Event-driven Programming","File Handling", "Real-time Graphics Rendering","Sound Integration"],
      github: "https://github.com/Shivammishra-79/AlienEscape",
      webapp: "https://alien-escape.vercel.app/",
    },
    {
      id: 4,
      title: "TastyBites",
      description:
      "Designed and developed a responsive restaurant website (‘TastyBites’) using HTML5, CSS3, and modern UI design principles.",
      image: RLogo,
      tags: ["HTML", "CSS"],
      github: "https://github.com/Shivammishra-79/restaurant-website/tree/main",
      webapp: "https://restaurant-website-olive-phi.vercel.app/ ",
    },
    {
      id: 5,
      title: "Netflix Clone website",
      description:
      "A responsive Netflix Clone website built using HTML, CSS (and JavaScript if used).This project replicates the UI design and layout of Netflix, focusing on modern web design principles such as responsiveness, clean layout, and engaging visuals.",
      image: NLogo,
      tags: ["HTML", "CSS"],
      github: "https://github.com/Shivammishra-79/Netflix-clone",
      webapp: "https://netflix-clone-kohl-psi.vercel.app/",
    },
    /*
    {
      id: 6,
      title: "Coding Master",
      description:
        "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
      image: cmLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
      github: "https://codingmasterweb.in/",
      webapp: "https://codingmasterweb.in/",
    },
    {
      id: 7,
      title: "Image Search App",
      description:
        "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
      image: imagesearchLogo,
      tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
      github: "https://github.com/codingmastr/Image-Search-App",
      webapp: "https://imagsearch.netlify.app/",
    },
    {
      id: 8,
      title: "Image Background Remover",
      description:
        "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
      image: removebgLogo,
      tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
      github: "https://github.com/codingmastr/Image-Background-Remover",
      webapp: "https://removeyourbg.netlify.app/",
    },*/
  ];  