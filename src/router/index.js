import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/shows',
    name: 'Shows',
    component: () => import(/* webpackChunkName: "shows" */ '../views/Shows.vue')
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import(/* webpackChunkName: "shows" */ '../views/Projects.vue')
  },
  // {
  //   path: '/residents',
  //   name: 'Residents',
  //   component: () => import(/* webpackChunkName: "resident" */ '../views/Residents.vue')
  // },
  {
    path: '/residents/:id',
    name: 'ShowResident',
    component: () => import(/* webpackChunkName: "ShowResident" */ '../views/ShowRes.vue')
  },
  {
    path: '/projects/:id',
    name: 'ShowProj',
    component: () => import(/* webpackChunkName: "ShowProj" */ '../views/ShowProj.vue')
  },
  {
    path: '/shows/:id',
    name: 'ShowShow',
    component: () => import(/* webpackChunkName: "ShowShow" */ '../views/ShowShow.vue')
  },
  {
    path: '/blog/:id',
    name: 'ShowBlog',
    component: () => import(/* webpackChunkName: "ShowShow" */ '../views/ShowBlog.vue')
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: () => import(/* webpackChunkName: "schedule" */ '../views/Schedule.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import(/* webpackChunkName: "blog" */ '../views/Blog.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "search" */ '../views/Search.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '../views/404.vue')
  },
  {
    path: '*',
    redirect: '/404'
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

export default router;
