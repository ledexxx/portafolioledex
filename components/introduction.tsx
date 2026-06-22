"use client"
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { CheckCircle, TrendingUp, Code2, Smartphone } from "lucide-react";

const WHATSAPP_URL =
    "https://wa.me/34624136170?text=Hola%20Leonel,%20me%20gustar%C3%ADa%20saber%20más%20sobre%20tus%20servicios.";

// ── Servicios principales ─────────────────────────────────────────
const servicios = [
    {
        icon: <TrendingUp className="w-5 h-5 text-secondary shrink-0 mt-0.5" />,
        titulo: "SEO Técnico & Estratégico",
        desc: "Auditorías completas, arquitectura web, Core Web Vitals, indexación y estrategia de keywords para posicionar tu negocio en Google.",
    },
    {
        icon: <Code2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />,
        titulo: "Desarrollo Front-End",
        desc: "Implemento las mejoras directamente en el código. React, Next.js, WordPress y Shopify sin depender de terceros.",
    },
    {
        icon: <Smartphone className="w-5 h-5 text-secondary shrink-0 mt-0.5" />,
        titulo: "Diseño orientado a conversión",
        desc: "Interfaces que convierten visitas en clientes. Criterio visual + datos = páginas que venden.",
    },
];

// ── Por qué elegirme ──────────────────────────────────────────────
const razones = [
    "Ejecuto las optimizaciones directamente — sin intermediarios",
    "Experiencia real con +12 clientes en sectores competitivos",
    "Combino SEO técnico, contenido y desarrollo en un solo profesional",
    "Reportes claros y métricas que demuestran resultados",
    "Trabajo con WordPress, Shopify, Next.js y WooCommerce",
];

