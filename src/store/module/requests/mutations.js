export default {
    requests(state, payload) {
        state.requests.push(payload)
    },
    setRequeset(state, payload) {
        state.requests = payload;
    }
}