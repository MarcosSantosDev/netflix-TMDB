import NetflixLogo from '../SVG';

const Loading = () => {
	return (
		<div className="flex h-screen w-screen items-center justify-center bg-black">
			<NetflixLogo className="z-10 h-80 animate-pulse fill-red" />
		</div>
	);
};

export default Loading;
