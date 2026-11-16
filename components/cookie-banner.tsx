"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
const KEY = "ledex_cookie_consent";
const GA = "G-TKHP79NRXL";
type Consent = "accepted" | "rejected" | null;
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    "ga-disable-G-TKHP79NRXL"?: boolean;
  }
}
export default function CookieBanner() {
  const [consent, setConsent] = useState<Consent>(null);
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    try {
      const stored = localStorage.getItem(KEY);
      if (stored === "accepted" || stored === "rejected") setConsent(stored);
      else setVisible(true);
    } catch { setVisible(true); }
  }, []);
  useEffect(() => {
    if (consent !== "accepted") return;
    window["ga-disable-G-TKHP79NRXL"] = false;
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer!.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", GA, { send_page_view: false });
  }, [consent]);
  useEffect(() => {
    if (consent === "accepted") window.gtag?.("event", "page_view", { page_path: pathname, page_location: window.location.origin + pathname, page_title: document.title });
  }, [pathname, consent]);
  function choose(value: Exclude<Consent, null>) {
    window["ga-disable-G-TKHP79NRXL"] = value !== "accepted";
    if (value === "rejected") {
      // Clear first-party Analytics cookies, including domain-scoped cookies.
      const domains = [window.location.hostname, ...window.location.hostname.split(".").map((_, i, parts) => parts.slice(i).join("."))];
      document.cookie.split(";").forEach(cookie => {
        const name = cookie.split("=")[0].trim();
        if (!/^_ga(?:_|$)/.test(name) && name !== "_gid") return;
        document.cookie = `${name}=; Max-Age=0; path=/`;
        domains.forEach(domain => { document.cookie = `${name}=; Max-Age=0; path=/; domain=${domain}`; });
      });
    }
    try { localStorage.setItem(KEY, value); } catch { /* Keep this visit's choice in memory. */ }
    setConsent(value);
    setVisible(false);
  }
  return <>
    {consent === "accepted" && <Script id="analytics-loader" src={`https://www.googletagmanager.com/gtag/js?id=${GA}`} strategy="afterInteractive" />}
    {!visible && <button onClick={() => setVisible(true)} className="fixed bottom-[calc(var(--mobile-nav-h)+0.5rem)] md:bottom-3 left-3 z-50 rounded-lg border border-white/25 bg-[#0d1b3e] px-3 py-2 text-xs">Configurar cookies</button>}
    {visible && <section aria-label="Preferencias de cookies" className="fixed bottom-[var(--mobile-nav-h)] md:bottom-6 left-0 right-0 md:left-6 md:right-auto md:max-w-md z-50 bg-[#0d1b3e] border border-white/20 rounded-t-2xl md:rounded-2xl shadow-xl p-5 max-h-[70dvh] overflow-y-auto">
      <h2 className="font-semibold mb-2">Tú decides sobre las cookies</h2>
      <p className="text-sm text-white/80 leading-relaxed mb-4">Google Analytics solo se carga si aceptas las cookies analíticas. Puedes cambiar tu elección en cualquier momento. <Link href="/cookies" className="text-cyan-200 underline">Política de cookies</Link>.</p>
      <div className="flex gap-3"><button onClick={() => choose("rejected")} className="button-outline flex-1">Rechazar</button><button onClick={() => choose("accepted")} className="button-primary flex-1">Aceptar</button></div>
    </section>}
  </>;
}
