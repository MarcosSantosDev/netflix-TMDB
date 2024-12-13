// Base Types
export type TMDBResponse<T> = {
	page: number;
	results: T[];
	total_pages: number;
	total_results: number;
};

export type TMDBGenreResponse<T> = {
	genres: T[];
};

export type Genre = {
	id: number;
	name: string;
};

// Shared Fields
export type BaseMedia = {
	id: number;
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	original_language: string;
	overview: string;
	popularity: number;
	poster_path: string;
	vote_average: number;
	vote_count: number;
};

export type TitleMedia = BaseMedia & {
	original_title: string;
	release_date: string;
	title: string;
	video: boolean;
};

export type NameMedia = BaseMedia & {
	original_name: string;
	first_air_date: string;
	name: string;
	origin_country: string[];
};

// Specific Media Types
export type Discover = NameMedia;

export type DiscoverByGenre = TitleMedia;

export type Trending = TitleMedia & {
	media_type: string;
};

export type MovieList = TitleMedia;

// Detailed Types
export type TVInfo = {
	adult: boolean;
	backdrop_path: string;
	created_by: unknown[];
	episode_run_time: number[];
	first_air_date: string;
	genres: Genre[];
	homepage: string;
	id: number;
	in_production: boolean;
	languages: string[];
	last_air_date: string;
	last_episode_to_air: LastEpisodeToAir;
	name: string;
	next_episode_to_air: unknown;
	networks: Network[];
	number_of_episodes: number;
	number_of_seasons: number;
	origin_country: string[];
	original_language: string;
	original_name: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_companies: ProductionCompany[];
	production_countries: ProductionCountry[];
	seasons: Season[];
	spoken_languages: SpokenLanguage[];
	status: string;
	tagline: string;
	type: string;
	vote_average: number;
	vote_count: number;
};

export type LastEpisodeToAir = {
	id: number;
	name: string;
	overview: string;
	vote_average: number;
	vote_count: number;
	air_date: string;
	episode_number: number;
	episode_type: string;
	production_code: string;
	runtime: number;
	season_number: number;
	show_id: number;
	still_path: string;
};

export type Network = {
	id: number;
	logo_path: string;
	name: string;
	origin_country: string;
};

export type ProductionCompany = {
	id: number;
	logo_path?: string;
	name: string;
	origin_country: string;
};

export type ProductionCountry = {
	iso_3166_1: string;
	name: string;
};

export type Season = {
	air_date: string;
	episode_count: number;
	id: number;
	name: string;
	overview: string;
	poster_path: string;
	season_number: number;
	vote_average: number;
};

export type SpokenLanguage = {
	english_name: string;
	iso_639_1: string;
	name: string;
};
