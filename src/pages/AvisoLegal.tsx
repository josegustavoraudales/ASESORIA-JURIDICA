import { siteConfig } from "@/config/siteConfig";
import { Link } from "react-router-dom";

const AvisoLegal = () => (
  <div className="py-16 md:py-24 bg-background">
    <div className="container mx-auto px-4 max-w-3xl">
      <h1 className="font-serif text-3xl font-bold text-foreground mb-8">Aviso Legal</h1>
      
      <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
        <p className="text-sm italic">Última actualización: {new Date().toLocaleDateString("es-CO", { year: "numeric", month: "long", day: "numeric" })}</p>

        <h2 className="font-serif text-xl font-bold text-foreground">1. Identificación del Titular</h2>
        <p><strong>{siteConfig.name}</strong><br />
        Abogada titulada – {siteConfig.universidad}<br />
        {siteConfig.tarjetaProfesional}<br />
        Domicilio profesional: {siteConfig.city}, Colombia<br />
        Correo electrónico: {siteConfig.email}<br />
        Teléfono: {siteConfig.phone}</p>

        <h2 className="font-serif text-xl font-bold text-foreground">2. Marco Normativo</h2>
        <p>Este sitio web y la actividad profesional de su titular se rigen por:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Constitución Política de Colombia</strong> – Artículos 15 (derecho a la intimidad) y 20 (libertad de información).</li>
          <li><strong>Ley 1581 de 2012</strong> – Régimen General de Protección de Datos Personales.</li>
          <li><strong>Decreto 1377 de 2013</strong> – Reglamentario de la Ley 1581 de 2012.</li>
          <li><strong>Ley 527 de 1999</strong> – Acceso y uso de mensajes de datos, comercio electrónico y firmas digitales.</li>
          <li><strong>Ley 1480 de 2011</strong> – Estatuto del Consumidor.</li>
          <li><strong>Ley 1123 de 2007</strong> – Código Disciplinario del Abogado.</li>
          <li><strong>Ley 23 de 1982</strong> – Derechos de Autor.</li>
          <li><strong>Decisión Andina 351 de 1993</strong> – Régimen Común sobre Derechos de Autor.</li>
          <li><strong>Ley 1273 de 2009</strong> – Delitos informáticos.</li>
        </ul>

        <h2 className="font-serif text-xl font-bold text-foreground">3. Ejercicio Profesional</h2>
        <p>{siteConfig.name} ejerce la profesión de abogada conforme a la Ley 1123 de 2007 y cuenta con tarjeta profesional vigente expedida por el Consejo Superior de la Judicatura. Su ejercicio profesional se rige por los principios de lealtad, honradez, diligencia y secreto profesional.</p>

        <h2 className="font-serif text-xl font-bold text-foreground">4. Secreto Profesional</h2>
        <p>De conformidad con el artículo 74 de la Constitución Política de Colombia y el artículo 28 de la Ley 1123 de 2007, la información compartida por los clientes está protegida por el secreto profesional y no será revelada a terceros bajo ninguna circunstancia, salvo autorización expresa del cliente o mandato legal.</p>

        <h2 className="font-serif text-xl font-bold text-foreground">5. Publicidad Profesional</h2>
        <p>La información contenida en este sitio web cumple con lo establecido en el artículo 31 de la Ley 1123 de 2007 respecto a la publicidad profesional del abogado. No se hacen afirmaciones falsas, engañosas ni se garantizan resultados.</p>

        <h2 className="font-serif text-xl font-bold text-foreground">6. Exclusión de Garantía de Resultados</h2>
        <p>De acuerdo con la ética profesional y la Ley 1123 de 2007, <strong>no se garantizan resultados específicos</strong> en ningún proceso, trámite o gestión legal. El ejercicio de la abogacía es una obligación de medios, no de resultados.</p>

        <h2 className="font-serif text-xl font-bold text-foreground">7. Uso de Cookies y Tecnologías</h2>
        <p>Este sitio web puede utilizar cookies y tecnologías similares para mejorar la experiencia del usuario. El uso continuado del sitio implica la aceptación de estas tecnologías conforme a la normativa colombiana vigente.</p>

        <h2 className="font-serif text-xl font-bold text-foreground">8. Jurisdicción y Ley Aplicable</h2>
        <p>Este aviso legal se rige por las leyes de la República de Colombia. Para cualquier controversia derivada del uso de este sitio web, serán competentes los juzgados y tribunales de la jurisdicción colombiana.</p>

        <h2 className="font-serif text-xl font-bold text-foreground">9. Autoridad de Vigilancia</h2>
        <p>La actividad profesional de {siteConfig.name} está sujeta a la vigilancia del <strong>Consejo Superior de la Judicatura</strong> y, en materia de protección de datos, a la <strong>Superintendencia de Industria y Comercio (SIC)</strong>.</p>

        <h2 className="font-serif text-xl font-bold text-foreground">10. Contacto</h2>
        <p>Para consultas sobre este aviso legal:<br />
        Correo: {siteConfig.email}<br />
        WhatsApp: {siteConfig.phone}</p>

        <div className="pt-4">
          <Link to="/" className="text-primary hover:underline">← Volver al inicio</Link>
        </div>
      </div>
    </div>
  </div>
);

export default AvisoLegal;
