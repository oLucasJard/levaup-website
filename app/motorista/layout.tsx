import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "LevaUp Partner Program - A corrida é sua. O dinheiro também deveria ser.",
  description: "Taxa transparente de 10%, suporte olho no olho em Paraíso/TO e engenharia de ponta. Programa LevaUp Founders: vagas limitadas para os 20 primeiros. Cadastro em até 24h.",
  keywords: [
    "motorista de app Paraíso",
    "LevaUp Partner Program",
    "comissão 10% motorista",
    "motorista parceiro Paraíso TO",
    "LevaUp Founders",
    "cadastro motorista Paraíso",
    "app motorista Tocantins",
    "LevaUp Club Pro",
    "BrandUp Hub motorista"
  ],
  openGraph: {
    title: "LevaUp Partner Program - Para Motoristas em Paraíso/TO",
    description: "Taxa fixa 10%, suporte local e tecnologia de startups. Até R$ 680 a mais no bolso. Solicite seu cadastro.",
    url: "https://levaup.com.br/motorista",
    type: "website",
  },
  alternates: {
    canonical: "https://levaup.com.br/motorista",
  },
}

export default function MotoristaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

