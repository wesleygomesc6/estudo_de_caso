import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      publica: true
    },
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    meta: {
      publica: true
    },
    component: () => import('../views/Cadastro.vue')
  },
  {
    path: '/home-user',
    name: 'HomeUser',

    component: () => import('../views/HomeUser.vue')
  },
  {
    path: '/suporte',
    name: 'Suporte',
    component: () => import('../views/Suporte.vue')
  },
  {
    path: '/usuarios',
    name: 'Usuarios',
    component: () => import('../views/Usuarios.vue')
  },
  {
    path: '/cadastro-usuario',
    name: 'CadastroUsuario',
    component: () => import('../views/CadastroUsuario.vue')
  },
  {
    path: '/cadastro-usuario/:id',
    name: 'EditarUsuario',
    component: () => import('../views/CadastroUsuario.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((routeTo, routeFrom, next) => {
  if (!routeTo.meta.publica && !store.state.user) {
    return next({
      path:'/'
    });
  }
  next();
})

export default router
