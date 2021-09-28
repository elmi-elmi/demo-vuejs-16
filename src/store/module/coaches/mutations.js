export default {
    registerCoach(state, payload) {
        state.coaches.push(payload);
        console.log(state.coaches)
    },
    setCoaches(state, payload) {
        state.coaches = payload
    },
    setFetchTimestamp(state) {
        state.lastFetch = new Date().getTime();
    }
}