import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Car, Users } from "lucide-react";
import levaupLogo from "@/assets/levaup-logo-official.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Para Passageiros', href: '/passageiro' },
    { name: 'Para Motoristas', href: '/motorista' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Contato', href: '/contato' },
    { name: 'FAQ', href: '/faq' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-card">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img 
              src={levaupLogo} 
              alt="LevaUp" 
              className="h-7 sm:h-8 w-auto transition-all duration-300 group-hover:scale-110"
            />
            <span className="text-lg sm:text-xl font-bold text-foreground hidden xs:block">
              LevaUp
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-all duration-300 hover:text-primary ${
                  isActive(item.href)
                    ? 'text-primary border-b-2 border-primary pb-1'
                    : 'text-foreground hover:scale-105'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center space-x-2">
            <Button variant="outline" size="sm" asChild className="hidden md:flex">
              <Link to="/passageiro">
                <Users className="h-4 w-4 mr-1" />
                Passageiro
              </Link>
            </Button>
            <Button variant="motorista" size="sm" asChild>
              <Link to="/motorista">
                <Car className="h-4 w-4 mr-1" />
                Motorista
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="sm:hidden">
            <div className="px-3 pt-3 pb-4 space-y-2 bg-card border rounded-lg mt-2 shadow-card">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-primary bg-primary/10'
                      : 'text-foreground hover:text-primary hover:bg-accent'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-2 px-3 py-2">
                <Button variant="outline" size="sm" asChild>
                  <Link to="/passageiro" onClick={() => setIsOpen(false)}>
                    <Users className="h-4 w-4 mr-1" />
                    Sou Passageiro
                  </Link>
                </Button>
                <Button variant="motorista" size="sm" asChild>
                  <Link to="/motorista" onClick={() => setIsOpen(false)}>
                    <Car className="h-4 w-4 mr-1" />
                    Sou Motorista
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;