import React, { useState } from 'react';
import { Check, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Pricing: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  const plans = [
    {
      title: "MVP Development",
      price: "$499",
      features: [
        "3-week delivery",
        "Focused feature set",
        "Clean architecture",
        "Source code handover",
        "Deployment setup",
        "", // Empty feature to match height with other card
        "" // Empty feature to match height with other card
      ],
      accent: "from-purple to-blue",
      hoverBg: "from-[#2D1F60] to-[#1A1A3A]",
      hoverBorder: "border-purple",
      popular: false
    },
    {
      title: "MVP Development + Support",
      price: "$699",
      features: [
        "3-week delivery",
        "Focused feature set",
        "Clean architecture",
        "Source code handover",
        "Deployment setup",
        "1-month maintenance",
        "Technical support"
      ],
      accent: "from-blue to-purple",
      hoverBg: "from-[#1F3060] to-[#1A1A3A]",
      hoverBorder: "border-blue",
      popular: true
    }
  ];
  
  return (
    <section id="pricing" className="section relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        {/* Blurred gradient circles */}
        <div className="absolute -top-20 -left-20 w-[800px] h-[800px] rounded-full bg-purple/5 blur-[130px] opacity-50"></div>
        <div className="absolute -top-20 -right-20 w-[800px] h-[800px] rounded-full bg-blue/5 blur-[130px] opacity-50"></div>
        <div className="absolute -bottom-20 left-1/4 w-[800px] h-[800px] rounded-full bg-purple/5 blur-[130px] opacity-50"></div>
        <div className="absolute -bottom-20 right-1/4 w-[800px] h-[800px] rounded-full bg-blue/5 blur-[130px] opacity-50"></div>
        
        {/* Dot pattern */}
        <div className="absolute inset-0 dot-pattern opacity-30"></div>
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="container relative">
        <motion.div 
          className="max-w-xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title font-light">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-white/60 font-light">No hidden fees or complexity. Just straightforward pricing for exceptional MVPs.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative glass-card overflow-hidden transition-all duration-300 h-full flex flex-col rounded-2xl border border-white/10 ${
                hoveredCard === index ? 'transform scale-[1.01] shadow-xl' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Gradient border effect */}
              <div 
                className={`absolute inset-0 p-[1px] rounded-2xl -z-10 transition-opacity duration-300 ${
                  hoveredCard === index 
                    ? 'opacity-100' 
                    : 'opacity-0'
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${
                  index === 0 
                    ? 'from-purple/90 via-purple-light/50 to-transparent' 
                    : 'from-blue/90 via-blue-light/50 to-transparent'
                } rounded-2xl blur-sm opacity-80`}></div>
              </div>
              
              {/* Card background on hover */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${plan.hoverBg} rounded-2xl opacity-0 transition-opacity duration-300 ${
                  hoveredCard === index ? 'opacity-100' : ''
                }`}
              ></div>
              
              {/* Recommended badge */}
              {plan.popular && (
                <div className="absolute top-2 right-4">
                  <motion.div 
                    className="bg-gradient-to-r from-purple/30 to-blue/20 backdrop-blur-md border border-purple/30 py-1.5 px-3.5 rounded-full flex items-center gap-1.5 shadow-lg"
                    animate={{ 
                      boxShadow: ['0 0 0px rgba(138, 43, 226, 0)', '0 0 20px rgba(138, 43, 226, 0.3)', '0 0 0px rgba(138, 43, 226, 0)'],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Star className="w-3.5 h-3.5 text-purple-light" fill="#9A4EE9" strokeWidth={0} />
                    <span className="text-xs font-medium text-purple-light">Recommended</span>
                  </motion.div>
                </div>
              )}
              
              <div className="p-8 relative z-10 flex flex-col h-full">
                <h3 className="text-xl font-jakarta mb-2 text-white">{plan.title}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-light text-white">{plan.price}</span>
                </div>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    feature ? (
                      <motion.li 
                        key={i} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.1 * i }}
                      >
                        <div className={`min-w-4 min-h-4 rounded-full bg-gradient-to-r ${plan.accent} flex items-center justify-center mr-3 mt-0.5 opacity-90`}>
                          <Check className="w-2.5 h-2.5 text-white" />
                        </div>
                        <span className="text-white/90 font-light">{feature}</span>
                      </motion.li>
                    ) : <div key={i} className="h-[24px]" /> // Spacer for empty features
                  ))}
                </ul>
                
                <motion.button 
                  className={`w-full py-3 px-4 rounded-xl transition-all duration-300 mt-auto ${
                    hoveredCard === index 
                      ? `bg-gradient-to-r ${plan.accent} text-white shadow-lg` 
                      : 'bg-black/40 border border-white/10 text-white/80 hover:bg-black/50'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Money back guarantee with animation */}
        <motion.div 
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.div 
            className="inline-flex items-center justify-center px-6 py-2.5 bg-black/40 backdrop-blur-sm border border-white/5 rounded-md"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 0 15px rgba(138, 43, 226, 0.15)",
              borderColor: "rgba(255, 255, 255, 0.15)"
            }}
          >
            <Check className="w-4 h-4 text-white/60 mr-2" strokeWidth={1.5} />
            <span className="text-white/60 text-sm font-light">7-day money-back guarantee if you're not completely satisfied</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
