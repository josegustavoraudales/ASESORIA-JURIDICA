import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/config/siteConfig";

const Blog = () => (
  <div>
    <section className="bg-card py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Contenido y Blog</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Artículos, guías y tips legales en lenguaje sencillo para que tomes mejores decisiones.
        </p>
      </div>
    </section>

    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-6">
          {blogPosts.map((post) => (
            <article key={post.title} className="bg-card p-6 md:p-8 rounded-xl shadow-warm group hover:shadow-warm-lg transition-all">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                <span className="text-xs text-primary font-semibold uppercase">{post.category}</span>
                <span className="text-xs text-muted-foreground">
                  {new Date(post.date).toLocaleDateString("es-CO", { year: "numeric", month: "long", day: "numeric" })}
                </span>
              </div>
              <h2 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{post.title}</h2>
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <span className="text-primary font-semibold text-sm flex items-center gap-1 cursor-pointer">
                Leer más <ArrowRight className="h-4 w-4" />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Blog;
