import * as React from 'react';

import { CustomLink } from '@/components/ui';

import OAuth from '../OAuth';

type AuthFormWrapperProps = {
	children?: React.ReactNode;
	title: string;
	subTitleDescription?: string;
	subTitleLink?: {
		text: string;
		to: string;
	};
};

const AuthFormWrapper = ({ children, title, subTitleDescription, subTitleLink }: AuthFormWrapperProps) => {
	return (
		<div className="mx-auto w-1/2 space-y-10">
			<div className="grid grid-cols-1 gap-10">
				<h2 className="text-nowrap text-xxl font-bold text-gray-900">{title}</h2>
				<div className="flex items-baseline gap-8 text-nowrap text-md">
					<p className="text-gray-900">{subTitleDescription}</p>
					{subTitleLink && <CustomLink to={subTitleLink.to}>{subTitleLink.text}</CustomLink>}
				</div>
			</div>
			<div>{children}</div>
			<div>
				<OAuth />
			</div>
		</div>
	);
};

export default AuthFormWrapper;
