import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import logo from '@/views/assets/logo.jpg'



createApp(App).use(router).mount('#app')
