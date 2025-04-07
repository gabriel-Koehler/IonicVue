import { createRouter, createWebHistory } from '@ionic/vue-router';

const router = createRouter({
  history: createWebHistory(
    process.env.BASE_URL,
  ),
routes: [
  {
    path: '/',
    name: 'home',
    component: ()=>import('@/Views/HomeView.vue')
  }
  ,
  {
    path:'/teste',
    name:'teste',
    component:()=> import('@/Views/DashboardView.vue')
  }
  ,
  {
    path:'/login',
    name:'login',
    component: ()=> import('@/Views/LoginView.vue')
  }
],
});

export default router;