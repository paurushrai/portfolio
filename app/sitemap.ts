import type { MetadataRoute } from "next";
import { allProjects } from "contentlayer/generated";
import { DEFAULT_LOCALE, LOCALES, localizedPath } from "./i18n/config";

const BASE_URL = "https://paurushrai.in";

type RouteSpec = {
	path: string;
	changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
	priority: number;
	lastModified?: Date;
};

/** Build a sitemap entry with per-locale hreflang alternates for a route. */
function localizedEntry(spec: RouteSpec): MetadataRoute.Sitemap[number] {
	const languages: Record<string, string> = {};
	for (const locale of LOCALES) {
		languages[locale] = `${BASE_URL}${localizedPath(spec.path, locale)}`;
	}
	return {
		url: `${BASE_URL}${localizedPath(spec.path, DEFAULT_LOCALE)}`,
		lastModified: spec.lastModified ?? new Date(),
		changeFrequency: spec.changeFrequency,
		priority: spec.priority,
		alternates: { languages },
	};
}

export default function sitemap(): MetadataRoute.Sitemap {
	const staticRoutes: RouteSpec[] = [
		{ path: "/", changeFrequency: "monthly", priority: 1 },
		{ path: "/about", changeFrequency: "monthly", priority: 0.8 },
		{ path: "/projects", changeFrequency: "weekly", priority: 0.9 },
		{ path: "/articles", changeFrequency: "weekly", priority: 0.8 },
		{ path: "/services", changeFrequency: "monthly", priority: 0.7 },
		{ path: "/contact", changeFrequency: "yearly", priority: 0.5 },
		{ path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
	];

	const projectRoutes: RouteSpec[] = allProjects
		.filter((p) => p.published && p.locale === DEFAULT_LOCALE)
		.map((p) => ({
			path: `/projects/${p.slug}`,
			changeFrequency: "monthly" as const,
			priority: 0.7,
			lastModified: p.date ? new Date(p.date) : new Date(),
		}));

	return [...staticRoutes, ...projectRoutes].map(localizedEntry);
}
