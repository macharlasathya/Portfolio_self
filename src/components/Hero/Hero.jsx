import React, { useState, useEffect } from 'react';
import { ChevronsDown } from 'lucide-react';
import './Hero.css';

import image1 from '../../assets/sathya.jpeg'

// Modern Hero Component with Image
const Hero = ({ userData = {
  
    name:"MACHARLA SATHYA NARAYANA",
    titles: ["MERN STACK DEVELOPER","FRONTEND DEVELOPER","PYTHON DEVELOPER","SQL DEVELOPER","REACT DEVELOPER"],
    subtitle: "Focused on Becoming a Proficient MERN Stack Developer",
    image:ramimage 
}}) => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Title rotation effect with animation
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setTitleIndex((prevIndex) => (prevIndex + 1) % userData.titles.length);
        setIsAnimating(false);
      }, 500); // Half the animation duration for smooth transition
    }, 3000);
    
    return () => clearInterval(interval);
  }, [userData.titles]);
  
  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-flex-wrapper">
          {/* Left side - Text content */}
          <div className="hero-text-container">
            {/* Greeting */}
            <p className="hero-greeting">
              Hi there!
            </p>
            
            {/* Name with animated underline */}
            <h1 className="hero-name">
              I'm <span className="hero-highlight">
                {userData.name}
              </span>
            </h1>
            
            {/* Animated job titles */}
            <div className="title-animation-container">
              <h2 
                className={`hero-title ${isAnimating ? 'title-fade-out' : 'title-fade-in'}`}
              >
                {userData.titles[titleIndex]}
              </h2>
            </div>
            
            {/* Subtitle/Description */}
            <p className="hero-subtitle">
              {userData.subtitle}
            </p>
            
            {/* Call to action buttons */}
            <div className="hero-cta">
              <button 
                onClick={() => scrollToSection('realprojects')}
                className="hero-button primary"
              >
                My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="hero-button secondary"
              >
                Contact Me
              </button>
            </div>
          </div>
          
          {/* Right side - Image container */}
          <div className="hero-image-container">
            <div className="hero-image-wrapper">
              <img 
                src={image1} 
                alt={`${userData.name} - ${userData.titles[0]}`} 
                className="hero-image"
              />
              {/* Decorative elements */}
              <div className="hero-image-shape shape-1"></div>
              <div className="hero-image-shape shape-2"></div>
              <div className="hero-image-dots"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <ChevronsDown size={28} />
      </div>
    </div>
  );
};

export default Hero;