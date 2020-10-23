import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Game from "../views/Game.vue";
import Concentration from "../components/pages/Concentration.vue";
import HighAndLow from "../components/pages/HighAndLow.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Game",
    component: Game
  },
  {
    path: "/concentration",
    name: "Concentration",
    component: Concentration
  },
  {
    path: "/high-low",
    name: "HighAndLow",
    component: HighAndLow
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
