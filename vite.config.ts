import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  base: '/arkanoid-ts/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
