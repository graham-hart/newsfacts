<template>
  <div id="app">
    <div id="head">
      <h1 class="site-title" :key="site.name">
        {{ site != null ? site.name : "ERROR: SITE NOT FOUND" }}
      </h1>
      <a :href="site.url" target="_blank">Go To {{ site.name }} </a>
    </div>
    <div id="body" class="flex-row">
      <div id="ratings" class="flex-column">
        <h2>Ratings:</h2>
        <rating
          :category="category"
          :site="site"
          v-for="category in categories"
          :key="category.name"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Rating from "../components/Rating.vue";
export default {
  components: { Rating },
  name: "SitePage",
  computed: {
    site() {
      return this.$store.state.newssite.filter(
        (r) => r.route == this.$route.params.site
      )[0];
    },
    categories() {
      return this.$store.state.category;
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
