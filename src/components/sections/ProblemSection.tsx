"use client";

import { useRef } from "react";
import { motion, Variants, useReducedMotion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Section } from "@/components/ui/Section";

// ─── Per-card accent system ────────────────────────────────────────────────────
// On white: icon bg = pastel (very low saturation tint), icon itself = saturated colour.
// The saturated border trick from dark-mode does NOT work on white — border
// disappears into the background. We use a 1px #E5E5E5 card border instead.
interface PainPoint {
  title: string;
  description: string;
  icon: React.ReactNode;
  /** Full-saturation colour — used for the icon itself (readable on pastel bg) */
  accentColor: string;
  /** Pastel background for the icon pill */
  accentBg: string;
  /** Very soft shadow tint to add barely-there colour depth to card shadow */
  shadowTint: string;
  /** Pastel blob colour for the drifting background mesh */
  blobColor: string;
}

const painPoints: PainPoint[] = [
  {
    title: "Site Looks Outdated?",
    description:
      "An outdated design immediately destroys trust. We modernise your brand with a premium, mobile-first interface that reassures potential clients.",
    accentColor: "#DC2626",     // Red-600 — 5.9:1 on white ✅ WCAG AA
    accentBg:    "#FEE2E2",     // Red-100 pastel
    shadowTint:  "rgba(220, 38, 38, 0.06)",
    blobColor:   "rgba(254, 226, 226, 0.7)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 stroke-[2]" stroke="currentColor">
        <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Not Showing Up On Google?",
    description:
      "If they can't find you, they hire your competitors. We implement aggressive, data-driven SEO strategies baked right into the codebase.",
    accentColor: "#1D4ED8",     // Blue-700 — 7.5:1 on white ✅ WCAG AA
    accentBg:    "#DBEAFE",     // Blue-100 pastel
    shadowTint:  "rgba(29, 78, 216, 0.06)",
    blobColor:   "rgba(219, 234, 254, 0.7)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 stroke-[2]" stroke="currentColor">
        <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Slow & Losing Visitors?",
    description:
      "Every second of load time costs conversions. We build on blazing-fast modern architectures like Next.js so your pages load instantly.",
    accentColor: "#B45309",     // Amber-700 — 5.7:1 on white ✅ WCAG AA
    accentBg:    "#FEF3C7",     // Amber-100 pastel
    shadowTint:  "rgba(180, 83, 9, 0.06)",
    blobColor:   "rgba(254, 243, 199, 0.7)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 stroke-[2]" stroke="currentColor">
        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "No Clear Call-to-Action?",
    description:
      "Traffic is useless if it doesn't convert. We design intuitive user flows and magnetic CTAs that guide visitors effortlessly to booking.",
    accentColor: "#7C3AED",     // Violet-600 — 6.0:1 on white ✅ WCAG AA
    accentBg:    "#EDE9FE",     // Violet-100 pastel
    shadowTint:  "rgba(124, 58, 237, 0.06)",
    blobColor:   "rgba(237, 233, 254, 0.7)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 stroke-[2]" stroke="currentColor">
        <path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

// ─── Tilt card with shadow-shift glare replacement ────────────────────────────
//
// On white, the library's `glareEnable` produces a white-on-white overlay that
// is invisible. We replace it with a dynamic shadow-shift: as the card tilts,
// its box-shadow moves in the OPPOSITE direction to simulate the light source
// staying fixed while the card moves. This is the physically correct metaphor.
//
// Implementation: we use CSS custom properties on the Tilt wrapper, then
// intercept onMove to update the shadow offset. react-parallax-tilt's
// `onMove` callback provides tiltX/tiltY in degrees.
interface TiltCardProps {
  point: PainPoint;
  index: number;
}

function TiltCard({ point, index }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const handleTiltMove = ({ tiltX, tiltY }: { tiltX: number; tiltY: number }) => {
    if (!cardRef.current || shouldReduceMotion) return;
    // Shadow moves OPPOSITE to tilt: card tilts right (+tiltY) → shadow shifts left
    // Clamp to ±12px so it stays subtle
    const shadowX = -tiltY * 1.2; // tiltY drives horizontal tilt
    const shadowY =  tiltX * 1.2; // tiltX drives vertical tilt
    cardRef.current.style.setProperty(
      "--tilt-shadow",
      `${shadowX.toFixed(1)}px ${shadowY.toFixed(1)}px 32px ${point.shadowTint}, 0 4px 24px rgba(0,0,0,0.06)`
    );
  };

  const handleTiltReset = () => {
    if (!cardRef.current) return;
    cardRef.current.style.setProperty(
      "--tilt-shadow",
      `0 4px 24px rgba(0,0,0,0.06)`
    );
  };

  return (
    <Tilt
      tiltMaxAngleX={shouldReduceMotion ? 0 : 8}
      tiltMaxAngleY={shouldReduceMotion ? 0 : 8}
      // Glare disabled — we handle the light-shift ourselves
      glareEnable={false}
      transitionSpeed={1400}
      onMove={handleTiltMove}
      onLeave={handleTiltReset}
      className="h-full"
      style={{ willChange: "transform", transformStyle: "preserve-3d" }}
    >
      {/*
       * WHITE SURFACE CARD
       * ─────────────────
       * Background : #FFFFFF (pure white lifts above #FAFAFA canvas)
       * Border     : 1px solid #E5E5E5 — defines the card edge
       * Shadow     : CSS variable driven by tilt, default = soft ambient
       *
       * What NOT to do on white:
       * ✗ coloured border → dissolves into background, invisible
       * ✗ glare overlay   → white-on-white is invisible
       * ✗ neon box-shadow glow → looks broken on light backgrounds
       */}
      <div
        ref={cardRef}
        className="relative bg-white p-8 md:p-10 rounded-2xl h-full flex flex-col md:flex-row gap-7 items-start overflow-hidden"
        style={{
          border: "1px solid #E5E5E5",
          boxShadow: "var(--tilt-shadow, 0 4px 24px rgba(0,0,0,0.06))",
          transition: "box-shadow 0.15s ease",
        }}
      >
        {/*
         * ICON PILL
         * ─────────
         * bg       = pastel version of accent (e.g. #FEE2E2 for red)
         * icon     = saturated version of accent (e.g. #DC2626)
         * No glowing border, no bloom — pastel bg + saturated icon is
         * the correct light-theme icon treatment.
         */}
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
          style={{
            backgroundColor: point.accentBg,
            color: point.accentColor,
          }}
        >
          {point.icon}
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1">
          <h3 className="text-xl md:text-2xl font-heading font-bold text-textPrimary mb-3 leading-snug">
            {point.title}
          </h3>
          <p className="text-textSecondary leading-relaxed text-base md:text-lg">
            {point.description}
          </p>
          {/* Subtle accent bottom-left bar — gives each card a unique colour identity */}
          <div
            className="mt-6 w-8 h-[3px] rounded-full"
            style={{ backgroundColor: point.accentColor, opacity: 0.6 }}
          />
        </div>
      </div>
    </Tilt>
  );
}

// ─── Main Section ──────────────────────────────────────────────────────────────
export function ProblemSection() {
  const shouldReduceMotion = useReducedMotion();

  // Stagger container
  const containerVariants: Variants = {
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  // Scroll-triggered 3D entrance — rotateY from -10° → 0° + y lift
  // Keeps the exact same animation as requested, just on a white card now.
  const cardVariants: Variants = {
    hidden:  { opacity: 0, y: 40, rotateY: -10, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      scale: 1,
      transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <Section
      id="problems"
      className="bg-surface py-24 md:py-32 relative overflow-hidden z-10 border-y border-surface-border"
    >
      {/*
       * BACKGROUND: drifting pastel gradient mesh
       * ─────────────────────────────────────────
       * Rule: very pale pastel tones, NOT dark saturated blobs.
       * Each blob corresponds to one card's accent colour family.
       * Opacity kept very low (<10%) so it's subliminal — adds warmth
       * without making the section look dirty.
       *
       * Each blob animates independently (drift) for a living-wallpaper feel.
       */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ zIndex: 0 }}
        aria-hidden
      >
        {/* Red pastel — top-left */}
        <motion.div
          animate={shouldReduceMotion ? {} : {
            x: ["-5%", "8%", "-5%"],
            y: ["-8%", "5%", "-8%"],
          }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
          className="absolute"
          style={{
            top: "-10%",
            left: "-5%",
            width: "55vw",
            height: "55vw",
            maxWidth: 700,
            maxHeight: 700,
            background: "radial-gradient(ellipse, rgba(254,226,226,0.80) 0%, transparent 68%)",
            filter: "blur(50px)",
            borderRadius: "50%",
          }}
        />

        {/* Blue pastel — top-right */}
        <motion.div
          animate={shouldReduceMotion ? {} : {
            x: ["5%", "-10%", "5%"],
            y: ["-5%", "10%", "-5%"],
          }}
          transition={{ duration: 34, repeat: Infinity, ease: "easeInOut" }}
          className="absolute"
          style={{
            top: "-5%",
            right: "-10%",
            width: "50vw",
            height: "50vw",
            maxWidth: 640,
            maxHeight: 640,
            background: "radial-gradient(ellipse, rgba(219,234,254,0.75) 0%, transparent 65%)",
            filter: "blur(55px)",
            borderRadius: "50%",
          }}
        />

        {/* Amber pastel — bottom-left */}
        <motion.div
          animate={shouldReduceMotion ? {} : {
            x: ["-8%", "10%", "-8%"],
            y: ["5%", "-8%", "5%"],
          }}
          transition={{ duration: 38, repeat: Infinity, ease: "easeInOut" }}
          className="absolute"
          style={{
            bottom: "-10%",
            left: "5%",
            width: "45vw",
            height: "45vw",
            maxWidth: 580,
            maxHeight: 580,
            background: "radial-gradient(ellipse, rgba(254,243,199,0.72) 0%, transparent 68%)",
            filter: "blur(50px)",
            borderRadius: "50%",
          }}
        />

        {/* Violet pastel — bottom-right */}
        <motion.div
          animate={shouldReduceMotion ? {} : {
            x: ["8%", "-6%", "8%"],
            y: ["8%", "-5%", "8%"],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute"
          style={{
            bottom: "-8%",
            right: "-5%",
            width: "48vw",
            height: "48vw",
            maxWidth: 620,
            maxHeight: 620,
            background: "radial-gradient(ellipse, rgba(237,233,254,0.75) 0%, transparent 65%)",
            filter: "blur(55px)",
            borderRadius: "50%",
          }}
        />
      </div>

      {/* ── Content ──────────────────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 md:px-[80px]">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 uppercase tracking-[0.18em] text-xs font-bold mb-5 text-red-600"
          >
            <span className="inline-block w-5 h-[2px] bg-red-600 rounded-full" />
            The Problem
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-4xl md:text-5xl font-bold text-textPrimary leading-tight"
          >
            Is Your Website Costing You Customers?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="mt-5 text-lg text-textSecondary max-w-xl mx-auto leading-relaxed"
          >
            Most websites don't fail from bad content — they fail from broken design signals that destroy trust before a single word is read.
          </motion.p>
        </div>

        {/* Cards Grid — 3D entrance stagger preserved */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          // perspective needed for rotateY entrance to look 3D
          style={{ perspective: 1200 }}
        >
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              // preserve-3d required for the rotateY entrance animation
              style={{ transformStyle: "preserve-3d", willChange: "transform, opacity" }}
            >
              <TiltCard point={point} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
