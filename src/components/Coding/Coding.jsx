import React from 'react';
import './Coding.css';

const Coding = () => {
  return (
    <section id="coding" className="coding">
      <div className="container">
        <h2>Competitive Programming</h2>
        <div className="coding-content">
          <div className="coding-info">
            <h3>Focus Areas</h3>
            <p>
              I focus heavily on understanding patterns and building algorithmic intuition. 
              My approach is all about breaking problems into clear, logical steps.
            </p>
            <div className="topics">
              <span>Dynamic Programming</span>
              <span>Graph Theory</span>
              <span>Greedy Algorithms</span>
              <span>Two Pointers</span>
              <span>Sliding Window</span>
              <span>Bit Manipulation</span>
            </div>
            <a 
              href="https://leetcode.com/u/rishipraval/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="leetcode-link"
            >
              View LeetCode Profile →
            </a>
          </div>
        </div>
        
        <div className="coding-stats">
          <div className="stat-large">
            <h3>415+</h3>
            <p>Problems Solved</p>
          </div>
          <div className="stat-large">
            <h3>1444</h3>
            <p>Contest Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coding;
