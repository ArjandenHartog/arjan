"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScaleInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  initialScale?: number;
  className?: string;
  once?: boolean;
}

export function ScaleIn({
  children,
  delay = 0,
  duration = 0.5,
  initialScale = 0.8,
  className = "",
  once = true,
}: ScaleInProps) {
  return (
    <motion.div
      className={className}
      initial={{ 
        opacity: 0, 
        scale: initialScale
      }}
      whileInView={{ 
        opacity: 1, 
        scale: 1
      }}
      transition={{
        duration,
        delay,
        ease: "easeOut"
      }}
      viewport={{ once }}
    >
      {children}
    </motion.div>
  );
} 