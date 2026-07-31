import type { MetadataRoute } from "next";

import { EVENT_PATH } from "@/lib/event-bitcoin-pratica";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = [
    "",
    "/eventos",
    EVENT_PATH,
    "/conteudo",
    "/sobre",
    "/faq",
    "/politica-de-privacidade",
    "/termos-de-uso",
  ];

  return routes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: path === "" || path === EVENT_PATH ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === EVENT_PATH ? 0.9 : 0.7,
  }));
}
