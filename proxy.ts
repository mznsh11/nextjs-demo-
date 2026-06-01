import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Rename the exported function to 'proxy'
export function proxy(request: NextRequest) {
  const authCookie = request.cookies.get('auth');
  const path = request.nextUrl.pathname;
  
  const isLoginPage = path === '/login';
  const isRegisterPage = path === '/register';

  // Allow access to login or register if not logged in
  if (!authCookie && !isLoginPage && !isRegisterPage) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Redirect logged-in users away from auth pages
  if (authCookie && (isLoginPage || isRegisterPage)) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

// The matcher configuration remains the same
export const config = {
  matcher: ['/books/:path*', '/authors/:path*', '/publishers/:path*', '/login', '/register'],
};