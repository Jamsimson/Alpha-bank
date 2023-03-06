<template>
  <q-layout view="hHh lpR fFf" class="layout-background">
    <!-- heading bar -->
    <q-header elevated class="bg-white text-black">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
<<<<<<< HEAD
            <img src="img/alpha.png" />
=======
            <img src="..\assets\logo.png" />
>>>>>>> origin/welcome_and_login
          </q-avatar>
          Alpha Bank
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>

<<<<<<< HEAD
    <q-footer reveal class="bg-grey-4 rounded-borders fixed-bottom">
      <q-tabs
        v-model="tab"
        class="q-mt-bg text-grey-7"
        active-color="grey-10"
=======
    <q-footer reveal class="bg-white rounded-borders fixed-bottom">
      <q-tabs
        class="q-mt-sm text-blue-grey-10"
        active-color="#E5E5E5"
>>>>>>> origin/welcome_and_login
        no-caps
        narrow-indicator
        dense
        align="justify"
      >
<<<<<<< HEAD
        <q-route-tab to="/home" class="" name="home" icon="home" label="Home" />
        <q-route-tab
          to="/transfer"
          class=""
          name="transfer"
          icon="sync_alt"
=======
        <q-route-tab
          to="#"
          class="t"
          name="home"
          icon="fas fa-home-user"
          label="Home"
        />
        <q-route-tab
          to="#"
          class=""
          name="directory"
          icon="fas fa-list-ul"
>>>>>>> origin/welcome_and_login
          label="Transfer"
        />
        <q-route-tab
          to="#"
          class=""
<<<<<<< HEAD
          name="scan"
          icon="qr_code_scanner"
          label="Scan"
        />
        <q-route-tab
          to="/services"
          class=""
          name="services"
          icon="grid_view"
          label="Services"
        />
        <q-route-tab
          to="/setting"
          class=""
          name="setting"
          icon="account_circle"
=======
          name="directory"
          icon="fas fa-list-ul"
          label="Scan"
        />
        <q-route-tab
          to="#"
          class=""
          name="search"
          icon="fas fa-search"
          label="Services"
        />
        <q-route-tab
          to="#"
          class=""
          name="about"
          icon="fas fa-info-circle"
>>>>>>> origin/welcome_and_login
          label="Setting"
        />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>
<<<<<<< HEAD
<script>
export default {
  name: "AppLayout",
  data() {
    return {
      tab: "home",
    };
  },
};
</script>
=======
>>>>>>> origin/welcome_and_login
