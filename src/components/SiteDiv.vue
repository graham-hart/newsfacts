<template>
  <div id="app">
    <div id="site">
      <h1>{{ site.name }}</h1>
      <a :href="site.url" target="_blank">Site</a>
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
    axios
      .get(`${this.db_url}/vote?newssite_id=eq.${this.site.newssite_id}`)
      .then((r) => {
        this.votes = r.data;
        console.log(r);
      });
  },
  // computed: {
  // 	average_votes() {
  // 		votes = {}
  // 		for(let v of this.votes) {
  // 			if(v.dimension)
  // 		}
  // 	}
  // },
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
</style>
