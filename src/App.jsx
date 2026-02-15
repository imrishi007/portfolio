import React, { useState, useEffect } from 'react';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Writing from './components/Writing/Writing';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <div className="app">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main className="page-container">
          <Hero />
          <Projects />
          <Writing />
          <Skills />
          <Contact />
        </main>
      </div>
      <ScrollToTop />
    </>
  );
}

export default App;
