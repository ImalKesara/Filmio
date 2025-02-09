// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	interface Document {
		startViewTransition?(callback: () => Promise<void>): void;
	}
	interface Window {
		toggleTheme?(): void;
	}
	namespace App {
		// interface Error {}
		interface Locals {
			API_KEY: string;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
