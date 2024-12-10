import { PropsWithChildren } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';

import Header from './Header';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false,
		},
	},
});

const wrapper = ({ children }: PropsWithChildren) => (
	<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

const renderWithWrappers = (ui: React.ReactNode) => {
	return render(ui, { wrapper });
};

describe('Header Component', () => {
	it('should render the header element', () => {
		renderWithWrappers(<Header />);
		const headerElement = screen.getByRole('banner');
		expect(headerElement).toBeInTheDocument();
	});

	it('should render the NetflixLogo with correct classes', () => {
		renderWithWrappers(<Header />);
		const svgElement = screen.getByTestId('NetflixLogo');
		expect(svgElement).toHaveClass('h-24 fill-red md:h-32');
	});

	it('should have correct header classes', () => {
		renderWithWrappers(<Header />);
		const headerElement = screen.getByRole('banner');
		expect(headerElement).toHaveClass(
			'flex h-full max-h-header w-full items-center justify-start px-20 md:px-24 xl:px-120'
		);
	});
});
