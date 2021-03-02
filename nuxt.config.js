export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxt-posts-app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel: 'stylesheet', href:"https://fonts.googleapis.com/css2?family=Langar&display=swap"}
    ]
  },
  // This option lets you customize the loading component that Nuxt.js uses by default.
  // loading: {
  //   color: '#6CC417',
  //   height: '7px',
  //   duration: 5000,
  //   failedColor: 'red'
  // },
  loading: '~/components/loading.vue',
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~assets/style/main.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
   /*
   ** Runtime Config
   */

  publicRuntimeConfig: {
    axios: {
      baseURL: 'https://nuxt-posts-app-default-rtdb.firebaseio.com/'
    }
  },
  env: {
    MODE: process.env.NODE_ENV !== 'production' ? 'TEST' : 'LIVE'
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  }
}
