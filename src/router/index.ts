import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import StuffView from "../views/StuffView.vue";
import MemesView from "../views/MemesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/stuff",
      name: "stuff",
      component: StuffView,
    },
    {
      path: "/memes",
      name: "memes",
      component: MemesView,
    },
  ],
});

export default router;
