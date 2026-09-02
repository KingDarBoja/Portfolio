// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
	plugins: ["prettier-plugin-astro"],
	useTabs: true,
	tabWidth: 4,
	printWidth: 100,
	singleQuote: false,
	bracketSameLine: true,
	htmlWhitespaceSensitivity: "ignore",
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
};
