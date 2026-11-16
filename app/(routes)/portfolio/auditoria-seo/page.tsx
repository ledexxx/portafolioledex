import Link from "next/link";
import { pageMetadata, site } from "@/lib/site";
export const metadata = pageMetadata("Caso técnico: auditoría SEO del portafolio", "Diagnóstico y mejoras del portafolio de Leonel Delgado: indexabilidad, sitemap, metadatos, imágenes y accesibilidad. Implementación sin métricas inventadas.", "/portfolio/auditoria-seo");
const changes = [
  { issue: "El sitemap enlazaba a rutas en español que no existían.", action: "Se incluyeron las rutas reales y se añadieron redirecciones permanentes desde las variantes anteriores.", check: "Consultar /sitemap.xml y comprobar la respuesta de cada URL y de las redirecciones." },
  { issue: "La imagen social referenciada no existía y los metadatos variaban entre páginas.", action: "Se centralizaron título, descripción, canonical y etiquetas sociales, y se creó una imagen de 1200 × 630.", check: "Inspeccionar el HTML inicial y abrir /opengraph-image.png." },
  { issue: "La portada no mostraba un encabezado principal visible y daba poca prioridad al CV.", action: "Se añadió un H1 visible, experiencia relevante, enlaces al CV y contacto profesional.", check: "Revisar el contenido sin JavaScript y recorrer los enlaces con teclado." },
  { issue: "Algunas tarjetas de proyecto enlazaban a una demo vacía.", action: "Se retiraron los enlaces sin destino y se optimizaron las capturas con dimensiones reservadas y tamaños responsivos.", check: "Comprobar los destinos y revisar las tarjetas en móvil y escritorio." },
  { issue: "Analytics se cargaba antes de decidir sobre cookies.", action: "Se condicionó la carga a la aceptación y se añadió la opción de cambiar la decisión.", check: "Con almacenamiento limpio, revisar la red antes de aceptar, al rechazar y después de aceptar." },
];
export default function AuditPage() {
  return <article className="max-w-4xl mx-auto px-6 pt-32 md:pt-12 pb-16">
    <Link href="/portfolio" className="text-cyan-200 underline">← Volver a proyectos</Link>
    <p className="eyebrow mt-10">Proyecto propio · Next.js · SEO técnico</p>
    <h1 className="text-4xl md:text-5xl font-bold leading-tight">Auditoría e implementación SEO de mi portafolio</h1>
    <p className="text-xl text-white/80 leading-relaxed mt-6">Una muestra de cómo conecto el diagnóstico técnico con cambios concretos en código y contenido.</p>
    <dl className="grid sm:grid-cols-3 gap-5 my-10 border-y border-white/15 py-6"><div><dt className="text-white/60 text-sm">Proyecto</dt><dd>Portafolio personal LEDEX</dd></div><div><dt className="text-white/60 text-sm">Ámbito</dt><dd>SEO técnico y experiencia de usuario</dd></div><div><dt className="text-white/60 text-sm">Revisión</dt><dd>Noviembre de 2026</dd></div></dl>
    <h2 className="section-title">Objetivo y punto de partida</h2><p className="mt-4 leading-relaxed text-white/80">Facilitar el rastreo de las páginas públicas y ayudar a un reclutador a identificar mi especialización, revisar experiencia y contactar. La revisión se centró en el repositorio y en el comportamiento de la aplicación.</p>
    <h2 className="section-title mt-12">Problemas, cambios y verificación</h2>
    <div className="space-y-5 mt-6">{changes.map((item, i) => <section key={item.issue} className="rounded-2xl border border-white/15 bg-white/5 p-6"><p className="eyebrow">Hallazgo 0{i + 1}</p><h3 className="text-xl font-semibold">{item.issue}</h3><p className="mt-3 text-white/80">{item.action}</p><p className="mt-4 text-sm text-cyan-100"><strong>Cómo verificar:</strong> {item.check}</p></section>)}</div>
    <h2 className="section-title mt-12">Alcance y medición posterior</h2><p className="mt-4 leading-relaxed text-white/80">Este caso documenta cambios técnicos, no un aumento demostrado de tráfico o posiciones. La evolución debe medirse tras publicar, comparando periodos equivalentes en Search Console y teniendo en cuenta la demanda y otros cambios del sitio.</p>
    <ul className="list-disc pl-6 space-y-3 mt-5 text-white/80"><li>Inspeccionar las URLs canónicas y enviar el sitemap actualizado.</li><li>Registrar clics, impresiones, CTR y consultas por página.</li><li>Medir Core Web Vitals con datos de campo cuando haya tráfico suficiente.</li><li>Revisar las consultas profesionales recibidas desde el portafolio.</li></ul>
    <div className="mt-12 flex flex-wrap gap-3"><a className="button-primary" href={site.cv} download>Descargar CV</a><a className="button-outline" href={site.linkedin} target="_blank" rel="noopener noreferrer">Hablemos por LinkedIn</a></div>
  </article>;
}
