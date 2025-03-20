import React, { useState, useEffect } from 'react';
import { Phone, FileText, Code, Package, Wrench } from 'lucide-react';

const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  
  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Update active step based on scroll position
  useEffect(() => {
    const processSection = document.getElementById('process');
    if (!processSection) return;
    
    const sectionTop = processSection.offsetTop;
    const sectionHeight = processSection.offsetHeight;
    const stepHeight = sectionHeight / 5; // 5 steps
    
    const sectionScrollPosition = scrollY - sectionTop + window.innerHeight / 2;
    
    if (sectionScrollPosition < 0) {
      setActiveStep(0);
    } else if (sectionScrollPosition > sectionHeight) {
      setActiveStep(4);
    } else {
      const currentStep = Math.floor(sectionScrollPosition / stepHeight);
      setActiveStep(Math.min(4, Math.max(0, currentStep)));
    }
  }, [scrollY]);
  
  const steps = [
    {
      icon: Phone,
      title: "Discovery Call",
      description: "Understanding your vision and requirements through a focused discovery session."
    },
    {
      icon: FileText,
      title: "PRD Creation",
      description: "Mapping out your product specifications with a detailed requirements document."
    },
    {
      icon: Code,
      title: "Development",
      description: "Rapid 2-week build cycle with daily progress updates and transparent tracking."
    },
    {
      icon: Package,
      title: "MVP Delivery",
      description: "Complete working product handover with documentation and walkthrough."
    },
    {
      icon: Wrench,
      title: "Support Options",
      description: "Ongoing assistance as needed to help you scale and add new features."
    }
  ];
  
  return (
    <section id="process" className="section relative line-pattern">
      <div className="container">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="section-title font-light">Our Process</h2>
          <p className="mt-4 text-white/60 font-light">Our refined approach ensures your MVP is delivered with precision and elegance.</p>
        </div>
        
        {/* Desktop process timeline */}
        <div className="hidden md:block relative">
          {/* Vertical center line */}
          <div className="timeline-connector h-[80%] top-10 bottom-10 opacity-30"></div>
          
          {/* Progress indicator */}
          <div 
            className="timeline-connector h-0 top-10" 
            style={{ 
              height: `${(activeStep + 1) * 20}%`, 
              transition: 'height 0.5s ease-out'
            }}
          ></div>
          
          <div className="flex flex-col gap-16">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Timeline content */}
                <div 
                  className={`w-1/2 pr-12 ${
                    index % 2 === 0 ? 'text-right' : 'text-left pl-12 pr-0'
                  } transition-all duration-500 ${
                    index <= activeStep ? 'opacity-100 translate-y-0' : 'opacity-30 translate-y-10'
                  }`}
                >
                  <h3 className="text-xl font-light mb-3">{step.title}</h3>
                  <p className="text-white/60 font-light">{step.description}</p>
                </div>
                
                {/* Center icon */}
                <div 
                  className={`absolute left-1/2  transform -translate-x-1/2 z-10 w-12 h-12 rounded-full ${
                    index <= activeStep 
                      ? 'bg-premium-gradient shadow-glow-purple' 
                      : 'bg-black/40 border border-white/10'
                  } flex items-center justify-center transition-all duration-500`}
                >
                  <step.icon className={`w-5 h-5 ${
                    index <= activeStep ? 'text-white' : 'text-white/50'
                  }`} strokeWidth={1.5} />
                </div>
                
                {/* Empty space for the other side */}
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile process timeline */}
        <div className="md:hidden">
          <div className="relative pl-16 border-l border-white/10">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`mb-24 relative transition-all duration-500 ${
                  index <= activeStep ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-10'
                }`}
              >
                <div 
                  className={`absolute left-0 -translate-x-1/2 w-10 h-10 rounded-full ${
                    index <= activeStep 
                      ? 'bg-premium-gradient shadow-glow-purple' 
                      : 'bg-black/40 border border-white/10'
                  } flex items-center justify-center transition-all duration-300`}
                >
                  <step.icon className={`w-5 h-5 ${
                    index <= activeStep ? 'text-white' : 'text-white/50'
                  }`} strokeWidth={1.5} />
                </div>
                <div className="pl-6">
                  <h3 className="text-lg font-light mb-2">{step.title}</h3>
                  <p className="text-sm text-white/60 font-light leading-relaxed max-w-xs">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
