import { render, screen } from '@testing-library/react';

import Loading from './Loading';

describe('Loading Component', () => {
	it('should render the Loading container', () => {
		render(<Loading />);
		const loadingContainer = screen.getByRole('presentation');
		expect(loadingContainer).toBeInTheDocument();
		expect(loadingContainer).toHaveClass('flex h-screen w-screen items-center justify-center bg-black');
	});

	it('should render the NetflixLogo with correct classes', () => {
		render(<Loading />);
		const svgElement = screen.getByTestId('NetflixLogo');
		expect(svgElement).toBeInTheDocument();
		expect(svgElement).toHaveClass('z-10 h-40 animate-pulse fill-red md:h-80');
	});
});
