import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ - Como podemos acelerar sua solução hoje? | LevaUp",
  description: "Respostas rápidas sobre corridas, pagamentos, segurança e tecnologia LevaUp. Passageiros, motoristas e suporte direto de Paraíso do Tocantins.",
  keywords: [
    "dúvidas LevaUp",
    "FAQ LevaUp",
    "como funciona LevaUp",
    "taxa 10% LevaUp",
    "suporte LevaUp",
    "LevaUp Club Pro",
    "pagamento LevaUp",
  ],
  openGraph: {
    title: "FAQ LevaUp - Perguntas Frequentes",
    description: "Encontre respostas sobre corridas, pagamentos, segurança e tecnologia. Suporte humano em Paraíso/TO.",
    url: "https://levaup.com.br/faq",
    type: "website",
  },
  alternates: {
    canonical: "https://levaup.com.br/faq",
  },
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
