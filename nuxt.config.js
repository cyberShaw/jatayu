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
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&family=Inter:wght@600&family=Source+Code+Pro&family=Source+Sans+Pro&display=swap' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Nunito' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdn.materialdesignicons.com/4.9.95/css/materialdesignicons.min.css' }
    ]
  },

  router: {
    baseURL: '/'
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
    // '~/assets/css/aos.css',
    '~/assets/css/settings.css',
    '~/assets/css/style.css',
    '~/assets/css/slick.css',
    '~/assets/css/user.css',
    '~/assets/scss/main.scss',
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/aos.js',
    { src: '~/plugins/after-each.js', mode: 'client' }
  ],
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
  ],
  buildModules: [
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    ['nuxt-buefy', { materialDesignIcons: false }],
  ],

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/api/login', method: 'post', propertyName: 'token' },
          logout: { url: '/api/auth/logout', method: 'post' },
          user: { url: '/api/user', method: 'get', propertyName: 'user' }
        },
        // tokenRequired: true,
        tokenType: '',
        // globalToken: true,
        // autoFetchUser: true
      }
    }
  },
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
