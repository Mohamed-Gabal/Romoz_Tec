import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://api.mashy.sand.alrmoz.com', // الرابط الأساسي للباك
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api') // يحتفظ بالـ /api في الطلب
      }
    }
  }
})