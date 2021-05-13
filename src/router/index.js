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
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/shows',
    name: 'Shows',
    component: () => import(/* webpackChunkName: "shows" */ '../views/Shows.vue')
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: () => import(/* webpackChunkName: "schedule" */ '../views/Schedule.vue')
  },
  {
    path: '/residents',
    name: 'Residents',
    component: () => import(/* webpackChunkName: "resident" */ '../views/Residents.vue')
  },
  {
    path: '/residents/:id',
    name: 'ShowResident',
    component: () => import(/* webpackChunkName: "ShowResident" */ '../views/ShowRes.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "search" */ '../views/Search.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