const Introduction = () => {
    return (
        <div className="z-20 w-full">

            {/* ══════════════════════════════════════════════════════
                HERO — Avatar + Copy principal
            ══════════════════════════════════════════════════════ */}
            <section className="z-20 grid items-start w-full p-6 pt-24 pb-6 md:items-center md:pt-4 md:pb-8 md:grid-cols-2 max-w-6xl mx-auto gap-10">

                {/* Avatar */}
                <div className="relative w-full max-w-xs mx-auto md:max-w-sm">
                    <Image
                        src="/foto-carnet.webp"
                        priority
                        width={500}
                        height={500}
                        alt="Leonel Delgado — Consultor SEO freelancer y Desarrollador Front-End"
                        className="rounded-3xl object-cover w-full shadow-2xl shadow-black/40"
                    />
                    <div className="absolute inset-0 rounded-3xl bg-secondary/10 blur-2xl -z-10 scale-95" />
                </div>

                {/* Copy */}
                <div className="flex flex-col justify-center max-w-md gap-5">

                    {/* H1 SEO — visible pero integrado */}
                    <span className="text-2xl leading-tight text-center md:text-left md:text-4xl font-light">
                        Si tienes un proyecto,{" "}
                        <br />
                        <TypeAnimation
                            sequence={[
                                'puedo posicionarlo',     1000,
                                'puedo programarlo',      1000,
                                'puedo optimizarlo',      1000,
                                'puedo diseñarlo',        1000,
                                'puedo hacerlo realidad', 1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-secondary"
                        />
                    </span>

                    <p className="text-lg md:text-xl leading-relaxed text-white/90 text-center md:text-left">
                        Soy <span className="font-semibold text-white">Leonel Delgado</span>,
                        consultor SEO freelancer especializado en SEO técnico y estrategia
                        orgánica. Ayudo a marcas y negocios a crecer en Google con
                        auditorías profundas, arquitectura de sitios y optimización que
                        realmente mueve métricas.
                    </p>

                    <p className="text-base md:text-lg leading-relaxed text-white/75 text-center md:text-left">
                        Mi diferencial: uno el SEO con desarrollo{" "}
                        <span className="font-semibold text-white">Front-End</span>{" "}
                        para implementar mejoras directamente en el código — sin
                        intermediarios, sin excusas, con resultados medibles.
                    </p>
                    {/* H1 para SEO y Accesibilidad (Invisible visualmente) */}
                    <h1 className="sr-only">Consultor SEO freelancer | Leonel Delgado </h1>

                    {/* CTAs */}
                    <div className="flex flex-col gap-3 w-full md:flex-row md:items-center md:justify-start md:gap-4 md:w-auto">
                        <a
                            href="/portfolio"
                            className="
                                w-full text-center md:w-auto
                                px-5 py-3 md:py-2.5
                                transition-all border-2 cursor-pointer text-sm font-medium
                                rounded-xl hover:text-black hover:bg-white
                            "
                        >
                            Ver proyectos
                        </a>
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                w-full text-center md:w-auto
                                px-5 py-3 md:py-2.5
                                transition-all cursor-pointer text-sm font-medium
                                text-white bg-tertiary rounded-xl hover:bg-secondary
                            "
                        >
                            Contáctame
                        </a>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════
                SECCIÓN — Servicios principales
            ══════════════════════════════════════════════════════ */}
            <section className="w-full max-w-6xl mx-auto px-6 py-14 border-t border-white/10">
                <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
                    ¿En qué puedo{" "}
                    <span className="text-secondary">ayudarte para mejorar tu negocio?</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {servicios.map((s, i) => (
                        <div
                            key={i}
                            className="flex flex-col gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-secondary/40 transition-colors"
                        >
                            <div className="flex items-center gap-2">
                                {s.icon}
                                <h3 className="font-semibold text-white text-base">{s.titulo}</h3>
                            </div>
                            <p className="text-sm text-white/65 leading-relaxed">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════
                SECCIÓN — Por qué trabajar conmigo
            ══════════════════════════════════════════════════════ */}
            <section className="w-full max-w-6xl mx-auto px-6 py-14 border-t border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug">
                            Un consultor SEO que también{" "}
                            <span className="text-secondary">escribe el código</span>
                        </h2>
                        <p className="text-base md:text-lg text-white/75 leading-relaxed">
                            La mayoría de consultores SEO detectan los problemas pero no los
                            resuelven. Yo sí. Al combinar SEO técnico con desarrollo Front-End,
                            implemento cada mejora directamente — desde optimizar el
                            renderizado hasta corregir la arquitectura de URLs o el schema
                            markup — sin tickets ni esperas.
                        </p>
                        <ul className="flex flex-col gap-3 mt-2">
                            {razones.map((r, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-white/80">
                                    <CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                                    {r}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Stats rápidos */}
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { num: "+3", label: "años en SEO técnico" },
                            { num: "+12", label: "clientes satisfechos" },
                            { num: "+3", label: "proyectos finalizados" },
                            { num: "100%", label: "resultados medibles" },
                        ].map((s, i) => (
                            <div
                                key={i}
                                className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 text-center"
                            >
                                <span className="text-3xl font-bold text-secondary">{s.num}</span>
                                <span className="text-xs text-white/55 mt-1 leading-snug">{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════
                SECCIÓN — CTA final
            ══════════════════════════════════════════════════════ */}
            <section className="w-full max-w-6xl mx-auto px-6 py-14 border-t border-white/10">
                <div className="rounded-2xl bg-secondary/10 border border-secondary/20 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-2xl md:text-3xl font-bold text-white">
                            ¿Listo para aparecer en Google?
                        </h2>
                        <p className="text-white/65 text-base max-w-lg">
                            Cuéntame tu proyecto y te digo qué puedo hacer por ti.
                            Primera consulta sin compromiso.
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
                        {/* WhatsApp icon inline */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.118.553 4.108 1.522 5.836L.057 23.882a.5.5 0 0 0 .612.612l6.083-1.451A11.947 11.947 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.806 9.806 0 0 1-5.003-1.368l-.358-.214-3.717.887.905-3.638-.234-.373A9.816 9.816 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                        </svg>
                        Hablemos de tu proyecto
                    </a>
                </div>
            </section>

        </div>
    );
};

export default Introduction;