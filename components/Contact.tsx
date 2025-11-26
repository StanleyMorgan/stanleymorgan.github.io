import React from 'react';
import { Mail, Send, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-web3-dark to-transparent"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">
          Ready to launch your <br />
          <span className="gradient-text">next big project?</span>
        </h2>
        
        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          I am always open to discussing new ideas, whether it's a DeFi protocol, an NFT collection, or integrating blockchain into an existing business.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <a href="mailto:stmorgan@web3.dev" className="glass-panel p-6 rounded-xl hover:bg-white/5 transition-colors flex flex-col items-center group">
            <Mail className="w-8 h-8 text-web3-primary mb-4 group-hover:scale-110 transition-transform" />
            <span className="text-gray-300">stmorgan@web3.dev</span>
          </a>
          <a href="https://t.me/stmorgan" target="_blank" rel="noreferrer" className="glass-panel p-6 rounded-xl hover:bg-white/5 transition-colors flex flex-col items-center group">
            <Send className="w-8 h-8 text-web3-accent mb-4 group-hover:scale-110 transition-transform" />
            <span className="text-gray-300">@stmorgan</span>
          </a>
          <div className="glass-panel p-6 rounded-xl flex flex-col items-center">
            <MapPin className="w-8 h-8 text-web3-secondary mb-4" />
            <span className="text-gray-300">Remote / Worldwide</span>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2024 Stanley Morgan. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Powered by React & Gemini AI</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;