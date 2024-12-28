import { render, screen } from '@testing-library/react';

import Loading from './Loading';

describe('Loading Component', () => {
	it('should render the Loading container', () => {
		render(<Loading />);
		const loadingContainer = screen.getByRole('presentation');
		const svgElement = screen.getByTestId('NetflixLogo');
		expect(loadingContainer).toBeInTheDocument();
		expect(loadingContainer).toContainElement(svgElement);
	});
});
