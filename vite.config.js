import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss(),],
  server: {
    port: 8283 // Ini adalah baris yang ditambahkan/diubah
  }
})


