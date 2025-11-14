import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import path from 'node:path'

export default defineConfig({
  plugins: [vue(), svgLoader()],
  base: 'cv-site',
  resolve: {
    alias: { '@': path.resolve(__dirname, 'src') },
  },
})
