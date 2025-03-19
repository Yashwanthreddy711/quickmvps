
import React from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <motion.div 
        initial={{ scale: 1 }}
        whileHover={{ 
          scale: 1.1,
          filter: "drop-shadow(0 0 8px rgba(138, 43, 226, 0.6))",
        }}
        transition={{ 
          type: "spring", 
          stiffness: 500, 
          damping: 10
        }}
      >
        <Rocket size={24} className="text-purple-500" />
      </motion.div>
      
      <motion.div 
        className="font-bold text-xl md:text-2xl tracking-wider"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 500 }}
      >
        <motion.span 
          className="text-blue-500"
          whileHover={{ 
            textShadow: "0 0 12px rgba(79, 107, 245, 0.7)"
          }}
        >
          Quick
        </motion.span>
        <motion.span 
          className="text-white relative"
          whileHover={{ 
            textShadow: "0 0 12px rgba(255, 255, 255, 0.7)"
          }}
        >
          MVPs
          <span className="absolute -top-1 -right-3 text-[10px] text-purple-400">™</span>
        </motion.span>
      </motion.div>
    </div>
  );
};

export default Logo;
