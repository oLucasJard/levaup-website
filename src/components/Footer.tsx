import { Link } from "react-router-dom";
import { Car, Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-foreground to-foreground/90 text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-hero p-2 rounded-lg">
                <Car className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">LevaUp</span>
            </div>
            <p className="text-background/80 text-sm">
              A nova era da mobilidade urbana em Paraíso do Tocantins. 
              Conectando pessoas com segurança, eficiência e justiça.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/passageiro" className="text-background/80 hover:text-background transition-colors">
                  Para Passageiros
                </Link>
              </li>
              <li>
                <Link to="/motorista" className="text-background/80 hover:text-background transition-colors">
                  Para Motoristas
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-background/80 hover:text-background transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-background/80 hover:text-background transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-background/80">contato@levaup.com.br</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-background/80">Em breve</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-background/80">Paraíso, TO</span>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-background/10 hover:bg-background/20 p-2 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-background/10 hover:bg-background/20 p-2 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <hr className="my-8 border-background/20" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-background/60">
          <p>&copy; 2025 LevaUp - BrandUp Hub. Todos os direitos reservados.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/termos" className="hover:text-background transition-colors">
              Termos de Serviço
            </Link>
            <Link to="/privacidade" className="hover:text-background transition-colors">
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;