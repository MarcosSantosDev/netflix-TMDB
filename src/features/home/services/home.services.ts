import { tmdbHttpClient } from '@/services/http';
import { generateQueryParams } from '@/utils/queryParams';

import {
	TMDBResponse,
	Discover,
	Trending,
	MovieList,
	DiscoverByGenre,
	TMDBGenreResponse,
	Genre,
} from './@types/tmdb.types';

const homeService = {
	getGenres: async () => {
		const query = generateQueryParams([{ language: 'pt' }]);
		const response = await tmdbHttpClient.get<TMDBGenreResponse<Genre>>(`/genre/movie/list${query}`);
		return response.data;
	},
	getDiscoverNetflixOriginals: async () => {
		const query = generateQueryParams([
			{
				include_adult: true,
				include_null_first_air_dates: false,
				language: 'pt-BR',
				page: 1,
				sort_by: 'popularity.desc',
				with_networks: 213,
			},
		]);
		const response = await tmdbHttpClient.get<TMDBResponse<Discover>>(`/discover/tv${query}`);
		return response.data;
	},
	getDiscoverMoviesByGenreId: async (genreId: number) => {
		const query = generateQueryParams([
			{
				include_adult: true,
				include_video: false,
				language: 'pt-BR',
				page: 1,
				sort_by: 'popularity.desc',
				with_genres: genreId,
			},
		]);
		const response = await tmdbHttpClient.get<TMDBResponse<DiscoverByGenre>>(`/discover/movie${query}`);
		return response.data;
	},
	getTrending: async () => {
		const query = generateQueryParams([
			{
				language: 'pt-BR',
				page: 1,
			},
		]);
		const response = await tmdbHttpClient.get<TMDBResponse<Trending>>(`/trending/all/week${query}`);
		return response.data;
	},
	getMovieListTopRated: async () => {
		const query = generateQueryParams([
			{
				language: 'pt-BR',
				page: 1,
			},
		]);
		const response = await tmdbHttpClient.get<TMDBResponse<MovieList>>(`/movie/top_rated${query}`);
		return response.data;
	},
};

export default homeService;
