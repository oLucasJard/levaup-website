import { Inter } from "next/font/google"
import "../../globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function EmBreveLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#FF8000" />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}

