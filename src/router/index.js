import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Article from "../views/Article.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/article",
    name: "Article",
    component: Article,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
