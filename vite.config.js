import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'server/build'
  },
  // use when want to check all react routers functionality
  // server: {
  //   port: 8080,
  // },
})
