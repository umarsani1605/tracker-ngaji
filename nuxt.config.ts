// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    'primevue/resources/themes/aura-light-green/theme.css',
    './assets/css/tailwind.css',
  ],
  modules: ["nuxt-primevue", '@nuxtjs/tailwindcss'],
  primevue: {
    options: {
      ripple: true,
      inputStyle: 'filled',
      unstyled: true,
      pt: {
        tabview: {
          tabpanel: {
            header: () => ({
              class: [
                'bg-black',
              ]
            }),
          }
        }
      },
    },
    importPT: { as: 'Aura', from: '~/presets/aura' }
  },
})
