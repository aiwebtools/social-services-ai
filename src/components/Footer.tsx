
import React from 'react';
import Logo from './Logo';
import { Mail, Phone, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cyber-dark-blue py-12 mt-20 border-t border-cyber-blue/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <Logo className="justify-start" />
            <p className="text-gray-400 max-w-md">
              Providing comprehensive support systems with practical, immediate, and empathetic help for those in need.
            </p>
            <div className="flex flex-col space-y-2">
              <a 
                href="tel:4758008096" 
                className="flex items-center text-white hover:text-cyber-blue transition-colors"
              >
                <Phone className="h-4 w-4 mr-2" /> 
                (475) 800-8096
              </a>
              <a 
                href="mailto:Contact@ai-webtools.com" 
                className="flex items-center text-white hover:text-cyber-blue transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" /> 
                Contact@ai-webtools.com
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#get-assistance" 
                  className="text-gray-400 hover:text-cyber-blue transition-colors"
                >
                  GET ASSISTANCE
                </a>
              </li>
              <li>
                <a 
                  href="https://chatgpt.com/g/g-SIGSpaGWG-ai-affordable-housing-finder"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyber-blue transition-colors"
                >
                  FIND AFFORDABLE HOUSING
                </a>
              </li>
              <li>
                <a 
                  href="#disclaimer" 
                  className="text-gray-400 hover:text-cyber-blue transition-colors"
                >
                  Disclaimer
                </a>
              </li>
              <li>
                <a 
                  href="https://www.aiwebtools.ai" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-cyber-blue transition-colors"
                >
                  More AI Tools
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://openai.com/policies/privacy-policy/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-cyber-blue transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.ai/terms-of-services" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-cyber-blue transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-cyber-blue/10 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm">
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-cyber-blue transition-colors"
            >
              © 2025 AI WEB TOOLS LLC. All rights reserved.
            </a>
          </div>
          
          <a 
            href="https://www.aiwebtools.ai" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mt-4 md:mt-0 flex items-center gap-2 bg-gradient-to-r from-cyber-blue to-cyber-purple px-4 py-2 rounded-full text-white font-medium transition-all hover:shadow-neon-blue"
          >
            More AI Tools
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
