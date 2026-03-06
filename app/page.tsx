import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SEOBreadcrumb } from "@/components/seo-breadcrumb"
import type { Metadata } from "next"
import { ArrowRight, Car, MapPin } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "LevaUp - A mobilidade da nossa cidade, reescrita em código",
  description: "Plataforma de transporte desenvolvida no Tocantins. Taxa de 10% para motoristas, preços justos para passageiros. Suporte local e tecnologia BrandUp Hub em Paraíso/TO.",
  keywords: [
    "LevaUp",
    "app transporte Paraíso TO",
    "mobilidade urbana Paraíso Tocantins",
    "corrida app Paraíso",
    "motorista app Paraíso",
    "transporte Paraíso do Tocantins",
    "comissão 10%",
    "BrandUp Hub",
  ],
  alternates: {
    canonical: "https://levaup.com.br",
  },
}

export default function HomePage() {
  return (
    <>
      <SEOBreadcrumb items={[{ name: "Home", url: "/" }]} />
      <div className="flex flex-col">
        {/* SEÇÃO 1: HERO DUPLO - O PORTÃO DE ENTRADA */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-levaup-black">
          <div className="container relative z-10 py-20">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-levaup-white leading-tight">
                A mobilidade da nossa cidade,{" "}
                <span className="text-levaup-green">
                  reescrita em código.
                </span>
              </h1>
              <p className="mt-8 text-lg md:text-xl text-zinc-400 leading-relaxed max-w-3xl mx-auto">
                Esqueça as taxas extorsivas e os cancelamentos infinitos. O LevaUp é a plataforma de transporte desenvolvida no Tocantins que valoriza quem dirige e respeita quem chama.
              </p>
              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto text-lg px-10 h-14 bg-levaup-green hover:opacity-90 text-levaup-white font-semibold"
                >
                  <Link href="/passageiro">Quero Viajar</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-lg px-10 h-14 border-2 border-levaup-petrol text-levaup-petrol bg-transparent hover:bg-levaup-petrol/10 font-semibold"
                >
                  <Link href="/motorista">Quero Dirigir</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 2: O CONCEITO (THE LEVAUP WAY) */}
        <section className="py-16 md:py-24 bg-levaup-black text-levaup-white">
          <div className="container max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-levaup-white mb-10 text-center">
              Por que criamos o LevaUp?
            </h2>
            <p className="text-lg md:text-xl text-zinc-300 leading-relaxed text-center">
              Os aplicativos globais transformaram nossa cidade em apenas mais uma linha nas planilhas de lucro deles. O resultado é um sistema quebrado: o passageiro paga caro, o motorista ganha pouco, e o serviço é péssimo. A matemática do LevaUp é diferente. Como cobramos uma taxa de apenas 10% do motorista, ele aceita sua corrida mais rápido e com um sorriso no rosto. É o <strong className="text-levaup-white">Fair Play</strong> da mobilidade.
            </p>
          </div>
        </section>

        {/* SEÇÃO 3: O ECOSSISTEMA (CARDS LADO A LADO) */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="group overflow-hidden border-2 hover:border-levaup-petrol transition-colors h-full flex flex-col">
                <div className="aspect-[4/3] bg-levaup-petrol/10 flex items-center justify-center">
                  <MapPin className="h-20 w-20 text-levaup-petrol group-hover:opacity-80 transition-opacity" />
                </div>
                <CardContent className="p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold mb-3">Para quem precisa chegar.</h3>
                  <p className="text-muted-foreground leading-relaxed flex-1">
                    Corridas rápidas, motoristas motivados e segurança arquitetada no aplicativo. Baixe, chame e vá.
                  </p>
                  <Link
                    href="/passageiro"
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-levaup-orange hover:underline"
                  >
                    Ver vantagens para passageiros
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="group overflow-hidden border-2 hover:border-levaup-green transition-colors h-full flex flex-col">
                <div className="aspect-[4/3] bg-levaup-green/10 flex items-center justify-center">
                  <Car className="h-20 w-20 text-levaup-green group-hover:opacity-80 transition-opacity" />
                </div>
                <CardContent className="p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold mb-3">Para quem faz a cidade andar.</h3>
                  <p className="text-muted-foreground leading-relaxed flex-1">
                    Fique com 90% do valor da corrida. Suporte humano em Paraíso e gamificação que zera suas taxas.
                  </p>
                  <Link
                    href="/motorista"
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-levaup-orange hover:underline"
                  >
                    Conhecer o programa de parceiros
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* SEÇÃO 4: O SELO DE ENGENHARIA */}
        <section className="py-16 md:py-24 bg-muted/50 border-t">
          <div className="container max-w-3xl text-center">
            <div className="flex flex-col items-center gap-4 mb-8">
              <Image
                src="/logo-preto.png"
                alt="LevaUp"
                width={140}
                height={47}
                className="h-10 w-auto opacity-90"
              />
              <p className="text-sm font-semibold text-muted-foreground tracking-widest uppercase">
                Powered by BrandUp Hub
              </p>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">O LevaUp não é um app comprado pronto.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              É tecnologia proprietária. Construído pela Venture Builder BrandUp Hub, garantindo servidores ultrarrápidos, dados criptografados e um aplicativo que não trava o seu celular.
            </p>
            <Link
              href="/sobre"
              className="inline-flex items-center gap-2 mt-8 font-medium text-levaup-orange hover:underline"
            >
              Conheça nossa história
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
