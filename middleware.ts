import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Permitir acesso à página "em breve"
  if (pathname === '/em-breve') {
    return NextResponse.next()
  }

  // Permitir acesso a arquivos estáticos
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.includes('.') // arquivos com extensão (imagens, vídeos, etc)
  ) {
    return NextResponse.next()
  }

  // Redirecionar todas as outras rotas para /em-breve
  return NextResponse.redirect(new URL('/em-breve', request.url))
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}

