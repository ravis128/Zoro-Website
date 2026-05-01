import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float, MeshDistortMaterial, ContactShadows } from '@react-three/drei';
import { motion } from 'framer-motion';

function AbstractShape() {
  const mesh = useRef();

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={mesh} scale={1.5}>
        <icosahedronGeometry args={[1, 15]} />
        <MeshDistortMaterial
          color="#ffffff"
          envMapIntensity={2}
          clearcoat={1}
          clearcoatRoughness={0.1}
          metalness={0.8}
          roughness={0.2}
          distort={0.4}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

export default function InteractiveSection() {
  return (
    <section className="relative h-screen bg-[#050505] overflow-hidden flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2 h-[50vh] md:h-full relative z-10 cursor-grab active:cursor-grabbing">
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
          <AbstractShape />
          <Environment preset="city" />
          <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate 
            autoRotateSpeed={1}
          />
        </Canvas>
      </div>
      
      <div className="w-full md:w-1/2 p-8 md:p-20 relative z-20 flex flex-col justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="pointer-events-auto"
        >
          <div className="inline-block px-4 py-1 rounded-full border border-white/20 text-xs font-mono tracking-widest text-white/60 mb-6 uppercase glass">
            Interactive
          </div>
          <h2 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
            Shape The <br/> Future
          </h2>
          <p className="text-gray-400 font-light text-lg max-w-md mb-10">
            Interact with the abstract representation of our core engine. Drag to rotate, feel the physics and discover the depth.
          </p>
          
          <button className="relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden group">
            <span className="relative z-10 mix-blend-difference text-white">Explore Ecosystem</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </button>
        </motion.div>
      </div>
      
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-white/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
