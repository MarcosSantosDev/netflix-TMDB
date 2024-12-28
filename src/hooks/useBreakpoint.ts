import { useState, useEffect } from 'react';

const breakpoints = {
	sm: 480,
	md: 768,
	lg: 992,
	xl: 1400,
};

const useBreakpoint = (breakpoint: keyof typeof breakpoints) => {
	const [isBreakpoint, setIsBreakpoint] = useState(window.innerWidth <= breakpoints[breakpoint]);

	useEffect(() => {
		const handleResize = () => {
			setIsBreakpoint(window.innerWidth <= breakpoints[breakpoint]);
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [breakpoint]);

	return isBreakpoint;
};

export default useBreakpoint;
