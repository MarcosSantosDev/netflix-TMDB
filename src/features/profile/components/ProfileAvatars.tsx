import * as React from 'react';

import { ProfileImageButton } from './ProfileImageButton';

type SectionProps = { title: string; children: React.ReactNode };

const Section = ({ title, children }: SectionProps) => (
	<div className="space-y-10 text-left">
		<p className="text-lg font-semibold text-white">{title}</p>
		<div className="flex max-w-full flex-wrap items-center justify-center gap-16 md:justify-start">{children}</div>
	</div>
);

const getListOfProfileImages = (path: string, maxRandonNumber: number) => {
	const mapList = Array.from({ length: maxRandonNumber }, (_, i) => i + 1);

	const profileImagePaths = mapList.map((number) => {
		if (number < 10) {
			return `${path}/0${number}.svg`;
		}
		return `${path}/${number}.svg`;
	});
	return profileImagePaths;
};

const popularProfileImages = getListOfProfileImages('/assets/images/app/profiles/popular', 16);
const profileImages = getListOfProfileImages('/assets/images/app/profiles/all', 36);

type ProfileAvatarsProps = {
	onSelectImagePath: (imagePath: string) => void;
};

const ProfileAvatars = ({ onSelectImagePath }: ProfileAvatarsProps) => {
	return (
		<div className="space-y-16">
			<Section title="Populares">
				{popularProfileImages.map((imagePath: string) => (
					<ProfileImageButton key={imagePath} imagePath={imagePath} onSelectImagePath={onSelectImagePath} />
				))}
			</Section>

			<Section title="Todos">
				{profileImages.map((imagePath: string) => (
					<ProfileImageButton key={imagePath} imagePath={imagePath} onSelectImagePath={onSelectImagePath} />
				))}
			</Section>
		</div>
	);
};

export default React.memo(ProfileAvatars);
