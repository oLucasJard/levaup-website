import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"
import Link from "next/link"
import { SEOBreadcrumb } from "@/components/seo-breadcrumb"
import { Car, Shield, MapPin } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Sobre o LevaUp - Revolução Local & Alta Engenharia | Mobilidade Paraíso/TO",
  description: "O LevaUp não é um app genérico: é tecnologia proprietária da BrandUp Hub, feita no Tocantins. Manifesto contra taxas abusivas e a favor da mobilidade justa. Conheça nossa história.",
  keywords: [
    "sobre LevaUp",
    "BrandUp Hub",
    "LevaUp Paraíso Tocantins",
    "mobilidade justa",
    "app transporte Tocantins",
    "tecnologia local",
    "Venture Builder Tocantins",
    "revolução mobilidade"
  ],
  openGraph: {
    title: "Sobre o LevaUp - A mobilidade da nossa cidade pertence a nós",
    description: "Engenharia de software de ponta, desenvolvida no Tocantins. Contra taxas abusivas, a favor de quem dirige e de quem precisa chegar.",
    url: "https://levaup.com.br/sobre",
    type: "website",
  },
  alternates: {
    canonical: "https://levaup.com.br/sobre",
  },
}

export default function SobrePage() {
  return (
    <>
      <SEOBreadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Sobre o LevaUp", url: "/sobre" },
      ]} />
      <div className="flex flex-col">
        {/* SEÇÃO 1: HERO - O IMPACTO INICIAL */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-levaup-black">
          <div className="container relative z-10 py-20 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-levaup-white max-w-4xl mx-auto leading-tight">
              A mobilidade da nossa cidade não pertence ao Vale do Silício.{" "}
              <span className="text-levaup-orange">
                Pertence a nós.
              </span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              O LevaUp é mais do que um aplicativo. É um manifesto contra taxas abusivas e tecnologia falha. Engenharia de software de ponta, desenvolvida no Tocantins, para conectar quem dirige a quem precisa chegar.
            </p>
          </div>
        </section>

        {/* SEÇÃO 2: O MANIFESTO - O SISTEMA ESTÁ QUEBRADO */}
        <section className="py-20 md:py-24 bg-levaup-black text-levaup-white">
          <div className="container max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-levaup-white mb-10">
              As gigantes esqueceram do interior. Nós não.
            </h2>
            <div className="space-y-6 text-zinc-300 leading-relaxed text-lg">
              <p>
                O modelo atual de mobilidade urbana falhou com as nossas cidades. Aplicativos globais cobram taxas extorsivas que sufocam os motoristas parceiros (chegando a 40% do valor da corrida). O resultado? Corridas canceladas, passageiros frustrados na calçada e motoristas trabalhando no limite da exaustão.
              </p>
              <p>
                Para uma empresa do outro lado do mundo, Paraíso do Tocantins é apenas um ponto no mapa. Para nós, é a nossa casa.
              </p>
              <p>
                Decidimos que era hora de parar de reclamar das ferramentas que nos impuseram e construir a nossa própria. Uma plataforma onde a matemática fecha para quem dirige e a tecnologia não trava para quem chama.
              </p>
            </div>
          </div>
        </section>

        {/* SEÇÃO 3: A ORIGEM - O DNA BRANDUP HUB */}
        <section className="py-20 md:py-24 bg-background">
          <div className="container max-w-3xl text-center">
            <div className="flex flex-col items-center gap-4 mb-12">
              <Image
                src="/logo-preto.png"
                alt="LevaUp"
                width={160}
                height={53}
                className="h-12 w-auto"
              />
              <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
                Powered by BrandUp Hub — Venture Builder
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              Nascido da Engenharia. Feito para a Rua.
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg text-left">
              <p>
                O LevaUp não é um aplicativo genérico comprado pronto (&quot;white-label&quot;) e rebatizado. Ele é um produto proprietário, arquitetado e codificado do zero pela BrandUp Hub, uma Venture Builder de tecnologia sediada no Tocantins.
              </p>
              <p>
                Toda a obsessão por design de elite e arquitetura de dados de alta performance da BrandUp Hub foi injetada no código do LevaUp. Usamos as mesmas linguagens de programação e infraestrutura em nuvem das maiores startups do mundo, garantindo tempo real absoluto, segurança blindada e um aplicativo leve que não trava o celular do motorista.
              </p>
            </div>
          </div>
        </section>

        {/* SEÇÃO 4: O CÓDIGO LEVAUP (NOSSOS PILARES) */}
        <section className="py-20 md:py-24 bg-muted/40">
          <div className="container">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">As Novas Regras da Rota.</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Como operamos para devolver o controle a quem faz a cidade andar.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-2 hover:border-levaup-orange transition-colors h-full">
                <CardHeader>
                  <div className="w-14 h-14 bg-levaup-orange/10 rounded-xl flex items-center justify-center mb-2">
                    <Car className="h-7 w-7 text-levaup-orange" />
                  </div>
                  <CardTitle className="text-xl">1. Economia Justa (Fair Take-Rate)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    O suor é do motorista, o dinheiro também deve ser. Nosso modelo de monetização é radicalmente diferente das gigantes. Cobramos o mínimo necessário para manter a tecnologia rodando. Mais dinheiro na economia local, menos evasão de riquezas.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-levaup-orange transition-colors h-full">
                <CardHeader>
                  <div className="w-14 h-14 bg-levaup-orange/10 rounded-xl flex items-center justify-center mb-2">
                    <Shield className="h-7 w-7 text-levaup-orange" />
                  </div>
                  <CardTitle className="text-xl">2. Tecnologia Invisível e Implacável</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Milissegundos importam. Nosso algoritmo de matching (conexão entre passageiro e motorista) foi desenhado para ser ultrarrápido. Sem telas brancas, sem travamentos no meio da corrida.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-levaup-orange transition-colors h-full">
                <CardHeader>
                  <div className="w-14 h-14 bg-levaup-orange/10 rounded-xl flex items-center justify-center mb-2">
                    <MapPin className="h-7 w-7 text-levaup-orange" />
                  </div>
                  <CardTitle className="text-xl">3. Suporte Olho no Olho</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Se algo der errado, você não vai falar com um robô de atendimento baseado em outro país. Nosso suporte é local, real e direto. Nós conhecemos as ruas, conhecemos os bairros e conhecemos nossos parceiros.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* SEÇÃO 5: A VISÃO - O FUTURO DA MOBILIDADE */}
        <section className="py-20 md:py-24 bg-levaup-black text-levaup-white">
          <div className="container max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">Nosso Destino.</h2>
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed space-y-4">
              Hoje, começamos devolvendo o poder de ir e vir com justiça para{" "}
              <span className="text-levaup-orange font-semibold">
                Paraíso do Tocantins
              </span>
              . Mas o nosso motor não para por aqui. Nossa visão é escalar a tecnologia do LevaUp para se tornar a espinha dorsal da logística e mobilidade de todo o{" "}
              <span className="text-levaup-petrol font-semibold">
                Estado do Tocantins
              </span>
              .
            </p>
            <p className="mt-8 text-lg text-zinc-500">
              Não queremos apenas competir; queremos redefinir o que as pessoas esperam de um serviço de transporte.
            </p>
          </div>
        </section>

        {/* SEÇÃO 6: CALL TO ACTION */}
        <section className="py-20 md:py-24 bg-levaup-orange text-levaup-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              De que lado do banco você vai sentar?
            </h2>
            <p className="text-lg opacity-95 max-w-2xl mx-auto mb-10">
              A revolução da mobilidade local já começou a rodar. Seja um dos primeiros a experimentar a diferença de uma tecnologia feita por nós, para nós.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-levaup-white text-levaup-orange hover:bg-zinc-100 font-semibold text-base px-8 h-12"
              >
                <Link href="/motorista">Quero Dirigir com o LevaUp</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-levaup-white text-levaup-white bg-transparent hover:bg-levaup-white/10 font-semibold text-base px-8 h-12"
              >
                <Link href="/passageiro">Baixar o App (Passageiro)</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
