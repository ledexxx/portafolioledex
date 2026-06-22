import {
    HomeIcon,
    UserRound,
    Globe,
    Briefcase,
} from "lucide-react";
import { FaBehance, FaFileAlt, FaLinkedin, FaGithub } from "react-icons/fa";

// ══════════════════════════════════════════════════════════════════
// TIPOS
// ══════════════════════════════════════════════════════════════════

export interface Service {
    id: number;
    title: string;
    description: string;
    icon: string;           // nombre Lucide, "img:URL" para CDN, o "Seo"
    features: string[];
}
export interface PortfolioItem {
    id: number;
    title: string;
    image: string;
    urlGithub: string;
    urlDemo: string;
    description: string;
}

export interface TimelineItem {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    date: string;
}

export interface CounterItem {
    id: number;
    endCounter: number;
    text: string;
    lineRight: boolean;
    lineRightMobile: boolean;
}

export interface NavItem {
    id: number;
    title: string;
    icon: JSX.Element;
    link: string;
}

export type CVSource = { language: string; url: string };

export interface SocialNetwork {
    id: number;
    logo: JSX.Element;
    src: string | CVSource[];
    title: string;
}

// ══════════════════════════════════════════════════════════════════
// NAVEGACIÓN
// ══════════════════════════════════════════════════════════════════

