import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async () => ({
	meta: {
		title: 'contact',
		description: 'Find me on socials'
	}
});
