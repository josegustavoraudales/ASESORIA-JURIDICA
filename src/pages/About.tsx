import { CheckCircle, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig } from "@/config/siteConfig";
import profileImage from "@/assets/profile-lawyer.jpg";

const About = () => (
  <div>
    {/* Hero */}
    <section className="bg-card py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto">
          <img src={profileImage} alt={siteConfig.name} className="w-52 h-52 md:w-72 md:h-72 rounded-2xl object-cover shadow-warm-lg" />
          <div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">{siteConfig.name}</h1>
            <p className="text-lg text-muted-foreground mb-4">
              Soy abogada en {siteConfig.city}, Colombia. Elegí el derecho porque creo que todas las personas merecen entender sus derechos y tomar decisiones informadas. Me especializo en acompañar a personas, familias y pequeños negocios con un trato cercano, claro y profesional.
            </p>
            <p className="text-muted-foreground mb-6">
              Mi enfoque es simple: explicarte las cosas como son, sin tecnicismos innecesarios, y ayudarte a encontrar la mejor ruta para tu situación. Creo en el derecho preventivo: es mejor evitar un problema que resolverlo después.
            </p>
            <Link to="/contacto" className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-semibold text-sm inline-flex items-center gap-2 hover:opacity-90 transition-opacity">
              <Calendar className="h-4 w-4" /> Agenda una consulta
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Valores */}
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Mis valores</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { title: "Transparencia", desc: "Te explico cada paso, los costos y los posibles resultados antes de empezar." },
            { title: "Ética profesional", desc: "Actúo siempre con integridad y dentro del marco legal y deontológico." },
            { title: "Confidencialidad", desc: "Tu información es sagrada. Discreción total en cada caso." },
            { title: "Trato humano", desc: "Detrás de cada caso hay una persona. Te escucho y te acompaño." },
          ].map((v) => (
            <div key={v.title} className="bg-card p-6 rounded-xl shadow-warm flex gap-3">
              <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <div>
                <h3 className="font-serif font-bold text-foreground mb-1">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Formación */}
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Formación y credenciales</h2>
        <div className="space-y-3">
          {siteConfig.credenciales.map((c) => (
            <div key={c} className="bg-background p-4 rounded-lg flex items-center gap-3 shadow-warm">
              <CheckCircle className="h-5 w-5 text-primary shrink-0" />
              <span className="text-foreground">{c}</span>
            </div>
          ))}
          <div className="bg-background p-4 rounded-lg flex items-center gap-3 shadow-warm">
            <CheckCircle className="h-5 w-5 text-primary shrink-0" />
            <span className="text-foreground">{siteConfig.tarjetaProfesional}</span>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-muted-foreground mb-1">{siteConfig.modalidad}</p>
          <p className="text-muted-foreground">{siteConfig.horarios}</p>
        </div>
      </div>
    </section>

    {/* Qué esperar */}
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">¿Qué puedes esperar de una consulta?</h2>
        <p className="text-muted-foreground mb-8">Una conversación clara, sin presiones, donde entenderás tu situación legal y las opciones que tienes.</p>
        <div className="bg-card p-6 md:p-8 rounded-xl shadow-warm text-left space-y-4">
          {[
            "Te escucho con atención para entender tu caso.",
            "Te explico tus derechos y opciones en lenguaje sencillo.",
            "Te doy una recomendación honesta sobre el camino a seguir.",
            "Si decido que puedo ayudarte, definimos juntos(as) los pasos.",
            "Si no es mi área, te oriento hacia el profesional adecuado.",
          ].map((item) => (
            <div key={item} className="flex gap-3">
              <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <p className="text-foreground text-sm">{item}</p>
            </div>
          ))}
        </div>
        <Link to="/contacto" className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 mt-8 hover:opacity-90 transition-opacity">
          <Calendar className="h-5 w-5" /> Agendar consulta
        </Link>
      </div>
    </section>
  </div>
);

export default About;
