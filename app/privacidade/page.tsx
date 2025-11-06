import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Privacidade | LevaUp - LGPD",
  description: "Política de Privacidade do LevaUp conforme LGPD. Saiba como coletamos, usamos e protegemos seus dados pessoais. Transparência total na proteção de informações.",
  keywords: [
    "política de privacidade LevaUp",
    "LGPD LevaUp",
    "proteção de dados LevaUp",
    "privacidade",
    "dados pessoais"
  ],
  openGraph: {
    title: "Política de Privacidade | LevaUp",
    description: "Conheça nossa política de privacidade conforme LGPD.",
    url: "https://levaup.com.br/privacidade",
    type: "website",
  },
  alternates: {
    canonical: "https://levaup.com.br/privacidade",
  },
  robots: {
    index: true,
    follow: false,
  },
}

export default function PrivacidadePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-background">
        <div className="container text-center space-y-8">
          <Badge variant="secondary" className="w-fit mx-auto">
            Política de Privacidade
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Política de
            <span className="text-primary block">Privacidade</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Entenda como coletamos, usamos e protegemos suas informações pessoais
          </p>
        </div>
      </section>

      {/* Conteúdo da Política */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <Card className="p-8">
            <CardHeader>
              <CardTitle className="text-2xl">Política de Privacidade do LevaUp</CardTitle>
              <p className="text-muted-foreground">Última atualização: 01/08/2025</p>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">1. Introdução</h2>
                <p className="text-muted-foreground leading-relaxed">
                  A BrandUp Hub, responsável pela plataforma LevaUp, está comprometida em proteger sua privacidade e
                  dados pessoais. Esta política explica como coletamos, usamos, armazenamos e protegemos suas
                  informações de acordo com a Lei Geral de Proteção de Dados (LGPD) e outras legislações aplicáveis.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">2. Informações que Coletamos</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Coletamos diferentes tipos de informações para fornecer e melhorar nossos serviços:
                </p>

                <h3 className="text-lg font-medium mb-3">2.1 Informações Pessoais</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                  <li>Nome completo, e-mail, telefone</li>
                  <li>Documentos de identificação (CPF, RG, CNH para motoristas)</li>
                  <li>Informações de pagamento</li>
                  <li>Foto do perfil</li>
                </ul>

                <h3 className="text-lg font-medium mb-3">2.2 Informações de Localização</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                  <li>Localização em tempo real durante o uso do app</li>
                  <li>Histórico de localizações de origem e destino</li>
                  <li>Rotas percorridas</li>
                </ul>

                <h3 className="text-lg font-medium mb-3">2.3 Informações de Uso</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Histórico de corridas</li>
                  <li>Preferências de uso</li>
                  <li>Avaliações e comentários</li>
                  <li>Dados de interação com o aplicativo</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">3. Como Usamos suas Informações</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">Utilizamos suas informações para:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Fornecer e operar nossos serviços de transporte</li>
                  <li>Conectar passageiros e motoristas</li>
                  <li>Processar pagamentos e transações</li>
                  <li>Garantir a segurança de usuários e motoristas</li>
                  <li>Melhorar nossos serviços e experiência do usuário</li>
                  <li>Enviar comunicações importantes sobre o serviço</li>
                  <li>Cumprir obrigações legais e regulamentares</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">4. Base Legal para Processamento</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Processamos seus dados pessoais com base em:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>
                    <strong>Execução de contrato:</strong> Para fornecer os serviços solicitados
                  </li>
                  <li>
                    <strong>Consentimento:</strong> Para marketing e comunicações promocionais
                  </li>
                  <li>
                    <strong>Interesse legítimo:</strong> Para melhorar serviços e segurança
                  </li>
                  <li>
                    <strong>Obrigação legal:</strong> Para cumprir requisitos legais
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">5. Compartilhamento de Informações</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Podemos compartilhar suas informações nas seguintes situações:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Com motoristas parceiros (informações necessárias para a corrida)</li>
                  <li>Com prestadores de serviços terceirizados (processamento de pagamentos)</li>
                  <li>Para cumprir obrigações legais ou ordens judiciais</li>
                  <li>Em caso de fusão, aquisição ou venda de ativos</li>
                  <li>Para proteger direitos, propriedade ou segurança</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">6. Segurança dos Dados</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Implementamos medidas técnicas e organizacionais para proteger seus dados:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Criptografia de dados em trânsito e em repouso</li>
                  <li>Controles de acesso rigorosos</li>
                  <li>Monitoramento contínuo de segurança</li>
                  <li>Treinamento regular da equipe</li>
                  <li>Auditorias de segurança periódicas</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">7. Retenção de Dados</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades descritas nesta
                  política, atender requisitos legais ou resolver disputas. Dados de localização são mantidos por
                  período limitado para fins de segurança e melhoria do serviço.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">8. Seus Direitos</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  De acordo com a LGPD, você tem os seguintes direitos:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Confirmação da existência de tratamento de dados</li>
                  <li>Acesso aos seus dados pessoais</li>
                  <li>Correção de dados incompletos, inexatos ou desatualizados</li>
                  <li>Anonimização, bloqueio ou eliminação de dados</li>
                  <li>Portabilidade dos dados</li>
                  <li>Eliminação dos dados tratados com consentimento</li>
                  <li>Revogação do consentimento</li>
                  <li>Oposição ao tratamento em casos específicos</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">9. Cookies e Tecnologias Similares</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Utilizamos cookies e tecnologias similares para melhorar sua experiência, personalizar conteúdo,
                  analisar o uso da plataforma e fornecer recursos de segurança. Você pode gerenciar suas preferências
                  de cookies através das configurações do seu navegador.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">10. Menores de Idade</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nossos serviços são destinados a pessoas com 18 anos ou mais. Não coletamos intencionalmente dados de
                  menores de 18 anos. Se tomarmos conhecimento de que coletamos dados de um menor, tomaremos medidas
                  para excluir essas informações.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">11. Transferência Internacional</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Seus dados são processados principalmente no Brasil. Caso seja necessário transferir dados para outros
                  países, garantiremos que sejam adotadas medidas adequadas de proteção conforme exigido pela legislação
                  brasileira.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">12. Alterações nesta Política</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Podemos atualizar esta política periodicamente. Notificaremos sobre mudanças significativas através do
                  aplicativo, e-mail ou outros meios apropriados. A versão mais atual estará sempre disponível em nosso
                  site.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">13. Encarregado de Dados (DPO)</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Designamos um Encarregado de Proteção de Dados para atender suas solicitações e esclarecer dúvidas
                  sobre o tratamento de dados pessoais. Entre em contato através do e-mail: dpo@levaup.com.br
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">14. Contato</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Para exercer seus direitos, fazer reclamações ou esclarecer dúvidas sobre esta política, entre em
                  contato conosco:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>E-mail: privacidade@levaup.com.br</li>
                  <li>E-mail do DPO: dpo@levaup.com.br</li>
                  <li>Formulário de contato em nosso site</li>
                  <li>Ponto de apoio em Paraíso do Tocantins (endereço a ser divulgado)</li>
                </ul>
              </div>

              <div className="border-t pt-6">
                <p className="text-sm text-muted-foreground">
                  <strong>BrandUp Hub</strong>
                  <br />
                  CNPJ: [A ser definido]
                  <br />
                  Paraíso do Tocantins - TO
                  <br />
                  E-mail: contatolevaup@gmail.com
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
