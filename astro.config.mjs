import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://encouraged-coders.de',
  vite: {
    plugins: [tailwindcss()],
  },
});
