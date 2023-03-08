<template>
  <!-- qlayout -->
  <q-layout view="hHh Lpr fFf">
    <!-- center container -->
    <q-page-container>
      <q-page class="text-white bg-indigo-6"
        ><q-icon
          class="text-left text-yellow-8 q-ma-lg bg-indigo-6"
          name="arrow_back_ios"
          size="2.5em"
          @click="this.$router.push('/signin')"
        />
        <!-- recaptcha container -->
        <!-- card -->
        <q-card
          style="border-radius: 20px; min-height: 65%"
          class="q-pa-md fixed-bottom text-black text-center"
        >
          <div>
            <div class="text-h6 q-pa-md text-center">OTP Verification</div>
            <p>
              Please enter the OTP code
              <!-- <span class="text-yellow-8">{{ storedPhone }}</span> -->
            </p>
          </div>

          <div class="flex flex-center">
            <v-otp-input
              ref="otpInput"
              input-classes="otp-input"
              separator=" "
              :num-inputs="4"
              :should-auto-focus="true"
              :is-input-num="true"
              :conditionalClass="['one', 'two', 'three', 'four']"
              :placeholder="['*', '*', '*', '*']"
              @on-change="handleOnChange"
              @on-complete="handleOnComplete"
            />
          </div>
          <div class="q-pa-md text-right">
            Did't recieve?
            <!-- resend text -->
            <span
              class="text-indigo-6"
              style="cursor: pointer"
              @click="
                alert('OTP is not available yet please use email verification')
              "
              >Resend</span
            >
          </div>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script >
import { defineComponent } from "vue";
import { ref } from "vue";
import VOtpInput from "vue3-otp-input";

export default defineComponent({
  name: "OtpPage",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    VOtpInput,
  },
  methods: {
    handleOnComplete(value) {
      console.log("OTP completed: ", value);
      alert("OTP is not available yet please use email verification");
    },
    handleOnChange(value) {
      console.log("OTP changed: ", value);
    },
    clearInput() {
      this.$refs.otpInput.clearInput();
    },
  },

  setup() {
    const otpInput = ref(null);

    return { otpInput };
  },
});
</script>
<style>
.otp-input {
  width: 40px;
  height: 40px;
  padding: 5px;
  margin: 0 10px;
  font-size: 20px;
  border-radius: 15px;
  text-align: center;
}
/* Background colour of an input field with value */
.otp-input.is-complete {
  background-color: #ffcc41;
}
.otp-input::-webkit-inner-spin-button,
.otp-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input::placeholder {
  font-size: 15px;
  text-align: center;
  font-weight: 600;
}
</style>
