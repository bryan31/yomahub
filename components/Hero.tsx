import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Where performance meets elegance.';

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  const renderTextWithHighlight = (text: string) => {
    const parts = text.split(/\b(performance|elegance)\b/);
    return parts.map((part, index) => {
      if (part === 'performance' || part === 'elegance') {
        return <span key={index} className="font-bold" style={{color: '#0ABAB5'}}>{part}</span>;
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <section id="hero" className="relative h-screen w-full snap-section flex flex-col items-center justify-center overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">

        <div className="animate-fade-in-up">
          <div className="mb-6 flex justify-center">
             <img src="/logo.svg" alt="Yomahub Logo" className="h-24 w-24 hover:rotate-6 transition-transform duration-500" />
          </div>
          <h1 className="text-6xl md:text-9xl font-extrabold tracking-tight text-black mb-6 leading-none">
            Yomahub
          </h1>
          <p className="max-w-2xl mx-auto text-2xl md:text-3xl text-gray-500 font-medium tracking-wide mb-10 leading-relaxed min-h-[3rem]">
            {renderTextWithHighlight(displayedText)}
            {displayedText.length < fullText.length && <span className="animate-pulse">|</span>}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#projects" 
              onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})}}
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-black hover:bg-gray-800 transition-all hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              探索项目
            </a>
          </div>
        </div>
      </div>
      
      {/* Refined Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[60%] bg-indigo-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 animate-pulse-slow" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="absolute bottom-12 animate-bounce cursor-pointer" onClick={() => document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})}>
         <ArrowDown className="text-gray-300 hover:text-black transition-colors" size={32} />
      </div>
    </section>
  );
};

export default Hero;