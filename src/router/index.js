import Vue from "vue";
import VueRouter from "vue-router";
import Create from "../components/Create.vue";
import Records from "../components/Records.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/records",
    name: "Records",
    component: Records,
  },
  {
    path: "/create",
    name: "Create",
    component: Create,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
