"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Section } from "@/components/ui/Section";
import { projects } from "@/lib/data/projects";
import dynamic from "next/dynamic";

const SceneWrapper = dynamic(() => import("@/components/3d/SceneWrapper"), { ssr: false });
const FloatingOrb = dynamic(() => import("@/components/3d/HeroShapes").then(mod => mod.FloatingOrb), { ssr: false });

// ─── Register GSAP plugins (client-side only) ─────────────────────────────────
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ─── Project card data type ───────────────────────────────────────────────────
interface ProjectCardProps {
  project: (typeof projects)[number];
  index: number;
}

// ─── Single project card ──────────────────────────────────────────────────────
function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion || !cardRef.current) return;

    const card = cardRef.current;
    const image = imageRef.current;
    const triggers: ScrollTrigger[] = [];

    // ── GSAP ScrollTrigger: fade-in + slide-up on entry ──────────────────────
    const enterST = ScrollTrigger.create({
      trigger: card,
      start: "top 88%",
      toggleActions: "play none none none",
      onEnter: () => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.12,
            ease: "power3.out",
            clearProps: "opacity,y",
          }
        );
      },
    });
    triggers.push(enterST);

    // ── GSAP image parallax at 0.5× scroll speed ─────────────────────────────
    if (image) {
      const parallaxST = gsap.to(image, {
        y: "15%",
        ease: "none",
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
        },
      }).scrollTrigger;
      if (parallaxST) triggers.push(parallaxST);
    }

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, [index, shouldReduceMotion]);

  return (
    <div
      ref={cardRef}
      className="group relative rounded-2xl overflow-hidden border border-surface-border bg-surface shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      style={{
        opacity: 0, // GSAP animates this in
        willChange: "transform, opacity",
      }}
    >
      {/* ── Image wrapper — clipped so parallax doesn't overflow ───────────── */}
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: "16 / 11" }}
      >
        {/* Inner div that GSAP translates for parallax */}
        <div
          ref={imageRef}
          className="absolute inset-[-15%_0] w-full"
          style={{ height: "130%" }}
        >
          <Image
            src={project.thumbnail}
            alt={`${project.title} — ${project.category}`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        </div>

        {/* ── Default gradient scrim — grounds the bottom text ──────────────── */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-0" />

        {/* ── Default bottom meta (visible at rest) ─────────────────────────── */}
        <div className="absolute bottom-0 left-0 right-0 p-5 z-20 flex items-end justify-between transition-opacity duration-300 group-hover:opacity-0">
          <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-white/90 backdrop-blur-sm text-textPrimary rounded-full border border-surface-border">
            {project.category}
          </span>
        </div>

        {/* ── Hover overlay — CSS group-hover driven, pure Tailwind ──────────── */}
        <div
          className="absolute inset-0 z-30 flex flex-col justify-center items-center text-center p-7 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: "rgba(255,255,255,0.82)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
          }}
          aria-hidden
        >
          {/* Category pill */}
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-textSecondary mb-3">
            {project.category}
          </span>

          {/* Project title */}
          <p className="font-heading font-bold text-textPrimary text-xl md:text-2xl leading-snug mb-1">
            {project.title}
          </p>

          {/* Client name */}
          <p className="text-sm text-textSecondary mb-5">{project.client}</p>

          {/* Amber CTA badge */}
          <span
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
            style={{
              background: "#D97706",
              boxShadow: "0 4px 16px rgba(217,119,6,0.35)",
            }}
          >
            View Case Study
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path
                d="M2.5 7h9M7.5 3l4 4-4 4"
                stroke="white"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>

      {/* ── Card footer — always visible below the image ───────────────────── */}
      <div className="px-5 py-4 flex flex-col gap-1 bg-surface border-t border-surface-border">
        <p className="font-heading font-semibold text-textPrimary text-base leading-snug group-hover:text-primary transition-colors duration-200">
          {project.title}
        </p>
        <p className="text-xs text-textSecondary line-clamp-2 leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* ── Full-card accessible anchor (sits above everything) ─────────────── */}
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-40 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        aria-label={`View ${project.title} case study (opens in new tab)`}
      />
    </div>
  );
}

