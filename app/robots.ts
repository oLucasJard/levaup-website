import type { MetadataRoute } from "next"

const BASE_URL = "https://levaup.com.br"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/em-breve"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/em-breve"],
      },
      {
        userAgent: "Googlebot-Image",
        allow: "/",
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/", "/em-breve"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  }
}
