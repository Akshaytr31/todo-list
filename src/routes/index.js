import { createRouter, createWebHistory } from "vue-router";

import TodoListPage from "@/pages/TodoListPage.vue";
import TodoViewPage from "@/pages/TodoViewPage.vue";

const API_URL='https://jsonplaceholder.typicode.com/users'

const routes = [
  {
    path: "/",
    name: "home",
    component: TodoListPage,
  },
  {
    path: "/view/:id",
    name: "view",
    component: TodoViewPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
