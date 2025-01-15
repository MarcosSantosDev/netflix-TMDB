import * as React from 'react';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

import { cn } from '@/utils/twUtils';

import { Icon } from './Icon/Icon';

export const Checkbox = React.forwardRef<
	React.ElementRef<typeof CheckboxPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
	<CheckboxPrimitive.Root
		ref={ref}
		className={cn(
			'peer h-20 w-20 shrink-0 rounded-xs border border-neutral-600 bg-neutral-900 shadow transition-all hover:border-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-100 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-neutral-1 data-[state=checked]:text-neutral-900 data-[state=checked]:hover:border-neutral-600 hover:data-[state=checked]:bg-neutral-300',
			className
		)}
		{...props}
	>
		<CheckboxPrimitive.Indicator className={cn('flex items-center justify-center text-current')}>
			<Icon size="md" name="check" />
		</CheckboxPrimitive.Indicator>
	</CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;
