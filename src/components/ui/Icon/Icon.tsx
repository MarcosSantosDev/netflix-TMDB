import * as React from 'react';

import { LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';

import { iconsSvg } from './iconsSvg';

const fallback = <div style={{ background: '#ddd', width: 24, height: 24 }} />;

type IconSVGNames = keyof typeof iconsSvg;
type LucideIconNames = keyof typeof dynamicIconImports;

export type IconNames = LucideIconNames | IconSVGNames;

type IconProps = Omit<LucideProps, 'ref'> & {
	size: 'sm' | 'md' | 'lg' | 'xl';
	name: IconNames;
};

const sizes = {
	sm: 14,
	md: 16,
	lg: 18,
	xl: 20,
};

export const Icon = ({ name, size, ...props }: IconProps) => {
	const iconSvgName = name as IconSVGNames;

	const foundSize = sizes?.[size] ?? sizes.md;

	if (iconsSvg?.[iconSvgName]) {
		const IconSVG = iconsSvg[iconSvgName];
		return (
			<React.Suspense fallback={fallback}>
				<IconSVG
					role="svgicon"
					width={foundSize}
					height={foundSize}
				/>
			</React.Suspense>
		);
	}

	const lucideIconName = name as LucideIconNames;

	const LucideIcon = React.lazy(dynamicIconImports[lucideIconName]);

	return (
		<React.Suspense fallback={fallback}>
			<LucideIcon
				{...props}
				role="svgicon"
				size={foundSize}
			/>
		</React.Suspense>
	);
};
