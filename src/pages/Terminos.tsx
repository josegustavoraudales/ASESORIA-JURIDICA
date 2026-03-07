import { siteConfig } from "@/config/siteConfig";
import { Link } from "react-router-dom";

const Terminos = () => (
  <div className="py-16 md:py-24 bg-background">
    <div className="container mx-auto px-4 max-w-3xl">
      <h1 className="font-serif text-3xl font-bold text-foreground mb-8">Términos y Condiciones</h1>
      
      <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
        <p className="text-sm italic">Última actualización: {new Date().toLocaleDateString("es-CO", { year: "numeric", month: "long", day: "numeric" })}</p>

        <p>Los presentes Términos y Condiciones regulan el acceso y uso del sitio web de <strong>{siteConfig.name}</strong>, en concordancia con la legislación colombiana aplicable, incluyendo la Ley 527 de 1999 (Comercio Electrónico), la Ley 1480 de 2011 (Estatuto del Consumidor) y demás normas pertinentes.</p>

        <h2 className="font-serif text-xl font-bold text-foreground">1. Aceptación de los Términos</h2>
        <p>Al acceder y utilizar este sitio web, el usuario acepta en su totalidad los presentes Términos y Condiciones. Si no está de acuerdo con alguno de ellos, debe abstenerse de utilizar el sitio.</p>

        <h2 className="font-serif text-xl font-bold text-foreground">2. Naturaleza del Contenido</h2>
        <p>La información publicada en este sitio web tiene carácter <strong>informativo y educativo</strong>. No constituye asesoría jurídica personalizada ni crea relación abogado-cliente. Cada caso requiere un análisis particular que solo puede realizarse mediante una consulta formal.</p>

        <h2 className="font-serif text-xl font-bold text-foreground">3. Servicios Profesionales</h2>
        <p>La relación profesional abogado-cliente se formaliza únicamente mediante la contratación expresa de los servicios, previo acuerdo sobre honorarios, alcance y condiciones. El envío de mensajes a través del formulario de contacto o redes sociales no constituye por sí solo una relación profesional.</p>

        <h2 className="font-serif text-xl font-bold text-foreground">4. No Garantía de Resultados</h2>
        <p>De conformidad con el Código de Ética del Abogado (Ley 1123 de 2007), no se garantizan resultados específicos en ningún proceso o gestión legal. Los resultados dependen de múltiples factores, incluyendo los hechos del caso, la normatividad aplicable y las decisiones de las autoridades competentes.</p>

        <h2 className="font-serif text-xl font-bold text-foreground">5. Propiedad Intelectual</h2>
        <p>Todo el contenido de este sitio web (textos, imágenes, diseño, logotipos) es propiedad de {siteConfig.name} o se utiliza con la debida autorización. Está protegido por la Ley 23 de 1982 (Derechos de Autor) y la Decisión Andina 351 de 1993. Queda prohibida su reproducción total o parcial sin autorización previa y escrita.</p>

        <h2 className="font-serif text-xl font-bold text-foreground">6. Limitación de Responsabilidad</h2>
        <p>{siteConfig.name} no se hace responsable por:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Decisiones tomadas con base en la información general publicada en el sitio.</li>
          <li>Interrupciones temporales del servicio web por causas técnicas.</li>
          <li>Contenido de sitios web de terceros enlazados desde esta página.</li>
          <li>Uso indebido del sitio web por parte de los usuarios.</li>
        </ul>

        <h2 className="font-serif text-xl font-bold text-foreground">7. Modificaciones</h2>
        <p>{siteConfig.name} se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones entrarán en vigor a partir de su publicación en el sitio web.</p>

        <h2 className="font-serif text-xl font-bold text-foreground">8. Legislación Aplicable</h2>
        <p>Estos Términos y Condiciones se rigen por las leyes de la República de Colombia. Cualquier controversia será resuelta por los tribunales competentes de la jurisdicción colombiana.</p>

        <h2 className="font-serif text-xl font-bold text-foreground">9. Contacto</h2>
        <p>Para consultas sobre estos términos:<br />
        Correo: {siteConfig.email}<br />
        WhatsApp: {siteConfig.phone}</p>

        <div className="pt-4">
          <Link to="/" className="text-primary hover:underline">← Volver al inicio</Link>
        </div>
      </div>
    </div>
  </div>
);

export default Terminos;
