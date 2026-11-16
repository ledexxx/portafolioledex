import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import type { PortfolioItem } from "@/data";
export default function PortfolioBox({ data }: { data: PortfolioItem }) {
  const hasDemo = data.urlDemo.startsWith("https://");
  return <article className="bg-blue-900/50 rounded-xl overflow-hidden border border-white/10 flex flex-col">
    <div className="relative h-56"><Image src={data.image} alt={`Vista del proyecto ${data.title}`} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" /></div>
    <div className="p-6 flex flex-col flex-1"><h2 className="text-xl font-bold mb-3">{data.title}</h2><p className="text-gray-200 mb-5">{data.description}</p>
      <div className="flex flex-wrap gap-3 mt-auto">
        <a href={data.urlGithub} target="_blank" rel="noopener noreferrer" aria-label={`Ver código de ${data.title} en GitHub`} className="button-outline"><Github size={16} /> Código</a>
        {hasDemo ? <a href={data.urlDemo} target="_blank" rel="noopener noreferrer" aria-label={`Ver ${data.title}`} className="button-primary"><ExternalLink size={16} />{data.urlDemo.includes("canva.com") ? "Presentación" : "Ver proyecto"}</a> : <span className="text-sm text-white/65 self-center">Sin demo pública</span>}
      </div>
    </div>
  </article>;
}
