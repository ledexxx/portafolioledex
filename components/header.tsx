"use client";

import { itemsNavbar, socialNetworks } from "@/data";
import Link from "next/link";
import { MotionTransition } from "./transition-component";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

const WHATSAPP_NUMBER = "34624136170";
const WHATSAPP_MSG = encodeURIComponent("Hola Leonel, me gustaría hablar sobre un proyecto contigo 👋");

const Header = () => {
    // "idle" | "hover" | "pinned"
    const [dropdownState, setDropdownState] = useState<"idle" | "hover" | "pinned">("idle");
    const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

    const dropdownRef = useRef<HTMLDivElement>(null);
    const mobileDropdownRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    const isDesktopOpen = dropdownState !== "idle";

    // Cierra al hacer click fuera — tanto desktop como mobile
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setDropdownState("idle");
            }
            if (mobileDropdownRef.current && !mobileDropdownRef.current.contains(e.target as Node)) {
                setIsMobileDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Cierra al cambiar de ruta
    useEffect(() => {
        setDropdownState("idle");
        setIsMobileDropdownOpen(false);
    }, [pathname]);

    return (
        <MotionTransition position="bottom" className="fixed z-40 w-full top-0">

            {/* ── DESKTOP ─────────────────────────────────────────── */}
            <header className="
                hidden md:flex mx-6 mt-3 px-5 py-2
                items-center justify-between
                max-w-5xl xl:mx-auto
                bg-[#0d1b3e]/90 backdrop-blur-md
                border border-white/10 rounded-2xl
                shadow-[0_4px_32px_rgba(0,0,0,0.35)]
            ">
                <Link href="/" className="shrink-0">
                    <img src="/ledex.webp" alt="LEDEX logo" width={72} height={72} loading="eager" className="w-14 h-14" />
                </Link>

                <nav className="flex items-center gap-1">
                    {itemsNavbar.map((item) => (
                        <Link
                            key={item.id}
                            href={item.link}
                            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors hover:text-secondary ${
                                pathname === item.link ? "text-secondary" : "text-white/80"
                            }`}
                        >
                            {item.title}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-3 shrink-0">
                    {socialNetworks.map(({ logo, src, id, title }) =>
                        Array.isArray(src) ? (
                            <div
                                key={id}
                                ref={dropdownRef}
                                className="relative"
                                onMouseEnter={() => {
                                    // solo abre por hover si no está pinned
                                    if (dropdownState !== "pinned") setDropdownState("hover");
                                }}
                                onMouseLeave={() => {
                                    // solo cierra por hover si no está pinned
                                    if (dropdownState === "hover") setDropdownState("idle");
                                }}
                            >
                                <button
                                    title={title}
                                    aria-haspopup="true"
                                    aria-expanded={isDesktopOpen}
                                    onClick={() => {
                                        // click alterna entre pinned e idle
                                        setDropdownState((s) => s === "pinned" ? "idle" : "pinned");
                                    }}
                                    className={`flex items-center justify-center text-base transition-all duration-300 hover:text-secondary ${
                                        isDesktopOpen ? "text-secondary" : "text-white/80"
                                    }`}
                                >
                                    {logo}
                                </button>

                                {isDesktopOpen && (
                                    <div className="absolute right-0 z-50 mt-2 w-44 bg-[#0d1b3e] border border-white/10 rounded-xl shadow-xl overflow-hidden">
                                        {src.map(({ language, url }, index) => (
                                            <Link
                                                key={`${id}-${index}`}
                                                href={url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                title={`${title} (${language})`}
                                                onClick={() => setDropdownState("idle")}
                                                className="flex items-center gap-2 px-4 py-2.5 text-sm text-white/80 hover:bg-white/10 hover:text-secondary transition-colors"
                                            >
                                                🌐 {language}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link
                                key={id}
                                href={src}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={title}
                                className="text-base text-white/80 transition-all duration-300 hover:text-secondary"
                            >
                                {logo}
                            </Link>
                        )
                    )}

                    <Link
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            ml-2 flex items-center gap-2 px-4 py-2 rounded-xl
                            bg-[#25D366] hover:bg-[#1ebe5d] text-white text-sm font-semibold
                            shadow-[0_0_16px_rgba(37,211,102,0.35)]
                            hover:shadow-[0_0_24px_rgba(37,211,102,0.55)]
                            transition-all duration-300
                        "
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.118.553 4.108 1.522 5.836L.057 23.882a.5.5 0 0 0 .612.612l6.083-1.451A11.947 11.947 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.806 9.806 0 0 1-5.003-1.368l-.358-.214-3.717.887.905-3.638-.234-.373A9.816 9.816 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                        </svg>
                        Contáctame
                    </Link>
                </div>
            </header>

            {/* ── MOBILE ──────────────────────────────────────────── */}
            <header className="md:hidden px-4 mx-5">
                <div className="flex items-center justify-between max-w-6xl gap-4 mx-auto py-2">
                    <Link href="/" className="shrink-0">
                        <img src="/ledex.webp" alt="LEDEX logo" width={64} height={64} loading="eager" className="w-16 h-16 my-2" />
                    </Link>

                    <div className="flex items-center justify-center gap-4 mt-0 shrink-0">
                        {socialNetworks.map(({ logo, src, id, title }) =>
                            Array.isArray(src) ? (
                                <div key={id} ref={mobileDropdownRef} className="relative">
                                    <button
                                        title={title}
                                        aria-haspopup="true"
                                        aria-expanded={isMobileDropdownOpen}
                                        onClick={() => setIsMobileDropdownOpen((v) => !v)}
                                        className={`flex items-center justify-center text-sm transition-all duration-300 hover:text-secondary ${
                                            isMobileDropdownOpen ? "text-secondary" : ""
                                        }`}
                                    >
                                        {logo}
                                    </button>
                                    {isMobileDropdownOpen && (
                                        <div className="absolute right-0 z-50 mt-2 w-44 bg-[#0d1b3e] border border-white/10 rounded-xl shadow-xl overflow-hidden">
                                            {src.map(({ language, url }, index) => (
                                                <Link
                                                    key={`${id}-${index}`}
                                                    href={url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    title={`${title} (${language})`}
                                                    onClick={() => setIsMobileDropdownOpen(false)}
                                                    className="flex items-center gap-2 px-4 py-3 text-sm text-white/80 hover:bg-white/10 hover:text-secondary transition-colors"
                                                >
                                                    🌐 {language}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link
                                    key={id}
                                    href={src}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={title}
                                    className="text-sm transition-all duration-300 hover:text-secondary"
                                >
                                    {logo}
                                </Link>
                            )
                        )}
                    </div>
                </div>
            </header>

        </MotionTransition>
    );
};

export default Header;