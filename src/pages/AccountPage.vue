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
    <!-- section 3 -->
    <section>
      <div class="q-pa-md">
        <!-- History titile -->
        <div class="text-h6 text-weight-bold">History</div>
        <!-- history today -->
        <div class="text-body1">Today</div>
        <!-- list Today -->
        <q-separator spaced />
        <q-list v-for="today in todays" :key="today.time">
          <q-item>
            <q-item-section top avatar class="flex flex-center">{{
              today.time
            }}</q-item-section>
            <q-item-section top avatar>
              <q-avatar
                :color="today.color"
                text-color="white"
                :icon="today.icon"
              />
            </q-item-section>
            <q-item-section>
              <q-item-label>Receipt of funds</q-item-label>
              <q-item-label caption lines="2"> 545646788678686 </q-item-label>
            </q-item-section>
            <q-item-section side top text class="flex flex-center">
              {{ today.total }}
            </q-item-section>
          </q-item>
          <q-separator spaced />
        </q-list>
        <!-- history Yesterday -->
        <div class="text-body1">Yesterday</div>
        <!-- list Yesterday -->
        <q-separator spaced />
        <q-list v-for="yesterday in yesterdays" :key="yesterday.time">
          <q-item>
            <q-item-section top avatar class="flex flex-center">{{
              yesterday.time
            }}</q-item-section>
            <q-item-section top avatar>
              <q-avatar
                :color="yesterday.color"
                text-color="white"
                :icon="yesterday.icon"
              />
            </q-item-section>
            <q-item-section>
              <q-item-label>Receipt of funds</q-item-label>
              <q-item-label caption lines="2"> 545646788678686 </q-item-label>
            </q-item-section>
            <q-item-section side top class="flex flex-center">
              {{ yesterday.total }}
            </q-item-section>
          </q-item>
          <q-separator spaced />
        </q-list>
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
      todays: [
        {
          time: "16:34",
          color: "green-12",
          icon: "arrow_circle_left",
          total: "+ 400$",
          total_color: "red",
        },
        {
          time: "16:34",
          color: "red",
          icon: "arrow_circle_right",
          total: "+ 400$",
        },
        {
          time: "16:34",
          color: "green-12",
          icon: "arrow_circle_left",
          total: "+ 400$",
        },
      ],
      yesterdays: [
        {
          time: "12:21",
          color: "green-12",
          icon: "arrow_circle_left",
          total: "+ 425$",
          total_color: "red",
        },
        {
          time: "7:47",
          color: "green-12",
          icon: "arrow_circle_left",
          total: "+ 844$",
        },
        {
          time: "7:47",
          color: "green-12",
          icon: "arrow_circle_left",
          total: "+ 400$",
        },
      ],
    };
  },
  created() {
    this.accounts = this.database.accounts;
    this.accoutLength = this.accounts.length;
  },
});
</script>
