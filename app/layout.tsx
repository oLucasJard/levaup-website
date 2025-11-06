import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/ui/scroll-to-top"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://levaup.com.br'),
  title: {
    default: "LevaUp - Mobilidade Urbana em Paraíso do Tocantins | App de Transporte",
    template: "%s | LevaUp - Mobilidade Urbana"
  },
  description:
    "LevaUp: App de mobilidade urbana em Paraíso/TO com comissão de apenas 10% para motoristas e preços justos para passageiros. Suporte local 24/7, segurança total e tecnologia de ponta.",
  keywords: [
    "LevaUp",
    "mobilidade urbana Paraíso do Tocantins",
    "app de transporte Paraíso TO",
    "motorista de app Paraíso",
    "corrida de carro Paraíso",
    "aplicativo de moto Paraíso",
    "transporte Tocantins",
    "BrandUp Hub",
    "corrida barata Paraíso",
    "motorista parceiro",
    "ganhar dinheiro motorista",
    "comissão 10%",
    "LevaUp Carro",
    "LevaUp Moto",
    "transporte seguro"
  ],
  authors: [{ name: "BrandUp Hub", url: "https://levaup.com.br/sobre" }],
  creator: "BrandUp Hub",
  publisher: "LevaUp",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/favicon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://levaup.com.br',
    title: 'LevaUp - Mobilidade Urbana em Paraíso do Tocantins',
    description: 'App de transporte com comissão de apenas 10% para motoristas. Preços justos, suporte local 24/7 e segurança total.',
    siteName: 'LevaUp',
    images: [
      {
        url: '/logo-preto.png',
        width: 1200,
        height: 630,
        alt: 'LevaUp - App de Mobilidade Urbana',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LevaUp - Mobilidade Urbana em Paraíso do Tocantins',
    description: 'App de transporte com comissão de 10%. Motoristas ganham mais, passageiros pagam menos.',
    images: ['/logo-preto.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://levaup.com.br',
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'LevaUp',
    legalName: 'BrandUp Hub',
    url: 'https://levaup.com.br',
    logo: 'https://levaup.com.br/logo-preto.png',
    foundingDate: '2025',
    founders: [
      {
        '@type': 'Organization',
        name: 'BrandUp Hub'
      }
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Paraíso do Tocantins',
      addressRegion: 'TO',
      addressCountry: 'BR'
    },
    contactPoint: {
      '@type': 'ContactPoint',
        contactType: 'customer service',
        email: 'contatolevaup@gmail.com',
        availableLanguage: ['Portuguese']
    },
    sameAs: [
      'https://www.instagram.com/levaup.to/',
      'https://www.facebook.com/share/1Eud8vrfDK/'
    ],
    description: 'App de mobilidade urbana em Paraíso do Tocantins com comissão de apenas 10% para motoristas e preços justos para passageiros.',
    areaServed: {
      '@type': 'City',
      name: 'Paraíso do Tocantins',
      '@id': 'https://www.wikidata.org/wiki/Q2003780'
    },
    service: {
      '@type': 'Service',
      name: 'Serviço de Transporte Urbano',
      description: 'Conectamos passageiros a motoristas parceiros para transporte em carros e motos',
      provider: {
        '@type': 'Organization',
        name: 'LevaUp'
      }
    }
  }

  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#FF8000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="LevaUp" />
        <meta name="msapplication-TileColor" content="#FF8000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="canonical" href="https://levaup.com.br" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ScrollToTop />
        <Toaster />
      </body>
    </html>
  )
}
