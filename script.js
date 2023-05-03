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
      currentSearch: "",
      users: [],
    };
  },
  created() {
    this.getUserData();
  },
  computed: {
    filteredList() {
      return this.users.filter(
        (user) =>
          user.name.includes(this.currentSearch) ||
          user.address.city.includes(this.currentSearch) ||
          user.email.includes(this.currentSearch) ||
          user.website.includes(this.currentSearch) ||
          user.company.name.includes(this.currentSearch)
      );
    },
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
