import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'FastGreeks',
      description: 'Header-only C++ library for Black-Scholes pricing with <50ns execution latency.',
      tech: ['C++', 'AVX2', 'Memory Management'],
      github: 'https://github.com/imrishi007/FastGreeks/blob/main/include/fastgreeks/greeks.hpp',
    },
    {
      title: 'Pulse',
      description: 'Finance community platform with real-time market data, automated news aggregation from Google and 25+ sources, live news scrolling, blogging, and community features for finance enthusiasts.',
      tech: ['React', 'Firebase', 'Python'],
      github: 'https://github.com/imrishi007/pulse-main',
    },
    {
      title: 'Impulse',
      description: 'AI trading system combining autonomous strategy generation with human oversight and backtesting.',
      tech: ['Python', 'Machine Learning'],
      github: 'https://github.com/imrishi007/Impulse',
    },
    {
      title: 'Quant Trading Backtester',
      description: 'SMA, RSI, and combined strategies backtesting engine. Evaluates Sharpe ratio, returns, and drawdowns.',
      tech: ['Python', 'Pandas', 'Matplotlib'],
      github: 'https://github.com/imrishi007/Backtest1/blob/main/backtest.py',
      link: 'https://rishiwrites.vercel.app/blog/quant-trading-backtesting',
    },
    {
      title: 'Financial Document Analysis',
      description: 'Deep learning pipeline for SEC filing sentiment classification, risk level, and market outlook.',
      tech: ['Python', 'Deep Learning', 'NLP'],
      github: 'https://github.com/imrishi007/financial-document-analysis',
    },
    {
      title: 'Stock Price Prediction',
      description: 'ML ensemble combining regression for price forecasting and classification for directional movement.',
      tech: ['Python', 'Scikit-learn', 'Pandas'],
      github: 'https://github.com/imrishi007/stock-analysis-project.git',
    },
    {
      title: 'RishiWrites',
      description: 'Personal blog on quantitative finance and technical learning.',
      tech: ['Next.js', 'React'],
      github: 'https://github.com/imrishi007/rishi_writes',
      link: 'https://rishiwrites.vercel.app',
    },
    {
      title: 'Recursify',
      description: 'DSA blog with 550+ LeetCode solutions and pattern-based explanations.',
      tech: ['React', 'Vite'],
      github: 'https://github.com/imrishi007/recursify',
      link: 'https://recursify.vercel.app',
    },
  ];

  return (
    <section id="projects">
      <p className="section-label">Projects</p>
      <h2>Projects</h2>
      <p style={{ marginBottom: '1.5rem' }}>Systems, models, and infrastructure for quantitative finance.</p>

      <div className="project-list">
        {projects.map((p, i) => (
          <div key={i} className="project-item">
            <div className="project-row">
              <h3>
                <a href={p.github} target="_blank" rel="noopener noreferrer">{p.title}</a>
              </h3>
              <div className="project-links-row">
                {p.link && <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-ext-link">Live</a>}
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="project-ext-link">Source</a>
              </div>
            </div>
            <p className="project-desc">{p.description}</p>
            <div className="project-tech">
              {p.tech.map((t, j) => (
                <span key={j} className="tech-tag mono">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
