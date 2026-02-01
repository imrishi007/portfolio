import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = {
    "Languages": ["Python", "Java", "C/C++", "JavaScript", "SQL", "HTML/CSS"],
    "Libraries & Frameworks": ["React", "Next.js", "NumPy", "Pandas", "Scikit-learn", "TensorFlow"],
    "Tools & Platforms": ["Git", "Linux", "Firebase", "VS Code", "Jupyter", "Vite"],
    "Competencies": ["Algorithms", "Data Analysis", "Financial Modeling", "Backtesting", "Statistics"]
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-tag">Skills</span>
          <h2>Tech Stack</h2>
          <p className="section-subtitle">
            Tools and technologies I use.
          </p>
        </div>

        <div className="skills-grid">
          {Object.entries(skills).map(([category, items], index) => (
            <div
              key={category}
              className="skill-category animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3>{category}</h3>
              <div className="skill-items">
                {items.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
