import * as React from 'react';

import { Slot } from '@radix-ui/react-slot';

import { type VariantProps, cva } from 'class-variance-authority';

import { Icon } from '@/components/ui/Icon/Icon';
import type { IconNames } from '@/components/ui/Icon/Icon';
import { cn } from '@/utils/twUtils';

const buttonVariants = cva(
	'inline-flex items-center justify-center gap-8 whitespace-nowrap rounded-sm text-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-100 disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				primary: 'bg-red text-neutral-1 shadow hover:bg-red/90',
				secondary: 'bg-neutral-600 text-neutral-50 shadow hover:bg-neutral-900/90',
				tertiary: 'bg-neutral-1 text-black shadow hover:bg-neutral-100',
				link: 'text-neutral-50 underline-offset-4 hover:underline',
				outlined: 'text-neutral-50 underline-offset-4 border border-neutral-300 hover:border-neutral-500',
			},
			size: {
				md: 'h-32 md:h-40 px-3',
				lg: 'h-40 md:h-48 px-8',
			},
		},
		defaultVariants: {
			variant: 'primary',
			size: 'md',
		},
	}
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean;
		icon?: IconNames;
	};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, children, icon, ...props }, ref) => {
		if (asChild) {
			return (
				<Slot className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
					{children}
				</Slot>
			);
		}

		return (
			<button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
				{icon && <Icon name={icon} size="sm" />}
				<span>{children}</span>
			</button>
		);
	}
);

Button.displayName = 'Button';

export { Button, buttonVariants };
