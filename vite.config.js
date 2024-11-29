import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // Add other HTML files here
        about: resolve(__dirname, 'portfolio-item-password-generator.html'),

        // Add more as needed
      },
    },
  },
})