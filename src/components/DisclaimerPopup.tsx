
import React, { useState, useEffect } from 'react';
import { CheckCircle, ShieldCheck } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const DisclaimerPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    // Check if the user has already agreed to the disclaimer
    const hasAgreed = localStorage.getItem('disclaimerAgreed');
    
    if (!hasAgreed) {
      // Show the popup after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const handleAgree = () => {
    // Save to localStorage to prevent showing again
    localStorage.setItem('disclaimerAgreed', 'true');
    setIsOpen(false);
    
    // Show a confirmation toast
    toast({
      title: "Welcome!",
      description: "Thank you for acknowledging our disclaimer.",
      duration: 3000,
    });
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="relative max-w-md w-full rounded-xl overflow-hidden">
        {/* Animated border effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue via-cyber-magenta to-cyber-blue animate-gradient-x"></div>
        
        {/* Main content */}
        <div className="relative m-[2px] bg-cyber-dark-blue rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="h-7 w-7 text-cyber-magenta" />
            <h2 className="font-rajdhani text-2xl font-bold text-white tracking-wide">
              Important <span className="text-cyber-magenta">Disclaimer</span>
            </h2>
          </div>
          
          <div className="space-y-3 text-gray-300 mb-6">
            <p className="font-medium">
              Social Safety Net GPT provides information as a resource only and is not a substitute for professional advice or emergency services.
            </p>
            <p>
              In emergencies, please contact appropriate emergency services immediately (911 in the US).
            </p>
            <p className="text-sm">
              By clicking "I Agree" you acknowledge that you have read and understood our full disclaimer.
            </p>
          </div>
          
          <button 
            onClick={handleAgree}
            className="w-full group relative overflow-hidden rounded-lg py-3 bg-gradient-to-r from-cyber-magenta to-cyber-purple text-white font-bold transition-all duration-300 transform hover:translate-y-[-2px] active:translate-y-[0px]"
          >
            <span className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
            <span className="relative flex items-center justify-center gap-2">
              <CheckCircle className="h-5 w-5" />
              <span className="font-rajdhani text-lg tracking-wide">I AGREE</span>
            </span>
          </button>
          
          <div className="text-center mt-4">
            <a 
              href="#disclaimer" 
              onClick={() => {
                setIsOpen(false);
                localStorage.setItem('disclaimerAgreed', 'true');
              }}
              className="text-sm text-cyber-blue/80 hover:text-cyber-blue transition-colors"
            >
              Read Full Disclaimer
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPopup;
