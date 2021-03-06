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
        <rating
          :dimension="dimension"
          :site="site"
          v-for="dimension in dimensions"
          :key="dimension.name"
        />
      </div>
    </div>
    <refresh />
  </div>
</template>

<script>
import Refresh from "../components/Refresh.vue";
import Rating from "../components/Rating.vue";
export default {
  components: { Refresh, Rating },
  name: "SitePage",
  computed: {
    site() {
      return this.$store.state.newssite.filter(
        (r) => r.route == this.$route.params.site
      )[0];
    },
    dimensions() {
      return this.$store.state.dimension;
    },
  },
};
</script>

<style scoped>
.rate {
  width: 100%;
  margin-top: 20px;
  /* padding-top: 20px; */
}
#ratings {
  display: flex;
  justify-content: space-between;
  min-height: 90%;
  flex-grow: 1;
  max-width: 100%;
  height: 500px;
}
.dimension {
  margin-top: 30px;
  background-color: white;
  /* width: 200px; */
  padding: 20px;
  border-radius: 5px;
  flex-grow: 1;
  border: 5px solid #afafaf;
}
#body {
  margin: 50px 50px;
  display: flex !important;
  justify-content: start;
}
#head {
  margin-top: 40px;
  justify-content: start;
  align-items: center;
  margin-left: 50px;
}
.ratelabel {
  text-align: center;
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
