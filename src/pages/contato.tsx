import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Instagram, Facebook, Send, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: ""
  });
  const { toast } = useToast();

  const handleSubmit = () => {
    if (formData.nome && formData.email && formData.mensagem) {
      toast({
        title: "Mensagem enviada!",
        description: "Retornaremos seu contato em até 24 horas. Obrigado!",
      });
      setFormData({ nome: "", email: "", assunto: "", mensagem: "" });
    }
  };

  const canaisContato = [
    {
      icon: Mail,
      title: "E-mail Geral",
      info: "contato@levaup.com.br",
      description: "Para dúvidas gerais e informações"
    },
    {
      icon: Mail,
      title: "E-mail Motoristas",
      info: "motoristas@levaup.com.br",
      description: "Suporte específico para motoristas"
    },
    {
      icon: Mail,
      title: "E-mail Passageiros",
      info: "passageiros@levaup.com.br",
      description: "Suporte específico para passageiros"
    },
    {
      icon: Mail,
      title: "Imprensa & Parcerias",
      info: "imprensa@levaup.com.br",
      description: "Para parcerias e relacionamento com a mídia"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Entre em <span className="bg-gradient-hero bg-clip-text text-transparent">Contato</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
            Estamos aqui para tirar suas dúvidas e ouvir suas sugestões. 
            Fale conosco através dos canais abaixo!
          </p>
        </div>
      </section>

      {/* Contato Principal */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulário */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Envie sua Mensagem</h2>
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Send className="h-5 w-5 mr-2" />
                    Formulário de Contato
                  </CardTitle>
                  <CardDescription>
                    Preencha os campos abaixo e responderemos o mais breve possível
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Seu nome completo"
                      value={formData.nome}
                      onChange={(e) => setFormData({...formData, nome: e.target.value})}
                    />
                    <Input
                      type="email"
                      placeholder="Seu e-mail"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <Input
                    placeholder="Assunto (opcional)"
                    value={formData.assunto}
                    onChange={(e) => setFormData({...formData, assunto: e.target.value})}
                  />
                  <Textarea
                    placeholder="Sua mensagem..."
                    rows={6}
                    value={formData.mensagem}
                    onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
                  />
                  <Button 
                    onClick={handleSubmit}
                    size="lg" 
                    variant="cta" 
                    className="w-full"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Enviar Mensagem
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Informações de Contato */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Informações de Contato</h2>
              
              <div className="space-y-6 mb-8">
                <Card className="shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Telefone</h3>
                        <p className="text-muted-foreground">Em breve disponível</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Localização</h3>
                        <p className="text-muted-foreground">Paraíso do Tocantins, TO</p>
                        <p className="text-sm text-muted-foreground">Ponto de Apoio: Em breve divulgado</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center">
                        <MessageCircle className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Horário de Atendimento</h3>
                        <p className="text-muted-foreground">Segunda a Sexta: 8h às 18h</p>
                        <p className="text-sm text-muted-foreground">Sábado: 8h às 12h</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Redes Sociais */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Siga-nos nas Redes Sociais</h3>
                <div className="flex space-x-4">
                  <Button variant="outline" size="lg" className="flex-1">
                    <Instagram className="h-5 w-5 mr-2" />
                    Instagram
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1">
                    <Facebook className="h-5 w-5 mr-2" />
                    Facebook
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Canais de E-mail */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Canais de <span className="text-primary">E-mail</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Escolha o canal mais adequado para seu tipo de consulta
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {canaisContato.map((canal, index) => (
              <Card key={index} className="shadow-card hover:shadow-primary transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-primary w-12 h-12 rounded-lg flex items-center justify-center">
                      <canal.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle>{canal.title}</CardTitle>
                      <p className="text-primary font-medium">{canal.info}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{canal.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ainda tem Dúvidas?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Nossa equipe está pronta para ajudar você! Entre em contato e descubra 
            como o LevaUp vai transformar sua experiência de mobilidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="hero" asChild>
              <a href="mailto:contato@levaup.com.br">
                <Mail className="mr-2 h-5 w-5" />
                Enviar E-mail Agora
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp (Em Breve)
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contato;