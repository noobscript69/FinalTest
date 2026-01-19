
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-20 px-6 md:px-12 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-rose-600/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-8 animate-fade-in">
          <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
          <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Next-Gen Creative Suite</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-display font-bold mb-8 leading-[1.1] tracking-tight">
          Visualize <span className="gradient-text">Anything.</span><br />
          Design <span className="text-slate-500">Everything.</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-xl text-slate-400 mb-12 leading-relaxed">
          The first generative studio that understands context, lighting, and architectural physics. Turn your roughest ideas into stunning reality.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="#studio" 
            className="px-8 py-4 bg-indigo-600 text-white rounded-2xl text-lg font-bold hover:bg-indigo-700 transition-all hover:scale-105 shadow-lg shadow-indigo-600/20"
          >
            Start Designing Free
          </a>
          <button className="px-8 py-4 bg-slate-900 border border-slate-800 text-white rounded-2xl text-lg font-bold hover:bg-slate-800 transition-all">
            Watch Showreel
          </button>
        </div>

        <div className="mt-24 relative max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-indigo-500/20 blur-[100px] -z-10 rounded-3xl opacity-50"></div>
          <div className="glass rounded-3xl p-4 md:p-8 border border-slate-700/50 shadow-2xl">
            <img 
              src="https://picsum.photos/seed/lumina-hero/1200/600" 
              alt="Dashboard Preview" 
              className="w-full h-auto rounded-xl shadow-inner border border-white/5"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
