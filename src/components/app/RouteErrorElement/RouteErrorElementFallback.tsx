import { Button } from '@/components/ui';

type RouteErrorElementFallbackProps = {
	title: string;
	subtitle: string;
	onBackToTop: () => void;
};

const RouteErrorElementFallback = ({ title, subtitle, onBackToTop }: RouteErrorElementFallbackProps) => (
	<div
		role="alert"
		className="flex h-screen w-full flex-col items-center justify-center gap-8 p-8 md:flex-row"
	>
		<img
			src="/assets/images/feedbacks/astronaut.svg"
			alt=""
			className="w-160"
		/>

		<div className="mx-64 flex flex-col justify-end md:mx-0">
			<h1 className="text-xxl text-primary-400">Algo deu errado.</h1>
			<h1 className="text-xxl text-primary-400">{title}</h1>
			<p className="text-xl text-neutral-400">{subtitle}</p>
			<div className="mt-24 flex justify-end">
				<Button
					onClick={onBackToTop}
					variant="secondary"
					icon="move-left"
				>
					Back to top
				</Button>
			</div>
		</div>
	</div>
);

export default RouteErrorElementFallback;
