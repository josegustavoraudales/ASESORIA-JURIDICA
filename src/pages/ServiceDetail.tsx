import { useParams, Link } from "react-router-dom";
import { Shield, Heart, Briefcase, FileText, Home, Building, ShoppingBag, Building2, Calendar, MessageCircle, ArrowLeft, CheckCircle } from "lucide-react";
import { services, siteConfig } from "@/config/siteConfig";

const iconMap: Record<string, React.ElementType> = {
  Shield, Heart, Briefcase, FileText, Home, Building, ShoppingBag, Building2,
};

const serviceDetails: Record<string, {
  description: string;
  whenApplies: string[];
  includes: string[];
  process: string[];
}> = {
  tutelas: {
    description: "La acción de tutela es el mecanismo constitucional más importante para proteger tus derechos fundamentales en Colombia. Te acompaño en la redacción, presentación y seguimiento de tutelas, derechos de petición y otras acciones constitucionales.",
    whenApplies: ["Cuando una entidad vulnera tus derechos fundamentales (salud, trabajo, educación, vivienda)", "Necesitas respuesta urgente a un derecho de petición", "Te niegan un servicio o prestación de forma injusta", "Requieres proteger derechos de población vulnerable"],
    includes: ["Análisis de viabilidad de la tutela", "Redacción y presentación", "Seguimiento ante el juzgado", "Incidente de desacato si no cumplen"],
    process: ["Revisión de tu caso y documentos", "Evaluación de viabilidad y estrategia", "Redacción de la acción de tutela", "Presentación y seguimiento", "Acompañamiento hasta el cumplimiento"],
  },
  familia: {
    description: "El derecho de familia abarca las situaciones legales más personales e importantes de tu vida. Te acompaño con sensibilidad y profesionalismo en divorcios, custodias, alimentos y demás temas familiares.",
    whenApplies: ["Divorcio de mutuo acuerdo o contencioso", "Custodia, visitas y regulación de alimentos", "Reconocimiento de unión marital de hecho", "Orientación en casos de violencia intrafamiliar"],
    includes: ["Asesoría personalizada sobre tu situación familiar", "Redacción de acuerdos y demandas", "Representación en conciliaciones", "Acompañamiento durante todo el proceso"],
    process: ["Escucho tu situación con empatía", "Evaluamos opciones (acuerdo vs. proceso judicial)", "Preparación de documentos", "Representación y seguimiento", "Cierre y recomendaciones"],
  },
  laboral: {
    description: "Protejo tus derechos como trabajador(a) y asesoro a empleadores en el cumplimiento de la normativa laboral colombiana. Desde liquidaciones hasta acoso laboral.",
    whenApplies: ["Despido injustificado o sin liquidación completa", "Acoso laboral o mal ambiente de trabajo", "Revisión de contratos laborales", "Consultas sobre pensiones e incapacidades"],
    includes: ["Revisión de tu liquidación", "Redacción de reclamaciones", "Representación en conciliaciones", "Orientación sobre pensiones"],
    process: ["Revisión de documentos laborales", "Cálculo de derechos y prestaciones", "Estrategia de reclamación", "Gestión ante el empleador o entidad", "Seguimiento hasta resolución"],
  },
  civil: {
    description: "Te acompaño en la elaboración, revisión y negociación de contratos, así como en temas de responsabilidad civil y cobro de deudas.",
    whenApplies: ["Necesitas redactar o revisar un contrato", "Tienes un conflicto por incumplimiento contractual", "Requieres cobrar una deuda", "Tienes una reclamación por daños y perjuicios"],
    includes: ["Elaboración y revisión de contratos", "Cartas de cobro prejudicial", "Asesoría en negociación", "Orientación en procesos judiciales"],
    process: ["Análisis de tu situación", "Revisión de documentos", "Estrategia legal", "Ejecución de acciones", "Seguimiento"],
  },
  inmobiliario: {
    description: "Asesoro a arrendadores y arrendatarios en todo lo relacionado con contratos de arrendamiento, restitución de inmuebles y propiedad horizontal.",
    whenApplies: ["Vas a firmar o renovar un contrato de arrendamiento", "Tienes problemas con tu arrendatario o arrendador", "Necesitas iniciar un proceso de restitución de inmueble", "Tienes dudas sobre propiedad horizontal"],
    includes: ["Redacción de contratos de arrendamiento", "Asesoría en conflictos arrendatario-arrendador", "Orientación en restitución de inmueble", "Revisión de documentos inmobiliarios"],
    process: ["Análisis de tu situación", "Revisión del contrato actual", "Estrategia y opciones", "Ejecución", "Seguimiento"],
  },
  administrativo: {
    description: "Te ayudo a entender y responder requerimientos de entidades del Estado, interponer recursos administrativos y gestionar trámites con organismos públicos.",
    whenApplies: ["Recibiste un requerimiento de una entidad pública", "Necesitas interponer un recurso administrativo", "Tienes un trámite pendiente con el Estado", "Quieres reclamar ante una entidad"],
    includes: ["Análisis de requerimientos", "Redacción de respuestas", "Interposición de recursos", "Seguimiento de trámites"],
    process: ["Revisión del requerimiento", "Análisis legal", "Redacción de respuesta o recurso", "Presentación", "Seguimiento"],
  },
  consumidor: {
    description: "Defiendo tus derechos como consumidor ante empresas y ante la Superintendencia de Industria y Comercio (SIC). Garantías, publicidad engañosa y reclamaciones.",
    whenApplies: ["Un producto salió defectuoso y no te reconocen la garantía", "Fuiste víctima de publicidad engañosa", "Una empresa incumplió lo pactado", "Necesitas poner una queja ante la SIC"],
    includes: ["Redacción de reclamaciones", "Peticiones ante la SIC", "Asesoría sobre tus derechos", "Acompañamiento en audiencias"],
    process: ["Evaluación de tu caso", "Recopilación de evidencias", "Reclamación directa a la empresa", "Queja ante la SIC si es necesario", "Seguimiento"],
  },
  empresarial: {
    description: "Acompaño a emprendedores y pymes en la constitución de empresas, contratos comerciales y prevención de riesgos legales.",
    whenApplies: ["Vas a crear una empresa o negocio", "Necesitas contratos comerciales", "Quieres términos y condiciones para tu sitio web", "Buscas prevenir riesgos legales en tu negocio"],
    includes: ["Orientación en constitución de empresa", "Redacción de contratos comerciales", "Términos y condiciones / política de privacidad", "Asesoría en prevención de riesgos"],
    process: ["Entendimiento de tu negocio", "Diagnóstico legal", "Documentación necesaria", "Implementación", "Seguimiento periódico"],
  },
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.id === slug);
  const details = slug ? serviceDetails[slug] : null;

  if (!service || !details) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="font-serif text-2xl font-bold text-foreground mb-4">Servicio no encontrado</h1>
        <Link to="/servicios" className="text-primary font-semibold hover:underline">Ver todos los servicios</Link>
      </div>
    );
  }

  const Icon = iconMap[service.icon] || Shield;

  return (
    <div>
      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Link to="/servicios" className="text-primary text-sm font-semibold flex items-center gap-1 mb-6 hover:underline">
            <ArrowLeft className="h-4 w-4" /> Todos los servicios
          </Link>
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
              <Icon className="h-7 w-7 text-primary" />
            </div>
            <div>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">{service.title}</h1>
              <p className="text-lg text-muted-foreground max-w-2xl">{details.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-xl shadow-warm">
              <h2 className="font-serif text-xl font-bold text-foreground mb-4">¿Cuándo aplica?</h2>
              <ul className="space-y-3">
                {details.whenApplies.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-warm">
              <h2 className="font-serif text-xl font-bold text-foreground mb-4">¿Qué incluye?</h2>
              <ul className="space-y-3">
                {details.includes.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-8 text-center">Proceso paso a paso</h2>
          <div className="space-y-4">
            {details.process.map((step, i) => (
              <div key={i} className="bg-background p-4 rounded-lg flex items-center gap-4 shadow-warm">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-serif font-bold text-sm shrink-0">
                  {i + 1}
                </div>
                <p className="text-foreground">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-4">¿Necesitas ayuda con este tema?</h2>
          <p className="text-muted-foreground mb-6">Agenda una consulta o escríbeme por WhatsApp para evaluar tu caso.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link to="/contacto" className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
              <Calendar className="h-5 w-5" /> Agendar consulta
            </Link>
            <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-primary-foreground px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
              <MessageCircle className="h-5 w-5" /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
