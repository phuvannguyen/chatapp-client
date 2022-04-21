import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components" : path.resolve(__dirname, "./src/components"),
      "@contexts" : path.resolve(__dirname, "./src/contexts"),
      "@pages" : path.resolve(__dirname, "./src/pages"),
      "@hooks" : path.resolve(__dirname, "./src/hooks"),
      "@utils" : path.resolve(__dirname, "./src/utils"),
      '@': path.resolve(__dirname, './src')
    },
  },
})
