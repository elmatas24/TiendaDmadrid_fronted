import { createRouter, createWebHistory } from 'vue-router'
import FormularioRecogida from '../views/FormularioRecogida.vue'
import Confirmacion from '@/views/Confirmacion.vue'

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: FormularioRecogida
  }
]

const routes = [
  { path: '/', name: 'Formulario', component: FormularioRecogida },
  { path: '/confirmacion', name: 'Confirmacion', component: Confirmacion }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
