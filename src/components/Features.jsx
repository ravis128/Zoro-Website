import React from 'react';
import { motion } from 'framer-motion';

export default function Features() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-square rounded-[3rem] overflow-hidden glass border-white/10 p-4"
            >
              <div className="w-full h-full rounded-[2.5rem] bg-gradient-to-br from-zinc-800 to-black overflow-hidden relative group">
                 {/* Reusing one of the best frames as a static feature image or video replacement */}
                 <img src="/Zoro-final1/ezgif-frame-150.jpg" alt="Feature" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 mix-blend-screen group-hover:scale-105" />
              </div>
            </motion.div>
          </div>
          
          <div className="w-full md:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-heading font-bold text-white mb-8"
            >
              Engineered for the Extraordinary
            </motion.h2>
            
            <div className="space-y-8">
              {[
                { title: "Intelligent Design", desc: "Our system adapts to your workflow, providing seamless integration with existing tools." },
                { title: "Lightning Fast", desc: "Optimized for maximum performance without sacrificing visual fidelity." },
                { title: "Immersive Detail", desc: "Every pixel is carefully considered to provide a stunning visual experience." }
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  className="flex gap-6 items-start group"
                >
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                    <p className="text-gray-400 font-light">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
