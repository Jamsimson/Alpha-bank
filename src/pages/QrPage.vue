<template>
  <q-page class="q-pa-md">
    <div>qrpage</div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "QrPage",
  data() {
    return {
      username: "Motana",
      userPofile: null,
      balance: 600000,
      id: null,
    };
  },
  methods: {},
});
</script>
