
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  
  // Track scroll position for parallax effects
  useEffect(() => {  
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-24 flex items-center overflow-hidden dot-pattern">
      {/* Animated gradient background with parallax effect */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {/* Main gradient orbs with parallax effect */}
        <motion.div 
          className="absolute top-1/4 -left-64 w-[500px] h-[500px] rounded-full bg-purple/20 blur-[100px]"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          style={{
            y: scrollY * 0.2, // Parallax effect based on scroll
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] rounded-full bg-blue/20 blur-[100px]"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          style={{
            y: -scrollY * 0.1, // Inverse parallax effect
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-black/50 to-black/90 -z-10"></div>
      
      {/* Content */}
      <div className="container relative">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Text content - Centered on all screen sizes */}
          <motion.div 
            className="space-y-6 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              y: -scrollY * 0.1, // Text moves slightly as user scrolls
            }}
          >
            <motion.div 
              className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-white/80 mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 15px rgba(138, 43, 226, 0.3)"
              }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-premium-gradient mr-2"></div>
              <span className="font-jakarta tracking-wide animate-pulse-soft">Premium MVP Development</span>
            </motion.div>
            
            <motion.h1 
              className="font-jakarta font-bold text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Transforming <motion.span 
                className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-light to-blue-light"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                Ideas
                <span className="absolute -bottom-1 left-0 w-full h-px bg-premium-gradient"></span>
              </motion.span> into MVPs in <motion.span 
                className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-light to-purple-light"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                3 Weeks
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-white/70 mx-auto font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Rapid development without compromising quality. Build products that stand out and scale.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <a href="https://cal.com/quickmvps/idea-to-mvp" target="_blank" rel="noopener noreferrer" className="btn-primary group w-full sm:w-auto">
                Book a Call
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              
              <a href="#process" className="btn-outline w-full sm:w-auto flex items-center">
                Our Process
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
