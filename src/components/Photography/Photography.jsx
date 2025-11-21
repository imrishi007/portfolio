import React, { useState, useEffect, useRef } from 'react';
import './Photography.css';

const Photography = () => {
  const albums = [
    {
      title: "Collection 1",
      description: "Minimalistic shots with natural light",
      link: "https://photos.google.com/share/AF1QipOewePeP_9d3MGEvZdB4KnXwioXL-4PJsT80aeMYB9WvrXX1_gnuRCzCtBjgqx3bg?key=YWJLcE5XZHNHWW9TdXhuLUNDeUZqMlZUejRqRzJn",
      images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']
    },
    {
      title: "Collection 2",
      description: "Simple compositions and quiet moments",
      link: "https://photos.google.com/share/AF1QipOOgOGaE-TlU-v9Jxzcv0yZUPAcDOwa7USFaQxmHqgArwM_CSLMHSOrRMxQWOrsgA?key=Ny1qbHFmek9MU3lXNnM1RjhmU1d0bWJTY3hQTEp3",
      images: ['6.jpg', '7.jpg', '8.jpg', '9.jpg']
    }
  ];

  const scrollRefs = useRef([]);

  useEffect(() => {
    const intervals = albums.map((album, albumIndex) => {
      const scrollContainer = scrollRefs.current[albumIndex];
      if (!scrollContainer) return null;

      return setInterval(() => {
        const scrollAmount = scrollContainer.offsetWidth;
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        
        if (scrollContainer.scrollLeft >= maxScroll - 10) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += scrollAmount;
        }
      }, 3000);
    });

    return () => intervals.forEach(interval => interval && clearInterval(interval));
  }, []);

  return (
    <section id="photography" className="photography">
      <div className="container">
        <h2>Photography</h2>
        <p className="photography-intro">
          Minimalistic photography focused on natural light, clean compositions, and capturing quiet moments.
        </p>
        <div className="albums-container">
          {albums.map((album, albumIndex) => (
            <div key={albumIndex} className="album-section">
              <div className="album-header">
                <a 
                  href={album.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-album-btn"
                >
                  VIEW HERE
                </a>
              </div>
              <div 
                className="album-scroll-container"
                ref={el => scrollRefs.current[albumIndex] = el}
              >
                <div className="album-images">
                  {album.images.map((image, imgIndex) => (
                    <img 
                      key={imgIndex}
                      src={`/${image}`} 
                      alt={`${album.title} - ${imgIndex + 1}`}
                      className="album-photo"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Photography;
