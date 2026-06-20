'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Sparkles, Code2, Database, LayoutTemplate, TrendingUp } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const TypingPrompt = () => {
  const text = "Build a modern SaaS platform...";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && displayedText === text) {
        setTimeout(() => setIsDeleting(true), 2000);
        return;
      }
      if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        return;
      }
      setDisplayedText(text.substring(0, displayedText.length + (isDeleting ? -1 : 1)));
    }, isDeleting ? 30 : 80);
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting]);

  return (
    <div className="flex-1 font-mono text-[10px] md:text-xs text-foreground font-medium flex items-center h-4">
      {displayedText}
      <span className="w-1 h-3.5 md:w-1.5 md:h-4 bg-blue-500 ml-0.5 animate-pulse" />
    </div>
  );
};

export const Process = () => {
  return (
    <section id="process" className="py-24 md:py-32 px-6 bg-[#fafafa] border-t border-border z-10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
              Our Proven Path to Results
            </h2>
            <p className="text-xl text-muted-foreground">
              Three steps. Engineered for scale and conversion.
            </p>
          </motion.div>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* ================= STEP 1 ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable={false} transitionSpeed={1000} className="h-full">
              <div className="bg-white border border-border shadow-sm hover:shadow-xl transition-shadow duration-300 rounded-3xl p-6 md:p-8 flex flex-col h-full relative overflow-hidden group">
                {/* Decorative glow */}
                <div className="absolute -top-20 -right-20 w-48 h-48 bg-blue-500/5 rounded-full blur-[40px] group-hover:bg-blue-500/10 transition-colors pointer-events-none" />
                
                <span className="text-blue-500 font-mono font-bold tracking-widest uppercase mb-6 block text-sm">Step 01</span>
                
                {/* Graphic Container */}
                <div className="w-full aspect-video bg-[#f8fafc] border border-border/50 rounded-2xl mb-8 flex items-center justify-center relative overflow-hidden">
                   <div className="absolute w-32 h-32 bg-blue-400/20 rounded-full blur-[40px] z-0" />
                   <motion.div 
                     animate={{ y: [0, -6, 0] }} 
                     transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                     className="bg-white border border-border shadow-md rounded-xl p-3 w-11/12 flex items-center gap-3 z-10"
                   >
                     <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-500 shrink-0">
                       <Sparkles size={14} />
                     </div>
                     <TypingPrompt />
                   </motion.div>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-3">Share your vision</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Paste your reference site or describe your business. We pull the brand, audience, and the exact conversion angle needed to win.
                </p>
              </div>
            </Tilt>
          </motion.div>

          {/* ================= STEP 2 ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable={false} transitionSpeed={1000} className="h-full">
              <div className="bg-white border border-border shadow-sm hover:shadow-xl transition-shadow duration-300 rounded-3xl p-6 md:p-8 flex flex-col h-full relative overflow-hidden group">
                <div className="absolute -top-20 -right-20 w-48 h-48 bg-cyan-500/5 rounded-full blur-[40px] group-hover:bg-cyan-500/10 transition-colors pointer-events-none" />
                
                <span className="text-cyan-500 font-mono font-bold tracking-widest uppercase mb-6 block text-sm">Step 02</span>
                
                {/* Graphic Container */}
                <div className="w-full aspect-video bg-[#f8fafc] border border-border/50 rounded-2xl mb-8 flex items-center justify-center relative overflow-hidden">
                   <div className="absolute w-32 h-32 bg-cyan-400/10 rounded-full blur-[40px] z-0" />
                   
                   <motion.div 
                     animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                     className="absolute z-30 w-36 h-10 bg-white/95 border border-border shadow-lg rounded-xl flex items-center justify-center gap-2 transform -translate-y-8"
                   >
                     <LayoutTemplate size={14} className="text-cyan-500"/>
                     <span className="text-xs font-bold text-foreground">Frontend UI</span>
                   </motion.div>

                   <motion.div 
                     animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 4, delay: 0.6, ease: "easeInOut" }}
                     className="absolute z-20 w-40 h-12 bg-white/80 border border-border shadow-md rounded-xl flex items-center justify-center gap-2 transform translate-y-1"
                   >
                     <Code2 size={14} className="text-blue-500"/>
                     <span className="text-xs font-bold text-foreground">Next.js API</span>
                   </motion.div>

                   <motion.div 
                     animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 4, delay: 1.2, ease: "easeInOut" }}
                     className="absolute z-10 w-48 h-12 bg-muted/90 border border-border shadow-sm rounded-xl flex items-center justify-center gap-2 transform translate-y-12"
                   >
                     <Database size={14} className="text-slate-500"/>
                     <span className="text-xs font-bold text-muted-foreground">Database Core</span>
                   </motion.div>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-3">We build the stack</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  On-brand designs, custom Next.js web applications, blazing fast pages, and a seamless checkout. Engineered, not templated.
                </p>
              </div>
            </Tilt>
          </motion.div>

          {/* ================= STEP 3 ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable={false} transitionSpeed={1000} className="h-full">
              <div className="bg-white border border-border shadow-sm hover:shadow-xl transition-shadow duration-300 rounded-3xl p-6 md:p-8 flex flex-col h-full relative overflow-hidden group">
                <div className="absolute -top-20 -right-20 w-48 h-48 bg-emerald-500/5 rounded-full blur-[40px] group-hover:bg-emerald-500/10 transition-colors pointer-events-none" />
                
                <span className="text-emerald-500 font-mono font-bold tracking-widest uppercase mb-6 block text-sm">Step 03</span>
                
                {/* Graphic Container */}
                <div className="w-full aspect-video bg-[#f8fafc] border border-border/50 rounded-2xl mb-8 flex items-center justify-center relative overflow-hidden px-4 pt-4">
                   <div className="absolute w-32 h-32 bg-emerald-400/20 rounded-full blur-[40px] z-0" />
                   
                   <div className="bg-white border border-border shadow-md rounded-t-xl w-full h-full flex flex-col justify-between p-3 relative z-10">
                     <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <TrendingUp size={14} className="text-emerald-500"/>
                          <span className="text-xs font-bold text-foreground">Live Revenue</span>
                        </div>
                        <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[8px] font-bold uppercase tracking-wider">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Active
                        </div>
                     </div>
                     
                     <div className="flex items-end justify-between h-14 gap-1.5 mt-2">
                       {[30, 45, 35, 60, 80, 70, 95, 100].map((h, i) => (
                          <motion.div 
                            key={i}
                            initial={{ height: 0 }}
                            whileInView={{ height: `${h}%` }}
                            transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                            className="w-full bg-gradient-to-t from-emerald-400/40 to-emerald-500 rounded-t-sm"
                          />
                       ))}
                     </div>
                   </div>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-3">Launch & Scale</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  We deploy to edge servers, optimize for global SEO, wire up marketing funnels, and ensure your business is profitable from day zero.
                </p>
              </div>
            </Tilt>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
