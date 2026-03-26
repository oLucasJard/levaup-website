import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export const metadata: Metadata = {
  title: "Excluir Conta | LevaUp",
  description:
    "Solicitação de exclusão de dados da conta LevaUp. Informe e-mail ou telefone cadastrado e envie sua solicitação.",
  alternates: {
    canonical: "https://www.levaup.com.br/excluir-conta",
  },
}

export default function ExcluirContaPage() {
  return (
    <div className="flex flex-col">
      <section className="py-16 bg-muted/40">
        <div className="container text-center space-y-8">
          <Badge variant="secondary" className="w-fit mx-auto">
            Privacidade e Dados
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Solicitação de exclusão de dados
            <span className="text-levaup-orange block">LevaUP</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Use este formulário para solicitar a exclusão dos seus dados vinculados ao app.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl space-y-8">
          <Card className="p-8">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-2xl">Passo a Passo</CardTitle>
            </CardHeader>
            <CardContent className="px-0 pb-0 space-y-4">
              <ol className="list-decimal list-inside text-muted-foreground space-y-2">
                <li>Informe o e-mail ou telefone cadastrado no app.</li>
                <li>Clique em &quot;Enviar solicitação&quot;.</li>
                <li>Nossa equipe processará a exclusão em até 15 dias.</li>
              </ol>
            </CardContent>
          </Card>

          <Card className="p-8">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-2xl">Enviar solicitação</CardTitle>
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="contato">E-mail ou telefone cadastrado</Label>
                  <Input
                    id="contato"
                    type="text"
                    placeholder="exemplo@email.com ou (63) 99999-9999"
                    required
                  />
                </div>
                <Button type="submit" className="w-full sm:w-auto">
                  Enviar solicitação
                </Button>
                <p className="text-sm text-muted-foreground">
                  Formulário frontend. O envio final da solicitação deve ser integrado ao backend/atendimento.
                </p>
              </form>
            </CardContent>
          </Card>

          <Card className="p-8">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-2xl">O que será excluído</CardTitle>
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <p className="text-muted-foreground leading-relaxed">
                Ao solicitar a exclusão, apagaremos seu nome, histórico de corridas, e-mail e dados de localização.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-2xl">O que será mantido</CardTitle>
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <p className="text-muted-foreground leading-relaxed">
                Mantemos apenas registros fiscais de transações financeiras conforme exigido pela legislação
                brasileira.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

