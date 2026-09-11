import type { MetadataRoute } from "next";

import { siteUrl } from "@/components/speed-nexus/content";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
