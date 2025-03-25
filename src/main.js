import { createApp } from 'vue'
import App from './App.vue'
import { IonicVue } from '@ionic/vue'
import '@ionic/vue/css/ionic.bundle.css'
import router from './router'


createApp(App)
.use(IonicVue)
// .use(routerVue)
.use(router)
.mount('#app')
