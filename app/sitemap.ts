import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about-me", "/services", "/portfolio", "/portfolio/auditoria-seo"].map(path => ({ url: `${site.url}${path}` }));
}
