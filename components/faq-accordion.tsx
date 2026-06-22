"use client"
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        q: "¿Cuánto tiempo tarda en verse resultados SEO?",
        a: "Los primeros resultados medibles suelen aparecer entre 2 y 4 meses. El SEO es una inversión a medio-largo plazo, pero con una base técnica sólida los avances son sostenibles y acumulativos.",
    },
    {
        q: "¿Trabajas con cualquier tipo de negocio?",
        a: "Trabajo con pymes, negocios locales, e-commerce y startups de cualquier sector. Me adapto al presupuesto y los objetivos de cada cliente.",
    },
    {
        q: "¿Qué diferencia a un consultor SEO freelancer de una agencia?",
        a: "Trabajas directamente conmigo — sin intermediarios ni cuentas rotativas de agencia. Tienes acceso directo al profesional que ejecuta cada acción y conoce tu proyecto en profundidad.",
    },
    {
        q: "¿Puedo contratar solo desarrollo web sin SEO?",
        a: "Sí. Ofrezco desarrollo Front-End independiente con React, Next.js, WordPress y Shopify. Aunque siempre construyo con buenas prácticas SEO de base.",
    },
    {
        q: "¿Haces auditorías SEO puntuales?",
        a: "Sí, ofrezco auditorías técnicas puntuales con informe detallado y accionables priorizados. Es el punto de partida ideal para saber dónde está tu sitio y qué mejorar primero.",
    },
];

// ── Rich snippet JSON-LD ──────────────────────────────────────────
const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: {
            "@type": "Answer",
            text: a,
        },
    })),
};

const FaqAccordion = () => {
    // Primera FAQ abierta por defecto
    const [openIndex, setOpenIndex] = useState<number>(0);

    const toggle = (i: number) => setOpenIndex(openIndex === i ? -1 : i);

    return (
        <>
            {/* Rich snippet — invisible para el usuario, visible para Google */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />

            <div className="flex flex-col gap-3 max-w-2xl mx-auto">
                {faqs.map((faq, i) => {
                    const isOpen = openIndex === i;
                    return (
                        <div
                            key={i}
                            className={`
                                rounded-2xl border transition-all duration-300
                                ${isOpen
                                    ? "border-secondary/40 bg-secondary/5"
                                    : "border-white/10 bg-white/5 hover:border-white/20"
                                }
                            `}
                        >
                            {/* Cabecera clickable */}
                            <button
                                onClick={() => toggle(i)}
                                aria-expanded={isOpen}
                                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                            >
                                <span className={`text-sm font-semibold transition-colors duration-300 ${isOpen ? "text-secondary" : "text-white"}`}>
                                    {faq.q}
                                </span>
                                <ChevronDown
                                    className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
                                        isOpen ? "rotate-180 text-secondary" : "text-white/40"
                                    }`}
                                />
                            </button>

                            {/* Contenido desplegable */}
                            <div
                                className={`
                                    overflow-hidden transition-all duration-300 ease-in-out
                                    ${isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}
                                `}
                            >
                                <p className="px-6 pb-5 text-sm text-white/60 leading-relaxed">
                                    {faq.a}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default FaqAccordion;