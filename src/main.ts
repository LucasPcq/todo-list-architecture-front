import { createApp } from "vue";
import { createPinia } from "pinia";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import App from "./App.vue";

const pinia = createPinia();
const app = createApp(App);

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "TodoHome",
    component: () => import("@/modules/todos/views/TodoHome.vue"),
  },
  {
    path: "/todos/:id",
    name: "TodoUpdate",
    component: () => import("@/modules/todos/views/TodoUpdate.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router);
app.use(pinia);
app.mount("#app");
