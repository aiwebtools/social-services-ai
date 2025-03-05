
import React, { useEffect, useRef } from 'react';

const HeroSection = () => {
  const videoRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Function to set video quality to 1080p
    const setVideoQuality = () => {
      if (videoRef.current && videoRef.current.contentWindow) {
        videoRef.current.contentWindow.postMessage(
          '{"event":"command","func":"setPlaybackQuality","args":["hd1080"]}',
          '*'
        );
      }
    };

    // Set a timeout to ensure the video has loaded
    const timeoutId = setTimeout(setVideoQuality, 2000);
    
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section className="relative min-h-screen pt-24 pb-20 overflow-hidden cyber-grid-bg">
      <div className="scan-line"></div>
      
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/20 via-transparent to-cyber-blue/20 opacity-30"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6 pt-12 md:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-block px-3 py-1 rounded-full bg-cyber-blue/10 border border-cyber-blue/30 text-cyber-blue text-sm font-medium animate-pulse-neon">
              AI-Powered Assistance
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Your Personal <span className="text-cyber-blue text-glow">Social Safety Net</span> Assistant
            </h1>
            
            <p className="text-lg text-gray-300 max-w-xl mx-auto lg:mx-0">
              Comprehensive support for immediate needs with real-time information, personalized assistance, and actionable resources to help you navigate challenging situations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#get-assistance" 
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyber-blue to-cyber-purple text-white font-bold hover:shadow-neon-blue transition-all transform hover:-translate-y-1"
              >
                Get Assistance Now
              </a>
              <a 
                href="#how-it-works" 
                className="px-8 py-3 rounded-lg border border-cyber-blue/50 text-white hover:bg-cyber-blue/10 transition-all"
              >
                Learn How It Works
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden neon-border">
              <iframe
                ref={videoRef}
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/pXXqMe97GDg?autoplay=1&mute=0&controls=1&rel=0&enablejsapi=1"
                title="Social Safety Net GPT Introduction"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-lg bg-gradient-to-r from-cyber-magenta to-cyber-purple opacity-30 blur-lg"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cyber-dark to-transparent"></div>
    </section>
  );
};

export default HeroSection;
