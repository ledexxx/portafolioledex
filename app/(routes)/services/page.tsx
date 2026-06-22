import TransitionPage from "@/components/transition-page";
import FaqAccordion from "@/components/faq-accordion";
import type { Metadata } from "next";
import React from 'react';
import { ChevronDown, CheckCircle, MessageCircle } from 'lucide-react';
import { servicesData } from '@/data';
import ServiceCard from '@/components/ServiceCard';

export const metadata: Metadata = {
    title: "Servicios SEO & Desarrollo Web Freelancer",
    description:
        "Servicios de consultoría SEO técnica, desarrollo Front-End y diseño web orientado a la conversión. Auditorías SEO, posicionamiento en Google, WordPress, Shopify y Next.js.",
    alternates: { canonical: "https://www.ledexcorp.site/services" },
    openGraph: {
        title: "Servicios SEO & Desarrollo Web | Leonel Delgado",
        description:
            "Consultor SEO freelancer especializado en SEO técnico, desarrollo Front-End y diseño web. Implemento las mejoras directamente en el código.",
        url: "https://www.ledexcorp.site/services",
    },
};

// ── Proceso de trabajo ─────────────────────────────────────────────
const proceso = [
    {
        paso: "01",
        titulo: "Auditoría & diagnóstico",
        desc: "Analizo el estado técnico de tu sitio: indexabilidad, Core Web Vitals, arquitectura de URLs, estructura semántica y errores que frenan tu posicionamiento.",
    },
    {
        paso: "02",
        titulo: "Estrategia personalizada",
        desc: "Diseño un plan de acción adaptado a tu sector y competencia real. Keyword research, análisis de intención de búsqueda y priorización de oportunidades.",
    },
    {
        paso: "03",
        titulo: "Implementación directa",
        desc: "A diferencia de otros consultores, yo mismo implemento las mejoras en el código. Sin tickets, sin esperas, sin terceros.",
    },
    {
        paso: "04",
        titulo: "Reporting & ajuste continuo",
        desc: "Reporting mensual con KPIs reales desde Google Search Console y Analytics. Sin métricas de vanidad — solo datos que importan.",
    },
];

// ── Plataformas ────────────────────────────────────────────────────
const plataformas = [
    {
        nombre: "WordPress",
        desc: "SEO técnico, WPO y desarrollo de temas a medida",
        icon: "https://cdn.simpleicons.org/wordpress/white",
        color: "#21759B",
        iconClass: "w-7 h-7",
    },
    {
        nombre: "Shopify",
        desc: "SEO para e-commerce, Liquid y optimización de fichas",
        icon: "https://cdn.simpleicons.org/shopify/white",
        color: "#96BF48",
        iconClass: "w-7 h-7",
    },
    {
        nombre: "Next.js",
        desc: "Arquitectura SEO-first con SSR/SSG y Core Web Vitals óptimos",
        icon: "https://cdn.simpleicons.org/nextdotjs/white",
        color: "#ffffff",
        iconClass: "w-7 h-7",
    },
    {
        nombre: "WooCommerce",
        desc: "Optimización de tiendas y estructura de categorías",
        icon: "https://cdn.simpleicons.org/woocommerce/white",
        color: "#7F54B3",
        iconClass: "w-10 h-10",
    },
    {
        nombre: "Jumpseller",
        desc: "SEO técnico y mejoras de rendimiento",
        icon: null,
        color: "#FF6B35",
        iconClass: "w-7 h-7",
    },
    {
        nombre: "React",
        desc: "Componentes reutilizables y rendimiento optimizado",
        icon: "https://cdn.simpleicons.org/react/white",
        color: "#61DAFB",
        iconClass: "w-7 h-7",
    },
];

// ── Icono Jumpseller (SVG inline) ──────────────────────────────────
const JumpsellerIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="white" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 2c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8zm-1 4v4H7l5 6 5-6h-4V8h-2z" />
    </svg>
);

const WHATSAPP_URL =
    "https://wa.me/34624136170?text=Hola%20Leonel%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20tus%20servicios.";

