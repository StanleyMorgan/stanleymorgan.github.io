import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Projects from './components/Projects.tsx';
import Skills from './components/Skills.tsx';
import Contact from './components/Contact.tsx';

const App: React.FC = () => {
  console.log("App: Component Rendering started");
  return (
    <div className="min-h-screen bg-web3-dark text-white selection:bg-web3-accent selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default App;