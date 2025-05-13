"use client";

import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { motion } from "framer-motion";

export function ProcessSteps() {
  const steps = [
    {
      icon: "comments",
      title: "1. Kennismaking & Analyse",
      description:
        "We beginnen met een gesprek over uw wensen, doelen en verwachtingen. Samen analyseren we wat er nodig is voor uw ideale website.",
    },
    {
      icon: "pencil-ruler",
      title: "2. Ontwerp & Planning",
      description:
        "Op basis van ons gesprek maak ik een ontwerp dat perfect aansluit bij uw merk. We bespreken de layout, kleuren en functionaliteiten.",
    },
    {
      icon: "code",
      title: "3. Ontwikkeling",
      description:
        "Met moderne technieken bouw ik uw website. De focus ligt op snelheid, gebruiksgemak en een responsive design dat werkt op alle apparaten.",
    },
    {
      icon: "check-circle",
      title: "4. Oplevering & Support",
      description:
        "Na grondige testing en uw goedkeuring gaat de website live. Ik blijf beschikbaar voor ondersteuning en eventuele aanpassingen.",
    },
  ];

  return (
    <section id="process" className="py-16 bg-secondary/5 overflow-hidden">
      <div className="container-custom">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-10 text-center text-foreground">
            Hoe gaat dat nou?
          </h2>
        </FadeIn>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <StaggerItem key={index} direction="up">
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="h-full"
              >
                <Card className="p-6 flex flex-col items-center text-center border-primary/20 hover:border-primary/70 transition-colors h-full bg-card">
                  <FadeIn delay={0.1 * index}>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <i className={`fas fa-${step.icon} text-primary text-xl`}></i>
                    </div>
                  </FadeIn>
                  <FadeIn delay={0.1 * index + 0.1}>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{step.title}</h3>
                  </FadeIn>
                  <FadeIn delay={0.1 * index + 0.2}>
                    <p className="text-muted-foreground">{step.description}</p>
                  </FadeIn>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
} 