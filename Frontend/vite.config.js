import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { preinitModule } from 'react-dom'
export default defineConfig({
  screens: {

    'sm': '640px',

    'md': '768px',

    'lg': '1024px',

    'xl': '1280px'

  },
  plugins: [
    tailwindcss(),
  ],
})