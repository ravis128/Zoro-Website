import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Showcase() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const y3 = useTransform(scrollYProgress, [0, 1], [50, -150]);

  return (
    <section ref={containerRef} className="relative py-32 bg-[#020202] min-h-screen flex items-center">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-heading font-bold text-white mb-6"
          >
            Unmatched Elegance
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg font-light"
          >
            Every curve and surface is meticulously crafted to perfection. A harmonious blend of art and technology.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32">
          <motion.div style={{ y: y1 }} className="glass p-10 rounded-3xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="text-5xl mb-6 font-heading font-thin text-white/20 group-hover:text-white transition-colors duration-500">01</div>
            <h3 className="text-2xl font-bold mb-4 text-white">Precision Control</h3>
            <p className="text-gray-400 font-light leading-relaxed">Experience absolute control with our revolutionary responsive system.</p>
          </motion.div>
          
          <motion.div style={{ y: y2 }} className="glass p-10 rounded-3xl relative overflow-hidden group mt-12 md:mt-32">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="text-5xl mb-6 font-heading font-thin text-white/20 group-hover:text-white transition-colors duration-500">02</div>
            <h3 className="text-2xl font-bold mb-4 text-white">Dynamic Flow</h3>
            <p className="text-gray-400 font-light leading-relaxed">Seamless transitions and fluid motion that adapts to your interaction effortlessly.</p>
          </motion.div>
          
          <motion.div style={{ y: y3 }} className="glass p-10 rounded-3xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="text-5xl mb-6 font-heading font-thin text-white/20 group-hover:text-white transition-colors duration-500">03</div>
            <h3 className="text-2xl font-bold mb-4 text-white">Pure Aesthetics</h3>
            <p className="text-gray-400 font-light leading-relaxed">Minimalist design language that speaks volumes through absolute simplicity.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
