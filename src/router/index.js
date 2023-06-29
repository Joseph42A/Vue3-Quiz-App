import { createRouter, createWebHistory } from "vue-router";
import Quizes from "../views/Quizes.vue";
import Home from "../views/Home.vue";
import QuizDetail from "../views/QuizDetail.vue";
import PiniaStores from "../views/PiniaStores.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/quizes",
      name: "quizes",
      component: Quizes,
    },
    {
      path: "/quiz/:id",
      name: "quiz",
      component: QuizDetail,
    },
    {
      path: "/pinia-store",
      name: "pinia",
      component: PiniaStores,
    },
  ],
});

export default router;
