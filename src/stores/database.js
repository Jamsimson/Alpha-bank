import { defineStore } from "pinia";
export const alpha_database = defineStore({
  id: "counter",
  state: () => ({
    username: null,
    accounts: [],
    counter: 1,
    user: [],
  }),
  actions: {
    getDataById(id) {
      for (var i = 0; i < this.user.length; i++) {
        if (id === this.user[i].id) {
          return this.user[i];
        }
      }
      return `not found`;
    },
    setUsername(username) {
      this.username = username;
      console.log(`set username ${username}`);
    },
    setAccount(accounts) {
      this.accounts = accounts;
      for (var i = 0; i < this.accounts.length; i++) {
        console.log(`set accounts ${accounts[i].id} ${accounts[i].balance}`);
      }
    },
    setSignedInUser(user) {
      this.user = user;
      console.log(`set user ${user}`);
    },
  },
});
