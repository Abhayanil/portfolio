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
  // Set root to '.' if index.html is in the root directory
  root: '.', // Ensure this is set to the root directory
  plugins: [react()],
  base: '/portfolio/', // set base to /portfolio/ under GitHub Pages (note the trailing slash)
  build: {
    outDir: 'dist' // Ensure this matches your deployment directory
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  }
});
