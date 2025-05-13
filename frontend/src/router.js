import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Ricettario from './views/Ricettario.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/ricettario', component: Ricettario },
  { path: '/login', component: Login },
  { path: '/register', component: Register }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
