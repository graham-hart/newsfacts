<template>
  <div id="app">
    <h1>Search</h1>
    <input
      v-model="searchval"
      type="text"
      placeholder="Search..."
      class="searchbar"
      onchange="search"
    />
    <SiteDiv
      v-for="site in matching_site_list"
      :key="site.site_id"
      :site="site"
    />
  </div>
</template>

<script>
import axios from "axios";
import SiteDiv from "../components/SiteDiv.vue";
export default {
  name: "Search",
  components: {
    SiteDiv,
  },
  data() {
    return {
      site_list: null,
      searchval: "",
      matching_site_list: null,
      db_url: "http://localhost:3000",
    };
  },
  mounted() {
    axios.get(`${this.db_url}/newssite`).then((r) => {
      this.site_list = r.data;
    });
    this.search();
  },
  methods: {
    search() {
      this.matching_site_list = [];
      console.log("e");
      for (let site in this.site_list) {
        if (site.name.toLowerCase().includes(this.searchval)) {
          this.matching_site_list.push(site);
          console.log(site);
        }
      }
    },
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
