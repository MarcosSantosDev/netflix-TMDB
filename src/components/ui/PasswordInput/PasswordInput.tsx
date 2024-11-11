import * as React from 'react';

import { Icon, InputBase } from '../';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {};

const PasswordInput = React.forwardRef<HTMLInputElement, Omit<InputProps, 'type'>>((props, ref) => {
	const [showPassword, setShowPassword] = React.useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword((prevState) => !prevState);
	};

	return (
		<div className="flex items-center gap-4 rounded-sm border border-white30Percent pr-4 focus-within:ring-2 focus-within:ring-neutral-100">
			<InputBase
				type={showPassword ? 'text' : 'password'}
				ref={ref}
				className="group focus-visible:ring-0"
				{...props}
			/>
			<button
				type="button"
				onClick={togglePasswordVisibility}
				className="flex h-32 w-auto items-center justify-center rounded-full bg-transparent p-8 text-neutral-1 hover:bg-neutral-900 focus-visible:bg-neutral-600 focus-visible:outline-none"
			>
				<Icon
					className="bg-transparent"
					name={showPassword ? 'eye' : 'eye-off'}
					size="md"
				/>
			</button>
		</div>
	);
});
PasswordInput.displayName = 'PasswordInput';

export { PasswordInput };
