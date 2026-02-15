import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <p className="section-label">Contact</p>
      <h2>Get in Touch</h2>
      <p style={{ marginBottom: '1.5rem' }}>
        Open to discussing opportunities in quantitative finance, algorithmic trading, and systems engineering.
      </p>

      <div className="contact-links">
        <a href="mailto:rishipraval@gmail.com" className="contact-row">
          <span className="contact-type mono">Email</span>
          <span className="contact-value">rishipraval@gmail.com</span>
        </a>
        <a href="https://github.com/imrishi007" target="_blank" rel="noopener noreferrer" className="contact-row">
          <span className="contact-type mono">GitHub</span>
          <span className="contact-value">@imrishi007</span>
        </a>
        <a href="https://www.linkedin.com/in/rishipraval07/" target="_blank" rel="noopener noreferrer" className="contact-row">
          <span className="contact-type mono">LinkedIn</span>
          <span className="contact-value">rishipraval07</span>
        </a>
        <a href="https://leetcode.com/u/rishipraval/" target="_blank" rel="noopener noreferrer" className="contact-row">
          <span className="contact-type mono">LeetCode</span>
          <span className="contact-value">rishipraval</span>
        </a>
      </div>

      <footer className="site-footer">
        <p>Rishi Raval &copy; 2026</p>
      </footer>
    </section>
  );
};

export default Contact;
