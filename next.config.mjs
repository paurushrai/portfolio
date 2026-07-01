import { withContentlayer } from "next-contentlayer2";

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	output: "standalone",
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
