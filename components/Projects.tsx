import React from 'react';
import { ExternalLink, Github, Layers } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: "DeFi Exchange Protocol",
    description: "Decentralized Exchange (DEX) with Automated Market Maker. Supports swaps, liquidity pools, and token staking.",
    techStack: ["Solidity", "React", "Ethers.js", "Hardhat"],
    imageUrl: "https://picsum.photos/600/400?random=1",
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    id: 2,
    title: "NFT Marketplace",
    description: "Marketplace for creating and trading NFTs. Includes auction functionality, creator royalties, and lazy minting.",
    techStack: ["Next.js", "IPFS", "Tailwind", "ERC-721"],
    imageUrl: "https://picsum.photos/600/400?random=2",
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    id: 3,
    title: "DAO Governance Dashboard",
    description: "Voting platform for token holders. Features on-chain voting, vote delegation, and treasury management.",
    techStack: ["TypeScript", "Wagmi", "Graph Protocol", "Solidity"],
    imageUrl: "https://picsum.photos/600/400?random=3",
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    id: 4,
    title: "Crypto Wallet Tracker",
    description: "Analytics application for tracking portfolios across multiple EVM networks. Displays transaction history and PnL.",
    techStack: ["React", "Moralis API", "Recharts", "Zustand"],
    imageUrl: "https://picsum.photos/600/400?random=4",
    githubUrl: "#",
    demoUrl: "#"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Featured <span className="text-web3-secondary">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-web3-primary to-web3-secondary mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Examples of my work in the blockchain ecosystem. From smart contracts to full-stack decentralized applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group glass-panel rounded-xl overflow-hidden hover:border-web3-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-web3-dark to-transparent opacity-80"></div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div className="flex gap-2 flex-wrap">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-2 py-1 text-xs font-medium bg-white/10 backdrop-blur-sm rounded-md border border-white/10 text-web3-accent">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-web3-primary transition-colors flex items-center gap-2">
                  <Layers className="h-5 w-5" />
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex gap-4">
                  <a href={project.githubUrl} className="flex-1 text-center py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-medium transition-all flex items-center justify-center gap-2 text-white">
                    <Github className="h-4 w-4" /> Code
                  </a>
                  <a href={project.demoUrl} className="flex-1 text-center py-2 rounded-lg bg-web3-primary/20 hover:bg-web3-primary/30 border border-web3-primary/50 text-sm font-medium transition-all flex items-center justify-center gap-2 text-web3-primary hover:text-white">
                    <ExternalLink className="h-4 w-4" /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;