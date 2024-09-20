import BlogView from '@/views/BlogView.vue'
import HomeView from '@/views/HomeView.vue'
import RomeView from '@/views/RomeView.vue'
import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView
    },
    {
      path: '/room',
      name: 'room',
      component: RomeView
    },
  ]
})

export default router
