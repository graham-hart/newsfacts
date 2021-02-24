<template>
  <div id="app">
    <div id="head">
      <h1 class="site-title" :key="site.id">
        {{ site != null ? site.name : "ERROR: SITE NOT FOUND" }}
      </h1>
      <a :href="site.url" target="_blank">Go To {{ site.name }} </a>
    </div>
    <div id="body" class="flex-row">
      <div id="ratings" class="flex-column">
        <h2>Ratings:</h2>
        <div class="dimension" v-for="d in dimensions" :key="d.id">
          <b>{{ d.name }}:</b>
          <span
            v-if="
              votes.filter((r) => r.dimension_id == d.dimension_id).length > 0
            "
          >
            <br />
            {{ averageVotes[d.dimension_id] }}
            out of
            {{ votes.filter((r) => r.dimension_id == d.dimension_id).length }}
            votes
          </span>
          <span v-else><br />No votes</span>
          <label :for="`${d.name}slider`">{{ d.name }}</label>
          <input
            type="range"
            :min="d.range_min"
            :max="d.range_max"
            value="0"
            step="1"
            :name="`${d.name}slider`"
          />
        </div>
      </div>
    </div>
    <refresh />
  </div>
</template>

<script>
import Refresh from "../components/Refresh.vue";
export default {
  components: { Refresh },
  name: "SitePage",
  computed: {
    site() {
      return this.$store.state.newssite.filter(
        (r) => r.route == this.$route.params.site
      )[0];
    },
    votes() {
      return this.$store.state.vote.filter(
        (r) => r.newssite_id == this.site.newssite_id
      );
    },
    dimensions() {
      return this.$store.state.dimension;
    },
    averageVotes() {
      let sumAll = {};
      let numAll = {};
      let avgAll = {};
      for (let d of this.dimensions) {
        sumAll[d.dimension_id] = 0;
        numAll[d.dimension_id] = 0;
      }
      for (let vote of this.votes) {
        sumAll[vote.dimension_id] += vote.score;
        numAll[vote.dimension_id] += 1;
      }
      for (let key in sumAll) {
        avgAll[key] = sumAll[key] / numAll[key];
      }
      return avgAll;
    },
  },
};
</script>

<style scoped>
#ratings {
  min-width: 25%;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  min-height: 90%;
  flex-grow: 3;
  min-width: 20%;
  height: 500px;
}
.dimension {
  margin-top: 30px;
  background-color: white;
  width: 200px;
  padding: 20px;
  border-radius: 5px;
  flex-grow: 1;
  border: 5px solid #afafaf;
}
#body {
  margin-top: 50px;
  display: flex !important;
  justify-content: start;
  margin-left: 50px;
}
#head {
  margin-top: 40px;
  justify-content: start;
  align-items: center;
  margin-left: 50px;
}
.site-title {
  text-align: left;
  font-family: NotoSans-Black;
}
a {
  font-size: 25px;
  font-weight: 450 !important;
}
</style>
