/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_APP_TITLE: string;
	readonly VITE_API_URL: string;
	readonly VITE_APP_PORT: string;
	readonly VITE_MSW_ACTIVATED: string;
	readonly VITE_MSW_DELAY_MS: string;
	readonly VITE_TMDB_API_URL: string;
	readonly VITE_TMDB_API_ACCESS_TOKEN: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
