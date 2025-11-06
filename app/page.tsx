import { HeroSection } from "@/components/sections/hero-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { StatsSection } from "@/components/sections/stats-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { ComparisonSection } from "@/components/sections/comparison-section"
import { CTASection } from "@/components/sections/cta-section"
import { MapPin, Shield, DollarSign, Headphones, Zap, Users } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "LevaUp - App de Mobilidade Urbana em Paraíso do Tocantins",
  description: "LevaUp: O melhor app de transporte em Paraíso/TO. Comissão de 10% para motoristas, preços justos para passageiros. Suporte local 24/7, segurança total. Cadastre-se e ganhe 200 pontos!",
  keywords: [
    "LevaUp",
    "app transporte Paraíso TO",
    "mobilidade urbana Paraíso Tocantins",
    "corrida app Paraíso",
    "motorista app Paraíso",
    "Uber Paraíso",
    "99 Paraíso",
    "transporte Paraíso do Tocantins",
    "comissão 10%",
    "BrandUp Hub"
  ],
  alternates: {
    canonical: "https://levaup.com.br",
  },
}

export default function HomePage() {
  const features = [
    {
      icon: MapPin,
      title: "Geolocalização Precisa",
      description: "Sistema GPS avançado que elimina erros de localização. Você sempre sabe onde está seu motorista.",
      color: "text-blue-600"
    },
    {
      icon: DollarSign,
      title: "Preço Justo",
      description: "Comissão de apenas 10%. Sem taxas escondidas ou surpresas desagradáveis.",
      color: "text-green-600"
    },
    {
      icon: Headphones,
      title: "Suporte Local 24/7",
      description: "Ponto de apoio físico em Paraíso + atendimento online sempre disponível.",
      color: "text-purple-600"
    },
    {
      icon: Shield,
      title: "Segurança Total",
      description: "Botão de pânico, compartilhamento de viagem e motoristas verificados.",
      color: "text-red-600"
    },
    {
      icon: Zap,
      title: "Corridas Rápidas",
      description: "Algoritmo inteligente que encontra o motorista mais próximo em segundos.",
      color: "text-yellow-600"
    },
    {
      icon: Users,
      title: "Comunidade Local",
      description: "Motoristas e passageiros da sua cidade, gerando renda local.",
      color: "text-indigo-600"
    }
  ]

  const stats = [
    { value: "10", suffix: "%", label: "Comissão para motoristas" },
    { value: "200", suffix: "+", label: "Pontos de bônus inicial" },
    { value: "24", suffix: "/7", label: "Suporte disponível" }
  ]

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Passageira",
      content: "Finalmente um app que funciona de verdade! Nunca mais tive problema com localização.",
      rating: 5
    },
    {
      name: "João Santos",
      role: "Passageiro",
      content: "Os preços são justos e o atendimento é excelente. Recomendo para todos!",
      rating: 5
    },
    {
      name: "Ana Costa",
      role: "Passageira",
      content: "Me sinto muito mais segura usando o LevaUp. Os recursos de segurança são incríveis!",
      rating: 5
    }
  ]

  const comparisonItems = [
    {
      title: "Comissão",
      competitors: "20-30%",
      levaup: "Apenas 10%",
      isHighlight: true
    },
    {
      title: "Suporte",
      competitors: "Online apenas",
      levaup: "Local + Online"
    },
    {
      title: "Transparência",
      competitors: "Taxas ocultas",
      levaup: "100% Transparente"
    },
    {
      title: "Pagamento",
      competitors: "Semanal",
      levaup: "Semanal"
    }
  ]

  return (
    <div className="flex flex-col">
      <HeroSection
        badge="🚀 Lançamento em breve em Paraíso/TO"
        title="A Nova Era da Mobilidade Urbana"
        subtitle="Comissões justas para motoristas. Preços honestos para passageiros. Suporte local que realmente funciona."
        primaryCta={{
          text: "Sou Passageiro",
          href: "/passageiro"
        }}
        secondaryCta={{
          text: "Sou Motorista",
          href: "/motorista"
        }}
      />

      <StatsSection 
        stats={stats}
        title="LevaUp em Números"
        description="Veja por que somos diferentes"
      />

      <FeaturesSection
        title="Por Que Escolher o LevaUp?"
        description="Tecnologia de ponta com transparência e justiça para todos"
        features={features}
      />

      <ComparisonSection
        title="Veja a Diferença no Seu Bolso"
        description="Comparação real com outros aplicativos de mobilidade"
        items={comparisonItems}
      />

      <TestimonialsSection
        title="O Que Nossos Usuários Dizem"
        description="Experiências reais de quem já usa o LevaUp"
        testimonials={testimonials}
      />

      <CTASection
        title="Pronto para Fazer Parte da Revolução?"
        description="Cadastre seu e-mail e seja o primeiro a saber quando lançarmos. Ganhe bônus exclusivos!"
        variant="newsletter"
      />
    </div>
  )
}

