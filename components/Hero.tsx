import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen w-full snap-section flex flex-col items-center justify-center overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        
        <div className="animate-fade-in-up">
          <div className="mb-6 flex justify-center">
             <div className="h-20 w-20 bg-black rounded-[1.5rem] flex items-center justify-center shadow-2xl transform rotate-3 hover:rotate-6 transition-transform duration-500">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-white">
                 <path d="M12 22V12M12 12L3 3M12 12L21 3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
             </div>
          </div>
          <h1 className="text-6xl md:text-9xl font-extrabold tracking-tight text-black mb-6 leading-none">
            Yomahub
          </h1>
          <p className="max-w-2xl mx-auto text-2xl md:text-3xl text-gray-500 font-medium tracking-wide mb-10 leading-relaxed">
            Where <span className="text-black font-semibold">performance</span> meets elegance.
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