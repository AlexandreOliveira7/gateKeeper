import { createRouter, createWebHistory } from "vue-router";
import Default from "@/layouts/default/Default.vue";
import Empresas from "@/views/empresas/Index.vue";
import Arquivos from "@/views/arquivos/Index.vue";

const routes = [
  {
    path: "/",
    component: Default,
    children: [
      {
        path: "",
        name: "Empresas",
        component: Empresas,
      },
    ],
  },
  {
    path: "/arquivos",
    component: Default,
    children: [
      {
        path: "",
        name: "Arquivos",
        component: Arquivos,
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
