import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "LevaUp para Passageiros - Seu destino, sem a tela de Motorista Cancelou",
  description: "Motoristas que aceitam em segundos, preço justo na tela e segurança em código. PIX e dinheiro. App em breve em Paraíso/TO.",
  keywords: [
    "solicitar corrida Paraíso",
    "app de transporte passageiro",
    "corrida barata Paraíso TO",
    "LevaUp Passageiro",
    "chamar carro Paraíso",
    "transporte seguro Tocantins",
    "preço justo corrida",
    "motorista cancelou"
  ],
  openGraph: {
    title: "LevaUp para Passageiros - Corridas rápidas e justas em Paraíso/TO",
    description: "O fim do estresse na calçada. Taxa de 10% para motoristas = corrida aceita em segundos.",
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

