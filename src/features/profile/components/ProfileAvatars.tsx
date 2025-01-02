import * as React from 'react';

import { ProfileImageButton } from './ProfileImageButton';

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
		<div className="space-y-10 text-left">
			<p className="text-xl font-semibold text-white">Populares</p>
			<div className="flex flex-wrap items-center justify-center gap-16 md:w-[565px] md:justify-start">
				{popularProfileImages.map((imagePath: string) => (
					<ProfileImageButton
						key={imagePath}
						imagePath={imagePath}
						onSelectImagePath={onSelectImagePath}
					/>
				))}
			</div>

			<p className="text-xl font-semibold text-white">Outros</p>
			<div className="flex flex-wrap items-center justify-center gap-16 md:w-[565px] md:justify-start">
				{profileImages.map((imagePath: string) => (
					<ProfileImageButton
						key={imagePath}
						imagePath={imagePath}
						onSelectImagePath={onSelectImagePath}
					/>
				))}
			</div>
		</div>
	);
};

export default React.memo(ProfileAvatars);
