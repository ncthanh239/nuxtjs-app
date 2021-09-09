import { API_LINK } from '~/define_constant/api_list'
import utils from '~/helpers/utils'
// import { LIST_VUEX_STORE } from '~/define_constant/common'
// const oldQueries = utils.getOldState(LIST_VUEX_STORE.user_info_queries)

export const state = () => ({
	data: [],
	loading: true,
	// queries: oldQueries,
	error: null,
	clear_error: true,
	gridOptions: {
		canEdit: true,
		canDelete: true
	}
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
	}
}

export const actions = {
	async fetchDataUserInfo ({commit, state}, params) {
		try {
			const response = await this.$axios.get(API_LINK.USER_INFO)
			const dataResponses = response.data
			commit('put', dataResponses)
			commit('pendingData', false)
			console.log('response', response)
		} catch (e) {
			console.log('error', e)
		}
	},
	async deleteRecord({commit, state, dispatch}, params) {
		try {
			commit('pendingData', true)
			const url = API_LINK.USER_INFO + '/delete/' + params.params.id
			await this.$axios.delete(url)
			dispatch('fetchDataUserInfo')
		} catch (e) {
			console.log('error', e)
		}
	}
}