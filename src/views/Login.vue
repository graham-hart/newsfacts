<template>
  <div id="app">
    <span>
      <select id="login" name="id" v-model="id">
        <option disabled value="">PLEASE SELECT A USER</option>
        <option
          v-for="user in users"
          :key="user.username"
          :value="user.person_id"
        >
          {{ user.person_id }} - {{ user.username }}
        </option>
      </select>
      <br />
      <button @click="login()">Submit</button>
    </span>
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
    login() {
      this.$store.state.user = {
        person_id: this.id,
      };
    },
  },
  computed: {
    users() {
      return this.$store.state.person;
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
