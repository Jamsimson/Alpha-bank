<template>
  <!-- qlayout -->
  <q-layout view="hHh Lpr fFf">
    <!-- center container -->
    <q-page-container>
      <!-- recaptcha container -->
      <div id="recaptcha-container"></div>
      <q-page class="text-white bg-indigo-6">
        <!-- back button -->
        <q-icon
          class="text-left text-yellow-8 q-ma-lg"
          name="arrow_back_ios"
          size="2.5em"
          @click="this.$router.push('/start')"
        />
        <!-- Welcome text -->
        <div class="q-pa-lg">
          <div class="text-h4 q-pt-sm">
            <p>Welcome to ALPHA</p>
          </div>
          <div>
            <p>Your finances, your control, with Alpha Banking.</p>
          </div>
        </div>
        <!-- card -->
        <q-card
          style="border-radius: 20px; min-height: 65%"
          class="q-pa-md fixed-bottom"
        >
          <div class="text-center flex flex-center">
            <div class="text-h6 text-black q-pa-md">Sign in with</div>
            <q-tabs
              v-model="tab"
              narrow-indicator
              dense
              align="justify"
              class="text-primary"
            >
              <q-btn-group v-model="tab" rounded>
                <q-btn outline color="indigo-6" label="Phone number">
                  <q-tab rounded class="q-overlay absolute-full" name="phone" />
                </q-btn>
                <q-btn outline color="indigo-6" label="Identification Number">
                  <q-tab class="q-overlay absolute-full" name="idcard"
                /></q-btn>
              </q-btn-group>
            </q-tabs>
            <q-tab-panels class="text-black q-mt-xl" v-model="tab" animated>
              <q-tab-panel name="phone">
                <div class="text-h6">Phone number</div>
                <q-input
                  rounded
                  standout
                  v-model="phoneNumber"
                  placeholder="Enter your phone number"
                  lazy-rules
                  :rules="[
                    (val) => val.length > 0 || 'Please enter your phone number',
                  ]"
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
                <div>
                  <div class="text-left">Identification Number</div>
                  <q-input
                    rounded
                    standout="bg-grey-6 text-black"
                    v-model="user.email"
                    placeholder="Enter your identification number or email"
                    style="min-width: 300px"
                    lazy-rules
                    :rules="[
                      (val) =>
                        val.length > 0 ||
                        'Please enter your identification number or email',
                    ]"
                  >
                    <template v-slot:append>
                      <q-icon name="badge" color="black" />
                    </template>
                  </q-input>
                  <div class="text-left q-pt-md">Password</div>
                  <q-input
                    rounded
                    standout="bg-grey-6 text-black"
                    v-model="user.password"
                    placeholder="Enter your password"
                    :type="isPwd ? 'password' : 'text'"
                    lazy-rules
                    :rules="[
                      (val) => val.length > 0 || 'Please enter your password',
                    ]"
                  >
                    <template v-slot:append>
                      <q-icon
                        :name="isPwd ? 'visibility_off' : 'visibility'"
                        color="black"
                        @click="isPwd = !isPwd"
                      />
                    </template>
                  </q-input>
                  <div
                    class="text-right text-blue"
                    onclick="alert('Please contact your administrator to reset your password.')"
                  >
                    Forgot password?
                  </div>
                  <q-btn
                    class="q-mt-md full-width"
                    color="green-12"
                    text-color="indigo-6"
                    unelevated
                    label="Sign in"
                    no-caps
                    type="submit"
                    style="border-radius: 8px; height: 40px"
                    @click="signInEmail"
                  />
                </div>
              </q-tab-panel>
            </q-tab-panels>
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
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  onAuthStateChanged,
} from "firebase/auth";

export default defineComponent({
  name: "SignIn",
  setup() {
    return {
      tab: ref("phone"),
      phoneNumber: ref(""),
      country: ref("+66"),
      isPwd: ref(true),
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
    onAuthStateChanged(this.$auth, async (user) => {
      if (user) {
        this.$router.push("/");
      }
    });

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
      if (this.user.email == "" || this.user.password == "") {
        alert("Please enter your email and password.");
        return;
      }
      signInWithEmailAndPassword(
        this.$auth,
        this.user.email,
        this.user.password
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          this.$router.push("/home");
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
