import React from 'react';
import portfolioData from '../../data/portfolioData';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-social">
            <h3 className="footer-social-title">Connect With Me</h3>
            <div className="footer-social-icons">
              {portfolioData.contact.social.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="footer-social-link"
                  aria-label={item.platform}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={item.icon} alt={item.platform} className="footer-social-icon" />
                </a>
              ))}
            </div>
          </div>
          <div className="footer-copyright">
            © {new Date().getFullYear()} | All Rights Reserved
            <br />
            <span>Contact: {portfolioData.contact.email}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;