<template>
  <q-page class="q-pa-md">
    <!-- section 1 -->
    <section>
      <div>FAVORITE (3)</div>
      <div class="row">
        <div class="col-3">
          <div class="col flex flex-center">
            <q-btn color="primary" icon="check" @click="onClick" />
          </div>
          <div class="col flex flex-center">Frank</div>
        </div>
        <div class="col-3">
          <div class="col flex flex-center">
            <q-btn color="primary" icon="check" @click="onClick" />
          </div>
          <div class="col flex flex-center">Frank</div>
        </div>
        <div class="col-3">
          <div class="col flex flex-center">
            <q-btn color="primary" icon="check" @click="onClick" />
          </div>
          <div class="col flex flex-center">Frank</div>
        </div>
      </div>
    </section>
    <!-- section 2 -->
    <!-- section 3 -->
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TransferPage",
});
</script>
