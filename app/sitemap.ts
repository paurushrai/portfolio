import type { MetadataRoute } from "next";
import { allProjects } from "contentlayer/generated";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://paurushrai.in";

	const staticRoutes: MetadataRoute.Sitemap = [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
		},
		{
			url: `${baseUrl}/about`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${baseUrl}/projects`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.9,
		},
		{
			url: `${baseUrl}/articles`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.8,
		},
		{
			url: `${baseUrl}/services`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${baseUrl}/contact`,
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.5,
		},
		{
			url: `${baseUrl}/privacy`,
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.3,
		},
	];

	const projectRoutes: MetadataRoute.Sitemap = allProjects
		.filter((p) => p.published && p.locale === "en")
		.map((p) => ({
			url: `${baseUrl}/projects/${p.slug}`,
			lastModified: p.date ? new Date(p.date) : new Date(),
			changeFrequency: "monthly" as const,
			priority: 0.7,
		}));

	return [...staticRoutes, ...projectRoutes];
}
