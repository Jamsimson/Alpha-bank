<template>
  <q-page class="q-pa-md">
    <!--Title: My Qrcode -->
    <div
      class="text-h4 text-weight-bold"
      style="margin-top: 50px; margin-bottom: 50px"
    >
      My Qr code
    </div>
    <br />
    <!-- Qrcode -->
    <section>
      <div class="flex flex-center">
        <qrcode-vue :value="qrcodes" :size="size" level="H" />
      </div>
    </section>
    <br />
    <!-- share and save section -->
    <section>
      <div class="row q-pa-md">
        <div class="col text-right" style="margin-right: 12%">
          <q-btn
            unelevated
            text-color="white"
            color="green-12"
            label="Share"
            style="width: 120px; border-radius: 10px"
          />
        </div>
        <br />
        <div class="col" style="width: 150px">
          <q-btn
            outline
            color="green-12"
            label="Save"
            style="width: 120px; border-radius: 10px"
          />
        </div>
      </div>
    </section>
    <!-- change Accout& back to main mean section -->
    <section>
      <div class="flex flex-center" style="margin-top: 70px">
        <q-btn
          unelevated
          text-color="primary"
          color="green-12"
          label="Change Account"
          style="width: 300px; border-radius: 10px"
        />
        <div class="text-right text-blue" @click="this.$router.go(-1)">
          <q-icon name="arrow_back_ios" />
          section Back to main menu
        </div>
      </div>
    </section>
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
    this.qrcodes = `{
    "account_name":"${this.database.accounts[0].account_name}",
    "account_number":"${this.database.accounts[0].account_number}"
    }`;
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
