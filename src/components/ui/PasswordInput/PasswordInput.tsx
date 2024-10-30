import * as React from 'react';

import { Icon, Input } from '../';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {};

const PasswordInput = React.forwardRef<HTMLInputElement, Omit<InputProps, 'type'>>((props, ref) => {
	const [showPassword, setShowPassword] = React.useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword((prevState) => !prevState);
	};

	return (
		<div className="relative">
			<Input
				type={showPassword ? 'text' : 'password'}
				ref={ref}
				className="pr-40"
				{...props}
			/>
			<button
				type="button"
				onClick={togglePasswordVisibility}
				className="absolute inset-y-0 right-4 top-4 flex h-32 w-32 items-center justify-center rounded-full bg-transparent text-neutral-500 hover:bg-neutral-50 hover:text-neutral-700"
			>
				{showPassword ? (
					<Icon
						className="bg-transparent"
						name={'eye'}
						size="md"
					/>
				) : (
					<Icon
						className="bg-transparent"
						name={'eye-off'}
						size="md"
					/>
				)}
			</button>
		</div>
	);
});
PasswordInput.displayName = 'PasswordInput';

export { PasswordInput };
