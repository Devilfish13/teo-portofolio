import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    git,
    figma,
    docker,
    thg,
    isa,
    mimecast,
    portofolio,
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
      title: "Engineering Manager & Technical Leader",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Three.js Enthusiast",
      icon: creator,
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
      title: "Intern Software Engineer",
      company_name: "ISA Softwarte",
      icon: isa,
      iconBg: "#E6DEDD",
      date: "July 2016 - July 2017",
      points: [
        "Developing and maintaining a console for air traffic management simulator.",
        "Used Vanilla JavaScript and Google maps API in order to show the scenario that was build on the server",
        "Created an algorithm in Python to clean flight paths registered by the server.",
        "Used an algorithm called Kalman FIlter",
      ],
    },
    {
      title: "Full-stack web developer",
      company_name: "THG",
      icon: thg,
      iconBg: "#E6DEDD",
      date: "July 2018 - May 2020",
      points: [
        "Developing and maintaining web applications using Angular and Java for managing B2B orders.",
        "Developed an internal application in Angular for creating tickets and managing sprints.",
        "Ported the same app from Angular to React.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Software Engineer 2",
      company_name: "Mimecast",
      icon: mimecast,
      iconBg: "#E6DEDD",
      date: "May 2002 - July 2021",
      points: [
        "Developing and maintaining web applications using Angular.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Adopted a TDD aproach using cypress tests.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Engineering Lead",
      company_name: "THG",
      icon: thg,
      iconBg: "#E6DEDD",
      date: "Sept 2021 - Present",
      points: [
        "Developing and maintaining a mailing tool that allows the trader to create an email, schedule it and send it to the users.",
        "Used latest technologies such as turborepo for setting up the UI library and the project itself, drag and drop components for creating the email.",
        "Leading a team of 6 while planning the spritns/meetings and talking with the stakeholders",
      ],
    },
  ];
  
  const projects = [
    {
      name: "3d Portofolio",
      description:
        "Personal portofolio where I tested playing with Three.js library and Tailwind. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "three.js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: portofolio,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };