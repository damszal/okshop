import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
  react(),
  legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],
  build: {
    outDir: 'server/build'
  },
  server: {
    proxy: {
      "/api/" : "http://localhost:8080/",
      "/reg/" : "http://localhost:8080/",
      "/log/" : "http://localhost:8080/",
    }
  },
})
