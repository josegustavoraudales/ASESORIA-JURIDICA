import { useState } from "react";
import { Shield, Heart, Briefcase, FileText, CheckCircle, ChevronDown, ChevronUp, Calendar } from "lucide-react";
import { services } from "@/config/siteConfig";

const iconMap: Record<string, React.ElementType> = {
  Shield, Heart, Briefcase, FileText,
};

const serviceDetails: Record<string, {
  description: string;
  processes: string[];
}> = {
  "civil-familia": {
    description: "Te acompaño con sensibilidad y profesionalismo en temas civiles y de familia.",
    processes: [
      "Custodia y regulación de visitas",
      "Fijación y cobro de alimentos",
      "Unión marital de hecho",
      "Sucesiones y herencias",
      "Elaboración y revisión de contratos civiles",
      "Cobro de deudas y procesos ejecutivos",
      "Responsabilidad civil",
      "Procesos de pertenencia",
      "Declaración de bienes vacantes",
      "Liquidación de sociedad conyugal o patrimonial",
    ],
  },
  laboral: {
    description: "Protejo tus derechos como trabajador(a) y asesoro a empleadores en cumplimiento normativo.",
    processes: [
      "Despido injustificado y reintegro",
      "Liquidación de prestaciones sociales",
      "Acoso laboral (Ley 1010)",
      "Revisión y redacción de contratos laborales",
      "Pensiones de vejez, invalidez y sobrevivientes",
      "Accidentes de trabajo y enfermedades laborales",
      "Conciliaciones laborales",
      "Estabilidad laboral reforzada",
      "Reclamaciones ante fondos de pensiones y EPS",
      "Cálculo de indemnizaciones",
    ],
  },
  "constitucional-administrativo": {
    description: "Defiendo tus derechos fundamentales y te represento ante entidades del Estado.",
    processes: [
      "Acción de tutela",
      "Derechos de petición",
      "Acciones populares y de grupo",
      "Recursos de reposición y apelación",
      "Revocatoria directa",
      "Silencio administrativo",
      "Reclamaciones ante entidades públicas",
      "Trámites ante la Procuraduría y Defensoría",
      "Incidentes de desacato",
      "Habeas data",
    ],
  },
  "asesoria-integral": {
    description: "Orientación jurídica preventiva y acompañamiento en cualquier área del derecho.",
    processes: [
      "Consulta jurídica personalizada",
      "Revisión y análisis de documentos legales",
      "Orientación en trámites notariales",
      "Asesoría para emprendedores y pymes",
      "Elaboración de términos y condiciones web",
      "Prevención de riesgos legales",
      "Conceptos jurídicos escritos",
      "Acompañamiento en negociaciones",
      "Orientación en procesos ante la SIC",
      "Asesoría en protección al consumidor",
    ],
  },
};

export const ServicesSection = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="servicios" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3">Servicios Jurídicos</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Áreas de enfoque con procesos específicos para tu caso.</p>
        </div>
        <div className="max-w-4xl mx-auto space-y-3">
          {services.map((s) => {
            const Icon = iconMap[s.icon] || Shield;
            const details = serviceDetails[s.id];
            const isOpen = openId === s.id;
            return (
              <div key={s.id} className="bg-card rounded-xl shadow-warm overflow-hidden transition-all">
                <button
                  onClick={() => setOpenId(isOpen ? null : s.id)}
                  className="w-full text-left p-5 md:p-6 flex items-center gap-4"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif font-bold text-foreground">{s.title}</h3>
                    <p className="text-sm text-muted-foreground">{s.shortDesc}</p>
                  </div>
                  {isOpen ? <ChevronUp className="h-5 w-5 text-primary shrink-0" /> : <ChevronDown className="h-5 w-5 text-muted-foreground shrink-0" />}
                </button>
                {isOpen && details && (
                  <div className="px-5 md:px-6 pb-5 md:pb-6 animate-fade-in">
                    <p className="text-muted-foreground mb-4">{details.description}</p>
                    <h4 className="font-serif font-bold text-foreground text-sm mb-3">Procesos y trámites:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {details.processes.map((item) => (
                        <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" /> {item}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#contacto"
                      className="mt-4 inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
                    >
                      <Calendar className="h-4 w-4" /> Agendar consulta
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
