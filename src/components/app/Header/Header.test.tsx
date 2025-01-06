import { screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import { useGetUserByIdQuery } from '@/services/react-query/useGetUserByIdQuery';
import { useAuthenticatedUserStore } from '@/store/useAuthenticatedUserStore';
import { renderWithQueryClient } from '@/utils/RTL';

import { Header } from './Header';

vi.mock('react-router', () => ({
	useNavigate: vi.fn(),
}));

vi.mock('@/store/useAuthenticatedUserStore', () => {
	return {
		useAuthenticatedUserStore: vi.fn(() => ({
			userId: '',
			isAuthenticated: false,
			selectedProfileId: '',
		})),
	};
});

vi.mock('@/services/react-query/useGetUserByIdQuery', () => {
	return {
		useGetUserByIdQuery: vi.fn(() => ({
			data: null,
		})),
	};
});

describe('Header component', () => {
	beforeEach(() => {
		vi.restoreAllMocks();
	});

	it('renders NetflixLogo always', () => {
		renderWithQueryClient(<Header />);

		expect(screen.getByTestId('NetflixLogo')).toBeInTheDocument();
	});

	it('renders with appropriate styles based on profile state', () => {
		renderWithQueryClient(<Header className="custom-class" />);
		const header = screen.getByTestId('Header');

		expect(header).toHaveClass('custom-class');
	});

	it('shows Nav and ProfileMenu when authenticated and profile exists', () => {
		vi.mocked(useAuthenticatedUserStore, { partial: true }).mockReturnValue({
			userId: 'a139ef00-4e67-46e9-91c4-42e3f41f3661',
			isAuthenticated: true,
			selectedProfileId: 'b139ef01-4e87-46e9-91c4-42e3f41f3667',
		});
		vi.mocked(useGetUserByIdQuery, { partial: true }).mockReturnValue({
			data: {
				id: 'a139ef00-4e67-46e9-91c4-42e3f41f3661',
				email: 'marcos@example.com',
				displayName: 'Marcos Santos',
				profiles: [
					{
						id: 'b139ef01-4e87-46e9-91c4-42e3f41f3667',
						name: 'Marcos Santos',
						photoURL: '/assets/images/app/profiles/red.png',
					},
				],
			},
		});
		renderWithQueryClient(<Header />);

		expect(screen.getByTestId('Nav')).toBeInTheDocument();
		expect(screen.getByTestId('ProfileMenuButton')).toBeInTheDocument();
	});

	it('does not show Nav and ProfileMenu when no profile exists', async () => {
		vi.mocked(useAuthenticatedUserStore, { partial: true }).mockReturnValue({
			userId: 'a139ef00-4e67-46e9-91c4-42e3f41f3661',
			isAuthenticated: true,
			selectedProfileId: 'b139ef01-4e87-46e9-91c4-42e3f41f3667',
		});

		renderWithQueryClient(<Header />);

		expect(screen.queryByTestId('Nav')).not.toBeInTheDocument();
		expect(screen.queryByTestId('ProfileMenu')).not.toBeInTheDocument();
	});

	it('opens ProfileMenuContent when click in ProfileMenuButton', async () => {
		vi.mocked(useAuthenticatedUserStore, { partial: true }).mockReturnValue({
			userId: 'a139ef00-4e67-46e9-91c4-42e3f41f3661',
			isAuthenticated: true,
			selectedProfileId: 'b139ef01-4e87-46e9-91c4-42e3f41f3667',
		});
		vi.mocked(useGetUserByIdQuery, { partial: true }).mockReturnValue({
			data: {
				id: 'a139ef00-4e67-46e9-91c4-42e3f41f3661',
				email: 'marcos@example.com',
				displayName: 'Marcos Santos',
				profiles: [
					{
						id: 'b139ef01-4e87-46e9-91c4-42e3f41f3667',
						name: 'Marcos Santos',
						photoURL: '/assets/images/app/profiles/red.png',
					},
				],
			},
		});
		renderWithQueryClient(<Header />);

		expect(screen.getByTestId('ProfileMenuButton')).toBeInTheDocument();

		const profileMenuButton = screen.getByTestId('ProfileMenuButton');
		await userEvent.click(profileMenuButton);

		expect(screen.queryByTestId('ProfileMenuContent')).toBeInTheDocument();
	});
});
