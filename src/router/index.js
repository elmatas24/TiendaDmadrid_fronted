import { createRouter, createWebHistory } from 'vue-router'
import Formulario from '@/views/Formulario.vue'
import Confirmacion from '@/views/Confirmacion.vue'

const routes = [
  { path: '/', name: 'Formulario', component: Formulario },
  { path: '/confirmacion', name: 'Confirmacion', component: Confirmacion }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
