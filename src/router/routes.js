
const routes = [
  {
    path: '',
    component: () => import('layouts/AppLayout.vue'),
    children: [
      { path: 'home', component: () => import('pages/HomePage.vue') },
      { path: 'services', component: () => import('pages/ServicesPage.vue') },
      { path: 'setting', component: () => import('pages/SettingPage.vue') }
    ]
  },
  {
    path: '',
    component: () => import('layouts/TransferLayout.vue'),
    children: [
      { path: 'test/:id', component: () => import('pages/TestPage.vue') },
      { path: 'transfer', component: () => import('pages/TransferPage.vue') },
      { path: 'my-qrcode', component: () => import('pages/QrPage.vue') },

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
