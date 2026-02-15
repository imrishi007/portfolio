import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-intro">
        <h1>Rishi Raval</h1>
        <p className="hero-tagline">
          Computer Science Student. Focused on Algorithmic Trading and Low-Latency Systems.
        </p>
        <p className="hero-summary">
          Engineering student at Adani University building systems that trade, not just interfaces that display data. Deep focus on C++ and quantitative finance.
        </p>
      </div>

      <nav className="hero-links">
        <a href="https://github.com/imrishi007" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/rishipraval07/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="/Resume_Main.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        <a href="mailto:rishipraval@gmail.com">Email</a>
        <a href="https://leetcode.com/u/rishipraval/" target="_blank" rel="noopener noreferrer">LeetCode</a>
      </nav>

      <div className="hero-stats">
        <div className="hero-stat">
          <span className="stat-value mono">550+</span>
          <span className="stat-label">LeetCode Problems</span>
        </div>
        <div className="hero-stat">
          <span className="stat-value mono">8.70</span>
          <span className="stat-label">CGPA</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
