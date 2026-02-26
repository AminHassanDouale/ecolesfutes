// app/robots.ts
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
    sitemap: "https://www.lesPetitsFutes.dj/sitemap.xml",
    host: "https://www.lesPetitsFutes.dj",
  };
}