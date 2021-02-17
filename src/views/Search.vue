<template>
  <div id="app">
    <h1>Search</h1>
    <p>{{ site_list }}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  components: {},
  data() {
    return {
      site_list: null,
      db_url: "http://localhost:3000",
    };
  },
  mounted() {
    axios.get(`${this.db_url}/newssite`).then((r) => {
      this.site_list = r.data;
      console.log(r);
    });
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
