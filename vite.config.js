import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  test: {
    exclude: [
      'node_modules', 
      'dist', 
      '.idea', 
      '.git', 
      '.cache',
      'e2e/**'
    ]
  }
})
