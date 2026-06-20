'use client';
import { motion } from 'framer-motion';

export const BentoFeatures = () => {
  return (
    <section className="py-24 px-6 bg-white border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Built for every business.
          </h2>
          <p className="text-xl text-muted-foreground">
            SaaS, e-commerce, fitness, finance. Every niche, on-brand.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Bento Box 1: Web Apps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-3xl bg-white border border-border p-8 hover:shadow-lg transition-all flex flex-col"
          >
            <div className="h-64 mb-8 rounded-xl bg-gradient-to-b from-muted/30 to-muted/10 border border-border/50 overflow-hidden flex items-center justify-center relative p-6 perspective-1000">
               <div className="w-full h-full max-w-sm bg-[#09090b] border border-border/20 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col overflow-hidden group-hover:-translate-y-2 group-hover:rotate-x-2 transition-all duration-500 relative z-10">
                  {/* Browser Header Dark */}
                  <div className="h-8 bg-[#18181b] border-b border-white/10 flex items-center px-3 gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-red-500/80" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                      <div className="w-2 h-2 rounded-full bg-green-500/80" />
                    </div>
                    {/* Address Bar */}
                    <div className="flex-1 h-5 bg-[#27272a] rounded flex items-center justify-center">
                       <div className="w-24 h-1 bg-white/20 rounded-full" />
                    </div>
                  </div>
                  {/* AI SaaS Landing Page Body */}
                  <div className="flex-1 flex flex-col relative overflow-hidden">
                     {/* Glow */}
                     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-32 bg-indigo-500/30 blur-2xl rounded-full" />
                     
                     {/* Navbar */}
                     <div className="h-8 flex items-center justify-between px-4 border-b border-white/5 relative z-10">
                        <div className="w-12 h-2 bg-white/80 rounded-full" />
                        <div className="w-10 h-3 bg-white rounded-sm" />
                     </div>
                     
                     {/* Hero Section */}
                     <div className="pt-6 pb-4 flex flex-col items-center justify-center gap-2.5 px-4 text-center relative z-10">
                        {/* Pill Badge */}
                        <div className="px-2 py-0.5 bg-white/5 border border-white/10 rounded-full flex items-center gap-1 mb-1">
                           <span className="w-1 h-1 bg-indigo-400 rounded-full animate-pulse" />
                           <div className="w-16 h-1 bg-white/60 rounded-full" />
                        </div>
                        {/* Headline */}
                        <div className="w-11/12 h-5 bg-white rounded-md" />
                        <div className="w-3/4 h-5 bg-white/80 rounded-md" />
                        {/* Subheadline */}
                        <div className="w-4/5 h-1.5 bg-white/30 rounded-full mt-1" />
                        
                        {/* High Converting Input */}
                        <div className="w-5/6 h-7 bg-white/5 border border-white/10 rounded-md mt-2 flex items-center p-1 pl-2 gap-2">
                           <div className="flex-1 h-1.5 bg-white/20 rounded-full" />
                           <div className="w-12 h-full bg-indigo-500 rounded-sm shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                        </div>
                     </div>
                  </div>
               </div>
               <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-white to-transparent z-20" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Web Applications</h3>
            <p className="text-muted-foreground">
              Turn complex business logic into lightning-fast, scalable React & Next.js web applications.
            </p>
          </motion.div>

          {/* Bento Box 2: E-commerce */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-3xl bg-white border border-border p-8 hover:shadow-lg transition-all flex flex-col"
          >
            <div className="h-64 mb-8 rounded-xl bg-gradient-to-b from-muted/30 to-muted/10 border border-border/50 overflow-hidden flex items-center justify-center relative">
               <motion.div className="w-56 bg-white border border-border rounded-2xl shadow-2xl p-5 flex flex-col gap-2 group-hover:-translate-y-4 transition-transform duration-500 z-10">
                  {/* SEO Graphic */}
                  <div className="w-full flex items-center gap-3 mb-2 border-b border-border pb-3">
                     <div className="w-6 h-6 rounded-md bg-green-100 flex items-center justify-center text-green-600 font-black text-[10px]">#1</div>
                     <div className="flex flex-col gap-1.5">
                        <div className="w-24 h-2 bg-foreground/20 rounded-full" />
                        <div className="w-16 h-1.5 bg-muted rounded-full" />
                     </div>
                  </div>
                  {/* Traffic Chart */}
                  <div className="flex items-end justify-between h-20 gap-1.5 pt-2">
                     {[30, 45, 40, 60, 55, 80, 100].map((h, i) => (
                        <div key={i} className="w-full bg-green-500 rounded-t-sm" style={{ height: `${h}%`, opacity: 0.3 + (i * 0.1) }} />
                     ))}
                  </div>
                  <div className="w-full flex justify-between items-center mt-2 border-t border-border pt-3">
                     <div className="w-16 h-2 bg-muted rounded" />
                     <div className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">+245% Traffic</div>
                  </div>
               </motion.div>
               <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-white to-transparent z-20" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Search Engine Optimization</h3>
            <p className="text-muted-foreground">
              Outrank your competitors and capture high-intent organic traffic with modern, technical SEO architectures.
            </p>
          </motion.div>

          {/* Bento Box 3: Marketing & SEO (Full width) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="group md:col-span-2 relative overflow-hidden rounded-3xl bg-white border border-border p-8 md:p-12 hover:shadow-lg transition-all flex flex-col md:flex-row gap-8 items-center"
          >
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-foreground mb-4">Paid Ads & Growth</h3>
              <p className="text-muted-foreground text-lg">
                Drop in your competitors and let us engineer a performance marketing strategy that out-converts them. Launch paid ads across Meta, LinkedIn, and Google instantly.
              </p>
            </div>
            <div className="flex-1 w-full h-56 md:h-72 rounded-xl bg-gradient-to-b from-muted/30 to-muted/10 border border-border/50 flex flex-col items-center justify-center overflow-hidden relative p-4 md:p-8">
               {/* Mock Search Result */}
               <div className="w-full max-w-md flex flex-col gap-4 z-10 group-hover:-translate-y-2 transition-transform duration-500">
                 {/* Search Bar */}
                 <div className="w-full h-14 bg-white border border-border rounded-full shadow-lg flex items-center px-5 gap-4">
                   <div className="w-5 h-5 border-2 border-muted-foreground rounded-full" />
                   <div className="w-40 h-2 bg-muted rounded-full" />
                 </div>
                 
                 {/* Top Result Card */}
                 <div className="w-full bg-white border border-blue-500/30 rounded-2xl shadow-xl p-6 flex flex-col gap-4 relative overflow-hidden">
                   <div className="absolute top-0 left-0 w-full h-1 bg-blue-500" />
                   <div className="flex items-center justify-between">
                     <div className="flex items-center gap-3">
                       <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center">
                         <div className="w-4 h-4 bg-blue-500 rounded-full" />
                       </div>
                       <div className="flex flex-col gap-1">
                         <div className="w-24 h-2 bg-muted rounded-full" />
                         <div className="w-16 h-1.5 bg-muted/60 rounded-full" />
                       </div>
                     </div>
                     {/* Badge */}
                     <div className="px-3 py-1 bg-green-50 text-green-700 border border-green-200 text-[10px] font-black uppercase tracking-wider rounded-full shadow-sm">
                       Rank #1
                     </div>
                   </div>
                   <div className="w-56 h-4 bg-blue-500/20 rounded-md mt-1" />
                   <div className="flex flex-col gap-2 mt-2">
                     <div className="w-full h-2 bg-muted rounded-full" />
                     <div className="w-4/5 h-2 bg-muted rounded-full" />
                   </div>
                 </div>
               </div>
               <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-white to-transparent z-20" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
