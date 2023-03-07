<template>
  <q-page class="q-pa-md">
    <!-- section usernam, date now, and user photo -->
    <section class="section1">
      <div class="row" style="height: 200px">
        <div class="col">
          <!-- username -->
          <div
            class="col q-pa-md text-h5 text-weight-bold"
            style="height: 74px"
          >
            Hi {{ this.database.user[0].username }}
          </div>
          <!-- date now -->
          <div
            class="col q-pa-md text-h6 text-weight-medium"
            style="height: 74px"
          >
            {{ currentDate() }}
          </div>
        </div>
        <div class="col flex flex-center">
          <!-- user img -->
          <img src="img/user icon.png" alt="" style="height: 130px" />
        </div>
      </div>
    </section>
    <br />
    <!-- section account balance -->
    <section class="section2">
      <q-card class="my-balance bg-warning">
        <div class="row" style="height: 90px">
          <div
            class="col-6 flex flex-center text-h6 text-weight-bold"
            style="color: #445cb4"
          >
            Account balance
          </div>
          <div class="vertical"></div>
          <div class="col-6 flex flex-center text-h5 text-weight-bolder">
            $ {{ balance }}
          </div>
        </div>
      </q-card>
    </section>
    <br />
    <!-- section add. -->
    <section class="section3">
      <q-card class="my-button bg-grey-13 q-pa-md" style="height: 200px">
        <div class="">advert</div>
      </q-card>
    </section>
    <!-- section shotcut -->
    <br />
    <section class="section4">
      <q-card class="my-shotcut">
        <div class="row q-pa-md text-subtitle2" style="height: 200px">
          <!-- button 1: Balance -->
          <div class="col-4">
            <div class="col flex flex-center">
              <q-btn
                round
                to="/test"
                size="md"
                text-color="dark"
                color="green-12"
                icon="account_balance_wallet"
              />
            </div>
            <div class="col flex flex-center">Balance</div>
          </div>
          <!-- button 2: Pay bill -->
          <div class="col-4">
            <div class="col flex flex-center">
              <q-btn
                round
                to="/test"
                size="md"
                text-color="dark"
                color="green-12"
                icon="receipt_long"
              />
            </div>
            <div class="col flex flex-center">Pay Bill</div>
          </div>
          <!-- button 3: My qrcode -->
          <div class="col-4">
            <div class="col flex flex-center">
              <q-btn
                to="`/my-qrcode/${id}`"
                round
                size="md"
                text-color="dark"
                color="green-12"
                icon="qr_code_2"
              />
            </div>
            <div class="col flex flex-center">My QRcode</div>
          </div>
          <!-- button 4 -->
          <div class="col-4">
            <div class="col flex flex-center">
              <q-btn
                round
                size="md"
                text-color="dark"
                color="green-12"
                icon="add"
              />
            </div>
            <div class="col flex flex-center">command</div>
          </div>
          <!-- button 5 -->
          <div class="col-4">
            <div class="col flex flex-center">
              <q-btn
                round
                size="md"
                text-color="dark"
                color="green-12"
                icon="add"
              />
            </div>
            <div class="col flex flex-center">command</div>
          </div>
          <!-- button 6 -->
          <div class="col-4">
            <div class="col flex flex-center">
              <q-btn
                round
                size="md"
                text-color="dark"
                color="green-12"
                icon="add"
              />
            </div>
            <div class="col flex flex-center">command</div>
          </div>
        </div>
      </q-card>
    </section>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { alpha_database } from "../stores/database";
export default defineComponent({
  name: "HomePage",
  data() {
    return {
      database: alpha_database(),
      userPofile: null,
      balance: 600000,
      user: [],
      user_account: [],
    };
  },
  methods: {
    currentDate() {
      const current = new Date();
      const date = `${current.getDate()}/${
        current.getMonth() + 1
      }/${current.getFullYear()}`;
      return date;
    },
  },
  mounted() {
    this.user = this.database.user[0];
    console.log(`user: ${this.user.email} ${this.user.username}`);
  },
});
</script>
<style>
.vertical {
  border-left: 1px solid black;
  height: 90px;
  position: absolute;
  left: 50%;
}
</style>
