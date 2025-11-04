import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NewsDetailView from '@/views/NewsDetailView.vue'
import VoteView from '../views/VoteView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      props: (route) => ({ 
        page: parseInt(route.query.page as string) || 1,
        filter: route.query.filter as string || 'all'
      })
    },
    {
      path: '/news/:id',
      name: 'news-detail',
      component: NewsDetailView,
      props: true
    },
    {
      path: '/news/:id/vote',
      name: 'vote',
      component: VoteView,
      props: true
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue')
    }
  ],
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router