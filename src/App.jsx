import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  return (
    <div className="app">
      <main>
        <div className="container">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <div className="footer-simple" style={{ marginTop: '4rem', fontSize: '0.9rem', color: '#64748b', textAlign: 'center', borderTop: '1px solid #e2e8f0', paddingTop: '1.5rem' }}>
            &copy; {new Date().getFullYear()} Ronin Cabusao.
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
