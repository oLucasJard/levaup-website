"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { SEOBreadcrumb } from "@/components/seo-breadcrumb"
import { 
  Handshake, 
  Store, 
  Building2, 
  TrendingUp, 
  Users, 
  Target,
  Gift,
  BarChart3,
  CheckCircle,
  Rocket,
  Smartphone,
  Award,
  Image as ImageIcon,
  Link as LinkIcon,
  Bell,
  Zap
} from "lucide-react"

export default function ParceirosPage() {
  return (
    <>
      <SEOBreadcrumb items={[
        { name: 'Home', url: '/' },
        { name: 'Parceiros', url: '/parceiros' }
      ]} />
      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-purple-50 to-background">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge variant="secondary" className="w-fit bg-purple-100 text-purple-800">
                  Programa de Parceiros Fundadores
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Cresça Junto com
                  <span className="text-purple-600 block">o LevaUp</span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  Não vendemos mídia, <strong>construímos parcerias</strong>. Oferecemos aos negócios de Paraíso 
                  uma oportunidade de baixo custo e alto impacto para crescer com a gente. Somos parceiros da comunidade!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg px-8 bg-purple-600 hover:bg-purple-700">
                    Quero Ser Parceiro
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                    Conheça os Benefícios
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-3xl p-8 shadow-2xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                      <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-purple-600">1000+</p>
                      <p className="text-sm text-muted-foreground">Usuários Ativos</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                      <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-green-600">+50%</p>
                      <p className="text-sm text-muted-foreground">Crescimento/Mês</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                      <Target className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-orange-600">100%</p>
                      <p className="text-sm text-muted-foreground">Local</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                      <Award className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-blue-600">Top 1</p>
                      <p className="text-sm text-muted-foreground">Mobilidade</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filosofia */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-background">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Nossa Filosofia: Parceria, Não Mídia</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Nosso objetivo <strong>não é "vender mídia"</strong>, mas sim <strong className="text-purple-600">"construir parcerias"</strong>. 
                Oferecemos uma oportunidade de <strong>baixo custo e alto impacto</strong> para crescer junto com o LevaUp.
              </p>
              <div className="bg-purple-100 p-6 rounded-xl">
                <p className="text-lg font-semibold text-purple-900">
                  💜 "Somos parceiros da comunidade de Paraíso. Crescemos juntos!"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pacotes de Lançamento */}
        <section className="py-16">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <Badge className="bg-orange-100 text-orange-800 text-sm px-4 py-2">🚀 Fase Beta - Oferta Especial de Lançamento</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Pacotes de Parceria</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Seja um dos primeiros parceiros e garanta condições exclusivas
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Parceiro Fundador */}
              <Card className="p-8 hover:shadow-2xl transition-all border-purple-300">
                <CardHeader className="pb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Award className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-center text-3xl text-purple-600">PARCEIRO FUNDADOR</CardTitle>
                  <p className="text-center text-muted-foreground mt-2">
                    Visibilidade garantida no app
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-purple-50 p-5 rounded-lg border border-purple-200">
                    <p className="font-bold text-purple-900 mb-4 text-lg">📦 O Que Está Incluído:</p>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-base">1 Banner (Formato A - 3:1)</p>
                          <p className="text-sm text-muted-foreground">
                            Exibido em <strong>rotação igualitária</strong> na Tela de Espera do Motorista
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-base">1 Card (Formato B - 16:9)</p>
                          <p className="text-sm text-muted-foreground">
                            Listado na seção <strong>"Parceiros"</strong> do menu principal do app
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-base">Link Direto</p>
                          <p className="text-sm text-muted-foreground">
                            WhatsApp Business ou Instagram do parceiro
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <Alert className="bg-blue-50 border-blue-300">
                    <Handshake className="h-4 w-4 text-blue-600" />
                    <AlertDescription className="text-blue-900 text-sm">
                      <strong>Nosso Compromisso:</strong> Visibilidade constante em um dos momentos de maior atenção do app.
                    </AlertDescription>
                  </Alert>

                  <Button className="w-full bg-purple-600 hover:bg-purple-700 h-12 text-lg shadow-lg">
                    Quero Ser Parceiro Fundador
                  </Button>
                </CardContent>
              </Card>

              {/* Parceiro Destaque */}
              <Card className="p-8 hover:shadow-2xl transition-all border-orange-300 ring-4 ring-orange-200 relative bg-gradient-to-br from-white to-orange-50">
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-600 to-orange-500 text-white px-6 py-2 text-sm shadow-lg">
                  ⚡ VAGAS LIMITADAS
                </Badge>
                <CardHeader className="pb-6 pt-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                    <Rocket className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-center text-3xl text-orange-600">PARCEIRO DESTAQUE</CardTitle>
                  <Alert className="mt-3 bg-orange-100 border-orange-300">
                    <Zap className="h-4 w-4 text-orange-600" />
                    <AlertDescription className="text-orange-900 font-semibold text-center">
                      Máximo de apenas <strong>5 parceiros</strong> para garantir exclusividade!
                    </AlertDescription>
                  </Alert>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-white p-5 rounded-lg border-2 border-orange-200 shadow-inner">
                    <p className="font-bold text-orange-900 mb-4 text-lg">🌟 Tudo do Fundador MAIS:</p>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-base">Frequência de Rotação 3×</p>
                          <p className="text-sm text-muted-foreground">
                            Seu banner aparece com o <strong className="text-orange-600">triplo</strong> de frequência na rotação
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-base">1 Notificação Push Exclusiva/Mês</p>
                          <p className="text-sm text-muted-foreground">
                            Disparamos para <strong className="text-orange-600">toda a base</strong> de usuários com sua oferta especial
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-base">Alcance Máximo</p>
                          <p className="text-sm text-muted-foreground">
                            Exposição premium em todos os usuários do LevaUp
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 h-12 text-lg text-white shadow-xl">
                    Quero Ser Parceiro Destaque
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Exemplo de Push Notification */}
            <div className="mt-12 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-4 text-center">📱 Exemplo de Notificação Push (Parceiro Destaque)</h3>
              <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-white shadow-xl">
                <CardContent className="p-6">
                  <div className="bg-white p-5 rounded-xl border-2 border-orange-300 shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-orange-600 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                        <Store className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-lg mb-1">HOJE: Pizza em Dobro! 🍕</p>
                        <p className="text-sm text-muted-foreground">
                          Na Pizzaria X, parceira LevaUp. Mostre o app e ganhe a promoção!
                        </p>
                        <p className="text-xs text-purple-600 mt-2 font-medium">Toque para saber mais →</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground text-center mt-4">
                    📲 Enviado para <strong>todos os usuários ativos</strong> do LevaUp em Paraíso/TO
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* O Que Você Precisa Enviar */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">📦 Material Necessário para Anunciar</h2>
                <p className="text-lg text-muted-foreground">
                  Veja o que você precisa nos enviar para ativar sua parceria
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6 border-purple-200">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <ImageIcon className="h-6 w-6 text-purple-600" />
                      <CardTitle>Banner Principal (Formato A)</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-900 mb-2">Especificações:</p>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Proporção:</strong> 3:1 (landscape)</li>
                        <li>• <strong>Resolução mínima:</strong> 1200×400px</li>
                        <li>• <strong>Formato:</strong> PNG ou JPG</li>
                        <li>• <strong>Onde aparece:</strong> Tela de Espera</li>
                      </ul>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Usado na rotação de banners durante a espera do motorista
                    </p>
                  </CardContent>
                </Card>

                <Card className="p-6 border-blue-200">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <ImageIcon className="h-6 w-6 text-blue-600" />
                      <CardTitle>Card de Oferta (Formato B)</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-900 mb-2">Especificações:</p>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Proporção:</strong> 16:9 (standard)</li>
                        <li>• <strong>Resolução mínima:</strong> 1920×1080px</li>
                        <li>• <strong>Formato:</strong> PNG ou JPG</li>
                        <li>• <strong>Onde aparece:</strong> Menu Parceiros</li>
                      </ul>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Listado na seção "Parceiros" acessível pelo menu
                    </p>
                  </CardContent>
                </Card>

                <Card className="p-6 border-green-200">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <LinkIcon className="h-6 w-6 text-green-600" />
                      <CardTitle>Link de Destino</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      Para onde os clientes serão direcionados ao clicar:
                    </p>
                    <ul className="text-sm space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        WhatsApp Business
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Instagram da empresa
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Site próprio
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="p-6 border-orange-200 bg-orange-50">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <Bell className="h-6 w-6 text-orange-600" />
                      <CardTitle>Push Mensal</CardTitle>
                    </div>
                    <Badge className="mt-2 bg-orange-600 text-white">Apenas Parceiro Destaque</Badge>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      Material necessário para a notificação:
                    </p>
                    <ul className="text-sm space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Texto da oferta (máx. 100 caracteres)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Imagem para notificação (512×512px)
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Jornada do Parceiro */}
        <section className="py-16 bg-gradient-to-br from-purple-50 to-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">Como Funciona a Parceria</h2>
                <p className="text-lg text-muted-foreground">
                  Processo simples e rápido em 4 passos
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-purple-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                        1
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2">Contato Inicial</h3>
                        <p className="text-muted-foreground text-sm mb-3">
                          Nossa equipe entra em contato via visita presencial, ligação ou WhatsApp para apresentar o programa.
                        </p>
                        <p className="text-sm text-purple-600 font-medium">
                          "Estamos criando um programa de Parceiros Fundadores e gostaríamos que seu negócio fizesse parte!"
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-blue-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                        2
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2">Apresentação e Escolha do Pacote</h3>
                        <p className="text-muted-foreground text-sm">
                          Apresentamos os benefícios de cada pacote (Fundador ou Destaque) e você escolhe o ideal para seu negócio.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-green-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                        3
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2">Envio de Material (Onboarding)</h3>
                        <p className="text-muted-foreground text-sm mb-3">
                          Você nos envia o material criativo:
                        </p>
                        <ul className="text-sm space-y-1 ml-4">
                          <li>• Banner (3:1) e Card (16:9)</li>
                          <li>• Link de destino (WhatsApp/Instagram)</li>
                          <li>• Push mensal (apenas Destaque)</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-white">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                        4
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2">🚀 Ativação e Lançamento</h3>
                        <p className="text-muted-foreground text-sm mb-3">
                          Seu anúncio vai ao ar no app! Começamos a divulgar sua marca para milhares de usuários.
                        </p>
                        <p className="text-sm font-semibold text-orange-600">
                          ⏱️ Prazo de ativação: Até 72 horas após envio do material
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Quem Pode Ser Parceiro */}
        <section className="py-16">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Quem Pode Ser Parceiro?</h2>
              <p className="text-lg text-muted-foreground">
                Estamos abertos a parcerias com diversos tipos de negócios em Paraíso
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                    <Store className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-lg">Restaurantes</h3>
                  <p className="text-sm text-muted-foreground">
                    Pizzarias, lanchonetes, açaíterias, bares
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <Store className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-lg">Comércio Local</h3>
                  <p className="text-sm text-muted-foreground">
                    Lojas, farmácias, supermercados
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <Building2 className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg">Serviços</h3>
                  <p className="text-sm text-muted-foreground">
                    Oficinas, salões, academias
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                    <Handshake className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-lg">E Muito Mais</h3>
                  <p className="text-sm text-muted-foreground">
                    Eventos, hotéis, escolas
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Cases de Sucesso */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Parceiros de Sucesso</h2>
              <p className="text-lg text-muted-foreground">
                Empresas que já fazem parte do ecossistema LevaUp
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto">
                    <Store className="h-8 w-8 text-purple-600" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-lg mb-2">Restaurante Parceiro</h3>
                    <Badge className="mb-3 bg-green-100 text-green-800">+40% vendas</Badge>
                    <p className="text-sm text-muted-foreground italic">
                      "Com a parceria LevaUp, nossas vendas aumentaram 40% no primeiro mês. 
                      Os clientes adoram o cashback em pontos!"
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
                    <Building2 className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-lg mb-2">Empresa Local</h3>
                    <Badge className="mb-3 bg-green-100 text-green-800">R$ 2.500 economia/mês</Badge>
                    <p className="text-sm text-muted-foreground italic">
                      "Reduzimos custos com transporte corporativo e nossos funcionários adoram o benefício!"
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto">
                    <Store className="h-8 w-8 text-orange-600" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-lg mb-2">Farmácia Parceira</h3>
                    <Badge className="mb-3 bg-green-100 text-green-800">+200 clientes novos</Badge>
                    <p className="text-sm text-muted-foreground italic">
                      "A divulgação no app trouxe mais de 200 novos clientes em 30 dias. Parceria excelente!"
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Formulário de Interesse */}
        <section className="py-16 bg-purple-600 text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">Interessado em Ser Parceiro?</h2>
                <p className="text-lg opacity-90">
                  Preencha o formulário abaixo e nossa equipe entrará em contato em até 48 horas
                </p>
              </div>

              <Card className="p-8">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="empresa" className="text-sm font-medium mb-2 block text-foreground">
                        Nome da Empresa *
                      </label>
                      <Input 
                        id="empresa" 
                        placeholder="Razão Social ou Nome Fantasia" 
                        required 
                        className="bg-background"
                      />
                    </div>
                    <div>
                      <label htmlFor="tipo" className="text-sm font-medium mb-2 block text-foreground">
                        Tipo de Negócio *
                      </label>
                      <Input 
                        id="tipo" 
                        placeholder="Ex: Restaurante, Loja, Serviço" 
                        required 
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="responsavel" className="text-sm font-medium mb-2 block text-foreground">
                        Nome do Responsável *
                      </label>
                      <Input 
                        id="responsavel" 
                        placeholder="Seu nome completo" 
                        required 
                        className="bg-background"
                      />
                    </div>
                    <div>
                      <label htmlFor="telefone" className="text-sm font-medium mb-2 block text-foreground">
                        Telefone *
                      </label>
                      <Input 
                        id="telefone" 
                        placeholder="(63) 99999-9999" 
                        required 
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="text-sm font-medium mb-2 block text-foreground">
                      E-mail *
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="contato@suaempresa.com.br" 
                      required 
                      className="bg-background"
                    />
                  </div>

                  <div>
                    <label htmlFor="pacote" className="text-sm font-medium mb-2 block text-foreground">
                      Pacote de Interesse *
                    </label>
                    <select 
                      id="pacote"
                      className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground"
                      required
                    >
                      <option value="">Selecione um pacote</option>
                      <option value="fundador">Parceiro Fundador</option>
                      <option value="destaque">Parceiro Destaque (Vagas Limitadas)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="mensagem" className="text-sm font-medium mb-2 block text-foreground">
                      Mensagem (Opcional)
                    </label>
                    <Textarea 
                      id="mensagem" 
                      placeholder="Conte-nos mais sobre seu negócio e expectativas..." 
                      rows={4} 
                      className="bg-background"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-purple-800 hover:bg-purple-900 text-lg h-14 shadow-xl">
                    Enviar Proposta de Parceria
                  </Button>
                  
                  <p className="text-sm text-center text-purple-100">
                    🤝 Resposta em até 48 horas úteis
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-gradient-to-br from-purple-600 to-purple-700 text-white">
          <div className="container text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Vamos Crescer Juntos?</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Junte-se aos parceiros que já estão transformando seus negócios com o LevaUp. 
              Entre em contato agora e faça parte da comunidade LevaUp!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Falar com Nossa Equipe
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 text-white border-white hover:bg-white hover:text-purple-600"
              >
                Solicitar Proposta
              </Button>
            </div>
            <p className="text-sm opacity-75">
              📧 Ou envie um e-mail para: <strong>imprensa@levaup.com.br</strong>
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
