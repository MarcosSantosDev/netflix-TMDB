type ProfileImageButtonProps = {
	imagePath: string;
	onSelectImagePath: (imagePath: string) => void;
};

export const ProfileImageButton = ({ imagePath, onSelectImagePath }: ProfileImageButtonProps) => (
	<button
		type="button"
		onClick={() => onSelectImagePath(imagePath)}
		className="group relative h-64 w-64 overflow-hidden rounded-sm outline-none hover:cursor-pointer"
	>
		<div className="absolute top-0 z-30 h-full w-full transition-all duration-200 hover:bg-black/60 group-focus:bg-black/60" />
		<img className="h-full w-full rounded-sm object-cover" src={imagePath} alt="avatar" />
	</button>
);
