import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Preços - Tarifas e Valores Transparentes",
  description: "Conheça a política de preços do LevaUp: tarifas de moto (R$ 0,80/km) e carro (R$ 1,40/km), multiplicadores de horário, cupons de desconto e formas de pagamento. Transparência total em Paraíso/TO.",
  keywords: [
    "preços LevaUp",
    "tarifa moto Paraíso",
    "tarifa carro Paraíso",
    "quanto custa LevaUp",
    "valor corrida Paraíso TO",
    "desconto LevaUp",
    "cupom LevaUp",
    "forma de pagamento",
    "preço app transporte"
  ],
  openGraph: {
    title: "Política de Preços LevaUp - Tarifas Transparentes",
    description: "Moto a partir de R$ 6,00 e Carro a partir de R$ 8,00. Sem taxas escondidas. Cupons de desconto disponíveis.",
    url: "https://levaup.com.br/precos",
    type: "website",
  },
  alternates: {
    canonical: "https://levaup.com.br/precos",
  },
}

export default function PrecosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pricingJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'PriceSpecification',
    name: 'Política de Preços LevaUp',
    description: 'Tarifas e valores para serviços de mobilidade urbana em Paraíso do Tocantins',
    priceCurrency: 'BRL',
    offers: [
      {
        '@type': 'Offer',
        name: 'LevaUp Moto',
        description: 'Serviço de transporte por moto',
        price: '6.00',
        priceCurrency: 'BRL',
        priceValidUntil: '2025-12-31',
        availability: 'https://schema.org/InStock',
        areaServed: {
          '@type': 'City',
          name: 'Paraíso do Tocantins'
        }
      },
      {
        '@type': 'Offer',
        name: 'LevaUp Carro',
        description: 'Serviço de transporte por carro',
        price: '8.00',
        priceCurrency: 'BRL',
        priceValidUntil: '2025-12-31',
        availability: 'https://schema.org/InStock',
        areaServed: {
          '@type': 'City',
          name: 'Paraíso do Tocantins'
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd) }}
      />
      {children}
    </>
  )
}

