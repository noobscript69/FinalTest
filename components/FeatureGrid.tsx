
import React from 'react';

const features = [
  {
    title: "AI Concepting",
    description: "Generate dozens of unique conceptual directions from a single sentence.",
    icon: (
      <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    title: "Hyper-Real Render",
    description: "Professional grade 8K visuals with accurate materials and environmental light.",
    icon: (
      <svg className="w-8 h-8 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Smart Insights",
    description: "Receive architectural feedback and material suggestions for every prompt.",
    icon: (
      <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Instant Export",
    description: "Download production-ready assets in various formats for your workflow.",
    icon: (
      <svg className="w-8 h-8 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    )
  }
];

const FeatureGrid: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Built for Power.</h2>
        <p className="text-slate-400 text-lg">Designed for professional workflows and creative freedom.</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <div key={i} className="group p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-800/50 transition-all duration-500">
            <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {f.icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">{f.title}</h3>
            <p className="text-slate-400 leading-relaxed">{f.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureGrid;
