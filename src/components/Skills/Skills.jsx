import React from 'react';
import './Skills.css';

const Skills = () => {
  const categories = [
    {
      label: 'Languages',
      items: ['C++', 'Python', 'SQL', 'JavaScript', 'Java'],
    },
    {
      label: 'Quant / Math',
      items: ['Black-Scholes', 'Stochastic Calculus', 'Time Series Analysis', 'Statistics', 'Financial Modeling', 'Backtesting'],
    },
    {
      label: 'ML / Data',
      items: ['Scikit-learn', 'TensorFlow', 'Pandas', 'NumPy', 'NLP'],
    },
    {
      label: 'Tools',
      items: ['Linux', 'Git', 'Docker', 'Jupyter', 'VS Code'],
    },
    {
      label: 'Web (Secondary)',
      items: ['React', 'Next.js', 'Firebase', 'Vite'],
    },
  ];

  return (
    <section id="skills">
      <p className="section-label">Skills</p>
      <h2>Technical Proficiency</h2>

      <div className="skills-list">
        {categories.map((cat, i) => (
          <div key={i} className="skill-row">
            <span className="skill-category-label mono">{cat.label}</span>
            <div className="skill-items">
              {cat.items.map((item, j) => (
                <span key={j} className="skill-item">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
