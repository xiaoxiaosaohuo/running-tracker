import { defineConfig } from 'astro/config';
import serviceWorker from "astrojs-service-worker";
import react from "@astrojs/react";
import tailwind from '@astrojs/tailwind';
// https://astro.build/config
export default defineConfig({
  integrations: [react(),tailwind(),serviceWorker({ 
        workbox: { inlineWorkboxRuntime: true }
       })],
  image: {
    // Example: Enable the Sharp-based image service
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});