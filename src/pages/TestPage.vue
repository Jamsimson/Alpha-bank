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
      // show loading indicator

      try {
        const { capabilities } = await promise;

        // successfully initialized
      } catch (error) {
        if (error.name === "NotAllowedError") {
          // user denied camera access permisson
        } else if (error.name === "NotFoundError") {
          // no suitable camera device installed
        } else if (error.name === "NotSupportedError") {
          // page is not served over HTTPS (or localhost)
        } else if (error.name === "NotReadableError") {
          // maybe camera is already in use
        } else if (error.name === "OverconstrainedError") {
          // did you requested the front camera although there is none?
        } else if (error.name === "StreamApiNotSupportedError") {
          // browser seems to be lacking features
        }
      }
    },
  },
};
</script>
