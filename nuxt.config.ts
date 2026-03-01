// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  ssr: true,
  app: {
    baseURL: '/CampusHub-website/'，
    head: {
      title: 'CampusHub - 开启智慧校园新生活',
      meta: [
        { charset: 'UTF-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'description', content: '一套代码，多端覆盖。专为高校学子打造的一站式服务平台。' }
      ],
      link: [
        // 引入 FontAwesome (复用你原型中的 CDN)
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css' },
        // Favicon
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  nitro: {
    preset: 'static'
  },
  css: ['../assets/css/main.css'],
})
