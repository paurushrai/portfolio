// Framework-agnostic locale config shared by middleware, layout, sitemap, and
// client components. Keep this free of "use client" and of next/* imports so it
// can run in the middleware (edge) runtime and on the server.

export const LOCALES = [
	"en",
	"de",
	"fr",
	"es",
	"ja",
	"zh",
	"pt",
	"hi",
	"ko",
	"it",
	"ru",
	"tr",
] as const;

export type AppLocale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: AppLocale = "en";

export const SITE_URL = "https://paurushrai.in";

export function isLocale(value: string): value is AppLocale {
	return (LOCALES as readonly string[]).includes(value);
}

/**
 * Build a URL path for a locale. The default locale stays unprefixed
 * (`/about`), every other locale is prefixed (`/de/about`).
 */
export function localizedPath(path: string, locale: AppLocale): string {
	const normalized = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
	if (locale === DEFAULT_LOCALE) return normalized || "/";
	return `/${locale}${normalized}`;
}

/**
 * Metadata `alternates` for a path: locale-aware canonical + hreflang languages
 * (including `x-default`). Use in each route's generateMetadata.
 */
export function alternatesFor(path: string, locale: AppLocale) {
	const languages: Record<string, string> = {
		"x-default": `${SITE_URL}${localizedPath(path, DEFAULT_LOCALE)}`,
	};
	for (const l of LOCALES) {
		languages[l] = `${SITE_URL}${localizedPath(path, l)}`;
	}
	return { canonical: `${SITE_URL}${localizedPath(path, locale)}`, languages };
}

/**
 * Strip a leading locale segment from a pathname, returning the path as seen by
 * the default (unprefixed) locale. `/de/about` -> `/about`, `/about` -> `/about`.
 */
export function stripLocale(pathname: string): string {
	const segments = pathname.split("/");
	if (segments[1] && isLocale(segments[1])) {
		const rest = `/${segments.slice(2).join("/")}`;
		return rest === "/" ? "/" : rest.replace(/\/$/, "");
	}
	return pathname;
}
