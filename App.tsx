
import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import DesignStudio from './components/DesignStudio';
import Footer from './components/Footer';
import { DesignGeneration } from './types';

const App: React.FC = () => {
  const [generations, setGenerations] = useState<DesignGeneration[]>([]);

  const addGeneration = useCallback((gen: DesignGeneration) => {
    setGenerations(prev => [gen, ...prev].slice(0, 10));
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-200 selection:bg-indigo-500/30">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        <section id="features" className="py-24 bg-slate-950/50">
          <FeatureGrid />
        </section>

        <section id="studio" className="py-24 bg-gradient-to-b from-slate-950 to-indigo-950/20">
          <DesignStudio 
            onGenerate={addGeneration} 
            history={generations} 
          />
        </section>

        <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-3xl overflow-hidden group">
              <img 
                src="https://picsum.photos/seed/lumina-about/800/800" 
                alt="About Lumina" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 gradient-text">Beyond the Canvas.</h2>
              <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                Lumina isn't just a design tool; it's a creative partner. We bridge the gap between imagination and reality by leveraging the world's most advanced AI models to visualize concepts in seconds.
              </p>
              <div className="space-y-4">
                {[
                  "Real-time architectural rendering",
                  "Intelligent material analysis",
                  "Environmental harmony simulation",
                  "Generative conceptual art"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                    </div>
                    <span className="text-slate-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
