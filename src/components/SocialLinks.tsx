import { Button } from "@/components/ui/button";
import Link from "next/link";

export function SocialLinks() {
  const socials = [
    {
      name: "LinkedIn",
      icon: "linkedin",
      url: "https://www.linkedin.com/in/arjan-den-hartog-142741220/",
    },
    {
      name: "GitHub",
      icon: "github",
      url: "https://github.com/ArjandenHartog",
    },
    {
      name: "Email",
      icon: "envelope",
      url: "#contact",
    },
  ];

  return (
    <section id="socials" className="py-16 bg-background">
      <div className="container-custom text-center">
        <h2 className="text-3xl font-bold mb-10 text-foreground">Socials</h2>
        <div className="flex justify-center gap-8">
          {socials.map((social, index) => (
            <Link href={social.url} target={social.url.startsWith("http") ? "_blank" : ""} key={index}>
              <Button 
                variant="outline" 
                size="lg"
                className="rounded-full w-14 h-14 flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <i className={`fab fa-${social.icon === "envelope" ? "" : ""}${social.icon} ${social.icon === "envelope" ? "fas fa-envelope" : ""} text-2xl`}></i>
                <span className="sr-only">{social.name}</span>
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 