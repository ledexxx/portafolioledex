import type { Metadata } from "next";
export const site = {
  url: "https://www.ledexcorp.site",
  name: "Leonel Delgado",
  title: "Leonel Delgado | SEO técnico y desarrollo web",
  description: "Consultor SEO con experiencia en agencias y desarrollo Front-End. Auditorías, SEO on-page y optimización web. Conoce mi trayectoria, proyectos y CV.",
  linkedin: "https://www.linkedin.com/in/leonel-delgado-264784217/",
  whatsapp: `https://wa.me/34624136170?text=${encodeURIComponent("Hola Leonel, me gustaría hablar contigo sobre una oportunidad profesional en SEO.")}`,
  cv: "/downloable/cv_español.pdf",
};
export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title: path === "/" ? { absolute: site.title } : title, description,
    alternates: { canonical: `${site.url}${path}` },
    openGraph: { title: path === "/" ? site.title : `${title} | ${site.name}`, description, url: `${site.url}${path}`, type: "website", locale: "es_ES", siteName: "Leonel Delgado — LEDEX", images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: site.title }] },
    twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image.png"] },
  };
}
