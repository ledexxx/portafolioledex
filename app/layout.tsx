import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/navbar";
import Header from "@/components/header";
import Footer from "@/components/footer";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const urbanist = Urbanist({ subsets: ["latin"] });

// ─── SEO METADATA ────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL("https://www.ledexcorp.site"),

  title: {
    default: "Leonel Delgado | Consultor SEO & Desarrollador Front-End",
    template: "%s | Leonel Delgado",
  },
  description:
    "Consultor SEO freelancer especializado en SEO técnico, desarrollo Front-End y diseño web. Posiciono negocios en Google y construyo sitios que convierten.",
  keywords: [
    "consultor SEO",
    "consultor SEO freelancer",
    "SEO técnico",
    "desarrollador front-end",
    "diseño web",
    "Leonel Delgado",
    "ledex",
    "ledexcorp",
    "SEO Soria",
  ],
  authors: [{ name: "Leonel Delgado", url: "https://www.ledexcorp.site" }],
  creator: "Leonel Delgado",

  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://www.ledexcorp.site",
    siteName: "Leonel Delgado — LEDEX",
    title: "Leonel Delgado | Consultor SEO & Desarrollador Front-End",
    description:
      "Consultor SEO freelancer. Posiciono tu negocio en Google con SEO técnico y desarrollo web orientado a la conversión.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Leonel Delgado — Consultor SEO & Desarrollador Front-End",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Leonel Delgado | Consultor SEO & Desarrollador Front-End",
    description:
      "Consultor SEO freelancer. Posiciono tu negocio en Google con SEO técnico y desarrollo web orientado a la conversión.",
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
    google: "", // ← Pega aquí el código de Google Search Console cuando lo tengas
  },
};

// ─── JSON-LD SCHEMA ──────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Leonel Delgado",
  jobTitle: "Consultor SEO & Desarrollador Front-End",
  url: "https://www.ledexcorp.site",
  image: "https://www.ledexcorp.site/opengraph-image.png",
  sameAs: [
    "https://www.behance.net/ledex_designs",
    "https://www.linkedin.com/in/leonel-delgado-264784217/",
    "https://github.com/ledexxx",
  ],
  knowsAbout: [
    "Consultoría SEO",
    "SEO técnico",
    "Desarrollo Front-End",
    "Diseño web",
    "UI/UX Design",
    "WordPress",
    "Shopify",
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

        {/* Google Analytics */}
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
        <Footer />

      </body>
    </html>
  );
}