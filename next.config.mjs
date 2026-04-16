import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	output: "standalone",
	webpack: (config) => {
		config.infrastructureLogging = {
			level: "error",
		};
		return config;
	},
};

export default withContentlayer(nextConfig);
