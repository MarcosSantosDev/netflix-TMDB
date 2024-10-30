import vitePluginReact from '@vitejs/plugin-react';

import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig, loadEnv } from 'vite';
import vitePluginSvgr from 'vite-plugin-svgr';
import vitePluginTsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  const PORT = parseInt(`${env.VITE_PORT ?? '3001'}`);

  const htmlPlugin = () => {
    return {
      name: 'html-transform',
      transformIndexHtml(html: string) {
        return html.replace(/%(.*?)%/g, function (match, p1) {
          return env[p1];
        });
      },
    };
  };

  return {
    server: {
      port: PORT,
    },
    build: {
      outDir: 'build',
    },
    plugins: [
      htmlPlugin(),
      vitePluginReact(),
      vitePluginTsconfigPaths(),
      vitePluginSvgr(),
      visualizer({
        template: 'treemap',
        open: false,
        gzipSize: true,
        brotliSize: true,
        filename: 'analyse/index.html',
      }),
    ],
    define: {
      global: 'window',
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  };
});
