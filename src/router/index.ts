import { createRouter, createWebHistory } from 'vue-router'
import CodeChallengeView from '../views/CodeChallengeView.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/code-challenge',
      name: 'code-challenge',
      component: CodeChallengeView,
    },
  ],
})

export default router
