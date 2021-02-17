<template>
  <div id="app">
    <div id="site">
      <router-link
        class="sitepagelink"
        tag="h1"
        :to="`sites/${site.name.toLowerCase().replace(' ', '')}`"
        >{{ site.name }}</router-link
      >
      <p>Bias: {{ votes }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SiteDiv",
  components: {},
  props: {
    site: Map,
  },
  data() {
    return {
      votes: null,
      db_url: "http://localhost:3000",
    };
  },
  mounted() {
    this.getSiteData();
  },
  methods: {
    getSiteData() {
      axios
        .get(`${this.db_url}/vote?newssite_id=eq.${this.site.newssite_id}`)
        .then((r) => {
          this.votes = r.data;
          console.log(r);
        });
    },
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
#site {
  background-color: #ff0000;
  width: 40%;
  margin: 100px auto;
}
.sitepagelink {
  cursor: pointer;
}
</style>
