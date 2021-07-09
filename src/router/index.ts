import { nextTick } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'Home'
    },
    component: Home
  },
  {
    path: '/me',
    name: 'Me',
    meta: {
      title: 'Me'
    },
    component: () => import('@/views/Me.vue')
  },
  {
    path: '/experiences',
    name: 'Experiences',
    meta: {
      title: 'Experiences'
    },
    component: () => import('@/views/Experiences.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: () => import('@/views/PageNotFound.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

const FALLBACK_TITLE = process.env.VUE_APP_FALLBACK_TITLE;
router.afterEach((to) => {
  nextTick(() => {
    const title = (to.meta && to.meta.title) || FALLBACK_TITLE;
    document.title = title;
  });
});

export default router;
