const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/jatayu/',
        },
      }
    : {};

export default {
  mode: 'spa',
  generate: {
    fallback: true,
  },
  /*
   ** Headers of the page
   */
  head: {
    title: 'Jatayu™ | Coders of Blaviken',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css',
      },
      {rel: 'icon', type: 'image/x-icon', href: './image/favicon.png'},
    ],
  },

  ...routerBase,
  /*
   ** Customize the progress-bar color
   */
  // loading: '~/components/Loader.vue',
  /*
   ** Global CSS
   */
  css: ['~/assets/scss/style.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/medium-zoom.js', {src: '~/plugins/after-each.js', mode: 'client'}],
  /*
   ** Nuxt.js dev-modules
   */
  script: [{src: 'https://kit.fontawesome.com/145ca0f25f.js'}, {src: '~/assets/js/active.js'}],
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    'nuxt-buefy',
    [
      'nuxt-gmaps',
      {
        key: 'AIzaSyC9U4sCMhib5oL3laji-Tlb7AJgKrioYEM',
        //you can use libraries: ['places']
      },
    ],
  ],

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {url: '/signin', method: 'post', propertyName: 'data.token'},
          logout: false,
          user: {url: '/api/user', method: 'get', propertyName: 'data'},
        },
        // tokenRequired: true,
        tokenType: '',
        // globalToken: true,
        // autoFetchUser: true
      },
    },
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: '',
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },

  pwa: {
    manifest: {
      name: 'Jatayu | Criminal Detection and Tracking',
      short_name: 'Jatayu',
      lang: 'en',
    },
  },
};
