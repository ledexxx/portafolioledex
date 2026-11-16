import type { Metadata } from "next";
import ContainerPage from "@/components/container-page";
import TransitionPage from "@/components/transition-page";

export const metadata: Metadata = {
    title: "Política de Cookies",
    description: "Política de cookies de Leonel Delgado — LEDEX. Información sobre el uso de cookies en este sitio web.",
    alternates: { canonical: "https://www.ledexcorp.site/cookies" },
    robots: { index: false, follow: true },
};

const sections = [
    {
        titulo: "1. ¿Qué son las cookies?",
        contenido: `Las cookies son pequeños archivos de texto que los sitios web almacenan en el dispositivo del usuario cuando los visita. Permiten recordar información sobre la visita para mejorar la experiencia de navegación y obtener estadísticas de uso.`,
    },
    {
        titulo: "2. Cookies utilizadas en este sitio",
        contenido: `La preferencia de consentimiento se guarda en el almacenamiento local del navegador con la clave ledex_cookie_consent. Las cookies analíticas de Google Analytics (GA4) solo se habilitan tras pulsar Aceptar. Rechazarlas permite seguir usando el portafolio.`,
    },
    {
        titulo: "3. Google Analytics",
        contenido: `Si acepta las cookies analíticas, este sitio utiliza Google Analytics para recopilar estadísticas de navegación. Puede consultar la política de privacidad de Google en: policies.google.com/privacy. Para desactivar el seguimiento de Google Analytics, puede utilizar el complemento de inhabilitación disponible en: tools.google.com/dlpage/gaoptout.`,
    },
    {
        titulo: "4. Cómo gestionar las cookies",
        contenido: `Puede configurar su navegador para rechazar todas las cookies, aceptar solo determinadas cookies o eliminar las cookies ya almacenadas. Tenga en cuenta que la desactivación de algunas cookies puede afectar al funcionamiento del sitio. La configuración de cookies varía según el navegador: Chrome (Ajustes > Privacidad), Firefox (Opciones > Privacidad), Safari (Preferencias > Privacidad), Edge (Configuración > Privacidad).`,
    },
    {
        titulo: "5. Consentimiento",
        contenido: `Navegar por este sitio no implica aceptar las cookies analíticas. Puede aceptar o rechazar en el aviso y cambiar su decisión con el botón Configurar cookies. Al rechazar, se desactiva el seguimiento y se eliminan las cookies de Analytics accesibles desde este dominio.`,
    },
    {
        titulo: "6. Actualizaciones",
        contenido: `Esta política de cookies puede modificarse en función de exigencias legislativas o reglamentarias, o con el fin de adaptar dicha política a las instrucciones dictadas por la Agencia Española de Protección de Datos. La versión vigente estará siempre publicada en esta página.`,
    },
];

export default function CookiesPage() {
    return (
        <>
            <TransitionPage />
            <ContainerPage>
                <div className="max-w-3xl mx-auto px-4 py-16">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        Política de <span className="text-secondary">Cookies</span>
                    </h1>
                    <p className="text-sm text-white/40 mb-10">
                        Última actualización: noviembre de 2026
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
