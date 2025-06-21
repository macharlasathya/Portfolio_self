import React, { useState, useEffect } from 'react';
import './Skills.css';

function Skills({ skills }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleSkills, setVisibleSkills] = useState([]);
  const [isInView, setIsInView] = useState(false);

  // Extract unique categories from skills and filter out undefined/null values
  const categories = ['all', ...new Set(skills?.map(skill => skill.category).filter(Boolean))];

  // Filter skills based on active category
  useEffect(() => {
    if (activeCategory === 'all') {
      setVisibleSkills(skills);
    } else {
      setVisibleSkills(skills?.filter(skill => skill.category === activeCategory));
    }
  }, [activeCategory, skills]);

  // Intersection Observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('#skills');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="skills" className={`skills ${isInView ? 'in-view' : ''}`}>
      <div className="skills-container">
        <div className="skills-header">
          <h2 className="skills-title">Technical <span className="highlight">Expertise</span></h2>
          <p className="skills-subtitle">A comprehensive collection of technologies I specialize in</p>
        </div>

        {/* Skills Filter */}
        <div className="skills-filter">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category && category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {visibleSkills?.map((skill, index) => (
            <div 
              key={index} 
              className="skill-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="skill-icon-container">
                <img src={skill?.icon} alt={skill?.name} className="skill-icon" />
              </div>
              <div className="skill-info">
                <h3 className="skill-name">{skill?.name}</h3>
                {skill?.level && (
                  <div className="skill-level">
                    <div className="progress-bar">
                      <div 
                        className="progress-fill"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <span className="level-label">{getProficiencyLabel(skill.level)}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Helper function to get proficiency label based on percentage
function getProficiencyLabel(level) {
  if (level >= 90) return "Expert";
  if (level >= 75) return "Advanced";
  if (level >= 60) return "Intermediate";
  if (level >= 40) return "Competent";
  return "Beginner";
}

export default Skills;