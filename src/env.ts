import { z } from 'zod';

const envSchema = z.object({
	MODE: z.union([z.literal('test'), z.literal('development'), z.literal('production')]).default('development'),
	VITE_APP_TITLE: z.string(),
	VITE_API_URL: z.string(),
	VITE_APP_PORT: z.string(),
	VITE_MSW_ACTIVATED: z.string(),
	VITE_TMDB_API_URL: z.string(),
	VITE_TMDB_API_IMAGE_URL: z.string(),
	VITE_TMDB_API_ACCESS_TOKEN: z.string(),
});

export const env = envSchema.parse(import.meta.env);
