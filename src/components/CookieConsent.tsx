
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookieConsent');
    
    if (!hasConsented) {
      // Show the banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };
  
  const handleClose = () => {
    setIsVisible(false);
  };
  
  if (!isVisible) return null;
  
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-lg z-50 animate-fade-in">
      <div className="glass-card p-4 flex items-center justify-between">
        <p className="text-sm text-white/80 mr-4">
          We use cookies to enhance your experience on our site.
        </p>
        <div className="flex items-center gap-2">
          <button 
            onClick={handleAccept}
            className="text-xs bg-primary-gradient text-white px-3 py-1.5 rounded-lg"
          >
            Accept
          </button>
          <button 
            onClick={handleClose}
            className="text-white/70 hover:text-white"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
