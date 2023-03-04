<template>
  <!-- qlayout -->
  <q-layout view="hHh Lpr fFf">
    <!-- center container -->
    <q-page-container>
      <div id="recaptcha-container"></div>
      <q-page class="text-white bg-indigo-6 flex flex-center">
        <!-- recaptcha container -->
        <!-- card -->
        <q-card
          style="border-radius: 20px; max-width: 400px; overflow: auto"
          class="q-pa-md flex flex-center text-black"
        >
          <div>
            <div class="text-h6 q-pa-md text-center">OTP Verification</div>
            <p>
              Please enter the OTP code sent to your phone number
              <span class="text-yellow-8">{{ storedPhone }}</span>
            </p>
          </div>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const storedPhone = localStorage.getItem("storedPhone");
export default defineComponent({
  name: "SignIn",
  setup() {
    return {
      tab: ref("phone"),
      country: ref("+66"),
    };
  },
  data() {
    return {
      user: {
        email: "",
        password: "",
        storedPhone: storedPhone,
      },
    };
  },
});
</script>
