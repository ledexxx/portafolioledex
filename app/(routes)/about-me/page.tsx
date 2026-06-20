"use client"
import ContainerPage from "@/components/container-page";
import Image from "next/image";
import Link from "next/link";
import CounterServices from "@/components/counter-services";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
    "https://wa.me/34624136170?text=Hola%20Leonel%2C%20me%20gustar%C3%ADa%20hablar%20sobre%20un%20proyecto%20contigo%20%F0%9F%91%8B";

const AboutMePage = () => {
    return (
        <>
            <TransitionPage />
            <ContainerPage>

                {/* ── TÍTULO ───────────────────────────────────────── */}
                <div className="text-center mb-16 mt-12">
                    <span className="text-4xl md:text-5xl leading-tight font-light">
                        Mi{" "}
                        <span className="font-bold text-secondary">
                            Trayectoria profesional
                        </span>
                    </span>
                </div>

                {/* H1 SEO local */}
                <h1 className="sr-only">Consultor SEO freelancer en Soria</h1>

                {/* ── BLOQUE 1 — Quién soy | imagen derecha ────────── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mb-20 px-4">

                    {/* Texto */}
                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug">
                            Tecnología, diseño{" "}
                            <span className="text-secondary">y pasión genuina</span>
                        </h2>
                        <p className="text-lg leading-relaxed text-white/85">
                            Soy <span className="font-semibold text-white">Leonel Delgado</span>,
                            programador y consultor SEO con experiencia comprobable en
                            posicionamiento orgánico y proyectos de desarrollo que me apasionan
                            tanto como el trabajo con clientes. Desde hace años el diseño web,
                            gráfico y las artes visuales forman parte de mi día a día — no como
                            obligación, sino como curiosidad genuina. Eso me ha dado un criterio
                            visual afinado y una comprensión real de lo que hace que un usuario
                            confíe, se quede y compre.
                        </p>
                    </div>

                    {/* Imagen derecha */}

                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-white/5">
                        <Image
                            src="/leoyo.webp"
                            alt="Leonel Delgado — Consultor SEO"
                            fill
                            className="object-cover object-top"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f3a]/40 to-transparent" />
                    </div>
                </div>

                {/* ── BLOQUE 2 — Formación | imagen izquierda ──────── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mb-20 px-4">

                    {/* Imagen izquierda */}
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl order-2 md:order-1">
                        <Image
                            src="/foto-graduacion.webp"
                            alt="Leonel Delgado — Graduación AIEP"
                            fill
                            className="object-cover object-top"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f3a]/40 to-transparent" />
                    </div>

                    {/* Texto derecho */}
                    <div className="flex flex-col gap-4 order-1 md:order-2">
                        <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug">
                            Base técnica sólida{" "}
                            <span className="text-secondary">desde AIEP</span>
                        </h2>
                        <p className="text-lg leading-relaxed text-white/85">
                            Me formé como{" "}
                            <span className="font-semibold text-white">
                                Técnico en Programación y Análisis de Sistemas en AIEP
                            </span>
                            , donde asenté las bases del desarrollo de software que hoy aplico
                            en cada proyecto. Esa formación técnica, combinada con años de
                            aprendizaje autodidacta en SEO, diseño y experiencia de usuario,
                            es lo que me permite entender un proyecto de forma integral —
                            desde el código hasta la conversión.
                        </p>
                    </div>
                </div>

                {/* ── BLOQUE 3 — Propuesta de valor | imagen derecha + CTA */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mb-20 px-4">

                    {/* Texto */}
                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug">
                            +3 años posicionando{" "}
                            <span className="text-secondary">negocios en Google</span>
                        </h2>
                        <p className="text-lg leading-relaxed text-white/85">
                            Con más de{" "}
                            <span className="font-semibold text-white">
                                3 años en SEO técnico y estratégico
                            </span>
                            , puedo ayudarte a posicionar tu negocio en Google, construirte
                            un sitio web que trabaje por ti las 24 horas del día y, si lo
                            necesitas, desarrollar soluciones de software a medida — con
                            código limpio y un toque de diseño que marca la diferencia.
                        </p>
                        <Link
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                group self-start flex items-center gap-2
                                px-5 py-3 rounded-xl mt-2
                                bg-[#25D366] hover:bg-[#1ebe5d]
                                text-white font-semibold text-sm
                                shadow-[0_0_16px_rgba(37,211,102,0.25)]
                                hover:shadow-[0_0_28px_rgba(37,211,102,0.5)]
                                transition-all duration-300
                            "
                        >
                            <MessageCircle className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                            Hablemos de tu proyecto
                        </Link>
                    </div>

                    {/* Imagen derecha */}
                    {/* Reemplaza /about-results.webp por captura de GSC u otro asset */}
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-white/5">
                        <Image
                            src="/seo.webp"
                            alt="Resultados SEO obtenidos"
                            fill
                            className="object-scale down"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f3a]/40 to-transparent" />
                    </div>
                </div>

                {/* ── CONTADORES + TIMELINE ────────────────────────── */}
                <CounterServices />
                <TimeLine />

            </ContainerPage>
        </>
    );
}

export default AboutMePage;