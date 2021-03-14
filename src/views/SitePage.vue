<template>
  <div id="app">
    <div id="head">
      <h1 class="site-title" :key="site.name">
        {{ site != null ? site.name : "ERROR: SITE NOT FOUND" }}
      </h1>
      <a :href="site.url" target="_blank">Go To {{ site.name }} </a>
    </div>
    <div id="body">
      <div id="ratings" class="flex-column">
        <h2>Ratings</h2>
        <div id="ratingContainer" v-if="!$vuetify.breakpoint.xs">
          <selector
            @changeSelection="changeRateSelection($event)"
            :values="categoryNames"
          />
          <span v-for="category in categories" :key="category.name">
            <rating
              :category="category"
              :site="site"
              v-if="category.name == categoryNames[rateSelection]"
              :key="rateSelection"
            />
          </span>
        </div>
        <span id="ratingContainer" v-else>
          <rating
            v-for="category in categories"
            :key="category.name"
            :category="category"
            :site="site"
          />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Rating from "../components/Rating.vue";
import Selector from "@/components/Selector.vue";
export default {
  components: { Rating, Selector },
  name: "SitePage",
  data() {
    return {
      rateSelection: 0,
    };
  },
  methods: {
    changeRateSelection(sel) {
      this.rateSelection = sel;
    },
  },
  computed: {
    site() {
      return this.$store.state.newssite.filter(
        (r) => r.route == this.$route.params.site
      )[0];
    },
    categories() {
      return this.$store.state.category;
    },
    categoryNames() {
      console.log();
      return this.categories.map((v) => v.name);
    },
  },
};
</script>

<style scoped>
.rate {
  width: 100%;
  margin-top: 20px;
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
  justify-content: start;
}
#head {
  /* margin-top: 40px; */
  padding-top: 20px;
  justify-content: start;
  align-items: center;
  margin-left: 50px;
}
.ratelabel {
  text-align: center;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-weight: 900;
}
a {
  font-size: 25px;
  font-weight: 450 !important;
}
#ratingContainer {
  border: 5px solid #e1e1e1;
  width: 100%;
  margin: auto;
}
</style>
