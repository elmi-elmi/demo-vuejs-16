import router from './router.js';
import { createApp } from 'vue';
import App from './App.vue';
import store from './store/index.js';
const app = createApp(App);

app.use(router);
app.use(store)
app.mount('#app');