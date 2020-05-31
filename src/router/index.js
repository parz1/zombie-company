import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/intro",
    name: "Intro",
    component: () =>
      import(/* webpackChunkName: "Intro" */ "../views/Intro.vue"),
  },
  {
    path: "/ablity",
    name: "Ablity",
    component: () =>
      import(/* webpackChunkName: "Ablity" */ "../views/Ablity.vue"),
  },
  {
    path: "/risk",
    name: "Risk",
    component: () => import(/* webpackChunkName: "Risk" */ "../views/Risk.vue"),
  },
  {
    path: "/stat",
    name: "Stat",
    component: () => import(/* webpackChunkName: "Stat" */ "../views/Stat.vue"),
  },
  {
    path: "/user",
    name: "User",
    component: () => import(/* webpackChunkName: "User" */ "../views/User.vue"),
  },
  {
    path: "/draw",
    name: "Draw",
    component: () => import(/* webpackChunkName: "Draw" */ "../views/Draw.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
