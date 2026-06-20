'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // High-performance Scroll Tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Extreme 3D Transforms based on scroll position
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [30, 0, -30]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-30, 0, 30]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section id="about" className="py-32 px-6 bg-[#fafafa] border-t border-border overflow-hidden" ref={containerRef}>
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left Side: Highly 3D Animated Image Container */}
        <div className="flex-1 w-full" style={{ perspective: "1500px" }}>
          <motion.div
            style={{
              rotateX,
              rotateY,
              scale,
              y,
              transformStyle: "preserve-3d"
            }}
            className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.2)] border border-white/20 z-10"
          >
            {/* Image layer */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden" style={{ transform: "translateZ(0px)" }}>
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="Our Engineering Team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-black/10 mix-blend-overlay" />
            </div>

            {/* 3D Floating Element (pops out of the screen) */}
            <div 
              style={{ transform: "translateZ(100px)" }}
              className="absolute -bottom-10 -right-4 md:right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-2xl z-20 border border-border"
            >
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">10+</div>
              <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest mt-1">Years of Excellence</div>
            </div>
            
            {/* 3D Floating Element 2 (pops out even further) */}
            <div 
              style={{ transform: "translateZ(150px)" }}
              className="absolute -top-8 -left-4 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-2xl z-20 border border-border flex items-center gap-3"
            >
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <div className="text-xs font-bold text-foreground uppercase tracking-widest">Team of Experts</div>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Text */}
        <div className="flex-1 flex flex-col items-start z-10 relative">
          {/* Decorative Glow behind text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full -z-10 pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-8">
              Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Excellence.</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-medium">
              <p>
                We are a collective of elite developers, designers, and growth engineers who refuse to build boring software.
              </p>
              <p>
                Every project we take on is engineered from the ground up using bleeding-edge technologies like Next.js, Framer Motion, and Tailwind CSS. We don't use templates. We don't cut corners.
              </p>
              <p>
                We believe that premium, high-converting design is the ultimate unfair advantage in today's saturated market. When you work with us, you are buying an asset that prints revenue.
              </p>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};
