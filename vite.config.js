import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'server/build'
  },
  server: {
    proxy: {
      "/api/" : "http://localhost:8080/",
      "/reg/" : "http://localhost:8080/",
    }
  },
})
