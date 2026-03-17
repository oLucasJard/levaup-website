import type { MetadataRoute } from "next"

const BASE_URL = "https://levaup.com.br"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    { url: BASE_URL, lastModified, changeFrequency: "daily", priority: 1 },
    { url: `${BASE_URL}/passageiro`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/motorista`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/motorista/seguranca`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/motorista/transparencia`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/precos`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/faq`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/financeiro`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/sobre`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/contato`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/termos`, lastModified, changeFrequency: "monthly", priority: 0.3 },
    { url: `${BASE_URL}/privacidade`, lastModified, changeFrequency: "monthly", priority: 0.3 },
  ]
}
