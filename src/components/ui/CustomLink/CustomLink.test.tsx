import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { CustomLink } from './CustomLink';

describe('CustomLink Component', () => {
	it('renders correctly with given props', () => {
		render(
			<MemoryRouter>
				<CustomLink to="/test">Test Link</CustomLink>
			</MemoryRouter>
		);

		const linkElement = screen.getByText(/test link/i);
		expect(linkElement).toBeInTheDocument();
		expect(linkElement.closest('a')).toHaveAttribute('href', '/test');
	});

	it('renders with additional className', () => {
		render(
			<MemoryRouter>
				<CustomLink
					to="/test"
					className="custom-class"
				>
					Test Link
				</CustomLink>
			</MemoryRouter>
		);

		const linkElement = screen.getByText(/test link/i);
		expect(linkElement).toHaveClass('custom-class');
	});

	it('navigates to the correct route on click', async () => {
		render(
			<MemoryRouter initialEntries={['/']}>
				<Routes>
					<Route
						path="/"
						element={<CustomLink to="/test">Test Link</CustomLink>}
					/>
					<Route
						path="/test"
						element={<div>Test Page</div>}
					/>
				</Routes>
			</MemoryRouter>
		);

		const linkElement = screen.getByText(/test link/i);
		userEvent.click(linkElement);

		const testPageContent = await screen.findByText(/test page/i);

		expect(testPageContent).toBeInTheDocument();
	});
});
