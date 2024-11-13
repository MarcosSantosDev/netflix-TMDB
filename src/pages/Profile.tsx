import * as React from 'react';

import clsx from 'clsx';

import { ProfileHeader } from '@/components/app/Header';
import { Icon } from '@/components/ui';

type ProfileProps = React.PropsWithChildren & {
	label: string;
	onClick: () => void;
};

const ProfileButton = ({ children, label, onClick }: ProfileProps) => {
	return (
		<button
			className="flex h-fit w-100 cursor-pointer flex-col items-center space-y-20 hover:opacity-80"
			type="button"
			onClick={onClick}
		>
			<div
				className={clsx('h-90 flex w-100 items-center justify-center rounded-sm', {
					'bg-blue-100': React.Children.count(children) === 0,
					'bg-transparent': React.Children.count(children) > 0,
				})}
			>
				{children}
			</div>
			<p className="text-lg text-neutral-1">{label}</p>
		</button>
	);
};

const NewProfile = () => (
	<ProfileButton
		label="Novo Perfil"
		onClick={() => {}}
	>
		<div className="flex h-52 w-52 items-center justify-center rounded-full bg-slate-50">
			<Icon
				size="xl"
				name="plus"
				className="text-black"
			/>
		</div>
	</ProfileButton>
);

const getRandomNumber = () => Math.floor(Math.random() * 3);

const profileImages = [
	'/public/assets/images/app/profiles/blue.png',
	'/public/assets/images/app/profiles/red.png',
	'/public/assets/images/app/profiles/yellow.png',
];

const ProfilePage = () => {
	const profiles = ['Marcos', 'Clarissa', 'Wesley', 'Dara', 'Guilherme'];

	return (
		<div className="relative h-screen w-screen bg-black">
			<ProfileHeader />
			<div className="mx-auto mt-120 flex h-full w-1/3 items-start justify-center">
				<div className="flex flex-wrap items-center justify-start gap-24">
					{profiles.map((profile) => (
						<ProfileButton
							key={profile}
							label={profile}
							onClick={() => {}}
						>
							<img src={profileImages[getRandomNumber()]} />
						</ProfileButton>
					))}
					<ProfileButton
						label="Kids"
						onClick={() => {}}
					>
						<img src="/public/assets/images/app/profiles/kids.png" />
					</ProfileButton>
					<NewProfile />
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
