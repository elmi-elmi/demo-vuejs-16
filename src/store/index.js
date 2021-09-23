import { createStore } from 'vuex';
import coachesModules from './module/coaches';

const store = createStore({
    modules: {
        coaches: coachesModules,
    }
});

export default store;