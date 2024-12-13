import Loading from '@/components/app/Loading/Loading';
import { Button } from '@/components/ui';
import { env } from '@/env';

import { Movie } from '../../services/@types/home.types';
import { useGetTvInfoQuery } from '../../services/react-query/useGetTvInfoQuery';

type MovieHighlightPanelProps = {
	movie: Movie;
};

const MovieHighlightPanel = ({ movie }: MovieHighlightPanelProps) => {
	const { data: chosenMovie, isLoading: isLoadingChosenMovie } = useGetTvInfoQuery(movie.id);

	if (!isLoadingChosenMovie && chosenMovie) {
		const firstDate = new Date(chosenMovie.first_air_date);

		const genres = chosenMovie.genres.map((genre) => genre.name).join(', ');
		const seasons = `${chosenMovie.number_of_seasons} Temporada${chosenMovie.number_of_seasons > 1 ? 's' : ''}`;
		return (
			<div
				className="h-screen w-screen bg-cover bg-center"
				style={{
					backgroundImage: `url(${env.VITE_TMDB_API_IMAGE_URL}/original${chosenMovie.backdrop_path})`,
				}}
			>
				<div className="bg-gradient-to-t-highlight h-full w-full">
					<div className="bg-gradient-to-r-highlight h-full w-full space-y-14 px-20 pt-56">
						<h2 className="text-8xl font-bold text-neutral-1">{chosenMovie.name}</h2>
						<div className="flex gap-24">
							<span className="text-xl font-bold text-success-400">{chosenMovie.vote_average.toFixed(1)} Pontos</span>
							<span className="text-xl font-bold text-neutral-300">{seasons}</span>
							<span className="text-xl font-bold text-neutral-300">{firstDate.getFullYear()}</span>
						</div>
						<div className="w-[40%]">
							<span className="text-lg text-neutral-400">{chosenMovie.overview}</span>
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
						<div className="text-lg text-neutral-1">
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
