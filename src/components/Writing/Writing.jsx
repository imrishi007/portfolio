import React from 'react';
import './Writing.css';

const Writing = () => {
  const posts = [
    {
      title: 'Rishi Writes',
      description: 'Personal blog covering quant trading, tech tutorials, and reflections on learning.',
      link: 'https://rishiwrites.vercel.app',
      tag: 'Blog',
    },
    {
      title: 'Recursify',
      description: 'DSA platform with pattern-first explanations and practical problem-solving notes.',
      link: 'https://recursify.vercel.app',
      tag: 'DSA',
    },
  ];

  return (
    <section id="writing">
      <p className="section-label">Writing</p>
      <h2>Words & Ideas</h2>

      <div className="writing-list">
        {posts.map((post, i) => (
          <a key={i} href={post.link} target="_blank" rel="noopener noreferrer" className="writing-item">
            <div className="writing-item-header">
              <span className="writing-title">{post.title}</span>
              <span className="writing-tag mono">{post.tag}</span>
            </div>
            <p className="writing-desc">{post.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Writing;
