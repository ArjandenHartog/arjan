"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
  once?: boolean;
}

export function StaggerContainer({
  children,
  className = "",
  delayChildren = 0,
  staggerChildren = 0.1,
  once = true,
}: StaggerContainerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      variants={{
        visible: {
          opacity: 1,
          transition: {
            delayChildren,
            staggerChildren,
          },
        },
        hidden: {
          opacity: 0,
        },
      }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
}

export function StaggerItem({
  children,
  className = "",
  direction = "up",
  distance = 30,
}: StaggerItemProps) {
  const getY = () => {
    switch (direction) {
      case "up":
        return distance;
      case "down":
        return -distance;
      default:
        return 0;
    }
  };

  const getX = () => {
    switch (direction) {
      case "left":
        return distance;
      case "right":
        return -distance;
      default:
        return 0;
    }
  };

  return (
    <motion.div
      className={className}
      variants={{
        visible: { 
          opacity: 1, 
          y: 0, 
          x: 0,
          transition: {
            duration: 0.5,
            ease: "easeOut"
          }
        },
        hidden: { 
          opacity: 0, 
          y: getY(), 
          x: getX() 
        },
      }}
    >
      {children}
    </motion.div>
  );
} 