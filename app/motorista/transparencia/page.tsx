import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import { SEOBreadcrumb } from "@/components/seo-breadcrumb"
import { Calculator, MapPin, TrendingUp, Server, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Manual de Ganhos e Taxas | Transparência LevaUp",
  description: "Como calculamos a tarifa, o que é tarifa dinâmica e para onde vão os 10%: servidores Supabase, Maps API e equipe local. Transparência radical para motoristas em Paraíso/TO.",
  keywords: [
    "como calcula tarifa LevaUp",
    "transparência LevaUp",
    "10% comissão motorista",
    "tarifa dinâmica Paraíso",
    "ganhos motorista app",
    "LevaUp taxas explicadas",
  ],
  openGraph: {
    title: "Manual de Ganhos e Taxas - LevaUp em Detalhes",
    description: "Tudo sobre km, tarifa dinâmica e destino dos 10%. Sem surpresas.",
    url: "https://levaup.com.br/motorista/transparencia",
    type: "website",
  },
  alternates: {
    canonical: "https://levaup.com.br/motorista/transparencia",
  },
}

export default function TransparenciaPage() {
  return (
    <>
      <SEOBreadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Para Motoristas", url: "/motorista" },
        { name: "Manual de Ganhos e Taxas", url: "/motorista/transparencia" },
      ]} />
      <div className="flex flex-col">
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-levaup-black">
          <div className="container relative z-10 py-20">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-6 bg-levaup-petrol/20 text-levaup-petrol border border-levaup-petrol/40">
                Open Source da Tarifa
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                Manual de Ganhos e
                <span className="text-levaup-petrol block mt-2">
                  Taxas
                </span>
              </h1>
              <p className="mt-6 text-lg text-zinc-400 leading-relaxed">
                Transparência radical: aqui está exatamente como a tarifa é calculada, o que é cobrado e para onde vai cada centavo. Nada de “o app está me roubando” — a matemática é pública.
              </p>
              <Button asChild variant="outline" size="lg" className="mt-8 border-levaup-petrol/50 text-levaup-petrol hover:bg-levaup-petrol/10">
                <Link href="/motorista">Voltar para Para Motoristas</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Como calculamos o km */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Como calculamos o km?</h2>
            <Card className="border-2 border-levaup-petrol/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-levaup-petrol/10 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-levaup-petrol" />
                  </div>
                  <CardTitle className="text-xl">Distância e tempo reais</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  O valor da corrida é baseado na <strong className="text-foreground">distância real percorrida</strong> e no <strong className="text-foreground">tempo de viagem</strong>, calculados por APIs de mapas (ex.: Google Maps ou equivalente) que utilizam as vias reais da cidade — não “linha reta”. O passageiro vê a estimativa antes de confirmar e você vê o valor no app antes de aceitar.
                </p>
                <p>
                  As tarifas por km e por minuto são fixas e públicas (você pode consultar na página de Preços). Não inventamos números no meio do caminho: a fórmula é sempre <strong className="text-foreground">(km × tarifa/km) + (min × tarifa/min)</strong>, com possíveis bônus ou multiplicadores em horários de pico (tarifa dinâmica), explicados abaixo.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Tarifa dinâmica */}
        <section className="py-16 md:py-20 bg-muted/40">
          <div className="container max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Como funciona a tarifa dinâmica?</h2>
            <Card className="border-2 border-levaup-petrol/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-levaup-petrol/10 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-levaup-petrol" />
                  </div>
                  <CardTitle className="text-xl">Multiplicador em horários de pico</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Em horários de maior demanda (madrugada, chuva, eventos), pode ser aplicado um <strong className="text-foreground">multiplicador</strong> sobre a tarifa base (ex.: 1,2× ou 1,5×). Esse multiplicador é exibido claramente no app para o passageiro e para você antes da corrida ser aceita.
                </p>
                <p>
                  O objetivo é equilibrar oferta e demanda e remunerar melhor quem está na rua quando há poucos motoristas. Não é “aumento escondido”: é regra clara e visível para todos.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Por que 10%? */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Por que cobramos 10%?</h2>
            <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
              Os 10% que ficam com o LevaUp não vão para um escritório anônimo no exterior. Eles pagam a infraestrutura e a equipe que mantêm o app rodando para você.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-2 border-levaup-petrol/20">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-levaup-petrol/10 flex items-center justify-center mb-2">
                    <Server className="h-6 w-6 text-levaup-petrol" />
                  </div>
                  <CardTitle className="text-lg">Servidores e APIs (Supabase, Maps)</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Hospedagem em nuvem (Supabase), APIs de mapas e geolocalização, envio de notificações e banco de dados seguros. Tudo isso tem custo mensal fixo para manter o app estável e rápido.
                </CardContent>
              </Card>
              <Card className="border-2 border-levaup-petrol/20">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-levaup-petrol/10 flex items-center justify-center mb-2">
                    <Calculator className="h-6 w-6 text-levaup-petrol" />
                  </div>
                  <CardTitle className="text-lg">Manutenção e evolução do app</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Desenvolvimento, correções de bugs, novas funcionalidades e atualizações de segurança. O LevaUp é um produto da BrandUp Hub, construído e mantido com engenharia de software de ponta.
                </CardContent>
              </Card>
              <Card className="border-2 border-levaup-petrol/20">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-levaup-petrol/10 flex items-center justify-center mb-2">
                    <Users className="h-6 w-6 text-levaup-petrol" />
                  </div>
                  <CardTitle className="text-lg">Equipe local (Paraíso/TO)</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Suporte, central de operações, validação de cadastros e atendimento presencial. Pessoas da sua cidade que respondem quando você precisa — 24/7.
                </CardContent>
              </Card>
            </div>
            <p className="mt-8 text-center text-muted-foreground max-w-2xl mx-auto">
              Nossa meta é manter a taxa no menor nível possível sem comprometer a qualidade e a segurança do sistema. Por isso somos transparentes: você sabe onde o dinheiro vai e por que a taxa existe.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-levaup-petrol text-levaup-white">
          <div className="container max-w-2xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Sem surpresas. Só números.</h2>
            <p className="text-lg opacity-95 mb-8">
              Se você quer uma plataforma que abre o jogo sobre ganhos e taxas, o LevaUp foi feito para você.
            </p>
            <Button asChild size="lg" className="bg-white text-levaup-petrol hover:bg-zinc-100">
              <Link href="/motorista">Solicitar Cadastro de Parceiro</Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  )
}
