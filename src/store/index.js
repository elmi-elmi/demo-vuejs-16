import { createStore } from 'vuex';
import coachesModules from './module/coaches/index.js';
import requestMofules from './module/requests/index.js';
const store = createStore({
    modules: {
        coaches: coachesModules,
        requests: requestMofules
    },
    state() { return { userId: 'c2' } },
    getters: { userId(state) { return state.userId } }
});

export default store;