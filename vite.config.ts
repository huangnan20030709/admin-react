import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// postcss
import tailwindcss from 'tailwindcss';

import checker from 'vite-plugin-checker';

export default defineConfig({
  plugins: [
    react()
    // 开启语法检查
    // checker({ typescript: true }),
  ],
  resolve: {
    alias: {
      '@': resolve('./src')
    }
  },
  css: {
    postcss: {
      plugins: [tailwindcss()]
    }
  }
});
