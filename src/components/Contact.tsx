import React, { useState, useEffect } from 'react';
import './Contact.css';
import { FaEnvelope, FaLinkedin, FaInstagram, FaGithub, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Create floating particles
    const particlesContainer = document.querySelector('.particles');
    if (particlesContainer) {
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random size between 2px and 6px
        const size = Math.random() * 4 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Random animation duration between 10s and 30s
        const duration = Math.random() * 20 + 10;
        particle.style.animationDuration = `${duration}s`;
        
        // Random delay
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        particlesContainer.appendChild(particle);
      }
    }

    // Removed glow background effects
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="contact-section">
      <div className="particles"></div>
   
      
      <div className="contact-left">
        <div className="contact-info">
          <div className="contact-info-header">Get In Touch</div>
          <div className="contact-info-item">
            <FaEnvelope />
            <a href="mailto:contact@example.com" target="_blank" rel="noopener noreferrer">
              contact@example.com
            </a>
          </div>

          <div className="contact-info-item">
            <FaMapMarkerAlt />
            <a href="#" style={{ pointerEvents: 'none', cursor: 'default', color: 'inherit', textDecoration: 'none' }}>
              San Francisco, CA
            </a>
          </div>

          <div className="contact-info-item">
            <FaLinkedin />
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              LinkedIn Profile
            </a>
          </div>
        </div>
        
        <div className="follow-title">Connect With Me</div>
        <div className="follow-links">
          <a 
            className="follow-link" 
            href="https://instagram.com/yourprofile" 
            target="_blank" 
            rel="noopener noreferrer"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <FaInstagram />
          </a>
          <a 
            className="follow-link" 
            href="https://github.com/yourprofile" 
            target="_blank" 
            rel="noopener noreferrer"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <FaGithub />
          </a>
          <a 
            className="follow-link" 
            href="https://linkedin.com/in/yourprofile" 
            target="_blank" 
            rel="noopener noreferrer"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <FaLinkedin />
          </a>
          <a 
            className="follow-link" 
            href="mailto:contact@example.com"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
      
      <div className="contact-right">
        <form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={form.name} 
              onChange={handleChange} 
              required 
              placeholder="Enter your name"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={form.email} 
              onChange={handleChange} 
              required 
              placeholder="Enter your email"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows={5} 
              value={form.message} 
              onChange={handleChange} 
              required 
              placeholder="Type your message here..."
            />
          </div>
          
          <button type="submit">
            Send Message
          </button>
          
          {submitted && (
            <div className="submission-message">
              Thank you! Your message has been sent successfully.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;