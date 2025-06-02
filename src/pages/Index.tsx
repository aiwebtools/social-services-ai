
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-pink-950 text-foreground overflow-x-hidden">
      <Header />
      <DisclaimerPopup />
      <main>
        <HeroSection />
        <FeaturesSection />
        
        {/* Enhanced Get Assistance Section */}
        <section id="get-assistance" className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 via-purple-600/5 to-pink-600/5 z-0"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.1),transparent_70%)] animate-pulse-divine"></div>
          <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(147,51,234,0.05),transparent,rgba(236,72,153,0.05))] animate-gradient-shift"></div>
          
          <div className="container relative z-10 mx-auto px-6 md:px-8 text-center">
            <div className="max-w-4xl mx-auto space-y-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Ready to Get <span className="text-gold-400 text-glow-gold">Support</span>?
              </h2>
              <p className="text-gray-200 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                Social Safety Net GPT is here to help you navigate through difficult times with personalized assistance and real-time resource connections.
              </p>
              <div className="pt-4">
                <a 
                  href="https://chatgpt.com/g/g-u0BBJXRNY-social-safety-net-gpt" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-10 md:px-12 py-4 md:py-5 rounded-xl bg-gradient-to-r from-gold-400 via-purple-500 to-pink-500 text-white font-bold hover:shadow-divine transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 active:translate-y-0 text-lg md:text-xl"
                >
                  Get Started Now
                </a>
              </div>
              <p className="mt-6 text-sm text-gray-300">
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
