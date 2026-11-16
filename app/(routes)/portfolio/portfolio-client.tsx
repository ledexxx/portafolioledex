
import Link from "next/link";
import { dataPortfolio } from "@/data";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";
import PortfolioBox from "@/components/portfolio-box";

const PortfolioClient = () => {
    return (
        <ContainerPage>
            <TransitionPage />

            <div className="flex flex-col justify-center h-full md:bottom-12 mt-12">
                <h1 className="text-4xl leading-tight text-center md:text-6xl md:mb-5">
                    Proyectos y{" "}
                    <span className="font-bold text-secondary">caso técnico SEO</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 text-center">
                    Explora mi portafolio de proyectos donde combino diseño y tecnología
                    para crear experiencias digitales únicas.
                </p>
                <Link href="/portfolio/auditoria-seo" className="block rounded-2xl border border-secondary/40 bg-secondary/10 p-8"><p className="eyebrow">Proyecto propio · SEO técnico</p><h2 className="text-2xl font-bold">Auditoría e implementación en este portafolio</h2><p className="text-white/80 mt-3">Del diagnóstico al código: sitemap, metadatos, accesibilidad y analítica. Consulta los cambios y cómo verificarlos.</p><span className="inline-block text-cyan-200 mt-4 underline">Leer el caso técnico →</span></Link>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                    {dataPortfolio.map((data) => (
                        <PortfolioBox key={data.id} data={data} />
                    ))}
                </div>
            </div>
        </ContainerPage>
    );
};

export default PortfolioClient;
