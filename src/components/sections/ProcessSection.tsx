import { CheckCircle } from "lucide-react";
import { processSteps, trustPoints } from "@/config/siteConfig";

export const ProcessSection = () => (
  <section id="proceso" className="py-16 md:py-24 bg-card">
    <div className="container mx-auto px-4">
      {/* Cómo trabajo */}
      <div className="text-center mb-12">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3">¿Cómo trabajo?</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Un proceso claro y organizado para darte la mejor atención.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-16">
        {processSteps.map((s) => (
          <div key={s.step} className="text-center">
            <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 font-serif font-bold text-lg">
              {s.step}
            </div>
            <h3 className="font-serif font-bold text-foreground mb-1">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>

      {/* Por qué confiar */}
      <div className="text-center mb-8">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3">¿Por qué confiar en mí?</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {trustPoints.map((t) => (
          <div key={t.title} className="flex gap-3">
            <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
            <div>
              <h3 className="font-serif font-bold text-foreground mb-1">{t.title}</h3>
              <p className="text-sm text-muted-foreground">{t.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
