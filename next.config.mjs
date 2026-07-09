import { withContentlayer } from "next-contentlayer2";

// Hosts the app legitimately talks to. GTM can inject arbitrary tags by design,
// so script-src stays intentionally permissive ('unsafe-inline'); tighten with
// nonces later if the analytics surface shrinks. Umami is same-origin (proxied
// via /um rewrites), so it needs no extra allow-list entry.
const ANALYTICS_HOSTS = [
	"https://www.googletagmanager.com",
	"https://www.google-analytics.com",
	"https://www.clarity.ms",
];

const CONTENT_SECURITY_POLICY = [
	"default-src 'self'",
	`script-src 'self' 'unsafe-inline' 'unsafe-eval' ${ANALYTICS_HOSTS.join(" ")}`,
	"style-src 'self' 'unsafe-inline'",
	"img-src 'self' data: blob: https:",
	"font-src 'self' data:",
	`connect-src 'self' ${ANALYTICS_HOSTS.join(" ")} https://api-gateway.umami.dev`,
	"frame-src 'self' https://www.googletagmanager.com",
	"frame-ancestors 'none'",
	"base-uri 'self'",
	"form-action 'self'",
	"object-src 'none'",
	"upgrade-insecure-requests",
].join("; ");

const SECURITY_HEADERS = [
	{ key: "Content-Security-Policy", value: CONTENT_SECURITY_POLICY },
	{
		key: "Strict-Transport-Security",
		value: "max-age=63072000; includeSubDomains; preload",
	},
	{ key: "X-Frame-Options", value: "DENY" },
	{ key: "X-Content-Type-Options", value: "nosniff" },
	{ key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
	{
		key: "Permissions-Policy",
		value: "camera=(), microphone=(), geolocation=()",
	},
];

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	output: "standalone",
	async headers() {
		return [{ source: "/:path*", headers: SECURITY_HEADERS }];
	},
	async rewrites() {
		return [
			{
				source: "/um/script.js",
				destination: "https://cloud.umami.is/script.js",
			},
			{
				source: "/um/api/send",
				destination: "https://api-gateway.umami.dev/api/send",
			},
		];
	},
	webpack: (config) => {
		config.infrastructureLogging = {
			level: "error",
		};
		return config;
	},
};

export default withContentlayer(nextConfig);
