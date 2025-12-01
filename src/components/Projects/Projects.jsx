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
      github: "https://github.com/imrishi007/stock-analysis-project.git"
    },
    {
      title: "Quant Trading Backtesting",
      subtitle: "Algorithmic Trading Strategies",
      description: "Developed SMA, RSI, and combined strategies for backtesting on AAPL data. Evaluated returns, Sharpe ratio, and drawdowns with optimization to improve performance.",
      tech: ["Python", "Pandas", "Matplotlib"],
      link: "https://rishiwrites.vercel.app/blog/quant-trading-backtesting",
      github: "https://github.com/imrishi007/Backtest1"
    },
    {
      title: "RishiWrites Blog",
      subtitle: "Personal Writing Website",
      description: "A minimal blog website for creative and technical writing — portfolio-style articles about learning, finance, and personal thoughts.",
      tech: ["Next.js", "React", "CSS"],
      link: "https://rishiwrites.vercel.app",
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
