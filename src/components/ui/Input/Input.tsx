import * as React from 'react';

import { cn } from '@/utils/twUtils';

const InputBase = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
	return (
		<input
			type={type}
			className={cn(
				'h-40 w-full rounded-sm bg-transparent indent-10 text-md text-neutral-1 outline-none transition-colors',
				'placeholder:text-white30Percent',
				'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-100',
				'disabled:cursor-not-allowed disabled:opacity-50',
				className
			)}
			ref={ref}
			{...props}
		/>
	);
});

InputBase.displayName = 'InputBase';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {};

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
	return (
		<InputBase
			className={cn('rounded-sm border border-white30Percent', className)}
			ref={ref}
			{...props}
		/>
	);
});

Input.displayName = 'Input';

export { InputBase, Input };
