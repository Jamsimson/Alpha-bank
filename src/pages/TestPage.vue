<template>
  <q-page class="q-pa-md">
    <div class="q-gutter-sm">
      <q-radio v-model="qrcode" val="line" label="Line" />
      <q-radio v-model="qrcode" val="rectangle" label="Rectangle" />
      <q-radio v-model="qrcode" val="ellipse" label="Ellipse" />
      <q-radio v-model="qrcode" val="polygon" label="Polygon" />
    </div>
    <div class="q-px-sm">
      Your selection is: <strong>{{ qrcode }}</strong>
    </div>
    <div>
      {{ this.database.username }}
      {{ this.database.accounts[1] }}
    </div>
    <div>
      <qrcode-vue :value="qrcode" :size="size" level="H" />
    </div>
  </q-page>
</template>
<script>
import { ref } from "vue";
import QrcodeVue from "qrcode.vue";
import { alpha_database } from "../stores/database";
export default {
  setup() {
    return {
      qrcode: ref("line"),
    };
  },
  data() {
    return {
      database: alpha_database(),
      x: "",
      value: "",
      message: null,
      size: 120,
      accounts: [],
    };
  },
  components: {
    QrcodeVue,
  },
  mounted() {
    const id = this.$route.params.id;
    console.log(id);
    this.value = `${id};123456768`;
    var data = this.database.getDataById(2);
    console.log(`${data.username} ${data.email}`);
    // for (var i = 0; i < data.accounts.length; i++) {
    //   console.log(`${data.accounts[i].id}`);
    //   console.log(`${data.accounts[i].balance}`);
    // }
  },
  methods: {
    getMessageQr() {
      this.message = `${this.model}`;
      console.log(`${this.message}`);
    },
  },
};
</script>
