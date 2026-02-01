import React from 'react';
import './Contact.css';

const Contact = () => {
  const socialLinks = [
    {
      name: "Email",
      value: "rishipraval@gmail.com",
      link: "mailto:rishipraval@gmail.com"
    },
    {
      name: "GitHub",
      value: "@imrishi007",
      link: "https://github.com/imrishi007"
    },
    {
      name: "LinkedIn",
      value: "rishipraval07",
      link: "https://www.linkedin.com/in/rishipraval07/"
    },
    {
      name: "LeetCode",
      value: "rishipraval",
      link: "https://leetcode.com/u/rishipraval/"
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-bg">
        <div className="contact-orb"></div>
      </div>

      <div className="container">
        <div className="contact-content">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">Contact</span>
            <h2>Let's Connect</h2>
            <p className="section-subtitle">
              Open to discussing ideas, projects, or opportunities.
            </p>
          </div>

          <div className="social-grid animate-on-scroll">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target={social.name === "Email" ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="social-card"
              >
                <div className="social-info">
                  <h3>{social.name}</h3>
                  <p>{social.value}</p>
                </div>
                <svg className="arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
            ))}
          </div>

          <div className="resume-section animate-on-scroll">
            <a href="/Resume_Main.pdf" target="_blank" rel="noopener noreferrer" className="btn-resume">
              <span>View Resume</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </div>

          <footer className="footer animate-on-scroll">
            <p>Designed & Built by Rishi Raval</p>
            <p className="footer-sub">© 2025</p>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default Contact;
