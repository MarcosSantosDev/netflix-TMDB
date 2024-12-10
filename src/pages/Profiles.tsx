import * as React from 'react';

import clsx from 'clsx';

import { ReadProfile } from '@/@types/profile.types';
import { Header } from '@/components/app';
import { NewProfile, ProfileButton } from '@/features/profiles/components';
import { useGetUserByIdQuery } from '@/services/react-query/useGetUserByIdQuery';
import { useAuthenticatedUserStore } from '@/store/useAuthenticatedUserStore';

const ProfilesPage = () => {
	const { data: user } = useGetUserByIdQuery();
	const { setSelectedProfile } = useAuthenticatedUserStore();

	const profiles = user?.profiles ?? [];

	const handleSelectNetflixProfile = (profile: ReadProfile) => {
		return () => {
			setSelectedProfile({
				profileId: profile.id,
			});
		};
	};

	return (
		<div className="relative h-full w-full">
			<Header />

			<div
				className={clsx(
					'grid max-h-container grid-rows-[auto,auto] items-center justify-center space-y-20 overflow-y-auto px-20 py-40 text-center'
				)}
			>
				<p className="text-h4 font-semibold text-white md:text-h2">Quem esta assistindo ?</p>
				<div className="flex justify-center">
					<div className="flex flex-wrap items-center justify-center gap-16 md:w-[565px] md:justify-start">
						{profiles.map((profile: ReadProfile) => (
							<ProfileButton
								key={profile.id}
								label={profile.name}
								onClick={handleSelectNetflixProfile(profile)}
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
