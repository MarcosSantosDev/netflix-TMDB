import * as React from 'react';

import clsx from 'clsx';

type ProfileProps = React.PropsWithChildren & {
	label: string;
	onClick: () => void;
};

export const ProfileButton = ({ children, label, onClick }: ProfileProps) => {
	return (
		<button
			className="flex h-fit w-64 cursor-pointer flex-col items-center space-y-20 hover:opacity-80 md:w-100"
			type="button"
			onClick={onClick}
		>
			<div
				className={clsx('flex h-64 w-64 items-center justify-center rounded-sm md:h-90 md:w-100', {
					'bg-blue-100': React.Children.count(children) === 0,
					'bg-transparent': React.Children.count(children) > 0,
				})}
			>
				{children}
			</div>
			<p className="max-w-full truncate text-lg text-neutral-1">{label}</p>
		</button>
	);
};
