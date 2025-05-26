import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

// Optional: If Svelte is chosen, uncomment and install @sveltejs/vite-plugin-svelte
// import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  base: '/news-nexus-interactive/', // Added for GitHub Pages deployment
  plugins: [
    // Optional: If Svelte is chosen, uncomment
    // svelte(),
  ],
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
      ],
    },
  },
  build: {
    outDir: 'dist', // Default output directory
    emptyOutDir: true, // Ensure dist is cleaned before build
  },
  server: {
    port: 3000, // Default dev server port
    open: true, // Automatically open browser
  }
});
