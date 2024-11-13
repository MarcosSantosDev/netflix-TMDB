import NetflixLogo from '@/components/app/SVG';

function SignInHeader() {
	return (
		<header
			id="header"
			className="min-h-80 w-full md:px-24 xl:px-120"
		>
			<div className="flex h-80 w-fit items-center">
				<NetflixLogo className="h-24 fill-red px-20 md:h-40 md:scale-75 lg:scale-100" />
			</div>
		</header>
	);
}

export default SignInHeader;
