import Anasayfa from "./components/views/homeView";
import Hakkimda from "./components/views/aboutView";
import Kullanici from "./components/views/userView";

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
  {
    path: "/user",
    name: "User",
    component: Kullanici,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
