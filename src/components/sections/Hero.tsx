'use client';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative w-full pt-40 pb-20 px-6 overflow-hidden flex flex-col items-center justify-center text-center bg-white z-0 min-h-[90vh]">
      {/* Animated Fluid Gradient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="bg-shape bg-shape-1" />
        <div className="bg-shape bg-shape-2" />
        <div className="bg-shape bg-shape-3" />
      </div>

      {/* Halftone Dot Overlay */}
      <div className="halftone-overlay" />


      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="px-4 py-1.5 mb-8 rounded-full border border-border bg-white shadow-sm text-sm font-medium text-muted-foreground flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          The standard for modern web design
        </motion.div>

        {/* Massive Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-6xl md:text-8xl font-bold tracking-tight text-foreground text-balance mb-6 leading-[1.1]"
        >
          From vision, <br className="hidden md:block" />
          <span className="text-muted-foreground">to live revenue.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 text-balance"
        >
          Watch us extract your brand, design the assets, launch the web apps, and wire up conversions. Your digital presence, engineered for growth.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a href="#contact" className="w-full sm:w-auto">
            <button className="w-full px-8 py-4 bg-white text-black border-2 border-black rounded-full font-bold shadow-xl hover:scale-105 transition-transform duration-300">
              Contact Us
            </button>
          </a>
          <a href="#video-testimonials" className="w-full sm:w-auto">
            <button className="w-full px-8 py-4 bg-white text-foreground border border-border rounded-full font-semibold shadow-sm hover:bg-muted transition-colors duration-300">
              View our work
            </button>
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
        className="relative z-10 w-full max-w-5xl mx-auto mt-20"
      >
        <div className="relative w-full aspect-video rounded-2xl border border-border bg-white shadow-2xl overflow-hidden">
          {/* Inner Mockup with fixed desktop dimensions, absolute centering, and responsive scaling */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1024px] h-[576px] bg-[#09090b] flex flex-col origin-center scale-[0.3] min-[360px]:scale-[0.34] min-[400px]:scale-[0.38] min-[480px]:scale-[0.45] sm:scale-[0.6] min-[700px]:scale-[0.67] md:scale-[0.73] min-[880px]:scale-[0.84] lg:scale-[0.96] xl:scale-100 transition-all duration-300"
          >
            {/* Mock Browser Bar */}
            <div className="h-10 border-b border-border bg-muted flex items-center px-4 gap-2 shrink-0">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-gray-300" />
                <div className="w-3 h-3 rounded-full bg-gray-300" />
                <div className="w-3 h-3 rounded-full bg-gray-300" />
              </div>
            </div>
            {/* Ultra-Premium Animated Dashboard CSS Graphic (DARK MODE) */}
            <div className="flex-1 bg-[#09090b] relative overflow-hidden flex flex-col p-6 gap-5 group border-t border-white/10">
               {/* Dashboard Header / Browser Chrome */}
               <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shadow-sm">
                       <div className="w-4 h-4 bg-blue-500 rounded-sm shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                     </div>
                     <div className="w-24 h-4 bg-white/10 rounded-md" />
                  </div>
                  <div className="flex gap-4 items-center">
                     <div className="w-48 h-8 bg-white/5 border border-white/10 rounded-full shadow-sm" />
                     <div className="w-8 h-8 rounded-full bg-white/10" />
                  </div>
               </div>
               
               {/* Dashboard Body */}
               <div className="flex-1 flex gap-6 overflow-hidden">
                  {/* Detailed Sidebar */}
                  <div className="flex w-48 flex-col gap-5 border-r border-white/10 pr-5 shrink-0">
                     <div className="w-full h-10 bg-white/5 border border-white/10 shadow-sm rounded-lg flex items-center px-3 gap-3">
                       <div className="w-4 h-4 bg-blue-500 rounded-sm shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                       <div className="w-20 h-2 bg-white/60 rounded-full" />
                     </div>
                     <div className="flex flex-col gap-3 mt-2">
                       <div className="w-3/4 h-2.5 bg-white/10 rounded-full" />
                       <div className="w-5/6 h-2.5 bg-white/10 rounded-full" />
                       <div className="w-2/3 h-2.5 bg-white/10 rounded-full" />
                       <div className="w-4/5 h-2.5 bg-white/10 rounded-full" />
                     </div>
                     
                     {/* Pro Badge */}
                     <div className="mt-auto w-full p-4 bg-gradient-to-br from-indigo-600 to-fuchsia-600 rounded-xl text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-transform hover:scale-105 cursor-pointer relative overflow-hidden">
                       <div className="absolute inset-0 bg-white/5 mix-blend-overlay pointer-events-none" />
                       <div className="w-1/2 h-2.5 bg-white/90 rounded-full mb-3" />
                       <div className="w-full h-1.5 bg-white/40 rounded-full mb-1.5" />
                       <div className="w-3/4 h-1.5 bg-white/40 rounded-full" />
                     </div>
                  </div>
                  
                  {/* Main Content Area */}
                  <div className="flex-1 bg-[#121214] border border-white/10 shadow-2xl rounded-2xl p-6 flex flex-col gap-6 relative overflow-hidden group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-500">
                     {/* Glass Reflection Sweep */}
                     <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out pointer-events-none z-30" />
                     
                     {/* Top Metrics */}
                     <div className="flex gap-4">
                        {/* Metric 1 */}
                        <div className="flex-1 bg-white/5 border border-white/10 shadow-sm rounded-xl flex flex-col justify-between p-5 relative overflow-hidden">
                           <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/10 rounded-bl-full" />
                           <div className="flex justify-between items-start mb-4">
                              <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                                 <span className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                              </div>
                              <div className="px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[11px] font-bold text-emerald-400 shadow-sm">+124%</div>
                           </div>
                           <div className="w-3/4 h-6 bg-white/90 rounded-md mb-2" />
                           <div className="w-1/2 h-2 bg-white/20 rounded-full" />
                        </div>
                        
                        {/* Metric 2 */}
                        <div className="flex-1 bg-white/5 border border-white/10 shadow-sm rounded-xl flex flex-col justify-between p-5 relative overflow-hidden">
                           <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/10 rounded-bl-full" />
                           <div className="flex justify-between items-start mb-4">
                              <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                                 <div className="w-4 h-4 bg-blue-400 rounded-sm shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                              </div>
                           </div>
                           <div className="w-2/3 h-6 bg-white/90 rounded-md mb-2" />
                           <div className="w-1/2 h-2 bg-white/20 rounded-full" />
                        </div>
                     </div>
                     
                     {/* Dynamic Main Chart Area */}
                     <div className="flex-1 bg-black/40 rounded-xl border border-white/5 p-5 flex items-end gap-3 relative overflow-hidden">
                        {/* Grid Lines */}
                        <div className="absolute inset-0 flex flex-col justify-between py-6 pointer-events-none">
                           <div className="w-full h-px bg-white/5" />
                           <div className="w-full h-px bg-white/5" />
                           <div className="w-full h-px bg-white/5" />
                           <div className="w-full h-px bg-white/5" />
                        </div>
                        
                        {/* Complex Animated Graph */}
                        {[20, 35, 25, 60, 45, 80, 65, 95, 85, 100].map((h, i) => (
                           <motion.div 
                             key={i}
                             className="flex-1 bg-gradient-to-t from-blue-600/80 to-cyan-400/90 rounded-t-md z-10 relative border-t border-cyan-300"
                             initial={{ height: 0, opacity: 0 }}
                             animate={{ height: `${h}%`, opacity: 1 }}
                             transition={{ duration: 1.2, delay: 0.3 + (i * 0.08), ease: [0.16, 1, 0.3, 1] }}
                           >
                             {/* Drop shadow glow */}
                             {h > 50 && (
                               <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-cyan-400 blur-xl opacity-60 pointer-events-none" />
                             )}
                           </motion.div>
                        ))}
                     </div>
  
                     {/* Floating Toast Notification */}
                     <motion.div 
                       className="absolute bottom-6 right-6 bg-[#18181b] border border-white/10 px-5 py-4 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex items-center gap-4 z-40"
                       initial={{ x: 200, opacity: 0 }}
                       animate={{ x: 0, opacity: 1 }}
                       transition={{ duration: 0.8, delay: 2.2, type: "spring", stiffness: 150, damping: 15 }}
                     >
                       <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                          <div className="w-3 h-4 border-b-2 border-r-2 border-emerald-400 transform rotate-45 -mt-1" />
                       </div>
                       <div className="flex flex-col">
                          <div className="text-sm font-bold text-white">New Sale Processed!</div>
                          <div className="text-xs font-medium text-emerald-400 mt-0.5">+$4,999.00 USD</div>
                       </div>
                     </motion.div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
