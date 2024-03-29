import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), checker({ typescript: true })],
  resolve: {
    alias: [
      { find: '@constants', replacement: '/src/constants' },
      { find: '@components', replacement: '/src/components' },
      { find: '@assets', replacement: '/src/assets' },
      { find: '@type', replacement: '/src/type' },
      { find: '@utils', replacement: '/src/utils' },
      { find: '@store', replacement: '/src/store' },
      { find: '@hooks', replacement: '/src/hooks' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@', replacement: '/src' },
    ],
  },
});
