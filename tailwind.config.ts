import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'brandColor': '#00DF5E',
				'brandBorder': '#EAB308',
				'textGray3': '#9ca3af',
				'dark5': '#121212',
				'dark10': '#171717',
				'dark20': '#202121',
				'dark30': '#333333',
				'dark40': '#828282',
				'dark50': '#F9F9F9',
				'textGray': '#C4C4C4',
			},
		},
	},
	plugins: [],
};
export default config;
