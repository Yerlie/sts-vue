import Vue from "vue";
import VueRouter from "vue-router";
import Ofertas from "../views/Ofertas.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Ofertas",
    component: Ofertas,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
