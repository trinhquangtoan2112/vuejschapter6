import HomeView from '@/views/HomeView.vue'
import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',

     
    }
  ]
})

export default router
