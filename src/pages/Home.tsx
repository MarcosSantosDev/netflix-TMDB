import { Header } from '@/components/app';
import MovieByGenre from '@/features/home/components/MovieByGenre/MovieByGenre';
import MovieList from '@/features/home/components/MovieList/MovieList';
import { useGetDiscoverNetflixOriginalsQuery } from '@/features/home/services/react-query/useGetDiscoverNetflixOriginalsQuery';
import { useGetGenresQuery } from '@/features/home/services/react-query/useGetGenresQuery';
import { useGetMovieListTopRatedQuery } from '@/features/home/services/react-query/useGetMovieListTopRatedQuery';
import { useGetTrendingQuery } from '@/features/home/services/react-query/useGetTrendingQuery';
import {
	transformDiscoverResults,
	transformTrendingResults,
	transformMovieListTopRatedResults,
} from '@/features/home/utils/tmdb.utils';

const HomePage = () => {
	const { data: genres } = useGetGenresQuery();
	const { data: discoverNetflixOriginals, isLoading: isLoadingDiscoverNetflixOriginals } =
		useGetDiscoverNetflixOriginalsQuery();
	const { data: trending, isLoading: isLoadingTrending } = useGetTrendingQuery();
	const { data: movieListTopRated, isLoading: isLoadingMovieListTopRated } = useGetMovieListTopRatedQuery();

	return (
		<div className="relative h-full w-full overflow-y-auto overflow-x-hidden">
			<Header />
			<div className="flex flex-col gap-16">
				<MovieList
					title="Originais Netflix"
					movies={transformDiscoverResults(discoverNetflixOriginals?.results ?? [])}
					isLoadingMovies={isLoadingDiscoverNetflixOriginals}
				/>
				<MovieList
					title="Recomendados"
					movies={transformTrendingResults(trending?.results ?? [])}
					isLoadingMovies={isLoadingTrending}
				/>
				<MovieList
					title="Em alta"
					movies={transformMovieListTopRatedResults(movieListTopRated?.results ?? [])}
					isLoadingMovies={isLoadingMovieListTopRated}
				/>

				{genres?.genres.map((genre) => (
					<MovieByGenre
						key={genre.id}
						genre={genre}
					/>
				))}
			</div>
		</div>
	);
};

export default HomePage;
