"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import { useInView } from "framer-motion";

// Dynamically import Spline to avoid SSR issues and reduce initial bundle size
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-surface rounded-2xl animate-pulse flex items-center justify-center border border-surface-border shadow-surface">
      <span className="text-textSecondary/70 font-medium tracking-widest text-sm uppercase">Loading 3D Scene…</span>
    </div>
  ),
});

interface LazySplineProps {
  url?: string;
  className?: string;
  fallbackText?: string;
}

export function LazySpline({ url, className = "", fallbackText = "3D Scene Placeholder" }: LazySplineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  // Unmount when scrolled far past (margin: "200px" keeps it mounted slightly offscreen)
  const isInView = useInView(containerRef, { margin: "200px 0px" });

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {isInView ? (
        url ? (
          <Spline scene={url} />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-surface/20 rounded-3xl border border-white/5">
            <div className="text-center p-8">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 border border-primary/30">
                <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 stroke-primary stroke-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                </svg>
              </div>
              <h3 className="text-textPrimary font-heading font-semibold text-lg mb-2">{fallbackText}</h3>
              <p className="text-textSecondary text-sm max-w-[250px] mx-auto">
                {"// REPLACE WITH SPLINE URL"}
              </p>
            </div>
          </div>
        )
      ) : null}
    </div>
  );
}
