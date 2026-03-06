import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import { SEOBreadcrumb } from "@/components/seo-breadcrumb"
import { Shield, MapPin, UserCheck, AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "Central de Segurança LevaUp | Proteção para Motoristas",
  description: "Como o LevaUp protege você: mapeamento de áreas de risco, validação de identidade dos passageiros (CPF) e Botão de Emergência. Tecnologia de segurança para motoristas em Paraíso/TO.",
  keywords: [
    "segurança motorista app",
    "LevaUp segurança",
    "botão de pânico LevaUp",
    "validação passageiro CPF",
    "áreas de risco Paraíso",
    "app seguro motorista Tocantins",
  ],
  openGraph: {
    title: "Central de Segurança LevaUp - Proteção Tecnológica para Motoristas",
    description: "Cercas virtuais, validação de passageiros e Botão de Emergência. Dirija com mais tranquilidade.",
    url: "https://levaup.com.br/motorista/seguranca",
    type: "website",
  },
  alternates: {
    canonical: "https://levaup.com.br/motorista/seguranca",
  },
}

export default function SegurancaPage() {
  return (
    <>
      <SEOBreadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Para Motoristas", url: "/motorista" },
        { name: "Central de Segurança", url: "/motorista/seguranca" },
      ]} />
      <div className="flex flex-col">
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-levaup-black">
          <div className="container relative z-10 py-20">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-6 bg-levaup-green/20 text-levaup-green border border-levaup-green/40">
                Para Motoristas
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-levaup-white leading-tight">
                Central de Segurança
                <span className="text-levaup-green block mt-2">
                  LevaUp
                </span>
              </h1>
              <p className="mt-6 text-lg text-zinc-400 leading-relaxed">
                O maior medo do motorista de app não é a taxa — é o assalto. Aqui está tudo o que fazemos para você rodar com mais tranquilidade: tecnologia de ponta desenhada para proteger quem está no volante.
              </p>
              <Button asChild variant="outline" size="lg" className="mt-8 border-levaup-green/50 text-levaup-green hover:bg-levaup-green/10">
                <Link href="/motorista">Voltar para Para Motoristas</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Mapeamento de áreas de risco */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container max-w-4xl">
            <Card className="border-2 border-levaup-orange/20 overflow-hidden">
              <CardHeader className="bg-muted/50">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-levaup-orange/10 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-levaup-orange" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Mapeamento de Áreas de Risco (Geofencing)</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">Cercas virtuais onde o app não toca</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Utilizamos <strong className="text-foreground">geofencing</strong> (cercas virtuais) para mapear zonas de maior risco em Paraíso do Tocantins e região. Nessas áreas, o aplicativo pode limitar ou sinalizar corridas em horários específicos, evitando que você seja direcionado para locais com histórico de ocorrências sem estar ciente.
                </p>
                <p>
                  O mapa de risco é alimentado por dados oficiais e pela nossa própria central de operações, e é atualizado de forma contínua. Você sempre sabe em que tipo de área está entrando — e pode recusar corridas que não se sintam seguras, sem penalidade.
                </p>
                <p className="text-foreground font-medium">
                  Resumo: o LevaUp não te manda para onde você não quer ir. A decisão final é sempre sua.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Validação de identidade */}
        <section className="py-16 md:py-20 bg-muted/40">
          <div className="container max-w-4xl">
            <Card className="border-2 border-levaup-orange/20 overflow-hidden">
              <CardHeader className="bg-muted/50">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-levaup-orange/10 flex items-center justify-center">
                    <UserCheck className="h-6 w-6 text-levaup-orange" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Validação de Identidade dos Passageiros (CPF)</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">Quem sobe no seu carro está identificado</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Todo passageiro que solicita uma corrida no LevaUp passa por <strong className="text-foreground">validação de identidade</strong>. O CPF é verificado na base de dados e cruzado com as informações cadastrais antes da viagem ser confirmada.
                </p>
                <p>
                  Isso reduz drasticamente corridas anônimas ou com contas falsas. Se algo acontecer durante ou após a corrida, temos um rastro claro de quem estava no app — e você também pode consultar o histórico da viagem no seu painel.
                </p>
                <p className="text-foreground font-medium">
                  Resumo: não trabalhamos com “fantasmas”. Passageiro validado, menos risco para você.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Botão de Emergência */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container max-w-4xl">
            <Card className="border-2 border-red-200 dark:border-red-800 overflow-hidden">
              <CardHeader className="bg-red-50/50 dark:bg-red-950/30">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-900/50 flex items-center justify-center">
                    <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Botão de Emergência</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">Um toque e a central entra em ação</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  O <strong className="text-foreground">Botão de Emergência</strong> fica visível e acessível durante toda a corrida. Em situação de perigo, um único toque dispara um alerta em tempo real para a nossa central de operações em Paraíso do Tocantins.
                </p>
                <p>
                  Nossa equipe local recebe sua localização ao vivo, dados da corrida e do passageiro. Podemos acionar as autoridades se necessário e acompanhar a situação até a resolução. Não é um robô em outro país: é gente da sua cidade, 24/7, do outro lado da linha.
                </p>
                <p className="text-foreground font-medium">
                  Resumo: você nunca está sozinho na rua. O Botão de Emergência conecta você à central na hora.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-levaup-orange text-levaup-white">
          <div className="container max-w-2xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Segurança não é discurso. É código.</h2>
            <p className="text-lg opacity-95 mb-8">
              Se você quer rodar com tecnologia que realmente protege o motorista, o LevaUp foi feito para você.
            </p>
            <Button asChild size="lg" className="bg-levaup-white text-levaup-orange hover:bg-zinc-100">
              <Link href="/motorista">Solicitar Cadastro de Parceiro</Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  )
}
