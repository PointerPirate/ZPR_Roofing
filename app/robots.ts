import type { MetadataRoute } from "next";
import { BUSINESS } from "@/lib/site-data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${BUSINESS.siteUrl}/sitemap.xml`,
  };
}
