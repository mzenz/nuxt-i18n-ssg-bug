// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n',
  ],
  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'en',
    langDir: 'locales',
    // lazy: true,
    locales: [
      {
        code: 'en',
        iso: 'en',
        name: 'English',
        file: 'en.yml',
      },
      {
        code: 'es',
        iso: 'es',
        name: 'Español',
        file: 'es.yml'
      },
    ]
  }
})
