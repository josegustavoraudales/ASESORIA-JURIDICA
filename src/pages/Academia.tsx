import { useState, useEffect } from "react";
import { BookOpen, FileText, Play, Download } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { siteConfig } from "@/config/siteConfig";

interface Material {
  id: string;
  title: string;
  description: string | null;
  type: string;
  price: number;
  file_url: string | null;
  file_name: string | null;
  created_at: string;
}

const typeConfig: Record<string, { label: string; icon: React.ElementType; color: string }> = {
  curso: { label: "Curso", icon: Play, color: "bg-primary/10 text-primary" },
  nota: { label: "Nota académica", icon: FileText, color: "bg-secondary/20 text-secondary-foreground" },
  guia: { label: "Guía", icon: Download, color: "bg-accent/20 text-accent-foreground" },
};

const formatPrice = (price: number) =>
  price === 0 ? "Gratis" : new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", minimumFractionDigits: 0 }).format(price);

const Academia = () => {
  const [materials, setMaterials] = useState<Material[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMaterials = async () => {
      const { data, error } = await supabase
        .from("academia_materials")
        .select("*")
        .eq("is_published", true)
        .order("created_at", { ascending: false });
      if (!error && data) setMaterials(data);
      setLoading(false);
    };
    fetchMaterials();
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <BookOpen className="h-7 w-7 text-primary" />
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Academia</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Cursos, notas y guías académicas para entender el derecho colombiano de forma clara y práctica.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          {loading ? (
            <p className="text-center text-muted-foreground py-12">Cargando materiales...</p>
          ) : materials.length === 0 ? (
            <div className="text-center py-16">
              <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
              <p className="text-muted-foreground">Próximamente se publicará material académico.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {materials.map((item) => {
                const config = typeConfig[item.type] || typeConfig.nota;
                const Icon = config.icon;
                return (
                  <article
                    key={item.id}
                    className="bg-card p-6 rounded-xl shadow-warm hover:shadow-warm-lg transition-all hover:-translate-y-1 group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${config.color}`}>
                        <Icon className="h-3.5 w-3.5" />
                        {config.label}
                      </span>
                      <span className="text-sm font-bold text-primary">{formatPrice(item.price)}</span>
                    </div>
                    <h3 className="font-serif font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                    )}
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {new Date(item.created_at).toLocaleDateString("es-CO", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                      {item.file_url && (
                        <a
                          href={item.file_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary font-semibold hover:underline flex items-center gap-1"
                        >
                          <Download className="h-3.5 w-3.5" /> Descargar
                        </a>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3">
            ¿Quieres más material?
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-6">
            Sígueme en redes sociales donde comparto contenido académico y tips legales constantemente.
          </p>
          <a
            href={siteConfig.tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            Sígueme en TikTok
          </a>
        </div>
      </section>
    </div>
  );
};

export default Academia;
