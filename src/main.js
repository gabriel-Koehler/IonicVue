import { createApp } from 'vue'
import App from './App.vue'
import { IonicVue } from '@ionic/vue'
import '@ionic/vue/css/ionic.bundle.css'
import { IonicVueRouter } from '@ionic/vue';

createApp(App)
.use(IonicVue)
.use(IonicVueRouter)
.mount('#app')
