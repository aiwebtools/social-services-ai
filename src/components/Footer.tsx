
import React from 'react';
import Logo from './Logo';
import { Mail, Phone, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-indigo-900/90 via-purple-900/90 to-pink-900/90 py-12 mt-20 border-t border-gradient-to-r from-gold-400/30 via-purple-400/30 to-pink-400/30 relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-pink-600/20 animate-gradient-shift"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,215,0,0.1),transparent_50%)] animate-pulse-divine"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)] animate-pulse-divine-delay"></div>
      
      <div className="container relative z-10 mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          <div className="space-y-6">
            <Logo className="justify-start" />
            <p className="text-gray-200 max-w-md leading-relaxed">
              Providing comprehensive support systems with practical, immediate, and empathetic help for those in need.
            </p>
            <div className="flex flex-col space-y-3">
              <a 
                href="tel:4758008096" 
                className="flex items-center text-white hover:text-gold-300 transition-all duration-300 hover:translate-x-1"
              >
                <Phone className="h-5 w-5 mr-3" /> 
                (475) 800-8096
              </a>
              <a 
                href="mailto:Contact@ai-webtools.com" 
                className="flex items-center text-white hover:text-gold-300 transition-all duration-300 hover:translate-x-1"
              >
                <Mail className="h-5 w-5 mr-3" /> 
                Contact@ai-webtools.com
              </a>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white text-glow-gold">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="#get-assistance" 
                  className="text-gray-200 hover:text-gold-300 transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  GET ASSISTANCE
                </a>
              </li>
              <li>
                <a 
                  href="https://chatgpt.com/g/g-SIGSpaGWG-ai-affordable-housing-finder"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-gold-300 transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  FIND AFFORDABLE HOUSING
                </a>
              </li>
              <li>
                <a 
                  href="https://aidoctorgpt.lovable.app/?via=aiwebtools"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-gold-300 transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Free Healthcare Ai Tools
                </a>
              </li>
              <li>
                <a 
                  href="#disclaimer" 
                  className="text-gray-200 hover:text-gold-300 transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Disclaimer
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.lovable.app/?via=aiwebtools" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-200 hover:text-gold-300 transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  More AI Tools
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white text-glow-gold">Legal</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://openai.com/policies/privacy-policy/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-200 hover:text-gold-300 transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.lovable.app/disclaimers" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-200 hover:text-gold-300 transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Disclaimer */}
        <div className="mt-12 pt-8 border-t border-gradient-to-r from-gold-400/20 via-purple-400/20 to-pink-400/20">
          <div className="text-center mb-6">
            <p className="text-sm text-gray-300 italic max-w-2xl mx-auto leading-relaxed">
              This website is for informational, educational, and research purposes only.
            </p>
          </div>
        </div>
        
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gold-300 transition-all duration-300"
            >
              © 2025 AI WEB TOOLS LLC. All rights reserved.
            </a>
          </div>
          
          <a 
            href="https://www.aiwebtools.ai" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mt-6 md:mt-0 flex items-center gap-3 bg-gradient-to-r from-gold-400 via-purple-500 to-pink-500 px-6 py-3 rounded-full text-white font-semibold transition-all duration-500 hover:shadow-divine transform hover:-translate-y-1 hover:scale-105"
          >
            More AI Tools
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
