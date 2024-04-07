import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import LoginView from '@/views/LoginView.vue'
import HomeView from '@/views/HomeView.vue'
import ProcessView from '@/views/ProcessView.vue'
import { jwtDecode, type JwtPayload } from "jwt-decode";
import path from 'path'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: (to) => {
        const auth = useAuthStore()
        if (auth.getToken) return (to.path = '/home')
        return (to.path = '/login')
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/home',
      name: 'Dashboard',
      component: HomeView
    },
    {
      path: '/processos',
      name: 'Processos',
      component: ProcessView
    }, 
    {
      path: '/:pathMatch(.*)*',
      redirect: '/home'
    }
  ]
})

router.beforeEach((to) => {
  
  const publicPages = ['/login']
  const authRequired = !publicPages.includes(to.path)
  const auth = useAuthStore()

  if (authRequired && !auth.getToken) {
    return '/login'
  }

  if (authRequired && auth.getToken) {
    const token = jwtDecode(auth.getToken)
    if (token.exp < new Date().getTime() / 1000) {
      auth.logout();
    }
  }

  if (to.path === '/login' && auth.getToken) {
    return '/home'
  }
})

export default router
