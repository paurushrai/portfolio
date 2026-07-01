const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./mdx-components.tsx",
		"content/**/*.mdx",
	],

	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						"code::before": {
							content: '""',
						},
						"code::after": {
							content: '""',
						},
					},
				},
				quoteless: {
					css: {
						"blockquote p:first-of-type::before": { content: "none" },
						"blockquote p:first-of-type::after": { content: "none" },
					},
				},
			},
			fontFamily: {
				sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
				display: ["var(--font-calsans)"],
			},
			// Semantic, theme-driven accent color. Channels live in global.css (:root).
			// `<alpha-value>` lets Tailwind opacity modifiers (e.g. accent-500/40) work.
			colors: {
				accent: {
					50: "rgb(var(--accent-50) / <alpha-value>)",
					100: "rgb(var(--accent-100) / <alpha-value>)",
					200: "rgb(var(--accent-200) / <alpha-value>)",
					300: "rgb(var(--accent-300) / <alpha-value>)",
					400: "rgb(var(--accent-400) / <alpha-value>)",
					500: "rgb(var(--accent-500) / <alpha-value>)",
					600: "rgb(var(--accent-600) / <alpha-value>)",
					700: "rgb(var(--accent-700) / <alpha-value>)",
					800: "rgb(var(--accent-800) / <alpha-value>)",
					900: "rgb(var(--accent-900) / <alpha-value>)",
					950: "rgb(var(--accent-950) / <alpha-value>)",
					DEFAULT: "rgb(var(--accent-500) / <alpha-value>)",
				},
			},
			backgroundImage: {
				"gradient-radial":
					"radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-stops))",
			},
			animation: {
				"fade-in": "fade-in 3s ease-in-out forwards",
				title: "title 3s ease-out forwards",
				"fade-left": "fade-left 3s ease-in-out forwards",
				"fade-right": "fade-right 3s ease-in-out forwards",
			},
			keyframes: {
				"fade-in": {
					"0%": {
						opacity: "0%",
					},
					"75%": {
						opacity: "0%",
					},
					"100%": {
						opacity: "100%",
					},
				},
				"fade-left": {
					"0%": {
						transform: "translateX(100%)",
						opacity: "0%",
					},

					"30%": {
						transform: "translateX(0%)",
						opacity: "100%",
					},
					"100%": {
						opacity: "0%",
					},
				},
				"fade-right": {
					"0%": {
						transform: "translateX(-100%)",
						opacity: "0%",
					},

					"30%": {
						transform: "translateX(0%)",
						opacity: "100%",
					},
					"100%": {
						opacity: "0%",
					},
				},
				title: {
					"0%": {
						transform: "scale(0.95)",
						opacity: "0",
					},
					"25%": {
						transform: "scale(0.95)",
						opacity: "0%",
					},
					"100%": {
						transform: "scale(1)",
						opacity: "100%",
					},
				},
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
