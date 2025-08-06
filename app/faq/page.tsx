import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Users, Car, HelpCircle, Mail } from "lucide-react"

export default function FAQPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-background">
        <div className="container text-center space-y-8">
          <Badge variant="secondary" className="w-fit mx-auto">
            Perguntas Frequentes
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Tire Suas
            <span className="text-primary block">Dúvidas</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Encontre respostas para as perguntas mais comuns sobre o LevaUp
          </p>
        </div>
      </section>

      {/* Categorias */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold">Para Passageiros</h3>
                <p className="text-sm text-muted-foreground">Dúvidas sobre como usar o app, preços e segurança</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto">
                  <Car className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold">Para Motoristas</h3>
                <p className="text-sm text-muted-foreground">Informações sobre cadastro, comissões e benefícios</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto">
                  <HelpCircle className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold">Geral</h3>
                <p className="text-sm text-muted-foreground">Informações gerais sobre a empresa e serviços</p>
              </CardContent>
            </Card>
          </div>

          {/* FAQ para Passageiros */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center space-x-2">
                <Users className="h-6 w-6 text-blue-600" />
                <span>Para Passageiros</span>
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="p1">
                  <AccordionTrigger className="text-left">Como baixar o app LevaUp?</AccordionTrigger>
                  <AccordionContent>
                    O app LevaUp estará disponível em breve na Google Play Store e App Store. Cadastre seu e-mail em
                    nosso site para ser notificado assim que o app for lançado e ganhar 200 pontos de bônus na primeira
                    corrida!
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="p2">
                  <AccordionTrigger className="text-left">Como funciona o sistema de preços?</AccordionTrigger>
                  <AccordionContent>
                    Nossos preços são calculados de forma justa e transparente, baseados na distância e tempo da viagem.
                    Não temos taxas escondidas ou aumentos abusivos. Você sempre saberá o valor antes de confirmar a
                    corrida.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="p3">
                  <AccordionTrigger className="text-left">O que é o LevaUp Rewards?</AccordionTrigger>
                  <AccordionContent>
                    O LevaUp Rewards é nosso programa de fidelidade. Você ganha pontos a cada corrida e pode trocar por
                    descontos em viagens futuras. Novos usuários ganham 200 pontos de bônus na primeira corrida, além de
                    participar de sorteios semanais!
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="p4">
                  <AccordionTrigger className="text-left">
                    Qual a diferença entre LevaUp Carro e LevaUp Moto?
                  </AccordionTrigger>
                  <AccordionContent>
                    LevaUp Carro é ideal para quem prioriza conforto, com veículos com ar-condicionado e espaço para
                    bagagens. LevaUp Moto é perfeito para quem tem pressa, oferecendo agilidade no trânsito com motos
                    seguras e equipadas.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="p5">
                  <AccordionTrigger className="text-left">Como funciona a segurança no LevaUp?</AccordionTrigger>
                  <AccordionContent>
                    Sua segurança é nossa prioridade. Oferecemos botão de pânico para emergências, compartilhamento de
                    viagem em tempo real com familiares, e todos os motoristas passam por verificação rigorosa de
                    documentos e antecedentes.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="p6">
                  <AccordionTrigger className="text-left">Posso cancelar uma corrida?</AccordionTrigger>
                  <AccordionContent>
                    Sim, você pode cancelar uma corrida através do app. Cancelamentos feitos logo após a solicitação não
                    têm custo. Após um determinado tempo ou se o motorista já estiver a caminho, pode haver uma taxa de
                    cancelamento.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* FAQ para Motoristas */}
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center space-x-2">
                <Car className="h-6 w-6 text-green-600" />
                <span>Para Motoristas</span>
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="m1">
                  <AccordionTrigger className="text-left">Como me cadastrar como motorista?</AccordionTrigger>
                  <AccordionContent>
                    Acesse nossa página "Para Motoristas" e preencha o formulário de interesse. Nossa equipe entrará em
                    contato para orientar sobre os documentos necessários e o processo de cadastro. Temos apenas 20
                    vagas para motoristas fundadores!
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="m2">
                  <AccordionTrigger className="text-left">Qual a comissão do LevaUp?</AccordionTrigger>
                  <AccordionContent>
                    Nossa comissão é de apenas 10%, muito menor que a concorrência. Para os 20 motoristas fundadores,
                    oferecemos comissão especial de apenas 8% nos primeiros 2 meses, além de outros benefícios
                    exclusivos.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="m3">
                  <AccordionTrigger className="text-left">O que é o LevaUp Club Pro?</AccordionTrigger>
                  <AccordionContent>
                    É nosso sistema de gamificação exclusivo! Complete missões diárias, suba de nível e ganhe vouchers
                    de crédito para reduzir ainda mais suas taxas. Quanto mais você trabalha, mais benefícios recebe!
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="m4">
                  <AccordionTrigger className="text-left">Quais documentos preciso para me cadastrar?</AccordionTrigger>
                  <AccordionContent>
                    Você precisará de: CNH válida (categoria B para carro, A para moto), CPF, RG, comprovante de
                    residência, CRLV do veículo, seguro obrigatório, certidão de antecedentes criminais e foto 3x4.
                    Nossa equipe te ajudará com todo o processo.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="m5">
                  <AccordionTrigger className="text-left">Como funciona o suporte local?</AccordionTrigger>
                  <AccordionContent>
                    Teremos um ponto de apoio físico em Paraíso do Tocantins onde você pode resolver questões
                    presencialmente. Além disso, oferecemos canais oficiais de atendimento e suporte técnico
                    especializado.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="m6">
                  <AccordionTrigger className="text-left">Quando recebo os pagamentos?</AccordionTrigger>
                  <AccordionContent>
                    Os pagamentos são processados semanalmente, sempre às terças-feiras, referente às corridas da semana
                    anterior. Você pode acompanhar seus ganhos em tempo real através do app, com total transparência.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="m7">
                  <AccordionTrigger className="text-left">
                    O que inclui o Kit Boas-Vindas dos motoristas fundadores?
                  </AccordionTrigger>
                  <AccordionContent>
                    O Kit Boas-Vindas inclui adesivos identificadores do LevaUp, suporte para celular, carregador
                    veicular, manual do motorista e brindes exclusivos. É nosso presente para os primeiros parceiros!
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* FAQ Geral */}
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center space-x-2">
                <HelpCircle className="h-6 w-6 text-purple-600" />
                <span>Perguntas Gerais</span>
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="g1">
                  <AccordionTrigger className="text-left">Quando o LevaUp será lançado?</AccordionTrigger>
                  <AccordionContent>
                    Estamos finalizando os últimos detalhes para garantir a melhor experiência possível. O lançamento
                    está previsto para breve. Cadastre-se em nosso site para ser o primeiro a saber e ganhar benefícios
                    exclusivos!
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="g2">
                  <AccordionTrigger className="text-left">
                    O LevaUp atende apenas Paraíso do Tocantins?
                  </AccordionTrigger>
                  <AccordionContent>
                    Inicialmente, sim. Estamos focados em oferecer o melhor serviço possível em Paraíso do Tocantins.
                    Com base no sucesso local, planejamos expandir para outras cidades da região.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="g3">
                  <AccordionTrigger className="text-left">Quem é a BrandUp Hub?</AccordionTrigger>
                  <AccordionContent>
                    A BrandUp Hub é a empresa por trás do LevaUp, formada por empreendedores locais que conhecem as
                    necessidades específicas de Paraíso do Tocantins. Saiba mais em nossa página "Sobre Nós".
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="g4">
                  <AccordionTrigger className="text-left">
                    Como posso acompanhar as novidades do LevaUp?
                  </AccordionTrigger>
                  <AccordionContent>
                    Cadastre seu e-mail em nosso site, siga nossas redes sociais (Instagram e Facebook) e fique por
                    dentro de todas as novidades, promoções e do lançamento oficial!
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="g5">
                  <AccordionTrigger className="text-left">O LevaUp tem parcerias com empresas locais?</AccordionTrigger>
                  <AccordionContent>
                    Estamos sempre abertos a parcerias que beneficiem nossa comunidade. Se você representa uma empresa e
                    tem interesse em parceria, entre em contato através do e-mail imprensa@levaup.com.br.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="g6">
                  <AccordionTrigger className="text-left">
                    Como reportar um problema ou fazer uma sugestão?
                  </AccordionTrigger>
                  <AccordionContent>
                    Você pode entrar em contato conosco através do formulário em nossa página de contato, pelos e-mails
                    específicos (contato@levaup.com.br) ou através de nossas redes sociais. Valorizamos muito o feedback
                    da comunidade!
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">Não Encontrou Sua Resposta?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nossa equipe está pronta para ajudar! Entre em contato conosco e teremos prazer em esclarecer suas dúvidas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>Entrar em Contato</span>
            </Button>
            <Button variant="outline" size="lg">
              Ver Página de Contato
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
