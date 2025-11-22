import React from 'react';
import './Photography.css';

const Photography = () => {
  const albums = [
    {
      title: "Album 1 :)",
      thumbnail: "/jerry2.jpeg",
      link: "https://photos.google.com/share/AF1QipOewePeP_9d3MGEvZdB4KnXwioXL-4PJsT80aeMYB9WvrXX1_gnuRCzCtBjgqx3bg?key=YWJLcE5XZHNHWW9TdXhuLUNDeUZqMlZUejRqRzJn"
    },
    {
      title: "Album 2 :)",
      thumbnail: "/jerry1.jpeg",
      link: "https://photos.google.com/share/AF1QipOOgOGaE-TlU-v9Jxzcv0yZUPAcDOwa7USFaQxmHqgArwM_CSLMHSOrRMxQWOrsgA?key=Ny1qbHFmek9MU3lXNnM1RjhmU1d0bWJTY3hQTEp3"
    }
  ];

  return (
    <section id="photography" className="photography">
      <div className="container">
        <h2>Photography</h2>
        <p className="photography-intro">
          Minimalistic photography focused on natural light, clean compositions, and capturing quiet moments.
        </p>
        <div className="albums-buttons">
          {albums.map((album, index) => (
            <a 
              key={index}
              href={album.link}
              target="_blank"
              rel="noopener noreferrer"
              className="album-btn"
            >
              <img src={album.thumbnail} alt={album.title} className="album-thumbnail" />
              <span className="album-title">{album.title}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Photography;
