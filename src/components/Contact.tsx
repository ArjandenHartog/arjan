"use client";

import { useState, FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { useRef } from "react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { motion } from "framer-motion";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        name: formData.get('user_name'),
        email: formData.get('user_email'),
        message: formData.get('message')
      };
      
      console.log('Form data:', data);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      
      toast.success('Bericht succesvol verzonden!');
      formRef.current?.reset();
    } catch (error) {
      toast.error('Er ging iets mis. Probeer het later opnieuw.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-secondary/5 overflow-hidden">
      <div className="container-custom">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-10 text-center text-foreground">
            Contact
          </h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <FadeIn direction="right">
            <Card className="p-6 shadow-sm border-primary/20 h-full bg-card">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Neem Contact Op
              </h3>
              <p className="mb-6 text-muted-foreground">
                Heeft u een vraag of wilt u samen werken? Neem gerust contact op!
              </p>
              
              <StaggerContainer className="space-y-4" staggerChildren={0.1}>
                <StaggerItem direction="up">
                  <div className="flex items-center gap-3 text-foreground">
                    <motion.div whileHover={{ scale: 1.1 }} className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <i className="fas fa-envelope text-primary"></i>
                    </motion.div>
                    <a href="mailto:info@arjandenhartog.com" className="hover:text-primary transition-colors">
                      info@arjandenhartog.com
                    </a>
                  </div>
                </StaggerItem>
                
                <StaggerItem direction="up">
                  <div className="flex items-center gap-3 text-foreground">
                    <motion.div whileHover={{ scale: 1.1 }} className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <i className="fas fa-phone text-primary"></i>
                    </motion.div>
                    <a href="tel:+31621457630" className="hover:text-primary transition-colors">
                      +31 6 21457630
                    </a>
                  </div>
                </StaggerItem>
                
                <StaggerItem direction="up">
                  <div className="flex items-center gap-3 text-foreground">
                    <motion.div whileHover={{ scale: 1.1 }} className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <i className="fab fa-linkedin text-primary"></i>
                    </motion.div>
                    <a 
                      href="https://www.linkedin.com/in/arjan-den-hartog-142741220/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      LinkedIn
                    </a>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </Card>
          </FadeIn>
          
          <FadeIn direction="left" delay={0.1}>
            <Card className="p-6 shadow-sm border-primary/20 h-full bg-card">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <FadeIn direction="up" delay={0.2}>
                  <Input 
                    type="text" 
                    id="name" 
                    name="user_name" 
                    placeholder="Uw naam" 
                    className="bg-background border-primary/20 focus:border-primary"
                    required 
                    disabled={isSubmitting}
                  />
                </FadeIn>
                
                <FadeIn direction="up" delay={0.3}>
                  <Input 
                    type="email" 
                    id="email" 
                    name="user_email" 
                    placeholder="Uw e-mail" 
                    className="bg-background border-primary/20 focus:border-primary"
                    required 
                    disabled={isSubmitting}
                  />
                </FadeIn>
                
                <FadeIn direction="up" delay={0.4}>
                  <Textarea 
                    id="message"
                    name="message"
                    placeholder="Uw bericht"
                    className="min-h-[120px] bg-background border-primary/20 focus:border-primary"
                    required
                    disabled={isSubmitting}
                  />
                </FadeIn>
                
                <FadeIn direction="up" delay={0.5}>
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Button 
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <span className="animate-spin">
                            <i className="fas fa-spinner"></i>
                          </span>
                          <span>Verzenden...</span>
                        </div>
                      ) : "Verzenden"}
                    </Button>
                  </motion.div>
                </FadeIn>
              </form>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
} 