
import React from 'react';
import { ArrowRight } from 'lucide-react';

const BookCall: React.FC = () => {
  return (
    <section id="book" className="section relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-purple/5 rounded-full blur-3xl -z-10 opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-blue/5 rounded-full blur-3xl -z-10 opacity-30"></div>
      
      <div className="container">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="section-title font-light">Book a Discovery Call</h2>
          <p className="mt-4 text-white/60 font-light">Schedule a call to discuss your MVP needs and explore how we can bring your vision to life.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          {/* Info column */}
          <div className="order-1">
            <div className="glass-card p-8 h-full flex flex-col justify-center">
              <h3 className="text-2xl font-light mb-6">What to Expect</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="min-w-10 min-h-10 flex-shrink-0 rounded-full bg-premium-gradient opacity-10 mr-4"></div>
                  <div>
                    <h4 className="text-lg font-light mb-1">30-Minute Strategy Session</h4>
                    <p className="text-white/60 font-light">We'll discuss your vision, requirements, and answer your questions about our process.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="min-w-10 min-h-10 flex-shrink-0 rounded-full bg-premium-gradient opacity-10 mr-4"></div>
                  <div>
                    <h4 className="text-lg font-light mb-1">Technical Assessment</h4>
                    <p className="text-white/60 font-light">Our experts will evaluate technical feasibility and provide implementation insights.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="min-w-10 min-h-10 flex-shrink-0 rounded-full bg-premium-gradient opacity-10 mr-4"></div>
                  <div>
                    <h4 className="text-lg font-light mb-1">Custom Proposal</h4>
                    <p className="text-white/60 font-light">Following the call, we'll send you a detailed proposal tailored to your specific needs.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <div className="py-4 px-5 bg-black/40 backdrop-blur-sm border border-white/5 rounded-md">
                  <p className="text-white/80 text-sm font-light">
                    Our calendar shows real-time availability. Select a convenient time, and we'll confirm your booking immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Featured CTA section with updated X icon */}
        <div className="mt-12 bg-gradient-to-r from-black/40 to-purple/10 p-8 rounded-xl border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-purple/5 rounded-full blur-3xl -z-10 opacity-30"></div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-purple">
                <path d="M12 2v8"></path>
                <path d="m4.93 10.93 1.41 1.41"></path>
                <path d="M2 18h2"></path>
                <path d="M20 18h2"></path>
                <path d="m19.07 10.93-1.41 1.41"></path>
                <path d="M22 22H2"></path>
                <path d="m16 16-4-4-4 4"></path>
                <path d="M16 6a4 4 0 0 1-8 0"></path>
              </svg>
            </div>
            <h3 className="text-3xl font-light mb-4 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-light to-purple-light">
              Idea to MVP, Without the Hassle
            </h3>
            <div className="flex flex-col md:flex-row gap-4 mt-8">
              <a 
                href="https://cal.com/quickmvps/idea-to-mvp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-md bg-premium-gradient hover:opacity-90 transition-opacity flex items-center justify-center"
              >
                Book a Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a 
                href="https://x.com/QuickMvps" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-md bg-black border border-white/10 hover:bg-white/5 transition-colors flex items-center justify-center group"
              >
                DM on X
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover:rotate-12 transition-transform">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookCall;
