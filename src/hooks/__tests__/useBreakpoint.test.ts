import { renderHook } from '@testing-library/react';

import useBreakpoint, { breakpoints } from '../useBreakpoint';

describe('useBreakpoint', () => {
	it('should return the correct breakpoint "sm"', () => {
		vi.stubGlobal('innerWidth', breakpoints.sm);
		const { result } = renderHook(() => useBreakpoint('sm'));

		expect(result.current).toBe(true);
	});

	it('should return the correct breakpoint "md"', () => {
		vi.stubGlobal('innerWidth', breakpoints.md);
		const { result } = renderHook(() => useBreakpoint('md'));

		expect(result.current).toBe(true);
	});

	it('should return the correct breakpoint "lg"', () => {
		vi.stubGlobal('innerWidth', breakpoints.lg);
		const { result } = renderHook(() => useBreakpoint('lg'));

		expect(result.current).toBe(true);
	});

	it('should return the correct breakpoint "xl"', () => {
		vi.stubGlobal('innerWidth', breakpoints.xl);
		const { result } = renderHook(() => useBreakpoint('xl'));

		expect(result.current).toBe(true);
	});
});
