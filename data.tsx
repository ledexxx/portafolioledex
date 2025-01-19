import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, FileDown, Crop, Pencil, Computer, Globe, Rocket, Speech, Briefcase,} from "lucide-react";
import { FaBehance, FaFileAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

export const socialNetworks = [
    {
        id: 1,
        logo: <FaBehance size={30} />,
        src: "https://www.behance.net/ledex_designs",
        title: "Mi perfil de behance",
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
        title: "Mi perfil de Github",
    },
    {
        id: 4,
        logo: <FaFileAlt size={30} />,
        src: [
            {
                language: "Español",
                url: "../downloable/cv_español.pdf"
            
            },
            {
                language: "Inglés",
                url: "../downloable/cv_english.pdf"
            }
        ],
        title: "Descargar Currículum vitae",
    },
];



export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "globe",
        icon: <Globe size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "briefcase",
        icon: <Briefcase size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
   
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Desarrollador Front End",
        subtitle: "May Dev Technologies SPA",
        description: "Diseñé interfaces de usuario desarrollando wireframes y prototipos utilizando Figma.  Implementé prácticas de SEO técnico para optimizar la visibilidad en motores de búsqueda, incluyendo etiquetas meta y estructura semántica.",
        date: "Agos 2024 ",
    },
    {
        id: 2,
        title: "Diseñador Gráfico",
        subtitle: "Optica Vlentes",
        description: "Diseñé un logotipo único y memorable para Óptica Vlentes.  Desarrollé una identidad visual coherente y atractiva que se refleja en todos los materiales de marketing y comunicación. Creé contenido visual impactante y dinámico que ha potenciado la presencia en redes sociales y ha atraído a más clientes.",
        date: "Nov 2022 ",
    },
    {
        id: 3,
        title: "Diseñador Gráfico y Operador de Radio",
        subtitle: "Radio La Serena EIRL ",
        description: "Diseñé y desarrollé materiales promocionales para campañas de marketing, incluyendo folletos, carteles y recursos para redes sociales.  Colaboré con el equipo de producción para crear contenido de radio atractivo y relevante, incluyendo entrevistas, reportajes y segmentos de noticias.",
        date: "May 2021",
    },
    {
        id: 4,
        title: "Diseñador Gráfico/Artista Publicitario",
        subtitle: "Angeles del Hogar SPA",
        description: "Diseñé materiales promocionales para campañas de marketing.  Gestioné el contenido en redes sociales y mejoré la interacción en un 20%. Utilicé herramientas de diseño gráfico como Adobe Photoshop.",
        date: "Ago 2019",
    },
   
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 1,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 8,
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

export const serviceData = [
    {
        icon: <Crop />,
        title: "Branding",
        description: "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Ap Logistics",
        image: "/image-1.png",
        urlGithub: "https://github.com/ledexxx/ap-logistics",
        urlDemo: "https://vercelaplogi.vercel.app/",
    },
    {
        id: 2,
        title: "Menú Restaurant Atarashi",
        image: "/atarashi.png",
        urlGithub: "https://github.com/ledexxx/Atarashisushi",
        urlDemo: "https://atarashi-sushi-menu.vercel.app/",
    },
    {
        id: 3,
        title: "Futuralib",
        image: "/futuralib.png",
        urlGithub: "https://github.com/Gabyot/FuturaLib-1",
        urlDemo: "https://www.canva.com/design/DAF23vLd18w/LaC7L7cHuEhYFtg5d05umQ/view?utm_content=DAF23vLd18w&utm_campaign=designshare&utm_medium=link&utm_source=editor",
    },
    {
        id: 4,
        title: "Popi floreria",
        image: "/popi.png",
        urlGithub: "https://github.com/ledexxx/sofiflowers",
        urlDemo: "https://popifloreria.netlify.app",
    },
    {
        id: 5,
        title: "Proyecto 5",
        image: "/covid.png",
        urlGithub: "https://popifloreria.netlify.app",
        urlDemo: "https://covid-19-eta.vercel.app/",
    },
    {
        id: 6,
        title: "Proyecto 6",
        image: "/covid.png",
        urlGithub: "https://popifloreria.netlify.app",
        urlDemo: "https://covid-19-eta.vercel.app/",
    },
    
];

