// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://example.com",
	integrations: [mdx(), sitemap()],
	fonts: [
		{
			provider: fontProviders.local(),
			name: "JetBrainsMono",
			cssVariable: "--font-jetbrainsmono",
			fallbacks: ["monospace"],
			options: {
				variants: [
					{
						src: ["./src/assets/fonts/JetBrainsMono-Regular.woff2"],
						weight: 400,
						style: "normal",
						display: "swap",
					},
					{
						src: ["./src/assets/fonts/JetBrainsMono-Italic.woff2"],
						weight: 400,
						style: "italic",
						display: "swap",
					},
					{
						src: ["./src/assets/fonts/JetBrainsMono-Medium.woff2"],
						weight: 500,
						style: "normal",
						display: "swap",
					},
					{
						src: ["./src/assets/fonts/JetBrainsMono-Bold.woff2"],
						weight: 700,
						style: "normal",
						display: "swap",
					},
				],
			},
		},
		{
			provider: fontProviders.google(),
			name: "Outfit",
			cssVariable: "--font-outfit",
			fallbacks: ["sans-serif"],
			weights: [300, 400, 500, 600, 700],
		},
	],
});
