import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "weightlossprograms",
    path: "/",
    component: () => import("@/pages/HomePage.vue"),
    meta: {
      title: "WeightLossPrograms",
    },
  },
  {
    name: "login",
    path: "/login",
    component: () => import("@/components/LogIn.vue"),
    meta: {
      title: "LogIn",
    },
  },
  {
    name: "forgetpassword",
    path: "/forgetpassword",
    component: () => import("@/components/ForgetPassword.vue"),
    meta: {
      title: "Forget Password",
    },
  },
  {
    name: "create",
    path: "/createaccount",
    component: () => import("@/components/CreateAccount.vue"),
    meta: {
      title: "Create Account",
    },
  },
  {
    name: "confirm",
    path: "/confirmpassword",
    component: () => import("@/components/ConfirPassword.vue"),
    meta: {
      title: "Confirm Password",
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
    meta: {
      title: "Check",
    },
  },
  {
    name: "reviewed",
    path: "/reviewed",
    component: () => import("@/components/ReviewedPrescription.vue"),
    meta: {
      title: "Reviewed",
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});
export default router;
