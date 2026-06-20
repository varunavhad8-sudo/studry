"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

interface StatCounterProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

export function StatCounter({ value, label, prefix = "", suffix = "", duration = 2 }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: duration,
        ease: "easeOut",
        onUpdate(v) {
          // Determine precision based on if the target value has decimals
          const precision = value % 1 !== 0 ? 1 : 0;
          setDisplayValue(Number(v.toFixed(precision)));
        },
      });

      return () => controls.stop();
    }
  }, [isInView, value, duration]);

  return (
    <div ref={ref} className="flex flex-col gap-2">
      <div className="text-4xl md:text-6xl font-heading font-bold text-primary">
        {prefix}
        {displayValue}
        {suffix}
      </div>
      <div className="text-textSecondary uppercase tracking-widest text-sm font-semibold">
        {label}
      </div>
    </div>
  );
}
