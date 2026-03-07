import { CheckCircle, Calendar } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import profileImage from "@/assets/profile-lawyer.jpg";

const valores = [
{ title: "Transparencia", desc: "Te explico cada paso, los costos y los posibles resultados antes de empezar." },
{ title: "Ética profesional", desc: "Actúo siempre con integridad y dentro del marco legal y deontológico." },
{ title: "Confidencialidad", desc: "Tu información es sagrada. Discreción total en cada caso." },
{ title: "Trato humano", desc: "Detrás de cada caso hay una persona. Te escucho y te acompaño." }];


export const AboutSection = () =>
<section id="sobre-mi" className="py-16 md:py-24 bg-card">
    <div className="container mx-auto px-4">
      {/* Perfil */}
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto mb-16">
        <img src={profileImage} alt={siteConfig.name} className="w-52 h-52 md:w-72 md:h-72 rounded-2xl object-cover shadow-warm-lg" />
        <div>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">{siteConfig.name}</h2>
          <p className="text-muted-foreground mb-1 text-left">{siteConfig.universidad} · {siteConfig.city}</p>
          <p className="text-lg text-muted-foreground mb-4">
            Soy abogada en {siteConfig.city}, Colombia. Elegí el derecho porque creo que todas las personas merecen entender sus derechos y tomar decisiones informadas.
          </p>
          <p className="text-muted-foreground mb-4">
            Mi enfoque es simple: explicarte las cosas como son, sin tecnicismos innecesarios, y ayudarte a encontrar la mejor ruta para tu situación.
          </p>
          <ul className="space-y-1 mb-4">
            {siteConfig.credenciales.map((c) =>
          <li key={c} className="text-sm text-muted-foreground flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" /> {c}
              </li>
          )}
          </ul>
          <p className="text-sm text-muted-foreground mb-1">{siteConfig.tarjetaProfesional}</p>
          <p className="text-sm text-muted-foreground mb-4">{siteConfig.modalidad}</p>
          <a href="#contacto" className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-semibold text-sm inline-flex items-center gap-2 hover:opacity-90 transition-opacity">
            <Calendar className="h-4 w-4" /> Agenda una consulta
          </a>
        </div>
      </div>

      {/* Valores */}
      <div className="max-w-4xl mx-auto">
        <h3 className="font-serif text-2xl font-bold text-foreground mb-8 text-center">Mis valores</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {valores.map((v) =>
        <div key={v.title} className="bg-background p-6 rounded-xl shadow-warm flex gap-3">
              <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif font-bold text-foreground mb-1">{v.title}</h4>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            </div>
        )}
        </div>
      </div>
    </div>
  </section>;