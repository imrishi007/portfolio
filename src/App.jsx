import React, { useState, useEffect } from 'react';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Coding from './components/Coding/Coding';
import Writing from './components/Writing/Writing';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import CursorEffect from './components/CursorEffect/CursorEffect';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { initScrollAnimations } from './hooks/useScrollAnimation';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Initialize scroll animations
  useEffect(() => {
    const cleanup = initScrollAnimations();
    return cleanup;
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <div className="app">
        <CursorEffect />
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Hero />
        <About />
        <Projects />
        <Writing />
        <Coding />
        <Skills />
        <Contact />
      </div>
      <ScrollToTop />
    </>
  );
}

export default App;
