// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseKey: process.env.SUPABASE_KEY,
  },
  css: [
    'primevue/resources/themes/aura-light-green/theme.css',
    './assets/css/tailwind.css',
  ],
  modules: ["nuxt-primevue", '@nuxtjs/tailwindcss', '@nuxtjs/supabase'],
  supabase: {
    redirect: false,
  },
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
