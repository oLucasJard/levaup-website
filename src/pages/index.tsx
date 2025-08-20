import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, Users, MapPin, DollarSign, Gift, Shield, Target, Zap, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-levaup.jpg";

const Index = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSignup = () => {
    if (email) {
      toast({
        title: "Cadastro realizado!",
        description: "Você será o primeiro a saber das novidades e bônus de lançamento!",
      });
      setEmail("");
    }
  };

  const diferenciais = [
    {
      icon: Target,
      title: "Precisão",
      description: "Geolocalização exata"
    },
    {
      icon: DollarSign,
      title: "Lucro",
      description: "Apenas 10% de comissão"
    },
    {
      icon: Users,
      title: "Suporte",
      description: "Atendimento local real"
    },
    {
      icon: Shield,
      title: "Segurança",
      description: "Tecnologia de proteção"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-16 sm:pt-20 pb-16 sm:pb-24 overflow-hidden min-h-[90vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/85"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white w-full">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
            LevaUp: A <span className="bg-gradient-hero bg-clip-text text-transparent">Nova Era</span><br />
            da Mobilidade Urbana
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-white/90 max-w-4xl mx-auto px-4">
            Em breve em <strong>Paraíso do Tocantins</strong>: A mobilidade que você merece, 
            com justiça, segurança e eficiência que nunca viu antes.
          </p>
          
          <div className="flex flex-col gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 max-w-lg mx-auto sm:max-w-none">
            <Button size="lg" variant="hero" className="w-full sm:w-auto text-base sm:text-xl px-6 sm:px-10 py-4 sm:py-6" asChild>
              <Link to="/passageiro">
                <Users className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                <span className="hidden sm:inline">Pronto para Mudar Sua Rotina?</span>
                <span className="sm:hidden">Sou Passageiro</span>
                <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="motorista" className="w-full sm:w-auto text-base sm:text-xl px-6 sm:px-10 py-4 sm:py-6" asChild>
              <Link to="/motorista">
                <Car className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                <span className="hidden sm:inline">Quero Acelerar Meus Lucros!</span>
                <span className="sm:hidden">Sou Motorista</span>
                <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
          </div>

          {/* Teaser Text */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">
              A Transformação Está Chegando
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed">
              Paraíso do Tocantins está prestes a vivenciar uma revolução na forma de se mover. 
              Uma plataforma pensada para quem busca <strong>justiça</strong>, <strong>segurança</strong> e <strong>eficiência</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Nossos <span className="bg-gradient-hero bg-clip-text text-transparent">Pilares</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
              Cada detalhe foi pensado para revolucionar sua experiência
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {diferenciais.map((item, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-glow transition-all duration-500 hover:scale-105 bg-gradient-card border-0 group">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="bg-gradient-primary w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm sm:text-base">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Suspense Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-glow">
            <Zap className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 text-accent mx-auto mb-4 sm:mb-6" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Algo Grande Está Chegando
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto">
              Não podemos revelar todos os detalhes ainda, mas garantimos: 
              quando o LevaUp chegar a Paraíso, você vai querer fazer parte dessa história desde o primeiro dia.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-10">
              <div className="p-4 sm:p-6 bg-muted/50 rounded-2xl">
                <Gift className="h-8 w-8 sm:h-10 sm:w-10 text-primary mx-auto mb-2 sm:mb-3" />
                <h3 className="font-semibold mb-2 text-sm sm:text-base">Bônus de Lançamento</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Recompensas especiais para os primeiros usuários</p>
              </div>
              <div className="p-4 sm:p-6 bg-muted/50 rounded-2xl">
                <Target className="h-8 w-8 sm:h-10 sm:w-10 text-secondary mx-auto mb-2 sm:mb-3" />
                <h3 className="font-semibold mb-2 text-sm sm:text-base">Programa Exclusivo</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Benefícios únicos para motoristas fundadores</p>
              </div>
              <div className="p-4 sm:p-6 bg-muted/50 rounded-2xl">
                <Shield className="h-8 w-8 sm:h-10 sm:w-10 text-accent mx-auto mb-2 sm:mb-3" />
                <h3 className="font-semibold mb-2 text-sm sm:text-base">Tecnologia Avançada</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Recursos inovadores que você nunca viu</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Fique por Dentro
          </h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 lg:mb-10 text-white/90">
            Seja o primeiro a saber das novidades e garanta seus 
            <strong> bônus de lançamento</strong> exclusivos!
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 max-w-lg mx-auto">
            <div className="space-y-4 sm:space-y-6">
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white text-foreground border-0 text-center text-sm sm:text-base lg:text-lg py-3 sm:py-4 lg:py-6"
              />
              <Button 
                onClick={handleNewsletterSignup}
                size="lg" 
                variant="hero" 
                className="w-full text-sm sm:text-base lg:text-lg py-3 sm:py-4 lg:py-6"
              >
                <Gift className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden sm:inline">Quero Meus Bônus de Lançamento!</span>
                <span className="sm:hidden">Quero os Bônus!</span>
              </Button>
            </div>
            <p className="text-xs sm:text-sm text-white/70 mt-4 sm:mt-6">
              🎁 <strong>200 pontos LevaUp Rewards</strong> garantidos para passageiros<br />
              👑 <strong>Programa Motoristas Fundadores</strong> com vantagens exclusivas
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
