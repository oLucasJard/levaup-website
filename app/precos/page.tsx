import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { SEOBreadcrumb } from "@/components/seo-breadcrumb"
import { 
  DollarSign, 
  MapPin, 
  Clock, 
  Bike,
  Car,
  TrendingUp,
  Moon,
  Tag,
  CreditCard,
  Smartphone,
  Wallet,
  RefreshCw,
  AlertCircle,
  CheckCircle,
  XCircle
} from "lucide-react"

export default function PrecosPage() {
  return (
    <>
      <SEOBreadcrumb items={[
        { name: 'Home', url: '/' },
        { name: 'Política de Preços', url: '/precos' }
      ]} />
      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="py-16 bg-muted/40">
          <div className="container text-center space-y-6">
            <Badge variant="secondary" className="w-fit mx-auto bg-levaup-green/20 text-levaup-green">
              Política de Preços
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              💰 Política de
              <span className="text-levaup-green block">Preços</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Documento Oficial de Tarifação e Cobrança
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="font-semibold">Versão:</span> 1.0.0
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">Data:</span> 05 de Janeiro de 2025
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span className="font-semibold">Região:</span> Paraíso do Tocantins, TO
              </div>
            </div>
          </div>
        </section>

        {/* Visão Geral */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">🎯 Visão Geral</h2>
              <p className="text-lg text-muted-foreground mb-6">
                O <strong>LevaUp</strong> opera com um sistema de precificação <strong>transparente</strong>, 
                <strong> justo</strong> e <strong>competitivo</strong>, focado em atender a região de 
                <strong> Paraíso do Tocantins, TO</strong>.
              </p>

              <h3 className="text-xl font-semibold mb-4">Princípios da Nossa Precificação:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 bg-levaup-green/10 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-levaup-green mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Transparência Total</p>
                    <p className="text-sm text-muted-foreground">Cliente vê o preço EXATO antes de confirmar</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-levaup-green/10 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-levaup-green mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Sem Surpresas</p>
                    <p className="text-sm text-muted-foreground">Preço fixo arredondado (não há variação após confirmação)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-levaup-green/10 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-levaup-green mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Preço Justo</p>
                    <p className="text-sm text-muted-foreground">Baseado em distância real e tempo estimado</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-levaup-green/10 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-levaup-green mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Descontos Claros</p>
                    <p className="text-sm text-muted-foreground">Cupons aplicados mostram economia em destaque</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Estrutura de Preços */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">🏗️ Estrutura de Preços</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Todo preço de corrida no LevaUp é composto por <strong>3 componentes principais</strong>:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="text-center p-6">
                  <CardContent className="space-y-4">
                    <div className="w-16 h-16 bg-levaup-petrol/20 rounded-full flex items-center justify-center mx-auto">
                      <DollarSign className="h-8 w-8 text-levaup-petrol" />
                    </div>
                    <h3 className="font-semibold text-lg">1. Tarifa Base</h3>
                    <p className="text-sm text-muted-foreground">
                      Valor fixo cobrado ao iniciar qualquer corrida (Bandeirada)
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center p-6">
                  <CardContent className="space-y-4">
                    <div className="w-16 h-16 bg-levaup-green/20 rounded-full flex items-center justify-center mx-auto">
                      <MapPin className="h-8 w-8 text-levaup-green" />
                    </div>
                    <h3 className="font-semibold text-lg">2. Custo por Distância</h3>
                    <p className="text-sm text-muted-foreground">
                      Valor multiplicado pelos quilômetros percorridos na rota
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center p-6">
                  <CardContent className="space-y-4">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                      <Clock className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-lg">3. Custo por Tempo</h3>
                    <p className="text-sm text-muted-foreground">
                      Valor multiplicado pelos minutos estimados da corrida
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Alert className="bg-levaup-petrol/10 border-levaup-petrol/30">
                <AlertCircle className="h-4 w-4 text-levaup-petrol" />
                <AlertDescription className="text-levaup-petrol">
                  <p className="font-semibold mb-2">Fórmula de Cálculo:</p>
                  <code className="text-sm bg-white px-3 py-2 rounded block">
                    Preço Base = Tarifa Base + (Distância × Tarifa/km) + (Tempo × Tarifa/min)
                  </code>
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </section>

        {/* Tarifas por Veículo */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">🚗 Tarifas por Veículo</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Moto */}
                <Card className="border-purple-200">
                  <CardHeader className="bg-purple-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                          <Bike className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-2xl">MOTO 🏍️</CardTitle>
                      </div>
                      <Badge className="bg-purple-600">Mais rápido</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center border-b pb-3">
                        <span className="font-semibold">Bandeirada</span>
                        <span className="text-xl font-bold text-purple-600">R$ 2,00</span>
                      </div>
                      <div className="flex justify-between items-center border-b pb-3">
                        <span className="font-semibold">Por Quilômetro</span>
                        <span className="text-xl font-bold text-purple-600">R$ 0,80</span>
                      </div>
                      <div className="flex justify-between items-center border-b pb-3">
                        <span className="font-semibold">Por Minuto</span>
                        <span className="text-xl font-bold text-purple-600">R$ 0,15</span>
                      </div>
                      <div className="flex justify-between items-center bg-purple-100 p-3 rounded-lg">
                        <span className="font-bold">Valor Mínimo</span>
                        <span className="text-xl font-bold text-purple-600">R$ 6,00</span>
                      </div>
                    </div>

                    <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                      <p className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-levaup-green" />
                        Mais rápido em trânsito
                      </p>
                      <p className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-levaup-green" />
                        Ideal para distâncias curtas (até 10km)
                      </p>
                      <p className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-levaup-green" />
                        Tempo de espera: média 3 minutos
                      </p>
                      <p className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-levaup-green" />
                        Capacidade: 1 passageiro + bagagem pequena
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Carro */}
                <Card className="border-levaup-petrol/30">
                  <CardHeader className="bg-levaup-petrol/10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-levaup-petrol rounded-lg flex items-center justify-center">
                          <Car className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-2xl">CARRO 🚙</CardTitle>
                      </div>
                      <Badge className="bg-levaup-petrol">Mais conforto</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center border-b pb-3">
                        <span className="font-semibold">Bandeirada</span>
                        <span className="text-xl font-bold text-levaup-petrol">R$ 3,00</span>
                      </div>
                      <div className="flex justify-between items-center border-b pb-3">
                        <span className="font-semibold">Por Quilômetro</span>
                        <span className="text-xl font-bold text-levaup-petrol">R$ 1,40</span>
                      </div>
                      <div className="flex justify-between items-center border-b pb-3">
                        <span className="font-semibold">Por Minuto</span>
                        <span className="text-xl font-bold text-levaup-petrol">R$ 0,25</span>
                      </div>
                      <div className="flex justify-between items-center bg-levaup-petrol/20 p-3 rounded-lg">
                        <span className="font-bold">Valor Mínimo</span>
                        <span className="text-xl font-bold text-levaup-petrol">R$ 8,00</span>
                      </div>
                    </div>

                    <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                      <p className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-levaup-green" />
                        Mais confortável e seguro
                      </p>
                      <p className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-levaup-green" />
                        Ideal para distâncias médias/longas (5-50km)
                      </p>
                      <p className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-levaup-green" />
                        Tempo de espera: média 5 minutos
                      </p>
                      <p className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-levaup-green" />
                        Capacidade: Até 4 passageiros + mala grande
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Multiplicadores Dinâmicos */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">📊 Multiplicadores Dinâmicos</h2>
              
              <div className="space-y-6">
                <Card className="border-orange-200">
                  <CardHeader className="bg-orange-50">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="h-6 w-6 text-orange-600" />
                      <CardTitle>🌅 Horário de Pico (+20%)</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <p className="font-semibold mb-2">Multiplicador: <span className="text-orange-600">1.2×</span></p>
                        <p className="text-sm text-muted-foreground mb-4">
                          <strong>Horários:</strong>
                        </p>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-orange-600" />
                            🌄 Manhã: 07:00 - 09:00
                          </li>
                          <li className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-orange-600" />
                            🌆 Tarde: 17:00 - 19:00
                          </li>
                        </ul>
                      </div>
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <p className="text-sm font-semibold mb-2">Motivo:</p>
                        <p className="text-sm text-muted-foreground mb-3">
                          Maior demanda nos horários de entrada/saída do trabalho
                        </p>
                        <p className="text-sm font-semibold text-orange-600">
                          Exemplo: R$ 10,00 → R$ 12,00
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-indigo-200">
                  <CardHeader className="bg-indigo-50">
                    <div className="flex items-center gap-3">
                      <Moon className="h-6 w-6 text-indigo-600" />
                      <CardTitle>🌙 Tarifa Noturna (+30%)</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <p className="font-semibold mb-2">Multiplicador: <span className="text-indigo-600">1.3×</span></p>
                        <p className="text-sm text-muted-foreground mb-4">
                          <strong>Horários:</strong> 22:00 - 06:00
                        </p>
                      </div>
                      <div className="bg-indigo-50 p-4 rounded-lg">
                        <p className="text-sm font-semibold mb-2">Motivo:</p>
                        <p className="text-sm text-muted-foreground mb-3">
                          Menor disponibilidade de motoristas no período noturno
                        </p>
                        <p className="text-sm font-semibold text-indigo-600">
                          Exemplo: R$ 10,00 → R$ 13,00
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Alert className="bg-yellow-50 border-yellow-200">
                  <AlertCircle className="h-4 w-4 text-yellow-600" />
                  <AlertDescription className="text-yellow-900">
                    <p className="font-semibold mb-2">⚠️ Observações Importantes:</p>
                    <ul className="text-sm space-y-1 ml-4 list-disc">
                      <li>Multiplicadores <strong>NÃO são cumulativos</strong></li>
                      <li>O maior multiplicador prevalece</li>
                      <li>Multiplicador é exibido <strong>ANTES</strong> do usuário confirmar</li>
                      <li>Badge laranja indica quando um multiplicador está ativo</li>
                    </ul>
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          </div>
        </section>

        {/* Sistema de Cupons */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Sistema de Cupons e Descontos</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="border-levaup-green/30">
                  <CardHeader className="bg-levaup-green/10">
                    <div className="flex items-center gap-3">
                      <Tag className="h-5 w-5 text-levaup-green" />
                      <CardTitle>Cupom de Valor Fixo</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="bg-levaup-green/20 p-4 rounded-lg mb-4">
                      <p className="font-bold text-levaup-green mb-2">Exemplo: PRIMEIRA</p>
                      <ul className="text-sm space-y-1">
                        <li>Desconto: <strong>R$ 2,00</strong></li>
                        <li>Válido para: Primeira corrida</li>
                        <li>Valor mínimo: R$ 0,00</li>
                      </ul>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Desconto de um valor fixo em reais, independente do valor da corrida.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-purple-200">
                  <CardHeader className="bg-purple-50">
                    <div className="flex items-center gap-3">
                      <Tag className="h-5 w-5 text-purple-600" />
                      <CardTitle>Cupom Percentual</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="bg-purple-100 p-4 rounded-lg mb-4">
                      <p className="font-bold text-purple-800 mb-2">Exemplo: DESCONTO20</p>
                      <ul className="text-sm space-y-1">
                        <li>Desconto: <strong>20%</strong> do valor</li>
                        <li>Valor mínimo: R$ 15,00</li>
                        <li>Desconto máximo: R$ 10,00</li>
                      </ul>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Desconto percentual sobre o valor total da corrida, com limite.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-levaup-green/10 p-6 rounded-lg">
                  <h3 className="font-semibold text-levaup-green mb-3 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    ✅ Permitido
                  </h3>
                  <ul className="text-sm space-y-2 text-levaup-green">
                    <li>• 1 cupom por corrida</li>
                    <li>• Cupom pode ser removido antes de confirmar</li>
                    <li>• Desconto aparece em verde no card</li>
                    <li>• Preço original fica riscado</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
                    <XCircle className="h-5 w-5" />
                    ❌ Não Permitido
                  </h3>
                  <ul className="text-sm space-y-2 text-red-900">
                    <li>• Múltiplos cupons na mesma corrida</li>
                    <li>• Cupom após corrida iniciada</li>
                    <li>• Cupom expirado</li>
                    <li>• Cupom já utilizado (se uso único)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Formas de Pagamento */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">💳 Formas de Pagamento</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="border-purple-200">
                  <CardHeader>
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-2">
                      <Wallet className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle>Carteira LevaUp</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Badge className="mb-3 bg-levaup-green/20 text-levaup-green">Recomendado</Badge>
                    <ul className="text-sm space-y-2 text-muted-foreground">
                      <li>⚡ Pagamento instantâneo</li>
                      <li>Vantagens em recargas</li>
                      <li>💰 Sem taxas</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 bg-levaup-petrol/20 rounded-lg flex items-center justify-center mb-2">
                      <CreditCard className="h-6 w-6 text-levaup-petrol" />
                    </div>
                    <CardTitle>Cartão Crédito/Débito</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      <strong>Bandeiras:</strong> Visa, Master, Elo, Amex
                    </p>
                    <ul className="text-sm space-y-2 text-muted-foreground">
                      <li>💳 Cobrança após confirmação</li>
                      <li>🚫 Sem parcelamento</li>
                      <li>✅ Taxa zero</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 bg-levaup-green/20 rounded-lg flex items-center justify-center mb-2">
                      <Smartphone className="h-6 w-6 text-levaup-green" />
                    </div>
                    <CardTitle>PIX</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-2 text-muted-foreground">
                      <li>📱 QR Code gerado no app</li>
                      <li>⏱️ 2 minutos para pagar</li>
                      <li>⚡ Instantâneo</li>
                      <li>🕐 Disponível 24/7</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="md:col-span-2 lg:col-span-1">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-2">
                      <DollarSign className="h-6 w-6 text-gray-600" />
                    </div>
                    <CardTitle>Dinheiro</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-2 text-muted-foreground">
                      <li>💵 Direto ao motorista</li>
                      <li>🔄 Troco até R$ 50,00</li>
                      <li>⚠️ Evite notas de R$ 100+</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Exemplos Práticos */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">💡 Exemplos Práticos</h2>

              <div className="space-y-6">
                {/* Exemplo 1 */}
                <Card className="border-purple-200">
                  <CardHeader className="bg-purple-50">
                    <CardTitle>Exemplo 1: Corrida Curta de Moto (Horário Normal)</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <p className="font-semibold mb-3">Cenário:</p>
                        <ul className="text-sm space-y-2">
                          <li>• Veículo: 🏍️ Moto</li>
                          <li>• Distância: 3,5 km</li>
                          <li>• Tempo: 8 minutos</li>
                          <li>• Horário: 14:00 (normal)</li>
                          <li>• Cupom: Nenhum</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
                        <p>Tarifa Base: <span className="float-right">R$ 2,00</span></p>
                        <p>Por Distância: <span className="float-right">R$ 2,80</span></p>
                        <p className="text-xs text-muted-foreground">(3,5 km × R$ 0,80)</p>
                        <p>Por Tempo: <span className="float-right">R$ 1,20</span></p>
                        <p className="text-xs text-muted-foreground">(8 min × R$ 0,15)</p>
                        <hr className="my-3 border-dashed" />
                        <p>Subtotal: <span className="float-right">R$ 6,00</span></p>
                        <p>Multiplicador: <span className="float-right">1.0×</span></p>
                        <hr className="my-3 border-dashed" />
                        <p className="font-bold text-lg text-purple-600">
                          Total: <span className="float-right">R$ 6,00</span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Exemplo 2 */}
                <Card className="border-levaup-petrol/30">
                  <CardHeader className="bg-levaup-petrol/10">
                    <CardTitle>Exemplo 2: Corrida Média de Carro (Horário de Pico)</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <p className="font-semibold mb-3">Cenário:</p>
                        <ul className="text-sm space-y-2">
                          <li>• Veículo: 🚙 Carro</li>
                          <li>• Distância: 12,3 km</li>
                          <li>• Tempo: 18 minutos</li>
                          <li>• Horário: 18:00 (pico) 🔶</li>
                          <li>• Cupom: Nenhum</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
                        <p>Tarifa Base: <span className="float-right">R$ 3,00</span></p>
                        <p>Por Distância: <span className="float-right">R$ 17,22</span></p>
                        <p className="text-xs text-muted-foreground">(12,3 km × R$ 1,40)</p>
                        <p>Por Tempo: <span className="float-right">R$ 4,50</span></p>
                        <p className="text-xs text-muted-foreground">(18 min × R$ 0,25)</p>
                        <hr className="my-3 border-dashed" />
                        <p>Subtotal: <span className="float-right">R$ 24,72</span></p>
                        <p>Multiplicador: <span className="float-right text-orange-600">1.2×</span></p>
                        <hr className="my-3 border-dashed" />
                        <p className="font-bold text-lg text-levaup-petrol">
                          Total: <span className="float-right">R$ 29,50</span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Exemplo 3 */}
                <Card className="border-levaup-green/30">
                  <CardHeader className="bg-levaup-green/10">
                    <CardTitle>Exemplo 3: Corrida Noturna com Cupom</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <p className="font-semibold mb-3">Cenário:</p>
                        <ul className="text-sm space-y-2">
                          <li>• Veículo: 🏍️ Moto</li>
                          <li>• Distância: 8,2 km</li>
                          <li>• Tempo: 15 minutos</li>
                          <li>• Horário: 23:30 (noturno) 🌙</li>
                          <li>• Cupom: DESCONTO20 (20%)</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
                        <p>Subtotal: <span className="float-right">R$ 10,81</span></p>
                        <p>Multiplicador: <span className="float-right text-indigo-600">1.3×</span></p>
                        <p>Total: <span className="float-right">R$ 14,00</span></p>
                        <hr className="my-3 border-dashed" />
                        <p className="text-levaup-green">Desconto (20%): <span className="float-right">-R$ 2,80</span></p>
                        <hr className="my-3 border-dashed" />
                        <p className="line-through text-gray-400">R$ 14,00</p>
                        <p className="font-bold text-lg text-levaup-green">
                          Final: <span className="float-right">R$ 11,00</span>
                        </p>
                        <p className="text-levaup-green text-xs mt-2">💚 Economia: R$ 3,00</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Política de Reembolso */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">🔄 Política de Reembolso</h2>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Cancelamento pelo Passageiro</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-levaup-green/10 p-4 rounded-lg">
                      <p className="font-semibold text-levaup-green mb-2 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5" />
                        ✅ Reembolso Total (100%)
                      </p>
                      <ul className="text-sm space-y-1 ml-7">
                        <li>• Cancelamento ANTES de motorista aceitar</li>
                        <li>• Problema técnico do app</li>
                        <li>• Motorista não chega em 15 minutos</li>
                      </ul>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="font-semibold text-yellow-800 mb-2 flex items-center gap-2">
                        <AlertCircle className="h-5 w-5" />
                        ⚠️ Reembolso Parcial (50%)
                      </p>
                      <ul className="text-sm space-y-1 ml-7">
                        <li>• Cancelamento APÓS motorista aceitar</li>
                        <li>• Taxa de cancelamento: R$ 3,00</li>
                      </ul>
                    </div>

                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                        <XCircle className="h-5 w-5" />
                        ❌ Sem Reembolso (0%)
                      </p>
                      <ul className="text-sm space-y-1 ml-7">
                        <li>• Motorista já chegou ao local</li>
                        <li>• Passageiro não comparece em 5 minutos</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Alert className="bg-levaup-petrol/10 border-levaup-petrol/30">
                  <RefreshCw className="h-4 w-4 text-levaup-petrol" />
                  <AlertDescription className="text-levaup-petrol">
                    <p className="font-semibold mb-2">Como Solicitar Reembolso:</p>
                    <ol className="text-sm space-y-1 ml-4 list-decimal">
                      <li>Acesse <strong>Minha Conta</strong> → <strong>Corridas</strong></li>
                      <li>Selecione a corrida</li>
                      <li>Toque em <strong>Reportar Problema</strong></li>
                      <li>Escolha o motivo</li>
                      <li>Aguarde análise (até 48h)</li>
                    </ol>
                    <p className="text-sm mt-3">
                      <strong>Prazo de Reembolso:</strong> Carteira LevaUp (Imediato) • PIX (2 dias) • Cartão (7 dias)
                    </p>
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          </div>
        </section>

        {/* Limites e Restrições */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">🚫 Limites e Restrições</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="text-center p-6">
                  <CardContent className="space-y-3">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                      <MapPin className="h-8 w-8 text-red-600" />
                    </div>
                    <h3 className="font-semibold">Distância Máxima</h3>
                    <p className="text-3xl font-bold text-red-600">300 km</p>
                    <p className="text-sm text-muted-foreground">
                      Foco em mobilidade urbana e regional
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center p-6">
                  <CardContent className="space-y-3">
                    <div className="w-16 h-16 bg-levaup-petrol/20 rounded-full flex items-center justify-center mx-auto">
                      <MapPin className="h-8 w-8 text-levaup-petrol" />
                    </div>
                    <h3 className="font-semibold">Área de Operação</h3>
                    <p className="text-3xl font-bold text-levaup-petrol">50 km</p>
                    <p className="text-sm text-muted-foreground">
                      Raio do centro de Paraíso/TO
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center p-6">
                  <CardContent className="space-y-3">
                    <div className="w-16 h-16 bg-levaup-green/20 rounded-full flex items-center justify-center mx-auto">
                      <Clock className="h-8 w-8 text-levaup-green" />
                    </div>
                    <h3 className="font-semibold">Horário de Operação</h3>
                    <p className="text-3xl font-bold text-levaup-green">24/7</p>
                    <p className="text-sm text-muted-foreground">
                      Sempre disponível
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Suporte e Termos Legais */}
        <section className="py-16 bg-levaup-orange text-levaup-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl font-bold">📞 Suporte e Informações</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <p className="font-semibold mb-2">📧 E-mail</p>
                  <p className="text-sm">suporte@levaup.com.br</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <p className="font-semibold mb-2">📱 WhatsApp</p>
                  <p className="text-sm">(63) 99999-9999</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <p className="font-semibold mb-2">🕐 Horário</p>
                  <p className="text-sm">24/7 Disponível</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-left">
                <h3 className="font-semibold text-lg mb-4">📄 Termos Legais</h3>
                <ul className="text-sm space-y-2 opacity-90">
                  <li>• Esta política de preços está sujeita a alterações</li>
                  <li>• Usuários serão notificados com 7 dias de antecedência sobre mudanças</li>
                  <li>• Preços válidos apenas para região de Paraíso do Tocantins, TO</li>
                  <li>• Valores podem variar em datas comemorativas (comunicado com antecedência)</li>
                </ul>
              </div>

              <div className="text-sm opacity-75">
                <p>Última atualização: 05/01/2025</p>
                <p>Versão do documento: 1.0.0</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

