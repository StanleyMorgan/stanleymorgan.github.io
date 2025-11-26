import React from 'react';
import { Database, Code, Shield, Cpu, Terminal, Globe } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Blockchain",
      icon: <Database className="w-6 h-6 text-web3-accent" />,
      skills: ["Solidity", "Hardhat", "Foundry", "Ethers.js", "Wagmi", "OpenZeppelin"]
    },
    {
      title: "Frontend",
      icon: <Globe className="w-6 h-6 text-web3-primary" />,
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Three.js", "Redux"]
    },
    {
      title: "Backend & Tools",
      icon: <Terminal className="w-6 h-6 text-web3-secondary" />,
      skills: ["Node.js", "IPFS", "Graph Protocol", "Git", "Docker", "Vercel"]
    }
  ];

  return (
    <section id="skills" className="py-20 relative bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Technical <span className="text-web3-primary">Stack</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-web3-secondary to-web3-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="glass-panel p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 text-sm text-gray-300 bg-white/5 rounded-full border border-white/5 hover:border-web3-primary/50 hover:bg-web3-primary/10 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional "Soft" Skills or highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6">
                <Shield className="w-10 h-10 text-green-400 mx-auto mb-4" />
                <h4 className="text-white font-bold mb-2">Security</h4>
                <p className="text-gray-400 text-sm">Experience auditing smart contracts and writing secure code.</p>
            </div>
            <div className="p-6">
                <Cpu className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                <h4 className="text-white font-bold mb-2">Gas Optimization</h4>
                <p className="text-gray-400 text-sm">Efficient contracts to minimize user costs.</p>
            </div>
            <div className="p-6">
                <Code className="w-10 h-10 text-purple-400 mx-auto mb-4" />
                <h4 className="text-white font-bold mb-2">Clean Code</h4>
                <p className="text-gray-400 text-sm">Maintainable and testable code (Unit & E2E tests).</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;