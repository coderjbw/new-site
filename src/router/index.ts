import { createWebHashHistory, createRouter } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'name',
        component: () => import('@/page/Home/index.vue')
    },
    {
        path: '/goodsDetail',
        name: 'goodsDetail',
        component: () => import('@/page/GoodsDetail/index.vue')
    },
    {
        path: '/complainPage',
        name: 'complainPage',
        component: () => import('@/page/ComplainPage/index.vue')
    },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
