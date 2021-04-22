import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Article from "../views/Article.vue";
import Contact from "../views/Contact.vue";
import Project from "../views/Project.vue";
import Experience from "../views/Experience.vue";
import Linktree from "@/components/Contact/Linktree.vue";

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
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/project",
    name: "Project",
    component: Project,
  },
  {
    path: "/linktree",
    name: "Link Tree",
    component: Linktree,
  },
  {
    path: "/link",
    redirect: "/linktree",
  },
  {
    path: "/timeline",
    component: Experience,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
