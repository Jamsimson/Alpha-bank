<template>
  <q-page class="q-pa-md">
    <!--Title: My Qrcode -->
    <div class="text-h3 text-weight-bold" style="margin-top: 100px">
      My Qr code
    </div>
    <br />
    <!-- Qrcode -->
    <div class="absolute-center">
      <qrcode-vue :value="qrcodes" :size="size" level="H" />
    </div>
    <!-- radio for selecte date -->
    <div class=""></div>
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
    return {
      model: ref(null),
    };
  },
  data() {
    return {
      database: alpha_database(),
      x: "",
      value: "",
      message: null,
      size: 300,
      accounts: [],
      qrcodes: "",
      test: [],
    };
  },
  components: {
    QrcodeVue,
  },
  mounted() {
    this.qrcodes = `{account_name: ${this.database.accounts[0].account_name},account_number: ${this.database.accounts[0].account_number}}`;
    console.log(this.qrcode);
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
