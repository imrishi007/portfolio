import React, { useState, useEffect } from 'react';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Coding from './components/Coding/Coding';
import Photography from './components/Photography/Photography';
import Interests from './components/Interests/Interests';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import CursorEffect from './components/CursorEffect/CursorEffect';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

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
        <Skills />
        <Projects />
        <Coding />
        <Photography />
        <Interests />
        <Contact />
      </div>
      <ScrollToTop />
    </>
  );
}

export default App;
