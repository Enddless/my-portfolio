import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/my-portfolio',
  plugins: [
    react(),
    visualizer({ filename: 'dist/stats.html' }) // Генерирует файл stats.html
  ],
  resolve: {
    alias: {
      public: path.resolve(__dirname, 'public'),
      '@': path.resolve(__dirname, 'src'),
      '@pages': path.resolve(__dirname, 'src/pages')
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
