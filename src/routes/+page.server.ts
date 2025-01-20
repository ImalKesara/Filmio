import type { PageServerLoad } from './$types';
import { getAllUpcomingMovies } from '$lib/movie';

export const load: PageServerLoad = async ({ fetch, locals }) => {
	console.log(locals);

	const upcomingMovies = await getAllUpcomingMovies(fetch, locals);
	const meta = {
		title: 'filmio',
		description: 'Landing page'
	};

	// https://claude.ai/chat/f5d38b31-1a1a-416d-b0c9-9c1738bc0348 -> plain object

	return { upcomingMovies: upcomingMovies, meta: meta };
};
