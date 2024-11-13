import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  base: '/simple-icon-generator/',
  root: 'src',
  build: {
    outDir: '../build',
  },
  plugins: [react()],
});
