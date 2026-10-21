import type { MetadataRoute } from "next";
import { guides } from "@/lib/guides";
import { siteUrl } from "@/lib/schema";

/* Required by `output: "export"` — the sitemap is rendered once at build. */
export const dynamic = "force-static";

const routes: Array<{
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
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
  })),
  { path: "/contact/", priority: 0.7, changeFrequency: "yearly" },
  { path: "/privacy/", priority: 0.2, changeFrequency: "yearly" },
  { path: "/terms/", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: new URL(route.path, siteUrl).toString(),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
