import NetflixLogo from '@/components/app/SVG/NetflixLogo';

function Header() {
	return (
		<header className="flex h-full max-h-header w-full items-center justify-start px-20 md:px-24 xl:px-120">
			<NetflixLogo
				className="h-24 fill-red md:h-32"
				data-testid="NetflixLogo"
			/>
		</header>
	);
}

export default Header;
