import type { Metadata } from "next";
import ContainerPage from "@/components/container-page";
import TransitionPage from "@/components/transition-page";

export const metadata: Metadata = {
    title: "Política de Cookies",
    description: "Política de cookies de Leonel Delgado — LEDEX. Información sobre el uso de cookies en este sitio web.",
    robots: { index: false, follow: false },
};

const sections = [
    {
        titulo: "1. ¿Qué son las cookies?",
        contenido: `Las cookies son pequeños archivos de texto que los sitios web almacenan en el dispositivo del usuario cuando los visita. Permiten recordar información sobre la visita para mejorar la experiencia de navegación y obtener estadísticas de uso.`,
    },
    {
        titulo: "2. Cookies utilizadas en este sitio",
        contenido: `Este sitio web utiliza los siguientes tipos de cookies: (a) Cookies técnicas o necesarias — imprescindibles para el funcionamiento básico del sitio; (b) Cookies analíticas — utilizadas a través de Google Analytics (GA4) para recopilar información estadística sobre el uso del sitio de forma anonimizada; (c) Cookies de preferencias — guardan configuraciones del usuario para mejorar la experiencia.`,
    },
    {
        titulo: "3. Google Analytics",
        contenido: `Este sitio utiliza Google Analytics para analizar el tráfico web. Google Analytics recopila información de forma anónima sobre cómo los usuarios interactúan con el sitio. Puede consultar la política de privacidad de Google en: policies.google.com/privacy. Para desactivar el seguimiento de Google Analytics, puede utilizar el complemento de inhabilitación disponible en: tools.google.com/dlpage/gaoptout.`,
    },
    {
        titulo: "4. Cómo gestionar las cookies",
        contenido: `Puede configurar su navegador para rechazar todas las cookies, aceptar solo determinadas cookies o eliminar las cookies ya almacenadas. Tenga en cuenta que la desactivación de algunas cookies puede afectar al funcionamiento del sitio. La configuración de cookies varía según el navegador: Chrome (Ajustes > Privacidad), Firefox (Opciones > Privacidad), Safari (Preferencias > Privacidad), Edge (Configuración > Privacidad).`,
    },
    {
        titulo: "5. Consentimiento",
        contenido: `Al navegar por este sitio web, el usuario consiente el uso de cookies conforme a esta política. Puede retirar su consentimiento en cualquier momento eliminando las cookies de su navegador o configurándolo para que no las acepte.`,
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