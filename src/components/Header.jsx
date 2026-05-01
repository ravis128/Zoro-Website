import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 2 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-black/50 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        <div className="text-xl sm:text-2xl font-heading font-black text-white tracking-widest">
          ZORO
        </div>
        
        <nav className="hidden lg:flex gap-8 text-sm font-medium tracking-wide">
          <a href="#" className="text-white hover:text-white/70 transition-colors">VISION</a>
          <a href="#" className="text-white hover:text-white/70 transition-colors">DESIGN</a>
          <a href="#" className="text-white hover:text-white/70 transition-colors">EXPERIENCE</a>
        </nav>
        
        <button className="px-4 py-1.5 sm:px-6 sm:py-2 bg-white text-black font-semibold rounded-full text-xs sm:text-sm hover:scale-105 transition-transform duration-300">
          Pre-Order
        </button>
      </div>
    </motion.header>
  );
}
