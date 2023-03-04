<template>
  <!-- qlayout -->
  <q-layout view="hHh Lpr fFf">
    <!-- center container -->
    <q-page-container>
      <!-- recaptcha container -->
      <div id="recaptcha-container"></div>
      <q-page class="text-white bg-indigo-6 flex flex-center">
        <!-- Welcome text -->
        <div class="q-pa-md">
          <div class="text-h3 text-yellow-8 q-pt-lg">
            <p></p>
          </div>
          <div class="text-h4 q-pt-sm">
            <p>Welcome to ALPHA</p>
          </div>
          <div>
            <p>Your finances, your control, with Alpha Banking.</p>
          </div>
        </div>
        <!-- card -->
        <q-card
          style="border-radius: 20px; max-width: 400px; overflow: auto"
          class="q-pa-md flex flex-center"
        >
          <div>
            <div class="text-h6 text-black q-pa-md text-center">
              Sign in with
            </div>
            <q-tabs
              v-model="tab"
              narrow-indicator
              dense
              align="justify"
              class="text-primary"
            >
              <q-tab name="phone" label="Phone number" />
              <q-tab name="idcard" label="Identification Number" />
            </q-tabs>
          </div>
          <q-tab-panels class="text-black text-center" v-model="tab" animated>
            <q-tab-panel name="phone">
              <div class="text-h6">Phone number</div>
              <q-input
                rounded
                standout
                v-model="phoneNumber"
                placeholder="Enter your phone number"
              >
                <template v-slot:prepend>
                  <!-- dropdown country flag  -->
                  <q-select
                    v-model="country"
                    :options="['+66', '+1', '+44']"
                    rounded
                    standout
                    dense
                    style="width: 70px"
                  >
                  </q-select>
                </template>
                <template v-slot:append>
                  <q-icon name="phone" color="black" />
                </template>
              </q-input>
              <q-btn
                class="q-mt-xl full-width"
                color="green-12"
                text-color="indigo-6"
                unelevated
                label="Continue"
                no-caps
                style="border-radius: 8px; height: 40px"
                @click="this.$router.push('/otp')"
              />
            </q-tab-panel>

            <q-tab-panel name="idcard">
              <div class="text-h6">Alarms</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>
          </q-tab-panels>
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

export default defineComponent({
  name: "SignIn",
  setup() {
    return {
      tab: ref("phone"),
      phoneNumber: ref(""),
      country: ref("+66"),
    };
  },
  provide: {
    return: "return",
  },
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  async mounted() {
    window.RecaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // ...
          onSignInSubmit();
        },
      },
      this.$auth
    );
  },
  methods: {
    sendOTP() {
      const phoneNumber = this.country + this.phoneNumber;
      console.log(phoneNumber);
      const appVerifier = window.RecaptchaVerifier;
      signInWithPhoneNumber(this.$auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          console.log(confirmationResult);
          localStorage.setItem("storedPhone", this.phoneNumber);
          this.$router.push("/otp");
          // ...
        })
        .catch((error) => {
          // Error; SMS not sent
          // ...
          alert(error);
        });
    },
    signInPhone() {
      const phoneNumber = "+16505550101";
      const appVerifier = window.RecaptchaVerifier;
      signInWithPhoneNumber(this.$auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          // ...
        })
        .catch((error) => {
          // Error; SMS not sent
          // ...
          alert(error);
        });
    },
    signInEmail() {
      signInWithEmailAndPassword(
        this.$auth,
        this.user.email,
        this.user.password
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          this.$router.push("/");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          alert(errorMessage);
        });
    },
  },
});
</script>
