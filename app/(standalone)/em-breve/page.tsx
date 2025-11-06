import { Metadata } from "next"
import { Rocket } from "lucide-react"

export const metadata: Metadata = {
  title: "Em Breve - LevaUp",
  description: "O futuro da mobilidade urbana em Paraíso do Tocantins está chegando. Cadastre-se e seja um dos primeiros a experimentar o LevaUp.",
  robots: "noindex, nofollow",
}

export default function EmBrevePage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="/logo-animation.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Main Heading */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600/20 border border-orange-600/50 rounded-full backdrop-blur-sm">
              <Rocket className="w-5 h-5 text-orange-500" />
              <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">
                Lançamento em Breve
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              Algo <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Incrível</span>
              <br />
              Está Chegando
            </h1>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Estamos finalizando os últimos detalhes para revolucionar a mobilidade urbana em{" "}
            <span className="text-orange-500 font-semibold">Paraíso do Tocantins</span>.
          </p>

          {/* Features Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-orange-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Corridas Rápidas</h3>
              <p className="text-gray-400 text-sm">Conecte-se com motoristas em segundos</p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-orange-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Preços Justos</h3>
              <p className="text-gray-400 text-sm">Tarifas transparentes e competitivas</p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-orange-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">100% Seguro</h3>
              <p className="text-gray-400 text-sm">Motoristas verificados e rastreamento em tempo real</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-8">
            <a
              href="https://www.instagram.com/levaup.to/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/5 hover:bg-orange-600/20 border border-white/10 hover:border-orange-600/50 rounded-full flex items-center justify-center transition-all duration-300 group"
            >
              <svg className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61571111346768"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/5 hover:bg-orange-600/20 border border-white/10 hover:border-orange-600/50 rounded-full flex items-center justify-center transition-all duration-300 group"
            >
              <svg className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>

          {/* Contact Info */}
          <p className="text-gray-500 text-sm mt-8">
            Dúvidas? Entre em contato:{" "}
            <a href="mailto:contatolevaup@gmail.com" className="text-orange-500 hover:text-orange-400 transition-colors">
              contatolevaup@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
    </div>
  )
}

