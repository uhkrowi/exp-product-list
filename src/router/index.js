import { createRouter, createWebHashHistory } from "vue-router";
import DefaultLayout from "@/layouts/Default.vue";

const _404 = () => import("@/views/404.vue");

const ProductList = () => import("@/views/product/List.vue");
const ProductDetail = () => import("@/views/product/Detail.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: (to) => "product",
  },
  {
    path: "/product",
    name: "Product",
    component: ProductList,
    meta: {
      layout: DefaultLayout,
    },
  },
  {
    path: "/product/:id",
    name: "Product Detail",
    component: ProductDetail,
    meta: {
      layout: DefaultLayout,
      breadcrumb: [
        {
          label: "List product",
          url: "/product",
        },
      ],
    },
  },
  {
    path: "/:catchAll(.*)*",
    component: _404,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
