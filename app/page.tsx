import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { MapPin, Shield, DollarSign, Headphones } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container relative z-10 text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              LevaUp: A Nova Era da
              <span className="text-primary block">Mobilidade Urbana</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Em breve: A Mobilidade que Você Merece em Paraíso!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="/passageiro">Pronto para Mudar Sua Rotina?</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
              <Link href="/motorista">Quero Acelerar Meus Lucros!</Link>
            </Button>
          </div>

          <div className="max-w-2xl mx-auto">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="LevaUp App Interface"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Apresentação com Suspense */}
      <section className="py-16 bg-muted/30">
        <div className="container text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">Uma Transformação Está Chegando</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Paraíso do Tocantins está prestes a vivenciar uma transformação na forma de se mover. Uma plataforma pensada
            para quem busca <strong>justiça</strong>, <strong>segurança</strong> e <strong>eficiência</strong>.
          </p>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Por Que o LevaUp é Diferente?</h2>
            <p className="text-lg text-muted-foreground">Conheça os pilares que fazem do LevaUp a escolha certa</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Precisão</h3>
                <p className="text-muted-foreground">Geolocalização precisa para corridas sem erro</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <DollarSign className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Lucro Justo</h3>
                <p className="text-muted-foreground">Comissões baixas e transparência total</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Headphones className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Suporte Local</h3>
                <p className="text-muted-foreground">Atendimento presencial em Paraíso</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Segurança</h3>
                <p className="text-muted-foreground">Tecnologia avançada para sua proteção</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Lead Capture */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Fique por Dentro</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Seja o primeiro a saber das novidades e ganhe bônus de lançamento! Cadastre seu e-mail e concorra a
              prêmios exclusivos.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <form className="flex gap-2">
              <Input type="email" placeholder="Seu melhor e-mail" className="bg-background text-foreground" />
              <Button type="submit" variant="secondary">
                Cadastrar
              </Button>
            </form>
            <p className="text-sm opacity-75 mt-2">🎁 Ganhe 200 pontos Rewards na primeira corrida!</p>
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">10%</div>
              <p className="text-muted-foreground">Comissão para motoristas</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">200</div>
              <p className="text-muted-foreground">Pontos de bônus inicial</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">24/7</div>
              <p className="text-muted-foreground">Suporte disponível</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-muted/30">
        <div className="container text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">Pronto para Fazer Parte da Revolução?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Junte-se ao LevaUp e experimente uma nova forma de se mover em Paraíso do Tocantins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/passageiro">Sou Passageiro</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/motorista">Sou Motorista</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
