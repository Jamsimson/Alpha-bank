<template>
  <q-page v-if="name">
    <q-card>
      <q-card-section>
        <div class="text-h6">Welcome {{ name }}</div>
      </q-card-section>
    </q-card>
    <q-card v-for="item in account" :key="item.id" class="q-ma-md">
      <q-card-section>
        <div class="text-h6">Balance</div>
        <div class="text-subtitle2">{{ item.balance }}</div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { collection, query, where, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "@firebase/auth";

export default defineComponent({
  name: "IndexPage",
  created() {},
  async mounted() {
    onAuthStateChanged(this.$auth, async (user) => {
      if (user) {
        // uid = user.uid;
        // console.log(uid);
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
          // get account data from another collection
          q = query(
            collection(this.$db, "accounts"),
            where("owner", "==", doc.id)
          );
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            this.account.push(doc.data());
          });
        });
      } else {
        this.$router.push("/start");
      }
    });
  },
  data() {
    return {
      name: "",
      account: [],
    };
  },
});
</script>
