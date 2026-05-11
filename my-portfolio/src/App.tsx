import React from 'react';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Contact, Footer } from './components/sections/Contact';
import { MouseSpotlight } from './components/ui/MouseSpotlight';

const App: React.FC = () => {
  return (
    <main className="bg-[#020617] min-h-screen selection:bg-indigo-500/30 selection:text-indigo-200 relative">
      <MouseSpotlight />
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </main>
  );
};

export default App;
