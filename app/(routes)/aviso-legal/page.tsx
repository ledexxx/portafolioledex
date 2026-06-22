import type { Metadata } from "next";
import ContainerPage from "@/components/container-page";
import TransitionPage from "@/components/transition-page";

export const metadata: Metadata = {
    title: "Aviso Legal",
    description: "Aviso legal de Leonel Delgado — LEDEX. Términos y condiciones de uso del sitio web.",
    robots: { index: false, follow: false },
};

const sections = [
    {
        titulo: "1. Datos identificativos",
        contenido: `En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se facilitan los siguientes datos identificativos: Titular: Leonel Delgado | Denominación comercial: LEDEX | Domicilio: Soria, España | Correo electrónico: disponible en la sección de contacto | Sitio web: www.ledexcorp.site`,
    },
    {
        titulo: "2. Objeto y ámbito de aplicación",
        contenido: `El presente aviso legal regula el acceso y uso del sitio web www.ledexcorp.site, del que es titular Leonel Delgado (LEDEX). El acceso a este sitio web supone la aceptación plena y sin reservas de las disposiciones recogidas en este aviso legal.`,
    },
    {
        titulo: "3. Propiedad intelectual e industrial",
        contenido: `Todos los contenidos del sitio web — incluyendo textos, imágenes, diseño gráfico, código fuente, logotipos y cualquier otro elemento — son propiedad de Leonel Delgado o se dispone de licencia para su uso, y están protegidos por la legislación española e internacional de propiedad intelectual e industrial. Queda prohibida su reproducción, distribución, comunicación pública o transformación sin autorización expresa.`,
    },
    {
        titulo: "4. Condiciones de uso",
        contenido: `El usuario se compromete a hacer un uso adecuado de los contenidos y servicios ofrecidos a través del sitio web, y en particular a no emplearlos para realizar actividades ilícitas o contrarias a la buena fe, al orden público o a la legislación vigente. LEDEX se reserva el derecho a retirar el acceso al sitio web en caso de incumplimiento de estas condiciones.`,
    },
    {
        titulo: "5. Exclusión de responsabilidad",
        contenido: `LEDEX no se hace responsable de los daños y perjuicios de cualquier naturaleza derivados del acceso o uso del sitio web, ni de los posibles errores u omisiones en los contenidos publicados. El sitio puede contener enlaces a páginas de terceros sobre cuyo contenido LEDEX no tiene ningún control ni responsabilidad.`,
    },
    {
        titulo: "6. Legislación aplicable y jurisdicción",
        contenido: `Las presentes condiciones se rigen por la legislación española. Para la resolución de cualquier conflicto derivado del acceso o uso de este sitio web, las partes se someten expresamente a los juzgados y tribunales de Soria, con renuncia a cualquier otro fuero que pudiera corresponderles.`,
    },
];

export default function AvisoLegalPage() {
    return (
        <>
            <TransitionPage />
            <ContainerPage>
                <div className="max-w-3xl mx-auto px-4 py-16">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        Aviso <span className="text-secondary">Legal</span>
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