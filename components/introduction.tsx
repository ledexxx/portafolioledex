import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return (
        <div className="z-20 w-full">
            <div className="z-20 grid items-start w-full p-6 pt-24 pb-6 md:items-center md:pt-4 md:pb-8 md:grid-cols-2">

                {/* ── AVATAR ───────────────────────── */}
<div className="relative w-full max-w-xs mx-auto md:max-w-sm">
    <Image
        src="/foto-carnet.webp"
        priority
        width={500}
        height={500}
        alt="Leonel Delgado — Consultor SEO y Desarrollador Front-End"
        className="rounded-3xl object-cover w-full shadow-2xl shadow-black/40"
    />
    <div className="absolute inset-0 rounded-3xl bg-secondary/10 blur-2xl -z-10 scale-95" />
</div>
                {/* ── COPY ─────────────────────────── */}
                <div className="flex flex-col justify-center max-w-md gap-6">

                    {/* Titular animado */}
                    <span className="text-2xl leading-tight text-center md:text-left md:text-4xl">
                        Si tienes un proyecto,{" "}
                        <br />
                        <TypeAnimation
                            sequence={[
                                'puedo posicionarlo',
                                1000,
                                'puedo programarlo',
                                1000,
                                'puedo optimizarlo',
                                1000,
                                'puedo diseñarlo',
                                1000,
                                'puedo hacerlo realidad',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-secondary"
                        />
                    </span>

                    {/* Bloque 1 — Presentación principal */}
                    <p className="text-lg md:text-xl leading-relaxed text-white/90 text-center md:text-left">
                        Soy <span className="font-semibold text-white">Leonel Delgado</span>,
                        consultor SEO especializado en SEO técnico y estrategia de
                        posicionamiento orgánico. Ayudo a marcas y negocios a crecer en
                        buscadores con auditorías profundas, arquitectura de sitios y
                        optimización que realmente mueve métricas.
                    </p>

                    {/* Bloque 2 — Desarrollo frontend */}
                    <p className="text-lg md:text-xl leading-relaxed text-white/90 text-center md:text-left">
                        Mi diferencial está en unir el SEO con desarrollo
                        <span className="font-semibold text-white"> Front-End</span>:
                        construyo e implemento soluciones directamente en el código,
                        sin depender de terceros. Trabajo con React, Next.js,
                        WordPress y Shopify con un criterio de diseño cuidado y orientado
                        a la conversión.
                    </p>

                    {/* Bloque 3 — Flutter + aprendizaje continuo */}
                    <p className="text-lg md:text-xl leading-relaxed text-white/90 text-center md:text-left">
                        Actualmente expandiendo hacia el desarrollo móvil con
                        <span className="font-semibold text-white"> Flutter</span> —
                        porque la mejor versión de un producto no termina en el navegador.
                        Aprendizaje continuo, adaptación constante.
                    </p>

                    {/* CTAs */}
                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-6">
                        <a
                            href="/portfolio"
                            className="px-4 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:text-black hover:bg-white"
                        >
                            Ver proyectos
                        </a>
                        <a
                            href="https://wa.me/34624136170?text=Hola%20Leonel,%20me%20gustaría%20saber%20más%20sobre%20tus%20servicios."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 transition-all cursor-pointer text-md w-fit text-white bg-tertiary rounded-xl hover:bg-secondary"
                        >
                            Contáctame
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Introduction;