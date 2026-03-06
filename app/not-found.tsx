"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Search, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-levaup-white">
      <div className="container px-4">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* 404 Number */}
          <div className="relative">
            <h1 className="text-[150px] md:text-[200px] font-bold text-levaup-orange/20 leading-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl">🚗💨</div>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Ops! Página Não Encontrada
            </h2>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              Parece que você pegou uma rota errada. Essa página não existe ou foi movida para outro endereço.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/">
                <Home className="h-5 w-5 mr-2" />
                Voltar para Home
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="text-lg px-8">
              <Link href="/faq">
                <Search className="h-5 w-5 mr-2" />
                Buscar Ajuda
              </Link>
            </Button>
          </div>

          {/* Quick Links */}
          <div className="pt-8 border-t">
            <p className="text-sm text-muted-foreground mb-4">
              Páginas Populares:
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link 
                href="/passageiro" 
                className="text-sm text-levaup-orange hover:underline"
              >
                Para Passageiros
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link 
                href="/motorista" 
                className="text-sm text-levaup-orange hover:underline"
              >
                Para Motoristas
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link 
                href="/precos" 
                className="text-sm text-levaup-orange hover:underline"
              >
                Preços
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link 
                href="/contato" 
                className="text-sm text-levaup-orange hover:underline"
              >
                Contato
              </Link>
            </div>
          </div>

          {/* Back Button */}
          <button 
            onClick={() => window.history.back()}
            className="text-sm text-muted-foreground hover:text-levaup-orange transition-colors inline-flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para página anterior
          </button>
        </div>
      </div>
    </div>
  )
}

