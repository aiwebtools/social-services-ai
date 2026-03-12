
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-200 ${isScrolled ? 'py-2 sm:py-3 bg-cyber-dark/95 backdrop-blur-md shadow-lg' : 'py-3 md:py-6'}`}
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6 flex justify-between items-center">
        <Logo className="scale-[0.85] sm:scale-90 md:scale-100" />
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white hover:text-cyber-blue focus:outline-none active:scale-90 transition-transform duration-150 p-2 -mr-2 touch-manipulation"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
          <div className="text-sm text-gray-400 italic hidden lg:block">
            "Alone, we can do so little; together, we can do so much." — Helen Keller
          </div>
          <a 
            href="#get-assistance" 
            className="cyber-button text-white font-medium text-sm lg:text-base whitespace-nowrap"
          >
            GET ASSISTANCE
          </a>
          <a 
            href="https://chatgpt.com/g/g-SIGSpaGWG-ai-affordable-housing-finder" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-cyber-blue transition-colors text-sm lg:text-base whitespace-nowrap"
          >
            FIND AFFORDABLE HOUSING
          </a>
          <a 
            href="https://aidoctorgpt.lovable.app/?via=aiwebtools" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-cyber-blue transition-colors text-sm lg:text-base whitespace-nowrap"
          >
            Free Healthcare Ai Tools
          </a>
          <a 
            href="#disclaimer" 
            className="text-white hover:text-cyber-blue transition-colors text-sm lg:text-base whitespace-nowrap"
          >
            Disclaimer
          </a>
          <a 
            href="https://aiwebtools.lovable.app/?via=aiwebtools" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-cyber-blue transition-colors text-sm lg:text-base whitespace-nowrap"
          >
            More AI Tools
          </a>
        </nav>
      </div>
      
      {/* Mobile navigation - CSS transition for instant feel */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-200 ease-out ${mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="glassmorphism mt-2 mx-3 sm:mx-4 rounded-lg shadow-lg">
          <nav className="flex flex-col p-3 sm:p-4 space-y-1">
            <div className="text-xs sm:text-sm text-gray-400 italic pb-2 mb-1 border-b border-white/10">
              "Alone, we can do so little; together, we can do so much." — Helen Keller
            </div>
            <a 
              href="#get-assistance" 
              className="text-white hover:text-cyber-blue transition-colors py-3 px-3 rounded-md hover:bg-white/5 active:bg-white/10 touch-manipulation text-sm sm:text-base"
              onClick={() => setMobileMenuOpen(false)}
            >
              GET ASSISTANCE
            </a>
            <a 
              href="https://chatgpt.com/g/g-SIGSpaGWG-ai-affordable-housing-finder"
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-cyber-blue transition-colors py-3 px-3 rounded-md hover:bg-white/5 active:bg-white/10 touch-manipulation text-sm sm:text-base"
              onClick={() => setMobileMenuOpen(false)}
            >
              FIND AFFORDABLE HOUSING
            </a>
            <a 
              href="https://aidoctorgpt.lovable.app/?via=aiwebtools"
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-cyber-blue transition-colors py-3 px-3 rounded-md hover:bg-white/5 active:bg-white/10 touch-manipulation text-sm sm:text-base"
              onClick={() => setMobileMenuOpen(false)}
            >
              Free Healthcare Ai Tools
            </a>
            <a 
              href="#disclaimer" 
              className="text-white hover:text-cyber-blue transition-colors py-3 px-3 rounded-md hover:bg-white/5 active:bg-white/10 touch-manipulation text-sm sm:text-base"
              onClick={() => setMobileMenuOpen(false)}
            >
              Disclaimer
            </a>
            <a 
              href="https://aiwebtools.lovable.app/?via=aiwebtools" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-cyber-blue transition-colors py-3 px-3 rounded-md hover:bg-white/5 active:bg-white/10 touch-manipulation text-sm sm:text-base"
              onClick={() => setMobileMenuOpen(false)}
            >
              More AI Tools
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
