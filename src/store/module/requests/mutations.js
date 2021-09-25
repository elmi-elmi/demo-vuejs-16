export default {
    requests(state, payload) {
        console.log('--------')
        state.requests.push(payload)
        console.log(state.requests)
    }
}