import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Process from '@/components/Process';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import BookCall from '@/components/BookCall';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import ChatWidget from '@/components/ChatWidget';
import ParticlesBackground from '@/components/ParticlesBackground';

const Index = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (window.location.hash) {
      const cleanUrl = window.location.href.replace(window.location.hash, '');
      window.history.replaceState({}, document.title, cleanUrl);
    }
    
    window.scrollTo(0, 0);
    
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      setIsLoaded(true);
    }, 100);
    
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    const updateScrollProgress = () => {
      const scrollPosition = window.scrollY;
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const calculated = totalHeight > 0 ? scrollPosition / totalHeight : 0;
      setScrollProgress(calculated);
      
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach(section => {
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionId = section.getAttribute('id') || '';
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setCurrentSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, [isLoaded]);

  return (
    <div className="min-h-screen antialiased bg-black">
      <ParticlesBackground />
      
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-premium-gradient z-50 origin-left"
        style={{ scaleX: scrollProgress }}
        animate={{
          boxShadow: scrollProgress > 0 ? "0 0 10px rgba(138, 43, 226, 0.5)" : "none"
        }}
      />
      
      <Navbar currentSection={currentSection} />
      
      <main id="top">
        <Hero />
        <Features />
        <Process />
        <Pricing />
        <FAQ />
        <BookCall />
      </main>
      
      <Footer />
      
      {/* <ChatWidget /> */}
      {/* <CookieConsent /> */}
    </div>
  );
};

export default Index;
