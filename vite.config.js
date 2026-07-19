import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    allowedHosts: ['192.168.1.106:5173/']
  }
})