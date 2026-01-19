
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 pt-24 pb-12 px-6 md:px-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6 group">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-display font-bold text-white">L</div>
              <span className="text-xl font-display font-bold tracking-tight text-white">LUMINA</span>
            </a>
            <p className="text-slate-500 max-w-sm mb-8">
              Pioneering the future of digital spatiality and conceptual architecture through advanced generative systems.
            </p>
            <div className="flex gap-4">
               {[1, 2, 3, 4].map(i => (
                 <div key={i} className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors cursor-pointer group">
                    <div className="w-4 h-4 bg-slate-700 group-hover:bg-white rounded-sm"></div>
                 </div>
               ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-slate-500">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Studio</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Enterprise</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-slate-500">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">API Status</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Legal</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600 text-sm">
          <p>© 2024 Lumina AI Studio. Built with passion and Gemini.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
