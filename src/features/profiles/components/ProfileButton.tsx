import * as React from 'react';

import clsx from 'clsx';

import { Icon } from '@/components/ui/Icon/Icon';

type ProfileFunctionsByMode = {
	mode: 'normal' | 'editing';
	label: string;
	onSelect: () => void;
};

type ProfileProps = React.PropsWithChildren & ProfileFunctionsByMode;

export const ProfileButton = ({ children, mode, label, onSelect }: ProfileProps) => {
	return (
		<button
			className="flex cursor-pointer flex-col items-center space-y-20 md:w-100"
			type="button"
			onClick={onSelect}
		>
			<div
				className={clsx(
					'relative flex h-64 w-64 items-center justify-center rounded-sm transition-all hover:bg-neutral-300/20',
					'md:h-100 md:w-100',
					{
						'bg-neutral-300/20': React.Children.count(children) === 0,
						'bg-transparent': React.Children.count(children) > 0,
					}
				)}
			>
				<div
					className={clsx({
						hidden: mode === 'normal',
						'absolute top-0 z-30 flex h-full w-full items-center justify-center bg-black/80 transition-all duration-200 hover:bg-black/90':
							mode === 'editing',
					})}
				>
					<Icon
						size="lg"
						name="pencil-line"
						className="text-neutral-200"
					/>
				</div>
				{children}
			</div>
			<p className="max-w-full truncate text-lg text-neutral-1">{label}</p>
		</button>
	);
};
