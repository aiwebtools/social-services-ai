
import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if user is on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // YouTube video options
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      mute: 0,
      controls: 1,
      rel: 0,
      modestbranding: 1,
      playsinline: 1,
      origin: window.location.origin,
      enablejsapi: 1,
      fs: 1, // Enable fullscreen button
      quality: isMobile ? 'hd720' : 'hd1080',
    },
  };

  const onReady = (event) => {
    // Save player reference
    const player = event.target;
    // Set playback quality
    player.setPlaybackQuality(isMobile ? 'hd720' : 'hd1080');
  };

  return (
    <section className="relative min-h-screen pt-24 pb-12 md:pb-20 overflow-hidden cyber-grid-bg">
      <div className="scan-line"></div>
      
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/20 via-transparent to-cyber-blue/20 opacity-30"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6 pt-8 md:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-6 text-center lg:text-left">
            <div className="inline-block px-3 py-1 rounded-full bg-cyber-blue/10 border border-cyber-blue/30 text-cyber-blue text-sm font-medium animate-pulse-neon">
              AI-Powered Assistance
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white">
              Your Personal <span className="text-cyber-blue text-glow">AI Social Services</span> Assistant
            </h1>
            
            <p className="text-base md:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0">
              Comprehensive support for immediate needs with real-time information, personalized assistance, and actionable resources to help you navigate challenging situations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a 
                href="https://chatgpt.com/g/g-u0BBJXRNY-social-safety-net-gpt" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyber-blue to-cyber-purple text-white font-bold hover:shadow-neon-blue transition-all transform hover:-translate-y-1 active:translate-y-0 active:opacity-90"
              >
                Get Assistance Now
              </a>
              <a 
                href="https://chatgpt.com/g/g-SIGSpaGWG-ai-affordable-housing-finder" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg border border-cyber-blue/50 text-white hover:bg-cyber-blue/10 transition-all active:bg-cyber-blue/20"
              >
                Find Affordable Housing
              </a>
            </div>
          </div>
          
          <div className="relative mt-4 md:mt-0">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden neon-border">
              <YouTube
                videoId="pXXqMe97GDg"
                opts={opts}
                onReady={onReady}
                className="w-full h-full rounded-lg"
                id="social-safety-net-video"
              />
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
