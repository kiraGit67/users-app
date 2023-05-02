"use strict";

Vue.createApp({
  data() {
    return {
      h1text: "User Data",
      newFullName: "",
      newUserName: "",
      newUserEmail: "",
      newUserPhone: "",
      newUserWebsite: "",
      users: [],
    };
  },
  created() {
    this.getUserData();
  },
  methods: {
    async getUserData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const userData = await response.json();
      this.users = userData;
    },
  },
}).mount("#app");
