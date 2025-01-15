import { env } from '@/env';
import type { Movie } from '@/features/home/services/@types/home.types';

type MovieListItemProps = {
	movie: Movie;
};

function MovieListItem({ movie }: MovieListItemProps) {
	return (
		<div data-testid="movie-list-item" className="inline-block w-120 select-none md:w-160">
			<img
				className="w-full scale-90 transition-all duration-300 hover:scale-100"
				src={`${env.VITE_TMDB_API_IMAGE_URL}/w300${movie.imageUrl}`}
				alt={movie.name}
			/>
		</div>
	);
}

export default MovieListItem;
