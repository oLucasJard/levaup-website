import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Target, Eye, Users, MapPin, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Sobre = () => {
  const valores = [
    {
      icon: Heart,
      title: "Paixão por Inovação",
      description: "Acreditamos que a tecnologia deve simplificar a vida das pessoas, não complicar."
    },
    {
      icon: Users,
      title: "Foco nas Pessoas",
      description: "Cada decisão que tomamos tem as pessoas de Paraíso em primeiro lugar."
    },
    {
      icon: Target,
      title: "Compromisso com a Qualidade",
      description: "Não lançamos nada que não usaríamos pessoalmente em nosso dia a dia."
    },
    {
      icon: Zap,
      title: "Agilidade e Eficiência",
      description: "Valorizamos seu tempo e trabalhamos para tornar tudo mais rápido e eficiente."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Sobre a <span className="bg-gradient-hero bg-clip-text text-transparent">BrandUp Hub</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-4xl mx-auto">
            Conhece a história por trás do LevaUp e nosso compromisso com Paraíso do Tocantins
          </p>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Nossa <span className="text-primary">História</span>
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  A <strong>BrandUp Hub</strong> nasceu da visão de transformar a mobilidade urbana 
                  em cidades que merecem atenção especial. Paraíso do Tocantins, com seu crescimento 
                  acelerado e potencial único, foi escolhida como nossa primeira cidade.
                </p>
                <p>
                  Percebemos que as soluções de mobilidade existentes não atendiam adequadamente 
                  as necessidades específicas de cidades como Paraíso. Era preciso algo novo, 
                  pensado de dentro para fora, com foco na realidade local.
                </p>
                <p>
                  Assim nasceu o <strong>LevaUp</strong> - uma plataforma de mobilidade urbana que 
                  combina tecnologia de ponta com o cuidado e atenção que só uma empresa local pode oferecer.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="shadow-card">
                <CardHeader>
                  <MapPin className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>Foco Local</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Dedicação exclusiva a Paraíso do Tocantins, com soluções pensadas 
                    especificamente para nossa realidade.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardHeader>
                  <Users className="h-10 w-10 text-secondary mb-3" />
                  <CardTitle>Equipe Apaixonada</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Profissionais que vivem e respiram Paraíso, entendendo cada necessidade 
                    da nossa comunidade.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nossa <span className="text-secondary">Essência</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Missão */}
            <Card className="text-center shadow-card bg-gradient-card">
              <CardHeader>
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Revolucionar a mobilidade urbana em Paraíso do Tocantins, oferecendo 
                  soluções justas, seguras e eficientes que conectem pessoas e oportunidades.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Visão */}
            <Card className="text-center shadow-card bg-gradient-card">
              <CardHeader>
                <Eye className="h-12 w-12 text-secondary mx-auto mb-4" />
                <CardTitle className="text-2xl">Visão</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Ser a principal plataforma de mobilidade de Paraíso, reconhecida pela 
                  inovação, qualidade do serviço e comprometimento com nossa comunidade.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Compromisso */}
            <Card className="text-center shadow-card bg-gradient-card">
              <CardHeader>
                <Heart className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-2xl">Compromisso</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Manter sempre Paraíso do Tocantins como nosso foco principal, investindo 
                  no crescimento e desenvolvimento da nossa cidade.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nossos <span className="text-accent">Valores</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Os princípios que guiam cada decisão e ação da BrandUp Hub
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {valores.map((valor, index) => (
              <Card key={index} className="shadow-card hover:shadow-primary transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-primary w-12 h-12 rounded-lg flex items-center justify-center">
                      <valor.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{valor.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{valor.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Por que Paraíso */}
      <section className="py-16 bg-gradient-to-br from-secondary/10 to-primary/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Por Que <span className="text-secondary">Paraíso do Tocantins</span>?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-card rounded-2xl shadow-card">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Potencial de Crescimento</h3>
              <p className="text-muted-foreground">
                Uma cidade em franco desenvolvimento, com pessoas que merecem soluções de qualidade.
              </p>
            </div>
            
            <div className="p-6 bg-card rounded-2xl shadow-card">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Comunidade Acolhedora</h3>
              <p className="text-muted-foreground">
                Pessoas receptivas à inovação e que valorizam empresas comprometidas com a cidade.
              </p>
            </div>
            
            <div className="p-6 bg-card rounded-2xl shadow-card">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Necessidade Real</h3>
              <p className="text-muted-foreground">
                Uma demanda clara por soluções de mobilidade mais eficientes e justas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sobre;