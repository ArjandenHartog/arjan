import Link from "next/link";
import { Button } from "@/components/ui/button";

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
  return (
    <div className="relative">
      <Button variant="ghost" size="sm" className="text-foreground">
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
      </Button>
    </div>
  );
} 