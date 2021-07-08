import { createApp } from 'vue';
import { createMetaManager } from 'vue-meta';
import router from '@/router';
import App from '@/App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

const app = createApp(App);

app.use(router).use(createMetaManager());

app.mount('#app');
