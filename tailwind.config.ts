import typography from '@tailwindcss/typography';
import { fontFamily } from 'tailwindcss/defaultTheme';
import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';
import themes from 'daisyui/src/theming/themes';

const themesOverride = {
	'--rounded-box': 'var(--radius)', // border radius rounded-box utility class, used in card and other large boxes
	'--rounded-btn': 'var(--radius)', // border radius rounded-btn utility class, used in buttons and similar element
	'--rounded-badge': 'var(--radius)', // border radius rounded-badge utility class, used in badges and similar
	'--tab-radius': 'calc(var(--radius) * 2)'
};

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: ['selector', '[data-theme="dark"]'],
	theme: {
		fontFamily: {
			sans: [...fontFamily.sans],
			serif: ['var(--font-serif)', ...fontFamily.serif]
		},

		container: {
			center: true,
			padding: 'var(--padding-inline)'
		},
		extend: {
			boxShadow: {
				'3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)'
			}
		}
	},
	daisyui: {
		// ... mean access all properties
		themes: [
			{ light: { ...themes.lofi, ...themesOverride } },
			{ dark: { ...themes.luxury, ...themesOverride } }
		]
	},

	plugins: [typography, daisyui]
} satisfies Config;
