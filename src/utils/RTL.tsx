import { act } from 'react';

import { QueryClientProvider } from '@tanstack/react-query';
import { render, RenderOptions } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import { queryClient } from '@/libs/react-query';

export const renderWithBrowserRouter = async (ui: React.ReactNode, options?: Omit<RenderOptions, 'queries'>) => {
	return act(() => {
		render(ui, {
			...options,
			wrapper: BrowserRouter,
		});
	});
};

const wrapper = ({ children }: React.PropsWithChildren) => (
	<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export const renderWithRTQAndBrowserRouter = async (ui: React.ReactNode, options?: Omit<RenderOptions, 'queries'>) => {
	return act(() => {
		render(<BrowserRouter>{ui}</BrowserRouter>, {
			...options,
			wrapper,
		});
	});
};
