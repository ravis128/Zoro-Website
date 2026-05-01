import React, { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import Loader from './components/Loader';
import Cursor from './components/Cursor';
import HeroSequence from './components/HeroSequence';
import Showcase from './components/Showcase';
import Features from './components/Features';
import InteractiveSection from './components/InteractiveSection';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 0.7,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Simulate loading time for assets
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => {
      clearTimeout(timer);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Cursor />
      {loading && <Loader />}
      <Header />
      <main className="relative w-full bg-black font-sans min-h-screen">
        <HeroSequence />
        <Showcase />
        <Features />
        <InteractiveSection />
        <Footer />
      </main>
    </>
  );
}

export default App;
