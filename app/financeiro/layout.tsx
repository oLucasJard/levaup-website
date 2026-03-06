import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "LevaUp Finance | Como o Dinheiro Funciona",
  description: "Transparência radical: entenda a taxa de 10%, carteira virtual, repasses, limite de crédito e proteção contra fraudes. Para motoristas e passageiros em Paraíso/TO.",
  keywords: [
    "LevaUp financeiro",
    "taxa 10% LevaUp",
    "carteira virtual motorista",
    "repasses LevaUp",
    "saldo devedor passageiro",
    "transparência LevaUp",
  ],
  openGraph: {
    title: "LevaUp Finance - Como o Dinheiro Funciona",
    description: "Sem taxas ocultas. Sem bloqueios misteriosos. Entenda para onde vai cada centavo da sua corrida.",
    url: "https://levaup.com.br/financeiro",
    type: "website",
  },
  alternates: {
    canonical: "https://levaup.com.br/financeiro",
  },
}

export default function FinanceiroLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
