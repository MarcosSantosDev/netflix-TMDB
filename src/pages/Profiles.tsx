import * as React from 'react';

import clsx from 'clsx';

import NetflixLogo from '@/components/app/SVG';
import { NewProfile, ProfileButton } from '@/features/profiles/components';
import { useGetUserByIdQuery } from '@/services/react-query/useGetUserByIdQuery';

const ProfilesPage = () => {
	const { data: user } = useGetUserByIdQuery();

	const profiles = user?.profiles ?? [];

	return (
		<div className="relative h-screen w-screen bg-black">
			<header className="flex h-full max-h-header w-full items-center justify-center md:px-24 xl:px-120">
				<NetflixLogo className="h-24 fill-red md:h-48" />
			</header>

			<div
				className={clsx(
					'grid max-h-container grid-rows-[auto,auto] items-center justify-center space-y-20 overflow-y-auto px-20 py-40 text-center'
				)}
			>
				<p className="text-h4 font-semibold text-white md:text-h2">Quem esta assistindo ?</p>
				<div className="flex justify-center">
					<div className="flex flex-wrap items-center justify-center gap-16 md:w-[565px] md:justify-start">
						{profiles.map((profile) => (
							<ProfileButton
								key={profile.id}
								label={profile.name}
								onClick={() => {}}
							>
								<img
									src={profile.photoURL}
									className="object-cover"
								/>
							</ProfileButton>
						))}
						<ProfileButton
							label="Kids"
							onClick={() => {}}
						>
							<img src="/assets/images/app/profiles/kids.png" />
						</ProfileButton>
						<NewProfile />
					</div>
				</div>
			</div>
		</div>
	);
};

export default React.memo(ProfilesPage);
