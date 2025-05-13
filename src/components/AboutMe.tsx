"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/animations/FadeIn";
import { motion } from "framer-motion";

export function AboutMe() {
  return (
    <section id="over-mij" className="py-16 bg-background overflow-hidden">
      <div className="container-custom">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-10 text-center text-foreground">
            Over Mij - Arjan
          </h2>
        </FadeIn>
        
        <Card className="overflow-hidden border-primary/20">
          <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8 p-6">
            <FadeIn direction="right" delay={0.2}>
              <div className="flex justify-center">
                <div className="relative w-[250px] h-[250px]">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="w-full h-full rounded-lg overflow-hidden"
                  >
                    <Image 
                      src="/images/arjan.jpg" 
                      alt="Arjan den Hartog" 
                      fill
                      className="rounded-lg object-cover shadow-lg"
                      priority
                    />
                    <motion.div 
                      className="absolute inset-0 bg-primary/20 rounded-lg opacity-0"
                      whileHover={{ opacity: 0.3 }}
                    />
                  </motion.div>
                </div>
              </div>
            </FadeIn>
            
            <div className="space-y-4 text-card-foreground">
              <FadeIn direction="left" delay={0.3}>
                <p className="leading-relaxed">
                  👨‍🎓 Ik ben een eerstejaars HBO-ICT-student aan de <a href="https://www.che.nl/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Christelijke Hogeschool Ede</a>. Hier volg ik de opleiding ICT, 
                  waar ik mijn kennis over technologie en softwareontwikkeling verder uitbreid.
                </p>
              </FadeIn>
              
              <FadeIn direction="left" delay={0.4}>
                <p className="leading-relaxed">
                  💻 Naast mijn studie werk ik als Junior ICT Specialist bij <a href="https://www.beversoftware.nl/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Bever Automatisering</a>. 
                  Daar help ik met technische ondersteuning, systeembeheer en het optimaliseren van IT-processen.
                </p>
              </FadeIn>
              
              <FadeIn direction="left" delay={0.5}>
                <p className="leading-relaxed">
                  💡 Op zaterdag werk ik bij <a href="https://www.lampentotaal.nl/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">LampenTotaal</a>, waar ik waardevolle ervaring opdoe in verkoop, klantenservice en het adviseren van klanten over verlichting.
                </p>
              </FadeIn>
              
              <FadeIn direction="left" delay={0.6}>
                <p className="leading-relaxed">
                  🗣️ Bovendien ben ik actief betrokken bij <a href="https://oostbetuwe.sgpj.nl/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">SGP-jongeren Oost-Betuwe</a> als lokaal bestuurslid. Op landelijk niveau draag 
                  ik bij als lid van de commissies Organisatie en Relaties, waar ik me inzet voor het organiseren van activiteiten, en het onderhouden van contacten met relaties.
                </p>
              </FadeIn>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
} 