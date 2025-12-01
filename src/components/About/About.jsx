import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I’m an introverted, detail-oriented person who enjoys thinking deeply and
              approaching problems with a logical, structured mindset. I like understanding
              how things work beneath the surface, whether it’s an algorithm, a system,
              or a concept that needs to be broken down clearly.
            </p>
            <p>
              My interests revolve around DSA, core computer science fundamentals, and the
              early foundations of quantitative finance. I enjoy working on ideas that
              challenge me intellectually and help me grow as a developer.
            </p>
            <p>
              Outside of tech, I like chess, F1 (Tu du du duu Maxx Verstappennn), football (I love ronaldo!!), music, writing, watching anime and things that keep
              me curious and give me space to think.
            </p>
          </div>


        </div>
        
        <div className="about-stats">
          <div className="stat-card">
            <h3>415+</h3>
            <p>LeetCode Problems</p>
          </div>
          <div className="stat-card">
            <h3>8.70</h3>
            <p>CGPA</p>
          </div>
          <div className="stat-card">
            <h3>4</h3>
            <p>Major Projects</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
