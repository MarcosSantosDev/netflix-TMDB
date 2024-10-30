import clsx from 'clsx';

import { Icon, IconButton } from '@/components/ui';
import { useSidebarPanelState } from '@/hooks';

const Header = () => {
	const { panelIsOpened, togglePanel } = useSidebarPanelState();

	return (
		<div
			className={clsx('flex max-w-full items-center justify-between gap-5 border-b px-10', {
				'justify-center': panelIsOpened,
			})}
		>
			{panelIsOpened && (
				<img
					src="assets/images/logos/playground-logo.png"
					alt="Logo"
					className="h-auto w-100"
				/>
			)}
			<IconButton onClick={togglePanel}>
				<Icon
					name={panelIsOpened ? 'panel-left-close' : 'panel-left-open'}
					size="xl"
				/>
			</IconButton>
		</div>
	);
};

export default Header;
