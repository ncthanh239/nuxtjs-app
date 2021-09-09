import { API_LINK } from '~/define_constant/api_list'
import utils from '~/helpers/utils'

export const state = () => ({
	data: {},
	loading: false,
	is_create: true,
	old_input: null,
	error: null
})

export const mutations = {
	put(state, data) {
		state.data = data
	},
	handleError(state, error) {
		state.error = error
	},
	setIsCreate(state, isCreate) {
		state.is_create = isCreate
	},
	setOldInput(state, oldInput) {
		state.old_input = oldInput
	},
	pendingData(state, loading) {
		state.loading = loading
	}
}

export const actions = {
	async fetchDataUserCreate({commit, state}, params) {
		try {
			commit('pendingData', true)
			params.queries = utils.formatQueryString(params.queries)
			console.log('queries', params.queries)
			const url = API_LINK.USER_INFO + '/stores'
			const response = await this.$axios.post(url, params.queries)
			console.log('response', response)
			commit('pendingData', false)
			this.app.router.push({
				name: 'user-index'
			})
			commit('user/userInfo/pendingData', true, { root: true })
		} catch (e) {
			console.log('error', e)
			commit('pendingData', false)
			const msg = utils.handleServerError(e.response)
			console.log('error', msg)
			commit('handleError', msg)
		}
	},
	async fetchDataUserDetail({commit, state}, params) {
		try {
			commit('setIsCreate', false)
			commit('pendingData', true)
			commit('handleError', null)
			const response = await this.$axios.get(API_LINK.USER_INFO + '/' + params.id)
			const dataResponses = response.data
			commit('pendingData', false)
			console.log('response', response.data)
			commit('put', dataResponses)
		} catch (e) {
			console.log('error', e)
		}
	},
	async updateUserInfo({commit, state}, params) {
		try {
			commit('pendingData', true)
			params.queries = utils.formatQueryString(params.queries)
			const url = API_LINK.USER_INFO + '/update/' + params.id
			const response = await this.$axios.post(url, params.queries)
			console.log('response', response)
			commit('pendingData', false)
			this.app.router.push({
				name: 'user-index'
			})
			commit('user/userInfo/pendingData', true, { root: true })
		} catch (e) {
			console.log('error', e)
			commit('pendingData', false)
			const msg = utils.handleServerError(e.response)
			console.log('error', msg)
			commit('handleError', msg)
		}
	}
}