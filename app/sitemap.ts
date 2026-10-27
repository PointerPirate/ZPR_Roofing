import type { MetadataRoute } from "next";
import { CITIES, SERVICES, BUSINESS } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = BUSINESS.siteUrl;
  const now = new Date();

  const staticPages = [
    "",
    "/about",
    "/areas-we-serve",
    "/contact",
    "/faq",
    "/portfolio",
    "/testimonials",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1.0 : 0.7,
  }));

  const servicePages = SERVICES.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const cityPages = CITIES.map((c) => ({
    url: `${base}/areas-we-serve/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...servicePages, ...cityPages];
}
