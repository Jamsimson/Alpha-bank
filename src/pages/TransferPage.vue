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
        <q-carousel-slide v-for="(item, index) in 2" :key="index" :name="index">
          <div class="">
            <q-card
              style="border-radius: 20px"
              class="bg-indigo-6 text-yellow-7"
            >
              <q-card-section>
                <div style="font-size: 15px">*** 1234</div>
                <div class="q-pt-md" style="font-size: 30px">$ 20000</div>
              </q-card-section>
            </q-card>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </section>
    <!-- section 3 -->
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
    console.log(alpha_database());
    return {
      friendList,
      database: alpha_database(),
      slide: ref(1),
      accounts: [],
    };
  },
  mounted() {
    this.accounts = this.database.g;
    console.log(this.accounts);
  },
});
</script>
