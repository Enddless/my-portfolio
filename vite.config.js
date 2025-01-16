import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

// Получаем текущий путь к директории
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  base: '/my-portfolio',
  plugins: [react()],
  resolve: {
    alias: {
      public: resolve(__dirname, 'public'),
      '@': resolve(__dirname, 'src'),
      '@pages': resolve(__dirname, 'src/pages')
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString(); // Разделяет модули по пакетам
          }
        }
      }
    }
  }
});
