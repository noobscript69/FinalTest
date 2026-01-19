
import React, { useState } from 'react';
import { generateDesignConcept, generateVisual } from '../services/geminiService';
import { DesignGeneration, GenerationStatus } from '../types';

interface Props {
  onGenerate: (gen: DesignGeneration) => void;
  history: DesignGeneration[];
}

const DesignStudio: React.FC<Props> = ({ onGenerate, history }) => {
  const [prompt, setPrompt] = useState('');
  const [status, setStatus] = useState<GenerationStatus>(GenerationStatus.IDLE);
  const [currentResult, setCurrentResult] = useState<DesignGeneration | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || status === GenerationStatus.LOADING) return;

    setStatus(GenerationStatus.LOADING);
    try {
      // Run both parallel
      const [description, imageUrl] = await Promise.all([
        generateDesignConcept(prompt),
        generateVisual(prompt)
      ]);

      const newGen: DesignGeneration = {
        prompt,
        description,
        imageUrl,
        timestamp: Date.now(),
      };

      setCurrentResult(newGen);
      onGenerate(newGen);
      setStatus(GenerationStatus.SUCCESS);
    } catch (err) {
      console.error(err);
      setStatus(GenerationStatus.ERROR);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Input Controls */}
        <div className="w-full lg:w-1/3">
          <div className="glass rounded-3xl p-8 sticky top-32">
            <h2 className="text-2xl font-display font-bold mb-6">Design Laboratory</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Your Vision</label>
                <textarea 
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="e.g., A minimalist glass house in the heart of a pine forest with amber evening lighting"
                  className="w-full h-32 bg-slate-900 border border-slate-700 rounded-2xl p-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
                />
              </div>
              
              <button 
                type="submit"
                disabled={status === GenerationStatus.LOADING}
                className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all ${
                  status === GenerationStatus.LOADING 
                  ? 'bg-slate-800 text-slate-500 cursor-not-allowed' 
                  : 'bg-indigo-600 text-white hover:bg-indigo-700'
                }`}
              >
                {status === GenerationStatus.LOADING ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Synthesizing...
                  </>
                ) : 'Generate Concept'}
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-slate-800">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Recent Explorations</h3>
              <div className="space-y-3">
                {history.length === 0 ? (
                  <p className="text-sm text-slate-600 italic">No history yet.</p>
                ) : (
                  history.slice(0, 3).map((h, i) => (
                    <button 
                      key={i} 
                      onClick={() => { setPrompt(h.prompt); setCurrentResult(h); }}
                      className="w-full text-left text-sm text-slate-400 hover:text-indigo-400 truncate py-1 transition-colors"
                    >
                      • {h.prompt}
                    </button>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Results Area */}
        <div className="w-full lg:w-2/3">
          {!currentResult && status === GenerationStatus.IDLE && (
            <div className="h-full min-h-[500px] border-2 border-dashed border-slate-800 rounded-3xl flex flex-col items-center justify-center text-slate-600 p-12 text-center">
              <div className="w-20 h-20 rounded-full bg-slate-900 flex items-center justify-center mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.618.309a6 6 0 01-3.86.517l-2.387-.477a2 2 0 00-1.022.547l-1.168 1.168a2 2 0 00.556 3.212 9.035 9.035 0 008.32 0 2 2 0 00.556-3.212l-1.168-1.168z" />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-medium mb-2">Ready to Visualize</h3>
              <p className="max-w-md">Enter a description on the left and Lumina will generate a professional design analysis and high-fidelity render.</p>
            </div>
          )}

          {status === GenerationStatus.LOADING && !currentResult && (
             <div className="h-full min-h-[500px] bg-slate-900/50 rounded-3xl flex flex-col items-center justify-center p-12 animate-pulse">
                <div className="w-12 h-12 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin mb-4"></div>
                <p className="text-indigo-400 font-medium">Lumina AI is imagining your space...</p>
             </div>
          )}

          {currentResult && (
            <div className="space-y-8 animate-fade-in">
              <div className="relative rounded-3xl overflow-hidden group shadow-2xl border border-white/5">
                <img 
                  src={currentResult.imageUrl} 
                  alt="Generated Visualization" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute top-6 right-6 flex gap-2">
                   <button className="px-4 py-2 bg-black/50 backdrop-blur-md rounded-lg text-white text-xs font-bold border border-white/10 hover:bg-black/70 transition-colors">
                     Download 8K
                   </button>
                </div>
              </div>
              
              <div className="glass rounded-3xl p-8 border border-slate-700/50">
                <div className="flex items-center gap-3 mb-4">
                   <div className="px-3 py-1 bg-indigo-500/20 rounded-md text-[10px] font-bold text-indigo-400 uppercase tracking-widest">
                     Lumina Analysis
                   </button>
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 text-white">Design Synthesis</h3>
                <p className="text-lg text-slate-300 leading-relaxed font-light italic">
                  "{currentResult.description}"
                </p>
                
                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: 'Style', val: 'Minimalist Modern' },
                    { label: 'Materials', val: 'Glass, Obsidian' },
                    { label: 'Atmosphere', val: 'Twilight Serene' },
                    { label: 'Physics', val: 'Simulated' }
                  ].map((stat, i) => (
                    <div key={i} className="p-4 bg-slate-900/50 rounded-2xl border border-slate-800">
                      <div className="text-[10px] text-slate-500 font-bold uppercase mb-1">{stat.label}</div>
                      <div className="text-sm font-medium text-slate-200">{stat.val}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DesignStudio;
