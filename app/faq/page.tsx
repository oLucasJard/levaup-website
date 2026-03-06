"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { SEOBreadcrumb } from "@/components/seo-breadcrumb"
import { Search, Users, Car, Shield, MessageCircle } from "lucide-react"

const passageirosFAQ = [
  {
    q: "Por que os motoristas do LevaUp aceitam as corridas mais rápido?",
    a: "É matemática simples. Em outros apps, o motorista perde até 40% do valor para a plataforma, o que faz ele cancelar corridas que \"não compensam\". No LevaUp, cobramos apenas 10% de taxa. Como a corrida é muito mais lucrativa para eles, eles aceitam na hora. Você ganha tempo, e eles ganham dignidade.",
  },
  {
    q: "Quais são as formas de pagamento aceitas?",
    a: "Para garantir o repasse instantâneo e sem taxas ocultas para os nossos parceiros, aceitamos PIX direto no app e Dinheiro. Rápido, seguro e direto.",
  },
  {
    q: "Esqueci um objeto no carro. O que eu faço?",
    a: "Não se desespere. Como somos uma plataforma local, resolver isso é rápido. Acesse o menu \"Minhas Viagens\" no app, selecione a corrida em questão e clique em \"Reportar Item Perdido\". Você será conectado diretamente ao motorista ou à nossa Central de Apoio em Paraíso para recuperarmos seu pertence.",
  },
  {
    q: "Como sei que estou entrando no carro certo?",
    a: "Nossa tecnologia foi desenhada para blindar você. Antes do carro chegar, o app mostra a foto do motorista, a placa, o modelo e a cor do veículo. Todos os nossos parceiros passam por uma checagem rigorosa de antecedentes criminais antes de entrarem na plataforma.",
  },
  {
    q: "Posso pedir um LevaUp para outra pessoa?",
    a: "Sim. Ao solicitar a corrida, basta alterar o endereço de partida para o local onde a pessoa está. Recomendamos que você compartilhe o link da corrida (rastreamento em tempo real) via WhatsApp com ela, assim ambos acompanham o trajeto com segurança.",
  },
]

const motoristasFAQ = [
  {
    q: "A taxa de 10% é real? Tem pegadinha?",
    a: "É 100% real e sem letras miúdas. Se a corrida deu R$ 20,00, R$ 18,00 são seus. Os R$ 2,00 da plataforma são usados exclusivamente para pagar a infraestrutura de servidores (mapas, nuvem) e nossa equipe de suporte local. O nosso painel de ganhos no app mostra o cálculo exato a cada viagem. Transparência total.",
  },
  {
    q: "Como e quando eu recebo o dinheiro das corridas?",
    a: "No LevaUp, o fluxo de caixa é seu. Como os pagamentos são feitos via PIX ou Dinheiro pelo passageiro, o valor cai na sua mão na hora. O acerto dos 10% da plataforma é feito de forma inteligente através de uma \"Carteira Virtual\" no app, onde você faz recargas pré-pagas via PIX para rodar.",
  },
  {
    q: "O que é o LevaUp Club Pro?",
    a: "É o nosso sistema de gamificação e reconhecimento. Ao rodar com o LevaUp, você recebe missões (exemplo: \"Complete 15 corridas hoje\"). Ao bater a meta, você ganha pontos e Vouchers que podem zerar a sua taxa em dias de pico. É a nossa tecnologia premiando o seu esforço.",
  },
  {
    q: "Quais os requisitos para ser um parceiro LevaUp?",
    a: "Buscamos a elite dos motoristas. Você precisa ter: CNH Definitiva com a observação \"EAR\" (Exerce Atividade Remunerada). Documento do veículo em dia (CRLV). Carro com 4 portas e ar-condicionado em perfeito funcionamento. Aprovação na nossa checagem de antecedentes e documentação.",
  },
  {
    q: "Fui bloqueado em outro app sem motivo. Serei bloqueado no LevaUp?",
    a: "O LevaUp não usa robôs para banir motoristas sem defesa. Temos regras estritas contra assédio, direção perigosa ou fraude, que geram banimento imediato. No entanto, em casos de divergências normais, nossa equipe local analisa o contexto. Aqui, você tem direito de resposta.",
  },
]

