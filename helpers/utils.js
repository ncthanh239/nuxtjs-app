// import * as Cookies from 'js-cookie'
const utils = {
    // getOldState(storePath) {
    //     const data = Cookies.get(storePath)
    //     return typeof data !== 'undefined' ? JSON.parse(data) : {}
    // },
    putDataState(state, data) {
        state.error = null
        state.clear_error = true
        if (typeof data.data !== 'undefined') {
            state.data = data.data
        } else {
            state.data = data
        }
        return state
    }
}

export default utils