
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 glass border-b border-slate-800' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center font-display font-bold text-white group-hover:rotate-12 transition-transform">L</div>
          <span className="text-2xl font-display font-bold tracking-tight text-white">LUMINA</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-10">
          {['Features', 'Studio', 'About'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
          <a 
            href="#studio" 
            className="px-6 py-2.5 bg-white text-slate-950 rounded-full text-sm font-bold hover:bg-indigo-500 hover:text-white transition-all transform hover:-translate-y-0.5"
          >
            Launch App
          </a>
        </nav>

        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
