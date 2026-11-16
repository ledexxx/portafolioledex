import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle, Code2, Search, FileText } from "lucide-react";
import { site } from "@/lib/site";
import { dataAboutPage } from "@/data";
const skills = [
  { icon: Search, title: "SEO técnico y on-page", text: "Auditorías de indexabilidad, arquitectura web, enlazado interno, metadatos e intención de búsqueda." },
  { icon: Code2, title: "Del diagnóstico al código", text: "Implementación de mejoras en WordPress, Shopify y Next.js, con foco en rendimiento y estructura semántica." },
  { icon: FileText, title: "Análisis y seguimiento", text: "Priorización de acciones y seguimiento de visibilidad orgánica con Google Search Console y Analytics." },
];
export default function Introduction() {
  return <div className="max-w-6xl mx-auto px-6">
    <section className="grid md:grid-cols-[1.35fr_1fr] gap-12 items-center pt-32 md:pt-14 pb-16">
      <div>
        <p className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-secondary/10 px-4 py-2 text-sm text-cyan-100"><span className="h-2 w-2 rounded-full bg-secondary" /> Abierto a oportunidades en SEO</p>
        <p className="mt-7 text-lg text-white/75">Leonel Delgado · Soria, España</p>
        <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight text-balance">SEO técnico con capacidad de <span className="text-secondary">implementación.</span></h1>
        <p className="mt-6 text-lg leading-relaxed text-white/80 max-w-xl">Combino experiencia en agencias SEO y desarrollo Front-End para detectar problemas, priorizar acciones y llevar las mejoras al código.</p>
        <p className="mt-4 text-white/70 leading-relaxed">Busco aportar a un equipo de marketing, una agencia o un proyecto digital. Aquí puedes revisar mi trayectoria y mi trabajo.</p>
        <div className="flex flex-wrap gap-3 mt-8">
          <a className="button-primary" href={site.cv} download><FileText size={18} /> Descargar CV</a>
          <a className="button-outline" href={site.whatsapp} target="_blank" rel="noopener noreferrer">Hablemos de una oportunidad <ArrowUpRight size={18} /></a>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 mt-5 text-sm">
          <Link className="text-cyan-200 underline underline-offset-4" href="/about-me">Ver experiencia profesional</Link>
          <a className="text-cyan-200 underline underline-offset-4" href={site.linkedin} target="_blank" rel="noopener noreferrer">Perfil de LinkedIn</a>
          <a className="text-cyan-200 underline underline-offset-4" href="/downloable/cv_english.pdf" download>CV in English</a>
        </div>
      </div>
      <div className="relative max-w-sm mx-auto w-full">
        <Image src="/foto-carnet.webp" alt="Leonel Delgado, consultor SEO y desarrollador web" width={500} height={500} sizes="(max-width: 768px) 85vw, 384px" priority className="rounded-3xl w-full shadow-2xl" />
        <div className="mt-4 rounded-2xl border border-white/15 bg-white/5 p-5"><p className="font-semibold">SEO + desarrollo web</p><p className="mt-1 text-sm text-white/70">WordPress · Shopify · React · Next.js</p></div>
      </div>
    </section>
    <section className="border-t border-white/10 py-14" aria-labelledby="valor">
      <p className="eyebrow">Qué aporto al equipo</p><h2 id="valor" className="section-title">Una visión técnica, de búsqueda a implementación.</h2>
      <div className="grid md:grid-cols-3 gap-5 mt-8">{skills.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6"><Icon className="text-secondary mb-5" aria-hidden="true" /><h3 className="text-xl font-semibold">{title}</h3><p className="text-white/75 leading-relaxed mt-3">{text}</p></article>)}</div>
    </section>
    <section className="py-14 border-t border-white/10" aria-labelledby="experiencia">
      <p className="eyebrow">Experiencia relevante</p><h2 id="experiencia" className="section-title">Trabajo en agencia y proyectos internacionales.</h2>
      <div className="grid md:grid-cols-3 gap-6 mt-8">{dataAboutPage.slice(0, 3).map(item => <article key={item.id} className="border-l-2 border-secondary/50 pl-5"><p className="text-sm text-cyan-200">{item.date} · {item.subtitle}</p><h3 className="text-xl font-semibold mt-3">{item.title}</h3><p className="mt-3 text-white/75 leading-relaxed">{item.description}</p></article>)}</div>
      <Link href="/about-me" className="button-outline mt-8">Ver trayectoria completa <ArrowUpRight size={18} /></Link>
    </section>
    <section className="py-14 border-t border-white/10 grid md:grid-cols-2 gap-10 items-center">
      <div><p className="eyebrow">Muestra de trabajo</p><h2 className="section-title">El SEO también se demuestra en el código.</h2><p className="mt-5 text-white/75 leading-relaxed">Explora mis proyectos de desarrollo y la revisión técnica de este portafolio: diagnóstico, cambios implementados y límites de la medición.</p><div className="flex flex-wrap gap-3 mt-6"><Link className="button-primary" href="/portfolio/auditoria-seo">Ver caso técnico</Link><Link className="button-outline" href="/portfolio">Todos los proyectos</Link></div></div>
      <ul className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-7">{["URLs canónicas y sitemap coherentes", "Metadatos y contenido renderizados en servidor", "Imágenes optimizadas y navegación accesible", "Analítica activada solo tras aceptar cookies"].map(text => <li key={text} className="flex gap-3"><CheckCircle className="text-secondary shrink-0" size={20} aria-hidden="true" />{text}</li>)}</ul>
    </section>
    <section id="contacto" className="my-10 rounded-3xl border border-secondary/30 bg-secondary/10 p-8 md:p-12"><p className="eyebrow">Siguiente paso</p><h2 className="section-title">¿Buscas un perfil SEO con base técnica?</h2><p className="mt-4 text-white/80 max-w-2xl">Cuéntame el puesto, el equipo y los retos del proyecto. Podemos hablar por LinkedIn o WhatsApp.</p><div className="flex flex-wrap gap-3 mt-6"><a className="button-primary" href={site.linkedin} target="_blank" rel="noopener noreferrer">Contactar por LinkedIn</a><a className="button-outline" href={site.whatsapp} target="_blank" rel="noopener noreferrer">Hablar por WhatsApp</a></div></section>
  </div>;
}
