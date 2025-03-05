import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // Solo si estás desplegando en GitHub Pages, de lo contrario, usa '/'
  server: {
    fs: {
      strict: false, // Permite servir archivos fuera de la raíz
    }
  },
  build: {
    assetsInlineLimit: 0, // Para evitar problemas con la carga de archivos estáticos
  }
})
