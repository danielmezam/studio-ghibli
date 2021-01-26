import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Start from "../views/Start.vue";
import Film from "../views/Film.vue";
import NotFound from "../views/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Start",
    component: Start
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/film/:id",
    name: "Film",
    component: Film
  },
  { path: "*", name: "NotFound", component: NotFound }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
