import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import symfonyPlugin from 'vite-plugin-symfony';

const ddevPrimaryUrl = process.env.DDEV_PRIMARY_URL;
const ddevPrimaryUrlParsed = ddevPrimaryUrl ? new URL(ddevPrimaryUrl) : null;
const ddevViteUrl = ddevPrimaryUrlParsed
  ? new URL(`https://${ddevPrimaryUrlParsed.hostname}:5173`)
  : null;

const ddevViteOrigin = ddevViteUrl?.toString().replace(/\/$/, '');

export default defineConfig({
  plugins: [
    vue(),
    symfonyPlugin(),
  ],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    origin: ddevViteOrigin,
    hmr: ddevViteUrl
      ? {
          host: ddevViteUrl.hostname,
          protocol: 'wss',
          clientPort: Number(ddevViteUrl.port),
        }
      : undefined,
  },
  build: {
    manifest: true,
    outDir: 'public/build',
    rolldownOptions: {
      input: {
        app: './assets/app.ts',
      },
    },
  },
});
