<template>
  <q-page class="q-pa-md">
    <!-- title -->
    <div class="text-h4 text-weight-bold">Product & Service</div>
    <!-- button  -->
    <div class="row q-pa-md">
      <!-- 1 -->
      <div class="col-3">
        <div class="col flex flex-center" style="height: 60px">
          <q-btn
            size="20px"
            text-color="dark"
            color="warning"
            icon="sync_alt"
            to="/transfer"
          />
        </div>
        <div class="col flex flex-center text-caption">Transfer</div>
      </div>
      <!-- 2 -->
      <div class="col-3">
        <div class="col flex flex-center" style="height: 60px">
          <q-btn
            size="20px"
            text-color="dark"
            color="warning"
            icon="credit_card"
            to="#"
          />
        </div>
        <div class="col flex flex-center text-caption">Cardless ATM</div>
      </div>
      <div class="col-3">
        <div class="col flex flex-center" style="height: 60px">
          <q-btn
            size="20px"
            text-color="dark"
            color="warning"
            icon="receipt_long"
            to="#"
          />
        </div>
        <div class="col flex flex-center text-caption">Pay bill</div>
      </div>
      <div class="col-3">
        <div class="col flex flex-center" style="height: 60px">
          <q-btn
            size="20px"
            text-color="dark"
            color="warning"
            icon="qr_code_2"
            to="/my-qrcode"
          />
        </div>
        <div class="col flex flex-center text-caption">My Qrcode</div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ServicesPage",
});
</script>
