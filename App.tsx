import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsGrid from './components/ProjectsGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative bg-white">
      <Navbar />
      
      <main>
        <Hero />
        <ProjectsGrid />
        <Footer />
      </main>
    </div>
  );
}

export default App;