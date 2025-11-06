"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Image from "next/image"
import { SEOBreadcrumb } from "@/components/seo-breadcrumb"
import { DollarSign, Trophy, Headphones, BarChart3, Gift, Star, TrendingUp, Shield, AlertCircle } from "lucide-react"

export default function MotoristaPage() {
  return (
    <>
      <SEOBreadcrumb items={[
        { name: 'Home', url: '/' },
        { name: 'Para Motoristas', url: '/motorista' }
      ]} />
      <div className="flex flex-col">
        {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit bg-green-100 text-green-800">
                Para Motoristas
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                LevaUp Motorista:
                <span className="text-green-600 block">Pise no Acelerador de Lucros em Paraíso!</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Chega de taxas abusivas e falta de suporte! Com apenas 10% de comissão, suporte local e gamificação que
                premia, você finalmente terá o que merece.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 bg-green-600 hover:bg-green-700">
                  Quero Ser Motorista LevaUp!
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                  Saiba Mais
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=400"
                alt="Motorista LevaUp"
                width={400}
                height={500}
                className="mx-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programa Motoristas Fundadores */}
      <section className="py-16 bg-gradient-to-r from-yellow-50 to-orange-50 border-y-2 border-yellow-200">
        <div className="container">
          <Alert className="max-w-4xl mx-auto border-yellow-300 bg-yellow-50">
            <AlertCircle className="h-4 w-4 text-yellow-600" />
            <AlertDescription className="text-yellow-800">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">🚀 PROGRAMA MOTORISTAS FUNDADORES - VAGAS LIMITADAS!</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold">Benefícios Exclusivos:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Apenas 20 vagas disponíveis</li>
                      <li>Comissão de apenas 8% nos primeiros 2 meses</li>
                      <li>Kit Boas-Vindas exclusivo</li>
                      <li>Sorteio mensal entre fundadores</li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700">
                      Quero Ser Fundador!
                    </Button>
                  </div>
                </div>
              </div>
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Problemas que Resolvemos */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Acabaram os Problemas de Sempre</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sabemos das suas dores e criamos soluções reais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center p-6 border-red-200">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                  <DollarSign className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-red-600">Taxas Abusivas</h3>
                <p className="text-muted-foreground">Comissões de 25% ou mais que destroem seus lucros</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-red-200">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                  <Headphones className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-red-600">Falta de Suporte</h3>
                <p className="text-muted-foreground">Atendimento ruim e sem solução para seus problemas</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-red-200">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                  <BarChart3 className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-red-600">Falta de Transparência</h3>
                <p className="text-muted-foreground">Não saber quanto você realmente ganha</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefícios do LevaUp */}
      <section className="py-16">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Como o LevaUp Muda Sua Vida</h2>
            <p className="text-lg text-muted-foreground">Benefícios reais que fazem a diferença no seu bolso</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow border-green-200">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-green-700">Comissão de APENAS 10%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Enquanto outros cobram 25% ou mais, você fica com 90% do valor da corrida. Mais dinheiro no seu bolso!
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-purple-200">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Trophy className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-purple-700">LevaUp Club Pro</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Gamificação que premia! Complete missões, suba de nível e ganhe vouchers de crédito de taxas.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-blue-200">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Headphones className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-blue-700">Suporte Local</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ponto de apoio fixo em Paraíso + canais oficiais. Suporte de verdade quando você precisar.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-orange-200">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-orange-700">Transparência Total</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Veja exatamente quanto você ganha, sem pegadinhas. Relatórios detalhados dos seus ganhos.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-indigo-200">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle className="text-indigo-700">Mais Corridas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sistema inteligente que otimiza suas corridas. Menos tempo parado, mais dinheiro ganhando.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-red-200">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-red-700">Segurança Garantida</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Recursos de segurança avançados para proteger você e seus passageiros durante as corridas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* LevaUp Club Pro */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="w-fit bg-purple-100 text-purple-800">Exclusivo LevaUp</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">
                LevaUp Club Pro
                <span className="text-purple-600 block">Gamificação que Premia</span>
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Trophy className="h-6 w-6 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Missões Diárias</h3>
                    <p className="text-muted-foreground">Complete desafios e ganhe pontos extras</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="h-6 w-6 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Sistema de Níveis</h3>
                    <p className="text-muted-foreground">Suba de nível e desbloqueie benefícios exclusivos</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Gift className="h-6 w-6 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Vouchers de Crédito</h3>
                    <p className="text-muted-foreground">Ganhe créditos para reduzir ainda mais suas taxas</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="LevaUp Club Pro"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Comparação de Ganhos */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Veja a Diferença no Seu Bolso</h2>
            <p className="text-lg text-muted-foreground">Comparação real de ganhos mensais</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 text-center border-red-200">
              <CardHeader>
                <CardTitle className="text-red-600">Outros Apps</CardTitle>
                <p className="text-2xl font-bold text-red-600">25% de taxa</p>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">Corridas: R$ 4.000</p>
                <p className="text-sm text-muted-foreground">Taxa: R$ 1.000</p>
                <p className="text-xl font-bold text-red-600">Você recebe: R$ 3.000</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center border-green-200 ring-2 ring-green-200">
              <CardHeader>
                <CardTitle className="text-green-600">LevaUp</CardTitle>
                <p className="text-2xl font-bold text-green-600">10% de taxa</p>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">Corridas: R$ 4.000</p>
                <p className="text-sm text-muted-foreground">Taxa: R$ 400</p>
                <p className="text-xl font-bold text-green-600">Você recebe: R$ 3.600</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center border-purple-200">
              <CardHeader>
                <CardTitle className="text-purple-600">Fundadores</CardTitle>
                <p className="text-2xl font-bold text-purple-600">8% de taxa</p>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">Corridas: R$ 4.000</p>
                <p className="text-sm text-muted-foreground">Taxa: R$ 320</p>
                <p className="text-xl font-bold text-purple-600">Você recebe: R$ 3.680</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-lg font-semibold text-green-600">💰 Diferença mensal: até R$ 680 a mais no seu bolso!</p>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Motoristas que Já Mudaram de Vida</h2>
            <p className="text-lg text-muted-foreground">Histórias reais de sucesso</p>
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
                  "Com o LevaUp, meus ganhos aumentaram 30%! O suporte local faz toda a diferença."
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold">C</span>
                  </div>
                  <span className="text-sm font-medium">Carlos Motorista</span>
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
                  "Finalmente uma empresa que valoriza o motorista. As missões do Club Pro são incríveis!"
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold">R</span>
                  </div>
                  <span className="text-sm font-medium">Roberto Silva</span>
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
                  "Transparência total nos ganhos e suporte que funciona. Recomendo para todos os colegas!"
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold">A</span>
                  </div>
                  <span className="text-sm font-medium">André Costa</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">Pronto para Acelerar Seus Lucros?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Junte-se aos motoristas que já descobriram uma forma melhor de ganhar dinheiro. Cadastre-se agora e seja um
            dos primeiros!
          </p>

          <div className="max-w-md mx-auto space-y-4">
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input type="email" placeholder="Seu melhor e-mail" className="bg-white text-black" required />
              <Button type="submit" variant="secondary">
                Cadastrar
              </Button>
            </form>
            <p className="text-sm opacity-75">🚀 Vagas limitadas para o Programa Motoristas Fundadores</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button variant="secondary" size="lg">
              Quero Ser Motorista LevaUp
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-white border-white hover:bg-white hover:text-green-600 bg-transparent"
            >
              Falar com Suporte
            </Button>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}
