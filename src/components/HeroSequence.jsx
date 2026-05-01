import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSequence() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const frameCount = 300;
    const currentFrame = index => (
      `/Zoro-final1/ezgif-frame-${(index + 1).toString().padStart(3, '0')}.jpg`
    );
    
    const images = [];
    const seq = { frame: 0 };
    
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }
    
    images[0].onload = render;
    
    function render() {
      if (images[seq.frame]) {
        const img = images[seq.frame];
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;
        
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, 0, 0, img.width, img.height,
                          centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
      }
    }
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=800%",
        scrub: 1.5,
        pin: true,
      }
    });

    tl.to(seq, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      onUpdate: render,
    });
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    };
    window.addEventListener('resize', handleResize);
    
    gsap.fromTo('.hero-text', 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, delay: 2.5, ease: 'power3.out' }
    );
    
    gsap.to('.hero-text-container', {
      opacity: 0,
      y: -100,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=50%",
        scrub: true,
      }
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen bg-black">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      
      <div className="hero-text-container absolute inset-0 flex flex-col items-center justify-center text-center z-10 pointer-events-none px-6">
        <h1 className="hero-text text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] font-heading font-black text-white tracking-tighter mb-4 drop-shadow-2xl mix-blend-overlay">
          ZORO
        </h1>
        <p className="hero-text text-lg sm:text-xl md:text-3xl text-white font-light max-w-3xl drop-shadow-lg tracking-wide uppercase">
          BEYOND IMAGINATION
        </p>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 text-xs tracking-widest uppercase animate-bounce">
        <span>Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  );
}
