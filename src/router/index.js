import { createRouter, createWebHashHistory } from "vue-router";
import Inicio from "../views/Inicio.vue";

const routes = [
  {
    path: "/",
    name: "Inicio",
    component: Inicio,
    meta: {
      title: 'MiniProj1 - PWA',
      metaTags: [
        {
          name: 'description',
          content: 'Inicio da SPA'
        },
        {
          property: 'og:description',
          content: 'Inicio da SPA'
        }
      ]
    }
  },
  {
    path: "/sou",
    name: "Sou",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Sou.vue"),
  },
  {
    path: "/faco",
    name: "Faco",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Faco.vue"),
  },
  {
    path: "/hobbie",
    name: "Hobbie",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Hobbie.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
