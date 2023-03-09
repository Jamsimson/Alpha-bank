const routes = [
  {
    path: "",
    component: () => import("layouts/AppLayout.vue"),
    children: [
      { path: "", component: () => import("pages/HomePage.vue") },
      { path: "home", component: () => import("pages/HomePage.vue") },
      { path: "services", component: () => import("pages/ServicesPage.vue") },
      { path: "setting", component: () => import("pages/SettingPage.vue") },
    ],
  },
  {
    path: "/",
    component: () => import("layouts/TransferLayout.vue"),
    children: [
      { path: "test", component: () => import("pages/TestPage.vue") },
      { path: "transfer/:bank/:account_name/:account_number", component: () => import("pages/TransferPage.vue") },
      { path: "transfer", component: () => import("pages/TransferPage.vue") },
      { path: "my-qrcode", component: () => import("pages/QrPage.vue") },
    ],
  },
  {
    path: "/",
    component: () => import("layouts/ScanLayout.vue"),
    children: [
      { path: "scan-qrcode", component: () => import("pages/ScanPage.vue") },
    ],
  },
  {
    path: "/",
    component: () => import("layouts/BalanceLayout.vue"),
    children: [
      { path: "account", component: () => import("pages/AccountPage.vue") },
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
  {
    path: "",
    children: [
      { path: "preview/:bank/:account_name/:account_number/:amount", component: () => import("pages/PreviewPage.vue") },
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
