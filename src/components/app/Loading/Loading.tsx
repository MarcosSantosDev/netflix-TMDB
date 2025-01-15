import NetflixLogo from '@/components/app/SVG/NetflixLogo';

const Loading = () => {
	return (
		<div role="presentation" className="flex h-screen w-screen items-center justify-center bg-black">
			<NetflixLogo className="z-10 h-40 animate-pulse fill-red md:h-80" data-testid="NetflixLogo" />
		</div>
	);
};

export default Loading;
