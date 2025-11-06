import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Para Passageiros - Solicite Corridas com Preços Justos",
  description: "LevaUp Passageiros: Corridas com preço justo, GPS preciso e segurança total. Ganhe 200 pontos de bônus na primeira viagem. LevaUp Carro e Moto disponíveis em Paraíso/TO.",
  keywords: [
    "solicitar corrida Paraíso",
    "app de transporte passageiro",
    "corrida barata Paraíso TO",
    "LevaUp Passageiro",
    "chamar carro Paraíso",
    "mototáxi app Paraíso",
    "transporte seguro Tocantins",
    "GPS preciso",
    "preço justo corrida"
  ],
  openGraph: {
    title: "LevaUp Passageiros - Corridas com Preços Justos em Paraíso/TO",
    description: "Solicite corridas com preços justos, GPS preciso e segurança total. Ganhe 200 pontos de bônus!",
    url: "https://levaup.com.br/passageiro",
    type: "website",
  },
  alternates: {
    canonical: "https://levaup.com.br/passageiro",
  },
}

export default function PassageiroLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

