import { useState } from "react";
import { MessageCircle, Instagram, Facebook, Mail, Phone, MapPin, Clock, Calendar, Send } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { SocialIcons } from "@/components/SocialIcons";

const topics = [
  "Derecho Civil y Familia",
  "Derecho Laboral y Seguridad Social",
  "Acciones Constitucionales y Administrativas",
  "Asesoría Legal y Orientación Integral",
  "Otro tema",
];

const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13.2a8.16 8.16 0 005.58 2.17v-3.44a4.85 4.85 0 01-3.77-1.47V6.69h3.77z"/>
  </svg>
);

export const ContactSection = () => {
  const [form, setForm] = useState({ nombre: "", ciudad: "", tema: "", mensaje: "", datos: false });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola, soy ${form.nombre} de ${form.ciudad}. Tema: ${form.tema}. ${form.mensaje}`;
    window.open(`https://wa.me/573122823414?text=${encodeURIComponent(text)}`, "_blank");
    setForm({ nombre: "", ciudad: "", tema: "", mensaje: "", datos: false });
  };

  return (
    <section id="contacto" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3">¡Inicia tu asesoría aquí!</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Escríbeme por el canal que prefieras. Respondo en menos de 24 horas hábiles.
          </p>
        </div>

        {/* Botones de contacto rápido */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-primary-foreground px-5 py-3 rounded-lg font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity">
            <MessageCircle className="h-5 w-5" /> WhatsApp
          </a>
          <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="bg-[#E4405F] text-primary-foreground px-5 py-3 rounded-lg font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity">
            <Instagram className="h-5 w-5" /> Instagram
          </a>
          <a href={siteConfig.tiktokUrl} target="_blank" rel="noopener noreferrer" className="bg-foreground text-primary-foreground px-5 py-3 rounded-lg font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity">
            <TikTokIcon /> TikTok
          </a>
          <a href={siteConfig.facebookUrl} target="_blank" rel="noopener noreferrer" className="bg-[#1877F2] text-primary-foreground px-5 py-3 rounded-lg font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity">
            <Facebook className="h-5 w-5" /> Facebook
          </a>
          <a href={`tel:${siteConfig.phone}`} className="bg-accent text-accent-foreground px-5 py-3 rounded-lg font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity">
            <Phone className="h-5 w-5" /> Llamar
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Formulario que envía a WhatsApp */}
          <div className="bg-card p-6 md:p-8 rounded-xl shadow-warm">
            <h3 className="font-serif text-xl font-bold text-foreground mb-6">Escríbeme</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Nombre</label>
                <input type="text" required value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Tu nombre completo" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Ciudad</label>
                <input type="text" required value={form.ciudad} onChange={(e) => setForm({ ...form, ciudad: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="¿Desde dónde nos escribes?" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Tema</label>
                <select required value={form.tema} onChange={(e) => setForm({ ...form, tema: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all">
                  <option value="">Selecciona un tema</option>
                  {topics.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Mensaje</label>
                <textarea required rows={3} value={form.mensaje} onChange={(e) => setForm({ ...form, mensaje: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none" placeholder="Describe brevemente tu situación" />
              </div>
              <label className="flex items-start gap-2 cursor-pointer">
                <input type="checkbox" required checked={form.datos} onChange={(e) => setForm({ ...form, datos: e.target.checked })} className="mt-1 accent-primary" />
                <span className="text-xs text-muted-foreground">
                  Acepto la <a href="/politica-datos" className="underline hover:text-primary">política de tratamiento de datos personales</a> y autorizo el uso de mi información para responder mi consulta.
                </span>
              </label>
              <button type="submit" className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                <Send className="h-5 w-5" /> Enviar por WhatsApp
              </button>
            </form>
            <p className="text-xs text-muted-foreground italic mt-4">
              El envío del formulario no crea relación abogado-cliente hasta que se formalice la contratación.
            </p>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-xl shadow-warm">
              <h3 className="font-serif text-xl font-bold text-foreground mb-4">Información de contacto</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-primary shrink-0" /><a href={`tel:${siteConfig.phone}`} className="hover:text-primary">{siteConfig.phone}</a></div>
                <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-primary shrink-0" /><a href={`mailto:${siteConfig.email}`} className="hover:text-primary">{siteConfig.email}</a></div>
                <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-primary shrink-0" /><span>{siteConfig.city}, Colombia</span></div>
                <div className="flex items-center gap-3"><Clock className="h-4 w-4 text-primary shrink-0" /><span>{siteConfig.horarios}</span></div>
              </div>
              <p className="text-xs text-muted-foreground mt-4">{siteConfig.modalidad}</p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-warm">
              <h3 className="font-serif text-xl font-bold text-foreground mb-4">Redes sociales</h3>
              <SocialIcons size={20} className="gap-4 flex-wrap" showLabels />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
