import { locales } from './navigation';
import { NextRequest } from 'next/server';
import createIntlMiddleware from 'next-intl/middleware';

export async function middleware(request: NextRequest) {
  const handleI18nRouting = createIntlMiddleware({
    locales,
    defaultLocale: 'en',
  });

  const response = handleI18nRouting(request);

  // if (!request.cookies.get("jwt") && !request.url.includes("login"))
  //   return NextResponse.redirect("http://localhost:3001/fr/login");

  return response;
}
export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
