export default function({ $axios, store }) {
  $axios.interceptors.request.use(
    function (conf) {
      const config = conf
      const tokenKey = store.getters.getAccessToken
      if (tokenKey) {
        config.headers.Authorization = `Bearer ${tokenKey}`
      }
      return config
    },
    function (err) {
      return Promise.reject(err)
    }
  )

  $axios.onRequest((config) => {
    store._vm.$nextTick(() => {
      // store._vm.$nuxt.$loading.start()
      return config
    })
  })
  $axios.onResponse((response) => {
    store._vm.$nextTick(() => {
      // store._vm.$nuxt.$loading.finish()
      return response
    })
  })
  $axios.onError((error) => {
    if (error.response.status === 401) {
      const isLoggedIn = store.$auth.$state.loggedIn
      if (isLoggedIn) {
        localStorage.clear()
        store.$auth.logout()
        window.location.href = '/authentication/login'
      }
    }
    store._vm.$nextTick(() => {
      store._vm.$nuxt.$loading.finish()
      return Promise.reject(error)
    })
  })
}