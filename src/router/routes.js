const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path: "/home",
    component: () => import("layouts/AppLayout.vue"),
    children: [{ path: "", component: () => import("pages/TestPage.vue") }],
  },
  {
    path: "/start",
    component: () => import("pages/StartPage.vue"),
  },
  {
    path: "/signin",
    component: () => import("pages/SignInPage.vue"),
  },
  {
    path: "/otp",
    component: () => import("pages/OTPPage.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
