import * as React from 'react';

import * as DialogPrimitive from '@radix-ui/react-dialog';

import clsx from 'clsx';

import { cn } from '@/utils/twUtils';

import { Icon } from './Icon/Icon';

export const Dialog = DialogPrimitive.Root;

export const DialogTrigger = DialogPrimitive.Trigger;

export const DialogPortal = DialogPrimitive.Portal;

export const DialogClose = DialogPrimitive.Close;

export const DialogOverlay = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Overlay>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Overlay
		ref={ref}
		className={cn(
			'fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
			className
		)}
		{...props}
	/>
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

type DialogContentProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
	size?: 'sm' | 'md' | 'lg' | 'full';
};

export const DialogContent = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Content>, DialogContentProps>(
	({ className, children, size = 'sm', ...props }, ref) => (
		<DialogPortal>
			<DialogOverlay />
			<DialogPrimitive.Content
				ref={ref}
				className={cn(
					'fixed left-[50%] top-[50%] z-50 grid max-h-[calc(100vh-6rem)] w-full max-w-[calc(100vw-6rem)] translate-x-[-50%] translate-y-[-50%] gap-4 border-2 border-neutral-200 bg-black p-6 shadow-lg duration-200 sm:rounded-lg',
					'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]',
					{
						'md:max-w-[calc(30vw)]': size === 'sm',
						'md:max-w-[calc(40vw)]': size === 'md',
						'md:max-w-[calc(50vw)]': size === 'lg',
						'md:max-w-[calc(100vw-6rem)]': size === 'full',
					},
					className
				)}
				{...props}
			>
				{children}
				<DialogPrimitive.Close asChild>
					<button
						className={clsx(
							'absolute right-5 top-5 inline-flex size-[25px] appearance-none items-center justify-center rounded-full bg-transparent text-neutral-200',
							'hover:bg-neutral-800 focus:bg-neutral-800 focus:outline-none'
						)}
						aria-label="Close"
					>
						<Icon
							size="lg"
							name="x"
						/>
						<span className="sr-only">Close</span>
					</button>
				</DialogPrimitive.Close>
			</DialogPrimitive.Content>
		</DialogPortal>
	)
);
DialogContent.displayName = DialogPrimitive.Content.displayName;

export const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cn('flex flex-col space-y-1.5 py-4 text-center sm:text-left', className)}
		{...props}
	/>
);
DialogHeader.displayName = 'DialogHeader';

export const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)}
		{...props}
	/>
);
DialogFooter.displayName = 'DialogFooter';

export const DialogTitle = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Title>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Title
		ref={ref}
		className={cn('text-xl font-semibold leading-none tracking-tight text-neutral-1', className)}
		{...props}
	/>
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

export const DialogDescription = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Description>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Description
		ref={ref}
		className={cn('text-sm text-neutral-500', className)}
		{...props}
	/>
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
