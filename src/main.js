import { router } from './router.js';
import { createApp } from 'vue';

const app = creatApp();

app.use(router);
app.mount('#app');