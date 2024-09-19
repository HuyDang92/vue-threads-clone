import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import ProfileView from '@/views/ProfileView.vue'
import MainLayout from '@/Layout/MainLayout.vue'
import SearchView from '@/views/SearchView.vue'
import ActivityView from '@/views/ActivityView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        },
        {
          path: 'profile',
          name: 'profile',
          component: ProfileView
        },
        {
          path: 'activity',
          name: 'activity',
          component: ActivityView
        },
        {
          path: 'search',
          name: 'search',
          component: SearchView
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    }
  ]
})

export default router
