// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'
import Aura from '@primeuix/themes/aura'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@primevue/nuxt-module', '@pinia/nuxt'],
  primevue: {
    components: {
      prefix: 'Prime',
      include: ['Button', 'DataTable', 'Card', 'Tag', 'Avatar']
    },
    options: {
      theme: {
        preset: Aura
      }
    }
  },
  vite: {
    plugins: [tailwindcss()]
  }
})
