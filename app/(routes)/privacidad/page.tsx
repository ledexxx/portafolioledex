import type { Metadata } from "next";
import ContainerPage from "@/components/container-page";
import TransitionPage from "@/components/transition-page";

export const metadata: Metadata = {
    title: "Política de Privacidad",
    description: "Política de privacidad de Leonel Delgado — LEDEX. Información sobre el tratamiento de datos personales conforme al RGPD.",
    robots: { index: false, follow: false },
};

const sections = [
    {
        titulo: "1. Responsable del tratamiento",
        contenido: `El responsable del tratamiento de los datos personales recogidos en este sitio web es Leonel Delgado (en adelante, "LEDEX"), con domicilio en Soria, España. Puede contactar con el responsable a través del correo electrónico disponible en la sección de contacto.`,
    },
    {
        titulo: "2. Datos que recopilamos",
        contenido: `Este sitio web puede recopilar los siguientes datos personales: nombre y apellidos, dirección de correo electrónico, número de teléfono y cualquier otra información que el usuario facilite voluntariamente a través de formularios de contacto o comunicación directa.`,
    },
    {
        titulo: "3. Finalidad del tratamiento",
        contenido: `Los datos personales proporcionados se utilizan exclusivamente para: responder a consultas y solicitudes de información, gestionar la relación comercial con clientes y potenciales clientes, y enviar comunicaciones relacionadas con los servicios ofrecidos, siempre con el consentimiento previo del usuario.`,
    },
    {
        titulo: "4. Base jurídica",
        contenido: `El tratamiento de sus datos se basa en el consentimiento explícito del usuario, en la ejecución de un contrato o en el interés legítimo del responsable, conforme al Reglamento General de Protección de Datos (RGPD — Reglamento UE 2016/679) y la Ley Orgánica 3/2018 de Protección de Datos Personales (LOPDGDD).`,
    },
    {
        titulo: "5. Conservación de datos",
        contenido: `Los datos personales se conservarán durante el tiempo estrictamente necesario para cumplir con la finalidad para la que fueron recogidos y, en todo caso, durante los plazos legalmente establecidos.`,
    },
    {
        titulo: "6. Cesión de datos a terceros",
        contenido: `LEDEX no cederá sus datos personales a terceros salvo obligación legal. No se realizan transferencias internacionales de datos fuera del Espacio Económico Europeo.`,
    },
    {
        titulo: "7. Derechos del usuario",
        contenido: `El usuario puede ejercer en cualquier momento sus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad de datos, dirigiéndose por escrito al responsable a través del correo de contacto disponible en este sitio web. Asimismo, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).`,
    },
    {
        titulo: "8. Seguridad",
        contenido: `LEDEX adopta las medidas técnicas y organizativas necesarias para garantizar la seguridad de sus datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado.`,
    },
    {
        titulo: "9. Cambios en esta política",
        contenido: `Esta política de privacidad puede ser actualizada en cualquier momento. La versión vigente estará siempre disponible en esta página. Le recomendamos revisarla periódicamente.`,
    },
];

export default function PrivacidadPage() {
    return (
        <>
            <TransitionPage />
            <ContainerPage>
                <div className="max-w-3xl mx-auto px-4 py-16">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        Política de <span className="text-secondary">Privacidad</span>
                    </h1>
                    <p className="text-sm text-white/40 mb-10">
                        Última actualización: junio de 2026
                    </p>

                    <div className="flex flex-col gap-8">
                        {sections.map((s, i) => (
                            <div key={i} className="flex flex-col gap-2">
                                <h2 className="text-base font-semibold text-white/90">{s.titulo}</h2>
                                <p className="text-sm text-white/60 leading-relaxed">{s.contenido}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </ContainerPage>
        </>
    );
}