import typography from '@tailwindcss/typography';
import { fontFamily } from 'tailwindcss/defaultTheme';
import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';
import themes from 'daisyui/src/theming/themes';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			sans: [...fontFamily.sans],
			serif: ['var(--font-serif)', ...fontFamily.serif]
		},

		container: {
			center: true,
			padding: 'var(--padding-inline)'
		},
		extend: {}
	},
	daisyui: {
		themes: [{ light: { ...themes.valentine } }, { dark: { ...themes.aqua } }]
	},

	plugins: [typography, daisyui]
} satisfies Config;
