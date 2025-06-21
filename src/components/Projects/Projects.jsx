import React, { useState } from 'react';
import './Projects.css';

function Projects({ projects }) {
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Get the featured project (first in the array)
  const featuredProject = projects?.[0] || null;
  
  // Get the rest of the projects
  const otherProjects = projects?.slice(1) || [];
  
  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all' 
    ? otherProjects 
    : otherProjects.filter(project => project.category === activeFilter);
  
  // Get unique categories
  const categories = ['all', ...new Set(projects?.map(project => project.category).filter(Boolean))];
  
  return (
    <section id="realprojects" className="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">Explore my recent work and projects</p>
        </div>
        
        {/* Featured Project */}
        {featuredProject && (
          <div className="featured-project">
            <div className="featured-project-header">
              <h3>Featured Project</h3>
              <div className="featured-badge">
                <span>Featured</span>
              </div>
            </div>
            
            <div className="featured-project-content">
              <div className="featured-project-image-container">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.name}
                  className="featured-project-image"
                />
                <div className="image-overlay">
                  <a 
                    href={featuredProject.demoLink}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </div>
              </div>
              
              <div className="featured-project-info">
                <h3 className="featured-project-name">{featuredProject.name}</h3>
                <p className="featured-project-description">{featuredProject.description}</p>
                
                <div className="featured-project-tech">
                  <h4 className="tech-stack-title">Technologies Used:</h4>
                  <ul className="tech-stack-list">
                    {featuredProject.techStack?.map((tech, index) => (
                      <li key={index} className="tech-item">{tech}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-links">
                  <a
                    href={featuredProject.demoLink}
                    className="project-demo-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  {featuredProject.githubLink && (
                    <a
                      href={featuredProject.githubLink}
                      className="project-github-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Project Filters */}
        {categories.length > 1 && (
          <div className="project-filters">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                onClick={() => setActiveFilter(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        )}
        
        {/* Project Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id || index} 
              className="project-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.name}
                  className="project-image"
                />
                <div className="card-overlay">
                  <div className="overlay-content">
                    <h4 className="overlay-title">{project.name}</h4>
                    <p className="overlay-description">{project.description?.substring(0, 100)}...</p>
                    <div className="overlay-tech">
                      {project.techStack?.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="overlay-tech-item">{tech}</span>
                      ))}
                    </div>
                    <div className="overlay-links">
                      {project.demoLink && (
                        <a
                          href={project.demoLink}
                          className="overlay-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Demo
                        </a>
                      )}
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          className="overlay-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-card-info">
                <h3 className="project-card-name">{project.name}</h3>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <p>No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;