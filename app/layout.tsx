import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CookieBanner from "@/components/cookie-banner";
import { site } from "@/lib/site";
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: "%s | Leonel Delgado" },
  description: site.description,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  robots: { index: true, follow: true },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ? { verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } } : {}),
};
const jsonLd = {
  "@context": "https://schema.org", "@type": "Person", "@id": `${site.url}/#person`,
  name: site.name, jobTitle: "Consultor SEO y desarrollador Front-End", url: site.url,
  image: `${site.url}/foto-carnet.webp`,
  sameAs: [site.linkedin, "https://github.com/ledexxx", "https://www.behance.net/ledex_designs"],
  knowsAbout: ["SEO técnico", "SEO on-page", "Desarrollo Front-End", "WordPress", "Next.js"],
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body className="font-sans antialiased">
    <a href="#contenido" className="skip-link">Saltar al contenido</a>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    <Navbar /><Header />
    <main id="contenido" tabIndex={-1} className="md:pt-[var(--header-h-desktop)]">{children}</main>
    <Footer /><CookieBanner />
  </body></html>;
}
