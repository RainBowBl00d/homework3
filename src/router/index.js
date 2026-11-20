import { createRouter, createWebHistory } from 'vue-router';
import MainView from '../views/MainView.vue';
import SingUpView from  '../views/SingUpView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MainView
  },
  {
    path: '/singup',
    name: 'Singup',
    component: SingUpView
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router
