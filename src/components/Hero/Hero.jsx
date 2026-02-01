import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;

      const orbs = hero.querySelectorAll('.orb');
      orbs.forEach((orb, i) => {
        const speed = (i + 1) * 0.5;
        orb.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <div className="hero-bg">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        <div className="grid-overlay"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge animate-on-scroll">
            <span className="badge-dot"></span>
            <span>Open to Opportunities</span>
          </div>

          <h1 className="hero-title animate-on-scroll">
            Hi, I'm <span className="gradient-text">Rishi Raval</span>
          </h1>

          <p className="hero-description animate-on-scroll">
            Interested in finance and entrepreneurship. I like problem solving
            and building things that matter.
          </p>

          <div className="hero-buttons animate-on-scroll">
            <button onClick={() => scrollToSection('projects')} className="btn-primary">
              <span>View Projects</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
            <button onClick={() => scrollToSection('contact')} className="btn-secondary">
              <span>Get in Touch</span>
            </button>
          </div>

          <div className="hero-stats animate-on-scroll">
            <div className="stat">
              <span className="stat-value">550+</span>
              <span className="stat-label">LeetCode</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-value">7+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-value">8.70</span>
              <span className="stat-label">CGPA</span>
            </div>
          </div>
        </div>

        <div className="hero-scroll">
          <div className="scroll-indicator">
            <div className="scroll-mouse">
              <div className="scroll-wheel"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
