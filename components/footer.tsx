import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo-preto.png"
                alt="LevaUp"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground">
              A nova era da mobilidade urbana em Paraíso do Tocantins. Conectando pessoas com segurança, eficiência e
              justiça.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4">
            <h3 className="font-semibold">Links Rápidos</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/passageiro" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Para Passageiros
              </Link>
              <Link href="/motorista" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Para Motoristas
              </Link>
              <Link href="/sobre" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Sobre Nós
              </Link>
              <Link href="/parceiros" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Parceiros
              </Link>
              <Link href="/precos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Preços
              </Link>
              <Link href="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                FAQ
              </Link>
            </nav>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contato</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span>contatolevaup@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>Em breve</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Paraíso do Tocantins</span>
              </div>
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="space-y-4">
            <h3 className="font-semibold">Siga-nos</h3>
            <div className="flex space-x-4">
              <Link 
                href="https://www.instagram.com/levaup.to/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram do LevaUp"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link 
                href="https://www.facebook.com/share/1Eud8vrfDK/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook do LevaUp"
              >
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} LevaUp - BrandUp Hub. Todos os direitos reservados.
          </p>
          <nav className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/termos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Termos de Serviço
            </Link>
            <Link href="/privacidade" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Política de Privacidade
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
