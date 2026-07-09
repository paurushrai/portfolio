import { type NextRequest, NextResponse } from "next/server";
import { DEFAULT_LOCALE, LOCALES } from "./app/i18n/config";

const NON_DEFAULT_LOCALES = LOCALES.filter((locale) => locale !== DEFAULT_LOCALE);

/**
 * As-needed locale prefixing:
 * - `/de/...`            → served by app/[locale] as-is
 * - `/en` or `/en/...`   → redirected to the canonical unprefixed URL
 * - everything else      → rewritten to `/en/...` internally (URL unchanged)
 */
export function middleware(req: NextRequest): NextResponse {
	const { pathname } = req.nextUrl;

	// Canonicalize the default locale to its unprefixed form.
	if (pathname === `/${DEFAULT_LOCALE}` || pathname.startsWith(`/${DEFAULT_LOCALE}/`)) {
		const url = req.nextUrl.clone();
		url.pathname = pathname.slice(`/${DEFAULT_LOCALE}`.length) || "/";
		return NextResponse.redirect(url);
	}

	// Non-default locale prefixes map directly onto app/[locale].
	const hasNonDefaultLocale = NON_DEFAULT_LOCALES.some(
		(locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
	);
	if (hasNonDefaultLocale) {
		return NextResponse.next();
	}

	// Unprefixed paths belong to the default locale; rewrite without changing URL.
	const url = req.nextUrl.clone();
	url.pathname = `/${DEFAULT_LOCALE}${pathname === "/" ? "" : pathname}`;
	return NextResponse.rewrite(url);
}

export const config = {
	// Skip API routes, Next internals, the Umami proxy, and any file with an
	// extension (static assets).
	matcher: ["/((?!api|_next/static|_next/image|um/|.*\\.).*)"],
};
