import * as React from 'react';

import type { FieldError } from 'react-hook-form';

import { cn } from '@/utils/twUtils';

export const FormFieldContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => {
		return <div ref={ref} className={cn('space-y-3', className)} {...props} />;
	}
);
FormFieldContent.displayName = 'FormFieldContent';

export const FormDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
	({ className, ...props }, ref) => {
		return <p ref={ref} className={cn('text-sm text-neutral-500', className)} {...props} />;
	}
);
FormDescription.displayName = 'FormDescription';

type FormMessageProps = React.HTMLAttributes<HTMLParagraphElement> & {
	error?: FieldError;
};

export const FormMessage = React.forwardRef<HTMLParagraphElement, FormMessageProps>(
	({ className, children, error, ...props }, ref) => {
		const body = error ? String(error?.message) : children;

		if (!body) {
			return null;
		}

		return (
			<p ref={ref} className={cn('text-sm text-error-400', className)} {...props}>
				{body}
			</p>
		);
	}
);
FormMessage.displayName = 'FormMessage';
