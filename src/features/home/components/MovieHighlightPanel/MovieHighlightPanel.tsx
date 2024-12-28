import Loading from '@/components/app/Loading/Loading';
import { Button } from '@/components/ui/Button/Button';
import { env } from '@/env';
import { Movie } from '@/features/home/services/@types/home.types';
import { useGetTvInfoQuery } from '@/features/home/services/react-query/useGetTvInfoQuery';

type MovieHighlightPanelProps = {
	movie: Movie;
};

const MovieHighlightPanel = ({ movie }: MovieHighlightPanelProps) => {
	const { data: chosenMovie, isLoading: isLoadingChosenMovie } = useGetTvInfoQuery(movie.id);

	if (!isLoadingChosenMovie && chosenMovie) {
		const firstDate = new Date(chosenMovie.first_air_date);

		const description =
			chosenMovie.overview.length > 200 ? `${chosenMovie.overview.slice(0, 200)}...` : chosenMovie.overview;

		const genres = chosenMovie.genres.map((genre) => genre.name).join(', ');
		const seasons = `${chosenMovie.number_of_seasons} Temporada${chosenMovie.number_of_seasons > 1 ? 's' : ''}`;
		return (
			<div
				className="h-screen w-screen bg-cover bg-center"
				style={{
					backgroundImage: `url(${env.VITE_TMDB_API_IMAGE_URL}/original${chosenMovie.backdrop_path})`,
				}}
			>
				<div className="h-full w-full bg-gradient-to-t-highlight">
					<div className="flex h-full w-full flex-col justify-center space-y-16 bg-gradient-to-r-highlight px-20 pb-160 pt-80">
						<h2 className="text-5xl font-bold text-neutral-1 md:text-6xl">{chosenMovie.name}</h2>
						<div className="flex gap-24">
							<span className="text-md font-bold text-success-400 md:text-lg">
								{chosenMovie.vote_average.toFixed(1)} Pontos
							</span>
							<span className="text-md font-bold text-neutral-300 md:text-lg">{seasons}</span>
							<span className="text-md font-bold text-neutral-300 md:text-lg">{firstDate.getFullYear()}</span>
						</div>
						<div className="w-[40%]">
							<span className="text-sm text-neutral-400 md:text-md lg:text-lg">{description}</span>
						</div>
						<div className="flex items-center gap-16">
							<Button
								icon="play"
								variant="tertiary"
								className="px-24"
							>
								Assistir
							</Button>
							<Button
								icon="plus"
								variant="secondary"
								className="px-24"
							>
								Minha Lista
							</Button>
						</div>
						<div className="text-md text-neutral-1 md:text-lg">
							<strong className="text-neutral-300">Gêneros:</strong> {genres}
						</div>
					</div>
				</div>
			</div>
		);
	}

	return <Loading />;
};

export default MovieHighlightPanel;
