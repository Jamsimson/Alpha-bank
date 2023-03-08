<template>
  <q-page class="q-pa-md">
    <!-- section 1 -->
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
                  **** {{ accounts[index - 1].account_number }}
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
    <!-- section 2 -->
    <section>
      <div class="text-right">
        <q-btn-dropdown rounded color="grey" label="All">
          <q-list>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>January</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>Febuary</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>March</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
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
      accoutLength: 0,
      selected: ref(""),
      amount: ref(),
    };
  },
  created() {
    this.accounts = this.database.accounts;
    this.accoutLength = this.accounts.length;
  },
});
</script>
