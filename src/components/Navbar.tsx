
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  currentSection?: string;
}

const Navbar: React.FC<NavbarProps> = ({ currentSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);
      
      // Calculate scroll progress
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollY / scrollHeight;
      setScrollProgress(progress * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  // Close menu when clicking a link (for mobile)
  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (isMenuOpen) setIsMenuOpen(false);
    
    // Scroll to the target element with a small delay to prevent jumps
    setTimeout(() => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <>
      {/* Scroll progress bar */}
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />
      
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-3 bg-black/80 backdrop-blur-md' : 'py-5 bg-transparent'
        }`}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            className="z-10" 
            onClick={(e) => handleNavLinkClick(e, 'home')}
          >
            <Logo />
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { name: 'Home', id: 'home' },
              { name: 'Services', id: 'services' },
              { name: 'Process', id: 'process' },
              { name: 'Pricing', id: 'pricing' },
              { name: 'FAQ', id: 'faq' }
            ].map((item) => (
              <a 
                key={item.name}
                href={`#${item.id}`}
                className={`nav-link text-white/80 hover:text-white font-light transition-colors ${
                  currentSection === item.id ? 'text-white' : ''
                }`}
                onClick={(e) => handleNavLinkClick(e, item.id)}
              >
                {item.name}
              </a>
            ))}
          </nav>
          
          {/* Connect Button - Updated X icon */}
          <a 
            href="https://x.com/QuickMvps" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-md bg-gradient-to-r from-purple/40 to-blue/40 hover:from-purple/60 hover:to-blue/60 backdrop-blur-sm shadow-lg hover:shadow-purple/20 transition-all duration-300 border border-white/10 group z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-12 transition-transform">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
            <span className="group-hover:translate-x-0.5 transition-transform">Connect on X</span>
          </a>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2 focus:outline-none z-10"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div 
          className={`fixed inset-0 bg-black/95 backdrop-blur-lg md:hidden z-[45] transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="container h-full flex flex-col items-center justify-center">
            <nav className="flex flex-col items-center space-y-8">
              {[
                { name: 'Home', id: 'home' },
                { name: 'Services', id: 'services' },
                { name: 'Process', id: 'process' },
                { name: 'Pricing', id: 'pricing' },
                { name: 'FAQ', id: 'faq' }
              ].map((item) => (
                <a 
                  key={item.name}
                  href={`#${item.id}`}
                  className="text-white/90 hover:text-white text-2xl font-light transition-colors"
                  onClick={(e) => handleNavLinkClick(e, item.id)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
            
            <a 
              href="https://x.com/QuickMvps" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-10 flex items-center gap-2 px-6 py-3 rounded-md bg-gradient-to-r from-purple/40 to-blue/40 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-purple/20 group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-12 transition-transform">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
              <span className="group-hover:translate-x-0.5 transition-transform">Connect on X</span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
