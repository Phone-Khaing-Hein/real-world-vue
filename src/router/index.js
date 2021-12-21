import { createRouter, createWebHashHistory } from "vue-router";
import EventList from "../views/EventList.vue";
import About from "../views/About.vue";


const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
