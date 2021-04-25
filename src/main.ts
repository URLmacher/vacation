import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import moment from 'moment';
import { locale } from '@/data/moment.locale';
import VueApexCharts from 'vue3-apexcharts';

moment.locale('de', locale);

const app = createApp(App);
app.use(VueApexCharts);
app.component('apexchart', VueApexCharts);
app.use(router).mount('#app');
