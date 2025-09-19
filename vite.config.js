import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import sitemap from 'vite-plugin-sitemap';
import { imagetools } from 'vite-imagetools';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),imagetools(),
    sitemap({
      hostname: 'https://www.clathraenergies.fr', 
      dynamicRoutes: ['/', '/about', '/services', '/contact', '/join'], 
      changefreq: 'weekly',
      priority: 0.8,
    }),
  ],
  base: '/', 
  build: {
    outDir: 'dist',
  },
});