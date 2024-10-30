import clsx from 'clsx';
import { useLocation, useNavigate } from 'react-router-dom';

import { Icon } from '@/components/ui';
import { useSidebarPanelState } from '@/hooks';
import { appRoutesNavigation } from '@/router/config/app.routes';

const Nav = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const { panelIsOpened } = useSidebarPanelState();

	const itemActive = (pathName: string) => {
		return pathName === location.pathname;
	};

	return (
		<div className="flex max-w-full flex-col gap-6 overflow-auto">
			<ul className="grid w-full list-none gap-4 px-10">
				{appRoutesNavigation.map((route) => (
					<li
						key={route.id}
						aria-selected={itemActive(route.path ?? '')}
						className={clsx(
							'flex w-full cursor-pointer items-center gap-12 rounded-sm p-12 opacity-80 hover:bg-gradient-to-r hover:from-primary-50 hover:to-neutral-50 aria-[selected="true"]:bg-primary-50 aria-[selected="true"]:bg-gradient-to-r aria-[selected="true"]:text-primary-600',
							{
								'w-fit': !panelIsOpened,
							}
						)}
						onClick={() => navigate(route.path ?? '')}
					>
						{route.navigationIcon && (
							<Icon
								name={route.navigationIcon}
								size="xl"
							/>
						)}
						<span className={`${panelIsOpened ? 'block' : 'hidden'} text-md font-medium`}>
							{route.navigationTitle ?? ''}
						</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Nav;
