import { LIST_TREEVIEW } from '~/define_constant/common'
export const state = () => ({
  layout: 'Your default value',
  loading: false,
  active_sidebar: '',
})

export const mutations = {
  SET_ACCESS_TOKEN(state, data) {
    state.accessToken = data
  },
  SET_LOADING(state, data) {
    state.loading = data
  },
  SET_ACTIVE_SIDEBAR(state, activeSidebar) {
    state.active_sidebar = activeSidebar
  },
}

export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },

  loggedInUser(state) {
    return state.auth.user
  },
  getAccessToken(state) {
    return state.accessToken
  },
  getTreeview(state) {
    const activeSidebar = state.active_sidebar
    return LIST_TREEVIEW[activeSidebar]
  },
  getNowpage(state) {
    return state.active_sidebar
  },
}

export const actions = {
  setAccessToken({ commit }, params) {
    const accessToken = params.accessToken
    commit('SET_ACCESS_TOKEN', accessToken)
  },
  setLoading({ commit }, data) {
    commit('SET_LOADING', data.loading)
  },
  setActiveSidebar({ commit }, params) {
    const url = params.url
    commit('SET_ACTIVE_SIDEBAR', url)
  },
}
