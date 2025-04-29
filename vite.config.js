import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Get the base path from package.json homepage or use '/'
const getBasePath = () => {
  try {
    const pkg = require('./package.json');
    if (pkg.homepage) {
      const url = new URL(pkg.homepage);
      return url.pathname;
    }
  } catch (e) {
    console.error('Error parsing homepage from package.json:', e);
  }
  return '/';
};

export default defineConfig({
  root: 'public',
  plugins: [react()],
  base: getBasePath(),
  build: {
    outDir: 'dist'
  }
});