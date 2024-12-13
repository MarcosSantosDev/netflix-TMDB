import * as React from 'react';

import { Header } from '@/components/app';
import Loading from '@/components/app/Loading/Loading';
import MovieByGenre from '@/features/home/components/MovieByGenre/MovieByGenre';
import MovieHighlightPanel from '@/features/home/components/MovieHighlightPanel/MovieHighlightPanel';
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
import { generateRandomBetween } from '@/utils/number';

const HomePage = () => {
	const { data: genres } = useGetGenresQuery();
	const { data: discoverNetflixOriginals, isLoading: isLoadingDiscoverNetflixOriginals } =
		useGetDiscoverNetflixOriginalsQuery();
	const { data: trending, isLoading: isLoadingTrending } = useGetTrendingQuery();
	const { data: movieListTopRated, isLoading: isLoadingMovieListTopRated } = useGetMovieListTopRatedQuery();

	const netflixOriginals = transformDiscoverResults(discoverNetflixOriginals?.results ?? []);

	const chosenMovie = React.useMemo(() => {
		if (netflixOriginals.length) {
			const chosenIndex = generateRandomBetween(1, netflixOriginals.length);
			return netflixOriginals[chosenIndex - 1];
		}
		return null;
	}, [netflixOriginals]);

	return (
		<div className="relative h-full w-full overflow-y-auto overflow-x-hidden">
			<Header className="fixed top-0 z-50" />
			{chosenMovie ? <MovieHighlightPanel movie={chosenMovie} /> : <Loading />}
			<div className="-mt-200 flex flex-col gap-16">
				<MovieList
					title="Originais Netflix"
					movies={netflixOriginals}
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
