<template>
  <div id="app">
    <div v-if="!$auth.loading">
      <button v-if="!$auth.isAuthenticated" @click="login">Log in</button>
      <button v-else @click="logout">Log out</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      id: "",
    };
  },
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.path,
      });
    },
  },
};
</script>

<style scoped>
#login {
  /* width: 100px; */
  color: black;
}
option {
  color: black;
}
</style>
