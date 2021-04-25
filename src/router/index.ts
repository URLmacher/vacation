import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import CalendarView from '../views/CalendarView.vue';
import Stats from '../views/Stats.vue';
import Graphs from '../views/Graphs.vue';


export const routes: Array<RouteRecordRaw & { icon: string; }> = [
  {
    path: '/',
    name: 'CalendarView',
    component: CalendarView,
    icon: 'event'
  },
  {
    path: '/stats',
    name: 'Stats',
    component: Stats,
    icon: 'feed'
  },
  {
    path: '/graphs',
    name: 'Graphs',
    component: Graphs,
    icon: 'analytics'
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
