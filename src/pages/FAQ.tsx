import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Car, HelpCircle, MessageCircle, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const FAQ = () => {
  const faqPassageiros = [
    {
      pergunta: "Como faço para baixar o app LevaUp?",
      resposta: "O app LevaUp ainda está em desenvolvimento. Faça seu pré-cadastro em nossa página de passageiros para ser notificado assim que estiver disponível nas lojas Google Play e App Store."
    },
    {
      pergunta: "Como funciona o LevaUp Rewards?",
      resposta: "O LevaUp Rewards é nosso programa de pontos! Você ganha pontos a cada corrida realizada e pode trocar por descontos, viagens grátis e participar de sorteios semanais. Quem fizer o pré-cadastro ganha 200 pontos de bônus na primeira corrida!"
    },
    {
      pergunta: "Qual a diferença entre LevaUp Carro e LevaUp Moto?",
      resposta: "LevaUp Carro oferece mais conforto e espaço, ideal para viagens mais longas ou quando você precisa de mais comodidade. LevaUp Moto é focado na agilidade urbana, perfeito para trajetos curtos e quando você precisa chegar rapidinho ao destino."
    },
    {
      pergunta: "Como funciona o sistema de segurança?",
      resposta: "Temos várias camadas de segurança: botão de pânico que envia suas informações para contatos de emergência, compartilhamento de viagem em tempo real, e todos os motoristas passam por verificação de antecedentes criminais."
    },
    {
      pergunta: "Como sei o preço da corrida antes de embarcar?",
      resposta: "No LevaUp, você sempre sabe o preço final antes de confirmar a corrida. Nosso sistema calcula o valor com base na distância e tempo estimado, sem surpresas no final da viagem."
    },
    {
      pergunta: "O que fazer se o motorista não me encontrar?",
      resposta: "Nossa tecnologia de geolocalização é ultra precisa, mas se houver algum problema, você pode entrar em contato direto com o motorista pelo app ou acionar nosso suporte 24h."
    }
  ];

  const faqMotoristas = [
    {
      pergunta: "Como me cadastrar como motorista LevaUp?",
      resposta: "Acesse nossa página de motoristas e preencha o formulário de cadastro. Nossa equipe entrará em contato em até 24 horas para finalizar o processo e fazer a verificação dos documentos."
    },
    {
      pergunta: "Qual é a comissão cobrada pelo LevaUp?",
      resposta: "Nossa comissão é de apenas 10% - a menor do mercado! Isso significa que você fica com 90% do valor de cada corrida. Para Motoristas Fundadores, a taxa é ainda menor: apenas 8% nos primeiros 2 meses."
    },
    {
      pergunta: "Como funciona o LevaUp Club Pro?",
      resposta: "É nosso sistema de gamificação! Você completa missões diárias, conquista objetivos e ganha vouchers de crédito de taxas. Quanto mais ativo você for, mais benefícios recebe."
    },
    {
      pergunta: "O que é o Programa Motoristas Fundadores?",
      resposta: "São as primeiras 20 vagas para motoristas em Paraíso. Benefícios exclusivos: apenas 8% de comissão nos primeiros 2 meses, kit boas-vindas gratuito, participação em sorteios mensais e prioridade no suporte."
    },
    {
      pergunta: "Como funciona o suporte para motoristas?",
      resposta: "Oferecemos suporte local real! Teremos um ponto de apoio físico em Paraíso e canais exclusivos para motoristas. Não é aquele suporte automatizado - é gente de verdade que entende suas necessidades."
    },
    {
      pergunta: "Posso trabalhar com carro e moto?",
      resposta: "Sim! Você pode se cadastrar para dirigir carros, motos ou ambos. Cada modalidade tem suas particularidades e oportunidades de ganho."
    },
    {
      pergunta: "Como vejo meus ganhos e estatísticas?",
      resposta: "Temos transparência total! No app você vê exatamente quanto ganhou por dia, semana e mês, suas estatísticas de corridas, avaliações dos passageiros e histórico completo."
    }
  ];

  const faqGeral = [
    {
      pergunta: "Quando o LevaUp será lançado em Paraíso?",
      resposta: "Estamos trabalhando intensamente para lançar o LevaUp em breve! Os pré-cadastrados serão os primeiros a saber da data exata e receberão benefícios exclusivos no lançamento."
    },
    {
      pergunta: "Por que escolheram Paraíso do Tocantins?",
      resposta: "Paraíso tem um potencial de crescimento incrível e pessoas que merecem soluções de qualidade. Escolhemos focar em nossa cidade para oferecer um serviço verdadeiramente local e personalizado."
    },
    {
      pergunta: "O LevaUp vai funcionar 24 horas?",
      resposta: "Sim! O LevaUp funcionará 24 horas por dia, 7 dias por semana, para atender todas as suas necessidades de mobilidade em Paraíso."
    },
    {
      pergunta: "Como entrar em contato com o suporte?",
      resposta: "Você pode nos contatar através do formulário em nossa página de contato, pelos e-mails específicos (passageiros@levaup.com.br ou motoristas@levaup.com.br) ou em breve pelo nosso WhatsApp."
    },
    {
      pergunta: "O LevaUp vai expandir para outras cidades?",
      resposta: "Nosso foco inicial é oferecer o melhor serviço possível em Paraíso do Tocantins. Futuras expansões serão consideradas após consolidarmos nossa operação local."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HelpCircle className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Perguntas <span className="bg-gradient-hero bg-clip-text text-transparent">Frequentes</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre o LevaUp. 
            Se não encontrar o que procura, entre em contato conosco!
          </p>
        </div>
      </section>

      {/* Categorias FAQ */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* FAQ Passageiros */}
          <div className="mb-16">
            <Card className="shadow-card mb-8">
              <CardHeader className="text-center">
                <div className="bg-gradient-primary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Para Passageiros</CardTitle>
                <CardDescription className="text-lg">
                  Dúvidas sobre como usar o LevaUp como passageiro
                </CardDescription>
              </CardHeader>
            </Card>

            <Accordion type="single" collapsible className="space-y-4">
              {faqPassageiros.map((item, index) => (
                <AccordionItem key={index} value={`passageiro-${index}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {item.pergunta}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                    {item.resposta}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* FAQ Motoristas */}
          <div className="mb-16">
            <Card className="shadow-card mb-8">
              <CardHeader className="text-center">
                <div className="bg-gradient-secondary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Car className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Para Motoristas</CardTitle>
                <CardDescription className="text-lg">
                  Informações sobre como trabalhar como motorista LevaUp
                </CardDescription>
              </CardHeader>
            </Card>

            <Accordion type="single" collapsible className="space-y-4">
              {faqMotoristas.map((item, index) => (
                <AccordionItem key={index} value={`motorista-${index}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {item.pergunta}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                    {item.resposta}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* FAQ Geral */}
          <div className="mb-16">
            <Card className="shadow-card mb-8">
              <CardHeader className="text-center">
                <div className="bg-gradient-hero w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <HelpCircle className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Dúvidas Gerais</CardTitle>
                <CardDescription className="text-lg">
                  Informações gerais sobre o LevaUp e a BrandUp Hub
                </CardDescription>
              </CardHeader>
            </Card>

            <Accordion type="single" collapsible className="space-y-4">
              {faqGeral.map((item, index) => (
                <AccordionItem key={index} value={`geral-${index}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {item.pergunta}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                    {item.resposta}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Contato */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Não Encontrou Sua Resposta?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Nossa equipe está pronta para esclarecer todas suas dúvidas! 
            Entre em contato e teremos prazer em ajudar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="hero" asChild>
              <Link to="/contato">
                <MessageCircle className="mr-2 h-5 w-5" />
                Entrar em Contato
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <a href="mailto:contato@levaup.com.br">
                <Mail className="mr-2 h-5 w-5" />
                Enviar E-mail
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;