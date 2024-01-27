import { createRouter, createWebHistory } from "vue-router";
import { projectAuth } from "@/configs/firebase";

const requireAuth = (to, from, next) => {
  const user = projectAuth.currentUser;
  console.log("Before enter router: ", user);
  if (!user) next({ name: "Login", params: {} });
  else next();
};

const routes = [
  {
    path: "/",
    name: "home",
    meta: {
      text: "Home",
      leading: false,
      isShowFooter: true,
    },
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/index.vue"),
  },
  {
    path: "/register",
    name: "Register",
    meta: {
      layout: "Auth",
    },
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/register.vue"),
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      layout: "Auth",
    },
    component: () =>
      import(/* webpackChunkName: "Login" */ "../views/login.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    meta: {
      text: "Profile",
      leading: false,
      isShowFooter: true,
    },
    component: () =>
      import(/* webpackChunkName: "Profile" */ "../views/profile.vue"),
    beforeEnter: requireAuth,
  },
  {
    path: "/logout",
    name: "Logout",
    component: () =>
      import(/* webpackChunkName: "Logout" */ "../views/logout.vue"),
  },
  {
    path: "/report",
    name: "Report",
    meta: {
      text: "Report",
      leading: false,
      isShowFooter: true,
    },
    component: () =>
      import(/* webpackChunkName: "Report" */ "../views/report.vue"),
  },
  {
    path: "/budget",
    name: "Budget",
    meta: {
      text: "Budget",
      leading: false,
      isShowFooter: true,
    },
    component: () =>
      import(/* webpackChunkName: "Budget" */ "../views/budget.vue"),
  },
  {
    path: "/new-transaction",
    name: "NewTransaction",
    meta: {
      text: "New Transaction",
      isShowFooter: false,
    },
    component: () =>
      import(
        /* webpackChunkName: "NewTransaction" */ "../views/new-transaction.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