const ServicesPage = () => {
    return (
        <>
            <TransitionPage />

            <div className="min-h-screen text-white">

                {/* ══════════════════════════════════════════════════
                    HERO
                ══════════════════════════════════════════════════ */}
                <section className="container px-6 pt-20 pb-12 mx-auto text-center md:pt-24">
                    <h1 className="text-5xl md:text-7xl mb-6">
                        Mis{" "}
                        <span className="text-secondary font-bold">servicios.</span>
                    </h1>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto mb-4">
                        Consultor SEO freelancer especializado en{" "}
                        <strong className="text-white">SEO técnico</strong>,{" "}
                        <strong className="text-white">desarrollo Front-End</strong> y{" "}
                        <strong className="text-white">diseño web orientado a la conversión</strong>.
                        Implemento cada mejora directamente en el código — sin intermediarios.
                    </p>
                    <p className="text-base text-white/50 max-w-xl mx-auto mb-10">
                        Trabajo con WordPress, Shopify, Next.js y WooCommerce para negocios
                        locales, pymes y e-commerce que quieren crecer en Google de forma
                        sostenible y medible.
                    </p>
                    <ChevronDown className="w-8 h-8 mx-auto text-secondary animate-bounce" />
                </section>

                {/* ══════════════════════════════════════════════════
                    TARJETAS DE SERVICIOS
                ══════════════════════════════════════════════════ */}
                <section className="container mx-auto px-6 pb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {servicesData.map((service, index) => (
                            <ServiceCard key={service.id} service={service} index={index} />
                        ))}
                    </div>
                </section>

                {/* ══════════════════════════════════════════════════
                    PROCESO DE TRABAJO
                ══════════════════════════════════════════════════ */}
                <section className="container mx-auto px-6 pb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
                        Cómo trabajo{" "}
                        <span className="text-secondary">contigo</span>
                    </h2>
                    <p className="text-white/55 text-center max-w-xl mx-auto mb-12 text-base">
                        Un proceso claro, transparente y orientado a resultados reales — no a informes bonitos.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {proceso.map((p) => (
                            <div
                                key={p.paso}
                                className="flex flex-col gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-secondary/30 transition-colors"
                            >
                                <span className="text-3xl font-bold text-secondary/40">{p.paso}</span>
                                <h3 className="text-base font-semibold text-white">{p.titulo}</h3>
                                <p className="text-sm text-white/55 leading-relaxed">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ══════════════════════════════════════════════════
                    PLATAFORMAS
                ══════════════════════════════════════════════════ */}
                <section className="container mx-auto px-6 pb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
                        Plataformas y{" "}
                        <span className="text-secondary">tecnologías</span>
                    </h2>
                    <p className="text-white/55 text-center max-w-xl mx-auto mb-12 text-base">
                        Trabajo con las plataformas más usadas por negocios reales, desde tiendas hasta sitios corporativos.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                        {plataformas.map((pl) => (
                            <div
                                key={pl.nombre}
                                style={{ "--brand-color": pl.color } as React.CSSProperties}
                                className="
                                    group flex flex-col gap-3 p-5 rounded-xl
                                    bg-white/5 border border-white/10
                                    hover:border-[var(--brand-color)]
                                    hover:bg-[color-mix(in_srgb,var(--brand-color)_8%,transparent)]
                                    hover:-translate-y-1 hover:shadow-lg
                                    transition-all duration-300 cursor-default
                                "
                            >
                                <div className="opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                                    {pl.icon ? (
                                        <img
                                            src={pl.icon}
                                            alt={`Logo ${pl.nombre}`}
                                            width={40}
                                            height={40}
                                            loading="lazy"
                                            className={pl.iconClass}
                                            style={{ filter: "brightness(0) invert(1)" }}
                                        />
                                    ) : (
                                        <JumpsellerIcon />
                                    )}
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-sm font-semibold text-white group-hover:text-[var(--brand-color)] transition-colors duration-300">
                                        {pl.nombre}
                                    </span>
                                    <span className="text-xs text-white/50 leading-snug">
                                        {pl.desc}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ══════════════════════════════════════════════════
                    POR QUÉ UN CONSULTOR SEO FREELANCER
                ══════════════════════════════════════════════════ */}
                <section className="container mx-auto px-6 pb-20">
                    <div className="max-w-3xl mx-auto rounded-2xl bg-white/5 border border-white/10 p-8 md:p-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            ¿Por qué contratar un{" "}
                            <span className="text-secondary">consultor SEO freelancer</span>?
                        </h2>
                        <p className="text-white/65 text-base leading-relaxed mb-6">
                            Con un consultor SEO freelancer tienes acceso directo al profesional
                            que ejecuta cada acción — no a un account manager que delega. Eso
                            se traduce en mayor agilidad, comunicación clara y un conocimiento
                            profundo de tu proyecto desde el primer día.
                        </p>
                        <ul className="flex flex-col gap-3">
                            {[
                                "Trato directo — sin intermediarios ni cuentas rotativas",
                                "Implementación técnica propia — no dependo de desarrolladores externos",
                                "Reportes reales con Google Search Console y Analytics",
                                "Adaptable a tu presupuesto y objetivos de negocio",
                                "Experiencia en SEO local, e-commerce y sitios corporativos",
                                "Auditoría técnica completa como punto de partida",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-white/75">
                                    <CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* ══════════════════════════════════════════════════
                    FAQ — accordion con rich snippet (en faq-accordion.tsx)
                ══════════════════════════════════════════════════ */}
                <section className="container mx-auto px-6 pb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                        Preguntas{" "}
                        <span className="text-secondary">frecuentes</span>
                    </h2>
                    <FaqAccordion />
                </section>

                {/* ══════════════════════════════════════════════════
                    CTA FINAL
                ══════════════════════════════════════════════════ */}
                <section className="container mx-auto px-6 pb-24">
                    <div className="rounded-2xl bg-secondary/10 border border-secondary/20 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-2xl md:text-3xl font-bold text-white">
                                ¿Quieres que revisemos tu web?
                            </h2>
                            <p className="text-white/60 text-base max-w-lg">
                                Cuéntame tu proyecto y te hago una valoración gratuita.
                                Sin compromisos.
                            </p>
                        </div>
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                shrink-0 flex items-center gap-2
                                px-6 py-3 rounded-xl
                                bg-[#25D366] hover:bg-[#1ebe5d]
                                text-white font-semibold text-sm
                                shadow-[0_0_20px_rgba(37,211,102,0.3)]
                                hover:shadow-[0_0_32px_rgba(37,211,102,0.55)]
                                transition-all duration-300
                            "
                        >
                            <MessageCircle className="w-4 h-4" />
                            Solicitar valoración gratuita
                        </a>
                    </div>
                </section>

            </div>
        </>
    );
};

export default ServicesPage;