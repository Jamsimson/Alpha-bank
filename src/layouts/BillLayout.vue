<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-white text-dark">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <q-icon @click="goBack()" name="prarrow_back_iosint" />
          </q-avatar>
          <q-title class="text-weight-bold">Bill payment</q-title>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
export default {
  name: "BillLayout",
  data() {
    return {};
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
