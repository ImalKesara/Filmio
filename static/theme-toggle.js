// johnnyfy sir code
const STORAGE_KEY = 'theme';

// default to dark mode, because **I** like it more :-)
const defaultTheme = 'light';

const getTheme = () => {
	if (typeof localStorage !== 'undefined') {
		if (localStorage.getItem(STORAGE_KEY)) {
			return localStorage.getItem(STORAGE_KEY);
		} else {
			return window.matchMedia('(prefers-colors-scheme:dark)').matches ? 'dark' : 'light';
		}
	}
	return defaultTheme;
};

// window.matchMedia('(prefers-colors-scheme:dark)').matches ? 'dark' : 'light'; -> use when you need to set dark theme default in getTheme()
// 03:52 palina puppers video

const setTheme = (theme) => {
	document.documentElement.dataset.theme = theme;
};

// set early so no page flashes / CSS is made aware
setTheme(getTheme());

const themeObserver = new MutationObserver(() => {
	const nextTheme = document.documentElement.dataset.theme;
	if (nextTheme) {
		localStorage.setItem(STORAGE_KEY, nextTheme);
	}
});
themeObserver.observe(document.documentElement, {
	attributes: true,
	attributeFilter: ['data-theme']
});

const toggleTheme = () => {
	const currentTheme = getTheme();
	const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
	setTheme(nextTheme);
};

console.log('loaded');

window.toggleTheme = toggleTheme;