const tecnologiaFAQ = [
  {
    q: "O aplicativo LevaUp é seguro e não vai travar meu celular?",
    a: "O LevaUp foi codificado pela BrandUp Hub, uma Venture Builder focada em alta performance. Usamos linguagens de programação modernas (como React Native e Node.js) para garantir que o aplicativo seja leve, não drene a bateria do motorista e calcule rotas em milissegundos sem travar.",
  },
  {
    q: "O que é o Botão de Emergência?",
    a: "Tanto o app do passageiro quanto o do motorista possuem um ícone de \"Escudo\". Ao ser acionado em uma situação de risco, ele envia um alerta silencioso com a sua localização GPS exata em tempo real para a nossa Central de Monitoramento e para seus contatos de confiança cadastrados.",
  },
]

export default function FAQPage() {
  return (
    <>
      <SEOBreadcrumb items={[
        { name: "Home", url: "/" },
        { name: "FAQ", url: "/faq" },
      ]} />
      <div className="flex flex-col">
        {/* SEÇÃO 1: HERO - A RECEPÇÃO (mesmo estilo do header: fundo branco) */}
        <section className="py-16 md:py-20 bg-levaup-white border-b border-border">
          <div className="container max-w-3xl">
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                Como podemos acelerar sua solução hoje?
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Encontre respostas rápidas sobre corridas, pagamentos, segurança e nossa tecnologia. Suporte feito por humanos, direto de Paraíso do Tocantins.
              </p>
              <div className="max-w-xl mx-auto pt-4">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Ex: Como funciona a taxa de 10%?"
                    className="pl-12 h-14 text-base rounded-xl bg-background border-2 shadow-sm"
                    readOnly
                    aria-label="Buscar no FAQ"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 2: NAVEGAÇÃO POR ABAS */}
        <section className="py-16 md:py-20">
          <div className="container max-w-3xl">
            <Tabs defaultValue="passageiros" className="w-full">
              <TabsList className="grid w-full grid-cols-3 h-12 md:h-14 p-1 bg-muted rounded-xl mb-10">
                <TabsTrigger value="passageiros" className="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm gap-2 text-sm md:text-base">
                  <Users className="h-4 w-4 hidden sm:inline" />
                  Para Passageiros
                </TabsTrigger>
                <TabsTrigger value="motoristas" className="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm gap-2 text-sm md:text-base">
                  <Car className="h-4 w-4 hidden sm:inline" />
                  Para Motoristas
                </TabsTrigger>
                <TabsTrigger value="tecnologia" className="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm gap-2 text-sm md:text-base">
                  <Shield className="h-4 w-4 hidden sm:inline" />
                  Tecnologia & Segurança
                </TabsTrigger>
              </TabsList>

              <TabsContent value="passageiros" className="mt-0">
                <p className="text-sm text-muted-foreground mb-6">Quem chama</p>
                <Accordion type="single" collapsible className="space-y-2">
                  {passageirosFAQ.map((item, i) => (
                    <AccordionItem key={i} value={`p-${i}`} className="border rounded-lg px-4 bg-card">
                      <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>

              <TabsContent value="motoristas" className="mt-0">
                <p className="text-sm text-muted-foreground mb-6">Quem dirige</p>
                <Accordion type="single" collapsible className="space-y-2">
                  {motoristasFAQ.map((item, i) => (
                    <AccordionItem key={i} value={`m-${i}`} className="border rounded-lg px-4 bg-card">
                      <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>

              <TabsContent value="tecnologia" className="mt-0">
                <p className="text-sm text-muted-foreground mb-6">Geral</p>
                <Accordion type="single" collapsible className="space-y-2">
                  {tecnologiaFAQ.map((item, i) => (
                    <AccordionItem key={i} value={`t-${i}`} className="border rounded-lg px-4 bg-card">
                      <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* SEÇÃO 3: CTA FINAL - O SUPORTE */}
        <section className="py-16 md:py-20 bg-levaup-orange text-levaup-white">
          <div className="container max-w-2xl text-center">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="h-8 w-8" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Não encontrou o que procurava?
            </h2>
            <p className="text-lg opacity-95 mb-8">
              Nossa inteligência é artificial, mas nosso suporte é humano e local. Fale diretamente com a equipe da BrandUp Hub em Paraíso do Tocantins.
            </p>
            <Button
              asChild
              size="lg"
              className="h-14 px-8 bg-levaup-white text-levaup-orange hover:bg-zinc-100 font-semibold text-base"
            >
              <a
                href="https://wa.me/5563976011888"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chamar no WhatsApp
              </a>
            </Button>
            <p className="mt-6 text-sm opacity-90">
              Horário de Atendimento: Segunda a Sábado, das 08h às 22h.
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
