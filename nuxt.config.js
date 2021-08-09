import webpack from 'webpack'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxtjs-app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/bower_components/bootstrap/dist/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: '/bower_components/font-awesome/css/font-awesome.min.css' },
      { rel: 'stylesheet', href: '/bower_components/Ionicons/css/ionicons.min.css' },
      { rel: 'stylesheet', href: '/bower_components/datatables.net-bs/css/dataTables.bootstrap.min.css' },
      { rel: 'stylesheet', href: '/dist/css/AdminLTE.min.css' },
      { rel: 'stylesheet', href: '/dist/css/skins/_all-skins.min.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic' },
    ],
    script: [
      { src: 'bower_components/jquery/dist/jquery.min.js', body: true },
      { src: 'bower_components/bootstrap/dist/js/bootstrap.min.js', body: true },
      { src: 'bower_components/datatables.net-bs/js/jquery.dataTables.min.js', body: true },
      { src: 'bower_components/datatables.net-bs/js/dataTables.bootstrap.min.js', body: true },
      { src: 'bower_components/jquery-slimscroll/jquery.slimscroll.min.js', body: true },
      { src: 'bower_components/fastclick/lib/fastclick.js', body: true },
      { src: 'dist/js/adminlte.min.js', body: true },
      { src: 'dist/js/demo.js', body: true },
      { src: 'dist/js/script.js', body: true },
    ]
  },
  // loadingIndicator: {
  //   name: 'chasing-dots',
  //   color: 'purple',
  //   background: 'green'
  // },

  loading: false,
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // 'bootstrap-vue/nuxt',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.API_URL || 'http://laravel-api.local/api/',
    debug: process.env.DEBUG || false,
    proxyHeaders: false,
    credentials: false
  },
  router: {
    routeNameSplitter: '/',
    extendRoutes(routes, resolve) {
      routes.push(
        {
          path: '/',
          name: 'index',
          component: 'pages/index.vue'
        },
        {
          path: '/user',
          name: 'user-index',
          component: 'pages/user/index.vue'
        },
      )
    }
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        _: 'lodash'
      })
    ],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  server: {
    port: process.env.port, // default: 3000
    host: process.env.host // default: localhost
  },
}
