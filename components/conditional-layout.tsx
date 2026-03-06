"use client"

import { usePathname } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/ui/scroll-to-top"

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isEmBreve = pathname === "/em-breve"

  if (isEmBreve) {
    return <>{children}</>
  }

  return (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[100] -translate-y-[200%] focus:translate-y-0 px-4 py-2 bg-levaup-orange text-levaup-white rounded-md text-sm font-medium outline-none ring-2 ring-ring ring-offset-2 transition-transform"
      >
        Pular para o conteúdo principal
      </a>
      <Header />
      <main id="main-content" className="min-h-screen" role="main">{children}</main>
      <Footer />
      <ScrollToTop />
    </>
  )
}

