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
        src: "#!",
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
    {
        id: 5,
        title: "Home",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/testimonials",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Diseñador Gráfico",
        subtitle: "Optica Vlentes",
        description: "Creación de un logotipo único y memorable que refleje la identidad de Óptica Vlentes. Desarrollo de una identidad visual coherente y atractiva que destaque en el mercado.Diseño de contenido visual impactante y dinámico para potenciar la presencia en redes sociales y atraer a más clientes. ",
        date: "Nov 2022 ",
    },
    {
        id: 2,
        title: "Artista digital",
        subtitle: "CreativosCorpVzla ",
        description: "Movimiento artístico creado para aumentar la visibilidad de sus integrantes en 2020, consiguió financiamento regional.",
        date: "May 2021",
    },
    {
        id: 3,
        title: "Diseño UI",
        subtitle: "Angeles del Hogar cl",
        description: "Diseño de interfaces visualmente atractivas y funcionales para una aplicación web eccomerce, colaborando con equipos de UX y desarrolladores. ",
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
        endCounter: 15,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 6,
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
        title: "Proyecto Jerald",
        image: "/image-2.jpg",
        urlGithub: "https://github.com/ledexxx/ProyectoJerald",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Futuralib",
        image: "/image-3.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Tech News",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Webs Impactantes",
        image: "/image-5.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Web Dinámica",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 7,
        title: "Dark Web ",
        image: "/image-7.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 8,
        title: "E-commerce web",
        image: "/image-8.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    }
];

export const dataTestimonials = [
    {
        id: 1,
        name: "Marco Yanez",
        description:
            "Increíble trabajo el que realiza Leonel Delgado, fascinado desde el día 1 que lo contraté.",
        imageUrl: "/profile98.png",
    },
    {
        id: 2,
        name: "Vanessa Rodriguez",
        description:
            "Desde el día 1 que comencé con mi empresa y contacté a Leonel mis problemas se fueron, encontró la identidad visual para mi empresa que tanto buscaba y realizó un trabajo impecable con mis redes sociales.",
        imageUrl: "/profile2.jpg",
    },
    {
        id: 3,
        name: "Felix García",
        description:
            "Desde el día 1 al ver la experiencia y creatividad de Leonel me decidí a trabajar con él. Luego de 2 meses me solucionó grandes problemas de diseño que mi página tenía",
        imageUrl: "/profile3.png",
    },
   
    {
        id: 4,
        name: "Angel Fuentes",
        description:
            "Una joya en la web. El diseño de la página era exactamente lo que necesitaba!",
        imageUrl: "/profile5.png",
    },
  
];