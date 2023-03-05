<template>
  <q-layout view="hHh lpR fFf" class="layout-background">
    <!-- heading bar -->
    <q-header elevated class="bg-white text-black">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="img/alpha.png" />
          </q-avatar>
          Alpha Bank
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer reveal class="bg-grey-4 rounded-borders fixed-bottom">
      <q-tabs
        v-model="tab"
        class="q-mt-bg text-grey-7"
        active-color="grey-10"
        no-caps
        narrow-indicator
        dense
        align="justify"
      >
        <q-route-tab to="/home" class="" name="home" icon="home" label="Home" />
        <q-route-tab
          to="/transfer"
          class=""
          name="transfer"
          icon="sync_alt"
          label="Transfer"
        />
        <q-route-tab
          to="#"
          class=""
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
          label="Setting"
        />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>
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
