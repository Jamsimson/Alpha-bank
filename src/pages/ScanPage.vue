<template>
  <q-page>
    <div class="flex flex-center">
      <div v-if="showCamera">
        <qrcode-stream :camera="camera" @decode="onDecode"> </qrcode-stream>
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
  name: "ScanPage",
  components: { QrcodeStream },
  data() {
    return {
      isValid: undefined,
      camera: "auto",
      result: null,
      showCamera: true,
    };
  },
  //   computed: {
  //     textInfo() {
  //       return this.showCamera
  //         ? "position the qrcode on the camera"
  //         : "Press the button and scan a qrcode.";
  //     },
  //   },
  methods: {
    async onDecode(content) {
      this.result = content;

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
  },
};
</script>
