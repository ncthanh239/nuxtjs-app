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
      { rel: 'stylesheet', href: 'admin-lte2/bower_components/bootstrap/dist/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'admin-lte2/bower_components/font-awesome/css/font-awesome.min.css' },
      { rel: 'stylesheet', href: 'admin-lte2/bower_components/Ionicons/css/ionicons.min.css' },
      { rel: 'stylesheet', href: 'admin-lte2/bower_components/datatables.net-bs/css/dataTables.bootstrap.min.css' },
      { rel: 'stylesheet', href: 'admin-lte2/dist/css/AdminLTE.min.css' },
      { rel: 'stylesheet', href: 'admin-lte2/dist/css/skins/_all-skins.min.css' },
      { rel: 'stylesheet', href: 'admin-lte2/dist/css/style.css'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic' },
    ],
    script: [
      { src: 'admin-lte2/bower_components/jquery/dist/jquery.min.js', body: true },
      { src: 'admin-lte2/bower_components/bootstrap/dist/js/bootstrap.min.js', body: true },
      { src: 'admin-lte2/bower_components/jquery-slimscroll/jquery.slimscroll.min.js', body: true },
      { src: 'admin-lte2/bower_components/fastclick/lib/fastclick.js', body: true },
      { src: 'admin-lte2/dist/js/adminlte.min.js', body: true },
      { src: 'admin-lte2/dist/js/demo.js', body: true },
    ]
  },

  loading: '~/components/loading.vue',
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
    '@nuxtjs/proxy',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // 'bootstrap-vue/nuxt',
    '@nuxtjs/auth',
    'vue-sweetalert2/nuxt'
  ],
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'login',
            method: 'post',
            propertyName: 'token',
          },
          logout: { url: 'logout', method: 'get' },
          user: {
            url: 'userInfo',
            method: 'get',
            propertyName: false
          }
        }
      },
      watchLoggedIn: true,
      redirect: {
        login: 'authentication/login',
        logout: '/',
        callback: 'authentication/login',
        home: '/'
      }
    }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // baseURL: process.env.API_URL || 'http://ncthanh.xyz:81/api/',
    // debug: process.env.DEBUG || false,
    // proxyHeaders: false,
    // credentials: false,
    proxy: true,
    prefix: '/api/',
    headers: { //optional
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  },
  proxy: {
    '/api/': {
      target: process.env.API_URL,
      pathRewrite: { '^/api/': '' },
    },
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
        {
          path: '/user/create',
          name: 'user-create',
          component: 'pages/user/create/index.vue'
        },
        {
          path: '/user/edit/:id?',
          name: 'user-edit',
          component: 'pages/user/edit/_id.vue'
        },
        {
          path: '/authentication/login',
          name: 'authentication-login',
          component: 'pages/authentication/login.vue'
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
