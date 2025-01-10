export interface Movie {
	poster_path: string | null; // It might be null if no poster is available
	title: string;
	overview: string;
	release_date: string;
	id: number;
	backdrop_path?: string | null; // Optional, may not be present
	popularity?: number; // Optional
	vote_average?: number; // Optional
	vote_count?: number; // Optional
}

export interface UpcomingMoviesResponse {
	upcomingMovies: Movie[];
}


export const getAllUpcomingMovies = async (
	fetch: typeof globalThis.fetch,
	locals: { API_KEY: string }
) => {
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
