
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
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-cyber-dark/95 backdrop-blur-md shadow-lg' : 'py-6'}`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Logo />
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white hover:text-cyber-blue focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <div className="text-sm text-gray-400 italic">
            "Alone, we can do so little; together, we can do so much." — Helen Keller
          </div>
          <a 
            href="#get-assistance" 
            className="cyber-button text-white font-medium"
          >
            GET ASSISTANCE
          </a>
          <a 
            href="#faq" 
            className="text-white hover:text-cyber-blue transition-colors"
          >
            FAQ
          </a>
          <a 
            href="#disclaimer" 
            className="text-white hover:text-cyber-blue transition-colors"
          >
            Disclaimer
          </a>
          <a 
            href="https://www.aiwebtools.ai" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-cyber-blue transition-colors"
          >
            More AI Tools
          </a>
        </nav>
      </div>
      
      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden glassmorphism mt-3 m-4 rounded-lg">
          <nav className="flex flex-col p-4 space-y-4">
            <div className="text-sm text-gray-400 italic">
              "Alone, we can do so little; together, we can do so much." — Helen Keller
            </div>
            <a 
              href="#get-assistance" 
              className="text-white hover:text-cyber-blue transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              GET ASSISTANCE
            </a>
            <a 
              href="#faq" 
              className="text-white hover:text-cyber-blue transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <a 
              href="#disclaimer" 
              className="text-white hover:text-cyber-blue transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Disclaimer
            </a>
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-cyber-blue transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              More AI Tools
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
