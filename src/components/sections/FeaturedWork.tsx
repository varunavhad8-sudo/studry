'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ProjectCard {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
}

const projects: ProjectCard[] = [
  { id: 1, title: 'Interior Studio Showcase', category: 'E-commerce', image: '/project1.png', link: '#' },
  { id: 2, title: 'Restaurant Booking Platform', category: 'Web App', image: '/project2.png', link: '#' },
  { id: 3, title: 'Luxury Brand Portal', category: 'Corporate', image: '/project3.png', link: '#' },
];

export const FeaturedWork = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Parallax scroll for each card at different speeds
    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
        y: i % 2 === 0 ? -50 : 50, // Alternate up/down parallax
        opacity: [0, 1, 1, 0] as any,
        duration: 1.2,
        ease: 'power2.inOut',
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="relative w-full py-24 px-6 bg-white overflow-hidden">
      {/* 3D Heading with perspective */}
      <motion.h2
        className="text-5xl font-bold text-center text-gray-950 mb-12"
        style={{ perspective: '1200px' }}
        initial={{ opacity: 0, rotateY: -30, z: -100 }}
        whileInView={{ opacity: 1, rotateY: 0, z: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        Featured <span className="text-amber-500">Projects</span>
      </motion.h2>

      {/* Cards Container */}
      <div
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
      >
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            ref={(el) => {
              if (el) cardsRef.current[i] = el;
            }}
            className="h-96 cursor-pointer group perspective"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* 3D Flip Card Container */}
            <motion.div
              className="relative w-full h-full"
              style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
              whileHover={{ rotateY: 180 }}
              transition={{ duration: 0.6 }}
            >
              {/* Front Face */}
              <div
                className="absolute w-full h-full bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 p-8 shadow-lg flex items-center justify-center overflow-hidden"
                style={{
                  backfaceVisibility: 'hidden',
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Fallback styling for images if they don't exist yet */}
                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-400 font-semibold">
                  {project.title} Image
                </div>
                {/* 
                <img
                  src={project.image}
                  alt={project.title}
                  className="relative z-10 w-full h-full object-cover rounded-lg shadow"
                /> 
                */}
              </div>

              {/* Back Face (rotated 180deg) */}
              <div
                className="absolute w-full h-full bg-amber-500 rounded-xl p-8 shadow-lg flex flex-col justify-between items-center text-center"
                style={{
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                  transformStyle: 'preserve-3d',
                }}
              >
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-amber-100 font-medium tracking-wide uppercase text-sm">{project.category}</p>
                </div>
                <a
                  href={project.link}
                  className="px-8 py-3 bg-white text-amber-500 font-bold rounded-lg shadow hover:bg-gray-50 transition-colors duration-200 mb-4"
                >
                  View Case
                </a>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
