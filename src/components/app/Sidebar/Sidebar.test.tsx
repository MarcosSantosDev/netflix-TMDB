import { act } from 'react';

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { vi } from 'vitest';

import routePaths from '@/router/config/routePaths';
import { renderWithRTQAndBrowserRouter } from '@/utils/RTL';

import Sidebar from './Sidebar';

const mockNavigate = vi.fn();

vi.mock('react-router-dom', async () => {
	const RRD = await vi.importActual('react-router-dom');
	return {
		...RRD,
		useNavigate: () => mockNavigate,
	};
});

describe('Sidebar component', () => {
	it('should render correctly', async () => {
		await act(async () => {
			await renderWithRTQAndBrowserRouter(<Sidebar />);
		});

		const navElement = screen.getByText('Dashboard');
		expect(navElement).toBeInTheDocument();
	});

	it('should be call navigate when click the nav item "Dashboard"', async () => {
		await act(async () => {
			await renderWithRTQAndBrowserRouter(<Sidebar />);
		});

		const navElement = screen.getByText('Dashboard');
		await userEvent.click(navElement);

		expect(mockNavigate).toHaveBeenCalled();
		expect(mockNavigate).toHaveBeenCalledTimes(1);
		expect(mockNavigate).toHaveBeenCalledWith(routePaths.ROOT);
	});
});
