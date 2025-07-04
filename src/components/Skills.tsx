"use client";

import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Skills() {
  const [showAll, setShowAll] = useState(false);
  
  const skills = [
    {
      name: "HTML",
      icon: "html5",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      name: "CSS",
      icon: "css3-alt",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      name: "JavaScript",
      icon: "js",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "Blazor",
      icon: "fire",
      url: "https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor",
    },
    {
      name: "C#",
      icon: "microsoft",
      url: "https://learn.microsoft.com/en-us/dotnet/csharp/",
    },
    {
      name: "Python",
      icon: "python",
      url: "https://www.python.org/",
    },
    {
      name: "PHP",
      icon: "php",
      url: "https://www.php.net/",
    },
    {
      name: "WordPress",
      icon: "wordpress",
      url: "https://wordpress.org/",
    },
    {
      name: "React",
      icon: "react",
      url: "https://www.reactjs.org/",
    },
    {
      name: "SQL",
      icon: "database",
      url: "https://www.mysql.com/",
    },
    {
      name: "Figma",
      icon: "figma",
      url: "https://www.figma.com/",
    },
    {
      name: "Git",
      icon: "git-alt",
      url: "https://www.git-scm.com/",
    },
    {
      name: "Docker",
      icon: "docker",
      url: "https://www.docker.com/",
    },
    {
      name: "Office365",
      icon: "desktop",
      url: "https://www.microsoft.com/en-us/microsoft-365/",
    },
    {
      name: "Home Assistant",
      icon: "home",
      url: "https://www.home-assistant.io/",
    },
    {
      name: "Systeembeheer",
      icon: "server",
      url: "https://www.beversoftware.nl/diensten/ict-beheer/",
    },
    {
      name: "Laravel",
      icon: "laravel",
      url: "https://laravel.com/",
    },
    {
      name: "Stripe",
      icon: "stripe",
      url: "https://stripe.com/",
    },
  ];

  const visibleSkills = showAll ? skills : skills.slice(0, 5);

  return (
    <section id="skills" className="py-16 bg-secondary/5 overflow-hidden">
      <div className="container-custom">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-10 text-center text-foreground">
            Skills
          </h2>
        </FadeIn>
        <StaggerContainer 
          key={showAll ? "all-skills" : "some-skills"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          staggerChildren={0.05}
        >
          {visibleSkills.map((skill, index) => (
            <StaggerItem key={`${skill.name}-${index}`} direction="up">
              <motion.a
                href={skill.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                whileHover={{ scale: 1.05, y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <Badge 
                  variant="outline"
                  className="px-4 py-3 w-full h-full flex flex-col items-center justify-center gap-2 border-primary/20 group-hover:border-primary/70 group-hover:bg-primary/10 transition-colors cursor-pointer"
                >
                  <i className={`${skill.icon.includes("desktop") || skill.icon.includes("database") || 
                    skill.icon.includes("server") || skill.icon.includes("home") || skill.icon.includes("fire")
                    ? "fas" : "fab"} fa-${skill.icon} text-2xl text-primary mb-1 group-hover:text-primary transition-colors`}></i>
                  <span className="text-foreground group-hover:text-primary transition-colors">{skill.name}</span>
                </Badge>
              </motion.a>
            </StaggerItem>
          ))}
        </StaggerContainer>
        
        <div className="flex justify-center mt-8">
          <Button 
            variant="outline" 
            onClick={() => setShowAll(!showAll)}
            className="border-primary/20 hover:border-primary/70 hover:bg-primary/10"
          >
            {showAll ? "Toon minder" : "Toon meer"}
          </Button>
        </div>
      </div>
    </section>
  );
} 