"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: "up" | "down";
}

export function ParallaxSection({
  children,
  className = "",
  speed = 0.2,
  direction = "up",
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Bepaal de richting van het parallax effect
  const factor = direction === "up" ? -1 : 1;
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${factor * speed * 100}%`]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div
        style={{ y }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
} 