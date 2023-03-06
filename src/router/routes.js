const routes = [
  {
    path: "",
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path: "/",
    component: () => import("layouts/AppLayout.vue"),
    children: [
      { path: "home", component: () => import("pages/HomePage.vue") },
      { path: "services", component: () => import("pages/ServicesPage.vue") },
      { path: "setting", component: () => import("pages/SettingPage.vue") },
    ],
  },
  {
    path: "/",
    component: () => import("layouts/TransferLayout.vue"),
    children: [
      { path: "test/:id", component: () => import("pages/TestPage.vue") },
      { path: "transfer", component: () => import("pages/TransferPage.vue") },
    ],
  },
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path: "",
    children: [
      { path: "start", component: () => import("pages/StartPage.vue") },
      { path: "signin", component: () => import("pages/SignInPage.vue") },
      { path: "otp", component: () => import("pages/OTPPage.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
