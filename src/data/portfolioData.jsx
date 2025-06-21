// src/data/portfolioData.js
import park from '../assets/parking.jpeg';
import portfolio from '../assets/portfolio.jpeg'
import disease from '../assets/disease.jpeg'
import sales from "../assets/pizza.jpeg"
import health from '../assets/health.jpeg'
import sweet from '../assets/sweet.png'

const portfolioData = {
  user: {
    name: "MACHARLA SATHYA NARAYANA",
    titles: ["MERN STACK DEVELOPER", "FRONTEND DEVELOPER","PYTHON DEVELOPER","SQL DEVELOPER","REACT DEVELOPER"],
    subtitle: "Focused on Becoming a Proficient MERN Stack Developer",
    image: ""
  },
  skills: [
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
    { name: "React Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactbootstrap/reactbootstrap-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "NodeJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "ExpressJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Numpy", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v15/icons/numpy.svg" },
    { name: "Pandas", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v15/icons/pandas.svg" },
    //  { name: "Matplotlib", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v15/icons/matplotlib.svg" },
    
    
  ],
  projects: [
    {
      id: 1,
      name: "ParkNGo - Easy Parking Solutions",
      description: "ParkNGo is a fully responsive web application that allows users to search, view, and book parking spaces across various locations. It features real-time availability, user authentication, dynamic cost calculation, UPI-based payments, and QR code-based booking confirmation. Built using the MERN stack with a focus on seamless user experience and location-based filtering.",
      image: park,
      techStack: ["HTML", "CSS", "JavaScript", "Bootstrap","Reactr", "Node.js", "Express", "MongoDB"],
      demoLink: "https://full-stack-park-and-go-app-h9a2.vercel.app/",
      githubLink: "https://github.com/macharlasathya/full_stack_park_and_go_app"
    },
  {
  id: 2,
  name: "Sweet Treats E-Commerce Website",
  description: "Sweet Treats is a responsive e-commerce website designed for selling sweets and desserts online. It features attractive product listings, shopping cart functionality, dynamic pricing, and a user-friendly interface. Built using HTML, CSS, and JavaScript, the site provides a smooth browsing and shopping experience for users.",
  image: sweet,
  techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  demoLink: "https://macharlasathya.github.io/Javascript_project/",
  githubLink: "https://github.com/macharlasathya/Javascript_project"
}
,
{
  id: 3,
  name: "Health Care Web Project",
  description: "This project showcases my skills in creating a responsive, user-friendly design that provides a seamless experience for users seeking health care information.",
  image: health,
  techStack: ["HTML", "CSS","Bootstrap"],
  demoLink: "https://macharlasathya.github.io/Javascript_project/",
  githubLink: "https://github.com/macharlasathya/Html-Css-project/blob/main/first.html"
},
{
      id: 4,
      name: "Pizza Sales Data Analysis",
      description: "Pizza Sales Data Analysis is a data analytics project focused on analyzing sales data using MS SQL Server and Excel. The project involves data cleaning, trend analysis, and generating actionable insights to improve sales strategies. It provides a detailed overview of sales patterns, helping businesses optimize inventory and marketing efforts.",
      image: sales,
      techStack: ["Excel", "MS SQL"],
      demoLink: "https://photo-studio-git-main-rammohans-projects-dffdb287.vercel.app/",
      githubLink: "https://github.com/macharlasathya/PIZZA-SALES"
    },
    {
      id: 5,
      name: "Multiple Disease prediction By Using Python and ML",
      description: "Multiple Disease Prediction is a machine learning project that utilizes Python to predict the likelihood of various diseases based on patient data. The project uses supervised learning algorithms to analyze medical data, enabling early diagnosis and better healthcare decisions. It demonstrates the application of machine learning in the medical field to enhance predictive accuracy and aid in diagnosis." ,
      image: disease,
      techStack: ["EXCEL", "Python", "Machine Learning"],
      demoLink: "",
      githubLink: "https://github.com/macharlasathya/Disease-predictor-by-Python-and-ML"
    },
    {
      id: 6,
      name: "Porfolio website",
      description: "A clean, responsive portfolio showcasing my projects, skills, and achievements in web development and electronics, with contact and resume.",
      image: portfolio,
      techStack: ["React", "CSS", "ReactBootstap"],
      demoLink: "#",
      githubLink: "https://github.com/SangatiRammohan/Portfolio"
    }
    
    
  ],
  contact: {
    email: "sathishmacharla5995@gmail.com",
    social: [
      { platform: "GitHub", link: "https://github.com/macharlasathya", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/github.svg" },
      { platform: "LinkedIn", link: "https://www.linkedin.com/in/msathya17/", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/linkedin.svg" },
      { platform: "Facebook", link: "https://www.facebook.com/sathyanarayana.macharla.9/", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/facebook.svg" },
      { platform: "Instagram", link: "https://www.instagram.com/sathya_m1701/", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/instagram.svg" },
      { platform: "Twitter", link: "https://x.com/sangati_0131?t=dG5_5RLxFFupY4Is-d9Sjw&s=09", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/twitter.svg" },

    ]
  }
};

export default portfolioData;