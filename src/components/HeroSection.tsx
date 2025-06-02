
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
    <section className="relative min-h-screen pt-32 pb-20 md:pb-32 overflow-hidden cyber-grid-bg">
      <div className="scan-line"></div>
      
      {/* Enhanced divine background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 via-purple-600/10 to-pink-600/10 opacity-60 animate-gradient-shift"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,215,0,0.15),transparent_70%)] animate-pulse-divine"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(147,51,234,0.15),transparent_70%)] animate-pulse-divine-delay"></div>
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(255,215,0,0.1),transparent,rgba(236,72,153,0.1),transparent,rgba(147,51,234,0.1))] animate-gradient-shift"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-6 md:px-8 pt-12 md:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
          <div className="space-y-8 md:space-y-12 text-center lg:text-left">
            <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-gold-400/20 via-purple-500/20 to-pink-500/20 border border-gradient-to-r from-gold-400/40 via-purple-400/40 to-pink-400/40 text-gold-300 text-base font-semibold animate-pulse-neon backdrop-blur-md">
              AI-Powered Assistance
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white">
              Your Personal <span className="text-gold-400 text-glow">AI Social Services</span> Assistant
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Comprehensive support for immediate needs with real-time information, personalized assistance, and actionable resources to help you navigate challenging situations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <a 
                href="https://chatgpt.com/g/g-u0BBJXRNY-social-safety-net-gpt" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-gold-400 via-purple-500 to-pink-500 text-white font-bold hover:shadow-divine transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 active:translate-y-0 active:opacity-90"
              >
                Get Assistance Now
              </a>
              <a 
                href="https://chatgpt.com/g/g-SIGSpaGWG-ai-affordable-housing-finder" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl border-2 border-gradient-to-r from-gold-400/60 via-purple-400/60 to-pink-400/60 text-white hover:bg-gradient-to-r hover:from-gold-400/10 hover:via-purple-500/10 hover:to-pink-500/10 transition-all duration-500 backdrop-blur-md hover:shadow-divine transform hover:-translate-y-1"
              >
                Find Affordable Housing
              </a>
            </div>
          </div>
          
          <div className="relative mt-8 md:mt-0">
            <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden neon-border backdrop-blur-sm">
              <YouTube
                videoId="pXXqMe97GDg"
                opts={opts}
                onReady={onReady}
                className="w-full h-full rounded-2xl"
                id="social-safety-net-video"
              />
            </div>
            
            <div className="absolute -bottom-8 -right-8 -z-10 h-full w-full rounded-2xl bg-gradient-to-r from-gold-400/30 via-purple-500/30 to-pink-500/30 opacity-60 blur-2xl animate-pulse-divine"></div>
            <div className="absolute -top-4 -left-4 -z-10 h-3/4 w-3/4 rounded-2xl bg-gradient-to-r from-purple-500/20 to-gold-400/20 opacity-40 blur-xl animate-pulse-divine-delay"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-indigo-950 via-purple-950/80 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
