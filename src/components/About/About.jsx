import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-bg">
        <div className="about-gradient"></div>
      </div>

      <div className="container">
        <div className="about-grid">
          <div className="about-content animate-on-scroll">
            <span className="section-tag">About</span>
            <h2>Driven by curiosity,<br /><span className="gradient-text">powered by code.</span></h2>
            <p className="about-lead">
              Computer Science student at Adani University with a passion for
              technology and finance.
            </p>
            <p>
              I approach problems with a logical mindset, breaking them down into
              clear steps. My work spans quantitative finance research to building
              full stack applications.
            </p>
            <p>
              I believe in learning by doing. Always looking for opportunities
              to blend technical skills with finance and entrepreneurship.
            </p>
          </div>

          <div className="about-cards animate-on-scroll">
            <div className="about-card">
              <h3>Finance Focus</h3>
              <p>Quantitative research, trading strategies, financial analysis</p>
            </div>
            <div className="about-card">
              <h3>Fast Learner</h3>
              <p>Quick to pick up new technologies and apply them</p>
            </div>
            <div className="about-card">
              <h3>Problem Solver</h3>
              <p>550+ LeetCode problems with focus on optimization</p>
            </div>
            <div className="about-card">
              <h3>Builder</h3>
              <p>7+ projects shipped from ideation to deployment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
