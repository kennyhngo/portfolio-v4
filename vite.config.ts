import vue from '@vitejs/plugin-vue';
import fs from 'fs';
import path, { resolve } from 'path';
import { defineConfig } from 'vite';

// Custom plugin to copy index.html to 404.html
function copy404Plugin() {
  return {
    name: 'copy-404',
    closeBundle() {
      const indexPath = resolve(__dirname, 'dist/index.html');
      const notFoundPath = resolve(__dirname, 'dist/404.html');
      fs.copyFileSync(indexPath, notFoundPath);
    },
  };
}

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.startsWith('ion'),
        }
      }
    }),
    copy404Plugin(),
  ],
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
