// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules: {
    '/ssg': { prerender: true },
    '/isr': { isr: 60 },
    '/csr': { ssr: false }
  }
})
