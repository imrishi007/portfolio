import React from 'react';
import './Interests.css';

const Interests = () => {
  const interests = [
    {
      title: "Anime",
      icon: "🏴‍☠️"
    },
    {
      title: "Chess",
      icon: "♟️",
      link: "https://www.chess.com/member/imagi9e"
    },
    {
      title: "F1",
      icon: "🏎️"
    },
    {
      title: "Football",
      icon: "⚽"
    },
    {
      title: "Music",
      icon: "🎵",
      link: "https://open.spotify.com/user/31vd2kjzekqibcj3maqqojvsgqpy"
    },
    {
      title: "Writing",
      icon: "✍️",
      link: "https://www.wattpad.com/story/396813666-unwritten-pages"
    }
  ];

  return (
    <section id="interests" className="interests">
      <div className="container">
        <h2>Beyond Code</h2>
        <p className="interests-intro">
          Things I'm passionate about when I'm not solving problems
        </p>
        <div className="interests-grid">
          {interests.map((interest, index) => (
            interest.link ? (
              <a 
                key={index}
                href={interest.link}
                target="_blank"
                rel="noopener noreferrer"
                className="interest-item"
              >
                <span className="interest-icon">{interest.icon}</span>
                <span className="interest-title">{interest.title}</span>
              </a>
            ) : (
              <div key={index} className="interest-item">
                <span className="interest-icon">{interest.icon}</span>
                <span className="interest-title">{interest.title}</span>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;
