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
              I'm an introvert and logical thinker, though sometimes I can be pretty stupid. 
              Well, more than sometimes. I'm currently pursuing B.Tech in Computer Science (AI-ML) 
              at Adani University with a CGPA of 8.70.
            </p>
            <p>
              I enjoy problem-solving, mathematical intuition, and breaking down complex algorithms 
              into simple explanations. My main interests lie in DSA, core CS concepts, and the 
              early foundations of quantitative finance.
            </p>
            <p>
              When I'm not coding, you'll find me watching One Piece, playing chess, following F1 
              and football, or just vibing to music on Spotify.
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
            <h3>3</h3>
            <p>Major Projects</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
