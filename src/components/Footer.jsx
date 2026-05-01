import React from 'react';

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/10 bg-black overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full blur-[120px]" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-center">
        <div className="text-2xl font-heading font-bold mb-4 md:mb-0">
          ZORO
        </div>
        
        <div className="flex gap-6 text-sm text-gray-400">
          <a href="#" className="hover:text-white transition-colors duration-300">Twitter</a>
          <a href="#" className="hover:text-white transition-colors duration-300">Instagram</a>
          <a href="#" className="hover:text-white transition-colors duration-300">LinkedIn</a>
        </div>
      </div>
      
      <div className="container mx-auto px-6 mt-12 text-center text-xs text-gray-600">
        &copy; {new Date().getFullYear()} Zoro Inc. All rights reserved.
      </div>
    </footer>
  );
}
