import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contato - Fale Conosco | Suporte LevaUp",
  description: "Entre em contato com o LevaUp. E-mails: contato@levaup.com.br, motoristas@levaup.com.br, passageiros@levaup.com.br. Horário: Segunda-Sexta 8h-18h. Suporte local em Paraíso/TO.",
  keywords: [
    "contato LevaUp",
    "falar com LevaUp",
    "suporte LevaUp",
    "email LevaUp",
    "telefone LevaUp",
    "atendimento LevaUp",
    "fale conosco",
    "suporte Paraíso TO"
  ],
  openGraph: {
    title: "Contato - Fale Conosco | LevaUp",
    description: "Entre em contato conosco. Suporte local em Paraíso/TO. Segunda-Sexta 8h-18h.",
    url: "https://levaup.com.br/contato",
    type: "website",
  },
  alternates: {
    canonical: "https://levaup.com.br/contato",
  },
}

export default function ContatoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const contactJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'LevaUp - Mobilidade Urbana',
    image: 'https://levaup.com.br/logo-preto.png',
    '@id': 'https://levaup.com.br',
    url: 'https://levaup.com.br',
    telephone: 'Em breve',
    email: 'contatolevaup@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Endereço em breve',
      addressLocality: 'Paraíso do Tocantins',
      addressRegion: 'TO',
      postalCode: '77600-000',
      addressCountry: 'BR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -10.1750,
      longitude: -48.8828
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '12:00'
      }
    ],
    sameAs: [
      'https://www.instagram.com/levaup.to/',
      'https://www.facebook.com/share/1Eud8vrfDK/'
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      {children}
    </>
  )
}

