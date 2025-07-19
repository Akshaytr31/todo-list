import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/pages/HomePage.vue";
import ViewPage from "@/pages/ViewPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/view/:id",
    name: "view",
    component: ViewPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
