'use client';
import { motion } from 'framer-motion';
import { AlertTriangle, Clock, TrendingDown, Zap, ShieldCheck, TrendingUp, Layers } from 'lucide-react';

export const ProblemSolution = () => {
  return (
    <section className="relative py-24 md:py-32 bg-[#fafafa] overflow-hidden z-10 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
              The high cost of a <br className="hidden md:block"/><span className="text-muted-foreground">generic digital presence.</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              You are spending thousands to drive traffic, but if your platform is built on cheap templates and legacy code, you are leaking revenue every single day.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative">
          
          {/* Subtle connection line hidden on mobile */}
          <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-px bg-border z-0" />

          {/* ================= THE PROBLEM ================= */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full relative z-10"
          >
            <div className="flex flex-col h-full bg-white/50 backdrop-blur-sm border border-border/60 shadow-sm rounded-3xl p-8 md:p-12">
               
               <div className="flex items-center gap-4 mb-8 border-b border-border/50 pb-8">
                 <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center shrink-0">
                   <Layers className="text-muted-foreground w-6 h-6" />
                 </div>
                 <div>
                   <h3 className="text-2xl font-bold text-foreground">The Templated Standard</h3>
                   <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest mt-1">Status Quo</p>
                 </div>
               </div>

               <div className="space-y-6 flex-1">
                 <div className="flex gap-4">
                   <div className="mt-1"><Clock className="w-5 h-5 text-red-500/70" /></div>
                   <div>
                     <h4 className="text-lg font-bold text-foreground mb-1">Performance Bottlenecks</h4>
                     <p className="text-muted-foreground text-sm leading-relaxed">Bloated theme code leads to 3s+ load times, heavily penalizing your SEO rankings and causing instant mobile abandonment.</p>
                   </div>
                 </div>
                 <div className="flex gap-4">
                   <div className="mt-1"><AlertTriangle className="w-5 h-5 text-red-500/70" /></div>
                   <div>
                     <h4 className="text-lg font-bold text-foreground mb-1">Brand Degradation</h4>
                     <p className="text-muted-foreground text-sm leading-relaxed">Using the same layouts as your competitors makes it impossible to command premium pricing. You look like a commodity.</p>
                   </div>
                 </div>
                 <div className="flex gap-4">
                   <div className="mt-1"><TrendingDown className="w-5 h-5 text-red-500/70" /></div>
                   <div>
                     <h4 className="text-lg font-bold text-foreground mb-1">Conversion Leaks</h4>
                     <p className="text-muted-foreground text-sm leading-relaxed">Friction-heavy UX and untrustworthy mobile layouts result in high bounce rates and wasted ad spend.</p>
                   </div>
                 </div>
               </div>

            </div>
          </motion.div>


          {/* ================= THE SOLUTION ================= */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full relative z-10"
          >
            <div className="flex flex-col h-full bg-white border border-blue-100 shadow-[0_8px_40px_rgba(59,130,246,0.08)] rounded-3xl p-8 md:p-12 relative overflow-hidden group">
               
               {/* Ambient Glow */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[60px] group-hover:bg-blue-500/10 transition-colors pointer-events-none" />

               <div className="flex items-center gap-4 mb-8 border-b border-border/50 pb-8 relative z-10">
                 <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                   <Zap className="text-blue-600 w-6 h-6" fill="currentColor" />
                 </div>
                 <div>
                   <h3 className="text-2xl font-bold text-foreground">The Engineered Advantage</h3>
                   <p className="text-sm text-blue-600 font-bold uppercase tracking-widest mt-1">Our Approach</p>
                 </div>
               </div>

               <div className="space-y-6 flex-1 relative z-10">
                 <div className="flex gap-4">
                   <div className="mt-1"><Zap className="w-5 h-5 text-blue-500" /></div>
                   <div>
                     <h4 className="text-lg font-bold text-foreground mb-1">Edge Performance</h4>
                     <p className="text-muted-foreground text-sm leading-relaxed">Custom Next.js architecture deployed to the edge. Sub-second load times that Google loves and users demand.</p>
                   </div>
                 </div>
                 <div className="flex gap-4">
                   <div className="mt-1"><ShieldCheck className="w-5 h-5 text-blue-500" /></div>
                   <div>
                     <h4 className="text-lg font-bold text-foreground mb-1">Bespoke Authority</h4>
                     <p className="text-muted-foreground text-sm leading-relaxed">Pixel-perfect, custom React UI that instantly establishes extreme trust and positions you as the premium option.</p>
                   </div>
                 </div>
                 <div className="flex gap-4">
                   <div className="mt-1"><TrendingUp className="w-5 h-5 text-blue-500" /></div>
                   <div>
                     <h4 className="text-lg font-bold text-foreground mb-1">Frictionless Conversion</h4>
                     <p className="text-muted-foreground text-sm leading-relaxed">Data-driven UX designed strictly for revenue generation. Every interaction is engineered to turn a visitor into a client.</p>
                   </div>
                 </div>
               </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
