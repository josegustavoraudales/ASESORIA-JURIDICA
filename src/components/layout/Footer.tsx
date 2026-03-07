import { Scale, Mail, Phone, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { SocialIcons } from "@/components/SocialIcons";
import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Scale className="h-6 w-6" />
            <span className="font-serif text-lg font-bold">{siteConfig.name}</span>
          </div>
          <p className="text-sm opacity-80 mb-4">
            {siteConfig.title}. Te ayudo a tomar decisiones legales informadas y a defender tus derechos.
          </p>
          <p className="text-xs opacity-60 italic">
            El contenido de este sitio es informativo y no constituye asesoría legal. No se garantizan resultados.
          </p>
        </div>

        <div>
          <h4 className="font-serif font-bold mb-4">Navegación</h4>
          <div className="flex flex-col gap-2">
            {[
              { label: "Inicio", to: "#inicio" },
              { label: "Servicios", to: "#servicios" },
              { label: "Sobre mí", to: "#sobre-mi" },
              { label: "Contacto", to: "#contacto" },
            ].map((l) => (
              <a
                key={l.to}
                href={l.to}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(l.to)?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-sm opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-serif font-bold mb-4">Contacto</h4>
          <div className="flex flex-col gap-3 text-sm opacity-80">
            <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 hover:opacity-100">
              <Phone className="h-4 w-4" /> {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:opacity-100">
              <Mail className="h-4 w-4" /> {siteConfig.email}
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0" /> {siteConfig.city}, Colombia
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 shrink-0" /> {siteConfig.horarios}
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-serif font-bold mb-4">Sígueme</h4>
          <SocialIcons size={20} className="gap-4 flex-wrap" showLabels />
        </div>
      </div>

      <div className="border-t border-primary-foreground/20 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap gap-4 text-xs opacity-60">
          <Link to="/politica-datos" className="hover:opacity-100 transition-opacity">Política de datos</Link>
          <Link to="/terminos" className="hover:opacity-100 transition-opacity">Términos y condiciones</Link>
          <Link to="/aviso-legal" className="hover:opacity-100 transition-opacity">Aviso legal</Link>
        </div>
        <p className="text-xs opacity-60">
          © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
);
