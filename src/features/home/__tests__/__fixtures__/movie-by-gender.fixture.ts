import { TitleMedia, TMDBResponse } from '@/features/home/services/@types/tmdb.types';

export const movieByGenderEmptyData: TMDBResponse<TitleMedia> = {
	results: [],
	page: 0,
	total_pages: 0,
	total_results: 0,
};

export const movieByGenderWithData: TMDBResponse<TitleMedia> = {
	results: [
		{
			id: 1,
			title: 'Movie 1',
			poster_path: '/poster1.jpg',
			backdrop_path: '/backdrop1.jpg',
			vote_average: 7.5,
			release_date: '2021-01-01',
			overview: 'Overview 1',
			adult: false,
			genre_ids: [1, 2],
			original_language: 'en',
			original_title: 'Movie 1',
			popularity: 100,
			video: false,
			vote_count: 100,
		},
	],
	page: 1,
	total_pages: 1,
	total_results: 1,
};
