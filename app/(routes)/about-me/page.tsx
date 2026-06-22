import type { Metadata } from "next";
import AboutMePage from "./about-me-client";

export const metadata: Metadata = {
    title: " Consultor SEO & Desarrollador Web",
    description:
        "Soy Leonel Delgado, consultor SEO freelancer y desarrollador Front-End con más de 3 años de experiencia. Especializado en SEO técnico, WordPress, Shopify y Next.js.",
    alternates: {
        canonical: "https://www.ledexcorp.site/about-me",
    },
    openGraph: {
        title: " Consultor SEO & Desarrollador Web",
        description:
            "Consultor SEO freelancer y desarrollador Front-End. Más de 3 años posicionando negocios en Google con SEO técnico, auditorías y desarrollo web a medida.",
        url: "https://www.ledexcorp.site/about-me",
        type: "profile",
        images: [
            {
                url: "https://www.ledexcorp.site/leoyo.webp",
                width: 400,
                height: 400,
                alt: "Leonel Delgado — Consultor SEO freelancer",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Leonel Delgado | Consultor SEO & Desarrollador Web",
        description:
            "Más de 3 años posicionando negocios en Google. SEO técnico, WordPress, Shopify y Next.js.",
        images: ["https://www.ledexcorp.site/leoyo.webp"],
    },
};

export default function Page() {
    return <AboutMePage />;
}