<template>
  <q-layout view="hHh Lpr fFf">
    <q-header class="bg-white text-dark">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <q-icon @click="this.$router.go(-1)" name="prarrow_back_iosint" />
          </q-avatar>
          <q-title class="text-weight-bold">Preview</q-title>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container class="q-ma-md">
      <q-card
        style="
          border-radius: 15px;
          background: linear-gradient(180deg, #445cb4 19.79%, #ffffff 73.44%);
        "
      >
        <div class="row">
          <div class="col-12 q-mt-md">
            <div class="float-left q-px-lg text-white">
              FROM
              <p class="flex flex-center">
                <img src="~assets/logo.png" style="width: 50px" />
                <span class="text-black q-pl-md" style="font-size: 30px"
                  >ALP</span
                >
              </p>
              <div style="height: 80px">
                <q-icon style="height: 70px; width: auto">
                  <img src="~assets/arrow.png" />
                </q-icon>
              </div>
              <span class="text-black">TO</span>
              <p class="flex flex-center">
                <q-avatar color="purple"> </q-avatar>
                <span class="text-black q-pl-md" style="font-size: 30px"
                  >SCB</span
                >
              </p>
            </div>
            <div style="font-size: 15px" class="float-right q-px-lg col">
              {{ database.username }}
            </div>
            <div style="font-size: 15px" class="float-right q-px-lg col">
              <div class="text-white text-right">
                {{
                  database.accounts[0].account_number.toString().slice(0, 3) +
                  "-" +
                  database.accounts[0].account_number.toString().slice(3, 9) +
                  "-" +
                  database.accounts[0].account_number.toString().slice(8)
                }}
              </div>
              <div style="height: 130px" class="float-right"></div>
            </div>

            <div style="font-size: 15px" class="float-right q-px-lg col">
              <span>Arthur Morgan</span>
              <p class="text-black text-right">888-888888-8</p>
            </div>
          </div>
          <div class="q-pa-lg fixed-bottom">
            <q-btn
              class="q-mt-xl q-mb-md full-width"
              color="green-12"
              text-color="indigo-6"
              unelevated
              to="/"
              label="Confirm"
              no-caps
              style="border-radius: 8px; height: 40px"
            />
          </div>
        </div>
      </q-card>
      <q-separator class="q-mt-md q-mb-md" color="black" />
      <div style="font-size: 20px">
        <span class="text-left">AMOUNT</span>
        <span class="float-right">10,000.0</span>
      </div>
      <q-separator class="q-mt-md q-mb-md" color="gray" />
      <div style="font-size: 20px">
        <span class="text-left">FEE</span>
        <span class="float-right">0.0</span>
      </div>
      <q-separator class="q-mt-md q-mb-md" color="gray" />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import { alpha_database } from "../stores/database";
import { ref } from "vue";

const friendList = [
  {
    name: "The Rock",
    avatar:
      "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTEpvaNuV1GBPcVY8iaFtGNKbXoEL7AYUvL2p2c-weTPf-QRNVLpvquxRw9P4RU5Wyp",
  },
  {
    name: "Jack",
    avatar:
      "https://static.wikia.nocookie.net/reddeadredemption/images/4/4d/Jackmarston1907.png",
  },
  {
    name: "Tom Smith",
    avatar:
      "https://www.uncut.co.uk/wp-content/uploads/2015/02/editors2tomsmith130607w.jpg",
  },
  {
    name: "John",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/John_Cena_July_2018.jpg/1200px-John_Cena_July_2018.jpg",
  },
];

export default defineComponent({
  name: "TransferPage",
  setup() {
    return {
      friendList,
      database: alpha_database(),
      slide: ref(1),
      accounts: [],
      accoutLength: 0,
      selected: ref(""),
      amount: ref(),
      name: ref(),
      reciever: ref(),
      recieverAccount: ref(),
      recieverBank: ref(),
    };
  },
  created() {
    this.name = this.database.username;
    this.accounts = this.database.accounts;
    this.accoutLength = this.accounts.length;
  },
});
</script>
