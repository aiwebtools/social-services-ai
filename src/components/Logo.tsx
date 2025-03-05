
import React from 'react';
import { Shield } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="flex items-center justify-center">
        <Shield className="h-10 w-10 mr-2 text-cyber-blue animate-pulse-neon" strokeWidth={1.5} />
        <div className="flex flex-col">
          <span className="text-2xl font-bold text-white leading-none">
            Social Safety Net <span className="text-cyber-blue">GPT</span>
          </span>
          <span className="text-xs text-cyber-blue/80">
            Presented by <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="hover:text-cyber-magenta transition-colors">AiWebTools.AI</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Logo;
