import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav border-b border-gray-200/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer" onClick={() => document.getElementById('root')?.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center relative overflow-hidden">
               {/* Abstract Y Logo */}
               <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white">
                 <path d="M12 22V12M12 12L4 4M12 12L20 4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900">
              优迈空间
            </span>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#" onClick={(e) => { e.preventDefault(); document.getElementById('hero')?.scrollIntoView({behavior:'smooth'})}} className="text-sm font-medium text-gray-600 hover:text-black transition-colors">首页</a>
            <a href="#" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({behavior:'smooth'})}} className="text-sm font-medium text-gray-600 hover:text-black transition-colors">开源项目</a>
            <a href="https://gitee.com/dromara" target="_blank" rel="noreferrer" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Dromara 社区</a>
            <a
              href="https://gitee.com/bryan31"
              target="_blank"
              rel="noreferrer"
              className="bg-black text-white p-2.5 rounded-full hover:bg-gray-800 transition-all hover:scale-105 active:scale-95"
              title="Gitee"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.016 0zm6.09 5.333c.328 0 .593.266.592.593v1.482a.594.594 0 0 1-.593.592H9.777c-.982 0-1.778.796-1.778 1.778v5.63c0 .327.266.592.593.592h5.63c.982 0 1.778-.796 1.778-1.778v-.296a.593.593 0 0 0-.592-.593h-4.15a.592.592 0 0 1-.592-.592v-1.482a.593.593 0 0 1 .593-.592h6.815c.327 0 .593.265.593.592v3.408a4 4 0 0 1-4 4H5.926a.593.593 0 0 1-.593-.593V9.778a4.444 4.444 0 0 1 4.445-4.444h8.296Z"/>
              </svg>
            </a>
            <a
              href="https://github.com/bryan31"
              target="_blank"
              rel="noreferrer"
              className="bg-black text-white p-2.5 rounded-full hover:bg-gray-800 transition-all hover:scale-105 active:scale-95"
              title="GitHub"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-600 p-2">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-nav absolute w-full border-b border-gray-200">
          <div className="px-4 pt-2 pb-6 space-y-1">
             <a href="#" className="block px-3 py-4 text-base font-medium text-gray-900 border-b border-gray-100">首页</a>
             <a href="#projects" className="block px-3 py-4 text-base font-medium text-gray-900 border-b border-gray-100">开源项目</a>
             <a href="https://gitee.com/dromara" className="block px-3 py-4 text-base font-medium text-gray-900">Dromara 社区</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;