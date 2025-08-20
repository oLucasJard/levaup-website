import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, DollarSign, Gift, Car, Bike, Shield, AlertTriangle, Share2, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Passageiro = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handlePreCadastro = () => {
    if (email) {
      toast({
        title: "Pré-cadastro realizado!",
        description: "Você receberá 200 pontos LevaUp Rewards quando o app for lançado!",
      });
      setEmail("");
    }
  };

  const benefits = [
    {
      icon: MapPin,
      title: "Geolocalização Precisa",
      description: "Nunca mais se preocupe com o motorista não te achar. Nossa tecnologia garante precisão total."
    },
    {
      icon: DollarSign,
      title: "Preço Justo e Transparente",
      description: "Sem surpresas no final da corrida. Você sabe exatamente quanto vai pagar antes de embarcar."
    },
    {
      icon: Gift,
      title: "LevaUp Rewards",
      description: "Ganhe pontos a cada corrida e troque por descontos, viagens grátis e prêmios exclusivos."
    },
    {
      icon: Car,
      title: "LevaUp Carro",
      description: "Conforto e espaço para suas viagens mais longas ou quando você precisa de mais comodidade."
    },
    {
      icon: Bike,
      title: "LevaUp Moto",
      description: "Agilidade urbana para chegar rapidinho ao seu destino, ideal para trajetos curtos."
    },
    {
      icon: Shield,
      title: "Segurança Total",
      description: "Botão de pânico, compartilhamento de viagem e motoristas verificados para sua tranquilidade."
    }
  ];

  const securityFeatures = [
    {
      icon: AlertTriangle,
      title: "Botão de Pânico",
      description: "Um toque e suas informações são enviadas para contatos de emergência e autoridades."
    },
    {
      icon: Share2,
      title: "Compartilhamento de Viagem",
      description: "Compartilhe sua localização em tempo real com familiares e amigos."
    },
    {
      icon: Shield,
      title: "Motoristas Verificados",
      description: "Todos os motoristas passam por verificação de antecedentes criminais."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            LevaUp Passageiros: <br />
            <span className="text-accent-glow">Sua Corrida Perfeita</span> Começa Aqui
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Chega de esperar na chuva, de motorista perdido ou de preço surpresa. 
            Em Paraíso do Tocantins, sua mobilidade nunca mais será a mesma.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" variant="hero" className="text-lg px-8 py-4">
              <Gift className="mr-2 h-5 w-5" />
              Fazer Pré-Cadastro
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
              Baixar App (Em Breve)
            </Button>
          </div>

          {/* Bonus Highlight */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
            <Star className="h-8 w-8 text-accent-glow mx-auto mb-3" />
            <h3 className="text-xl font-bold mb-2">Bônus de Lançamento</h3>
            <p className="text-white/90">
              Faça seu pré-cadastro e ganhe <strong>200 pontos LevaUp Rewards</strong> na sua primeira corrida!
            </p>
          </div>
        </div>
      </section>

      {/* Problems & Solutions */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Cansado dos <span className="text-destructive">Mesmos Problemas</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Sabemos como é frustrante esperar, não saber o preço final ou ter problemas com localização. 
              O LevaUp resolve tudo isso.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-card rounded-2xl shadow-card">
              <div className="bg-destructive/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-destructive">Motorista Perdido</h3>
              <p className="text-muted-foreground">Fica rodando e não encontra você</p>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-primary font-semibold">✓ Geolocalização Ultra Precisa</p>
              </div>
            </div>

            <div className="text-center p-6 bg-card rounded-2xl shadow-card">
              <div className="bg-destructive/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-destructive">Preço Surpresa</h3>
              <p className="text-muted-foreground">Só descobre o valor no final</p>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-primary font-semibold">✓ Preço Transparente</p>
              </div>
            </div>

            <div className="text-center p-6 bg-card rounded-2xl shadow-card">
              <div className="bg-destructive/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-destructive">Insegurança</h3>
              <p className="text-muted-foreground">Não sabe quem é o motorista</p>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-primary font-semibold">✓ Motoristas Verificados</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Por Que Escolher o <span className="bg-gradient-hero bg-clip-text text-transparent">LevaUp</span>?
            </h2>
            <p className="text-xl text-muted-foreground">
              Cada detalhe foi pensado para transformar sua experiência de mobilidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="shadow-card hover:shadow-primary transition-all duration-300 hover:scale-105 bg-gradient-card">
                <CardHeader>
                  <div className="bg-gradient-primary w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sua <span className="text-primary">Segurança</span> é Nossa Prioridade
            </h2>
            <p className="text-xl text-muted-foreground">
              Tecnologia de ponta para que você se sinta protegido em todas as viagens
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-card rounded-2xl shadow-card hover:shadow-primary transition-all duration-300">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-Registration CTA */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Seja um dos Primeiros!
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Faça seu pré-cadastro agora e garante <strong>200 pontos LevaUp Rewards</strong> 
            na sua primeira corrida, além de participar dos sorteios semanais!
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
            <div className="space-y-4">
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white text-foreground border-0"
              />
              <Button 
                onClick={handlePreCadastro}
                size="lg" 
                variant="hero" 
                className="w-full text-lg"
              >
                <Gift className="mr-2 h-5 w-5" />
                Fazer Pré-Cadastro
              </Button>
            </div>
            <p className="text-sm text-white/70 mt-4">
              * Ao se cadastrar, você aceita nossos termos e políticas de privacidade
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Passageiro;