import NetflixLogo from '../SVG';

const Loading = () => {
	return (
		<div className="flex h-screen w-screen items-center justify-center bg-black">
			<NetflixLogo className="z-10 h-40 animate-pulse fill-red md:h-80" />
		</div>
	);
};

export default Loading;
