"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useState } from "react"
import { Loader2, CheckCircle2 } from "lucide-react"

interface CTASectionProps {
  title: string
  description: string
  variant?: "default" | "newsletter"
  primaryButton?: {
    text: string
    href: string
  }
  secondaryButton?: {
    text: string
    href: string
  }
}

export function CTASection({ 
  title, 
  description, 
  variant = "default",
  primaryButton,
  secondaryButton 
}: CTASectionProps) {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error", text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage(null)

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage({ type: "success", text: data.message })
        setEmail("")
      } else {
        setMessage({ type: "error", text: data.error })
      }
    } catch (error) {
      setMessage({ type: "error", text: "Erro ao cadastrar. Tente novamente." })
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <section className="py-20 bg-levaup-orange text-levaup-white relative overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            {title}
          </h2>
          <p className="text-xl md:text-2xl text-levaup-white/90 leading-relaxed max-w-3xl mx-auto">
            {description}
          </p>
          
          {variant === "newsletter" ? (
            <div className="max-w-md mx-auto">
              <form className="flex flex-col sm:flex-row gap-3" onSubmit={handleSubmit}>
                <Input 
                  type="email" 
                  placeholder="Seu melhor e-mail" 
                  className="bg-white text-gray-900 border-0 h-14 text-lg flex-1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  required 
                />
                <Button 
                  type="submit" 
                  size="lg" 
                  variant="secondary"
                  className="h-14 px-8 text-lg font-semibold bg-gray-900 text-white hover:bg-gray-800"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    "Cadastrar"
                  )}
                </Button>
              </form>
              
              {message && (
                <div className={`mt-4 p-3 rounded-lg flex items-center justify-center gap-2 ${
                  message.type === "success" 
                    ? "bg-levaup-green/20 text-levaup-white border border-levaup-green/50" 
                    : "bg-red-500/20 text-red-100 border border-red-400/50"
                }`}>
                  {message.type === "success" && <CheckCircle2 className="h-5 w-5" />}
                  <p className="text-sm font-medium">{message.text}</p>
                </div>
              )}
              
              {!message && (
                <p className="text-sm text-orange-100 mt-4">
                  Seja o primeiro a saber quando lançarmos.
                </p>
              )}
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              {primaryButton && (
                <Button 
                  asChild 
                  size="lg" 
                  variant="secondary"
                  className="h-14 px-10 text-lg font-semibold shadow-xl hover:shadow-2xl"
                >
                  <Link href={primaryButton.href}>{primaryButton.text}</Link>
                </Button>
              )}
              {secondaryButton && (
                <Button 
                  asChild 
                  size="lg" 
                  variant="outline"
                  className="h-14 px-10 text-lg font-semibold border-2 border-levaup-white text-levaup-white hover:bg-levaup-white hover:text-levaup-orange"
                >
                  <Link href={secondaryButton.href}>{secondaryButton.text}</Link>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

