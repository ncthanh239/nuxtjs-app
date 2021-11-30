import { API_LINK } from '~/define_constant/api_list'
import utils from '~/helpers/utils'
// import { LIST_VUEX_STORE } from '~/define_constant/common'
// const oldQueries = utils.getOldState(LIST_VUEX_STORE.user_info_queries)

export const state = () => ({
	data: [],
	accessURL: process.env.API_URL,
	loading: true,
	// queries: oldQueries,
	error: null,
	clear_error: true
})

export const mutations = {
	put(state, data) {
		utils.putDataState(state, data)
	},
	setClearError(state, isClear) {
		state.clear_error = isClear
	},
	pendingData(state, loading) {
		state.loading = loading
	},
	setImageActive(state, data) {
		state.image_active = data
	}
}

export const actions = {
	async fetchDataUpload({commit, state}, params) {
		try {
			const response = await this.$axios.get(API_LINK.UPLOAD + '/list')
			const dataResponses = response.data
			commit('put', dataResponses)
			commit('pendingData', false)
			console.log('response', dataResponses)
		} catch (e) {
			console.log('error', e)
		}
	},
    async fetchDataUploadCreate({commit, state}, params) {
		try {
			console.log('123213123', params.queries)
			const url = API_LINK.UPLOAD + '/create'
			const response = await this.$axios.post(url, params.queries, { headers: {'Content-Type': 'multipart/form-data'}})
			const dataResponses = response.data
			commit('put', dataResponses)
			this.app.router.push({
				path: 'upload'
			})
		} catch (e) {
			console.log('error', e)
			const msg = utils.handleServerError(e.response)
			console.log('error', msg)
		}
	},
}