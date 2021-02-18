<template>
  <div id="app">
    <h1 class="page-title">
      {{ data.newssite != null ? data.newssite.name : "Loading" }}
    </h1>
    <p
      v-for="dimension in data.dimension"
      :key="dimension.dimension_id"
      class="rating"
    >
      {{ dimension.name }}:
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SitePage",
  data() {
    return {
      avg_votes: null,
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
    getAverageVote() {
      let sorted_votes = {};
      let averages = {};
      for (let d of this.data.dimension) {
        sorted_votes[d.dimension_id] = [];
      }
      for (let v of this.data.vote) {
        sorted_votes[v.dimension_id].push(v);
      }
      for (let id in this.sorted_votes) {
        console.log(id);
        // const t = sorted_votes[id].reduce((acc, c) => acc + c, 0);
        // averages[id] = t / sorted_votes[id].length;
      }
      this.avg_votes = averages;
    },
  },
  async mounted() {
    await this.getData("newssite", `route=eq.${this.$route.params.sitename}`);
    await this.getData(
      "vote",
      `newssite_id=eq.${this.data.newssite.newssite_id}`
    );
    await this.getData("dimension", "");
    this.getAverageVote();
  },
};
</script>

<style scoped>
p.rating {
  background-color: #ff0000;
}
</style>
