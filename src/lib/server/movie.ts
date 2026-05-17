import { TMDB_API_KEY } from '$env/static/private';

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

export interface Meta {
	title: string;
	description: string;
}

export interface UpcomingMoviesResponse {
	upcomingMovies: Movie[];
	meta: Meta;
}

export const getAllUpcomingMovies = async (pageNumber: number) => {
	try {
		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
				Authorization: `Bearer ${TMDB_API_KEY}`
			}
		};

		// const url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
		const response = await fetch(
			`https://api.themoviedb.org/3/movie/upcoming?page=${pageNumber}`,
			options
		);

		if (!response.ok) {
			console.log('something wrong with API');
		}

		const resData = await response.json();
		return resData;
	} catch (error) {
		console.log(error);
		throw new Error('Something went wrong');
	} finally {
		console.log('Operation is successfully');
	}
};
