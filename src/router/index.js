import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PedidoView from '../views/PedidoView.vue'
import HistoricoView from '../views/HistoricoView.vue'
import ApontamentoView from '../views/ApontamentoView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pedido',
    name: 'pedido',
    component: PedidoView
  },
  {
    path: '/historico',
    name: 'historico',
    component: HistoricoView
  },
  {
    path: '/apontamento',
    name: 'apontamento',
    component: ApontamentoView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
