import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/my-portfolio',
  plugins: [react()],
  resolve: {
    alias: {
      public: path.resolve(__dirname, 'public')
    }
  }
  // ,
  // build: {
  //   sourcemap: false
  // }
});
