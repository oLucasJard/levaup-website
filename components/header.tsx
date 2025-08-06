"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Car } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Car className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold text-primary">LevaUp</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/passageiro" className="text-sm font-medium hover:text-primary transition-colors">
            Para Passageiros
          </Link>
          <Link href="/motorista" className="text-sm font-medium hover:text-primary transition-colors">
            Para Motoristas
          </Link>
          <Link href="/sobre" className="text-sm font-medium hover:text-primary transition-colors">
            Sobre Nós
          </Link>
          <Link href="/faq" className="text-sm font-medium hover:text-primary transition-colors">
            FAQ
          </Link>
          <Link href="/contato" className="text-sm font-medium hover:text-primary transition-colors">
            Contato
          </Link>
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
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container py-4 space-y-4">
            <Link
              href="/passageiro"
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Para Passageiros
            </Link>
            <Link
              href="/motorista"
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Para Motoristas
            </Link>
            <Link
              href="/sobre"
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre Nós
            </Link>
            <Link
              href="/faq"
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/contato"
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
            <div className="flex flex-col space-y-2 pt-4">
              <Button asChild variant="outline" onClick={() => setIsMenuOpen(false)}>
                <Link href="/passageiro">Sou Passageiro</Link>
              </Button>
              <Button asChild onClick={() => setIsMenuOpen(false)}>
                <Link href="/motorista">Sou Motorista</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
