"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Marquee from "react-fast-marquee";
import { Section } from "@/components/ui/Section";
import { videoTestimonials, VideoTestimonial } from "@/lib/data/videoTestimonials";

function VideoCard({ testimonial, onClick }: { testimonial: VideoTestimonial, onClick: () => void }) {
  return (
    <div 
      className="relative w-[320px] md:w-[480px] lg:w-[560px] aspect-video rounded-3xl overflow-hidden shadow-2xl mx-3 md:mx-4 group bg-surface/50 border border-white/5 cursor-pointer"
      onClick={onClick}
    >
      {/* Video Element */}
      <video
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        poster={testimonial.posterImage}
        preload="auto"
        autoPlay
        loop
        muted
        playsInline
        src={testimonial.videoUrl}
      />
      
      {/* Play Button Indicator (Placeholder UI) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="w-16 h-16 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/20">
          <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 pointer-events-none">
        <p className="text-white font-medium text-lg md:text-xl leading-tight mb-4 drop-shadow-md">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
        <div>
          <h4 className="text-white font-heading font-bold text-base">
            {testimonial.clientName}
          </h4>
          <p className="text-primary text-sm font-medium">
            {testimonial.businessType}
          </p>
        </div>
      </div>
    </div>
  );
}

export function VideoTestimonials() {
  const [activeVideo, setActiveVideo] = useState<VideoTestimonial | null>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (activeVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeVideo]);

  return (
    <Section id="video-testimonials" className="bg-black py-24 md:py-32 overflow-hidden relative z-10">
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-[80px]">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-white/60 uppercase tracking-widest text-sm font-semibold mb-4 inline-block"
          >
            Don&apos;t Just Take Our Word For It
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            Real Results, Real Clients
          </motion.h2>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full flex flex-col overflow-hidden">
        
        {/* Edge Fade Masks for a seamless look */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-40 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-40 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

        {/* Single Row: Scrolling Left */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <Marquee 
            speed={40} 
            pauseOnHover={true}
            gradient={false}
            direction="left"
            className="overflow-visible py-4"
          >
            {/* Duplicate array to ensure enough content to scroll smoothly on ultra-wide screens */}
            {[...videoTestimonials, ...videoTestimonials].map((testimonial, idx) => (
              <VideoCard 
                key={`r1-${idx}`} 
                testimonial={testimonial} 
                onClick={() => setActiveVideo(testimonial)}
              />
            ))}
          </Marquee>
        </motion.div>

      </div>

      {/* Full Screen Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/95 backdrop-blur-md"
            onClick={() => setActiveVideo(null)}
          >
            <button 
              className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
              onClick={() => setActiveVideo(null)}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative w-full max-w-6xl aspect-video bg-black rounded-xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking video
            >
              <video
                className="w-full h-full object-contain"
                src={activeVideo.videoUrl}
                controls
                autoPlay
                muted
                playsInline
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </Section>
  );
}
