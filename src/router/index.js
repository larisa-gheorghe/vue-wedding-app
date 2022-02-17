import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import('@/components/Home.vue');

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
