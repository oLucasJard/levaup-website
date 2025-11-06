import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Para Motoristas - Ganhe Mais com Comissão de 10%",
  description: "Seja motorista LevaUp e ganhe mais! Comissão de apenas 10% (8% para fundadores). Suporte local, LevaUp Club Pro com gamificação e pagamentos semanais. Cadastre-se em Paraíso/TO.",
  keywords: [
    "motorista de app Paraíso",
    "trabalhar LevaUp",
    "ganhar dinheiro motorista",
    "comissão 10% motorista",
    "motorista parceiro Paraíso TO",
    "cadastro motorista Paraíso",
    "renda extra motorista",
    "app motorista Tocantins",
    "LevaUp Club Pro",
    "motorista fundador"
  ],
  openGraph: {
    title: "LevaUp Motoristas - Comissão de 10% em Paraíso/TO",
    description: "Ganhe até R$ 680/mês a mais! Comissão de 10%, suporte local e gamificação que premia.",
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

