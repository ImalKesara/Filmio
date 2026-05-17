import type { PageServerLoad } from './$types';
import { getAllUpcomingMovies } from '$lib/server/movie';

export const load: PageServerLoad = async ({ url }) => {
	const pageParams = url.searchParams.get('page');
	const currentPage = pageParams ? parseInt(pageParams) : 1;
	const meta = {
		title: 'filmio',
		description: 'Landing page'
	};

	try {
		const upcomingMovies = await getAllUpcomingMovies(currentPage);
		return { upcomingMovies: upcomingMovies, meta: meta, currentPage: currentPage };
	} catch (e) {
		return {
			upcomingMovies: [],
			meta: { title: 'filmio', description: 'Error fetching movies' },
			currentPage: currentPage
		};
	}

	// https://claude.ai/chat/f5d38b31-1a1a-416d-b0c9-9c1738bc0348 -> plain object
};
