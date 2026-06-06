import type { MetadataRoute } from "next";
import { LANGS } from "@/lib/i18n";
import { SERVICES } from "@/lib/services";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];
  for (const lang of LANGS) {
    entries.push(
      { url: `${SITE.url}/${lang}`,           lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
      { url: `${SITE.url}/${lang}/servicios`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
      { url: `${SITE.url}/${lang}/trabajos`,  lastModified: now, changeFrequency: "monthly", priority: 0.6 },
      { url: `${SITE.url}/${lang}/sobre`,     lastModified: now, changeFrequency: "monthly", priority: 0.6 },
      { url: `${SITE.url}/${lang}/contacto`,  lastModified: now, changeFrequency: "monthly", priority: 0.6 }
    );
    for (const s of SERVICES) {
      entries.push({
        url: `${SITE.url}/${lang}/servicios/${s.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7
      });
    }
  }
  return entries;
}
