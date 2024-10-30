import { FallbackProps } from 'react-error-boundary';

import { Button } from '@/components/ui';

const ErrorFallback = ({ resetErrorBoundary }: FallbackProps) => {
	const contactSupport = () => {
		//
	};

	return (
		<div
			role="alert"
			className="flex h-screen w-full flex-col items-center justify-center gap-8 p-8 md:flex-row"
		>
			<img
				src="/assets/images/feedbacks/server-error.svg"
				alt=""
				className="w-160"
			/>

			<div className="mx-64 flex flex-col justify-end md:mx-0">
				<h1 className="text-xxl text-primary-400">Oops!</h1>
				<h1 className="text-xxl text-primary-400">Algo deu errado.</h1>
				<p className="text-xl text-neutral-400">Não se preocupe, nosso time está aqui para te ajudar</p>
				<div className="mt-24 flex justify-end gap-12">
					<Button
						onClick={resetErrorBoundary}
						variant="primary"
						icon="repeat"
					>
						Tentar novamente
					</Button>
					<Button
						onClick={contactSupport}
						variant="secondary"
						icon="message-square-text"
					>
						Suporte
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ErrorFallback;
