import Path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@': Path.resolve(__dirname, './src')
    }
  }
});
