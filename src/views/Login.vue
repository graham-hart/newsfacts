<template>
  <div id="app">
    <span id="login" :v-if="getEmail() == null">
      <input name="email" type="text" placeholder="Email..." v-model="email" />
      <button @click="setEmail()">Submit</button>
    </span>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: null,
    };
  },
  methods: {
    getEmail() {
      return localStorage.getItem("email");
    },
    setEmail() {
      localStorage.setItem("email", this.email);
      this.$store.commit("createUser", this.email);
    },
  },
};
</script>

<style scoped>
</style>
