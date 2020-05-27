export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=IBM+Plex+Sans&family=Inter:wght@700&display=swap' }
    ]
  },

  router: {
    base: '/sih2020-frontend'
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    // '~/assets/css/custom.css',
    '~/assets/css/settings.css',
    '~/assets/css/style.css',
    '~/assets/css/meanmenu.css',
    '~/assets/css/slick.css',
    // '~/assets/css/aos.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  script: [
    { src: 'https://kit.fontawesome.com/145ca0f25f.js' },
    { src: 'https://code.jquery.com/jquery-3.5.1.min.js' },
    { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery-migrate/3.3.0/jquery-migrate.min.js' },
    { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.bundle.min.js' },
    { src: 'https://unpkg.com/@popperjs/core@2' },
    { src: '~/assets/js/active.js' },
    { src: '~/assets/js/jquery.meanmenu.js' }
  ],
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],

  // buefy: {
  //   defaultIconPack: 'mdi',
  //   defaultContainerElement: '#content',
  // },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
