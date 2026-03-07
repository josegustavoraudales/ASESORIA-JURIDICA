import { Link } from "react-router-dom";
import { Shield, Heart, Briefcase, FileText, Home, Building, ShoppingBag, Building2, ArrowRight } from "lucide-react";
import { services } from "@/config/siteConfig";

const iconMap: Record<string, React.ElementType> = {
  Shield, Heart, Briefcase, FileText, Home, Building, ShoppingBag, Building2,
};

const Services = () => (
  <div>
    <section className="bg-card py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Servicios legales</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Te acompaño en diversas áreas del derecho con un enfoque claro, preventivo y humano. Conoce mis áreas de práctica y cómo puedo ayudarte.
        </p>
      </div>
    </section>

    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((s) => {
            const Icon = iconMap[s.icon] || Shield;
            return (
              <Link
                key={s.id}
                to={s.slug}
                className="bg-card p-8 rounded-xl shadow-warm hover:shadow-warm-lg transition-all hover:-translate-y-1 group flex gap-4"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{s.title}</h2>
                  <p className="text-muted-foreground mb-3">{s.shortDesc}</p>
                  <span className="text-primary font-semibold text-sm flex items-center gap-1">
                    Más información <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 max-w-3xl mx-auto bg-card p-6 rounded-xl shadow-warm">
          <p className="text-sm text-muted-foreground text-center">
            <strong>Nota:</strong> Las áreas marcadas como "orientación" implican una asesoría inicial y acompañamiento, pero no necesariamente representación judicial completa. En la consulta evaluamos juntos(as) el alcance del servicio según tu caso.
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default Services;
