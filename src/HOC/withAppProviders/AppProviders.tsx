import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ErrorBoundary, Suspense } from '@/components/app';
import { queryClient } from '@/libs/react-query';

const AppProviders = ({ children }: React.PropsWithChildren) => {
	return (
		<ErrorBoundary>
			<Suspense>
				<HelmetProvider>
					<QueryClientProvider client={queryClient}>
						<ToastContainer />
						{children}
						<ReactQueryDevtools initialIsOpen={false} />
					</QueryClientProvider>
				</HelmetProvider>
			</Suspense>
		</ErrorBoundary>
	);
};

export default AppProviders;
