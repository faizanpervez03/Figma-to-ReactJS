import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],

   theme: {
    extend: {
      fontFamily: {
        josefin: ['Josefin Sans', 'sans-serif'], // Define a custom font family
        // Or, override the default sans-serif font:
        // sans: ['Josefin Sans', 'sans-serif'], 
      },
    },
  },
})
