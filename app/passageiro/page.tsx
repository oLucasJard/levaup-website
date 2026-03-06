"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { SEOBreadcrumb } from "@/components/seo-breadcrumb"
import {
  MapPin,
  Shield,
  AlertTriangle,
  CheckCircle,
  X,
  Smartphone,
} from "lucide-react"

export default function PassageiroPage() {
  return (
    <>
      <SEOBreadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Para Passageiros", url: "/passageiro" },
      ]} />
      <div className="flex flex-col">
        {/* SEÇÃO 1: HERO - A PROMESSA DE CHEGADA */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-levaup-black">
          <div className="container relative z-10 py-20">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-6 bg-levaup-green/20 text-levaup-green border border-levaup-green/40">
                LevaUp para Passageiros
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-levaup-white leading-tight">
                Seu destino, sem a tela de
                <span className="text-levaup-green block mt-2">
                  &quot;Motorista Cancelou&quot;.
                </span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-zinc-400 leading-relaxed">
                Cansado de esperar 20 minutos por um carro que nunca chega? No LevaUp, nossos motoristas recebem a maior parte do valor da corrida. Quando o sistema é justo para eles, a viagem é rápida para você.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto h-14 px-8 bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-600"
                  disabled
                >
                  <Smartphone className="h-5 w-5 mr-2" />
                  Baixar na App Store
                  <span className="block text-xs font-normal opacity-80 mt-0.5">Em breve</span>
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto h-14 px-8 bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-600"
                  disabled
                >
                  <Smartphone className="h-5 w-5 mr-2" />
                  Disponível no Google Play
                  <span className="block text-xs font-normal opacity-80 mt-0.5">Em breve</span>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 2: A DOR VS. A SOLUÇÃO */}
        <section className="py-16 md:py-24 bg-muted/40">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              O fim do estresse na calçada.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-2 border-red-200 dark:border-red-800 bg-red-50/30 dark:bg-red-950/20">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <X className="h-5 w-5 text-red-600" />
                    <CardTitle className="text-red-700 dark:text-red-400">O Problema (Eles)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-muted-foreground leading-relaxed">
                  &quot;Motorista a caminho... Motorista finalizou a corrida... Motorista cancelou.&quot; Você já perdeu compromissos por causa disso. Sabe por que acontece? Porque o app gigante tentou ficar com 40% do valor, e a corrida parou de valer a pena para quem dirige.
                </CardContent>
              </Card>
              <Card className="border-2 border-green-200 dark:border-green-800 bg-green-50/30 dark:bg-green-950/20 ring-2 ring-green-200 dark:ring-green-800">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <CardTitle className="text-green-700 dark:text-green-400">A Solução (LevaUp)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-muted-foreground leading-relaxed">
                  Nós resolvemos o problema na raiz. Cobramos apenas 10% de taxa da plataforma. Isso significa que toda corrida do LevaUp é uma corrida lucrativa para o motorista. Resultado? Eles aceitam seu pedido em segundos.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* SEÇÃO 3: TECNOLOGIA PARA SUA SEGURANÇA */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Segurança não é opcional. É código-fonte.
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Recursos de segurança arquitetados no aplicativo, não como afterthought.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="border-2 hover:border-levaup-orange/30 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-levaup-orange/10 flex items-center justify-center mb-2">
                    <Shield className="h-6 w-6 text-levaup-orange" />
                  </div>
                  <CardTitle className="text-lg">Motoristas Verificados Localmente</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground leading-relaxed text-sm">
                  Não somos um robô aprovando cadastros no automático. Nossa base é em Paraíso. Conhecemos nossos parceiros, verificamos antecedentes e mantemos um padrão de excelência.
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-levaup-orange/30 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-levaup-orange/10 flex items-center justify-center mb-2">
                    <MapPin className="h-6 w-6 text-levaup-orange" />
                  </div>
                  <CardTitle className="text-lg">Rastreamento em Tempo Real</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground leading-relaxed text-sm">
                  Compartilhe sua rota via WhatsApp com um clique. Nossos servidores mantêm a localização exata do veículo atualizada a cada milissegundo.
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-levaup-orange/30 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-levaup-orange/10 flex items-center justify-center mb-2">
                    <AlertTriangle className="h-6 w-6 text-levaup-orange" />
                  </div>
                  <CardTitle className="text-lg">Botão de Pânico Inteligente</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground leading-relaxed text-sm">
                  Conectado diretamente à nossa central de suporte local. Se algo sair do planejado, nós agimos na hora, não 3 dias depois por e-mail.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* SEÇÃO 4: PREÇO JUSTO E TRANSPARENTE */}
        <section className="py-16 md:py-24 bg-muted/40">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Você paga o justo. A cidade enriquece.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto mb-10">
              Usar o LevaUp é um ato de inteligência econômica. O preço que você paga na tela é o preço final. Sem tarifas dinâmicas abusivas que triplicam o valor quando chove. Além disso, o dinheiro da sua corrida fica em Paraíso do Tocantins, circulando no comércio local, em vez de ser enviado para a Califórnia.
            </p>
          </div>
        </section>

        {/* SEÇÃO 5: CTA FINAL */}
        <section className="py-16 md:py-24 bg-levaup-orange text-levaup-white">
          <div className="container max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              A cidade está se movendo de um jeito novo. Você vem?
            </h2>
            <p className="text-lg opacity-95 mb-10">
              Baixe o aplicativo, crie sua conta em 1 minuto e chame seu primeiro LevaUp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button
                size="lg"
                variant="secondary"
                className="h-14 px-8 bg-levaup-white text-levaup-orange hover:bg-zinc-100"
                disabled
              >
                Baixar na App Store
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 border-2 border-white text-white hover:bg-white/10"
                disabled
              >
                Disponível no Google Play
              </Button>
            </div>
            <p className="text-sm opacity-80 mb-8">App em breve. Cadastre-se para ser avisado no lançamento.</p>
            <form className="max-w-md mx-auto flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="Seu e-mail"
                className="bg-white text-foreground border-0 h-12 flex-1"
                required
              />
              <Button type="submit" variant="secondary" className="bg-levaup-white text-levaup-orange hover:bg-zinc-100 h-12 px-6">
                Avise-me
              </Button>
            </form>
          </div>
        </section>
      </div>
    </>
  )
}
