"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-levaup-white">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-preto.png"
            alt="LevaUp"
            width={120}
            height={40}
            priority
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/passageiro" className="text-sm font-medium hover:text-levaup-orange transition-colors">
            Para Passageiros
          </Link>
          <Link href="/motorista" className="text-sm font-medium hover:text-levaup-orange transition-colors">
            Para Motoristas
          </Link>
          <Link href="/sobre" className="text-sm font-medium hover:text-levaup-orange transition-colors">
            Sobre Nós
          </Link>
          <Link href="/financeiro" className="text-sm font-medium hover:text-levaup-orange transition-colors">
            Financeiro
          </Link>
          <Link href="/faq" className="text-sm font-medium hover:text-levaup-orange transition-colors">
            FAQ
          </Link>
          <Link href="/contato" className="text-sm font-medium hover:text-levaup-orange transition-colors">
            Contato
          </Link>
          <a href="https://www.parceiros.levaup.com.br" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-levaup-orange transition-colors">
            Parceiros & Investidores
          </a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button asChild variant="outline">
            <Link href="/passageiro">Sou Passageiro</Link>
          </Button>
          <Button asChild>
            <Link href="/motorista">Sou Motorista</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen ? "true" : "false"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-levaup-white">
          <nav className="container py-4 space-y-4">
            <Link
              href="/passageiro"
              className="block text-sm font-medium hover:text-levaup-orange transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Para Passageiros
            </Link>
            <Link
              href="/motorista"
              className="block text-sm font-medium hover:text-levaup-orange transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Para Motoristas
            </Link>
            <Link
              href="/sobre"
              className="block text-sm font-medium hover:text-levaup-orange transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre Nós
            </Link>
            <Link
              href="/financeiro"
              className="block text-sm font-medium hover:text-levaup-orange transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Financeiro
            </Link>
            <Link
              href="/faq"
              className="block text-sm font-medium hover:text-levaup-orange transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/contato"
              className="block text-sm font-medium hover:text-levaup-orange transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
            <a
              href="https://www.parceiros.levaup.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm font-medium hover:text-levaup-orange transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Parceiros & Investidores
            </a>
            <div className="flex flex-col space-y-2 pt-4">
              <Button asChild variant="outline">
                <Link href="/passageiro" onClick={() => setIsMenuOpen(false)}>Sou Passageiro</Link>
              </Button>
              <Button asChild>
                <Link href="/motorista" onClick={() => setIsMenuOpen(false)}>Sou Motorista</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
