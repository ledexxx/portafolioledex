import { pageMetadata } from "@/lib/site";
import AboutMePage from "./about-me-client";

export const metadata = pageMetadata("Experiencia en SEO y desarrollo web", "Trayectoria de Leonel Delgado en agencias SEO, proyectos internacionales y desarrollo Front-End. Formación, experiencia profesional y currículum.", "/about-me");

export default function Page() {
    return <AboutMePage />;
}
