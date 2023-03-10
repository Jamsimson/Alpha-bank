<template>
  <q-page>
    <div class="flex flex-center">
      <div v-if="showCamera">
        <qrcode-stream @init="onInit" :camera="camera" @decode="onDecode">
        </qrcode-stream>
      </div>
      <p class="text-subtitle1" v-if="result">
        Last result: <b>{{ result }}</b>
      </p>
    </div>
  </q-page>
</template>

<style></style>

<script>
import { QrcodeStream } from "vue3-qrcode-reader";
export default {
  name: "TestPage",
  components: { QrcodeStream },
  data() {
    return {
      isValid: undefined,
      camera: "auto",
      result: null,
      json: [],
      showCamera: true,
    };
  },

  methods: {
    async onDecode(content) {
      var splitData;
      this.result = content;
      console.log(typeof this.result);
      splitData = JSON.parse(this.result);
      console.log(splitData.account_name);
      this.$router.push(
        `transfer/SCB/${splitData.account_name}/${splitData.account_number}`
      );
      this.turnCameraOff();
    },
    turnCameraOn() {
      this.camera = "auto";
      this.showCamera = true;
    },
    turnCameraOff() {
      this.camera = "off";
      this.showCamera = false;
    },
    async onInit(promise) {
      try {
        await promise;
      } catch (e) {
        console.error(e);
      } finally {
        this.showScanConfirmation = this.camera === "off";
      }
    },
  },
};
</script>
