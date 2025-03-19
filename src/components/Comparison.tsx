
import React from 'react';
import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

const Comparison: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="comparison" className="section relative overflow-hidden py-20">
      {/* Background gradient elements */}
      <div className="absolute top-0 left-0 w-2/3 h-2/3 bg-purple/5 rounded-full blur-3xl -z-10 opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-blue/5 rounded-full blur-3xl -z-10 opacity-30"></div>
      
      <div className="container">
        <motion.div 
          className="max-w-xl mx-auto text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="section-title text-4xl font-bold mb-6">Why QuickMVPs?</h2>
          <p className="text-lg text-white/70">See how our approach compares to traditional development.</p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Traditional Approach Column */}
          <motion.div 
            className="h-full"
            variants={fadeInUp}
          >
            <Card className="border border-white/5 bg-black/40 backdrop-blur-sm shadow-xl h-full overflow-hidden hover:shadow-glow-blue/10 transition-all duration-500">
              <CardHeader className="bg-gradient-to-r from-white/5 to-white/2 border-b border-white/5 py-6">
                <h3 className="text-2xl font-bold text-white text-center">
                  The Old Way
                  <span className="block text-white/60 text-lg font-normal mt-1">Slow, Expensive, and Frustrating</span>
                </h3>
              </CardHeader>
              <CardContent className="pt-6 pb-8 px-6">
                <motion.ul className="space-y-5" variants={containerVariants}>
                  <motion.li className="flex items-start gap-4" variants={fadeInUp}>
                    <div className="mt-1 bg-white/5 p-1 rounded-full">
                      <X className="w-5 h-5 text-white/70" />
                    </div>
                    <div>
                      <span className="text-white/90 font-medium">Months to Build</span>
                      <p className="text-white/60 text-sm mt-0.5">Waiting 3-6 months just to test your idea</p>
                    </div>
                  </motion.li>
                  <motion.li className="flex items-start gap-4" variants={fadeInUp}>
                    <div className="mt-1 bg-white/5 p-1 rounded-full">
                      <X className="w-5 h-5 text-white/70" />
                    </div>
                    <div>
                      <span className="text-white/90 font-medium">$20,000+ for a Basic MVP</span>
                      <p className="text-white/60 text-sm mt-0.5">Draining your budget before launch</p>
                    </div>
                  </motion.li>
                  <motion.li className="flex items-start gap-4" variants={fadeInUp}>
                    <div className="mt-1 bg-white/5 p-1 rounded-full">
                      <X className="w-5 h-5 text-white/70" />
                    </div>
                    <div>
                      <span className="text-white/90 font-medium">Big Teams, Bigger Costs</span>
                      <p className="text-white/60 text-sm mt-0.5">3-5 developers at $100K+ per year each</p>
                    </div>
                  </motion.li>
                  <motion.li className="flex items-start gap-4" variants={fadeInUp}>
                    <div className="mt-1 bg-white/5 p-1 rounded-full">
                      <X className="w-5 h-5 text-white/70" />
                    </div>
                    <div>
                      <span className="text-white/90 font-medium">Too Many Meetings</span>
                      <p className="text-white/60 text-sm mt-0.5">Slows down progress instead of building</p>
                    </div>
                  </motion.li>
                  <motion.li className="flex items-start gap-4" variants={fadeInUp}>
                    <div className="mt-1 bg-white/5 p-1 rounded-full">
                      <X className="w-5 h-5 text-white/70" />
                    </div>
                    <div>
                      <span className="text-white/90 font-medium">Unnecessary Complexity</span>
                      <p className="text-white/60 text-sm mt-0.5">Tech debates, security issues, and performance failures</p>
                    </div>
                  </motion.li>
                  <motion.li className="flex items-start gap-4" variants={fadeInUp}>
                    <div className="mt-1 bg-white/5 p-1 rounded-full">
                      <X className="w-5 h-5 text-white/70" />
                    </div>
                    <div>
                      <span className="text-white/90 font-medium">Hidden Costs</span>
                      <p className="text-white/60 text-sm mt-0.5">Surprise expenses that blow your budget</p>
                    </div>
                  </motion.li>
                </motion.ul>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* QuickMVPs Approach Column */}
          <motion.div 
            className="h-full"
            variants={fadeInUp}
          >
            <Card className="border border-white/5 bg-black/40 backdrop-blur-sm shadow-xl h-full overflow-hidden hover:shadow-glow-purple/10 transition-all duration-500">
              <CardHeader className="bg-gradient-to-r from-purple/20 to-blue/10 border-b border-white/5 py-6">
                <h3 className="text-2xl font-bold text-white text-center">
                  The QuickMVPs Advantage 🚀
                  <span className="block text-purple-light text-lg font-normal mt-1">Fast, Affordable, Effective</span>
                </h3>
              </CardHeader>
              <CardContent className="pt-6 pb-8 px-6">
                <motion.ul className="space-y-5" variants={containerVariants}>
                  <motion.li className="flex items-start gap-4" variants={fadeInUp}>
                    <div className="mt-1 bg-purple/10 p-1 rounded-full">
                      <Check className="w-5 h-5 text-purple-light" />
                    </div>
                    <div>
                      <span className="text-white/90 font-medium">Launch in Weeks</span>
                      <p className="text-white/60 text-sm mt-0.5">Get your MVP live, fast</p>
                    </div>
                  </motion.li>
                  <motion.li className="flex items-start gap-4" variants={fadeInUp}>
                    <div className="mt-1 bg-purple/10 p-1 rounded-full">
                      <Check className="w-5 h-5 text-purple-light" />
                    </div>
                    <div>
                      <span className="text-white/90 font-medium">From Just $2499</span>
                      <p className="text-white/60 text-sm mt-0.5">Affordable, transparent pricing</p>
                    </div>
                  </motion.li>
                  <motion.li className="flex items-start gap-4" variants={fadeInUp}>
                    <div className="mt-1 bg-purple/10 p-1 rounded-full">
                      <Check className="w-5 h-5 text-purple-light" />
                    </div>
                    <div>
                      <span className="text-white/90 font-medium">Solo Expert Developer</span>
                      <p className="text-white/60 text-sm mt-0.5">No bloated teams, just results</p>
                    </div>
                  </motion.li>
                  <motion.li className="flex items-start gap-4" variants={fadeInUp}>
                    <div className="mt-1 bg-purple/10 p-1 rounded-full">
                      <Check className="w-5 h-5 text-purple-light" />
                    </div>
                    <div>
                      <span className="text-white/90 font-medium">Blazing-Fast Development</span>
                      <p className="text-white/60 text-sm mt-0.5">Using Next.js, React, and proven tech</p>
                    </div>
                  </motion.li>
                  <motion.li className="flex items-start gap-4" variants={fadeInUp}>
                    <div className="mt-1 bg-purple/10 p-1 rounded-full">
                      <Check className="w-5 h-5 text-purple-light" />
                    </div>
                    <div>
                      <span className="text-white/90 font-medium">Enterprise-Grade Security</span>
                      <p className="text-white/60 text-sm mt-0.5">Built to handle real-world challenges</p>
                    </div>
                  </motion.li>
                  <motion.li className="flex items-start gap-4" variants={fadeInUp}>
                    <div className="mt-1 bg-purple/10 p-1 rounded-full">
                      <Check className="w-5 h-5 text-purple-light" />
                    </div>
                    <div>
                      <span className="text-white/90 font-medium">Scalable from Day One</span>
                      <p className="text-white/60 text-sm mt-0.5">Ready for big traffic from the start</p>
                    </div>
                  </motion.li>
                  <motion.li className="flex items-start gap-4" variants={fadeInUp}>
                    <div className="mt-1 bg-purple/10 p-1 rounded-full">
                      <Check className="w-5 h-5 text-purple-light" />
                    </div>
                    <div>
                      <span className="text-white/90 font-medium">Instant Updates</span>
                      <p className="text-white/60 text-sm mt-0.5">No waiting weeks for changes</p>
                    </div>
                  </motion.li>
                </motion.ul>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
        
        {/* Bottom CTA Buttons */}
        <motion.div 
          className="mt-12 p-8 rounded-xl bg-gradient-to-r from-purple/10 to-blue/10 backdrop-blur-sm border border-white/5 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-xl md:text-2xl font-light mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-light to-blue-light">
            💡 Idea to MVP, Without the Hassle
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://cal.com/quickmvps/idea-to-mvp" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 rounded-lg bg-premium-gradient hover:opacity-90 transition-opacity text-white font-medium flex items-center justify-center gap-2 shadow-md hover:shadow-purple/30"
            >
              Book a Strategy Call
              <ArrowRight size={16} />
            </a>
            <a 
              href="https://x.com/QuickMvps" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 rounded-lg bg-black/50 hover:bg-black/70 border border-white/10 text-white font-medium flex items-center justify-center gap-2 shadow-md transition-all"
            >
              DM on X
              <Twitter size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Add missing import
import { ArrowRight, Twitter } from 'lucide-react';

export default Comparison;
