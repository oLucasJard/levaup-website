"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { SEOBreadcrumb } from "@/components/seo-breadcrumb"
import {
  Trophy,
  Check,
  X,
  Target,
  Route,
  Shield,
  Gift,
  Star,
} from "lucide-react"

export default function MotoristaPage() {
  return (
    <>
      <SEOBreadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Para Motoristas", url: "/motorista" },
      ]} />
      <div className="flex flex-col">
        {/* SEÇÃO 1: HERO - A DECLARAÇÃO DE INDEPENDÊNCIA */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-levaup-black">
          <div className="container relative z-10 py-20">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-6 bg-levaup-green/20 text-levaup-green border border-levaup-green/40 hover:bg-levaup-green/30">
                LevaUp Partner Program
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-levaup-white leading-tight">
                A corrida é sua. O suor é seu.{" "}
                <span className="text-levaup-green">
                  O dinheiro também deveria ser.
                </span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-zinc-400 leading-relaxed">
                Esqueça as taxas ocultas de 30% a 40% que corroem o seu trabalho. O LevaUp é a tecnologia de mobilidade de Paraíso do Tocantins construída para colocar o motorista no topo da cadeia. Taxa fixa, suporte olho no olho e engenharia de ponta.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-lg px-8 h-14 bg-levaup-green hover:bg-levaup-green/90">
                  <Link href="#cadastro">Solicitar Cadastro de Parceiro</Link>
                </Button>
              </div>
              <p className="mt-4 text-sm text-zinc-500">Análise de perfil em até 24h.</p>
            </div>
          </div>
        </section>

        {/* SEÇÃO 2: SCARCITY - O CLUBE DOS FUNDADORES */}
        <section className="py-16 md:py-20 bg-levaup-petrol text-levaup-white border-y border-levaup-orange/30">
          <div className="container max-w-4xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                O Programa &quot;LevaUp Founders&quot; <span className="text-levaup-orange">(Restam poucas vagas)</span>
              </h2>
              <p className="text-lg text-levaup-white/90">
                Apenas os 20 primeiros motoristas aprovados farão parte da história de fundação da mobilidade do nosso estado.
              </p>
            </div>
            <ul className="space-y-4 mb-10 max-w-2xl mx-auto">
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-levaup-green flex-shrink-0 mt-0.5" />
                <span><strong className="text-levaup-orange">Comissão Travada em 8%:</strong> Nos 2 primeiros meses, sua margem de lucro é quase total.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-levaup-green flex-shrink-0 mt-0.5" />
                <span><strong className="text-levaup-orange">Kit Operacional Start:</strong> Material oficial exclusivo para fundadores.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-levaup-green flex-shrink-0 mt-0.5" />
                <span><strong className="text-levaup-orange">Linha Direta:</strong> Suporte prioritário direto com os engenheiros da BrandUp Hub.</span>
              </li>
            </ul>
            <div className="text-center">
              <Button asChild size="lg" variant="outline" className="border-2 border-levaup-orange text-levaup-white hover:bg-levaup-orange/20 text-lg px-8">
                <Link href="#cadastro">Quero ser um Fundador LevaUp</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* SEÇÃO 3: NÓS VS. ELES */}
        <section className="py-16 md:py-20 bg-muted/40">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              O sistema atual quebrou. Nós o reescrevemos.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="border-2 border-red-200 bg-red-50/50 dark:bg-red-950/20 dark:border-red-800">
                <CardHeader>
                  <CardTitle className="text-red-700 dark:text-red-400 flex items-center gap-2">
                    <X className="h-5 w-5" />
                    O Padrão do Mercado (O Problema)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground">
                  <p className="flex gap-2"><X className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" /> <span><strong className="text-foreground">Taxas Cegas:</strong> Comissões abusivas que mudam sem explicação.</span></p>
                  <p className="flex gap-2"><X className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" /> <span><strong className="text-foreground">Suporte Robótico:</strong> Quando você precisa, fala com um chat automático em outro país.</span></p>
                  <p className="flex gap-2"><X className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" /> <span><strong className="text-foreground">Bloqueios Injustos:</strong> Banimentos sem direito de defesa.</span></p>
                </CardContent>
              </Card>
              <Card className="border-2 border-levaup-green/40 bg-levaup-green/10 dark:bg-levaup-green/10 dark:border-levaup-green/40 ring-2 ring-levaup-green/30">
                <CardHeader>
                  <CardTitle className="text-levaup-green flex items-center gap-2">
                    <Check className="h-5 w-5" />
                    O Padrão LevaUp (A Engenharia)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground">
                  <p className="flex gap-2"><Check className="h-4 w-4 text-levaup-green flex-shrink-0 mt-0.5" /> <span><strong className="text-foreground">Taxa Transparente de 10%:</strong> A matemática é simples. Você fica com a maior fatia, sempre.</span></p>
                  <p className="flex gap-2"><Check className="h-4 w-4 text-levaup-green flex-shrink-0 mt-0.5" /> <span><strong className="text-foreground">Base Operacional Local:</strong> Ponto de apoio em Paraíso. Você fala com humanos da sua cidade.</span></p>
                  <p className="flex gap-2"><Check className="h-4 w-4 text-levaup-green flex-shrink-0 mt-0.5" /> <span><strong className="text-foreground">Transparência de Código:</strong> Relatórios exatos do seu repasse no próprio app.</span></p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* SEÇÃO 4: A MATEMÁTICA NÃO MENTE */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">A diferença real no final do mês.</h2>
            <p className="text-center text-muted-foreground mb-10">
              Imagine que você gerou R$ 4.000 em corridas. Veja para onde vai o dinheiro do seu trabalho:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <Card className="p-6 border-red-200 bg-red-50/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-red-700 text-lg">Outros Apps (Média de 25% a 35%)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-1 text-sm">
                  <p><span className="text-muted-foreground">Taxa Retida:</span> ~ R$ 1.000,00</p>
                  <p className="font-semibold text-red-700 mt-2">Seu Bolso: R$ 3.000,00</p>
                  <p className="text-muted-foreground italic">E você ainda paga a gasolina.</p>
                </CardContent>
              </Card>
              <Card className="p-6 border-levaup-green/40 bg-levaup-green/10 ring-2 ring-levaup-green/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-levaup-green text-lg">LevaUp Partner (Taxa Justa 10%)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-1 text-sm">
                  <p><span className="text-muted-foreground">Taxa da Plataforma:</span> R$ 400,00</p>
                  <p className="font-semibold text-levaup-green mt-2 text-lg">Seu Bolso: R$ 3.600,00</p>
                </CardContent>
              </Card>
            </div>
            <div className="text-center p-6 rounded-xl bg-levaup-orange/10 border-2 border-levaup-orange/20">
              <p className="text-lg font-semibold text-foreground">
                Até R$ 680,00 a mais por mês. É a parcela do seu seguro. É a revisão do seu carro. É comida na mesa.
              </p>
            </div>
          </div>
        </section>

        {/* SEÇÃO 5: TECNOLOGIA INVISÍVEL (FEATURES) */}
        <section className="py-16 md:py-20 bg-muted/40">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Tecnologia de Startups. Focada no seu dia a dia.</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Engenharia de ponta da BrandUp Hub para você rodar com segurança e eficiência.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="p-6 border-2 hover:border-levaup-orange transition-colors">
                <div className="w-12 h-12 rounded-xl bg-levaup-orange/10 flex items-center justify-center mb-4">
                  <Trophy className="h-6 w-6 text-levaup-orange" />
                </div>
                <CardTitle className="text-lg mb-2">LevaUp Club Pro (Gamificação)</CardTitle>
                <CardContent className="p-0 text-muted-foreground text-sm leading-relaxed">
                  Não seja apenas um motorista, seja um player. Complete missões semanais e destrave vouchers que zeram suas taxas em dias de pico.
                </CardContent>
              </Card>
              <Card className="p-6 border-2 hover:border-levaup-orange transition-colors">
                <div className="w-12 h-12 rounded-xl bg-levaup-orange/10 flex items-center justify-center mb-4">
                  <Route className="h-6 w-6 text-levaup-orange" />
                </div>
                <CardTitle className="text-lg mb-2">Engenharia de Roteamento</CardTitle>
                <CardContent className="p-0 text-muted-foreground text-sm leading-relaxed">
                  Nosso algoritmo inteligente (desenvolvido pela BrandUp Hub) minimiza seu tempo rodando vazio. Otimizamos a distância entre você e o próximo passageiro.
                </CardContent>
              </Card>
              <Card className="p-6 border-2 hover:border-levaup-orange transition-colors">
                <div className="w-12 h-12 rounded-xl bg-levaup-orange/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-levaup-orange" />
                </div>
                <CardTitle className="text-lg mb-2">Botão de Pânico & Validação</CardTitle>
                <CardContent className="p-0 text-muted-foreground text-sm leading-relaxed">
                  Segurança arquitetada no código. Passageiros validados e rastreamento em tempo real direto com a nossa central.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* SEÇÃO 6: DEPOIMENTOS DE PARCEIROS */}
        <section className="py-16 md:py-20">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">O que dizem nossos parceiros</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-levaup-orange text-levaup-orange" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic leading-relaxed">
                    &quot;Não é só o dinheiro a mais no final do mês. É saber que se eu tiver um problema com passageiro às 22h, eu ligo e tem alguém de Paraíso para me ajudar.&quot;
                  </p>
                  <p className="mt-4 font-medium">Carlos, Motorista Parceiro.</p>
                </CardContent>
              </Card>
              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-levaup-orange text-levaup-orange" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic leading-relaxed">
                    &quot;O sistema de missões do Club Pro muda o jogo. Ao invés de ficar desmotivado, eu bato a meta diária e ganho desconto na taxa. A tecnologia deles é rápida e não trava meu celular.&quot;
                  </p>
                  <p className="mt-4 font-medium">Roberto S.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* SEÇÃO 7: CTA FINAL */}
        <section id="cadastro" className="py-16 md:py-20 bg-levaup-orange text-levaup-white">
          <div className="container max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">O banco do motorista está te esperando.</h2>
            <p className="text-lg opacity-95 mb-10">
              Pare de financiar escritórios no Vale do Silício com o seu suor em Paraíso do Tocantins. Venha dirigir com quem valoriza o seu corre.
            </p>
            <form className="space-y-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                className="bg-white text-foreground border-0 h-12"
                required
              />
              <Input
                type="text"
                placeholder="Nome completo"
                className="bg-white text-foreground border-0 h-12"
                required
              />
              <Button type="submit" size="lg" className="w-full h-14 bg-levaup-white text-levaup-orange hover:bg-zinc-100 text-lg font-semibold">
                Enviar Documentação Agora
              </Button>
            </form>
            <p className="mt-4 text-sm opacity-80">Análise de perfil em até 24h. Dados seguros e confidenciais.</p>
            <div className="mt-8 pt-8 border-t border-white/20 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
              <Link href="/motorista/seguranca" className="opacity-90 hover:opacity-100 underline underline-offset-2">Central de Segurança</Link>
              <span className="opacity-50">•</span>
              <Link href="/motorista/transparencia" className="opacity-90 hover:opacity-100 underline underline-offset-2">Manual de Ganhos e Taxas</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
