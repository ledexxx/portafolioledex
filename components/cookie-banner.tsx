"use client"
import { useState, useEffect } from "react";
import Link from "next/link";

const COOKIE_KEY = "ledex_cookie_consent";

const CookieBanner = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Mostrar solo si el usuario no ha decidido aún
        const consent = localStorage.getItem(COOKIE_KEY);
        if (!consent) setVisible(true);
    }, []);

    const accept = () => {
        localStorage.setItem(COOKIE_KEY, "accepted");
        setVisible(false);
    };

    const reject = () => {
        localStorage.setItem(COOKIE_KEY, "rejected");
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="
            fixed bottom-0 left-0 right-0 z-50
            md:bottom-6 md:left-6 md:right-auto md:max-w-md
            bg-[#0d1b3e] border border-white/10
            rounded-none md:rounded-2xl
            shadow-[0_-4px_32px_rgba(0,0,0,0.4)] md:shadow-xl
            p-5
            animate-in slide-in-from-bottom duration-300
        ">
            {/* Icono + título */}
            <div className="flex items-center gap-2 mb-2">
                <span className="text-lg" aria-hidden="true">🍪</span>
                <p className="text-sm font-semibold text-white">
                    Usamos cookies
                </p>
            </div>

            {/* Texto */}
            <p className="text-xs text-white/60 leading-relaxed mb-4">
                Este sitio utiliza cookies propias y de terceros (Google Analytics)
                para mejorar tu experiencia y analizar el tráfico de forma anónima.
                Puedes aceptarlas, rechazarlas o{" "}
                <Link
                    href="/cookies"
                    className="text-secondary underline underline-offset-2 hover:text-white transition-colors"
                >
                    leer más información
                </Link>
                .
            </p>

            {/* Botones */}
            <div className="flex gap-3">
                <button
                    onClick={reject}
                    className="
                        flex-1 px-4 py-2 rounded-xl text-xs font-medium
                        border border-white/20 text-white/60
                        hover:border-white/40 hover:text-white
                        transition-all duration-200
                    "
                >
                    Rechazar
                </button>
                <button
                    onClick={accept}
                    className="
                        flex-1 px-4 py-2 rounded-xl text-xs font-medium
                        bg-secondary text-white
                        hover:bg-secondary/80
                        transition-all duration-200
                    "
                >
                    Aceptar todas
                </button>
            </div>
        </div>
    );
};

export default CookieBanner;