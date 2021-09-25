

export default {
    hasRequest(state) {
        console.log('==========================')
        console.log(
            state.requests
        )
        console.log('==========================')

        return state.requests && state.requests.length > 0
    },
    requests(state) {
        return state.requests
    }
}