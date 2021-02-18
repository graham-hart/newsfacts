<template>
  <div id="app">
    <h1>{{ data.newssite.name }}</h1>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SitePage",
  data() {
    return {
      data: {
        newssite: null,
        vote: null,
        dimension: null,
      },
      db_url: "http://localhost:3000",
    };
  },
  methods: {
    async getData(endpoint, query) {
      await axios.get(`${this.db_url}/${endpoint}?${query}`).then((r) => {
        let data;
        if (endpoint == "newssite") {
          data = r.data[0];
        } else {
          data = r.data;
        }
        this.data[endpoint] = data;
      });
    },
  },
  async mounted() {
    await this.getData("newssite", `route=eq.${this.$route.params.sitename}`);
    this.getData("vote", `newssite_id=eq.${this.data.newssite.newssite_id}`);
    this.getData("dimension", "");
  },
};
</script>

<style>
</style>
