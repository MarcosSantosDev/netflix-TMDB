import { Navigate, Outlet } from 'react-router-dom';

import { Sidebar, Suspense } from '@/components/app';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { useSidebarPanelState } from '@/hooks';
import routePaths from '@/router/config/routePaths';

const PrivateLayout = () => {
	const { isAuthenticated } = useAuth();
	const { panelIsOpened } = useSidebarPanelState();

	if (!isAuthenticated) {
		return (
			<Navigate
				to={routePaths.ROOT_SIGN_IN}
				replace={true}
			/>
		);
	}

	return (
		<div className="flex h-screen w-screen overflow-hidden">
			<div
				aria-expanded={panelIsOpened}
				className="overflow-hidden shadow-sm transition-all duration-300 ease-in-out aria-[expanded=false]:w-[68px] aria-[expanded=true]:w-[280px]"
			>
				<Sidebar />
			</div>
			<div
				aria-expanded={panelIsOpened}
				className="flex flex-grow flex-col overflow-y-auto transition-all duration-300 ease-in-out aria-[expanded=false]:w-[calc(100vw-68px)] aria-[expanded=true]:w-[calc(100vw-280px)]"
			>
				<div className="flex-grow p-20">
					<Suspense>
						<Outlet />
					</Suspense>
				</div>
			</div>
		</div>
	);
};

export default PrivateLayout;
