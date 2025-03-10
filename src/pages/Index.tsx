
import React, { useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import DisclaimerSection from '../components/DisclaimerSection';
import DisclaimerPopup from '../components/DisclaimerPopup';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Apply smooth scrolling to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (!href) return;
        
        const targetElement = document.querySelector(href);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
          behavior: 'smooth'
        });
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-cyber-dark text-foreground overflow-x-hidden">
      <Header />
      <DisclaimerPopup />
      <main>
        <HeroSection />
        <FeaturesSection />
        
        {/* Get Assistance Section */}
        <section id="get-assistance" className="py-16 md:py-20 relative">
          <div className="absolute inset-0 bg-cyber-blue/5 z-0"></div>
          <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-white">
                Ready to Get <span className="text-cyber-magenta text-glow-magenta">Support</span>?
              </h2>
              <p className="text-gray-300 mb-8 md:mb-10">
                Social Safety Net GPT is here to help you navigate through difficult times with personalized assistance and real-time resource connections.
              </p>
              <a 
                href="https://chatgpt.com/g/g-u0BBJXRNY-social-safety-net-gpt" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 md:px-8 py-3 md:py-4 rounded-lg bg-gradient-to-r from-cyber-blue to-cyber-purple text-white font-bold hover:shadow-neon-blue transition-all transform hover:-translate-y-1 active:translate-y-0 text-base md:text-lg"
              >
                Get Started Now
              </a>
              <p className="mt-4 text-sm text-gray-400">
                Free to use. No sign-up required.
              </p>
            </div>
          </div>
        </section>
        
        <TestimonialsSection />
        <FAQSection />
        <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
