"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Register ScrollTrigger, making sure it only runs on the client side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export function ParallaxImage({ src, alt, className = "", priority = false }: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!containerRef.current || !imageRef.current) return;

    // Use GSAP ScrollTrigger to move the image slightly slower than the scroll speed
    // by animating its y property inside an overflow-hidden container.
    const animation = gsap.to(imageRef.current, {
      y: "20%", // Move down by 20% of its height
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom", // Start when top of container hits bottom of viewport
        end: "bottom top",   // End when bottom of container hits top of viewport
        scrub: true,         // Smooth scrubbing
      },
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`relative overflow-hidden w-full h-full bg-surface ${className}`}
    >
      {/* We make the image taller than the container (e.g. 120%) and offset it so it can move down */}
      <div className="absolute top-[-20%] left-0 w-full h-[140%]">
        <Image
          ref={imageRef}
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          sizes="100vw"
        />
      </div>
    </div>
  );
}
