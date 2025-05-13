"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  className?: string;
  once?: boolean;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  direction = "up",
  distance = 30,
  className = "",
  once = true,
}: FadeInProps) {
  const getInitialY = () => {
    switch (direction) {
      case "up":
        return distance;
      case "down":
        return -distance;
      case "none":
        return 0;
      default:
        return 0;
    }
  };

  const getInitialX = () => {
    switch (direction) {
      case "left":
        return distance;
      case "right":
        return -distance;
      case "none":
        return 0;
      default:
        return 0;
    }
  };

  return (
    <motion.div
      className={className}
      initial={{ 
        opacity: 0, 
        y: getInitialY(),
        x: getInitialX()
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        x: 0
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