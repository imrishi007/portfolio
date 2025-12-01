import React from 'react';
import './Contact.css';

const Contact = () => {
  const socialLinks = [
    {
      name: "Email",
      value: "rishipraval@gmail.com",
      link: "mailto:rishipraval@gmail.com",
      icon: "📧"
    },
    {
      name: "GitHub",
      value: "@imrishi007",
      link: "https://github.com/imrishi007",
      icon: "💻"
    },
    {
      name: "LinkedIn",
      value: "rishipraval07",
      link: "https://www.linkedin.com/in/rishipraval07/",
      icon: "💼"
    },
    {
      name: "LeetCode",
      value: "rishipraval",
      link: "https://leetcode.com/u/rishipraval/",
      icon: "⚡"
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-content">
          <h2>Let's Connect</h2>
          <p className="contact-intro">
            Always open to discussing algorithms, projects, or just having a conversation. 
            Feel free to reach out!
          </p>
          
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.link}
                target={social.name === "Email" ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="social-card"
              >
                <span className="social-icon">{social.icon}</span>
                <div className="social-info">
                  <h3>{social.name}</h3>
                  <p>{social.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="resume-download">
            <a href="/Resume_Main.pdf" target="_blank" rel="noopener noreferrer" className="btn-download" title="Open Resume in new tab">
              Open Resume
            </a>
          </div>

          <footer className="footer">
            <p>© 2025 Rishi Raval. Built with React.</p>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default Contact;
