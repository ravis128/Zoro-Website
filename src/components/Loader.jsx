import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Loader() {
  const loaderRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    })
    .to(loaderRef.current, {
      yPercent: -100,
      duration: 1.2,
      ease: "expo.inOut",
      delay: 1
    });
  }, []);

  return (
    <div 
      ref={loaderRef} 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white origin-top"
    >
      <div 
        ref={textRef} 
        className="opacity-0 translate-y-8 text-4xl md:text-6xl font-heading font-bold tracking-tighter"
      >
        ZORO
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
        <div className="w-2 h-2 rounded-full bg-white/50 animate-bounce" style={{ animationDelay: '0ms' }} />
        <div className="w-2 h-2 rounded-full bg-white/50 animate-bounce" style={{ animationDelay: '150ms' }} />
        <div className="w-2 h-2 rounded-full bg-white/50 animate-bounce" style={{ animationDelay: '300ms' }} />
      </div>
    </div>
  );
}
