import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Pulse",
      subtitle: "Financial News Platform",
      description: "Real time financial news aggregator consolidating 25+ sources. Features interactive news reels and market data visualization.",
      tech: ["React", "Firebase", "Python"],
      link: null,
      github: "https://github.com/imrishi007/pulse-main"
    },
    {
      title: "Financial Document Analysis",
      subtitle: "Deep Learning Sentiment",
      description: "Deep learning pipeline for analyzing financial documents. Classifies SEC filings by sentiment, risk level, and market outlook.",
      tech: ["Python", "Deep Learning", "NLP"],
      link: null,
      github: "https://github.com/imrishi007/financial-document-analysis"
    },
    {
      title: "Impulse",
      subtitle: "AI Trading System",
      description: "Trading system combining AI learning with human oversight. Features autonomous strategy generation and backtesting.",
      tech: ["Python", "Machine Learning"],
      link: null,
      github: "https://github.com/imrishi007/Impulse"
    },
    {
      title: "Recursify",
      subtitle: "DSA Blog",
      description: "Interactive platform explaining 550+ LeetCode problems with pattern based learning and syntax highlighting.",
      tech: ["React", "JavaScript", "Vite"],
      link: "https://recursify.vercel.app",
      github: "https://github.com/imrishi007/recursify"
    },
    {
      title: "Stock Price Prediction",
      subtitle: "ML Forecasting",
      description: "ML system combining regression for price forecasting and classification for directional movement.",
      tech: ["Python", "Scikit-learn", "Pandas"],
      link: null,
      github: "https://github.com/imrishi007/stock-analysis-project.git"
    },
    {
      title: "Quant Trading Backtesting",
      subtitle: "Algorithmic Strategies",
      description: "SMA, RSI, and combined strategies for backtesting. Evaluated Sharpe ratio, returns, and drawdowns.",
      tech: ["Python", "Pandas", "Matplotlib"],
      link: "https://rishiwrites.vercel.app/blog/quant-trading-backtesting",
      github: "https://github.com/imrishi007/Backtest1"
    },
    {
      title: "RishiWrites",
      subtitle: "Personal Blog",
      description: "Minimal blog for creative and technical writing. Articles about quantitative finance and learning.",
      tech: ["Next.js", "React", "CSS"],
      link: "https://rishiwrites.vercel.app",
      github: "https://github.com/imrishi007/rishi_writes"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <h2>Projects</h2>
          <p className="section-subtitle">
            Things I've built.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
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
                    <span>Live</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <span>GitHub</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
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
