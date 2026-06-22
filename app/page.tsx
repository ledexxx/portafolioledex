// app/page.tsx — SIN "use client"
import type { Metadata } from "next";
import HomeClient from "@/components/home-client";

export const metadata: Metadata = {
    title: "Consultor SEO Freelancer | Leonel Delgado",
    description:
        "Consultor SEO freelancer especializado en SEO técnico, desarrollo web y diseño. Posiciono negocios en Google con auditorías, arquitectura web y optimización que mueve métricas.",
    alternates: {
        canonical: "https://www.ledexcorp.site",
    },
    openGraph: {
        title: "Consultor SEO Freelancer | Leonel Delgado",
        description:
            "Posiciono tu negocio en Google con SEO técnico y desarrollo web orientado a la conversión.",
        url: "https://www.ledexcorp.site",
        images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    },
};

export default function Home() {
    return <HomeClient />;
}