import { screen } from '@testing-library/react';

import { env } from '@/env';
import { useGetDiscoverMoviesByGenreIdQuery } from '@/features/home/services/react-query/useGetDiscoverMoviesByGenreIdQuery';
import { renderWithQueryClient } from '@/utils/RTL';

import MovieByGenre from '../components/MovieByGenre/MovieByGenre';
import { movieByGenderEmptyData, movieByGenderWithData } from './__fixtures__/movie-by-gender.fixture';

vi.mock('@/features/home/services/react-query/useGetDiscoverMoviesByGenreIdQuery', () => ({
	useGetDiscoverMoviesByGenreIdQuery: vi.fn(() => ({
		data: movieByGenderEmptyData,
		isLoading: false,
	})),
}));

describe('MovieByGenre', () => {
	beforeEach(() => {
		vi.restoreAllMocks();
	});

	it('should render the MovieList component with the correct title', () => {
		renderWithQueryClient(<MovieByGenre genre={{ id: 1, name: 'Action' }} />);

		const title = screen.getByText('Action');

		expect(title).toBeInTheDocument();
	});

	it('should render the MovieList component with the correct movies', () => {
		vi.mocked(useGetDiscoverMoviesByGenreIdQuery, { partial: true }).mockReturnValue({
			data: movieByGenderWithData,
			isLoading: false,
		});

		renderWithQueryClient(<MovieByGenre genre={{ id: 1, name: 'Action' }} />);

		const movieImage = screen.getByAltText('Movie 1');
		expect(movieImage).toBeInTheDocument();
		expect(movieImage).toHaveAttribute('src', `${env.VITE_TMDB_API_IMAGE_URL}/w300/poster1.jpg`);
	});

	it('should render the MovieList component with the correct isLoadingMovies prop', () => {
		vi.mocked(useGetDiscoverMoviesByGenreIdQuery, { partial: true }).mockReturnValue({
			isLoading: true,
		});

		renderWithQueryClient(<MovieByGenre genre={{ id: 1, name: 'Action' }} />);

		expect(screen.getAllByTestId('movie-list-item-skeleton').length).toEqual(20);
	});
});
