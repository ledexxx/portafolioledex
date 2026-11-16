import { pageMetadata } from "@/lib/site";
import PortfolioClient from "./portfolio-client";

export const metadata = pageMetadata("Proyectos y caso técnico SEO", "Proyectos de desarrollo web y una auditoría técnica del portafolio: problemas detectados, implementación y verificación.", "/portfolio");

export default function Page() {
    return <PortfolioClient />;
}
