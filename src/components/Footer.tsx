import React, { useState } from 'react';
import { Mail, Twitter, Linkedin, Loader2 } from 'lucide-react';
import Logo from './Logo';
import { subscribeToNewsletter } from '@/utils/emailService';
import { motion, AnimatePresence } from 'framer-motion';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    try {
      const result = await subscribeToNewsletter(email);
      if (result.success) {
        setStatus('success');
        setMessage('Thanks for subscribing! Please check your email.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage('Failed to subscribe. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }

    // Reset status after 5 seconds
    setTimeout(() => {
      setStatus('idle');
      setMessage('');
    }, 5000);
  };

  return (
    <footer className="pt-16 pb-8 relative">
      {/* Gradient separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-premium-gradient opacity-20"></div>
      
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and description */}
          <div className="md:col-span-1">
            <Logo className="mx-auto md:mx-0 mb-4" />
            <p className="text-sm text-white/50 max-w-xs mx-auto md:mx-0 text-center md:text-left font-light">
              Transforming ideas into market-ready MVPs in just 3 weeks. Sophisticated development built for growth.
            </p>
          </div>
          
          {/* Quick links */}
          <div className="md:col-span-1">
            <h4 className="text-base font-light mb-4 text-center md:text-left">Navigate</h4>
            <ul className="space-y-2 text-center md:text-left">
              {['Home', 'Services', 'Process', 'Pricing', 'FAQ'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-white/50 hover:text-white transition-colors text-sm font-light"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div className="md:col-span-1">
            <h4 className="text-base font-light mb-4 text-center md:text-left">Contact</h4>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <a 
                  href="mailto:quickmvps@gmail.com"
                  className="text-white/50 hover:text-white transition-colors flex items-center justify-center md:justify-start text-sm font-light"
                >
                  <Mail className="w-3.5 h-3.5 mr-2" strokeWidth={1.5} />
                  quickmvps@gmail.com
                </a>
              </li>
              <li className="text-white/50 text-sm font-light">
                San Francisco, CA
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="md:col-span-1">
            <h4 className="text-base font-light mb-4 text-center md:text-left">Stay Updated</h4>
            <form onSubmit={handleSubmit} className="space-y-3 relative">
              <div>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address" 
                  className="w-full bg-black/40 border border-white/10 rounded-md px-4 py-2 text-white placeholder-white/30 focus:outline-none focus:border-white/20 text-sm font-light"
                  disabled={status === 'loading'}
                />
              </div>
              <button 
                type="submit"
                disabled={status === 'loading'}
                className={`w-full bg-black/40 border border-white/10 hover:bg-premium-gradient hover:border-transparent text-white rounded-md py-2 transition-all text-sm font-light flex items-center justify-center ${
                  status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Subscribing...
                  </>
                ) : 'Subscribe'}
              </button>

              {/* Status message */}
              <AnimatePresence>
                {message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`absolute -bottom-8 left-0 right-0 text-center text-sm ${
                      status === 'success' ? 'text-green-400' : 'text-red-400'
                    }`}
                  >
                    {message}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
        
        {/* Social icons */}
        <div className="flex justify-center space-x-5 my-10">
          {[
            { Icon: Twitter, href: 'https://x.com/QuickMvps' },
            { Icon: Linkedin, href: '#' }
          ].map(({ Icon, href }, index) => (
            <a 
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-black/40 border border-white/10 flex items-center justify-center hover:bg-premium-gradient hover:border-transparent transition-all duration-300"
            >
              <Icon className="w-4 h-4 text-white" strokeWidth={1.5} />
            </a>
          ))}
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-white/40 mb-4 md:mb-0 text-center md:text-left font-light">
            &copy; {new Date().getFullYear()} QuickMvp. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {['Terms', 'Privacy', 'Cookies'].map((item) => (
              <a 
                key={item}
                href="#"
                className="text-xs text-white/40 hover:text-white/70 transition-colors font-light"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
