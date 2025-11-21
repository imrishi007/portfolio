import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Recursify",
      subtitle: "DSA Explanation Blog",
      description: "A complete blog platform explaining 415+ LeetCode problems with clear intuition and pattern-based learning. Features multi-language code blocks, bookmarking, and progress tracking.",
      tech: ["React", "JavaScript", "Vite", "Prism.js"],
      link: "https://recursify.vercel.app",
      github: "https://github.com/imrishi007/recursify"
    },
    {
      title: "Stock Price Prediction",
      subtitle: "ML System",
      description: "Dual-model machine learning system combining regression for price forecasting and classification for directional movement. Custom technical indicators and feature engineering.",
      tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
      link: null,
      github: "https://github.com/imrishi007/Stock-Price-Prediction-System"
    },
    {
      title: "Neural Made Simple",
      subtitle: "ML Explanation Blog",
      description: "Educational website simplifying neural networks and ML concepts using clear, intuitive explanations. Minimal design for distraction-free learning.",
      tech: ["React", "JavaScript", "HTML", "CSS"],
      link: "https://neuralmadesimple.vercel.app",
      github: null
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    Live Site →
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    GitHub →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
