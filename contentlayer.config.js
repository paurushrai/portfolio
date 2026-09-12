import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
	path: {
		type: "string",
		resolve: (doc) => `/${doc._raw.flattenedPath}`,
	},
	// Derive locale from the first folder segment: projects/en/slug → "en"
	locale: {
		type: "string",
		resolve: (doc) => {
			const parts = doc._raw.flattenedPath.split("/");
			// flattenedPath = "projects/en/metanotes" → parts[1] = "en"
			return parts.length >= 3 ? parts[1] : "en";
		},
	},
	// Slug without locale prefix: projects/en/metanotes → "metanotes"
	slug: {
		type: "string",
		resolve: (doc) => {
			const parts = doc._raw.flattenedPath.split("/");
			// Remove the "projects" prefix and locale segment, keep the rest
			return parts.slice(2).join("/");
		},
	},
};

export const Project = defineDocumentType(() => ({
	name: "Project",
	filePathPattern: "./projects/**/*.mdx",
	contentType: "mdx",

	fields: {
		published: {
			type: "boolean",
		},
		title: {
			type: "string",
			required: true,
		},
		description: {
			type: "string",
			required: true,
		},
		date: {
			type: "date",
		},
		url: {
			type: "string",
		},
		repository: {
			type: "string",
		},
		company: {
			type: "string",
		},
		wip: {
			type: "boolean",
		},
		coverImage: {
			type: "string",
		},
	},
	computedFields,
}));

export const Page = defineDocumentType(() => ({
	name: "Page",
	filePathPattern: "pages/**/*.mdx",
	contentType: "mdx",
	fields: {
		title: {
			type: "string",
			required: true,
		},
		description: {
			type: "string",
		},
	},
	computedFields,
}));

const WORDS_PER_MINUTE = 200;

export const Blog = defineDocumentType(() => ({
	name: "Blog",
	filePathPattern: "./blogs/**/*.mdx",
	contentType: "mdx",

	fields: {
		published: {
			type: "boolean",
		},
		title: {
			type: "string",
			required: true,
		},
		description: {
			type: "string",
			required: true,
		},
		date: {
			type: "date",
			required: true,
		},
		coverImage: {
			type: "string",
		},
		tags: {
			type: "list",
			of: { type: "string" },
			default: [],
		},
	},
	computedFields: {
		...computedFields,
		readingTime: {
			type: "number",
			resolve: (doc) => Math.max(1, Math.ceil(doc.body.raw.split(/\s+/).length / WORDS_PER_MINUTE)),
		},
	},
}));

export default makeSource({
	contentDirPath: "./content",
	documentTypes: [Page, Project, Blog],
	mdx: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [
			rehypeSlug,
			[
				rehypePrettyCode,
				{
					theme: "github-dark",
					onVisitLine(node) {
						// Prevent lines from collapsing in `display: grid` mode, and allow empty
						// lines to be copy/pasted
						if (node.children.length === 0) {
							node.children = [{ type: "text", value: " " }];
						}
					},
					onVisitHighlightedLine(node) {
						// className is optional in rehype-pretty-code v0.14; init before pushing.
						node.properties.className ??= [];
						node.properties.className.push("line--highlighted");
					},
					// Renamed from onVisitHighlightedWord in rehype-pretty-code v0.14.
					onVisitHighlightedChars(node) {
						node.properties.className = ["word--highlighted"];
					},
				},
			],
			[
				rehypeAutolinkHeadings,
				{
					properties: {
						className: ["subheading-anchor"],
						ariaLabel: "Link to section",
					},
				},
			],
		],
	},
});
