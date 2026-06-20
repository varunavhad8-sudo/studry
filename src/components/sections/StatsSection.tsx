'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  { label: 'Projects Delivered', value: 250, suffix: '+' },
  { label: 'Happy Clients', value: 50, suffix: '+' },
  { label: 'Team Members', value: 12, suffix: '' },
  { label: 'Years of Excellence', value: 2, suffix: '+' },
];

export const StatsSection = () => {
  const [numbers, setNumbers] = useState<number[]>(stats.map(() => 0));
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (hasAnimated.current || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) {
        hasAnimated.current = true;

        // Count up animation
        stats.forEach((stat, i) => {
          gsap.to(
            { value: 0 },
            {
              value: stat.value,
              duration: 2,
              ease: 'power2.out',
              onUpdate: function () {
                setNumbers((prev) => {
                  const updated = [...prev];
                  updated[i] = Math.floor(this.targets()[0].value);
                  return updated;
                });
              },
            }
          );
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-32 px-6 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden"
    >
      {/* Animated Background Particles (WebGL-like effect using CSS) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-40 h-40 rounded-full bg-gradient-to-br from-amber-100 to-amber-50 opacity-20"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(40px)',
            }}
          />
        ))}
      </div>

      {/* Title */}
      <motion.h2
        className="text-5xl font-bold text-center mb-16 text-gray-950 relative z-10"
        style={{ perspective: '1000px' }}
        initial={{ opacity: 0, rotateX: 20 }}
        whileInView={{ opacity: 1, rotateX: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        Our <span className="text-amber-500">Track Record</span>
      </motion.h2>

      {/* Stats Grid */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className="text-center p-6 rounded-xl bg-white shadow-lg border border-gray-100"
            style={{ perspective: '1200px' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: false, amount: 0.5 }}
            whileHover={{
              rotateY: 5,
              rotateX: -5,
              scale: 1.05,
            }}
          >
            {/* 3D Number with perspective */}
            <div
              className="text-4xl md:text-5xl font-bold text-amber-500 mb-2"
              style={{
                perspective: '1000px',
                transformStyle: 'preserve-3d',
              }}
            >
              {numbers[i]}{stat.suffix}
            </div>
            <p className="text-gray-600 text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
