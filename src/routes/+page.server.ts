import type { PageServerLoad } from './$types';
import { getAllUpcomingMovies, type UpcomingMoviesResponse } from '$lib/movie';

export const load: PageServerLoad = async ({ fetch, locals }): Promise<UpcomingMoviesResponse> => {
	console.log(locals);

	const upcomingMovies = await getAllUpcomingMovies(fetch, locals);

	// https://claude.ai/chat/f5d38b31-1a1a-416d-b0c9-9c1738bc0348 -> plain object

	return { upcomingMovies };
};
