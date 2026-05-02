import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  // {
  //   name: "landingpage",
  //   path: "/",
  //   component: () => import("@/pages/LandingPage.vue"),
  //   meta: {
  //     title: "LandingPage",
  //   },
  // },
  {
    name: "weightlossprograms",
    path: "/",
    component: () => import("@/pages/HomePage.vue"),
    meta: {
      title: "WeightLossPrograms",
    },
  },
  {
    name: "howitworks",
    path: "/howitworks",
    component: () => import("@/pages/ServicePage.vue"),
    meta: {
      title: "HowItWorks",
    },
  },
  {
    name: "blog",
    path: "/blog",
    component: () => import("@/pages/BlogPage.vue"),
    meta: {
      title: "Blog",
    },
  },
  {
    name: "blogviewall",
    path: "/blogviewall",
    component: () => import("@/components/BlogViewAll.vue"),
    meta: {
      title: "BlogViewAll",
    },
  },
  {
    name: "fac",
    path: "/fac",
    component: () => import("@/pages/FacPage.vue"),
    meta: {
      title: "FAC",
    },
  },
  {
    name: "check",
    path: "/check",
    component: () => import("@/components/Check.vue"),
    meta:{
      title:"Check"
    }
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});
export default router;
