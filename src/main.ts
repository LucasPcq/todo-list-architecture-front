import { createApp } from "vue";
import { createPinia } from "pinia";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { VueQueryPlugin } from "@tanstack/vue-query";

import App from "./App.vue";

const pinia = createPinia();
const app = createApp(App);

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "TodoHome",
    component: () => import("@/modules/todos/views/TodoHome.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(VueQueryPlugin);
app.use(router);
app.use(pinia);
app.mount("#app");
