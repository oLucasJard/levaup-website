import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Clock, Instagram, Facebook, MessageCircle } from "lucide-react"

export default function ContatoPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-background">
        <div className="container text-center space-y-8">
          <Badge variant="secondary" className="w-fit mx-auto">
            Contato
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Fale
            <span className="text-primary block">Conosco</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos aqui para ajudar! Entre em contato conosco através dos nossos canais oficiais
          </p>
        </div>
      </section>

      {/* Informações de Contato */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">E-mail Geral</h3>
                <p className="text-sm text-muted-foreground">contato@levaup.com.br</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto">
                  <MessageCircle className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold">Motoristas</h3>
                <p className="text-sm text-muted-foreground">motoristas@levaup.com.br</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
                  <MessageCircle className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold">Passageiros</h3>
                <p className="text-sm text-muted-foreground">passageiros@levaup.com.br</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto">
                  <MessageCircle className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold">Imprensa & Parcerias</h3>
                <p className="text-sm text-muted-foreground">imprensa@levaup.com.br</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulário de Contato */}
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-2xl">Envie sua Mensagem</CardTitle>
                <p className="text-muted-foreground">Preencha o formulário abaixo e entraremos em contato em breve</p>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Nome Completo</label>
                      <Input placeholder="Seu nome completo" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">E-mail</label>
                      <Input type="email" placeholder="seu@email.com" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Telefone (Opcional)</label>
                    <Input placeholder="(63) 99999-9999" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Assunto</label>
                    <Input placeholder="Sobre o que você gostaria de falar?" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Mensagem</label>
                    <Textarea placeholder="Descreva sua dúvida, sugestão ou comentário..." rows={5} />
                  </div>
                  <Button type="submit" className="w-full">
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Informações Adicionais */}
            <div className="space-y-6">
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Localização</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Paraíso do Tocantins - TO
                    <br />
                    <span className="text-sm">Endereço do ponto de apoio será divulgado em breve</span>
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>Telefone</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Em breve
                    <br />
                    <span className="text-sm">Número de telefone será disponibilizado em breve</span>
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>Horário de Atendimento</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Segunda a Sexta: 8h às 18h</p>
                    <p>Sábado: 8h às 12h</p>
                    <p>Domingo: Fechado</p>
                    <p className="text-sm text-primary">*Suporte de emergência 24h através do app</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle>Redes Sociais</CardTitle>
                  <p className="text-muted-foreground text-sm">Siga-nos para ficar por dentro das novidades</p>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm" className="flex items-center space-x-2 bg-transparent">
                      <Instagram className="h-4 w-4" />
                      <span>Instagram</span>
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center space-x-2 bg-transparent">
                      <Facebook className="h-4 w-4" />
                      <span>Facebook</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Rápido */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Dúvidas Frequentes</h2>
            <p className="text-lg text-muted-foreground">Respostas rápidas para as perguntas mais comuns</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-lg">Quando o app estará disponível?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Estamos finalizando os últimos detalhes. O lançamento está previsto para breve. Cadastre-se para ser
                  notificado!
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-lg">Como me tornar motorista?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Acesse nossa página "Para Motoristas" e preencha o formulário de interesse. Nossa equipe entrará em
                  contato.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-lg">Qual a taxa para motoristas?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Apenas 10% de comissão! Para motoristas fundadores, apenas 8% nos primeiros 2 meses.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-lg">Onde fica o ponto de apoio?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  O endereço será divulgado em breve. Será localizado em ponto estratégico de Paraíso do Tocantins.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              Ver Todas as Perguntas Frequentes
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">Ainda tem Dúvidas?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Nossa equipe está pronta para ajudar! Entre em contato conosco através dos canais disponíveis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Enviar E-mail
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Ver FAQ Completo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
