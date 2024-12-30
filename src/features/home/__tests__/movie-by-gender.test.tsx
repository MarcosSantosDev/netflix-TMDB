import { screen } from '@testing-library/react';

import { env } from '@/env';
import { useGetDiscoverMoviesByGenreIdQuery } from '@/features/home/services/react-query/useGetDiscoverMoviesByGenreIdQuery';
import { renderWithQueryClient } from '@/utils/RTL';

import MovieByGenre from '../components/MovieByGenre/MovieByGenre';

vi.mock('@/features/home/services/react-query/useGetDiscoverMoviesByGenreIdQuery', () => ({
	useGetDiscoverMoviesByGenreIdQuery: vi.fn(() => ({
		data: {
			results: [],
			page: 0,
			total_pages: 0,
			total_results: 0,
		},
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
			data: {
				results: [
					{
						id: 1,
						title: 'Movie 1',
						poster_path: '/poster1.jpg',
						backdrop_path: '/backdrop1.jpg',
						vote_average: 7.5,
						release_date: '2021-01-01',
						overview: 'Overview 1',
						adult: false,
						genre_ids: [1, 2],
						original_language: 'en',
						original_title: 'Movie 1',
						popularity: 100,
						video: false,
						vote_count: 100,
					},
				],
				page: 0,
				total_pages: 0,
				total_results: 0,
			},
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
