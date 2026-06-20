'use client';
import { motion } from 'framer-motion';

const testimonials = [
  { tag: 'Startup Founder', quote: 'They didn\'t just build a website. They built an asset that sells.' },
  { tag: 'Agency Owner', quote: 'The cleanest codebase I have ever seen. Scaled perfectly.' },
  { tag: 'E-commerce Brand', quote: 'Bookings doubled within the first month. Worth every rupee.' },
  { tag: 'SaaS Founder', quote: 'The design is premium. The conversions are premium. Perfect.' },
  { tag: 'Local Business', quote: 'We outranked our competitors in 3 weeks. Incredible SEO.' },
  { tag: 'Coach & Consultant', quote: 'My funnel is completely automated now. Absolute game changer.' },
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-white border-t border-border overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
          Wall of Love
        </h2>
        <p className="text-xl text-muted-foreground">
          Solo founders, agencies, and indie hackers shipping with us.
        </p>
      </div>

      <div className="relative w-full flex flex-col gap-6">
        {/* Marquee row 1 */}
        <div className="flex overflow-hidden w-full relative">
          {/* Gradient Masks for smooth fade out at edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
          
          <motion.div
            className="flex gap-6 w-max pr-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
          >
            {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="w-[350px] p-6 rounded-2xl border border-border bg-white shadow-sm shrink-0 flex flex-col justify-between">
                <div>
                  <div className="text-sm font-bold text-blue-500 mb-3 uppercase tracking-wider">{t.tag}</div>
                  <p className="text-foreground text-lg leading-relaxed font-medium">"{t.quote}"</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        
        {/* Marquee row 2 (reverse) */}
        <div className="flex overflow-hidden w-full relative mt-4">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

          <motion.div
            className="flex gap-6 w-max pr-6"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 45 }}
          >
            {[...testimonials, ...testimonials, ...testimonials, ...testimonials].reverse().map((t, i) => (
              <div key={i} className="w-[350px] p-6 rounded-2xl border border-border bg-white shadow-sm shrink-0 flex flex-col justify-between">
                <div>
                  <div className="text-sm font-bold text-indigo-500 mb-3 uppercase tracking-wider">{t.tag}</div>
                  <p className="text-foreground text-lg leading-relaxed font-medium">"{t.quote}"</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
