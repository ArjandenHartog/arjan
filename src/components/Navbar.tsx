"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  return (
    <nav className="border-b bg-card py-4">
      <div className="container-custom flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-semibold">Arjan den Hartog</span>
        </Link>
        <div className="hidden md:flex gap-6">
          <Link href="#over-mij" className="text-foreground hover:text-primary hover:underline transition-colors">
            Over Mij
          </Link>
          <Link href="#socials" className="text-foreground hover:text-primary hover:underline transition-colors">
            Socials
          </Link>
          <Link href="#skills" className="text-foreground hover:text-primary hover:underline transition-colors">
            Skills
          </Link>
          <Link href="#projecten" className="text-foreground hover:text-primary hover:underline transition-colors">
            Portfolio
          </Link>
          <Link href="#contact" className="text-foreground hover:text-primary hover:underline transition-colors">
            Contact
          </Link>
        </div>
        <div className="block md:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    },
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: -10 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3
      }
    })
  };

  const menuItems = [
    { href: "#over-mij", label: "Over Mij" },
    { href: "#socials", label: "Socials" },
    { href: "#skills", label: "Skills" },
    { href: "#projecten", label: "Portfolio" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <div className="relative">
      <Button 
        variant="ghost" 
        size="sm" 
        className="text-foreground"
        onClick={toggleMenu}
        aria-expanded={isOpen}
      >
        <motion.div
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: { rotate: 90 },
            closed: { rotate: 0 }
          }}
          transition={{ duration: 0.3 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </motion.div>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="absolute right-0 mt-2 w-48 py-2 bg-card rounded-md shadow-xl z-50 border border-border overflow-hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="flex flex-col">
              {menuItems.map((item, i) => (
                <motion.div 
                  key={item.href}
                  custom={i}
                  variants={menuItemVariants}
                >
                  <Link 
                    href={item.href} 
                    className="px-4 py-2 block text-foreground hover:bg-muted transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 