import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import moment from 'moment';
import { locale } from '@/data/moment.locale';

moment.locale('de', locale);
createApp(App).use(router).mount('#app');
