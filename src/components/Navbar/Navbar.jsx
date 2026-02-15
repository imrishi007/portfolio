import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offset = 60;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner page-container">
        <a href="#hero" onClick={(e) => scrollToSection(e, 'hero')} className="nav-name">
          RR
        </a>
        <div className="nav-links">
          <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>Projects</a>
          <a href="#writing" onClick={(e) => scrollToSection(e, 'writing')}>Writing</a>
          <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>Skills</a>
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a>
          <a href="/Resume_Main.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72 1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42m12.72-12.72 1.42-1.42" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
