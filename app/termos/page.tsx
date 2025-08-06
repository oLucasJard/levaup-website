import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermosPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-background">
        <div className="container text-center space-y-8">
          <Badge variant="secondary" className="w-fit mx-auto">
            Termos de Serviço
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Termos de
            <span className="text-primary block">Serviço</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leia nossos termos de serviço para entender como funciona nossa plataforma e seus direitos como usuário
          </p>
        </div>
      </section>

      {/* Conteúdo dos Termos */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <Card className="p-8">
            <CardHeader>
              <CardTitle className="text-2xl">Termos de Serviço do LevaUp</CardTitle>
              <p className="text-muted-foreground">Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">1. Aceitação dos Termos</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Ao acessar e usar os serviços do LevaUp, operado pela BrandUp Hub, você concorda em cumprir e estar
                  vinculado a estes Termos de Serviço. Se você não concordar com qualquer parte destes termos, não deve
                  usar nossos serviços.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">2. Descrição do Serviço</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  O LevaUp é uma plataforma digital que conecta passageiros a motoristas parceiros para serviços de
                  transporte em Paraíso do Tocantins. Oferecemos duas modalidades:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>LevaUp Carro: Transporte em veículos de passeio</li>
                  <li>LevaUp Moto: Transporte em motocicletas</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">3. Elegibilidade</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Para usar nossos serviços, você deve ter pelo menos 18 anos de idade e capacidade legal para celebrar
                  contratos. Motoristas devem possuir documentação válida e atender aos requisitos específicos da
                  plataforma.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">4. Cadastro e Conta</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">Para utilizar nossos serviços, você deve:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Fornecer informações precisas e atualizadas</li>
                  <li>Manter a confidencialidade de sua conta</li>
                  <li>Notificar-nos imediatamente sobre uso não autorizado</li>
                  <li>Ser responsável por todas as atividades em sua conta</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">5. Uso da Plataforma</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Você concorda em usar a plataforma apenas para fins legais e de acordo com estes termos. É proibido:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Usar a plataforma para atividades ilegais</li>
                  <li>Interferir no funcionamento da plataforma</li>
                  <li>Tentar acessar contas de outros usuários</li>
                  <li>Fornecer informações falsas ou enganosas</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">6. Pagamentos e Tarifas</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Os preços das corridas são calculados com base na distância, tempo e modalidade escolhida. Para
                  motoristas, aplicamos as seguintes comissões:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Comissão padrão: 10% do valor da corrida</li>
                  <li>Motoristas Fundadores: 8% nos primeiros 2 meses</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">7. Cancelamentos</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Corridas podem ser canceladas por passageiros ou motoristas conforme nossas políticas. Cancelamentos
                  tardios podem estar sujeitos a taxas conforme especificado no aplicativo.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">8. Segurança</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Implementamos medidas de segurança incluindo verificação de motoristas, botão de pânico,
                  compartilhamento de viagem e monitoramento em tempo real. No entanto, o uso da plataforma é por sua
                  conta e risco.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">9. Responsabilidades</h2>
                <p className="text-muted-foreground leading-relaxed">
                  O LevaUp atua como intermediário entre passageiros e motoristas. Não somos responsáveis por ações de
                  terceiros, acidentes ou danos que possam ocorrer durante o uso dos serviços.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">10. Propriedade Intelectual</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Todos os direitos de propriedade intelectual relacionados à plataforma LevaUp pertencem à BrandUp Hub.
                  É proibida a reprodução não autorizada de nosso conteúdo.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">11. Modificações dos Termos</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações serão comunicadas
                  através da plataforma e entrarão em vigor após a publicação.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">12. Suspensão e Encerramento</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Podemos suspender ou encerrar contas que violem estes termos ou por outros motivos justificados, com
                  ou sem aviso prévio.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">13. Lei Aplicável</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Estes termos são regidos pelas leis brasileiras. Disputas serão resolvidas nos tribunais competentes
                  de Paraíso do Tocantins.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">14. Contato</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Para dúvidas sobre estes termos, entre em contato conosco através do e-mail contato@levaup.com.br ou
                  visite nossa página de contato.
                </p>
              </div>

              <div className="border-t pt-6">
                <p className="text-sm text-muted-foreground">
                  <strong>BrandUp Hub</strong>
                  <br />
                  Paraíso do Tocantins - TO
                  <br />
                  E-mail: contato@levaup.com.br
                  <br />
                  Site: levaup.com.br
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
