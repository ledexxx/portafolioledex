// components/footer.tsx
import Image from "next/image";
import Link from "next/link";
import { itemsNavbar, socialNetworks } from "@/data";

const politicas = [
    { title: "Política de privacidad", href: "/privacidad" },
    { title: "Política de cookies", href: "/cookies" },
    { title: "Aviso legal", href: "/aviso-legal" },
];

const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className="w-full bg-bgheader border-t border-white/10 mt-16 pb-[var(--mobile-nav-h)] md:pb-0">

            {/* ── CONTENIDO PRINCIPAL ─────────────────────────────── */}
            <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* COLUMNA 1 — Logo + texto + RRSS */}
                <div className="flex flex-col gap-4">
                    <Link href="/" className="w-fit">
                        <Image
                            src="/ledex.png"
                            alt="LEDEX — Leonel Delgado"
                            width={110}
                            height={110}
                            className="w-24 h-24"
                        />
                    </Link>

                    <p className="text-sm text-white/70 leading-relaxed max-w-[220px]">
                        Consultor SEO freelancer especializado en SEO técnico,
                        desarrollo web y diseño orientado a resultados.
                    </p>

                    {/* RRSS */}
                    <div className="flex items-center gap-4 mt-1">
                        {socialNetworks.map(({ logo, src, id, title }) =>
                            Array.isArray(src) ? null : (
                                <Link
                                    key={id}
                                    href={src}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={title}
                                    className="text-white/60 hover:text-secondary transition-colors duration-300"
                                >
                                    {logo}
                                </Link>
                            )
                        )}
                    </div>
                </div>

                {/* COLUMNA 2 — Enlaces rápidos */}
                <div className="flex flex-col gap-3">
                    <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-1">
                        Enlaces rápidos
                    </h3>
                    {itemsNavbar.map((item) => (
                        <Link
                            key={item.id}
                            href={item.link}
                            className="text-sm text-white/60 hover:text-secondary transition-colors duration-300 w-fit"
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>

                {/* COLUMNA 3 — Políticas */}
                <div className="flex flex-col gap-3">
                    <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-1">
                        Políticas
                    </h3>
                    {politicas.map((p) => (
                        <Link
                            key={p.href}
                            href={p.href}
                            className="text-sm text-white/60 hover:text-secondary transition-colors duration-300 w-fit"
                        >
                            {p.title}
                        </Link>
                    ))}
                </div>

                {/* COLUMNA 4 — Mapa Soria */}
                <div className="flex flex-col gap-3">
                    <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-1">
                        Ubicación
                    </h3>
                    <p className="text-sm text-white/75">Soria, España</p><Link href="/#contacto" className="text-cyan-200 underline underline-offset-4">Contacto profesional</Link>
                    <p className="text-xs text-white/40 leading-snug">
                        Soria, España — disponible para proyectos remotos en todo el mundo.
                    </p>
                </div>

            </div>

            {/* ── CINTA COPYRIGHT ─────────────────────────────────── */}
            <div className="border-t border-white/10 bg-secondary/10">
                <div className="max-w-6xl mx-auto px-6 py-3 flex flex-col md:flex-row items-center justify-between gap-1">
                    <p className="text-xs text-white/50">
                        © {currentYear} Leonel Delgado — LEDEX. Todos los derechos reservados.
                    </p>
                    <p className="text-xs text-white/40">
                        Consultor SEO & Desarrollador Front-End en Soria
                    </p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
