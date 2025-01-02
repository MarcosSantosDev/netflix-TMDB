type ProfileImageButtonProps = {
	imagePath: string;
	onSelectImagePath: (imagePath: string) => void;
};

export const ProfileImageButton = ({ imagePath, onSelectImagePath }: ProfileImageButtonProps) => (
	<button
		type="button"
		onClick={() => onSelectImagePath(imagePath)}
		className="relative h-64 w-64 overflow-hidden rounded-sm hover:cursor-pointer"
	>
		<div className="absolute top-0 z-30 h-64 w-64 transition-all duration-200 hover:bg-black/60" />
		<img
			className="h-64 w-64 rounded-sm object-cover"
			src={imagePath}
		/>
	</button>
);
