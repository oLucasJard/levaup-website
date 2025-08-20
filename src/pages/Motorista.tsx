import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Trophy, Users, Phone, TrendingUp, Gift, Crown, Target } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Motorista = () => {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    veiculo: ""
  });
  const { toast } = useToast();

  const handleCadastro = () => {
    if (formData.nome && formData.telefone && formData.email) {
      toast({
        title: "Cadastro enviado!",
        description: "Entraremos em contato em breve para finalizar seu cadastro como Motorista Fundador!",
      });
      setFormData({ nome: "", telefone: "", email: "", veiculo: "" });
    }
  };

  const benefits = [
    {
      icon: DollarSign,
      title: "Apenas 10% de Comissão",
      description: "A menor taxa do mercado! Você fica com 90% do valor de cada corrida.",
      highlight: "90% para você!"
    },
    {
      icon: Trophy,
      title: "LevaUp Club Pro",
      description: "Gamificação com missões diárias, conquistas e vouchers de crédito de taxas.",
      highlight: "Ganhe mais fazendo missões!"
    },
    {
      icon: Users,
      title: "Suporte Local",
      description: "Ponto de apoio físico em Paraíso e canais exclusivos para motoristas.",
      highlight: "Suporte que funciona!"
    },
    {
      icon: TrendingUp,
      title: "Transparência Total",
      description: "Veja exatamente quanto você ganhou, suas estatísticas e histórico completo.",
      highlight: "Sem pegadinhas!"
    }
  ];

  const programaFundadores = [
    {
      icon: Crown,
      title: "Apenas 20 Vagas",
      description: "Exclusividade total para os primeiros motoristas de Paraíso",
      detail: "Seja um dos pioneiros"
    },
    {
      icon: DollarSign,
      title: "8% nos Primeiros 2 Meses",
      description: "Taxa ainda menor durante o período de lançamento",
      detail: "Você fica com 92%!"
    },
    {
      icon: Gift,
      title: "Kit Boas-Vindas",
      description: "Adesivos, suporte para celular e brindes exclusivos",
      detail: "Tudo grátis!"
    },
    {
      icon: Target,
      title: "Sorteio Mensal",
      description: "Concorra a prêmios exclusivos todo mês",
      detail: "Prêmios incríveis!"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            LevaUp Motorista: <br />
            <span className="text-accent-glow">Pise no Acelerador</span> de Lucros!
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Chega de taxas abusivas e falta de suporte. Em Paraíso do Tocantins, 
            seus ganhos como motorista vão para o próximo nível.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" variant="hero" className="text-lg px-8 py-4">
              <Crown className="mr-2 h-5 w-5" />
              Quero Ser Motorista Fundador
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-secondary">
              Saiba Mais
            </Button>
          </div>

          {/* Earnings Highlight */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
            <DollarSign className="h-8 w-8 text-accent-glow mx-auto mb-3" />
            <h3 className="text-xl font-bold mb-2">Seus Ganhos em Primeiro Lugar</h3>
            <p className="text-white/90">
              Com apenas <strong>10% de comissão</strong>, você fica com <strong>R$ 90</strong> 
              de uma corrida de R$ 100. Isso é justiça!
            </p>
          </div>
        </div>
      </section>

      {/* Problems Motoristas Enfrentam */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Cansado de <span className="text-destructive">Trabalhar para os Outros</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Sabemos como é frustrante pagar taxas altas, não ter suporte e trabalhar sem transparência. 
              Chegou a hora da mudança.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-card rounded-2xl shadow-card">
              <div className="bg-destructive/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-destructive">Taxas Abusivas</h3>
              <p className="text-muted-foreground">20%, 25% ou até 30% de comissão</p>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-secondary font-semibold text-lg">✓ Apenas 10% no LevaUp</p>
              </div>
            </div>

            <div className="text-center p-6 bg-card rounded-2xl shadow-card">
              <div className="bg-destructive/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-destructive">Suporte Inexistente</h3>
              <p className="text-muted-foreground">Quando precisa, ninguém resolve</p>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-secondary font-semibold text-lg">✓ Suporte Local Real</p>
              </div>
            </div>

            <div className="text-center p-6 bg-card rounded-2xl shadow-card">
              <div className="bg-destructive/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-destructive">Falta de Transparência</h3>
              <p className="text-muted-foreground">Não sabe quanto realmente ganha</p>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-secondary font-semibold text-lg">✓ Transparência Total</p>
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
              Por Que o <span className="bg-gradient-secondary bg-clip-text text-transparent">LevaUp</span> é Diferente?
            </h2>
            <p className="text-xl text-muted-foreground">
              Criado por quem entende as necessidades dos motoristas de Paraíso
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="shadow-card hover:shadow-primary transition-all duration-300 hover:scale-105 bg-gradient-card relative overflow-hidden">
                <div className="absolute top-2 right-2 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {benefit.highlight}
                </div>
                <CardHeader>
                  <div className="bg-gradient-secondary w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programa Motoristas Fundadores */}
      <section className="py-16 bg-gradient-to-br from-accent/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Crown className="h-16 w-16 text-accent mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Programa <span className="text-accent">Motoristas Fundadores</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              Seja um dos 20 pioneiros do LevaUp em Paraíso e tenha benefícios exclusivos
            </p>
            <div className="bg-card rounded-2xl p-6 max-w-md mx-auto shadow-card">
              <p className="text-2xl font-bold text-destructive mb-2">RESTAM APENAS</p>
              <p className="text-4xl font-bold text-accent">12 VAGAS</p>
              <p className="text-sm text-muted-foreground mt-2">Das 20 vagas iniciais</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programaFundadores.map((item, index) => (
              <div key={index} className="text-center p-6 bg-card rounded-2xl shadow-card hover:shadow-primary transition-all duration-300">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{item.description}</p>
                <p className="text-accent font-semibold">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cadastro Motorista */}
      <section className="py-16 bg-gradient-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Acelerar Seus Lucros?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Cadastre-se agora no Programa Motoristas Fundadores e seja um dos pioneiros do LevaUp em Paraíso!
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
            <div className="space-y-4">
              <Input
                type="text"
                placeholder="Seu nome completo"
                value={formData.nome}
                onChange={(e) => setFormData({...formData, nome: e.target.value})}
                className="bg-white text-foreground border-0"
              />
              <Input
                type="tel"
                placeholder="Seu WhatsApp"
                value={formData.telefone}
                onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                className="bg-white text-foreground border-0"
              />
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="bg-white text-foreground border-0"
              />
              <Input
                type="text"
                placeholder="Tipo de veículo (Carro/Moto)"
                value={formData.veiculo}
                onChange={(e) => setFormData({...formData, veiculo: e.target.value})}
                className="bg-white text-foreground border-0"
              />
              <Button 
                onClick={handleCadastro}
                size="lg" 
                variant="hero" 
                className="w-full text-lg"
              >
                <Crown className="mr-2 h-5 w-5" />
                Quero Ser Motorista Fundador
              </Button>
            </div>
            <p className="text-sm text-white/70 mt-4">
              * Entraremos em contato em até 24 horas para finalizar seu cadastro
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Motorista;