import {
  NeomoveLogo,
  HeinekenLogo,
  Ck12Logo,
  NTTDataLogo,
  SchneiderLogo,
  } from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Felipe Albuquerque",
  initials: "FA",
  location: "São Paulo, Brazil, BRT",
  locationLink: "https://maps.app.goo.gl/Kiyds7Epi1Tx2aiHA",
  about:
    "Experienced Engineer with focus on backend and Machine Learning Applications",
  summary:
    "As a Machine Learning Engineer, I have successfully taken multiple projects from 0 to 1. Already had led teams to effectively achieve personal and collective goals, from research of SOTA models to products, ensuring an environment where people can do their best work. Currently, I work with mostly all Data Science packages, Python, Docker, MongoDB and Postgres. I have over 5 years of experience in working remotely with companies all around the world.",
  avatarUrl: "https://media.licdn.com/dms/image/C4D03AQGMY-tGQAbbdg/profile-displayphoto-shrink_800_800/0/1554242461036?e=1711584000&v=beta&t=OlOXgVeo-zRWHT8ZgP-0gjs0hO-dDG1LHdT1eG5NFnc",
  personalWebsiteUrl: "https://mysitehere", 
  contact: {
    email: "fealbuqu353@gmail.com",
    tel: "+5511986757756",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/fealbuqu",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/felipe-albuquerque-983877156/",
        icon: LinkedInIcon,
      }
    ],
  },
  education: [
    {
      school: "Federal University of Technology - Brazil",
      degree: "Bachelor's Degree in Electronic Engineering and Robotics",
      start: "2013",
      end: "2017",
    },
    {
      school: "Polytechnic Institute of Bragança - Portugal",
      degree: "Master's Degree in Industrial Engineering",
      start: "2017",
      end: "2018",
    }
  ],
  work: [
    {
      company: "CK-12 Foundation",
      link: "https://www.ck12.org/",
      badges: ["Remote"],
      title: "Machine Learning Specialist",
      logo: Ck12Logo,
      start: "2022",
      end: "-",
      description:
        "Worked on R&D with focues on features for an AI tutor, Chatbot, Machine Learning models deployments, Data Mining and Analysis. Worked on a diverse set of problems helping the team develop, test and deploy AI applications for a diverse natures of problems. Technologies: FastAPI, PyTorch, TorchServe, MongoDB, LLMs and ElasticSearch ",
    },
    {
      company: "NTT Data",
      link: "https://www.nttdata.com/",
      badges: ["Remote"],
      title: "Data Scientist → Lead Engineer",
      logo: NTTDataLogo,
      start: "2020",
      end: "2022",
      description:
        "Managed a team to develop and improve applications for language and image processing. Also worked as a consultant to other research teams and big companies. Had worked on several projects from Anomalies Detection to forecasting and recommendation. Technologies: Docker, AWS, GCP, Kubernetes, PyTorch, Transformers.",
    },
    {
      company: "Neomove",
      link: "https://neomove.com.br/",
      badges: [],
      title: "Data Scientist",
      logo: NeomoveLogo,
      start: "2019",
      end: "2020",
      description:
        "Managed ETL processes and their automation using Big Data tools and Cloud Computing. This role involved data exploration, analysis, and preparation for the implementation of Machine Learning algorithms, with a focus on prediction. Additionally, contributions were made to product development, utilizing AI to transcribe and analyze audio and text through Natural Language Processing (NLP). Technolgies: Spark, Airflow, Scala, SQL, scikit-learn, AWS, Databricks.",
    },
    {
      company: "Heineken",
      link: "https://www.heinekenbrasil.com.br/#",
      badges: [],
      title: "Project Associate",
      logo: HeinekenLogo,
      start: "2018",
      end: "2018",
      description: "Automation of production reports and dashboards.",
    },
    {
      company: "Schneider Electric",
      link: "https://www.se.com/pl/pl/",
      badges: [],
      title: "Intern",
      logo: SchneiderLogo,
      start: "2018",
      end: "2018",
      description: "Implemented SCADA system in an automated machine, utilizing the acquired data for strategic preventive maintenance. Responsibilities included data management and the development of a algorithms for data cleaning and identifying critical workstations.",
    }
  ],
  skills: [
    "Python",
    "SQL",
    "PyTorch",
    "Machine Learning",
    "Generative AI",
    "Sagemaker",
    "Docker",
    "FastAPI",
    "Retrieval Augmented Generation"
  ],
  // projects: [
  //   {
  //     title: "Consultly",
  //     techStack: [
  //       "Side Project",
  //       "TypeScript",
  //       "Next.js",
  //       "Vite",
  //       "GraphQL",
  //       "WebRTC",
  //     ],
  //     description: "A platform to build and grow your online business",
  //     logo: ConsultlyLogo,
  //     link: {
  //       label: "consultly.com",
  //       href: "https://consultly.com/",
  //     },
  //   },
  //   {
  //     title: "Monito",
  //     techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
  //     description:
  //       "Browser extension that records everything happening in a web application",
  //     logo: MonitoLogo,
  //     link: {
  //       label: "monito.dev",
  //       href: "https://monito.dev/",
  //     },
  //   },
  //   {
  //     title: "Minimal",
  //     techStack: ["Side Project", "Next.js", "Puppeteer"],
  //     description:
  //       "Minimalist calendars, habit trackers and planners generator",
  //     logo: Minimal,
  //     link: {
  //       label: "useminimal.com",
  //       href: "https://useminimal.com/",
  //     },
  //   },
  //   {
  //     title: "Barepapers",
  //     techStack: ["Side Project", "Next.js", "Puppeteer"],
  //     description:
  //       "Generates beautiful wallpapers using random shapes and gradients",
  //     logo: BarepapersLogo,
  //     link: {
  //       label: "barepapers.com",
  //       href: "https://barepapers.com/",
  //     },
  //   },
  //   {
  //     title: "Year progress",
  //     techStack: ["Side Project", "TypeScript", "Next.js"],
  //     description: "Tracks current year progress and displays a countdown",
  //     logo: YearProgressLogo,
  //     link: {
  //       label: "getyearprogress.com",
  //       href: "https://getyearprogress.com/",
  //     },
  //   },
  //   {
  //     title: "Parabol",
  //     techStack: [
  //       "Full Stack Developer",
  //       "TypeScript",
  //       "React",
  //       "Node.js",
  //       "GraphQL",
  //     ],
  //     description:
  //       "The Agile meeting co-pilot that delivers better meetings with less effort",
  //     logo: ParabolLogo,
  //     link: {
  //       label: "github.com",
  //       href: "https://parabol.co/",
  //     },
  //   },
  //   {
  //     title: "Evercast",
  //     techStack: [
  //       "Lead Frontend Developer",

  //       "TypeScript",
  //       "React",
  //       "Node.js",
  //       "GraphQL",
  //     ],
  //     description:
  //       "Creative collaboration platform that combines video conferencing and HD media streaming",
  //     logo: EvercastLogo,
  //     link: {
  //       label: "evercast.us",
  //       href: "https://www.evercast.us/",
  //     },
  //   },
  //   {
  //     title: "Mobile Vikings",
  //     techStack: ["Lead Android Developer", "Android", "Kotlin"],
  //     description:
  //       "Android application for leading virtual mobile operator in Poland",
  //     logo: MobileVikingsLogo,
  //     link: {
  //       label: "mobilevikings.pl",
  //       href: "https://mobilevikings.pl/",
  //     },
  //   },
  //   {
  //     title: "Howdy",
  //     techStack: ["Lead Android Developer", "Android", "Kotlin"],
  //     description:
  //       "Howdy is a place for you to join communities you care about",
  //     logo: Howdy,
  //     link: {
  //       label: "play.google.com",
  //       href: "https://howdy.co/",
  //     },
  //   },
  //   {
  //     title: "Tastycloud",
  //     techStack: ["Lead Android Developer", "Android", "Kotlin"],
  //     description:
  //       "Android application for managing and displaying restaurant menus in kiosk mode",
  //     logo: TastyCloudLogo,
  //     link: {
  //       label: "tastycloud.fr",
  //       href: "https://www.tastycloud.fr/",
  //     },
  //   },
  //   {
  //     title: "Ambit",
  //     techStack: ["Lead Android Developer", "Android", "Kotlin"],
  //     description:
  //       "Android application that helps with sharing your contact details",
  //     logo: AmbitLogo,
  //   },
  //   {
  //     title: "Bim",
  //     techStack: ["Lead Android Developer", "Android", "Kotlin"],
  //     description:
  //       "Android application that helps with booking a table in a restaurants",
  //     logo: BimLogo,
  //   },
  //   {
  //     title: "Canal Digital GO",
  //     techStack: ["Lead Android Developer", "Android", "Kotlin"],
  //     description:
  //       "Video streaming mobile application for Canal Digital subscribers",
  //     logo: CDGOLogo,
  //   },
  // ],
} as const;
