import React, { useState, useEffect } from 'react';
import { Code, User, Book, Briefcase, Award, ArrowRight } from 'lucide-react';
import './About.css';
import resume from '../../assets/resume.pdf'
import profileImage from '../../assets/self.jpeg'; // Update with your image path

const About = () => {
  const [activeTab, setActiveTab] = useState('education');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('about');
      if (element) {
        const position = element.getBoundingClientRect();
        
        // If element is in viewport
        if (position.top < window.innerHeight && position.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const tabs = [
    { id: 'education', label: 'Education', icon: <Book size={20} /> },
    { id: 'awards', label: 'Awards', icon: <Award size={20} /> },
  ];

  const education = [
    {
      degree: "Bachelor's of Technology in Electronics and Communication Engineering ",
      institution: 'Sri indu College of Engineering and Technology',
      period: '2020 - 2024',
      description: 'Completed Bachelor’s in Electronics and Communication Engineering, gaining a strong foundation in electronic circuits, embedded systems, and communication technologies, with practical exposure to solving real-world engineering challenges'
    }
  ];

  const awards = [
    {
      title: 'Certificate of Completion',
      organization: "10kCoders",
      year: '2025',
      link:"https://drive.google.com/file/d/1xjXId3c5YuiFj_2yxES2YGn04o46CBwC/view?usp=sharing",
      description: 'Recognized for expertise in modern MERN STACK and best practices.'
    },
    {
  title: 'Certificate of Internship',
  organization: 'PHN Technology Pvt. Ltd.',
  duration: 'April 2023 – June 2023',
   link:"https://drive.google.com/file/d/1VMEgI9P72698GTAFXxHsaYgXDGh8sRUR/view?usp=sharing",
  description: 'Recognized for successful completion of internship focused on C and Python development. Worked on Pizza Sales Data Analysis using MS SQL Server and Excel, and developed a Multiple Disease Prediction project using Python and Machine Learning.'
},
{
  title: 'Certificate of Internship',
  organization: 'Psyliq',
  duration: 'March 2024 – April 2024',
   link:"https://drive.google.com/file/d/14TsCENqNvmt9ZM_M2JKb-Py1gLKuuCAX/view?usp=sharing",
  description: 'Completed internship in Data Analytics, where I gained hands-on experience in data analysis, data visualization, and report generation using tools like Excel, SQL, and Python. Contributed to projects involving data processing, trend analysis, and presenting actionable insights.'
},
{
  title: 'NPTEL IOT Certification',
  organization: 'NPTEL',
  achievement: 'Silver and Elite Medal',
  duration: 'January 2023 – April 2023',
   link:"https://drive.google.com/file/d/1la08QSqkA5UW_57tOdQWdTE7G25Rr_Yk/view?usp=sharing",
  description: 'Awarded Silver and Elite medals for successfully completing the IoT course, demonstrating strong knowledge and skills in Internet of Things technologies, including sensor networks, data collection, and IoT applications.'
},
 {
    title: 'Python Bootcamp Certification',
    organization: 'Devtown',
    duration: 'October 2022 – October 2022',
   link:"https://drive.google.com/file/d/1S84Qza0COKx3kkvg4hVUUpb237ucpgt2/view?usp=sharing",
    description: 'Completed a hands-on Python bootcamp covering programming fundamentals, data types, control structures, functions, and basic problem-solving skills with real-time coding exercises.'
  },
   {
    title: 'Introduction to C Certification',
    organization: 'Great Learning',
    duration: 'December 2021 – Janunary 2022',
   link:"https://drive.google.com/file/d/1NvpI0iL07aazPWgsCRItBabbkdkYDe83/view?usp=sharing",
    description: 'Completed a foundational course in Excel covering data analysis, functions, formulas, and data visualization techniques. Gained practical skills in using Excel for data manipulation and reporting.'
   }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'education':
        return (
          <div className="timeline">
            {education.map((edu, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h4>{edu.degree}</h4>
                  <div className="timeline-info">
                    <span className="institution">{edu.institution}</span>
                    <span className="period">{edu.period}</span>
                  </div>
                  <p>{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        );
      case 'awards':
        return (
          <div className="awards-container">
            {awards.map((award, index) => (
              <div key={index} className="award-item">
                <h4>{award.title}</h4>
                <div className="award-info">
                  <span className="organization">{award.organization}</span>
                  <span className="year">{award.year}</span>
                </div>
                
                <p>{award.description}</p>
                <a href={award.link} id="show-credentials" target="_blank"
                  rel="noopener noreferrer">Show Credentials</a>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="about" className={`about-section ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <div className="about-header">
          <h2>About Me</h2>
          <div className="divider"></div>
          <p className="about-intro">
         I'm a passionate full-stack developer skilled in the MERN stack, React, and modern frontend technologies.
         I build responsive, user-friendly web apps and work confidently with Node.js and Express on the backend.
         With added expertise in SQL and Python, I handle data and scripting effectively.I love solving real-world 
         problems with clean, scalable code and a constant drive to learn.
          </p>
        </div>

        <div className="about-content">
          <div className="profile-card">
            <div className="profile-image">
  <img src={profileImage} alt="MACHARLA SATHYA NARAYANA" />
</div>

            <h3>MACHARLA SATHYA NARAYANA</h3>
            <p className="title">Mern Stack Developer</p>
            <a href={resume} className="download-resume" target="_blank" rel="noopener noreferrer">
              Download Resume <ArrowRight size={16} />
            </a>
          </div>

          <div className="tabs-container">
            <div className="tabs">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  className={activeTab === tab.id ? 'active' : ''}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
            <div className="tab-content">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;