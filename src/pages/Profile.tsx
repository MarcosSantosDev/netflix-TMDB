import * as React from 'react';

import clsx from 'clsx';

import { Header } from '@/components/app/Header/Header';
import { SEO } from '@/components/app/SEO/SEO';
import ProfileForm from '@/features/profile/components/ProfileForm';

const Profile = () => {
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
				<p className="text-h4 font-semibold text-white md:text-h2">Perfil</p>

				<ProfileForm />
			</div>
		</div>
	);
};

export default React.memo(Profile);
