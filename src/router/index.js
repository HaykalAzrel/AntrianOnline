import { createRouter, createWebHistory } from 'vue-router'

import Edit from "../components/edit.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/home',
    //   name: 'home',
    //   component: HomeView
    // },
  {
      path: '/',
      name: 'home',
      component: () => import('../components/homeutama.vue')
  },
  {
      path: '/daftar',
      name: 'daftar',
      component: () => import('../components/Tambah copy.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../components/Home.vue')
  },
    {
      path: '/tambah',
      name: 'Tambah',

      component: () => import('../components/Tambah.vue')
    },
    {
      path: '/tambah2',
      name: 'Tambah2',

      component: () => import('../components/Tambah copy.vue')
    },
    {
      path: "/cities/:cityId",
      name: "editcity",
      component: Edit,
    },
  ]
})

export default router
