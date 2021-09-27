

export default {
    hasRequest(_state, getters) {
        return getters.requests && getters.requests.length > 0
    },
    requests(state, _getters, _rootState, rootGetters) {
        return state.requests.filter(req => req.coachId === rootGetters.userId)
    }
}