"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { motion } from "framer-motion";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects = [
    {
      id: 8,
      title: "LampenTotaal Copilot",
      shortDescription: "Een Electron applicatie met diverse AI-tools, ERP-integratie en automatiseringen zoals bulk mail versturen",
      fullDescription: "Deze desktop applicatie is ontwikkeld met Electron, HTML, CSS en JavaScript voor LampenTotaal. De applicatie integreert verschillende AI-functionaliteiten en heeft een directe koppeling met het ERP-systeem via API's. Gebruikers kunnen AI-tools gebruiken voor tekstanalyse en -generatie, terwijl ze ook real-time data uit het ERP-systeem kunnen ophalen en verwerken. De applicatie bevat diverse automatiseringen zoals het versturen van bulk mails, het genereren van rapporten en andere tijdbesparende functionaliteiten voor dagelijkse taken.",
      image: "/images/copilot.png",
      technologies: ["Electron", "HTML", "CSS", "JavaScript", "AI Integration", "API", "ERP Integration", "Email Automation"],
    },
    {
      id: 1,
      title: "FDD project",
      shortDescription: "Website met verhaal over de website. Resultaat: Excellent",
      fullDescription: "Deze website is voor een opdracht voor het vak Frontend Design & Development aan de CHE. De website is gemaakt met HTML, CSS en JavaScript.",
      image: "/images/che.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://fdd.che-ict.nl/2425/ajdhartog/"
    },
    {
      id: 2,
      title: "Dagelijkse Psalm app",
      shortDescription: "Een Psalm app, met verschillende functies.",
      fullDescription: "Deze psalm app laat willekeurige psalmen zien, uit een grote database. De psalmen worden ververst na het luisteren van de audio. Ook is een compleet overzicht toegevoegd van alle psalmen. Daarnaast bevat de app ook doormiddel van de Bijbel api een overzicht met alle hoofdstukken. De app is gebouwd met React.",
      image: "/images/dagelijkse-psalm1.png",
      technologies: ["HTML", "CSS", "React", "JavaScript", "API", "MongoDB"],
      link: "https://psalm.site/"
    },
    {
      id: 3,
      title: "Lampentotaal",
      shortDescription: "Website voor een touchscreen, inclusief installatie van pc en touchscreen",
      fullDescription: "Deze website is in combinatie gemaakt voor een touchscreen, waar een pc achter zit. Deze pc staat in de showroom, waar verkopers en klanten samen kunnen kijken naar de verschillende sites van leveranciers en natuurlijk LampenTotaal",
      image: "/images/lampentotaal1.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://lampentotaal.arjandenhartog.com/"
    },
    {
      id: 5,
      title: "Vrijwilligersplatform SGPJ Jongeren",
      shortDescription: "Platform voor vrijwilligers, met Wordpress",
      fullDescription: "Dit platform is gemaakt voor de vrijwilligers van SGPJ Jongeren, hier komt informatie op te staan achter een beveiligde omgeving wat speciaal bedoeld is voor de vrijwillgers.",
      image: "/images/sgpj.png",
      technologies: ["Wordpress", "Databases", "Plugin's", "Wordpress Theme's"],
      link: "https://app.sgpj.nl/"
    },
    {
      id: 6,
      title: "Blazor Web app",
      shortDescription: "Webapplicatie met een database met behulp van Blazor",
      fullDescription: "Deze web app is gemaakt voor een opdracht van het vak Programming Data Driven Applications, waarbij een web app gemaakt moest worden met Blazor. Er is een database gekoppeld aan de web app. Zo kunnen de gegevens efficent worden ingeladen.",
      image: "/images/blazor.png",
      technologies: ["Blazor", "C#", "HTML", "CSS", "JavaScript", "SQL"]
    },
    {
      id: 7,
      title: "Counter website",
      shortDescription: "Counter voor aanmeldingen voor een avond",
      fullDescription: "Deze counter is gemaakt voor een avond, waarbij de aanmeldingen worden geteld. De counter is gemaakt met HTML, CSS en JavaScript.",
      image: "/images/jongerenavond.png",
      technologies: ["HTML", "CSS", "JavaScript"]
    }
  ];

  type Project = typeof projects[0];

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <section id="projecten" className="py-16 bg-background overflow-hidden">
      <div className="container-custom">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-10 text-center text-foreground">
            Projecten
          </h2>
        </FadeIn>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <StaggerItem key={project.id} direction="up">
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(var(--color-primary-rgb), 0.1)" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="h-full"
              >
                <Card 
                  className="overflow-hidden border-primary/20 hover:border-primary/70 transition-all hover:shadow-lg cursor-pointer h-full bg-card"
                  onClick={() => openProjectModal(project)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <motion.div whileHover={{ scale: 1.05 }} className="w-full h-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {project.shortDescription}
                    </p>
                    <div className="flex justify-end">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-primary hover:bg-primary/10 hover:text-primary/80"
                      >
                        Meer info <i className="fas fa-arrow-right ml-2 text-xs"></i>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        {selectedProject && (
          <DialogContent className="sm:max-w-3xl overflow-y-auto max-h-[90vh]">
            <DialogHeader>
              <motion.div initial={{ opacity: 0, y:20 }} animate={{ opacity: 1, y: 0 }}>
                <DialogTitle className="text-xl font-bold">{selectedProject.title}</DialogTitle>
              </motion.div>
            </DialogHeader>
            
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{delay: 0.1}} className="relative w-full h-64 my-4">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-contain rounded-md"
              />
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y:20 }} animate={{ opacity: 1, y: 0 }} transition={{delay: 0.2}}>
              <DialogDescription className="text-foreground text-base mb-4">
                {selectedProject.fullDescription}
              </DialogDescription>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y:20 }} animate={{ opacity: 1, y: 0 }} transition={{delay: 0.3}} className="mb-6">
              <h3 className="text-md font-semibold mb-2">Gebruikte technologieën:</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, i) => (
                   <motion.div key={i} initial={{opacity:0, x: -10}} animate={{opacity:1, x:0}} transition={{delay: 0.3 + i * 0.05}}>
                    <Badge variant="outline" className="bg-primary/5 border-primary/20 text-foreground">{tech}</Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <DialogFooter>
              {selectedProject.link && (
                <motion.div initial={{ opacity: 0, y:20 }} animate={{ opacity: 1, y: 0 }} transition={{delay: 0.4}}>
                  <Button asChild className="bg-primary hover:bg-primary/90">
                    <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                      Bekijk Project
                    </a>
                  </Button>
                </motion.div>
              )}
              <motion.div initial={{ opacity: 0, y:20 }} animate={{ opacity: 1, y: 0 }} transition={{delay: selectedProject.link ? 0.5 : 0.4}}>
                <Button 
                  variant="outline" 
                  onClick={() => setSelectedProject(null)}
                  className="border-primary/30 hover:bg-primary/10"
                >
                  Sluiten
                </Button>
              </motion.div>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
} 