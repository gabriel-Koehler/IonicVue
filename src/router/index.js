import Vue from 'vue';
import Home from "../Views/HomeView.vue"
import { createRouter, createWebHistory } from '@ionic/vue-router';
import Dashboard from '@/Views/DashboardView.vue';


const router = createRouter({
  history: createWebHistory(
    process.env.BASE_URL,
  ),
routes: [
  {
    path: '/',
    name: 'home',
    component: Home
  }
  ,
  {
    path:'/teste',
    name:'teste',
    component:Dashboard
  }
],
});

export default router;