import { screen } from '@testing-library/react';

import { renderWithQueryClient } from '@/utils/RTL';

import MovieHighlightPanel from '../components/MovieHighlightPanel/MovieHighlightPanel';
import { useGetTvInfoQuery } from '../services/react-query/useGetTvInfoQuery';
import { tvInfo } from './__fixtures__/movie-highlight-panel.fixture';

vi.mock('@/features/home/services/react-query/useGetTvInfoQuery', () => ({
	useGetTvInfoQuery: vi.fn(() => ({
		isLoading: false,
		data: undefined,
	})),
}));

describe('MovieHighlightPanel', () => {
	it('should render movie correctly', () => {
		vi.mocked(useGetTvInfoQuery, { partial: true }).mockReturnValue({
			data: tvInfo,
			isLoading: false,
		});

		renderWithQueryClient(<MovieHighlightPanel movieId={1} />);

		const banner = screen.getByRole('banner');
		const title = screen.getByText(tvInfo.name);

		const points = `${tvInfo.vote_average.toFixed(1)} Pontos`;
		const seasons = `${tvInfo.number_of_seasons} Temporada${tvInfo.number_of_seasons > 1 ? 's' : ''}`;
		const firstDate = new Date(tvInfo.first_air_date);
		const description = tvInfo.overview.length > 200 ? `${tvInfo.overview.slice(0, 200)}...` : tvInfo.overview;
		const genres = tvInfo.genres.map((genre) => genre.name).join(', ');

		expect(banner).toBeInTheDocument();
		expect(banner).toBeVisible();
		expect(title).toBeInTheDocument();
		expect(screen.getByText(points)).toBeInTheDocument();
		expect(screen.getByText(seasons)).toBeInTheDocument();
		expect(screen.getByText(firstDate.getFullYear())).toBeInTheDocument();
		expect(screen.getByText(description)).toBeInTheDocument();
		expect(screen.getByText(genres)).toBeInTheDocument();
	});

	it('should render Loading when is fetching the movie', () => {
		vi.mocked(useGetTvInfoQuery, { partial: true }).mockReturnValue({
			isLoading: true,
		});

		renderWithQueryClient(<MovieHighlightPanel movieId={1} />);

		const loading = screen.getByRole('presentation');
		const netflixLogoLoading = screen.getByTestId('NetflixLogo');

		expect(loading).toBeInTheDocument();
		expect(loading).toBeVisible();
		expect(loading).toContainElement(netflixLogoLoading);
	});
});
