import * as React from 'react';

import { ErrorBoundary as ErrorBoundaryComponent } from 'react-error-boundary';

import ErrorFallback from './ErrorFallback';

export const ErrorBoundary = ({ children }: React.PropsWithChildren) => {
	return <ErrorBoundaryComponent FallbackComponent={ErrorFallback}>{children}</ErrorBoundaryComponent>;
};
