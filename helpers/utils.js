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
  },
  formatQueryString(queries) {
    queries = _.clone(queries)
    for (const key in queries) {
      if (queries.hasOwnProperty(key)) {
        if (typeof queries[key] === 'object' && queries[key] !== null) {
          queries[key] = $.map(queries[key], function (value, i) {
            return value
          })
        } else {
          queries[key] = queries[key] !== null ? queries[key] : ''
        }
      }
    }
    return queries
  },
  handleServerError(response) {
    const events = {"some-index": false}
    const key = "some-index"
    if (events.hasOwnProperty(key)){
      return response.data.message
    }
  }
}

export default utils