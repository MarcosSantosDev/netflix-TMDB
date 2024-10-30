import { isRouteErrorResponse, useNavigate, useRouteError } from 'react-router-dom';

import routePaths from '@/router/config/routePaths';

import RouteErrorElementFallback from './RouteErrorElementFallback';

const notFoundMessage = "Sorry, we couldn't find the page you tried to access";

const RouteErrorElement = () => {
	const navigate = useNavigate();
	const error = useRouteError();

	const handleBackToTop = () => {
		navigate(routePaths.ROOT);
	};

	if (isRouteErrorResponse(error)) {
		const title = error.status.toString();
		const subtitle = error.status === 404 ? notFoundMessage : error.statusText;

		return (
			<RouteErrorElementFallback
				title={title}
				subtitle={subtitle}
				onBackToTop={handleBackToTop}
			/>
		);
	}

	throw error;
};

export default RouteErrorElement;
