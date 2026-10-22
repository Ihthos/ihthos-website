import type { MetadataRoute } from "next";
import { guides } from "@/lib/guides";
import { siteUrl } from "@/lib/schema";

/* Required by `output: "export"` — the sitemap is rendered once at build. */
export const dynamic = "force-static";

/**
 * Last substantive copy change to the static pages. A build-time `new Date()`
 * would claim every page changed on every deploy, which eventually teaches
 * crawlers to ignore lastmod; bump this by hand when the copy actually changes.
 */
const CONTENT_UPDATED = "2026-10-21";

const routes: Array<{
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  updated?: string;
}> = [
  { path: "/", priority: 1, changeFrequency: "monthly" },
  { path: "/services/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/process/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/boundaries/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about/", priority: 0.7, changeFrequency: "monthly" },
  { path: "/guides/", priority: 0.7, changeFrequency: "monthly" },
  ...guides.map((guide) => ({
    path: `/guides/${guide.slug}/`,
    priority: 0.6,
    changeFrequency: "monthly" as const,
    updated: guide.updated,
  })),
  { path: "/contact/", priority: 0.7, changeFrequency: "yearly" },
  { path: "/privacy/", priority: 0.2, changeFrequency: "yearly" },
  { path: "/terms/", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: new URL(route.path, siteUrl).toString(),
    lastModified: route.updated ?? CONTENT_UPDATED,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
