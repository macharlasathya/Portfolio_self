import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  // LinkedIn profile URL - Replace with the portfolio owner's LinkedIn profile URL
  const linkedInProfileURL = "https://www.linkedin.com/in/msathya17/";

  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    try {
      // Format message for LinkedIn
      const messageBody = `Message from Portfolio Contact Form:
Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}`;
      
      // Encode the message for URL
      const encodedMessage = encodeURIComponent(messageBody);
      
      // Create LinkedIn message URL
      const linkedInMessageURL = `${linkedInProfileURL}?message=${encodedMessage}`;
      
      // Set success status
      setFormStatus({
        submitted: true,
        error: false,
        message: "Redirecting you to LinkedIn to complete sending your message..."
      });
      
      // Log form data
      console.log('Form data prepared for LinkedIn:', formData);
      
      // Redirect to LinkedIn after a short delay
      setTimeout(() => {
        window.open(linkedInMessageURL, '_blank');
        
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          message: ''
        });
        
        // Reset status after 5 seconds
        setTimeout(() => {
          setFormStatus({ submitted: false, error: false, message: '' });
        }, 5000);
      }, 1500);
    } catch (error) {
      // Handle errors
      console.error("Error redirecting to LinkedIn:", error);
      setFormStatus({
        submitted: true,
        error: true,
        message: "There was an error connecting to LinkedIn. Please try again."
      });
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's work together on your next project</p>
        </div>
        
        <div className="contact-wrapper">    
          <div className="contact-form-column">
            <div className="contact-form-card">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3 className="contact-form-title">Send a Message</h3>
                
                {formStatus.submitted && (
                  <div className={`form-alert ${formStatus.error ? 'error' : 'success'}`}>
                    {formStatus.message}
                  </div>
                )}
                
                <div className="form-group-row">
                  <div className="form-group">
                    <label htmlFor="fullName" className="form-label">Full Name <span className="required">*</span></label>
                    <div className="input-wrapper">
                      <i className="fas fa-user input-icon"></i>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address <span className="required">*</span></label>
                    <div className="input-wrapper">
                      <i className="fas fa-envelope input-icon"></i>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="example@email.com"
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <div className="input-wrapper">
                    <i className="fas fa-phone-alt input-icon"></i>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="+91 000 000 0000"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Your Message <span className="required">*</span></label>
                  <div className="textarea-wrapper">
                    <i className="fas fa-comment-alt textarea-icon"></i>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="form-textarea"
                      placeholder="Write your message here..."
                      rows="5"
                      required
                    ></textarea>
                  </div>
                </div>
                
                <div className="form-submit">
                  <button type="submit" className="submit-button" disabled={formStatus.submitted}>
                    <span>Send Message via LinkedIn</span>
                    <i className="fab fa-linkedin"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;