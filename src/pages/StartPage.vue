<template>
  <q-layout view="hHh Lpr fFf">
    <q-page-container>
      <q-page class="flex flex-center bg-indigo-6">
        <div class="text-center text-white">
          <div>
            <img
              alt="Quasar logo"
              src="~assets/logo.png"
              style="width: 120px; height: 120px"
            />
          </div>
          <div class="text-h3 text-yellow-8 q-pt-lg">
            <p>ALPHA</p>
          </div>
          <q-separator color="white" />
          <div class="text-h5 q-pt-sm">
            <p>Let's Get Started</p>
          </div>
          <div class="text-center">
            <p>Your finance, your control, with Alpha Banking.</p>
          </div>
          <div class="q-pa-xl fixed-bottom">
            <q-btn
              class="q-mt-xl full-width"
              color="green-12"
              text-color="indigo-6"
              unelevated
              to="/signin"
              label="Sign in"
              no-caps
              style="border-radius: 8px; height: 40px"
            />
            <p>
              Don't have an account? <a class="text-yellow-8" to="/">Sign up</a>
            </p>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import { onAuthStateChanged } from "@firebase/auth";

export default defineComponent({
  name: "IndexPage",
  async mounted() {
    onAuthStateChanged(this.$auth, async (user) => {
      if (user) {
        this.$router.push("/");
      }
    });
  },
});
</script>
