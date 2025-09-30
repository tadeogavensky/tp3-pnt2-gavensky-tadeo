import { createRouter, createWebHistory } from "vue-router";
import Formulario from "./components/Formulario.vue";
import Usuarios from "./components/Usuarios.vue";
import Error from "./components/Error.vue";
const routes = [
  { path: "/", component: Formulario },
  { path: "/usuarios", component: Usuarios },

  { path: "/:pathMatch(.*)*", component: Error },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
