import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Handle section visibility for active link highlighting
    const handleSectionVisibility = () => {
      const sections = ['home', 'about', 'realprojects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveLink(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleSectionVisibility);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleSectionVisibility);
    };
  }, []);

  // Close menu when clicking on a link (mobile)
  const handleLinkClick = (linkName) => {
    setIsMenuOpen(false);
    setActiveLink(linkName);
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo">
          <a href="#home">
            <span className="logo-text">Portfolio</span>
          </a>
        </div>
        
        <nav className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <a 
            href="#" 
            className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
            onClick={() => handleLinkClick('home')}
          >
            Home
          </a>
          <a 
            href="#about" 
            className={`nav-link ${activeLink === 'about' ? 'active' : ''}`}
            onClick={() => handleLinkClick('about')}
          >
            About
          </a>
          <a 
            href="#realprojects" 
            className={`nav-link ${activeLink === 'realprojects' ? 'active' : ''}`}
            onClick={() => handleLinkClick('realprojects')}
          >
            Projects
          </a>
          <a 
            href="#skills" 
            className={`nav-link ${activeLink === 'skills' ? 'active' : ''}`}
            onClick={() => handleLinkClick('skills')}
          >
            Skills
          </a>
          <a 
            href="#contact" 
            className={`nav-link contact-btn ${activeLink === 'contact' ? 'active-btn' : ''}`}
            onClick={() => handleLinkClick('contact')}
          >
            Contact Me
          </a>
        </nav>
        
        <button
          className="menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
    </header>
  );
}

export default Navbar;