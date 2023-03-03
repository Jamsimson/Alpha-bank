<template>
  <q-page class="flex flex-center">
    <div class="text-center">
      <div>
        <img
          alt="Quasar logo"
          src="~assets/quasar-logo-vertical.svg"
          style="width: 200px; height: 200px"
        />
      </div>
      <div class="text-h3">
        <p>ALPHA</p>
      </div>
      <q-separator />
      <div class="text-h5">
        <p>Let's Get Started</p>
      </div>
      <div class="text-center">
        <p>Your finance, your control, with Alpha Banking.</p>
      </div>
      <q-btn
        class="q-mt-xl full-width"
        color="green"
        text-color="purple"
        unelevated
        to="/"
        label="Sign up"
        no-caps
        width="200px"
      />
      <p>Already have an account? <a href=""></a></p>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>
