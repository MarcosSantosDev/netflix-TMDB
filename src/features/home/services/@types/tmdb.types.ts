export type TMDBGenreResponse<T> = {
	genres: T[];
};

export type Genre = {
	id: number;
	name: string;
};

export type TMDBResponse<T> = {
	page: number;
	results: T[];
	total_pages: number;
	total_results: number;
};

export type Discover = {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: string;
	origin_country: string[];
	original_name: string;
	overview: string;
	popularity: number;
	poster_path: string;
	first_air_date: string;
	name: string;
	vote_average: number;
	vote_count: number;
};

export type DiscoverByGenre = {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
};

export type Trending = {
	backdrop_path: string;
	id: number;
	title: string;
	original_title: string;
	overview: string;
	poster_path: string;
	media_type: string;
	adult: boolean;
	original_language: string;
	genre_ids: number[];
	popularity: number;
	release_date: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
};

export interface MovieList {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}
