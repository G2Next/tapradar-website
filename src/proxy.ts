import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";

const PUBLIC_PATHS = new Set([
  "/",
  "/fuer-geschaefte",
  "/kontakt",
  "/impressum",
  "/datenschutz",
  "/agb",
  "/widerrufsbelehrung",
]);

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segments = pathname.split("/").filter(Boolean);
  const prefixedLocale = isLocale(segments[0]) ? segments[0] : null;
  const unprefixedPath = prefixedLocale ? `/${segments.slice(1).join("/")}` : pathname;
  const normalizedPath = unprefixedPath || "/";

  if (prefixedLocale === defaultLocale) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = normalizedPath;
    const redirect = NextResponse.redirect(redirectUrl, 308);
    setLocaleCookie(redirect, defaultLocale);
    return redirect;
  }

  if (!prefixedLocale && PUBLIC_PATHS.has(pathname)) {
    const cookieLocale = request.cookies.get("tapradar_locale")?.value;
    if (isLocale(cookieLocale) && cookieLocale !== defaultLocale) {
      const redirectUrl = request.nextUrl.clone();
      redirectUrl.pathname = `/${cookieLocale}${pathname === "/" ? "" : pathname}`;
      return NextResponse.redirect(redirectUrl, 307);
    }
  }

  const locale = prefixedLocale && PUBLIC_PATHS.has(normalizedPath)
    ? prefixedLocale
    : !prefixedLocale && PUBLIC_PATHS.has(pathname)
      ? defaultLocale
      : null;
  const rewriteUrl = prefixedLocale && PUBLIC_PATHS.has(normalizedPath)
    ? new URL(normalizedPath, request.url)
    : undefined;
  const requestHeaders = new Headers(request.headers);
  if (locale) requestHeaders.set("x-tapradar-locale", locale);

  const createResponse = () => rewriteUrl
    ? NextResponse.rewrite(rewriteUrl, { request: { headers: requestHeaders } })
    : NextResponse.next({ request: { headers: requestHeaders } });

  let response = createResponse();
  if (locale) setLocaleCookie(response, locale);

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!supabaseUrl || !supabaseAnonKey) return response;

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll: () => request.cookies.getAll(),
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
        requestHeaders.set("cookie", request.cookies.toString());
        response = createResponse();
        if (locale) setLocaleCookie(response, locale);
        cookiesToSet.forEach(({ name, value, options }) => response.cookies.set(name, value, options));
      },
    },
  });

  await supabase.auth.getUser();
  return response;
}

function setLocaleCookie(response: NextResponse, locale: Locale) {
  response.cookies.set("tapradar_locale", locale, {
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|apple-icon|opengraph-image|robots.txt|sitemap.xml|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
};
