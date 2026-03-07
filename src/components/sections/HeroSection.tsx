import { MessageCircle, Instagram, Facebook, Calendar } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import heroImage from "@/assets/hero-lawyer.jpg";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13.2a8.16 8.16 0 005.58 2.17v-3.44a4.85 4.85 0 01-3.77-1.47V6.69h3.77z" />
  </svg>
);

export const HeroSection = () => (
  <section id="inicio" className="relative overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImage} alt="Abogada profesional en su oficina" className="w-full h-full object-cover" loading="eager" />
      <div className="absolute inset-0 bg-foreground/60" />
    </div>
    <div className="relative container mx-auto px-4 py-20 md:py-32 lg:py-40">
      <div className="max-w-2xl animate-fade-in-up">
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-4">
          Servicios Jurídicos
          <span className="block text-secondary mt-1">{siteConfig.name}</span>
        </h1>
        <p className="text-primary-foreground/90 text-lg md:text-xl mb-8 leading-relaxed">
          Te ayudo a tomar decisiones legales informadas y a defender tus derechos con rutas claras y acompañamiento.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <a href="#contacto" className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold text-center hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
            <Calendar className="h-5 w-5" /> ¡Inicia tu asesoría aquí!
          </a>
          <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-primary-foreground px-6 py-3 rounded-lg font-semibold text-center hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
            <MessageCircle className="h-5 w-5" /> WhatsApp
          </a>
        </div>
        <div className="flex items-center gap-4 flex-wrap">
          {[
            { href: siteConfig.whatsappUrl, label: "WhatsApp", Icon: MessageCircle },
            { href: siteConfig.instagramUrl, label: "Instagram", Icon: Instagram },
            { href: siteConfig.tiktokUrl, label: "TikTok", Icon: TikTokIcon },
            { href: siteConfig.facebookUrl, label: "Facebook", Icon: Facebook },
          ].filter((s) => s.href).map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground text-sm flex items-center gap-1.5 transition-colors">
              <s.Icon className="h-4 w-4" /> {s.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);
