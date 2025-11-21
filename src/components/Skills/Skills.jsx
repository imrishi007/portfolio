import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = {
    "Languages": ["C", "C++", "Python", "Java", "JavaScript", "HTML/CSS"],
    "Frameworks": ["React", "NumPy", "Pandas", "Scikit-learn"],
    "Tools": ["Git", "VS Code", "Linux", "Jupyter"],
    "Core CS": ["DSA", "Operating Systems", "Theory of Computation", "Networks"]
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="skill-category">
              <h3>{category}</h3>
              <div className="skill-items">
                {items.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
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
