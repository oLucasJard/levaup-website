import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Parceiros - Faça Parte do Ecossistema LevaUp",
  description: "Seja parceiro LevaUp e alcance milhares de clientes em Paraíso/TO. Oferecemos parcerias comerciais, corporativas e estratégicas. Aumente suas vendas até 40% com nosso programa de benefícios.",
  keywords: [
    "parceiros LevaUp",
    "parceria comercial Paraíso",
    "programa de parceiros",
    "parceria corporativa",
    "benefícios parceiros",
    "marketing local Paraíso",
    "parceria restaurante",
    "empresa parceira",
    "cashback parceiros"
  ],
  openGraph: {
    title: "Parceiros LevaUp - Cresça Seu Negócio em Paraíso/TO",
    description: "Parceria que gera resultados: +40% vendas, divulgação no app, cashback para clientes. Seja parceiro oficial!",
    url: "https://levaup.com.br/parceiros",
    type: "website",
  },
  alternates: {
    canonical: "https://levaup.com.br/parceiros",
  },
}

export default function ParceirosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const partnerJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Programa de Parceiros LevaUp',
    provider: {
      '@type': 'Organization',
      name: 'LevaUp'
    },
    description: 'Programa de parcerias comerciais, corporativas e estratégicas para empresas em Paraíso do Tocantins',
    areaServed: {
      '@type': 'City',
      name: 'Paraíso do Tocantins',
      '@id': 'https://www.wikidata.org/wiki/Q2003780'
    },
    offers: {
      '@type': 'Offer',
      name: 'Parceria Comercial LevaUp',
      description: 'Benefícios exclusivos para estabelecimentos parceiros',
      availability: 'https://schema.org/InStock'
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(partnerJsonLd) }}
      />
      {children}
    </>
  )
}

