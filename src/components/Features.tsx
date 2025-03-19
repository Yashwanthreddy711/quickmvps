
import React from 'react';
import { Zap, LineChart, Rocket, BarChart3 } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      title: "Speed",
      description: "Deliver working MVPs in just 3 weeks. Fast implementation without sacrificing quality.",
      icon: Zap,
      color: "from-purple to-blue"
    },
    {
      title: "Scalability",
      description: "Architecture designed for future growth. Your MVP will be ready to evolve with your business.",
      icon: LineChart,
      color: "from-blue to-purple"
    },
    {
      title: "Precision",
      description: "Focused on essential features that matter. Every line of code serves a purpose.",
      icon: Rocket,
      color: "from-purple to-blue"
    },
    {
      title: "Quality",
      description: "Clean code and intuitive design. Built with best practices for long-term maintainability.",
      icon: BarChart3,
      color: "from-blue to-purple"
    }
  ];

  return (
    <section id="services" className="section relative overflow-hidden">
      <div className="container">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="section-title font-light">Why QuickMvp</h2>
          <p className="mt-4 text-white/60 font-light">We combine speed, precision, and expertise to deliver exceptional MVPs that make an impact.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-card p-6 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="mb-5">
                <div className={`w-12 h-12 rounded-md flex items-center justify-center bg-gradient-to-br ${feature.color} opacity-90 shadow-sm transition-transform duration-300 group-hover:scale-105`}>
                  <feature.icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                </div>
              </div>
              
              <h3 className="text-xl font-light mb-3">{feature.title}</h3>
              <p className="text-white/60 font-light">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Benefits banner */}
        <div className="mt-16 p-8 rounded-md bg-black/60 backdrop-blur-sm border border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-4xl font-light mb-2">3 Weeks</h4>
              <p className="text-white/60 font-light">From Concept to Launch</p>
            </div>
            <div>
              <h4 className="text-4xl font-light mb-2">Premium</h4>
              <p className="text-white/60 font-light">Development Quality</p>
            </div>
            <div>
              <h4 className="text-4xl font-light mb-2">Infinite</h4>
              <p className="text-white/60 font-light">Growth Potential</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
