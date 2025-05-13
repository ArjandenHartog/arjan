"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";
import { motion } from "framer-motion";
import { useMemo } from "react";

export function Hero() {
  // Create fixed positions once to avoid hydration mismatch
  const positions = useMemo(() => [
    { top: "25%", left: "80%", delay: 15 },
    { top: "10%", left: "20%", delay: 20 },
    { top: "60%", left: "15%", delay: 25 },
    { top: "80%", left: "60%", delay: 30 },
    { top: "40%", left: "80%", delay: 35 }
  ], []);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/10 overflow-hidden">
      <div className="container-custom text-center md:text-left relative">
        {/* Achtergrond animatie elementen */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {positions.map((position, i) => (
            <motion.div
              key={i}
              className="absolute w-[200px] h-[200px] rounded-full bg-primary/5"
              animate={{
                x: [
                  Math.random() * 100 - 50,
                  Math.random() * 100 - 50,
                  Math.random() * 100 - 50,
                ],
                y: [
                  Math.random() * 100 - 50,
                  Math.random() * 100 - 50,
                  Math.random() * 100 - 50,
                ],
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: position.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                top: position.top,
                left: position.left,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-3xl mx-auto md:mx-0">
          <FadeIn delay={0.2} direction="up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Website nodig of hulp met ICT? Ik help graag!
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.4} direction="up">
            <p className="text-xl mb-8 text-muted-foreground">
              Ontwikkelaar en ICT specialist die bedrijven helpt met technische uitdagingen en mooie websites maakt.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.6} direction="up">
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="#contact">Contact</Link>
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button asChild variant="outline" className="border-primary text-foreground hover:bg-primary/10">
                  <Link href="#projecten">Projecten</Link>
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="https://www.linkedin.com/in/arjan-den-hartog-142741220/" target="_blank">LinkedIn</Link>
                </Button>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
} 