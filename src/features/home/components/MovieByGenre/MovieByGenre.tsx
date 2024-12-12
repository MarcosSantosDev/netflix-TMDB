import MovieList from '@/features/home/components/MovieList/MovieList';
import { Genre } from '@/features/home/services/@types/tmdb.types';
import { useGetDiscoverMoviesByGenreIdQuery } from '@/features/home/services/react-query/useGetDiscoverMoviesByGenreIdQuery';
import { transformDiscoverByGenreResults } from '@/features/home/utils/tmdb.utils';

type MovieByGenreProps = {
	genre: Genre;
};

function MovieByGenre({ genre }: MovieByGenreProps) {
	const { data: movieByGenre, isLoading: isLoadingMoviesByGenre } = useGetDiscoverMoviesByGenreIdQuery(genre.id);

	return (
		<MovieList
			title={genre.name}
			movies={transformDiscoverByGenreResults(movieByGenre?.results ?? [])}
			isLoadingMovies={isLoadingMoviesByGenre}
		/>
	);
}

export default MovieByGenre;
