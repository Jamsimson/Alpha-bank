<template>
  <q-page class="q-pa-md">
    <!--Title: My Qrcode -->
    <div class="text-h4 text-weight-bold">My Qr code</div>
    <br />
    <!-- Qrcode -->
    <div class="flex flex-center">
      <qrcode-vue :value="qrcode" :size="size" level="H" />
    </div>
    <!-- radio for selecte date -->
    {{ accounts }}
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import QrcodeVue from "qrcode.vue";
import { alpha_database } from "../stores/database";

export default defineComponent({
  name: "QrPage",
  setup() {
    return {};
  },
  data() {
    return {
      database: alpha_database(),
      x: "",
      value: "",
      message: null,
      size: 220,
      accounts: [],
      qrcode: "",
      test: [],
    };
  },
  components: {
    QrcodeVue,
  },
  mounted() {
    this.qrcode = `${this.database.accounts[1].account_number},`;
    // console.log(this.qrcode);
    this.test = this.database.accounts;
    for (var i = 0; i < this.test.length; i++) {
      var upNew = {
        account_name: `${this.database.accounts[i].account_name}`,
        account_number: `${this.database.accounts[i].account_number}`,
      };
      this.accounts.push(upNew);
      console.log("update new" + upNew);
    }
  },
});
</script>
