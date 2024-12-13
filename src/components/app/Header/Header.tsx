import * as React from 'react';

import clsx from 'clsx';

import { ReadProfile } from '@/@types/profile.types';
import NetflixLogo from '@/components/app/SVG/NetflixLogo';
import { Icon } from '@/components/ui';
import { useGetUserByIdQuery } from '@/services/react-query/useGetUserByIdQuery';
import { useAuthenticatedUserStore } from '@/store/useAuthenticatedUserStore';

import { ProfileMenu } from './ProfileMenu';

type HeaderProps = {
	className?: HTMLDivElement['className'];
};

function Header({ className = '' }: HeaderProps) {
	const { isAuthenticated, selectedProfileId } = useAuthenticatedUserStore();
	const { data: user } = useGetUserByIdQuery();

	const profile = React.useMemo((): ReadProfile | null => {
		const profiles = user?.profiles ?? [];
		if (selectedProfileId && profiles.length) {
			return profiles.find((profile) => profile.id === selectedProfileId) ?? null;
		}
		return null;
	}, [user, selectedProfileId]);

	return (
		<header
			className={clsx(
				className,
				'bg-gradient-to-t-header flex h-full max-h-header w-full items-center px-20 md:px-24 xl:px-120',
				{
					'justify-start': profile === null,
					'justify-between': profile !== null,
				}
			)}
		>
			<div className="flex gap-28">
				<NetflixLogo
					className="h-24 fill-red md:h-32"
					data-testid="NetflixLogo"
				/>

				<nav className="flex h-24 items-center gap-24">
					<span className="text-md font-bold text-neutral-1">Inicio</span>
					<span className="text-md text-neutral-1">Tv Shows</span>
					<span className="text-md text-neutral-1">Filmes</span>
					<span className="text-md text-neutral-1">Em alta</span>
					<span className="text-md text-neutral-1">Minha Lista</span>
				</nav>
			</div>

			{isAuthenticated && profile ? (
				<div className="flex items-center gap-24 text-neutral-1">
					<Icon
						name="search"
						size="lg"
					/>
					<Icon
						name="bell"
						size="lg"
					/>
					<ProfileMenu profile={profile} />
				</div>
			) : null}
		</header>
	);
}

export default Header;
