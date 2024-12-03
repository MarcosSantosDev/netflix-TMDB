import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { Suspense } from '@/components/app';
import { useAuth } from '@/features/auth/hooks/useAuth';
import routePaths from '@/router/config/routePaths';

const PrivateLayout = () => {
	const location = useLocation();

	const { isAuthenticated } = useAuth();

	if (!isAuthenticated) {
		return (
			<Navigate
				to={routePaths.SIGN_IN}
				replace={true}
			/>
		);
	}

	if (location.pathname === routePaths.ROOT) {
		return (
			<Navigate
				to={routePaths.PROFILES}
				replace={true}
			/>
		);
	}

	return (
		<div className="flex h-screen w-screen overflow-hidden bg-black">
			<Suspense>
				<Outlet />
			</Suspense>
		</div>
	);
};

export default PrivateLayout;
