import * as React from 'react';

import clsx from 'clsx';
import { useNavigate } from 'react-router';

import type { ReadProfile } from '@/@types/profile.types';
import { Header } from '@/components/app/Header/Header';
import { SEO } from '@/components/app/SEO/SEO';
import { Button } from '@/components/ui/Button/Button';
import { Icon } from '@/components/ui/Icon/Icon';
import { ProfileButton } from '@/features/profiles/components/ProfileButton';
import routePaths from '@/router/config/routePaths';
import { useGetUserByIdQuery } from '@/services/react-query/useGetUserByIdQuery';
import { useAuthenticatedUserStore } from '@/store/useAuthenticatedUserStore';

const ProfilesPage = () => {
	const navigate = useNavigate();

	const { setSelectedProfile } = useAuthenticatedUserStore();
	const { data: user } = useGetUserByIdQuery();

	const [modeProfileManagement, setModeProfileManagement] = React.useState(false);

	const profiles = user?.profiles ?? [];

	const title = modeProfileManagement ? 'Gerenciar perfis' : 'Quem esta assistindo ?';

	const handleSelectNetflixProfile = (profile: ReadProfile) => {
		if (modeProfileManagement) {
			navigate(routePaths.PROFILE_ID.replace(':id', profile.id));
		} else {
			setSelectedProfile({
				profileId: profile.id,
			});
		}
	};

	const handleNavigateToNewProfile = () => {
		navigate(routePaths.PROFILE_ID.replace(':id', 'new'));
	};

	const handleToggleModeProfileManagement = () => {
		setModeProfileManagement((currentState) => !currentState);
	};

	return (
		<div className="relative h-full w-full">
			<SEO
				resource={{
					title: 'Netflix',
					shortDescription: 'Escolha seu perfil',
				}}
			/>
			<Header />

			<div
				className={clsx(
					'grid max-h-container grid-rows-[auto,auto] items-center justify-center space-y-20 overflow-y-auto px-20 py-40 text-center'
				)}
			>
				<p className="text-h4 font-semibold text-white md:text-h2">{title}</p>
				<div className="flex justify-center">
					<div className="flex flex-wrap items-center justify-center gap-16 md:w-[565px] md:justify-start">
						{profiles.map((profile: ReadProfile) => (
							<ProfileButton
								key={profile.id}
								mode={modeProfileManagement ? 'editing' : 'normal'}
								label={profile.name}
								onSelect={() => handleSelectNetflixProfile(profile)}
							>
								<img className="scale-95 rounded-sm object-cover" src={profile.photoURL} alt="profile" />
							</ProfileButton>
						))}
						<ProfileButton mode="normal" label="Novo Perfil" onSelect={handleNavigateToNewProfile}>
							<div className="flex h-52 w-52 items-center justify-center rounded-full bg-neutral-400">
								<Icon size="xl" name="plus" className="text-black" />
							</div>
						</ProfileButton>
					</div>
				</div>
				<div className="w-full py-20">
					<Button
						variant="outlined"
						size="lg"
						className="w-full px-40 md:w-auto"
						onClick={handleToggleModeProfileManagement}
						icon={modeProfileManagement ? 'scan-face' : 'settings'}
					>
						{modeProfileManagement ? 'Perfis' : 'Gerenciar perfis'}
					</Button>
				</div>
			</div>
		</div>
	);
};

export default React.memo(ProfilesPage);
