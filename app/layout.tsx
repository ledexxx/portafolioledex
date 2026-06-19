import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Script from "next/script"; // 1. Importamos el componente Script de Next.js
import "./globals.css";
import Navbar from "@/components/navbar";
import Header from "@/components/header";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const urbanist = Urbanist({ subsets: ["latin"] });

// ─── SEO METADATA ────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL("https://www.ledexcorp.site"),

  title: {
    default: "Leonel Delgado | Diseñador Gráfico & Desarrollador Front-End",
    template: "%s | Leonel Delgado",
  },
  description:
    "Diseñador gráfico y desarrollador Front-End especializado en crear interfaces digitales que fusionan creatividad y tecnología. Transformo ideas en experiencias visuales impactantes.",
  keywords: [
    "diseñador gráfico",
    "desarrollador front-end",
    "diseño web",
    "UI UX",
    "portafolio",
    "Leonel Delgado",
    "ledex",
    "ledexcorp",
  ],
  authors: [{ name: "Leonel Delgado", url: "https://www.ledexcorp.site" }],
  creator: "Leonel Delgado",

  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://www.ledexcorp.site",
    siteName: "Leonel Delgado — LEDEX",
    title: "Leonel Delgado | Diseñador Gráfico & Desarrollador Front-End",
    description:
      "Interfaces digitales con código funcional y diseño estratégico. ¿Listo para innovar?",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Leonel Delgado — Diseñador & Desarrollador Front-End",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Leonel Delgado | Diseñador & Desarrollador Front-End",
    description:
      "Interfaces digitales con código funcional y diseño estratégico.",
    images: ["/opengraph-image.png"],
  },

  alternates: {
    canonical: "https://www.ledexcorp.site",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "PEGA_AQUI_TU_CODIGO_GSC", // ← Google Search Console
  },
};

// ─── JSON-LD SCHEMA ──────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Leonel Delgado",
  jobTitle: "Diseñador Gráfico y Desarrollador Front-End",
  url: "https://www.ledexcorp.site",
  image: "https://www.ledexcorp.site/opengraph-image.png",
  sameAs: [
    "https://www.behance.net/TUUSUARIO",  // ← reemplaza
    "https://linkedin.com/in/TUUSUARIO",  // ← reemplaza
    "https://github.com/TUUSUARIO",       // ← reemplaza
  ],
  knowsAbout: [
    "Diseño web",
    "Desarrollo Front-End",
    "UI/UX Design",
    "Diseño gráfico",
  ],
};

// ─── ROOT LAYOUT ─────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={urbanist.className}>
        
        {/* 2. Carga asíncrona optimizada de Google Analytics (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-TKHP79NRXL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-TKHP79NRXL');
          `}
        </Script>

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Navbar />
        <Header />
        <div className="bg-[#0b365e] pb-[var(--mobile-nav-h)] md:bg-transparent md:pb-0 md:pt-[var(--header-h-desktop)]">
          {children}
        </div>

      </body>
    </html>
  );
}