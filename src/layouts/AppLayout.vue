<template>
  <q-layout view="hHh lpR fFf" class="layout-background">
    <!-- heading bar -->
    <q-header elevated class="bg-white text-black">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="..\assets\logo.png" />
          </q-avatar>
          Alpha Bank
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer reveal class="bg-white rounded-borders fixed-bottom">
      <q-tabs
        class="q-mt-sm text-blue-grey-10"
        active-color="#E5E5E5"
        no-caps
        narrow-indicator
        dense
        align="justify"
      >
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
          label="Transfer"
        />
        <q-route-tab
          to="#"
          class=""
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
          label="Setting"
        />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>
