import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-6 bg-card border-t">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Arjan den Hartog
          </p>
          
          <div className="flex items-center gap-4">
            <Link href="#over-mij" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Over Mij
            </Link>
            <Link href="#skills" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#projecten" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Projecten
            </Link>
            <Link href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 