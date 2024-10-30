import clsx from 'clsx';

import { Avatar, AvatarFallback, AvatarImage, Icon, IconButton } from '@/components/ui';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { useSidebarPanelState } from '@/hooks';

const Footer = () => {
	const { logout, user } = useAuth();
	const { panelIsOpened } = useSidebarPanelState();

	return (
		<div className="border-secondary flex max-w-full flex-col border-t p-10">
			<div
				className={clsx('flex items-center justify-around gap-12', {
					'flex-col': !panelIsOpened,
				})}
			>
				<Avatar>
					<AvatarImage src={user?.photoURL ?? 'https://placehold.jp/150x150.png'} />
					<AvatarFallback>{user?.displayName?.[0]}</AvatarFallback>
				</Avatar>
				{panelIsOpened && (
					<div className="flex max-w-[115px] flex-col gap-1">
						<span className="text-primary text-md font-medium">{user?.displayName}</span>
						<span className="text-tertiary overflow-hidden text-ellipsis whitespace-nowrap text-sm font-normal">
							{user?.profession ?? user?.email}
						</span>
					</div>
				)}

				<IconButton
					type="button"
					onClick={() => logout()}
				>
					<Icon
						name="log-out"
						size="xl"
					/>
				</IconButton>
			</div>
		</div>
	);
};

export default Footer;
