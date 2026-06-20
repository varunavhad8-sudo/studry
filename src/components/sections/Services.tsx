"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useInView, animate, Variants, useReducedMotion } from "framer-motion";
import Tilt from "react-parallax-tilt";

// Dynamically import Spline to avoid SSR issues
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] bg-surface rounded-3xl animate-pulse flex items-center justify-center border border-surface-border shadow-surface">
      <span className="text-textSecondary/60 font-medium tracking-widest text-sm uppercase">Loading 3D Scene…</span>
    </div>
  ),
});

interface ServiceData {
  title: string;
  description: string;
  icon: React.ReactNode;
  /** Full-saturation colour — icon foreground */
  accentColor: string;
  /** Pastel background for icon pill */
  accentBg: string;
  /** Shadow tint for the dynamic tilt shadow */
  shadowTint: string;
}

const services: ServiceData[] = [
  {
    title: "Custom React Websites",
    description:
      "We deliver blazingly fast, highly interactive custom React websites built for performance and scalability. Our Next.js architecture drives serious conversions.",
    accentColor: "#1D4ED8",   // Blue-700 — 7.5:1 on white ✅
    accentBg:    "#DBEAFE",   // Blue-100 pastel
    shadowTint:  "rgba(29, 78, 216, 0.07)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 stroke-[1.5]" stroke="currentColor">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 12H22" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "WordPress Sites",
    description:
      "Unlock the power of flexible content management with fast WordPress development. We build custom, secure, and fully responsive themes for ambitious brands.",
    accentColor: "#047857",   // Emerald-700 — 6.4:1 on white ✅
    accentBg:    "#D1FAE5",   // Emerald-100 pastel
    shadowTint:  "rgba(4, 120, 87, 0.07)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 stroke-[1.5]" stroke="currentColor">
        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.6 9l14.8-6.9" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.1 15.4l14.9 6.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 2v20" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Shopify Stores",
    description:
      "Elevate your e-commerce presence with high-converting Shopify stores. We specialise in custom theme development and optimisations that create frictionless shopping.",
    accentColor: "#B45309",   // Amber-700 — 5.7:1 on white ✅
    accentBg:    "#FEF3C7",   // Amber-100 pastel
    shadowTint:  "rgba(180, 83, 9, 0.07)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 stroke-[1.5]" stroke="currentColor">
        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "SEO Optimisation",
    description:
      "Drive organic, high-intent traffic with our data-backed SEO services. We implement advanced on-page, technical, and local SEO so your website ranks aggressively.",
    accentColor: "#7C3AED",   // Violet-600 — 6.0:1 on white ✅
    accentBg:    "#EDE9FE",   // Violet-100 pastel
    shadowTint:  "rgba(124, 58, 237, 0.07)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 stroke-[1.5]" stroke="currentColor">
        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 7v3m0 0v3m0-3h3m-3 0H7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

function StatCounter({ to, suffix = "", label }: { to: number; suffix?: string; label: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView  = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(0, to, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) nodeRef.current.textContent = Math.round(value).toString() + suffix;
        },
      });
      return () => controls.stop();
    }
  }, [to, suffix, inView]);

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-[#E5E5E5] shadow-surface">
      <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
        <span ref={nodeRef}>0{suffix}</span>
      </div>
      <div className="text-sm md:text-base text-textSecondary uppercase tracking-wider font-medium text-center">
        {label}
      </div>
    </div>
  );
}

