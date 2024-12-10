import * as React from 'react';

import clsx from 'clsx';

import { ReadProfile } from '@/@types/profile.types';
import NetflixLogo from '@/components/app/SVG/NetflixLogo';
import { useGetUserByIdQuery } from '@/services/react-query/useGetUserByIdQuery';
import { useAuthenticatedUserStore } from '@/store/useAuthenticatedUserStore';

import { ProfileMenu } from './ProfileMenu';

function Header() {
	const { data: user } = useGetUserByIdQuery();

	const { isAuthenticated, selectedProfileId } = useAuthenticatedUserStore();

	const profile = React.useMemo((): ReadProfile | null => {
		const profiles = user?.profiles ?? [];
		if (selectedProfileId && profiles.length) {
			return profiles.find((profile) => profile.id === selectedProfileId) ?? null;
		}
		return null;
	}, [user, selectedProfileId]);

	return (
		<header
			className={clsx('flex h-full max-h-header w-full items-center px-20 md:px-24 xl:px-120', {
				'justify-start': profile === null,
				'justify-between': profile !== null,
			})}
		>
			<NetflixLogo
				className="h-24 fill-red md:h-32"
				data-testid="NetflixLogo"
			/>

			{isAuthenticated && profile ? <ProfileMenu profile={profile} /> : null}
		</header>
	);
}

export default Header;
