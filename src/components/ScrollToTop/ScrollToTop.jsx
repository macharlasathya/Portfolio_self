import React, { useState, useEffect } from 'react';
import './scrollToTop.css';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  
  // Set up the scroll event listener when the component mounts
  useEffect(() => {
    // Use throttling to improve performance
    let timeout;
    const throttledScrollHandler = () => {
      if (!timeout) {
        timeout = setTimeout(() => {
          toggleVisibility();
          timeout = null;
        }, 100);
      }
    };
    
    window.addEventListener('scroll', throttledScrollHandler);
    
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', throttledScrollHandler);
      clearTimeout(timeout);
    };
  }, []);
  
  // Scroll to top function with animation effect
  const scrollToTop = () => {
    setIsAnimating(true);
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Reset animation state after animation completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  return (
    <>
      <button
        onClick={scrollToTop}
        className={`scroll-to-top-button ${isVisible ? 'visible' : ''} ${isAnimating ? 'animating' : ''}`}
        aria-label="Scroll to top"
      >
        <span className="scroll-to-top-icon-wrapper">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="scroll-to-top-icon" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M18 15l-6-6-6 6"/>
          </svg>
        </span>
      </button>
    </>
  );
}

export default ScrollToTop;