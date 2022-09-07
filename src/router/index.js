import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/Main.vue'),
    children: [
      {
        path: '/Home',
        name: 'Home',
        component: () => import('../components/Home.vue')
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('../components/About.vue'),
      },
      {
        path: '/pages',
        name: 'Pages',
        component: () => import('../components/Pages.vue'),
      },
      {
        path: '/contact',
        name: 'Contact',
        component: () => import('../components/Contact.vue'),
      }
    ]
  },

  // {
  //   path: '/content',
  //   name: 'content',
  //   component: Content,
  //   children: [
  //     {

  //     }
  //   ]
  // }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;