import type { Movie } from '@/features/home/services/@types/home.types';
import type { Discover, DiscoverByGenre, MovieList, Trending } from '@/features/home/services/@types/tmdb.types';

export const transformDiscoverResults = (movies: Discover[]): Movie[] => {
	return movies.map((movie) => ({
		id: movie.id,
		name: movie.name,
		imageUrl: movie.poster_path,
	}));
};

export const transformDiscoverByGenreResults = (movies: DiscoverByGenre[]): Movie[] => {
	return movies.map((movie) => ({
		id: movie.id,
		name: movie.title,
		imageUrl: movie.poster_path,
	}));
};

export const transformTrendingResults = (movies: Trending[]): Movie[] => {
	return movies.map((movie) => ({
		id: movie.id,
		name: movie.title,
		imageUrl: movie.poster_path,
	}));
};

export const transformMovieListTopRatedResults = (movies: MovieList[]): Movie[] => {
	return movies.map((movie) => ({
		id: movie.id,
		name: movie.title,
		imageUrl: movie.poster_path,
	}));
};
