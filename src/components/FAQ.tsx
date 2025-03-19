
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqItems = [
    {
      question: "What's included in the MVP package?",
      answer: "Our MVP package includes a fully functional product with your core features, clean architecture, responsive design, deployment setup, and complete source code handover. We focus on delivering the essential elements that showcase your product's value."
    },
    {
      question: "How do you deliver projects so quickly?",
      answer: "We've refined our process to focus on efficiency without sacrificing quality. We use a modular architecture, predefined components, and a dedicated development team that works exclusively on your project during the 3-week sprint."
    },
    {
      question: "What happens after the MVP is delivered?",
      answer: "After delivery, you receive full ownership of the source code. If you've chosen the support package, we provide one month of technical assistance, bug fixes, and minor feature adjustments. We also offer extended support options if needed."
    },
    {
      question: "What technologies do you work with?",
      answer: "We specialize in modern technologies include Nextjs,React js,Supabase,NodeJS"
    },
    {
      question: "Can I request changes during development?",
      answer: "Yes, we maintain open communication throughout the 3-week development cycle. You'll receive regular updates and can provide feedback. We accommodate refinements within the scope of the agreed-upon feature set."
    }
  ];
  
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section id="faq" className="section">
      <div className="container">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="section-title font-light">Frequently Asked Questions</h2>
          <p className="mt-4 text-white/60 font-light">Everything you need to know about our MVP development process.</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className="glass-card overflow-hidden"
              >
                <button
                  className="flex justify-between items-center w-full p-6 text-left"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={openIndex === index}
                >
                  <h3 className="text-base md:text-lg font-light">{item.question}</h3>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-200 ${
                    openIndex === index ? 'bg-premium-gradient' : 'bg-black/40 border border-white/10'
                  }`}>
                    {openIndex === index ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === index ? 'max-h-72' : 'max-h-0'
                  }`}
                >
                  <div className="p-6 pt-0 text-white/60 font-light border-t border-white/5 mt-2">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="mb-5 text-white/60 font-light">Still have questions?</p>
          <a href="#book" className="btn-primary">Book a Call</a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
