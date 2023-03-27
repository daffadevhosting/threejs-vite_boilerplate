import { defineConfig } from 'vite';
import { resolve } from 'path';
import { terser } from 'rollup-plugin-terser';

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  build: {
    outDir: 'dist',
    minify: isProduction,
    sourcemap: !isProduction,
    rollupOptions: {
      plugins: [],
      output: {
        assetFileNames: 'assets/[name][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name].js',
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  plugins: isProduction ? [terser()] : [],
});

