"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SEOBreadcrumb } from "@/components/seo-breadcrumb"
import {
  Wallet,
  CreditCard,
  Banknote,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Sparkles,
  Lock,
  Fingerprint,
  FileCheck,
} from "lucide-react"

export default function FinanceiroPage() {
  return (
    <>
      <SEOBreadcrumb
        items={[
          { name: "Home", url: "/" },
          { name: "LevaUp Finance", url: "/financeiro" },
        ]}
      />
      <div className="flex flex-col">
        {/* SEÇÃO 1: HERO */}
        <section className="relative py-20 md:py-28 bg-levaup-black text-levaup-white overflow-hidden">
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-6 bg-levaup-green/20 text-levaup-green border border-levaup-green/40">
                Transparência Radical
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                A matemática do LevaUp é simples e a favor de quem roda.
              </h1>
              <p className="mt-6 text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto">
                Sem taxas ocultas. Sem bloqueios misteriosos. Sem atrasos nos repasses. Entenda exatamente para onde vai cada centavo da sua corrida. Transparência não é promessa, é código-fonte.
              </p>
            </div>
          </div>
        </section>

        {/* SEÇÃO 2: TABS MOTORISTA / PASSAGEIRO */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container max-w-4xl">
            <Tabs defaultValue="motorista" className="w-full">
              <TabsList className="grid w-full grid-cols-2 h-12 p-1 bg-levaup-white border border-border rounded-lg mb-10">
                <TabsTrigger
                  value="motorista"
                  className="data-[state=active]:bg-levaup-green data-[state=active]:text-levaup-white rounded-md font-semibold"
                >
                  Sou Motorista
                </TabsTrigger>
                <TabsTrigger
                  value="passageiro"
                  className="data-[state=active]:bg-levaup-petrol data-[state=active]:text-levaup-white rounded-md font-semibold"
                >
                  Sou Passageiro
                </TabsTrigger>
              </TabsList>

              {/* ABA MOTORISTA */}
              <TabsContent value="motorista" className="space-y-12 mt-0">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-2">
                    <Badge className="bg-levaup-green/20 text-levaup-green border-0">LevaUp Partner</Badge>
                  </h2>
                </div>

                {/* 1. Regra de Ouro */}
                <Card className="border-2 border-levaup-green/20 overflow-hidden">
                  <CardHeader className="bg-levaup-green/10">
                    <CardTitle className="text-xl flex items-center gap-2">
                      <span className="text-2xl">1.</span> A Regra de Ouro: Taxa Justa de 10%
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Não importa como o passageiro pague, a plataforma fica com apenas 10% para manter os servidores rodando e o suporte humano ativo em Paraíso do Tocantins. Veja como funciona na prática:
                    </p>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="flex gap-3 p-4 rounded-lg bg-levaup-black/5 border border-border">
                        <Banknote className="h-6 w-6 text-levaup-green flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-foreground">Corridas em Dinheiro ou PIX</p>
                          <p className="text-sm text-muted-foreground">
                            O passageiro paga 100% do valor direto para você. O sistema debita apenas os 10% da taxa na sua &quot;Carteira Virtual&quot; no app.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3 p-4 rounded-lg bg-levaup-black/5 border border-border">
                        <CreditCard className="h-6 w-6 text-levaup-petrol flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-foreground">Corridas no Cartão (Via App)</p>
                          <p className="text-sm text-muted-foreground">
                            O passageiro paga pelo app. O sistema credita imediatamente os 90% (seu lucro líquido) na sua Carteira Virtual.
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="text-levaup-green font-medium flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5" />
                      O Resultado: Se o passageiro pagou no cartão, você ganha crédito. Se pagou em dinheiro, você paga uma pequena taxa. Simples assim.
                    </p>
                  </CardContent>
                </Card>

                {/* 2. Carteira Virtual */}
                <Card className="border-2 border-levaup-orange/20 overflow-hidden">
                  <CardHeader className="bg-levaup-orange/10">
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Wallet className="h-6 w-6 text-levaup-orange" />
                      <span className="ml-1">2. A Carteira Virtual e o Limite de Crédito</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Esqueça a dor de cabeça de ter que pagar boletos diários. Sua Carteira Virtual gerencia os débitos e créditos automaticamente.
                    </p>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold text-foreground">Como funciona o Limite</p>
                        <p className="text-sm text-muted-foreground">
                          Todo motorista parceiro tem um limite de crédito (que varia de R$ -30,00 a R$ -150,00, dependendo da sua pontuação no app). Esse limite permite que você faça várias corridas em dinheiro antes de precisar repassar a taxa de 10% para o LevaUp.
                        </p>
                      </div>
                      <div className="flex gap-3 p-3 rounded-lg bg-levaup-green/10 border border-levaup-green/20">
                        <AlertTriangle className="h-5 w-5 text-levaup-orange flex-shrink-0 mt-0.5" />
                        <p className="text-sm">
                          <strong>Avisos Inteligentes:</strong> Não deixamos você ser pego de surpresa. Se o seu saldo negativo chegar a 80% do limite, enviaremos um alerta.
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Como regularizar</p>
                        <p className="text-sm text-muted-foreground">
                          Atingiu o limite e o app pausou? Sem problemas. Faça uma recarga rápida via PIX Copia e Cola no app e a sua conta é liberada no mesmo segundo.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* 3. Repasses */}
                <Card className="border-2 border-levaup-petrol/20 overflow-hidden">
                  <CardHeader className="bg-levaup-petrol/10">
                    <CardTitle className="text-xl flex items-center gap-2">
                      <TrendingUp className="h-6 w-6 text-levaup-petrol" />
                      <span className="ml-1">3. O Dinheiro no Seu Bolso (Repasses)</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Para os valores que você recebe no cartão via app (seu saldo positivo):
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-5 w-5 text-levaup-green flex-shrink-0 mt-0.5" />
                        <span><strong className="text-foreground">Pagamento Semanal:</strong> Toda semana, o sistema faz uma varredura. Se o seu saldo na Carteira Virtual for positivo (acima de R$ 0,00), o repasse do valor total é feito automaticamente para a sua chave PIX cadastrada.</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-5 w-5 text-levaup-green flex-shrink-0 mt-0.5" />
                        <span><strong className="text-foreground">Extrato Claro:</strong> No aplicativo, você vê a diferença exata entre &quot;Dinheiro recebido em mãos&quot; e &quot;Saldo disponível para saque&quot;.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* 4. LevaUp Club Pro */}
                <Card className="border-2 border-levaup-orange/30 overflow-hidden">
                  <CardHeader className="bg-levaup-orange/10">
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Sparkles className="h-6 w-6 text-levaup-orange" />
                      <span className="ml-1">4. LevaUp Club Pro: Jogue para Ganhar</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Nossa tecnologia não serve só para cobrar, serve para bonificar.
                    </p>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="p-4 rounded-lg border border-border bg-card">
                        <p className="font-semibold text-foreground mb-1">Metas e Missões</p>
                        <p className="text-sm text-muted-foreground">
                          Cumpra metas diárias ou semanais e ganhe dinheiro extra direto na carteira.
                        </p>
                      </div>
                      <div className="p-4 rounded-lg border border-border bg-card">
                        <p className="font-semibold text-foreground mb-1">Streaks (Sequências)</p>
                        <p className="text-sm text-muted-foreground">
                          Trabalhou vários dias seguidos? Você ganha Badges (medalhas) no app e desbloqueia prêmios financeiros. Quanto maior a sequência, maior o bônus.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* ABA PASSAGEIRO */}
              <TabsContent value="passageiro" className="space-y-12 mt-0">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-2">
                    <Badge className="bg-levaup-petrol/20 text-levaup-petrol border-0">LevaUp Rider</Badge>
                  </h2>
                </div>

                {/* 1. Respeito gera Rapidez */}
                <Card className="border-2 border-levaup-petrol/20 overflow-hidden">
                  <CardHeader className="bg-levaup-petrol/10">
                    <CardTitle className="text-xl flex items-center gap-2">
                      <span className="text-2xl">1.</span> Respeito gera Rapidez
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground leading-relaxed">
                      Quando você solicita uma corrida no LevaUp, a matemática trabalha a seu favor. Como cobramos apenas 10% de taxa dos nossos parceiros, a sua corrida é altamente lucrativa para eles. É por isso que nossos motoristas não ficam cancelando as viagens. Você paga um preço justo, ele ganha bem, e você chega no horário.
                    </p>
                  </CardContent>
                </Card>

                {/* 2. Sistema de Cobrança e Inadimplência */}
                <Card className="border-2 border-levaup-orange/20 overflow-hidden">
                  <CardHeader className="bg-levaup-orange/10">
                    <CardTitle className="text-xl flex items-center gap-2">
                      <span className="text-2xl">2.</span> Sistema de Cobrança e Inadimplência
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Nós levamos a segurança financeira dos nossos motoristas muito a sério.
                    </p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-5 w-5 text-levaup-green flex-shrink-0 mt-0.5" />
                        <span><strong className="text-foreground">Corridas em Dinheiro/PIX:</strong> Se você escolher pagar em dinheiro ou PIX direto ao motorista, certifique-se de realizar o pagamento completo ao final da viagem.</span>
                      </li>
                      <li className="flex gap-2">
                        <AlertTriangle className="h-5 w-5 text-levaup-orange flex-shrink-0 mt-0.5" />
                        <span><strong className="text-foreground">O &quot;Saldo Devedor&quot; (Valores Pendentes):</strong> Caso o motorista reporte que não recebeu o pagamento, ou se o seu cartão de crédito falhar, o valor da corrida (ou a taxa de cancelamento) é registrado como um Saldo Devedor na sua conta.</span>
                      </li>
                      <li className="flex gap-2">
                        <AlertTriangle className="h-5 w-5 text-levaup-orange flex-shrink-0 mt-0.5" />
                        <span><strong className="text-foreground">Bloqueio de Novas Corridas:</strong> Atenção: Se você possuir qualquer valor pendente, o LevaUp bloqueará a solicitação de novas viagens. Um aviso aparecerá na tela inicial do seu app.</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-5 w-5 text-levaup-green flex-shrink-0 mt-0.5" />
                        <span><strong className="text-foreground">Como resolver:</strong> Basta acessar a área &quot;Pagar Pendências&quot; no app, quitar o débito via Cartão ou PIX, e sua conta será liberada instantaneamente para novas corridas.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* SEÇÃO 3: SEGURANÇA BLINDADA */}
        <section className="py-16 md:py-20 bg-levaup-black text-levaup-white">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Nossa tecnologia contra fraudes.
            </h2>
            <p className="text-center text-zinc-400 text-lg mb-12 max-w-2xl mx-auto">
              Na BrandUp Hub, não deixamos brechas. Implementamos sistemas rígidos para que apenas pessoas de bem utilizem o LevaUp:
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="border-2 border-levaup-petrol/30 bg-levaup-black overflow-hidden">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-levaup-petrol/20 flex items-center justify-center mb-2">
                    <Lock className="h-6 w-6 text-levaup-petrol" />
                  </div>
                  <CardTitle className="text-lg text-levaup-white">Identidade Única</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Uma CNH ou um CPF não pode ser usado em mais de uma conta. Sem contas &quot;fakes&quot; ou descartáveis.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-levaup-petrol/30 bg-levaup-black overflow-hidden">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-levaup-petrol/20 flex items-center justify-center mb-2">
                    <Fingerprint className="h-6 w-6 text-levaup-petrol" />
                  </div>
                  <CardTitle className="text-lg text-levaup-white">Rastreamento de Dispositivos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Nosso sistema reconhece o aparelho celular utilizado. Se um celular for usado para tentar dar calotes (contas com saldo devedor), ele é marcado e impedido de criar novos cadastros.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-levaup-petrol/30 bg-levaup-black overflow-hidden">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-levaup-petrol/20 flex items-center justify-center mb-2">
                    <FileCheck className="h-6 w-6 text-levaup-petrol" />
                  </div>
                  <CardTitle className="text-lg text-levaup-white">Reconciliação Automática</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Nossos servidores verificam todos os saldos e transações todas as madrugadas, garantindo que nenhum centavo se perca por erros de sistema.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
