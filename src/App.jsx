import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Education } from './components/sections/Education';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Publications } from './components/sections/Publications';
import { Contact } from './components/sections/Contact';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-navy-950 relative">
      {/* Video Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.15 }}
          onError={(e) => {
            console.error('Video failed to load:', e);
          }}
          onLoadedData={() => {
            console.log('Video loaded successfully');
          }}
        >
          <source src="/bg-graphics.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay to further reduce video prominence */}
        <div className="absolute inset-0 bg-black opacity-30 pointer-events-none" />
      </div>

      {/* Content with higher z-index */}
      <div className="relative z-10">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Education />
          <Experience />
          <Projects />
          <Skills />
          <Publications />
          <Contact />
        </main>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-navy-900/50">
        <div className="container-custom px-6 py-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Christopher Oueis. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
