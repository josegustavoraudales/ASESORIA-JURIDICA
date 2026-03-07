import { siteConfig } from "@/config/siteConfig";
import { Link } from "react-router-dom";

const PoliticaDatos = () => (
  <div className="py-16 md:py-24 bg-background">
    <div className="container mx-auto px-4 max-w-3xl">
      <h1 className="font-serif text-3xl font-bold text-foreground mb-8">Política de Tratamiento de Datos Personales</h1>
      
      <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
        <p className="text-sm italic">Última actualización: {new Date().toLocaleDateString("es-CO", { year: "numeric", month: "long", day: "numeric" })}</p>

        <p>En cumplimiento de la Ley 1581 de 2012 (Ley de Protección de Datos Personales), el Decreto 1377 de 2013 y demás normas concordantes de la República de Colombia, <strong>{siteConfig.name}</strong>, identificada como responsable del tratamiento de datos personales, informa la presente política.</p>

        <h2 className="font-serif text-xl font-bold text-foreground">1. Responsable del Tratamiento</h2>
        <p><strong>{siteConfig.name}</strong><br />
        Abogada titulada<br />
        Correo: {siteConfig.email}<br />
        Teléfono: {siteConfig.phone}<br />
        Dirección: {siteConfig.city}, Colombia</p>

        <h2 className="font-serif text-xl font-bold text-foreground">2. Finalidad del Tratamiento</h2>
        <p>Los datos personales recopilados serán utilizados para:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Responder consultas y solicitudes de asesoría jurídica.</li>
          <li>Gestionar la relación profesional abogado-cliente.</li>
          <li>Enviar información relevante sobre servicios jurídicos, previa autorización.</li>
          <li>Cumplir obligaciones legales y contractuales.</li>
          <li>Llevar registros internos de gestión profesional.</li>
        </ul>

        <h2 className="font-serif text-xl font-bold text-foreground">3. Datos que se Recopilan</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Nombre completo</li>
          <li>Ciudad de residencia</li>
          <li>Correo electrónico</li>
          <li>Número de teléfono o WhatsApp</li>
          <li>Descripción general del caso o consulta</li>
        </ul>

        <h2 className="font-serif text-xl font-bold text-foreground">4. Derechos del Titular</h2>
        <p>De conformidad con el artículo 8 de la Ley 1581 de 2012, el titular de los datos tiene derecho a:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Conocer, actualizar y rectificar sus datos personales.</li>
          <li>Solicitar prueba de la autorización otorgada.</li>
          <li>Ser informado sobre el uso que se le ha dado a sus datos.</li>
          <li>Presentar quejas ante la Superintendencia de Industria y Comercio (SIC) por infracciones.</li>
          <li>Revocar la autorización y/o solicitar la supresión de los datos.</li>
          <li>Acceder gratuitamente a sus datos personales.</li>
        </ul>

        <h2 className="font-serif text-xl font-bold text-foreground">5. Seguridad de la Información</h2>
        <p>Se adoptan medidas técnicas, humanas y administrativas razonables para proteger los datos personales contra acceso no autorizado, pérdida, alteración o uso indebido, conforme al principio de seguridad establecido en la Ley 1581 de 2012.</p>

        <h2 className="font-serif text-xl font-bold text-foreground">6. Transferencia y Transmisión de Datos</h2>
        <p>Los datos personales no serán vendidos, cedidos ni transferidos a terceros sin autorización previa del titular, salvo que medie obligación legal o requerimiento de autoridad competente.</p>

        <h2 className="font-serif text-xl font-bold text-foreground">7. Vigencia</h2>
        <p>Los datos personales serán almacenados durante el tiempo necesario para cumplir las finalidades descritas y conforme a los términos legales aplicables. El titular podrá solicitar la supresión de sus datos en cualquier momento, salvo que exista obligación legal de conservarlos.</p>

        <h2 className="font-serif text-xl font-bold text-foreground">8. Canal de Atención</h2>
        <p>Para ejercer sus derechos como titular, puede comunicarse a:<br />
        Correo: {siteConfig.email}<br />
        WhatsApp: {siteConfig.phone}</p>

        <div className="pt-4">
          <Link to="/" className="text-primary hover:underline">← Volver al inicio</Link>
        </div>
      </div>
    </div>
  </div>
);

export default PoliticaDatos;
