import { type NextRequest, NextResponse } from "next/server";
import { DEFAULT_LOCALE, LOCALES, isLocale } from "./app/i18n/config";

const NON_DEFAULT_LOCALES = LOCALES.filter((locale) => locale !== DEFAULT_LOCALE);

// Project slugs renamed after their URLs were already live. Old URLs need a
// permanent redirect to the new slug rather than a 404. Checked here, not in
// next.config's redirects(), because this proxy's rewrite of unprefixed paths
// to /en/... runs first in Next's routing pipeline and would otherwise shadow
// a next.config redirect for the same path (verified: both `next dev` and the
// Netlify deploy 404 on the old slug instead of redirecting when the rule
// lives in next.config alone).
const RENAMED_PROJECT_SLUGS: Record<string, string> = {
	"fuelbuddy-customer-app": "fuelbuddy-india-customer-app",
	"fuelbuddy-franchise": "fuelbuddy-india-franchise",
	"fuelbuddy-driver-app": "fuelbuddy-india-driver-app",
	"fuelbuddy-web": "fuelbuddy-dubai-web",
	"fuelbuddy-wheels": "fuelbuddy-dubai-wheels",
	"fuelbuddy-admin-panel": "fuelbuddy-dubai-admin-panel",
};

function localePrefixOf(pathname: string): string {
	const firstSegment = pathname.split("/")[1];
	return firstSegment && isLocale(firstSegment) && firstSegment !== DEFAULT_LOCALE
		? `/${firstSegment}`
		: "";
}

/**
 * As-needed locale prefixing:
 * - `/de/...`            → served by app/[locale] as-is
 * - `/en` or `/en/...`   → redirected to the canonical unprefixed URL
 * - everything else      → rewritten to `/en/...` internally (URL unchanged)
 */
export function proxy(req: NextRequest): NextResponse {
	const { pathname } = req.nextUrl;

	// Redirect renamed project slugs before anything else runs, preserving
	// whatever locale prefix (if any) the request came in with.
	const prefix = localePrefixOf(pathname);
	const rest = prefix ? pathname.slice(prefix.length) : pathname;
	const renamedMatch = Object.entries(RENAMED_PROJECT_SLUGS).find(
		([oldSlug]) => rest === `/projects/${oldSlug}`,
	);
	if (renamedMatch) {
		const [, newSlug] = renamedMatch;
		const url = req.nextUrl.clone();
		url.pathname = `${prefix}/projects/${newSlug}`;
		return NextResponse.redirect(url, 308);
	}

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
