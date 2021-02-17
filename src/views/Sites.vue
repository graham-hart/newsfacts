<template>
  <div id="app">
    <h1>Sites</h1>
    <SiteDiv v-for="site in site_list" :key="site.site_id" :site="site" />
  </div>
</template>

<script>
import axios from "axios";
import SiteDiv from "../components/SiteDiv.vue";
export default {
  name: "Sites",
  components: {
    SiteDiv,
  },
  data() {
    return {
      site_list: null,
      db_url: "http://localhost:3000",
    };
  },
  mounted() {
    this.getSites();
  },
  methods: {
    getSites() {
      axios.get(`${this.db_url}/newssite`).then((r) => {
        this.site_list = r.data;
      });
    },
  },
};
</script>

<style scoped>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.searchbar {
  padding: 10px;
  border: 1px solid black;
  margin-top: 20px;
  width: 25%;
}
</style>
