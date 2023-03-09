<template>
  <q-page class="q-pa-md">
    <!-- section 1 -->
    <section>
      FAVARITE <span>({{ friendList.length }})</span>
      <q-virtual-scroll
        :items="friendList"
        virtual-scroll-horizontal
        v-slot="{ item, index }"
      >
        <div :key="index" :class="item.class" class="q-pa-md text-center">
          <img
            :src="item.avatar"
            style="
              border-radius: 20px;
              width: 80px;
              height: 70px;
              object-fit: cover;
            "
          />
          <div>{{ item.name }}</div>
        </div>
      </q-virtual-scroll>
    </section>
    <!-- section 2 -->
    <section>
      <q-carousel
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        control-color="grey-8"
        navigation
        padding
        height="180px"
      >
        <!-- loop card for shows accout -->
        <q-carousel-slide
          v-for="index in accounts.length"
          :key="index"
          :name="index"
        >
          <div class="">
            <q-card
              style="border-radius: 20px"
              class="bg-indigo-6 text-yellow-7"
            >
              <q-card-section>
                <!-- use format number like this: **** 1234 -->
                <div style="font-size: 15px">
                  ****
                  {{ accounts[index - 1].account_number.toString().slice(6) }}
                </div>
                <div class="q-pt-md" style="font-size: 30px">
                  $ {{ accounts[index - 1].balance.toLocaleString() }}
                </div>
              </q-card-section>
            </q-card>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </section>
    <!-- section 3 -->
    <section class="q-pa-md">
      <div>
        TO
        <q-select
          v-model="selected"
          :options="options"
          label="Choose a bank for transfer"
          outlined
          rounded
          class="q-mt-sm"
          style="width: 100%"
        />
        Account number
        <q-input
          v-model="accountNumber"
          standout
          rounded
          class="q-mt-sm"
          style="width: 100%"
          label="Enter account number to transfer"
        />
        Amount
        <q-input
          v-model="amount"
          standout
          rounded
          class="q-mt-sm"
          style="width: 100%"
          label="Enter amount to transfer"
          hint="Remaining limit today: 10,000,000.00"
        />
        <div class="float-right">
          <q-avatar
            size="40px"
            font-size="small"
            class="bg-yellow-8 q-ml-sm"
            @click="amount = 100"
          >
            <div>100</div>
          </q-avatar>
          <q-avatar
            size="40px"
            font-size="small"
            class="bg-yellow-8 q-ml-sm"
            @click="amount = 500"
          >
            <div>500</div>
          </q-avatar>
          <q-avatar size="40px" font-size="small" class="bg-yellow-8 q-ml-sm">
            <div>+</div>
          </q-avatar>
        </div>
        <div class="q-pt-lg">Note</div>
        <q-input
          v-model="note"
          standout
          rounded
          class="q-mt-sm"
          style="width: 100%"
          label="Enter personal note to transfer"
        />
        <q-btn
          v-model="preview"
          class="q-mt-lg full-width"
          color="green-12"
          text-color="indigo-6"
          unelevated
          label="Preview"
          no-caps
          style="border-radius: 8px; height: 40px"
          @click="addClick"
        />
      </div>
    </section>
  </q-page>
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
      account_name: null,
      accoutLength: 0,
      options: ["SCB", "KTB", "GSB", "UOB"],
      selected: ref(""),
      amount: ref(),
      accountNumber: ref(),
      note: ref(""),
      preview: ref(false),
    };
  },
  created() {
    this.accounts = this.database.accounts;
    this.accoutLength = this.accounts.length;
  },

  mounted() {
    const bank = this.$route.params.bank;
    const account_name = this.$route.params.account_name;
    const account_number = this.$route.params.account_number;
    this.selected = bank;
    this.account_name = account_name;
    this.accountNumber = account_number;
    console.log(
      `Bank:${bank} account name:${account_name} account_number:${account_number}`
    );
  },
  methods: {
    addClick() {
      if (this.amount > 10000) {
        alert("Amount must be less than 20,000");
        return;
      }
      if (this.selected == undefined) {
        alert("Please select bank");
        return;
      }
      console.log(this.accountNumber.length);
      if (this.accountNumber == undefined || this.accountNumber.length != 10) {
        alert("Please enter account number and must be 10 digits");
        return;
      }
      if (this.amount == undefined) {
        alert("Please enter amount");
        return;
      }

      console.log(
        `preview/${this.selected}/${this.account_name}/${this.accountNumber}/${this.amount}`
      );

      this.$router.push(
        `/preview/${this.selected}/${this.account_name}/${this.accountNumber}/${this.amount}`
      );
    },
  },
});
</script>
