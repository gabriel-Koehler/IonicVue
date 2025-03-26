import { createApp } from 'vue'
import App from './App.vue'
import { IonicVue } from '@ionic/vue'
import '@ionic/vue/css/ionic.bundle.css'
import router from './router'
import "./assets/main.css"

createApp(App)
.use(IonicVue)
.use(router)
.mount('#app')