export const itemsNavbar: NavItem[] = [
    {
        id: 1,
        title: "Inicio",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "Sobre mí",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Servicios",
        icon: <Globe size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Portafolio",
        icon: <Briefcase size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
];

// ══════════════════════════════════════════════════════════════════
// REDES SOCIALES
// ══════════════════════════════════════════════════════════════════

export const socialNetworks: SocialNetwork[] = [
    {
        id: 1,
        logo: <FaBehance size={30} />,
        src: "https://www.behance.net/ledex_designs",
        title: "Mi perfil de Behance",
    },
    {
        id: 2,
        logo: <FaLinkedin size={30} />,
        src: "https://www.linkedin.com/in/leonel-delgado-264784217/",
        title: "Mi perfil de LinkedIn",
    },
    {
        id: 3,
        logo: <FaGithub size={30} />,
        src: "https://github.com/ledexxx",
        title: "Mi perfil de GitHub",
    },
    {
        id: 4,
        logo: <FaFileAlt size={30} />,
        src: [
            { language: "Español", url: "/downloable/cv_español.pdf" },
            { language: "Inglés",  url: "/downloable/cv_english.pdf" },
        ],
        title: "Descargar Currículum Vitae",
    },
];

// ══════════════════════════════════════════════════════════════════
// SERVICIOS
// ══════════════════════════════════════════════════════════════════

export const servicesData: Service[] = [
    {
        id: 1,
        title: "Consultoría SEO",
        description:
            "Posiciono tu sitio en los primeros resultados de Google con estrategia técnica, auditorías profundas y optimización continua que realmente mueve métricas.",
        icon: "img:https://cdn.simpleicons.org/google/white",
        features: [
            "Auditoría SEO técnica completa",
            "Optimización On-Page y Core Web Vitals",
            "Arquitectura web y estructura de URLs",
            "Estrategia de contenido y keywords",
            "Integración con Google Search Console",
            "SEO para WordPress, Shopify y Next.js",
        ],
    },
    {
        id: 2,
        title: "Desarrollo web",
        description:
            "Desarrollo sitios web a medida, rápidos y optimizados, integrando código limpio con criterio de diseño y visión SEO desde el inicio.",
        icon: "code",
        features: [
            "Desarrollo frontend (React / Next.js)",
            "WordPress y Shopify",
            "Rendimiento y Core Web Vitals",
            "Integración de APIs",
            "Mantenimiento y soporte",
        ],
    },
    {
        id: 3,
        title: "Diseño web & Branding",
        description:
            "Creo identidades visuales y interfaces que comunican, convierten y se recuerdan — con un criterio estético cuidado y orientado a resultados.",
        icon: "palette",
        features: [
            "Diseño UI/UX",
            "Identidad de marca y logotipo",
            "Paleta de colores y tipografía",
            "Prototipado interactivo",
            "Responsive design",
        ],
    },
    {
        id: 4,
        title: "Software a medida",
        description:
            "Desarrollo soluciones de software personalizadas que automatizan procesos, reducen fricción operativa y escalan con tu negocio.",
        icon: "img:https://cdn.simpleicons.org/github/white",
        features: [
            "Análisis y levantamiento de requerimientos",
            "Desarrollo full-stack a medida",
            "Integración con sistemas existentes",
            "Panel de administración personalizado",
            "Documentación técnica incluida",
            "Mantenimiento y actualizaciones",
        ],
    },
    {
        id: 5,
        title: "Aplicaciones Android",
        description:
            "Creo aplicaciones Android nativas e híbridas con enfoque en rendimiento, usabilidad y diseño moderno listas para publicar en Google Play.",
        icon: "img:https://cdn.simpleicons.org/android/white",
        features: [
            "Desarrollo con React Native / Kotlin",
            "Diseño UI adaptado a Material Design",
            "Integración con APIs y servicios externos",
            "Notificaciones push",
            "Publicación en Google Play Store",
            "Soporte post-lanzamiento",
        ],
    },
    {
    id: 6,
    title: "Google Ads (PPC)",
    description:
        "Creo y optimizo campañas de pago por clic en Google Ads que generan tráfico cualificado desde el primer día — con presupuesto controlado y orientado a conversión real.",
    icon: "img:https://cdn.simpleicons.org/googleads/white",
    features: [
        "Configuración de campañas Search y Display",
        "Investigación de palabras clave y puja estratégica",
        "Redacción de anuncios orientados a conversión",
        "Configuración de conversiones y seguimiento",
        "Optimización continua de Quality Score",
        "Reporting mensual con métricas reales",
    ],
},
];

// ══════════════════════════════════════════════════════════════════
// TRAYECTORIA PROFESIONAL
// ══════════════════════════════════════════════════════════════════

export const dataAboutPage: TimelineItem[] = [
    {
        id: 1,
        title: "Director de Proyectos SEO",
        subtitle: "Agencia de Posicionamiento Web — RyF",
        description:
            "Lidero la estrategia de posicionamiento orgánico de los clientes de la agencia, coordinando auditorías técnicas, implementación de mejoras y seguimiento de resultados. Gestiono proyectos de SEO técnico en WordPress con foco en Core Web Vitals, arquitectura de sitios y optimización de conversión.",
        date: "Ene 2026",
    },
    {
        id: 2,
        title: "Consultor de Posicionamiento Web",
        subtitle: "Agencia de Posicionamiento Web — RyF",
        description:
            "Implementé estrategias SEO técnicas y On-Page para clientes en sectores competitivos. Realicé auditorías de sitios, optimización de etiquetas meta, estructura semántica y velocidad de carga, logrando mejoras medibles en visibilidad orgánica y tráfico desde Google.",
        date: "Dic 2024",
    },
    {
        id: 3,
        title: "Consultor de Posicionamiento Web",
        subtitle: "TourismTiger",
        description:
            "Consultoría SEO especializada para agencias de turismo a nivel internacional. Optimicé sitios en inglés aplicando buenas prácticas técnicas, investigación de palabras clave y mejora de contenidos orientados a la conversión.",
        date: "May 2024",
    },
    {
        id: 4,
        title: "Desarrollador Front-End",
        subtitle: "MAYDEV LTD",
        description:
            "Diseñé interfaces de usuario desarrollando wireframes y prototipos en Figma. Implementé prácticas de SEO técnico para optimizar la visibilidad en motores de búsqueda, incluyendo etiquetas meta, estructura semántica y rendimiento web con React.js.",
        date: "Mar 2022",
    },
    {
        id: 5,
        title: "Diseñador Gráfico de Marketing",
        subtitle: "Ángeles del Hogar SPA",
        description:
            "Diseñé materiales promocionales para campañas de marketing. Gestioné el contenido en redes sociales mejorando la interacción en un 20%. Utilicé Adobe Photoshop para crear piezas visuales alineadas con la identidad de la marca.",
        date: "Feb 2020",
    },
    {
        id: 6,
        title: "Diseñador Gráfico",
        subtitle: "Óptica Vlentes",
        description:
            "Diseñé un logotipo único y memorable para la marca. Desarrollé una identidad visual coherente que se reflejó en todos los materiales de marketing y comunicación. Creé contenido visual dinámico que potenció la presencia en redes sociales y atrajo nuevos clientes.",
        date: "Nov 2022",
    },
    {
        id: 7,
        title: "Diseñador Gráfico y Operador de Radio",
        subtitle: "Radio La Serena EIRL",
        description:
            "Diseñé materiales promocionales para campañas de marketing, incluyendo folletos, carteles y recursos para redes sociales. Colaboré con el equipo de producción creando contenido de radio atractivo, incluyendo entrevistas, reportajes y segmentos de noticias.",
        date: "May 2021",
    },
];

// ══════════════════════════════════════════════════════════════════
// CONTADORES
// ══════════════════════════════════════════════════════════════════

export const dataCounter: CounterItem[] = [
    {
        id: 0,
        endCounter: 3,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 12,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 3,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
];

// ══════════════════════════════════════════════════════════════════
// PORTAFOLIO
// ══════════════════════════════════════════════════════════════════

export const dataPortfolio: PortfolioItem[] = [
    {
        id: 1,
        title: "Ap Logistics",
        image: "/image-1.webp",
        urlGithub: "https://github.com/ledexxx/ap-logistics",
        urlDemo: "https://vercelaplogi.vercel.app/",
        description:
            "Sistema de gestión de inventarios con gráficas de stock y reportes de ventas.",
    },
    {
        id: 2,
        title: "Menú Restaurant Atarashi",
        image: "/atarashi.webp",
        urlGithub: "https://github.com/ledexxx/Atarashisushi",
        urlDemo: "https://atarashi-sushi-menu.vercel.app/",
        description:
            "Menú digital con búsqueda reactiva y categorías de platos.",
    },
    {
        id: 3,
        title: "Futuralib",
        image: "/futuralib.webp",
        urlGithub: "https://github.com/Gabyot/FuturaLib-1",
        urlDemo: "https://www.canva.com/design/DAF23vLd18w/LaC7L7cHuEhYFtg5d05umQ/view?utm_content=DAF23vLd18w&utm_campaign=designshare&utm_medium=link&utm_source=editor",
        description:
            "Plataforma de gestión bibliotecaria digital con Python, HTML y CSS. Rol: diseño de interfaces y Project Manager del equipo.",
    },
    {
        id: 4,
        title: "Popi Florería",
        image: "/popi.webp",
        urlGithub: "https://github.com/ledexxx/sofiflowers",
        urlDemo: "https://popifloreria.netlify.app",
        description:
            "E-commerce para florería desarrollado con Bootstrap y Vanilla JS.",
    },
    {
        id: 5,
        title: "MultiIdea",
        image: "/multideas.webp",
        urlGithub: "https://github.com/andreiugonzalez/Multideas3.0",
        urlDemo: "#",
        description:
            "Aplicación de notas con soporte multimedia. Proyecto colaborativo en AIEP — diseño UI y prototipo en Figma a cargo propio.",
    },
    {
        id: 6,
        title: "Educontrol",
        image: "/Educontrol.webp",
        urlGithub: "https://github.com/ledexxx/EduControl",
        urlDemo: "#",
        description:
            "Plataforma de gestión de asistencia escolar con roles de usuario y generación de código QR. Proyecto final de universidad.",
    },
];