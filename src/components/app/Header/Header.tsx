import * as React from 'react';

import clsx from 'clsx';

import { ReadProfile } from '@/@types/profile.types';
import NetflixLogo from '@/components/app/SVG/NetflixLogo';
import { Icon } from '@/components/ui/Icon/Icon';
import { IconButton } from '@/components/ui/IconButton/IconButton';
import { useGetUserByIdQuery } from '@/services/react-query/useGetUserByIdQuery';
import { useAuthenticatedUserStore } from '@/store/useAuthenticatedUserStore';

import { Nav } from './Nav';
import { ProfileMenu } from './ProfileMenu';

type HeaderProps = {
	className?: string;
};

export function Header({ className = '' }: HeaderProps) {
	const { isAuthenticated, selectedProfileId } = useAuthenticatedUserStore();
	const { data: user } = useGetUserByIdQuery();

	const profile = React.useMemo((): ReadProfile | null => {
		const profiles = user?.profiles ?? [];
		if (selectedProfileId && profiles.length) {
			return profiles.find((profile) => profile.id === selectedProfileId) ?? null;
		}
		return null;
	}, [user, selectedProfileId]);

	const hasProfile = profile !== null;

	return (
		<header
			data-testid="Header"
			className={clsx(
				className,
				'grid grid-cols-[auto_1fr_auto] items-center justify-center gap-8',
				'h-full max-h-header w-full bg-gradient-to-t-header px-20'
			)}
		>
			<div className="order-1 flex h-full w-full items-center justify-center md:order-2">
				{isAuthenticated && hasProfile && <Nav />}
			</div>
			<div className="order-2 flex justify-center md:order-1">
				<NetflixLogo
					className="h-20 fill-red md:h-28"
					data-testid="NetflixLogo"
				/>
			</div>
			<div className="order-3 flex justify-center">
				{isAuthenticated && hasProfile && (
					<div className="flex items-center justify-center gap-8 text-neutral-1">
						<IconButton variant="ghost">
							<Icon
								name="search"
								size="lg"
							/>
						</IconButton>
						<ProfileMenu profile={profile} />
					</div>
				)}
			</div>
		</header>
	);
}
