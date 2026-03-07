import { useState, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Scale } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { SocialIcons } from "@/components/SocialIcons";

const navLinks = [
  { label: "Inicio", to: "#inicio" },
  { label: "Servicios", to: "#servicios" },
  { label: "Sobre mí", to: "#sobre-mi" },
  { label: "Contacto", to: "#contacto" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollTo = useCallback((hash: string) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.pathname, navigate]);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <button onClick={() => scrollTo("#inicio")} className="flex items-center gap-2">
          <Scale className="h-7 w-7 text-primary" />
          <div className="leading-tight text-left">
            <span className="font-serif text-lg font-bold text-foreground">{siteConfig.name}</span>
            <span className="hidden sm:block text-xs text-muted-foreground">{siteConfig.title}</span>
          </div>
        </button>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <button key={l.to} onClick={() => scrollTo(l.to)} className="text-sm font-medium transition-colors hover:text-primary text-foreground">
              {l.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <SocialIcons size={16} className="gap-2" />
          <button onClick={() => scrollTo("#contacto")} className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
            Agendar consulta
          </button>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground p-2">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-b border-border animate-fade-in">
          <nav className="container mx-auto flex flex-col gap-1 px-4 pb-4">
            {navLinks.map((l) => (
              <button key={l.to} onClick={() => scrollTo(l.to)} className="py-2 px-3 rounded-md text-sm font-medium text-left text-foreground hover:bg-muted transition-colors">
                {l.label}
              </button>
            ))}
            <div className="flex items-center gap-3 pt-3 border-t border-border mt-2">
              <SocialIcons size={18} className="gap-3" />
            </div>
            <button onClick={() => scrollTo("#contacto")} className="bg-primary text-primary-foreground text-center py-2.5 rounded-lg text-sm font-semibold mt-2">
              Agendar consulta
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
