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
      <q-dialog v-model="fixed">
        <q-card>
          <q-card-section>
            <div class="text-h6">Transfer sucessfully</div>
          </q-card-section>

          <q-separator />

          <div class="text-center">
            <q-icon name="check_circle" color="green" size="50px" />
            <div class="text-left q-px-md">
              <p>Amount: {{ amount }}</p>
              <p>From: {{ database.username }}</p>
              <p>To: {{ reciever == "undefined" ? "John" : reciever }}</p>
            </div>
          </div>
          <q-separator />

          <q-card-actions align="right">
            <q-btn
              flat
              label="Go to home"
              to="/"
              color="primary"
              v-close-popup
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
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
                <span class="text-black q-pl-md" style="font-size: 30px">{{
                  recieverBank
                }}</span>
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
              {{ reciever == "undefined" ? "John" : reciever }}
            </div>
            <div style="font-size: 15px" class="float-right q-px-lg col">
              <p class="text-black text-right">
                {{
                  recieverAccount.slice(0, 3) +
                  "-" +
                  recieverAccount.slice(3, 9) +
                  "-" +
                  recieverAccount.slice(8)
                }}
              </p>
            </div>
          </div>
          <div class="q-pa-lg fixed-bottom">
            <q-btn
              class="q-mt-xl q-mb-md full-width"
              color="green-12"
              text-color="indigo-6"
              unelevated
              @click="tranfer"
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
        <span class="float-right">{{ amount }}</span>
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
import { onAuthStateChanged } from "@firebase/auth";
// update firebase
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
} from "firebase/firestore";

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
      amount: ref(0),
      name: ref(),
      reciever: ref(""),
      recieverAccount: ref(""),
      recieverBank: ref(""),
      fixed: ref(false),
    };
  },
  mounted() {
    const bank = this.$route.params.bank;
    const account_name = this.$route.params.account_name;
    const account_number = this.$route.params.account_number;
    const amount = this.$route.params.amount;

    this.recieverBank = bank;
    this.reciever = account_name;
    this.recieverAccount = account_number;
    this.amount = amount;
    console.log(
      `Bank:${bank} account name:${account_name} account_number:${account_number}`
    );
  },
  created() {
    this.name = this.database.username;
    this.accounts = this.database.accounts;
    this.accoutLength = this.accounts.length;
  },
  methods: {
    async tranfer() {
      onAuthStateChanged(this.$auth, async (user) => {
        if (user) {
          const signedInUserEmail = user.email;
          // console.log(this.signedInUser.email);
          var q = query(
            collection(this.$db, "users"),
            where("email", "==", signedInUserEmail)
          );
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach(async (doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            this.name = doc.data().name;
            this.profile_image = doc.data().profile_image;
            this.database.setImageProfile(this.profile_image);
            // get account data from another collection
            q = query(
              collection(this.$db, "accounts"),
              where("owner", "==", doc.id)
            );
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach(async (doc) => {
              if (
                doc.data().account_number == this.accounts[0].account_number
              ) {
                console.log("found");
                console.log(doc.data().balance);
                const newBalance = doc.data().balance - this.amount;
                console.log(newBalance);
                await updateDoc(doc.ref, {
                  balance: newBalance,
                })
                  .then(() => {
                    console.log("Document successfully updated!");
                    this.fixed = true;
                  })
                  .catch((error) => {
                    // The document probably doesn't exist.
                    console.error("Error updating document: ", error);
                    alert("Error updating document: ", error);
                  });
              }
              console.log(`${doc.id} => ${doc.data()}`);
            });
          });
        } else {
          this.$router.push("start");
        }
      });
    },
  },
});
</script>
