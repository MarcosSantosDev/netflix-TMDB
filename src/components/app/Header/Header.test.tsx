import { render, screen } from '@testing-library/react';

import Header from './Header';

describe('Header Component', () => {
	it('should render the header element', () => {
		render(<Header />);
		const headerElement = screen.getByRole('banner');
		expect(headerElement).toBeInTheDocument();
	});

	it('should render the NetflixLogo with correct classes', () => {
		render(<Header />);
		const svgElement = screen.getByTestId('NetflixLogo');
		expect(svgElement).toHaveClass('h-24 fill-red md:h-32');
	});

	it('should have correct header classes', () => {
		render(<Header />);
		const headerElement = screen.getByRole('banner');
		expect(headerElement).toHaveClass(
			'flex h-full max-h-header w-full items-center justify-start px-20 md:px-24 xl:px-120'
		);
	});
});
