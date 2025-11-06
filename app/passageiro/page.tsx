import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import type { Metadata } from "next"
import { SEOBreadcrumb } from "@/components/seo-breadcrumb"
import {
  MapPin,
  DollarSign,
  Gift,
  Car,
  Bike,
  Shield,
  Share2,
  AlertTriangle,
  Star,
  Clock,
  CheckCircle,
} from "lucide-react"

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

export default function PassageiroPage() {
  return (
    <>
      <SEOBreadcrumb items={[
        { name: 'Home', url: '/' },
        { name: 'Para Passageiros', url: '/passageiro' }
      ]} />
      <div className="flex flex-col">
        {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                Para Passageiros
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                LevaUp Passageiros:
                <span className="text-primary block">Sua Corrida Perfeita Começa Aqui</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Chega de esperar na incerteza! Com o LevaUp, você tem localização precisa, preço justo e a segurança que
                merece. Sua mobilidade nunca mais será a mesma.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  Faça seu Pré-Cadastro
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                  Baixe o App (Em Breve)
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=400"
                alt="LevaUp App para Passageiros"
                width={400}
                height={500}
                className="mx-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problemas que Resolvemos */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Acabou a Dor de Cabeça com Transporte</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Identificamos os principais problemas e criamos soluções inteligentes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                  <Clock className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-red-600">Problema</h3>
                <p className="text-muted-foreground">Espera longa sem saber onde está o motorista</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                  <MapPin className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-red-600">Problema</h3>
                <p className="text-muted-foreground">Erro de localização e motorista perdido</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                  <DollarSign className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-red-600">Problema</h3>
                <p className="text-muted-foreground">Preços abusivos e taxas escondidas</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefícios do LevaUp */}
      <section className="py-16">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Como o LevaUp Resolve Tudo Isso</h2>
            <p className="text-lg text-muted-foreground">Tecnologia de ponta para uma experiência superior</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Geolocalização Precisa</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sistema GPS avançado que elimina erros de localização. Você sempre sabe exatamente onde está seu
                  motorista.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Preço Justo e Transparente</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sem surpresas! Preço calculado de forma justa, sem taxas escondidas ou aumentos abusivos.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Gift className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>LevaUp Rewards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ganhe 200 pontos na primeira corrida! Participe de sorteios semanais e acumule benefícios.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Car className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>LevaUp Carro</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Para quem prioriza conforto. Carros selecionados com ar-condicionado e espaço para bagagens.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Bike className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>LevaUp Moto</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Para quem tem pressa. Chegue mais rápido ao destino com nossas motos seguras e equipadas.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Segurança Total</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Botão de pânico, compartilhamento de viagem em tempo real e motoristas verificados.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recursos de Segurança */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Sua Segurança é Nossa Prioridade</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Botão de Pânico</h3>
                    <p className="text-muted-foreground">Acione ajuda instantânea em situações de emergência</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Share2 className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Compartilhamento de Viagem</h3>
                    <p className="text-muted-foreground">Seus familiares acompanham sua viagem em tempo real</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Motoristas Verificados</h3>
                    <p className="text-muted-foreground">Todos os motoristas passam por verificação rigorosa</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Recursos de Segurança"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">O Que Nossos Usuários Dizem</h2>
            <p className="text-lg text-muted-foreground">Experiências reais de quem já usa o LevaUp</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6">
              <CardContent className="space-y-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "Finalmente um app que funciona de verdade! Nunca mais tive problema com localização."
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold">M</span>
                  </div>
                  <span className="text-sm font-medium">Maria Silva</span>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="space-y-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "Os preços são justos e o atendimento é excelente. Recomendo para todos!"
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold">J</span>
                  </div>
                  <span className="text-sm font-medium">João Santos</span>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="space-y-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "Me sinto muito mais segura usando o LevaUp. Os recursos de segurança são incríveis!"
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold">A</span>
                  </div>
                  <span className="text-sm font-medium">Ana Costa</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">Pronto para Sua Primeira Corrida?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Faça seu pré-cadastro agora e ganhe 200 pontos de bônus na primeira corrida!
          </p>

          <div className="max-w-md mx-auto space-y-4">
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input type="email" placeholder="Seu melhor e-mail" className="bg-background text-foreground" required />
              <Button type="submit" variant="secondary">
                Cadastrar
              </Button>
            </form>
            <p className="text-sm opacity-75">🎁 Ganhe 200 pontos Rewards + participação em sorteios semanais</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button variant="secondary" size="lg">
              Baixar na Google Play (Em Breve)
            </Button>
            <Button variant="secondary" size="lg">
              Baixar na App Store (Em Breve)
            </Button>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}
