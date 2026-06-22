import type { Metadata } from "next";
import PortfolioClient from "./portfolio-client";

export const metadata: Metadata = {
    title: "Portafolio — Proyectos Web & SEO",
    description:
        "Explora mis últimos proyectos: desarrollo web con React, Next.js, WordPress y Shopify, combinando diseño y tecnología para crear experiencias digitales únicas.",
    alternates: {
        canonical: "https://www.ledexcorp.site/portfolio",
    },
    openGraph: {
        title: "Portafolio — Proyectos Web & SEO | Leonel Delgado",
        description:
            "Proyectos de desarrollo web frontend, e-commerce y SEO técnico. React, Next.js, WordPress, Shopify y más.",
        url: "https://www.ledexcorp.site/portfolio",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Portafolio | Leonel Delgado — Desarrollador Web & SEO",
        description:
            "Últimos proyectos de desarrollo web y SEO. React, Next.js, WordPress y Shopify.",
    },
};

export default function Page() {
    return <PortfolioClient />;
}