import React from 'react';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-web3-primary/20 rounded-full blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-web3-secondary/20 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-web3-accent/30 bg-web3-accent/10 backdrop-blur-md">
          <span className="text-web3-accent text-sm font-semibold tracking-wide">WEB3 DEVELOPER • SOLIDITY • REACT</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight">
          Building the Future of <br />
          <span className="gradient-text">Decentralized Web</span>
        </h1>
        
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400 mb-10">
          Hi, I'm Stanley Morgan. I build secure smart contracts and intuitive dApps. Turning complex blockchain ideas into elegant code.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#projects" className="group relative px-8 py-3 rounded-lg bg-web3-primary hover:bg-web3-secondary transition-all duration-300 text-white font-semibold flex items-center justify-center overflow-hidden">
            <span className="relative z-10 flex items-center">
              View Work <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-web3-primary to-web3-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          
          <a href="https://github.com/stmorgan" target="_blank" rel="noreferrer" className="px-8 py-3 rounded-lg border border-white/20 hover:bg-white/10 text-white font-semibold transition-all flex items-center justify-center gap-2">
            <Github className="h-5 w-5" /> GitHub
          </a>
        </div>

        <div className="mt-16 flex justify-center gap-8 text-gray-500">
          <a href="https://github.com/stmorgan" target="_blank" rel="noreferrer" className="hover:text-web3-accent transition-colors"><Github className="h-8 w-8" /></a>
          <a href="#" className="hover:text-web3-accent transition-colors"><Linkedin className="h-8 w-8" /></a>
          <a href="#" className="hover:text-web3-accent transition-colors"><Twitter className="h-8 w-8" /></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;