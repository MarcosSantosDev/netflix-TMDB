import * as React from 'react';

import clsx from 'clsx';

type ProfileProps = React.PropsWithChildren & {
	label: string;
	onClick: () => void;
};

export const ProfileButton = ({ children, onClick }: ProfileProps) => {
	return (
		<button
			className="flex h-fit w-fit cursor-pointer flex-col items-center space-y-4 hover:opacity-80"
			type="button"
			onClick={onClick}
		>
			<div
				className={clsx('flex h-40 w-40 items-center justify-center rounded-sm', {
					'bg-blue-100': React.Children.count(children) === 0,
					'bg-transparent': React.Children.count(children) > 0,
				})}
			>
				{children}
			</div>
		</button>
	);
};
