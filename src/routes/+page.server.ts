import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, locals }) => {
	console.log(locals);

	const upcomingMovies = await getAllUpcomingMovies(fetch, locals);

	// https://claude.ai/chat/f5d38b31-1a1a-416d-b0c9-9c1738bc0348 -> plain object

	return { upcomingMovies };
};

const getAllUpcomingMovies = async (fetch, locals) => {
	try {
		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
				Authorization: `Bearer ${locals.API_KEY}`
			}
		};

		const response = await fetch(
			`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1}`,
			options
		);

		if (!response.ok) {
			console.log('something wrong with API');
		}

		const resData = await response.json();
		return resData['results'];
	} catch (error) {
		console.log(error);
		throw new Error('Something went wrong');
		return [];
	} finally {
		console.log('Operation is successfully');
	}
};
