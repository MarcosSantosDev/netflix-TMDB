const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
	content: ['./index.html', './src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			colors: {
				/** primary and secondary
				 * The application's main colors
				 * used for:
				 * - buttons, links and highlights
				 */
				primary: {
					50: '#e3f2f9',
					100: '#c8e6f6',
					200: '#93ccef',
					300: '#63addb',
					400: '#2e8dc9',
					500: '#006db7',
					600: '#00559a',
					700: '#00447c',
					800: '#00335d',
					900: '#00213e',
				},
				secondary: {
					50: '#fef2e6',
					100: '#fde7c4',
					200: '#fcc489',
					300: '#f59f4d',
					400: '#f08212',
					500: '#d86e10',
					600: '#b6560b',
					700: '#924208',
					800: '#6e2f05',
					900: '#4b1c03',
				},
				/** success, error and warnings
				 * Colors for feedback states such as success, error and warnings.
				 */
				success: {
					50: '#e3fcec',
					100: '#c4f6d3',
					200: '#8febb1',
					300: '#54dd88',
					400: '#22c85f',
					500: '#1eae52',
					600: '#198b41',
					700: '#146b31',
					800: '#0f4b20',
					900: '#0a2b10',
				},
				error: {
					50: '#fde8e8',
					100: '#fbd3d3',
					200: '#f7a7a7',
					300: '#f17878',
					400: '#ed4b4b',
					500: '#e02e2e',
					600: '#b62424',
					700: '#8e1c1c',
					800: '#661414',
					900: '#3d0b0b',
				},
				warning: {
					50: '#fff6e0',
					100: '#ffe6b8',
					200: '#ffcf73',
					300: '#ffb830',
					400: '#ff9c00',
					500: '#db7f00',
					600: '#b26100',
					700: '#8a4b00',
					800: '#623500',
					900: '#3a1e00',
				},
				/** neutral
				 * Scaled for different uses (light to dark)
				 * used for:
				 * - text, borders and neutral backgrounds
				 */
				neutral: {
					1: '#ffffff',
					50: '#f7f7f7',
					100: '#ededed',
					200: '#d6d6d6',
					300: '#bcbcbc',
					400: '#8f8f8f',
					500: '#666666',
					600: '#4d4d4d',
					700: '#3d3d3d',
					800: '#2e2e2e',
					900: '#1f1f1f',
				},
			},
			fontFamily: {
				sans: ['Nunito', ...defaultTheme.fontFamily.sans],
			},
			fontSize: {
				xs: '1rem',
				sm: '1.2rem',
				md: '1.4rem',
				lg: '1.8rem',
				xl: '2.4rem',
				xxl: '3.2rem',
				h1: '4.8rem',
				h2: '4rem',
				h3: '3.2rem',
				h4: '2.4rem',
				h5: '2rem',
				h6: '1.6rem',
			},
			spacing: {
				// For details such as small spacings between icons or text.
				0: '0rem',
				1: '0.1rem',
				2: '0.2rem',
				4: '0.4rem',
				8: '0.8rem',
				10: '1rem',
				12: '1.2rem',
				14: '1.4rem',
				16: '1.6rem',
				// They are perfect for standard spacing on elements such as buttons, cards, etc.
				20: '2rem',
				24: '2.4rem',
				32: '3.2rem',
				40: '4rem',
				48: '4.8rem',
				// For larger layouts, spacing between sections and grids.
				64: '6.4rem',
				80: '8rem',
				100: '10rem',
				120: '12rem',
				160: '16rem',
			},
			borderRadius: {
				sm: '4px',
				md: '8px',
				lg: '12px',
				rounded: '50%',
			},
			boxShadow: {
				sm: '0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24)',
				md: '0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23)',
				lg: '0px 10px 20px rgba(0, 0, 0, 0.19), 0px 6px 6px rgba(0, 0, 0, 0.23)',
				xl: '0px 14px 28px rgba(0, 0, 0, 0.25), 0px 10px 10px rgba(0, 0, 0, 0.22)',
			},
			zIndex: {
				dropdown: 1000,
				modal: 1050,
				overlay: 1060,
				tooltip: 1070,
			},
			transitionProperty: {
				default: 'all',
				fast: 'all',
			},
			transitionTimingFunction: {
				default: 'ease',
				fast: 'ease',
			},
			transitionDuration: {
				default: '300ms',
				fast: '150ms',
			},
			screens: {
				sm: '480px',
				md: '768px',
				lg: '992px',
				xl: '1400px',
			},
		},
	},
	variants: {},
	plugins: [require('tailwindcss-animate')],
};
