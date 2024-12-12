import * as React from 'react';

import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';

import { Suspense } from '@/components/app';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { queryClient } from '@/libs/react-query';
import routePaths from '@/router/config/routePaths';
import { useAuthenticatedUserStore } from '@/store/useAuthenticatedUserStore';

const PrivateLayout = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const { isAuthenticated } = useAuth();

	const { selectedProfileId } = useAuthenticatedUserStore();

	React.useEffect(() => {
		if (selectedProfileId.length) {
			navigate(routePaths.HOME);
		}
	}, [selectedProfileId]);

	React.useEffect(() => {
		return () => {
			queryClient.clear();
		};
	}, []);

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
		<div className="h-screen w-screen overflow-hidden bg-black">
			<Suspense>
				<Outlet />
			</Suspense>
		</div>
	);
};

export default PrivateLayout;
