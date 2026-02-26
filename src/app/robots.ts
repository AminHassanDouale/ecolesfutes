// src/app/robots.ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/portail/", "/api/", "/_next/"],
      },
    ],
    sitemap: "https://petitsfutes.org/sitemap.xml",
    host: "https://petitsfutes.org",
  };
}