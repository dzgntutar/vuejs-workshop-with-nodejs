import Anasayfa from "./components/views/Home";
import Hakkimda from "./components/views/About";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "",
    name: "Home",
    component: Anasayfa,
  },
  {
    path: "/about",
    name: "About",
    component: Hakkimda,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
