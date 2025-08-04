// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
  ],

  devtools: {
    enabled: true,
  },

  css: [
    '@/assets/css/app.css',
    '@/assets/css/fonts.css',
  ],

  experimental: {
    sqliteConnector: 'native',
  },

  compatibilityDate: '2025-05-15',
})
