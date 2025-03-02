import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { preinitModule } from 'react-dom'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})