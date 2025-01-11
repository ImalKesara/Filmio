import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async () => ({
	meta: {
		title: 'Contact',
		description: 'Find me on socials'
	}
});
