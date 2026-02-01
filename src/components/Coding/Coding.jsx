import React from 'react';
import './Coding.css';

const Coding = () => {
  const topics = [
    'Dynamic Programming',
    'Graph Theory',
    'Greedy Algorithms',
    'Two Pointers',
    'Sliding Window',
    'Bit Manipulation'
  ];

  return (
    <section id="coding" className="coding">
      <div className="coding-bg">
        <div className="code-particles"></div>
      </div>

      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-tag">Coding</span>
          <h2>Competitive Programming</h2>
          <p className="section-subtitle">
            Building algorithmic intuition through practice.
          </p>
        </div>

        <div className="coding-grid">
          <div className="coding-stats animate-on-scroll">
            <div className="stat-card-large">
              <span className="stat-number">550+</span>
              <span className="stat-label">Problems Solved</span>
              <div className="stat-bar">
                <div className="stat-fill" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div className="stat-card-large">
              <span className="stat-number">1444</span>
              <span className="stat-label">Contest Rating</span>
              <div className="stat-bar">
                <div className="stat-fill" style={{ width: '60%' }}></div>
              </div>
            </div>
          </div>

          <div className="coding-content animate-on-scroll">
            <h3>Focus Areas</h3>
            <div className="topics-grid">
              {topics.map((topic, i) => (
                <div key={i} className="topic-card">
                  <span className="topic-name">{topic}</span>
                </div>
              ))}
            </div>
            <a
              href="https://leetcode.com/u/rishipraval/"
              target="_blank"
              rel="noopener noreferrer"
              className="leetcode-btn"
            >
              <span>View LeetCode Profile</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coding;
