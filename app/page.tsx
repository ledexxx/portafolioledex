import Introduction from "@/components/introduction";
import { pageMetadata, site } from "@/lib/site";
export const metadata = pageMetadata(site.title, site.description, "/");
export default function Home() { return <Introduction />; }
