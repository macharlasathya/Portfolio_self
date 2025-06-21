import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';

import portfolioData from './data/portfolioData';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setTimeout(() => {
          setData(portfolioData);
          setIsLoading(false);
        }, 2000); // 2 second delay to simulate loading
      } catch (error) {
        console.error("Error loading portfolio data:", error);
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <>
      {isLoading && <LoadingSpinner />}
      
      {!isLoading && data && (
        <div className="portfolio-app">
          <Navbar />
          <Hero userData={data.user} />
          <About />
          <Projects projects={data.projects} />
           <Skills skills={data.skills} />
          <Contact />
          <Footer />
          <ScrollToTop />
        </div>
      )}
    </>
  );
}

export default App;