import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Rishi Raval</span>
          </h1>
          <p className="hero-subtitle">
            Software Developer • Competitive Programmer • Problem Solver
          </p>
          <p className="hero-description">
            A dedicated individual who loves breaking down complex algorithms, building impactful projects,
            and turning coffee into code. Once I'm focused on something, I'll do whatever it takes to
            accomplish the goals I've set for myself.
          </p>
          <div className="hero-buttons">
            <button onClick={() => scrollToSection('projects')} className="btn-primary">
              View My Work
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
            <button onClick={() => scrollToSection('contact')} className="btn-secondary">Get in Touch</button>
          </div>
        </div>
        
        <div className="hero-scroll">
          <div className="scroll-indicator">
            <span>Scroll</span>
            <div className="scroll-line"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
