import { Button } from '@/components/ui';

const OAuth = () => {
	const onGoogleLogin = () => {
		// Lógica de login com Google
	};

	return (
		<div className="grid grid-rows-2 gap-4">
			<div className="flex items-center justify-around gap-2">
				<div className="h-0.5 w-full bg-neutral-200"></div>
				<span className="mx-4 whitespace-nowrap text-md text-neutral-500">Or continue with</span>
				<div className="h-0.5 w-full bg-neutral-200"></div>
			</div>
			<div className="grid grid-rows-2 gap-3">
				<Button
					variant="outline"
					onClick={onGoogleLogin}
					icon="g-google"
				>
					Continue with Google
				</Button>
			</div>
		</div>
	);
};

export default OAuth;
