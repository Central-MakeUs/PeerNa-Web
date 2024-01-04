import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {},
    }),
  ],
  resolve: {
    alias: [
      { find: '@constants', replacement: '/src/constants' },
      { find: '@components', replacement: '/src/components' },
      { find: '@components', replacement: '/src/assets' },
      { find: '@', replacement: '/src' },
    ],
  },
});
