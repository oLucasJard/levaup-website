import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Target, Eye, Heart, Users, MapPin, Lightbulb } from "lucide-react"

export default function SobrePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-background">
        <div className="container text-center space-y-8">
          <Badge variant="secondary" className="w-fit mx-auto">
            Sobre Nós
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Conheça a<span className="text-primary block">BrandUp Hub</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A empresa por trás do LevaUp, comprometida em revolucionar a mobilidade urbana em Paraíso do Tocantins
          </p>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Nossa História</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  A BrandUp Hub nasceu da visão de transformar a mobilidade urbana no interior do Brasil. Fundada por
                  empreendedores locais que conhecem de perto os desafios de transporte em cidades como Paraíso do
                  Tocantins.
                </p>
                <p>
                  Percebemos que as grandes plataformas de mobilidade não atendiam adequadamente as necessidades
                  específicas das cidades menores, cobrando taxas abusivas e oferecendo pouco suporte local.
                </p>
                <p>
                  Foi assim que nasceu o LevaUp: uma solução pensada especificamente para nossa região, com valores
                  justos, suporte local e tecnologia de ponta.
                </p>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Equipe BrandUp Hub"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Nossos Pilares</h2>
            <p className="text-lg text-muted-foreground">Os valores que guiam cada decisão da BrandUp Hub</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Democratizar a mobilidade urbana no interior do Brasil, oferecendo soluções justas, seguras e
                  eficientes que beneficiem tanto passageiros quanto motoristas.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Visão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ser a principal plataforma de mobilidade urbana do interior brasileiro, reconhecida pela inovação,
                  transparência e compromisso com as comunidades locais.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Valores</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    • <strong>Transparência:</strong> Clareza em todas as operações
                  </p>
                  <p>
                    • <strong>Justiça:</strong> Preços e condições equitativas
                  </p>
                  <p>
                    • <strong>Inovação:</strong> Tecnologia a serviço das pessoas
                  </p>
                  <p>
                    • <strong>Comunidade:</strong> Compromisso com o desenvolvimento local
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Por que Paraíso do Tocantins */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Paraíso do Tocantins"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <MapPin className="h-6 w-6 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold">Por que Paraíso do Tocantins?</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Paraíso do Tocantins é uma cidade em crescimento, com mais de 50 mil habitantes e uma economia
                  dinâmica. No entanto, as opções de mobilidade urbana ainda são limitadas e caras.
                </p>
                <p>
                  Escolhemos começar aqui porque acreditamos no potencial da cidade e queremos contribuir para seu
                  desenvolvimento, oferecendo uma solução de transporte moderna e acessível.
                </p>
                <p>
                  Nossa equipe conhece as ruas, os bairros e as necessidades específicas dos moradores. Isso nos permite
                  criar uma experiência verdadeiramente personalizada para nossa comunidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nosso Compromisso */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Nosso Compromisso com Paraíso</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mais do que uma empresa de tecnologia, somos parceiros no desenvolvimento da cidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold">Empregos Locais</h3>
                <p className="text-sm text-muted-foreground">
                  Geramos oportunidades de renda para motoristas da região
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold">Suporte Presencial</h3>
                <p className="text-sm text-muted-foreground">Ponto de apoio físico na cidade para atendimento direto</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto">
                  <Lightbulb className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold">Inovação Local</h3>
                <p className="text-sm text-muted-foreground">
                  Desenvolvemos tecnologia pensando nas necessidades locais
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto">
                  <Heart className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-semibold">Responsabilidade Social</h3>
                <p className="text-sm text-muted-foreground">
                  Participamos ativamente do desenvolvimento da comunidade
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="py-16">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Nossa Equipe</h2>
            <p className="text-lg text-muted-foreground">
              Profissionais apaixonados por tecnologia e desenvolvimento local
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-primary">CEO</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Fundador & CEO</h3>
                  <p className="text-muted-foreground">
                    Visionário por trás do LevaUp, com experiência em tecnologia e negócios
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-primary">CTO</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Diretor de Tecnologia</h3>
                  <p className="text-muted-foreground">
                    Especialista em desenvolvimento de aplicativos e sistemas escaláveis
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-primary">COO</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Diretor de Operações</h3>
                  <p className="text-muted-foreground">
                    Responsável pela operação local e relacionamento com motoristas
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">Faça Parte da Nossa História</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Junte-se ao LevaUp e ajude a construir o futuro da mobilidade urbana em Paraíso do Tocantins
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Seja um Passageiro
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Seja um Motorista
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
