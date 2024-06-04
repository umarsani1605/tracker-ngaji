// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-primevue"
  ],
  primevue: {
    options: {
      unstyled: true
    },
    importPT: { as: 'Aura', from: '~/presets/aura' }     //import and apply preset   
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
