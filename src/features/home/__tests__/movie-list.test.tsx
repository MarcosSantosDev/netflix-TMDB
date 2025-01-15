import { render, screen } from '@testing-library/react';

import { env } from '@/env';

import MovieList from '../components/MovieList/MovieList';

describe('MovieList', () => {
	it('should render title of movie section correctly', () => {
		render(<MovieList title="Popular Movies" isLoadingMovies={false} movies={[]} />);

		const titleOfMovieSection = screen.getByText('Popular Movies');
		const movieListItemSkeleton = screen.queryAllByTestId('movie-list-item-skeleton');
		const movieListItem = screen.queryAllByTestId('movie-list-item');

		expect(titleOfMovieSection).toBeInTheDocument();
		expect(movieListItemSkeleton).toHaveLength(0);
		expect(movieListItem).toHaveLength(0);
	});

	it('should render loading movie list correctly', () => {
		render(<MovieList title="Popular Movies" isLoadingMovies movies={[]} />);

		const movieListItemSkeleton = screen.getAllByTestId('movie-list-item-skeleton');
		const movieListItem = screen.queryAllByTestId('movie-list-item');

		expect(movieListItemSkeleton).toHaveLength(20);
		expect(movieListItem).toHaveLength(0);
	});

	it('should render movie list correctly', () => {
		render(
			<MovieList
				title="Popular Movies"
				isLoadingMovies={false}
				movies={[
					{
						id: 1,
						name: 'Movie 1',
						imageUrl: '/image1.jpg',
					},
					{
						id: 2,
						name: 'Movie 2',
						imageUrl: '/image2.jpg',
					},
				]}
			/>
		);

		const movieListItemSkeleton = screen.queryAllByTestId('movie-list-item-skeleton');
		const movieListItem = screen.queryAllByTestId('movie-list-item');
		const movieImage1 = screen.getByAltText('Movie 1');
		const movieImage2 = screen.getByAltText('Movie 2');

		expect(movieListItemSkeleton).toHaveLength(0);
		expect(movieListItem).toHaveLength(2);
		expect(movieImage1).toBeInTheDocument();
		expect(movieImage2).toBeInTheDocument();
		expect(movieImage1).toHaveAttribute('src', `${env.VITE_TMDB_API_IMAGE_URL}/w300/image1.jpg`);
		expect(movieImage2).toHaveAttribute('src', `${env.VITE_TMDB_API_IMAGE_URL}/w300/image2.jpg`);
	});
});
