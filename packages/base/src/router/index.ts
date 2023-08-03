import { createRouter, RouteRecordRaw, createWebHashHistory } from "vue-router";

import packageConfig from "../../../../config.json";
import buildPage from "../views/index";
import layout from "./../layout/index.vue";

const config = JSON.parse(JSON.stringify(packageConfig));

function buildMicroRoutes() {
  const routes: Array<RouteRecordRaw> = [];
  Object.keys(config).forEach((key: string) => {
    if (key !== "base") {
      routes.push({
        path: `/${key}/:page*`,
        name: key.charAt(0).toUpperCase() + key.slice(1),
        component: buildPage(key),
        meta: { auth: config[key].auth },
      });
    }
  });

  return routes;
}

// const routes: Array<RouteRecordRaw> = [];
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "base",
    redirect: "/core",
    children: buildMicroRoutes(),
    component: layout,
  },
];

console.log(333, routes);

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  // history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