// ─── Section header ───────────────────────────────────────────────────────────
function SectionHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
      {/* Left: title block */}
      <div className="max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2.5 mb-4"
        >
          <span className="inline-block w-5 h-[2px] bg-primary rounded-full" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-textSecondary">
            Recent Projects
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading font-bold text-textPrimary leading-[1.1]"
          style={{ fontSize: "clamp(32px, 3.5vw, 52px)" }}
        >
          Premium sites, built for{" "}
          <span className="text-primary">real results</span>
        </motion.h2>
      </div>

      {/* Right: "View All" link */}
      <motion.a
        href="#contact"
        initial={{ opacity: 0, x: 16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ x: 4 }}
        className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-textSecondary hover:text-textPrimary transition-colors duration-200 flex-shrink-0"
        aria-label="Start your project"
      >
        Start Your Project
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
          <path
            d="M3 8h10M8 4l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.a>
    </div>
  );
}

// ─── Scroll prompt ────────────────────────────────────────────────────────────
function ScrollPrompt() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="flex justify-center mt-14"
    >
      <a
        href="#process"
        className="group inline-flex items-center gap-3 px-6 py-3 rounded-full border border-surface-border bg-white/60 backdrop-blur-sm hover:border-primary/40 hover:bg-white transition-all duration-300 text-sm font-medium text-textSecondary hover:text-textPrimary"
        style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
      >
        <span>Explore how we build them</span>
        <motion.span
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="inline-block text-base"
          aria-hidden
        >
          ➜
        </motion.span>
      </a>
    </motion.div>
  );
}

// ─── Decorative background ────────────────────────────────────────────────────
function SectionBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      {/* Soft top accent blob */}
      <div
        className="absolute"
        style={{
          top: "-8%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "60vw",
          height: "40vw",
          maxWidth: 800,
          maxHeight: 500,
          background:
            "radial-gradient(ellipse, rgba(59,95,224,0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
          borderRadius: "50%",
        }}
      />
      {/* Bottom-right violet whisper */}
      <div
        className="absolute"
        style={{
          bottom: "5%",
          right: "-5%",
          width: "30vw",
          height: "30vw",
          maxWidth: 400,
          maxHeight: 400,
          background:
            "radial-gradient(ellipse, rgba(107,70,229,0.04) 0%, transparent 70%)",
          filter: "blur(50px)",
          borderRadius: "50%",
        }}
      />
      
      {/* ── WebGL 3D Elements ─────────────────────────────────────────────── */}
      <SceneWrapper className="z-0">
        <FloatingOrb position={[4, 2, -3]} scale={1} speed={0.6} color="#e5e7eb" />
        <FloatingOrb position={[-4, -2, -2]} scale={1.2} speed={0.4} color="#f3f4f6" />
      </SceneWrapper>
    </div>
  );
}

// ─── Featured Work Section ────────────────────────────────────────────────────
export function Portfolio() {
  // We only show the first 3 projects in the main grid per spec
  const featuredProjects = projects.slice(0, 3);
  // Remaining projects for secondary row (4th & 5th)
  const extraProjects = projects.slice(3, 5);

  return (
    <Section
      id="portfolio"
      className="relative bg-background border-t border-surface-border overflow-hidden"
    >
      <SectionBackground />

      <div className="relative z-10">
        <SectionHeader />

        {/* ── Primary 3-column grid ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        {/* ── Secondary 2-column row (4th & 5th projects) ───────────────────── */}
        {extraProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-6 lg:mt-8">
            {extraProjects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index + 3}
              />
            ))}
          </div>
        )}

        {/* ── Scroll prompt ─────────────────────────────────────────────────── */}
        <ScrollPrompt />
      </div>
    </Section>
  );
}