// Shadow-shift tilt wrapper — shared with ProblemSection
function ServiceTiltCard({ service }: { service: ServiceData }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const handleTiltMove = ({ tiltX, tiltY }: { tiltX: number; tiltY: number }) => {
    if (!cardRef.current || shouldReduceMotion) return;
    const shadowX = -tiltY * 1.2;
    const shadowY =  tiltX * 1.2;
    cardRef.current.style.setProperty(
      "--svc-shadow",
      `${shadowX.toFixed(1)}px ${shadowY.toFixed(1)}px 32px ${service.shadowTint}, 0 4px 24px rgba(0,0,0,0.06)`
    );
  };

  const handleTiltReset = () => {
    if (!cardRef.current) return;
    cardRef.current.style.setProperty("--svc-shadow", "0 4px 24px rgba(0,0,0,0.06)");
  };

  return (
    <Tilt
      tiltMaxAngleX={shouldReduceMotion ? 0 : 7}
      tiltMaxAngleY={shouldReduceMotion ? 0 : 7}
      glareEnable={false}
      transitionSpeed={1400}
      onMove={handleTiltMove}
      onLeave={handleTiltReset}
      className="h-full"
      style={{ willChange: "transform", transformStyle: "preserve-3d" }}
    >
      <div
        ref={cardRef}
        className="group relative bg-white p-8 md:p-10 rounded-2xl h-full flex flex-col overflow-hidden"
        style={{
          border: "1px solid #E5E5E5",
          boxShadow: "var(--svc-shadow, 0 4px 24px rgba(0,0,0,0.06))",
          transition: "box-shadow 0.15s ease",
        }}
      >
        {/* Icon pill — pastel bg + saturated icon, no float animation (cleaner on white) */}
        <div
          className="mb-7 w-14 h-14 rounded-xl flex items-center justify-center self-start"
          style={{ backgroundColor: service.accentBg, color: service.accentColor }}
        >
          {service.icon}
        </div>

        <h3 className="text-2xl font-heading font-bold text-textPrimary mb-3">{service.title}</h3>
        <p className="text-textSecondary leading-relaxed text-base md:text-lg flex-grow">{service.description}</p>

        {/* Bottom accent bar — accent identity marker */}
        <div
          className="mt-6 w-8 h-[3px] rounded-full opacity-60"
          style={{ backgroundColor: service.accentColor }}
        />
      </div>
    </Tilt>
  );
}

export function Services() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  // Scroll-triggered 3D entrance — rotateY same as ProblemSection
  const cardVariants: Variants = {
    hidden:  { opacity: 0, y: 30, rotateY: -10, scale: 0.97 },
    visible: { opacity: 1, y: 0, rotateY: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="services" className="relative py-24 md:py-32 bg-background overflow-hidden z-10">

      {/* Drifting pastel gradient mesh — pale tones, low opacity */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden style={{ zIndex: 0 }}>
        <motion.div
          animate={shouldReduceMotion ? {} : { x: ["-5%", "8%", "-5%"], y: ["-5%", "8%", "-5%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute"
          style={{
            top: "-15%", right: "-10%",
            width: "60vw", height: "60vw", maxWidth: 700, maxHeight: 700,
            background: "radial-gradient(ellipse, rgba(219,234,254,0.65) 0%, transparent 68%)",
            filter: "blur(60px)", borderRadius: "50%",
          }}
        />
        <motion.div
          animate={shouldReduceMotion ? {} : { x: ["5%", "-10%", "5%"], y: ["8%", "-5%", "8%"] }}
          transition={{ duration: 36, repeat: Infinity, ease: "easeInOut" }}
          className="absolute"
          style={{
            bottom: "-10%", left: "-5%",
            width: "55vw", height: "55vw", maxWidth: 650, maxHeight: 650,
            background: "radial-gradient(ellipse, rgba(237,233,254,0.60) 0%, transparent 65%)",
            filter: "blur(60px)", borderRadius: "50%",
          }}
        />
      </div>
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-[80px]">

        {/* Section Header */}
        <div className="flex flex-col mb-16 md:mb-24">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-primary uppercase tracking-widest text-sm font-semibold mb-4 inline-block"
            >
              Our Expertise
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-textPrimary leading-tight"
            >
              Digital solutions designed to scale your business.
            </motion.h2>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{ perspective: 1200 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              style={{ transformStyle: "preserve-3d", willChange: "transform, opacity" }}
            >
              <ServiceTiltCard service={service} />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <StatCounter to={150} suffix="+" label="Websites Delivered" />
          <StatCounter to={65}  suffix="%" label="Avg. Conversion Boost" />
          <StatCounter to={10}  suffix="+" label="Years Experience" />
        </motion.div>
      </div>
    </section>
  );
}
