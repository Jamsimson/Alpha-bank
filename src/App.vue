<template>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";
import { alpha_database } from "./stores/database";
import { collection, query, where, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "@firebase/auth";

export default defineComponent({
  name: "App",
  async beforeCreate() {
    onAuthStateChanged(this.$auth, async (user) => {
      if (user) {
        console.log("this is app page");
        // uid = user.uid;
        // console.log(uid);
        this.database.setSignedInUser(user);
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
            this.balance += doc.data().balance;
            this.database.setUsername(this.name);
            this.database.setAccount(this.account);
          });
        });
      } else {
        this.$router.push("start");
      }
    });
  },
  data() {
    return {
      database: alpha_database(),
      name: "",
      account: [],
      balance: 0,
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
});
//   async methods() {
//     const id = this.$route.params.id;
//     console.log(id);
//   },
</script>
