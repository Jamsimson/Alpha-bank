<template>
  <q-page class="flex flex-center">
    <div>{{ id }}</div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TestPage",
  data() {
    return {
      username: "Motana",
      userPofile: null,
      balance: 600000,
      id: null,
    };
  },
  methods: {},
  mounted() {
    const id = this.$route.params.id;
    this.id = id;
    console.log(id);
  },
});
</script>
