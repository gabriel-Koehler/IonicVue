import Vue from 'vue';

import App from './App.vue'


export default new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: App
    }
  ]
});