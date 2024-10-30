import * as React from 'react';

import * as AvatarPrimitive from '@radix-ui/react-avatar';

import { cn } from '@/utils/twUtils';

type AvatarProps = typeof AvatarPrimitive.Root & {};

const Avatar = React.forwardRef<React.ElementRef<AvatarProps>, React.ComponentPropsWithoutRef<AvatarProps>>(
	({ className, ...props }, ref) => (
		<AvatarPrimitive.Root
			ref={ref}
			className={cn('relative flex h-40 w-40 shrink-0 overflow-hidden rounded-sm', className)}
			{...props}
		/>
	)
);
Avatar.displayName = AvatarPrimitive.Root.displayName;

type AvatarImageProps = typeof AvatarPrimitive.Image & {};

const AvatarImage = React.forwardRef<
	React.ElementRef<AvatarImageProps>,
	React.ComponentPropsWithoutRef<AvatarImageProps>
>(({ className, ...props }, ref) => (
	<AvatarPrimitive.Image
		ref={ref}
		className={cn('aspect-square h-full w-full', className)}
		{...props}
	/>
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

type AvatarFallbackProps = typeof AvatarPrimitive.Fallback & {};

const AvatarFallback = React.forwardRef<
	React.ElementRef<AvatarFallbackProps>,
	React.ComponentPropsWithoutRef<AvatarFallbackProps>
>(({ className, ...props }, ref) => (
	<AvatarPrimitive.Fallback
		ref={ref}
		className={cn('flex h-full w-full items-center justify-center rounded-sm bg-neutral-100', className)}
		{...props}
	/>
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
